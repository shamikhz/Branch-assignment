import {
  Choice,
  ClueConnection,
  CompletedRunSummary,
  Condition,
  Effect,
  Episode,
  GameState,
  RunComparisonDiff,
} from '@/features/episodes/types';

/**
 * Initializes a new clean GameState for a given Episode.
 */
export function createInitialGameState(episode: Episode): GameState {
  const initialScenario = episode.scenarios[episode.initialScenarioId];
  const initialClues = initialScenario?.cluesDiscovered ?? [];

  return {
    episodeId: episode.id,
    currentScenarioId: episode.initialScenarioId,
    discoveredClueIds: [...initialClues],
    examinedClueIds: [],
    formedConnectionIds: [],
    flags: {},
    variables: {},
    decisionHistory: [],
    selectedEvidenceForHypothesis: [],
    isCompleted: false,
    startedAt: Date.now(),
    updatedAt: Date.now(),
  };
}

/**
 * Evaluates a single condition against current game state.
 */
export function evaluateCondition(
  condition: Condition,
  state: GameState,
  episode: Episode
): boolean {
  switch (condition.type) {
    case 'hasFlag':
      return Boolean(condition.target && state.flags[condition.target]);

    case 'notFlag':
      return !Boolean(condition.target && state.flags[condition.target]);

    case 'hasClue':
      return Boolean(condition.target && state.discoveredClueIds.includes(condition.target));

    case 'notClue':
      return !Boolean(condition.target && state.discoveredClueIds.includes(condition.target));

    case 'hasConnection':
      return Boolean(condition.target && state.formedConnectionIds.includes(condition.target));

    case 'minVariable': {
      if (!condition.target) return true;
      const currentVal = state.variables[condition.target] ?? 0;
      const targetVal = typeof condition.value === 'number' ? condition.value : 1;
      return currentVal >= targetVal;
    }

    case 'maxVariable': {
      if (!condition.target) return true;
      const currentVal = state.variables[condition.target] ?? 0;
      const targetVal = typeof condition.value === 'number' ? condition.value : 0;
      return currentVal <= targetVal;
    }

    case 'hypothesisValidated': {
      return Boolean(condition.target && state.activeHypothesisId === condition.target);
    }

    case 'scenarioVisited': {
      return Boolean(
        condition.target &&
          (state.currentScenarioId === condition.target ||
            state.decisionHistory.some((d) => d.scenarioId === condition.target))
      );
    }

    case 'all': {
      if (!condition.subConditions || condition.subConditions.length === 0) return true;
      return condition.subConditions.every((sub) => evaluateCondition(sub, state, episode));
    }

    case 'any': {
      if (!condition.subConditions || condition.subConditions.length === 0) return false;
      return condition.subConditions.some((sub) => evaluateCondition(sub, state, episode));
    }

    default:
      return true;
  }
}

/**
 * Determines whether a choice can be selected, returning reason if locked.
 */
export function canMakeChoice(
  choice: Choice,
  state: GameState,
  episode: Episode
): { allowed: boolean; reason?: string } {
  if (!choice.conditions || choice.conditions.length === 0) {
    return { allowed: true };
  }

  for (const cond of choice.conditions) {
    const passed = evaluateCondition(cond, state, episode);
    if (!passed) {
      if (choice.lockReason) {
        return { allowed: false, reason: choice.lockReason };
      }

      // Default explanatory messages
      if (cond.type === 'hasClue' && cond.target) {
        const clue = episode.clues[cond.target];
        const clueName = clue ? `"${clue.title}"` : 'required evidence';
        return { allowed: false, reason: `Requires finding ${clueName}` };
      }
      if (cond.type === 'hasConnection') {
        return { allowed: false, reason: 'Requires connecting relevant deductions in your notebook first' };
      }
      if (cond.type === 'hasFlag') {
        return { allowed: false, reason: 'Prerequisite line of questioning or action incomplete' };
      }
      if (cond.type === 'scenarioVisited') {
        return { allowed: false, reason: 'Requires having investigated a previous location first' };
      }
      return { allowed: false, reason: 'Requirements not yet met' };
    }
  }

  return { allowed: true };
}

/**
 * Applies a list of effects to game state, returning updated state and generated event messages.
 */
export function applyEffects(
  effects: Effect[] | undefined,
  state: GameState
): { nextState: GameState; events: string[] } {
  if (!effects || effects.length === 0) {
    return { nextState: state, events: [] };
  }

  const newFlags = { ...state.flags };
  const newVariables = { ...state.variables };
  const newDiscoveredClues = new Set(state.discoveredClueIds);
  const events: string[] = [];

  for (const effect of effects) {
    switch (effect.type) {
      case 'setFlag': {
        const val = effect.value !== undefined ? Boolean(effect.value) : true;
        newFlags[effect.target] = val;
        if (effect.description) events.push(effect.description);
        break;
      }
      case 'clearFlag': {
        delete newFlags[effect.target];
        if (effect.description) events.push(effect.description);
        break;
      }
      case 'incrementVariable': {
        const delta = typeof effect.value === 'number' ? effect.value : 1;
        newVariables[effect.target] = (newVariables[effect.target] ?? 0) + delta;
        if (effect.description) events.push(effect.description);
        break;
      }
      case 'decrementVariable': {
        const delta = typeof effect.value === 'number' ? effect.value : 1;
        newVariables[effect.target] = (newVariables[effect.target] ?? 0) - delta;
        if (effect.description) events.push(effect.description);
        break;
      }
      case 'unlockClue': {
        if (!newDiscoveredClues.has(effect.target)) {
          newDiscoveredClues.add(effect.target);
          events.push(`New clue recorded: ${effect.target}`);
        }
        break;
      }
      case 'addLead': {
        if (effect.description) events.push(effect.description);
        break;
      }
      case 'markMissedOpportunity': {
        events.push(effect.description ?? `Missed lead: ${effect.target}`);
        break;
      }
      case 'recordContradiction': {
        events.push(effect.description ?? `Contradiction identified: ${effect.target}`);
        break;
      }
      case 'triggerConsequence': {
        if (effect.description) events.push(effect.description);
        break;
      }
    }
  }

  return {
    nextState: {
      ...state,
      flags: newFlags,
      variables: newVariables,
      discoveredClueIds: Array.from(newDiscoveredClues),
      updatedAt: Date.now(),
    },
    events,
  };
}

/**
 * Transitions from the current scenario to destination via choiceId.
 */
export function transitionScenario(
  choiceId: string,
  state: GameState,
  episode: Episode
): { nextState: GameState; newlyDiscoveredClues: string[]; events: string[] } {
  if (state.isCompleted) {
    throw new Error('Cannot make a choice in a completed investigation run');
  }

  const currentScenario = episode.scenarios[state.currentScenarioId];
  if (!currentScenario) {
    throw new Error(`Current scenario ${state.currentScenarioId} not found in episode`);
  }

  const choice = currentScenario.choices.find((c) => c.id === choiceId);
  if (!choice) {
    throw new Error(`Choice ${choiceId} does not belong to scenario ${currentScenario.id}`);
  }

  const check = canMakeChoice(choice, state, episode);
  if (!check.allowed) {
    throw new Error(`Cannot choose locked option: ${check.reason}`);
  }

  // 1. Apply Choice Effects
  const { nextState: stateAfterEffects, events: choiceEvents } = applyEffects(choice.effects, state);

  // 2. Resolve Destination Scenario
  const destinationId = choice.destinationId || (choice as any).nextScenarioId;
  if (!destinationId) {
    throw new Error(`Choice ${choice.id} has no valid destination`);
  }
  const destScenario = episode.scenarios[destinationId];
  if (!destScenario) {
    throw new Error(`Destination scenario ${destinationId} does not exist in episode`);
  }

  // 3. Apply Destination Entry Effects (if any)
  const { nextState: stateAfterEntryEffects, events: entryEvents } = applyEffects(
    destScenario.entryEffects,
    stateAfterEffects
  );
  const combinedEvents = [...choiceEvents, ...entryEvents];

  // 4. Collect Clues revealed in destination scenario
  const newlyDiscoveredClues: string[] = [];
  const discoveredSet = new Set(stateAfterEntryEffects.discoveredClueIds);
  const cluesToDiscover = destScenario.cluesDiscovered || (destScenario as any).evidenceGathered;

  if (cluesToDiscover) {
    for (const clueId of cluesToDiscover) {
      if (episode.clues[clueId] && !discoveredSet.has(clueId)) {
        discoveredSet.add(clueId);
        newlyDiscoveredClues.push(clueId);
      }
    }
  }

  // 5. Update Decision History
  const decisionRecord = {
    scenarioId: currentScenario.id,
    choiceId: choice.id,
    choiceText: choice.text,
    timestamp: Date.now(),
    consequencesSummary: combinedEvents.length > 0 ? combinedEvents : undefined,
  };

  const isEnding = Boolean(destScenario.isEnding || destScenario.endingId || (destScenario as any).type === 'conclusion' || episode.endings[destScenario.id]);
  const endingId = destScenario.endingId || (episode.endings[destScenario.id] ? destScenario.id : undefined);

  const nextState: GameState = {
    ...stateAfterEntryEffects,
    currentScenarioId: destScenario.id,
    discoveredClueIds: Array.from(discoveredSet),
    decisionHistory: [...stateAfterEntryEffects.decisionHistory, decisionRecord],
    isCompleted: isEnding,
    endingId: isEnding ? endingId : stateAfterEntryEffects.endingId,
    updatedAt: Date.now(),
  };

  return {
    nextState,
    newlyDiscoveredClues,
    events: combinedEvents,
  };
}

/**
 * Marks a clue as examined in the detective's notebook.
 */
export function examineClue(clueId: string, state: GameState): GameState {
  if (state.examinedClueIds.includes(clueId)) {
    return state;
  }
  return {
    ...state,
    examinedClueIds: [...state.examinedClueIds, clueId],
    updatedAt: Date.now(),
  };
}

/**
 * Attempts to connect two clues in the notebook to form a deduction.
 */
export function attemptClueConnection(
  clueAId: string,
  clueBId: string,
  state: GameState,
  episode: Episode
): {
  success: boolean;
  connection?: ClueConnection;
  message: string;
  nextState: GameState;
} {
  if (clueAId === clueBId) {
    return {
      success: false,
      message: 'You cannot connect a clue to itself.',
      nextState: state,
    };
  }

  // Check if already connected
  const matchingConn = episode.connections.find(
    (c) =>
      (c.clueA === clueAId && c.clueB === clueBId) ||
      (c.clueA === clueBId && c.clueB === clueAId)
  );

  if (!matchingConn) {
    return {
      success: false,
      message: 'These two pieces of evidence do not reveal an immediate correlation.',
      nextState: state,
    };
  }

  if (state.formedConnectionIds.includes(matchingConn.id)) {
    return {
      success: true,
      connection: matchingConn,
      message: 'This connection has already been established in your deduction journal.',
      nextState: state,
    };
  }

  // Apply connection perks: unlocked flags or clues
  const newFlags = { ...state.flags };
  if (matchingConn.unlockedFlag) {
    newFlags[matchingConn.unlockedFlag] = true;
  }

  const newDiscoveredClues = new Set(state.discoveredClueIds);
  if (matchingConn.unlockedClueId && episode.clues[matchingConn.unlockedClueId]) {
    newDiscoveredClues.add(matchingConn.unlockedClueId);
  }

  const nextState: GameState = {
    ...state,
    flags: newFlags,
    discoveredClueIds: Array.from(newDiscoveredClues),
    formedConnectionIds: [...state.formedConnectionIds, matchingConn.id],
    updatedAt: Date.now(),
  };

  return {
    success: true,
    connection: matchingConn,
    message: `Deduction Formed: "${matchingConn.deductionTitle}"`,
    nextState,
  };
}

/**
 * Evaluates a player's submitted hypothesis with their chosen supporting evidence.
 */
export function evaluateHypothesis(
  hypothesisId: string,
  selectedEvidenceIds: string[],
  state: GameState,
  episode: Episode
): {
  valid: boolean;
  endingId: string;
  feedback: string;
  accuracyScore: number;
  nextState: GameState;
} {
  const hypothesis = episode.hypotheses[hypothesisId];
  if (!hypothesis) {
    throw new Error(`Hypothesis ${hypothesisId} not found in episode`);
  }

  const selectedSet = new Set(selectedEvidenceIds);
  const hasAllRequired = hypothesis.requiredClueIds.every((id) => selectedSet.has(id));
  const hasDisqualifiers = hypothesis.disqualifyingClueIds.some((id) => selectedSet.has(id));

  // Accuracy calculation based on evidence strength and truth alignment
  let score = 0;
  if (hypothesis.isValidTruth) {
    const matchedCount = hypothesis.requiredClueIds.filter((id) => selectedSet.has(id)).length;
    const totalRequired = hypothesis.requiredClueIds.length;
    score = Math.round((matchedCount / (totalRequired || 1)) * 100);
  } else {
    // False hypothesis capped score
    score = Math.max(10, 45 - hypothesis.disqualifyingClueIds.filter((id) => selectedSet.has(id)).length * 15);
  }

  const isFlawless = hypothesis.isValidTruth && hasAllRequired && !hasDisqualifiers;

  const endingId = isFlawless ? hypothesis.successEndingId : hypothesis.failureEndingId;
  const feedback = isFlawless
    ? 'Your deductive reasoning is supported by airtight evidence.'
    : hypothesis.flawExplanation || 'Your argument leaves significant logical vulnerabilities or overlooks crucial counter-evidence.';

  const endingScenario = Object.values(episode.scenarios).find((s) => s.endingId === endingId);

  const nextState: GameState = {
    ...state,
    activeHypothesisId: hypothesisId,
    selectedEvidenceForHypothesis: [...selectedEvidenceIds],
    currentScenarioId: endingScenario ? endingScenario.id : state.currentScenarioId,
    isCompleted: true,
    endingId,
    updatedAt: Date.now(),
  };

  return {
    valid: isFlawless,
    endingId,
    feedback,
    accuracyScore: score,
    nextState,
  };
}

/**
 * Creates a CompletedRunSummary from finished state.
 */
export function finalizeRun(state: GameState, episode: Episode): CompletedRunSummary {
  const endingId = state.endingId || 'ending-inconclusive';
  const ending = episode.endings[endingId] || {
    id: endingId,
    title: 'Inconclusive Inquiry',
    tier: 'compromised',
    badge: 'INCONCLUSIVE',
    narrative: ['The investigation ended without sufficient proof to sustain formal charges.'],
    summary: 'The trail grew cold.',
    criteriaReview: {
      theTruth: 'The full chain of custody remained unproven.',
      yourDeduction: 'You were unable to secure definitive evidence.',
      accuracyRate: 35,
      keyDiscoveries: [],
      missedOpportunities: ['Key suspect interrogations and lock mechanics were skipped.'],
      reasoningCritique: 'Observation was incomplete.',
    },
  };

  const totalClues = Object.keys(episode.clues).length;
  const totalConns = episode.connections.length;

  return {
    runId: `run-${state.startedAt}-${Math.floor(Math.random() * 10000)}`,
    episodeId: episode.id,
    episodeTitle: episode.title,
    completedAt: Date.now(),
    durationMs: Date.now() - state.startedAt,
    endingId,
    endingTitle: ending.title,
    endingTier: ending.tier,
    accuracyScore: ending.criteriaReview.accuracyRate,
    cluesDiscoveredCount: state.discoveredClueIds.length,
    totalCluesCount: totalClues,
    connectionsCount: state.formedConnectionIds.length,
    totalConnectionsCount: totalConns,
    decisionsCount: state.decisionHistory.length,
    decisionHistory: [...state.decisionHistory],
    discoveredClueIds: [...state.discoveredClueIds],
    formedConnectionIds: [...state.formedConnectionIds],
    endingCriteriaReview: ending.criteriaReview,
  };
}

/**
 * Computes a detailed, objective side-by-side comparison between two completed runs.
 */
export function compareCompletedRuns(
  runA: CompletedRunSummary,
  runB: CompletedRunSummary,
  episode?: Episode
): RunComparisonDiff {
  const setA = new Set(runA.discoveredClueIds);
  const setB = new Set(runB.discoveredClueIds);

  const cluesShared = runA.discoveredClueIds.filter((id) => setB.has(id));
  const cluesExclusiveToA = runA.discoveredClueIds.filter((id) => !setB.has(id));
  const cluesExclusiveToB = runB.discoveredClueIds.filter((id) => !setA.has(id));

  const connSetB = new Set(runB.formedConnectionIds);
  const connSetA = new Set(runA.formedConnectionIds);
  const connectionsExclusiveToA = runA.formedConnectionIds.filter((id) => !connSetB.has(id));
  const connectionsExclusiveToB = runB.formedConnectionIds.filter((id) => !connSetA.has(id));

  // Find divergence point in decision histories
  let sharedDecisionsCount = 0;
  let divergencePoint: { scenarioId: string; choiceA: string; choiceB: string } | undefined;

  const minLen = Math.min(runA.decisionHistory.length, runB.decisionHistory.length);
  for (let i = 0; i < minLen; i++) {
    const decA = runA.decisionHistory[i];
    const decB = runB.decisionHistory[i];

    if (decA.scenarioId === decB.scenarioId && decA.choiceId === decB.choiceId) {
      sharedDecisionsCount++;
    } else {
      divergencePoint = {
        scenarioId: decA.scenarioId,
        choiceA: decA.choiceText,
        choiceB: decB.choiceText,
      };
      break;
    }
  }

  return {
    runA,
    runB,
    sharedDecisionsCount,
    divergencePoint,
    cluesExclusiveToA,
    cluesExclusiveToB,
    cluesShared,
    connectionsExclusiveToA,
    connectionsExclusiveToB,
    endingADetails: { title: runA.endingTitle, tier: runA.endingTier },
    endingBDetails: { title: runB.endingTitle, tier: runB.endingTier },
    accuracyDelta: runA.accuracyScore - runB.accuracyScore,
  };
}

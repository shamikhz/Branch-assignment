import { z } from 'zod';
import { Episode } from '@/features/episodes/types';

// Zod Schema definitions for Episode format
export const ConditionSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    type: z.enum([
      'hasFlag',
      'notFlag',
      'hasClue',
      'notClue',
      'minVariable',
      'maxVariable',
      'hasConnection',
      'hypothesisValidated',
      'scenarioVisited',
      'all',
      'any',
    ]),
    target: z.string().optional(),
    value: z.union([z.string(), z.number(), z.boolean()]).optional(),
    subConditions: z.array(ConditionSchema).optional(),
  })
);

export const EffectSchema = z.object({
  type: z.enum([
    'setFlag',
    'clearFlag',
    'incrementVariable',
    'decrementVariable',
    'unlockClue',
    'addLead',
    'triggerConsequence',
    'markMissedOpportunity',
    'recordContradiction',
  ]),
  target: z.string().min(1, 'Target identifier required'),
  value: z.union([z.string(), z.number(), z.boolean()]).optional(),
  description: z.string().optional(),
});

export const ChoiceSchema = z.object({
  id: z.string().min(1, 'Choice ID required'),
  text: z.string().min(1, 'Choice text required'),
  destinationId: z.string().min(1, 'Destination scenario ID required'),
  consequencePreview: z.enum(['Direct', 'Subtle', 'Inquisitive', 'Risky', 'Deductive', 'Forensic']).optional(),
  conditions: z.array(ConditionSchema).optional(),
  effects: z.array(EffectSchema).optional(),
  isMissableLead: z.boolean().optional(),
  lockReason: z.string().optional(),
  flavor: z.string().optional(),
});

export const DialogueLineSchema = z.object({
  speaker: z.string().min(1),
  text: z.string().min(1),
  mood: z.enum(['nervous', 'defiant', 'calm', 'evasive', 'grief', 'intrigued', 'shaken']).optional(),
});

export const ScenarioSchema = z.object({
  id: z.string().min(1, 'Scenario ID required'),
  title: z.string().min(1, 'Title required'),
  location: z.string().min(1, 'Location required'),
  narrative: z.array(z.string()).min(1, 'At least one narrative paragraph required'),
  dialogue: z.array(DialogueLineSchema).optional(),
  cluesDiscovered: z.array(z.string()).optional(),
  entryEffects: z.array(EffectSchema).optional(),
  choices: z.array(ChoiceSchema),
  isEnding: z.boolean().optional(),
  endingId: z.string().optional(),
  ambientSound: z.string().optional(),
  investigationLeadId: z.string().optional(),
});

export const ClueSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  category: z.enum(['physical', 'document', 'testimony', 'digital', 'alibi']),
  shortDescription: z.string().min(1),
  detailedAnalysis: z.string().min(1),
  locationFound: z.string().min(1),
  tags: z.array(z.string()),
  source: z.string().optional(),
  contradictsSuspectId: z.string().optional(),
  contradictionNote: z.string().optional(),
  relatedClueIds: z.array(z.string()).optional(),
});

export const ClueConnectionSchema = z.object({
  id: z.string().min(1),
  clueA: z.string().min(1),
  clueB: z.string().min(1),
  deductionTitle: z.string().min(1),
  deductionText: z.string().min(1),
  unlockedFlag: z.string().optional(),
  unlockedClueId: z.string().optional(),
});

export const SuspectSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  age: z.number().optional(),
  initialDemeanor: z.string().min(1),
  motive: z.string().min(1),
  opportunity: z.string().min(1),
  alibi: z.string().min(1),
  weakness: z.string().min(1),
  associatedClueIds: z.array(z.string()),
  interrogationSummary: z.string().min(1),
});

export const HypothesisSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  accusedSuspectId: z.string().min(1),
  motiveSummary: z.string().min(1),
  methodSummary: z.string().min(1),
  requiredClueIds: z.array(z.string()),
  disqualifyingClueIds: z.array(z.string()),
  isValidTruth: z.boolean(),
  flawExplanation: z.string().optional(),
  successEndingId: z.string().min(1),
  failureEndingId: z.string().min(1),
});

export const EndingCriteriaReviewSchema = z.object({
  theTruth: z.string().min(1),
  yourDeduction: z.string().min(1),
  accuracyRate: z.number().min(0).max(100),
  keyDiscoveries: z.array(z.string()),
  missedOpportunities: z.array(z.string()),
  reasoningCritique: z.string().min(1),
});

export const EndingSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  tier: z.enum(['triumph', 'partial', 'wrong_conviction', 'compromised']),
  badge: z.string().min(1),
  narrative: z.array(z.string()).min(1),
  summary: z.string().min(1),
  criteriaReview: EndingCriteriaReviewSchema,
});

export const EpisodeSchema = z.object({
  id: z.string().min(1),
  version: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  synopsis: z.string().min(1),
  estimatedMinutes: z.number().min(1),
  difficulty: z.enum(['Novice', 'Detective', 'Master Sleuth', 'Intermediate', 'Advanced']),
  timeSetting: z.string().min(1),
  location: z.string().min(1),
  initialScenarioId: z.string().min(1),
  scenarios: z.record(ScenarioSchema),
  clues: z.record(ClueSchema),
  connections: z.array(ClueConnectionSchema),
  suspects: z.record(SuspectSchema),
  hypotheses: z.record(HypothesisSchema),
  endings: z.record(EndingSchema),
  tags: z.array(z.string()),
});

export interface ValidationErrorItem {
  type: 'error' | 'warning';
  code: string;
  message: string;
  path?: string;
}

export interface EpisodeValidationReport {
  isValid: boolean;
  errors: ValidationErrorItem[];
  warnings: ValidationErrorItem[];
  stats: {
    scenariosCount: number;
    cluesCount: number;
    connectionsCount: number;
    suspectsCount: number;
    hypothesesCount: number;
    endingsCount: number;
    reachableScenariosCount: number;
    unreachableScenarios: string[];
    reachableEndings: string[];
    unreachableEndings: string[];
  };
}

/**
 * Validates an Episode object comprehensively:
 * 1. Zod structural & type validation
 * 2. Referential integrity (destinations, clues, suspects, endings)
 * 3. Graph reachability from initialScenarioId
 * 4. Ending reachability
 * 5. Logical consistency
 */
export function validateEpisode(data: unknown): EpisodeValidationReport {
  const errors: ValidationErrorItem[] = [];
  const warnings: ValidationErrorItem[] = [];

  // 1. Zod Parse
  const parseResult = EpisodeSchema.safeParse(data);
  if (!parseResult.success) {
    for (const issue of parseResult.error.issues) {
      errors.push({
        type: 'error',
        code: 'SCHEMA_INVALID',
        message: `${issue.path.join('.')}: ${issue.message}`,
        path: issue.path.join('.'),
      });
    }
    // Return early if structure is fatally malformed
    return {
      isValid: false,
      errors,
      warnings,
      stats: {
        scenariosCount: 0,
        cluesCount: 0,
        connectionsCount: 0,
        suspectsCount: 0,
        hypothesesCount: 0,
        endingsCount: 0,
        reachableScenariosCount: 0,
        unreachableScenarios: [],
        reachableEndings: [],
        unreachableEndings: [],
      },
    };
  }

  const episode = parseResult.data as Episode;

  // 2. Referential Integrity Check
  const scenarioIds = new Set(Object.keys(episode.scenarios));
  const clueIds = new Set(Object.keys(episode.clues));
  const suspectIds = new Set(Object.keys(episode.suspects));
  const endingIds = new Set(Object.keys(episode.endings));

  // Check initialScenarioId exists
  if (!scenarioIds.has(episode.initialScenarioId)) {
    errors.push({
      type: 'error',
      code: 'INITIAL_SCENARIO_MISSING',
      message: `Initial scenario "${episode.initialScenarioId}" does not exist in scenarios map`,
      path: 'initialScenarioId',
    });
  }

  // Check choices and references inside scenarios
  for (const [sId, scenario] of Object.entries(episode.scenarios)) {
    // Check cluesDiscovered
    if (scenario.cluesDiscovered) {
      for (const cId of scenario.cluesDiscovered) {
        if (!clueIds.has(cId)) {
          errors.push({
            type: 'error',
            code: 'UNKNOWN_CLUE_DISCOVERED',
            message: `Scenario "${sId}" reveals unknown clue "${cId}"`,
            path: `scenarios.${sId}.cluesDiscovered`,
          });
        }
      }
    }

    // Check endingId if marked as ending
    if (scenario.isEnding || scenario.endingId) {
      if (!scenario.endingId || !endingIds.has(scenario.endingId)) {
        errors.push({
          type: 'error',
          code: 'INVALID_ENDING_REF',
          message: `Scenario "${sId}" references non-existent ending "${scenario.endingId}"`,
          path: `scenarios.${sId}.endingId`,
        });
      }
    }

    // Check choices
    if (!scenario.isEnding && scenario.choices.length === 0) {
      warnings.push({
        type: 'warning',
        code: 'DEAD_END_SCENARIO',
        message: `Scenario "${sId}" has no choices and is not marked as an ending`,
        path: `scenarios.${sId}.choices`,
      });
    }

    // Check entryEffects
    if (scenario.entryEffects) {
      for (const effect of scenario.entryEffects) {
        if (effect.type === 'unlockClue' && !clueIds.has(effect.target)) {
          errors.push({
            type: 'error',
            code: 'UNKNOWN_ENTRY_EFFECT_CLUE',
            message: `Scenario "${sId}" entry effect unlocks non-existent clue "${effect.target}"`,
            path: `scenarios.${sId}.entryEffects`,
          });
        }
      }
    }

    // Helper to recursively validate conditions
    const validateConditionRef = (cond: any, path: string) => {
      if ((cond.type === 'hasClue' || cond.type === 'notClue') && cond.target) {
        if (!clueIds.has(cond.target)) {
          errors.push({
            type: 'error',
            code: 'UNKNOWN_CONDITION_CLUE',
            message: `Choice condition references non-existent clue "${cond.target}"`,
            path,
          });
        }
      }
      if (cond.type === 'scenarioVisited' && cond.target) {
        if (!scenarioIds.has(cond.target)) {
          errors.push({
            type: 'error',
            code: 'UNKNOWN_CONDITION_SCENARIO',
            message: `Choice condition references non-existent scenario "${cond.target}"`,
            path,
          });
        }
      }
      if (cond.subConditions && Array.isArray(cond.subConditions)) {
        for (let i = 0; i < cond.subConditions.length; i++) {
          validateConditionRef(cond.subConditions[i], `${path}.subConditions[${i}]`);
        }
      }
    };

    const choiceIds = new Set<string>();
    for (const choice of scenario.choices) {
      if (choiceIds.has(choice.id)) {
        errors.push({
          type: 'error',
          code: 'DUPLICATE_CHOICE_ID',
          message: `Duplicate choice ID "${choice.id}" in scenario "${sId}"`,
          path: `scenarios.${sId}.choices`,
        });
      }
      choiceIds.add(choice.id);

      // Check destination scenario
      if (!scenarioIds.has(choice.destinationId)) {
        errors.push({
          type: 'error',
          code: 'BROKEN_DESTINATION',
          message: `Choice "${choice.id}" in scenario "${sId}" points to non-existent destination "${choice.destinationId}"`,
          path: `scenarios.${sId}.choices.${choice.id}.destinationId`,
        });
      }

      // Check conditions
      if (choice.conditions) {
        for (let i = 0; i < choice.conditions.length; i++) {
          validateConditionRef(choice.conditions[i], `scenarios.${sId}.choices.${choice.id}.conditions[${i}]`);
        }
      }

      // Check effects
      if (choice.effects) {
        for (const effect of choice.effects) {
          if (effect.type === 'unlockClue' && !clueIds.has(effect.target)) {
            errors.push({
              type: 'error',
              code: 'UNKNOWN_EFFECT_CLUE',
              message: `Choice effect unlocks non-existent clue "${effect.target}"`,
              path: `scenarios.${sId}.choices.${choice.id}.effects`,
            });
          }
        }
      }
    }
  }

  // Check connections
  for (const conn of episode.connections) {
    if (!clueIds.has(conn.clueA)) {
      errors.push({
        type: 'error',
        code: 'INVALID_CONNECTION_CLUE_A',
        message: `Connection "${conn.id}" references unknown clueA "${conn.clueA}"`,
        path: `connections.${conn.id}.clueA`,
      });
    }
    if (!clueIds.has(conn.clueB)) {
      errors.push({
        type: 'error',
        code: 'INVALID_CONNECTION_CLUE_B',
        message: `Connection "${conn.id}" references unknown clueB "${conn.clueB}"`,
        path: `connections.${conn.id}.clueB`,
      });
    }
    if (conn.unlockedClueId && !clueIds.has(conn.unlockedClueId)) {
      errors.push({
        type: 'error',
        code: 'INVALID_CONNECTION_UNLOCK_CLUE',
        message: `Connection "${conn.id}" unlocks unknown clue "${conn.unlockedClueId}"`,
        path: `connections.${conn.id}.unlockedClueId`,
      });
    }
  }

  // Check suspects
  for (const [susId, suspect] of Object.entries(episode.suspects)) {
    for (const cId of suspect.associatedClueIds) {
      if (!clueIds.has(cId)) {
        warnings.push({
          type: 'warning',
          code: 'SUSPECT_CLUE_MISSING',
          message: `Suspect "${susId}" lists associated clue "${cId}" which does not exist`,
          path: `suspects.${susId}.associatedClueIds`,
        });
      }
    }
  }

  // Check hypotheses
  for (const [hypId, hyp] of Object.entries(episode.hypotheses)) {
    if (!suspectIds.has(hyp.accusedSuspectId)) {
      errors.push({
        type: 'error',
        code: 'HYPOTHESIS_UNKNOWN_SUSPECT',
        message: `Hypothesis "${hypId}" accuses non-existent suspect "${hyp.accusedSuspectId}"`,
        path: `hypotheses.${hypId}.accusedSuspectId`,
      });
    }
    if (!endingIds.has(hyp.successEndingId)) {
      errors.push({
        type: 'error',
        code: 'HYPOTHESIS_INVALID_SUCCESS_ENDING',
        message: `Hypothesis "${hypId}" points to non-existent success ending "${hyp.successEndingId}"`,
        path: `hypotheses.${hypId}.successEndingId`,
      });
    }
    if (!endingIds.has(hyp.failureEndingId)) {
      errors.push({
        type: 'error',
        code: 'HYPOTHESIS_INVALID_FAILURE_ENDING',
        message: `Hypothesis "${hypId}" points to non-existent failure ending "${hyp.failureEndingId}"`,
        path: `hypotheses.${hypId}.failureEndingId`,
      });
    }
    for (const cId of hyp.requiredClueIds) {
      if (!clueIds.has(cId)) {
        errors.push({
          type: 'error',
          code: 'HYPOTHESIS_UNKNOWN_REQUIRED_CLUE',
          message: `Hypothesis "${hypId}" requires non-existent clue "${cId}"`,
          path: `hypotheses.${hypId}.requiredClueIds`,
        });
      }
    }
  }

  // 3. Graph Reachability Traversal (DFS)
  const reachableScenarios = new Set<string>();
  const reachableEndings = new Set<string>();
  const queue: string[] = [episode.initialScenarioId];

  while (queue.length > 0) {
    const currentId = queue.pop()!;
    if (reachableScenarios.has(currentId)) continue;
    reachableScenarios.add(currentId);

    const scenario = episode.scenarios[currentId];
    if (!scenario) continue;

    if (scenario.endingId && endingIds.has(scenario.endingId)) {
      reachableEndings.add(scenario.endingId);
    }

    for (const choice of scenario.choices) {
      if (scenarioIds.has(choice.destinationId) && !reachableScenarios.has(choice.destinationId)) {
        queue.push(choice.destinationId);
      }
    }
  }

  // Endings also reachable via hypothesis endpoints
  for (const hyp of Object.values(episode.hypotheses)) {
    if (endingIds.has(hyp.successEndingId)) reachableEndings.add(hyp.successEndingId);
    if (endingIds.has(hyp.failureEndingId)) reachableEndings.add(hyp.failureEndingId);
  }

  const unreachableScenarios = Object.keys(episode.scenarios).filter(
    (id) => !reachableScenarios.has(id)
  );

  if (unreachableScenarios.length > 0) {
    warnings.push({
      type: 'warning',
      code: 'UNREACHABLE_SCENARIOS',
      message: `${unreachableScenarios.length} scenario(s) are unreachable from initial scenario: ${unreachableScenarios.slice(0, 5).join(', ')}${unreachableScenarios.length > 5 ? '...' : ''}`,
    });
  }

  const unreachableEndings = Object.keys(episode.endings).filter(
    (id) => !reachableEndings.has(id)
  );

  if (unreachableEndings.length > 0) {
    warnings.push({
      type: 'warning',
      code: 'UNREACHABLE_ENDINGS',
      message: `${unreachableEndings.length} ending(s) are unreachable: ${unreachableEndings.join(', ')}`,
    });
  }

  // Check if at least one triumph ending is reachable
  const hasWinningEnding = Array.from(reachableEndings).some(
    (eId) => episode.endings[eId]?.tier === 'triumph'
  );
  if (!hasWinningEnding) {
    warnings.push({
      type: 'warning',
      code: 'NO_TRIUMPH_ENDING_REACHABLE',
      message: 'No triumph/grand-deduction ending appears reachable through valid paths or hypotheses',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      scenariosCount: scenarioIds.size,
      cluesCount: clueIds.size,
      connectionsCount: episode.connections.length,
      suspectsCount: suspectIds.size,
      hypothesesCount: Object.keys(episode.hypotheses).length,
      endingsCount: endingIds.size,
      reachableScenariosCount: reachableScenarios.size,
      unreachableScenarios,
      reachableEndings: Array.from(reachableEndings),
      unreachableEndings,
    },
  };
}

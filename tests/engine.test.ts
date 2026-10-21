import { describe, it, expect } from 'vitest';
import { midnightCipherEpisode } from '@/data/episodes/the-midnight-cipher';
import {
  createInitialGameState,
  evaluateCondition,
  canMakeChoice,
  applyEffects,
  transitionScenario,
  attemptClueConnection,
  evaluateHypothesis,
  finalizeRun,
  compareCompletedRuns,
} from '@/features/game-engine/engine';

describe('Game Engine Unit Tests', () => {
  it('initializes game state with initial scenario and clues', () => {
    const state = createInitialGameState(midnightCipherEpisode);
    expect(state.episodeId).toBe('the-midnight-cipher');
    expect(state.currentScenarioId).toBe('scene-arrival');
    expect(state.decisionHistory).toEqual([]);
    expect(state.isCompleted).toBe(false);
  });

  it('correctly evaluates conditions', () => {
    const state = createInitialGameState(midnightCipherEpisode);
    state.flags['knows_secret'] = true;
    state.discoveredClueIds.push('clue-speaking-tube');
    state.variables['tension'] = 5;

    expect(evaluateCondition({ type: 'hasFlag', target: 'knows_secret' }, state, midnightCipherEpisode)).toBe(true);
    expect(evaluateCondition({ type: 'notFlag', target: 'other_flag' }, state, midnightCipherEpisode)).toBe(true);
    expect(evaluateCondition({ type: 'hasClue', target: 'clue-speaking-tube' }, state, midnightCipherEpisode)).toBe(true);
    expect(evaluateCondition({ type: 'notClue', target: 'clue-unknown' }, state, midnightCipherEpisode)).toBe(true);
    expect(evaluateCondition({ type: 'minVariable', target: 'tension', value: 4 }, state, midnightCipherEpisode)).toBe(true);
    expect(evaluateCondition({ type: 'minVariable', target: 'tension', value: 6 }, state, midnightCipherEpisode)).toBe(false);
  });

  it('evaluates whether choices can be made and provides lock reasons', () => {
    const state = createInitialGameState(midnightCipherEpisode);
    const lockedChoice = {
      id: 'c-test',
      text: 'Examine tube',
      destinationId: 'scene-study',
      conditions: [{ type: 'hasClue' as const, target: 'clue-speaking-tube' }],
      lockReason: 'Requires discovering the tube',
    };

    const check1 = canMakeChoice(lockedChoice, state, midnightCipherEpisode);
    expect(check1.allowed).toBe(false);
    expect(check1.reason).toBe('Requires discovering the tube');

    state.discoveredClueIds.push('clue-speaking-tube');
    const check2 = canMakeChoice(lockedChoice, state, midnightCipherEpisode);
    expect(check2.allowed).toBe(true);
  });

  it('applies effects cleanly and updates flags, variables, and clues', () => {
    const state = createInitialGameState(midnightCipherEpisode);
    const { nextState, events } = applyEffects(
      [
        { type: 'setFlag', target: 'interrogated_sterling', value: true, description: 'Interrogated Sterling' },
        { type: 'incrementVariable', target: 'cluesFound', value: 2 },
        { type: 'unlockClue', target: 'clue-reversed-gear' },
      ],
      state
    );

    expect(nextState.flags['interrogated_sterling']).toBe(true);
    expect(nextState.variables['cluesFound']).toBe(2);
    expect(nextState.discoveredClueIds).toContain('clue-reversed-gear');
    expect(events.length).toBeGreaterThan(0);
  });

  it('transitions scenarios, updates history, and discovers destination clues', () => {
    const state = createInitialGameState(midnightCipherEpisode);
    const { nextState, newlyDiscoveredClues } = transitionScenario('choice-to-study', state, midnightCipherEpisode);

    expect(nextState.currentScenarioId).toBe('scene-study');
    expect(nextState.decisionHistory.length).toBe(1);
    expect(nextState.decisionHistory[0].choiceId).toBe('choice-to-study');
    expect(newlyDiscoveredClues).toContain('clue-speaking-tube');
    expect(newlyDiscoveredClues).toContain('clue-wine-glass');
    expect(nextState.discoveredClueIds).toContain('clue-speaking-tube');
  });

  it('handles clue connections and unlocks deduction flags', () => {
    let state = createInitialGameState(midnightCipherEpisode);
    state.discoveredClueIds.push('clue-speaking-tube', 'clue-acoustic-terminal');

    // Reject self-connection
    const selfConn = attemptClueConnection('clue-speaking-tube', 'clue-speaking-tube', state, midnightCipherEpisode);
    expect(selfConn.success).toBe(false);

    // Valid connection
    const res = attemptClueConnection('clue-speaking-tube', 'clue-acoustic-terminal', state, midnightCipherEpisode);
    expect(res.success).toBe(true);
    expect(res.connection?.deductionTitle).toBe('Remote Aerosol Infiltration');
    expect(res.nextState.flags['knows_remote_gas_method']).toBe(true);
    expect(res.nextState.formedConnectionIds).toContain('conn-remote-incapacitation');
  });

  it('evaluates hypotheses with accuracy scoring and correct endings', () => {
    const state = createInitialGameState(midnightCipherEpisode);
    const result = evaluateHypothesis(
      'hypo-sterling-true',
      ['clue-speaking-tube', 'clue-reversed-gear', 'clue-acoustic-terminal', 'clue-sterling-journal'],
      state,
      midnightCipherEpisode
    );

    expect(result.valid).toBe(true);
    expect(result.accuracyScore).toBe(100);
    expect(result.endingId).toBe('ending-triumph');
    expect(result.nextState.isCompleted).toBe(true);
  });

  it('finalizes a run and compares two completed runs', () => {
    const stateA = createInitialGameState(midnightCipherEpisode);
    stateA.endingId = 'ending-triumph';
    stateA.discoveredClueIds.push('clue-speaking-tube', 'clue-reversed-gear', 'clue-sterling-journal');
    stateA.formedConnectionIds.push('conn-sterling-burglary');
    const runA = finalizeRun(stateA, midnightCipherEpisode);

    const stateB = createInitialGameState(midnightCipherEpisode);
    stateB.endingId = 'ending-scapegoat-elena';
    stateB.discoveredClueIds.push('clue-forged-bill', 'clue-wine-glass');
    const runB = finalizeRun(stateB, midnightCipherEpisode);

    const comparison = compareCompletedRuns(runA, runB, midnightCipherEpisode);
    expect(comparison.accuracyDelta).toBeGreaterThan(0);
    expect(comparison.cluesExclusiveToA).toContain('clue-reversed-gear');
    expect(comparison.cluesExclusiveToB).toContain('clue-forged-bill');
  });
});

import { describe, it, expect } from 'vitest';
import { midnightCipherEpisode } from '@/data/episodes/the-midnight-cipher';
import {
  createInitialGameState,
  transitionScenario,
  attemptClueConnection,
  evaluateHypothesis,
  finalizeRun,
  compareCompletedRuns,
} from '@/features/game-engine/engine';

describe('End-to-End Investigation Journey Integration Test', () => {
  it('plays through the investigation from opening scene to triumph ending', () => {
    // Step 1: Detective arrives at Saint-Claire Manor
    let state = createInitialGameState(midnightCipherEpisode);
    expect(state.currentScenarioId).toBe('scene-arrival');
    expect(state.isCompleted).toBe(false);

    // Step 2: Choice 1 - Proceed to Julian Vance's study to inspect the crime scene
    let trans = transitionScenario('choice-to-study', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-study');
    expect(state.discoveredClueIds).toContain('clue-speaking-tube');
    expect(state.discoveredClueIds).toContain('clue-wine-glass');

    // Step 3: Choice 2 - Inspect the study fireplace flue for mechanical bypass
    trans = transitionScenario('choice-examine-hearth', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-inspect-hearth');
    expect(state.discoveredClueIds).toContain('clue-reversed-gear');

    // Step 4: Choice 3 - Direct interrogation with Dr. Sterling in the library
    trans = transitionScenario('choice-hearth-to-interrogate-sterling', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-interrogate-sterling');
    expect(state.discoveredClueIds).toContain('clue-graphite-cloth');

    // Step 5: Choice 4 - Display the reversed-tooth cylinder to break Sterling's composure
    trans = transitionScenario('choice-sterling-show-cylinder', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-sterling-cylinder-reaction');

    // Step 6: Choice 5 - Search behind encyclopedia to discover cryptographic notebook
    trans = transitionScenario('choice-cylinder-to-library-shelf', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-library-archive');
    expect(state.discoveredClueIds).toContain('clue-sterling-journal');

    // Step 7: Choice 6 - Trace the acoustic line to the basement workshop
    trans = transitionScenario('choice-library-to-workshop', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-workshop');
    expect(state.discoveredClueIds).toContain('clue-acoustic-terminal');

    // Step 8: Propose Connections on the Deduction Board
    const conn1 = attemptClueConnection(
      'clue-speaking-tube',
      'clue-acoustic-terminal',
      state,
      midnightCipherEpisode
    );
    expect(conn1.success).toBe(true);
    state = conn1.nextState;
    expect(state.flags['knows_remote_gas_method']).toBe(true);

    const conn2 = attemptClueConnection(
      'clue-reversed-gear',
      'clue-sterling-journal',
      state,
      midnightCipherEpisode
    );
    expect(conn2.success).toBe(true);
    state = conn2.nextState;
    expect(state.flags['knows_sterling_guilty_burglary']).toBe(true);

    // Step 9: Advance to the Case Headquarters (Deduction Chamber) via Security room
    trans = transitionScenario('choice-workshop-to-security', state, midnightCipherEpisode);
    state = trans.nextState;
    trans = transitionScenario('choice-mireille-press-terminal', state, midnightCipherEpisode);
    state = trans.nextState;
    trans = transitionScenario('choice-terminal-to-deduction', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-deduction-chamber');

    // Step 10: Summon Dr. Sterling for Confrontation
    trans = transitionScenario('choice-summon-sterling', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-confrontation-sterling');

    // Step 11: Present irrefutable proof (notebook & acoustic terminal)
    trans = transitionScenario('choice-sterling-slam-proof', state, midnightCipherEpisode);
    state = trans.nextState;
    expect(state.currentScenarioId).toBe('scene-ending-triumph');
    expect(state.isCompleted).toBe(true);
    expect(state.endingId).toBe('ending-triumph');

    // Step 12: Finalize the run and verify the Ending Reflection criteria review
    const finalRun = finalizeRun(state, midnightCipherEpisode);
    expect(finalRun.endingTier).toBe('triumph');
    expect(finalRun.accuracyScore).toBe(100);
    expect(finalRun.endingCriteriaReview.theTruth).toContain('Dr. Arthur Sterling');
    expect(finalRun.decisionsCount).toBeGreaterThanOrEqual(8);
  });

  it('handles scapegoat path when falsely accusing Elena Vance', () => {
    let state = createInitialGameState(midnightCipherEpisode);
    // Go to suspects foyer -> question Elena
    state = transitionScenario('choice-to-foyer-suspects', state, midnightCipherEpisode).nextState;
    state = transitionScenario('choice-talk-elena', state, midnightCipherEpisode).nextState;
    state = transitionScenario('choice-press-elena-forgery', state, midnightCipherEpisode).nextState;
    state = transitionScenario('choice-elena-confession-to-study', state, midnightCipherEpisode).nextState;

    // Falsely evaluate hypothesis accusing Elena
    const hypResult = evaluateHypothesis(
      'hypo-elena-false',
      ['clue-forged-bill', 'clue-wine-glass'],
      state,
      midnightCipherEpisode
    );

    expect(hypResult.valid).toBe(false);
    expect(hypResult.endingId).toBe('ending-scapegoat-elena');
    expect(hypResult.accuracyScore).toBeLessThanOrEqual(45);

    const run = finalizeRun(hypResult.nextState, midnightCipherEpisode);
    expect(run.endingTier).toBe('wrong_conviction');
  });
});

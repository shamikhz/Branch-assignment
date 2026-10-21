import { describe, expect, it } from 'vitest';
import { midnightCipherEpisode } from '../data/episodes/the-midnight-cipher';
import { createInitialGameState, transitionScenario } from '../features/game-engine/engine';
import {
  findDiscoveredContradictions,
  getHypothesisReadiness,
  getSuspectInvestigationProfile,
} from '../features/investigation';

describe('Investigation System', () => {
  it('analyzes suspect profiles and detects contradiction evidence', () => {
    let state = createInitialGameState(midnightCipherEpisode);
    const initialProfile = getSuspectInvestigationProfile('suspect-elena', state, midnightCipherEpisode);
    expect(initialProfile).toBeDefined();
    expect(initialProfile?.suspect.name).toBe('Elena Vance');
    expect(initialProfile?.contradictingClues.length).toBe(0);

    // Player goes to terrace and catering station to discover Elena's alibi
    state = transitionScenario('choice-to-terrace', state, midnightCipherEpisode).nextState;
    state = transitionScenario('choice-terrace-to-catering', state, midnightCipherEpisode).nextState;
    expect(state.discoveredClueIds).toContain('clue-elena-alibi');

    const updatedProfile = getSuspectInvestigationProfile('suspect-elena', state, midnightCipherEpisode);
    expect(updatedProfile?.hasDiscoveredContradiction).toBe(true);
    expect(updatedProfile?.contradictingClues.some((c) => c.id === 'clue-elena-alibi')).toBe(true);

    const allContradictions = findDiscoveredContradictions(state, midnightCipherEpisode);
    expect(allContradictions.length).toBeGreaterThan(0);
    expect(allContradictions.some((c) => c.suspect.id === 'suspect-elena')).toBe(true);
  });

  it('correctly tracks hypothesis readiness as evidence is collected', () => {
    let state = createInitialGameState(midnightCipherEpisode);
    const hyp = midnightCipherEpisode.hypotheses['hypo-sterling-true'];
    expect(hyp).toBeDefined();

    const readinessInitial = getHypothesisReadiness(hyp, state);
    expect(readinessInitial.requiredFoundCount).toBe(0);
    expect(readinessInitial.isSubmittable).toBe(false);

    // Enter study to discover speaking tube (one of the required clues for hypo-sterling-true)
    state = transitionScenario('choice-to-study', state, midnightCipherEpisode).nextState;
    expect(state.discoveredClueIds).toContain('clue-speaking-tube');

    const readinessAfterOne = getHypothesisReadiness(hyp, state);
    expect(readinessAfterOne.requiredFoundCount).toBe(1);
    expect(readinessAfterOne.isSubmittable).toBe(true);
    expect(readinessAfterOne.missingRequiredCount).toBe(hyp.requiredClueIds.length - 1);
  });
});

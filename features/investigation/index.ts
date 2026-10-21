/**
 * Investigation System
 * Evidence relationships, suspect interviews, contradiction detection, and hypothesis reasoning.
 */

import {
  Clue,
  ClueConnection,
  Episode,
  GameState,
  Hypothesis,
  Suspect,
} from '@/features/episodes/types';
import {
  attemptClueConnection,
  examineClue,
  evaluateHypothesis,
} from '@/features/game-engine/engine';

export { examineClue, attemptClueConnection, evaluateHypothesis };

export interface SuspectInvestigationProfile {
  suspect: Suspect;
  associatedClues: Clue[];
  contradictingClues: Clue[];
  hasDiscoveredContradiction: boolean;
}

/**
 * Retrieves the investigation profile for a suspect, identifying discovered clues
 * that support or shatter their alibi and testimony.
 */
export function getSuspectInvestigationProfile(
  suspectId: string,
  state: GameState,
  episode: Episode
): SuspectInvestigationProfile | null {
  const suspect = episode.suspects[suspectId];
  if (!suspect) return null;

  const discoveredSet = new Set(state.discoveredClueIds);

  const associatedClues = suspect.associatedClueIds
    .filter((id) => discoveredSet.has(id))
    .map((id) => episode.clues[id])
    .filter(Boolean);

  const contradictingClues = Object.values(episode.clues).filter(
    (clue) => clue.contradictsSuspectId === suspectId && discoveredSet.has(clue.id)
  );

  return {
    suspect,
    associatedClues,
    contradictingClues,
    hasDiscoveredContradiction: contradictingClues.length > 0,
  };
}

/**
 * Checks all discovered evidence against all suspects to find any newly revealed contradictions.
 */
export function findDiscoveredContradictions(
  state: GameState,
  episode: Episode
): Array<{ suspect: Suspect; clue: Clue; contradictionNote: string }> {
  const discoveredSet = new Set(state.discoveredClueIds);
  const contradictions: Array<{ suspect: Suspect; clue: Clue; contradictionNote: string }> = [];

  for (const clue of Object.values(episode.clues)) {
    if (clue.contradictsSuspectId && discoveredSet.has(clue.id)) {
      const suspect = episode.suspects[clue.contradictsSuspectId];
      if (suspect && clue.contradictionNote) {
        contradictions.push({
          suspect,
          clue,
          contradictionNote: clue.contradictionNote,
        });
      }
    }
  }

  return contradictions;
}

/**
 * Evaluates the readiness of a hypothesis given the player's currently discovered evidence.
 */
export function getHypothesisReadiness(
  hypothesis: Hypothesis,
  state: GameState
): {
  requiredFoundCount: number;
  totalRequired: number;
  isSubmittable: boolean;
  missingRequiredCount: number;
} {
  const discoveredSet = new Set(state.discoveredClueIds);
  const foundRequired = hypothesis.requiredClueIds.filter((id) => discoveredSet.has(id));
  const missingCount = hypothesis.requiredClueIds.length - foundRequired.length;

  return {
    requiredFoundCount: foundRequired.length,
    totalRequired: hypothesis.requiredClueIds.length,
    isSubmittable: foundRequired.length > 0, // Can submit whenever any core evidence is discovered
    missingRequiredCount: missingCount,
  };
}

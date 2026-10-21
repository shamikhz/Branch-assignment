/**
 * Core Domain Types for Branching Investigation & Mystery Game Engine
 */

export type ClueCategory = 'physical' | 'document' | 'testimony' | 'digital' | 'alibi';

export type ConditionType =
  | 'hasFlag'
  | 'notFlag'
  | 'hasClue'
  | 'notClue'
  | 'minVariable'
  | 'maxVariable'
  | 'hasConnection'
  | 'hypothesisValidated'
  | 'scenarioVisited'
  | 'all'
  | 'any';

export interface Condition {
  type: ConditionType;
  target?: string;
  value?: string | number | boolean;
  subConditions?: Condition[];
}

export type EffectType =
  | 'setFlag'
  | 'clearFlag'
  | 'incrementVariable'
  | 'decrementVariable'
  | 'unlockClue'
  | 'addLead'
  | 'triggerConsequence'
  | 'markMissedOpportunity'
  | 'recordContradiction';

export interface Effect {
  type: EffectType;
  target: string;
  value?: string | number | boolean;
  description?: string;
}

export interface Choice {
  id: string;
  text: string;
  destinationId: string;
  consequencePreview?: 'Direct' | 'Subtle' | 'Inquisitive' | 'Risky' | 'Deductive' | 'Forensic';
  conditions?: Condition[];
  effects?: Effect[];
  isMissableLead?: boolean;
  lockReason?: string;
  flavor?: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  mood?: 'nervous' | 'defiant' | 'calm' | 'evasive' | 'grief' | 'intrigued' | 'shaken';
}

export interface Scenario {
  id: string;
  title: string;
  location: string;
  narrative: string[];
  dialogue?: DialogueLine[];
  cluesDiscovered?: string[];
  entryEffects?: Effect[];
  choices: Choice[];
  isEnding?: boolean;
  endingId?: string;
  ambientSound?: string;
  investigationLeadId?: string;
}

export interface Clue {
  id: string;
  title: string;
  category: ClueCategory;
  shortDescription: string;
  detailedAnalysis: string;
  locationFound: string;
  tags: string[];
  source?: string;
  contradictsSuspectId?: string;
  contradictionNote?: string;
  relatedClueIds?: string[];
}

export interface ClueConnection {
  id: string;
  clueA: string;
  clueB: string;
  deductionTitle: string;
  deductionText: string;
  unlockedFlag?: string;
  unlockedClueId?: string;
}

export interface Suspect {
  id: string;
  name: string;
  role: string;
  age?: number;
  initialDemeanor: string;
  motive: string;
  opportunity: string;
  alibi: string;
  weakness: string;
  associatedClueIds: string[];
  interrogationSummary: string;
}

export interface Hypothesis {
  id: string;
  title: string;
  accusedSuspectId: string;
  motiveSummary: string;
  methodSummary: string;
  requiredClueIds: string[];
  disqualifyingClueIds: string[];
  isValidTruth: boolean;
  flawExplanation?: string;
  successEndingId: string;
  failureEndingId: string;
}

export type EndingTier = 'triumph' | 'partial' | 'wrong_conviction' | 'compromised';

export interface EndingCriteriaReview {
  theTruth: string;
  yourDeduction: string;
  accuracyRate: number; // 0 to 100
  keyDiscoveries: string[];
  missedOpportunities: string[];
  reasoningCritique: string;
}

export interface Ending {
  id: string;
  title: string;
  tier: EndingTier;
  badge: string;
  narrative: string[];
  summary: string;
  criteriaReview: EndingCriteriaReview;
}

export interface Episode {
  id: string;
  version: string;
  title: string;
  subtitle: string;
  synopsis: string;
  estimatedMinutes: number;
  difficulty: 'Novice' | 'Detective' | 'Master Sleuth' | 'Intermediate' | 'Advanced';
  timeSetting: string;
  location: string;
  initialScenarioId: string;
  scenarios: Record<string, Scenario>;
  clues: Record<string, Clue>;
  connections: ClueConnection[];
  suspects: Record<string, Suspect>;
  hypotheses: Record<string, Hypothesis>;
  endings: Record<string, Ending>;
  tags: string[];
  caseType?: 'locked_room' | 'missing_person' | 'disputed_will' | 'art_theft' | 'cold_case' | 'espionage';
  seriesId?: string;
  seriesName?: string;
  seriesPart?: number;
  prerequisiteEpisodeId?: string;
  featured?: boolean;
  releaseDate?: string;
}

export interface EpisodeMetadata {
  id: string;
  version: string;
  title: string;
  subtitle: string;
  synopsis: string;
  estimatedMinutes: number;
  difficulty: 'Novice' | 'Detective' | 'Master Sleuth' | 'Intermediate' | 'Advanced';
  timeSetting: string;
  location: string;
  initialScenarioId: string;
  tags: string[];
  totalCluesCount: number;
  totalEndingsCount: number;
  estimatedSizeBytes: number;
  caseType?: 'locked_room' | 'missing_person' | 'disputed_will' | 'art_theft' | 'cold_case' | 'espionage';
  seriesId?: string;
  seriesName?: string;
  seriesPart?: number;
  prerequisiteEpisodeId?: string;
  featured?: boolean;
  releaseDate?: string;
}

export interface DecisionRecord {
  scenarioId: string;
  choiceId: string;
  choiceText: string;
  timestamp: number;
  consequencesSummary?: string[];
}

export interface GameState {
  episodeId: string;
  currentScenarioId: string;
  discoveredClueIds: string[];
  examinedClueIds: string[];
  formedConnectionIds: string[];
  flags: Record<string, boolean>;
  variables: Record<string, number>;
  decisionHistory: DecisionRecord[];
  activeHypothesisId?: string;
  selectedEvidenceForHypothesis: string[];
  endingId?: string;
  isCompleted: boolean;
  startedAt: number;
  updatedAt: number;
}

export interface CompletedRunSummary {
  runId: string;
  episodeId: string;
  episodeTitle: string;
  completedAt: number;
  durationMs: number;
  endingId: string;
  endingTitle: string;
  endingTier: EndingTier;
  accuracyScore: number;
  cluesDiscoveredCount: number;
  totalCluesCount: number;
  connectionsCount: number;
  totalConnectionsCount: number;
  decisionsCount: number;
  decisionHistory: DecisionRecord[];
  discoveredClueIds: string[];
  formedConnectionIds: string[];
  endingCriteriaReview: EndingCriteriaReview;
}

export interface RunComparisonDiff {
  runA: CompletedRunSummary;
  runB: CompletedRunSummary;
  sharedDecisionsCount: number;
  divergencePoint?: {
    scenarioId: string;
    choiceA: string;
    choiceB: string;
  };
  cluesExclusiveToA: string[];
  cluesExclusiveToB: string[];
  cluesShared: string[];
  connectionsExclusiveToA: string[];
  connectionsExclusiveToB: string[];
  endingADetails: { title: string; tier: EndingTier };
  endingBDetails: { title: string; tier: EndingTier };
  accuracyDelta: number;
}

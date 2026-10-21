export type RelationshipPillar =
  | 'friendship'
  | 'romance'
  | 'family'
  | 'communication'
  | 'boundaries';

export interface CharacterProfile {
  id: string;
  name: string;
  role: string;
  personalitySummary: string;
  communicationTendency: string;
  coreNeedOrFear: string;
}

export interface ReflectionDebrief {
  playerApproachSummary: string;
  otherPersonPerspective: string;
  relationalImpact: string;
  whatWasOutsideControl: string;
  alternativeConsideration: string;
  discussionQuestions: string[];
}

export interface RelationshipScenarioMetadata {
  id: string;
  title: string;
  subtitle: string;
  pillar: RelationshipPillar;
  category: string;
  difficulty: 'Novice' | 'Intermediate' | 'Advanced';
  estimatedMinutes: number;
  tags: string[];
  heroImage: string;
  thumbnailImage: string;
  characters: CharacterProfile[];
  coreTension: string;
  learningInsights: string[];
  reflectionSummary: ReflectionDebrief;
  contentNotes?: string;
}

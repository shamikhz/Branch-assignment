export type CareerPillar =
  | 'career_exploration'
  | 'professional_skills'
  | 'technical_skills'
  | 'personal_development';

export interface LearningObjective {
  id: string;
  description: string;
  bloomLevel?: string;
  evidenceType?: string;
  statement?: string;
  skillCategory?: string;
}

export interface PracticalTakeaway {
  title: string;
  format?: string;
  type?: string;
  description?: string;
  summary?: string;
  actionableSteps?: string[];
  keyPoints?: string[];
  downloadableText?: string;
}

export interface CareerSourceReference {
  title: string;
  url: string;
  publisher: string;
  claimsSupported: string;
}

export interface CareerSimulationMetadata {
  id: string;
  title: string;
  subtitle: string;
  pillar: CareerPillar;
  category: string;
  difficulty: 'Novice' | 'Detective' | 'Master Sleuth' | 'Intermediate' | 'Advanced';
  estimatedMinutes: number;
  tags: string[];
  heroImage: string;
  thumbnailImage?: string;
  learningObjectives: LearningObjective[];
  prerequisites: string[];
  realWorldApplication: string;
  practicalTakeaway: PracticalTakeaway;
  reviewDate?: string;
  sources?: CareerSourceReference[];
}

export interface CareerPathwayInfo {
  id: string;
  title: string;
  pillar: CareerPillar;
  shortDescription: string;
  icon: string;
  typicalResponsibilities: string[];
  foundationalSkills: string[];
  recommendedTools: string[];
  entryPathways: string[];
  adjacentRoles: string[];
  portfolioProjectIdeas: string[];
  marketRealities: string;
  linkedSimulationIds: string[];
}

export interface SkillTreeNode {
  id: string;
  title: string;
  branch: 'analytical' | 'technical' | 'strategic' | 'interpersonal' | 'self_management';
  tier: 1 | 2 | 3;
  description: string;
  icon: string;
  prerequisiteIds: string[];
  linkedSimulationIds: string[];
  masteryBenefits: string[];
}

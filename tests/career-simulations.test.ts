import { describe, it, expect } from 'vitest';
import { CAREER_SIMULATIONS_METADATA, CAREER_PATHWAYS, SKILL_TREE_NODES } from '@/data/career-simulations/catalog';
import { loadEpisode, getAvailableEpisodeIds } from '@/features/episodes/episode-loader';
import { validateEpisode } from '@/features/validation/episode-validator';

describe('Phase 3: Career, Skills & Personal Development Simulations', () => {
  it('catalog defines at least 12 simulations across all three pillars', () => {
    expect(CAREER_SIMULATIONS_METADATA.length).toBeGreaterThanOrEqual(12);

    const pillarA = CAREER_SIMULATIONS_METADATA.filter((s) => s.pillar === 'career_exploration');
    const pillarB = CAREER_SIMULATIONS_METADATA.filter((s) => s.pillar === 'professional_skills');
    const pillarC = CAREER_SIMULATIONS_METADATA.filter((s) => s.pillar === 'personal_development');

    expect(pillarA.length).toBeGreaterThanOrEqual(4);
    expect(pillarB.length).toBeGreaterThanOrEqual(5);
    expect(pillarC.length).toBeGreaterThanOrEqual(3);
  });

  it('verifies #Career Paths, #Skill Trees, #Negotiation, and #Mentorship tags are present', () => {
    const allTags = CAREER_SIMULATIONS_METADATA.flatMap((s) => s.tags);
    expect(allTags).toContain('#Career Paths');
    expect(allTags).toContain('#Skill Trees');
    expect(allTags).toContain('#Negotiation');
    expect(allTags).toContain('#Mentorship');

    expect(CAREER_PATHWAYS.length).toBeGreaterThanOrEqual(4);
    expect(SKILL_TREE_NODES.length).toBeGreaterThanOrEqual(10);
  });

  it('all 12 career simulations are registered in the dynamic episode loader', () => {
    const registeredIds = getAvailableEpisodeIds();
    for (const sim of CAREER_SIMULATIONS_METADATA) {
      expect(registeredIds).toContain(sim.id);
    }
  });

  it('dynamically loads and validates every career simulation episode with 0 errors', async () => {
    for (const sim of CAREER_SIMULATIONS_METADATA) {
      const episode = await loadEpisode(sim.id);
      expect(episode).toBeDefined();
      expect(episode?.id).toBe(sim.id);
      expect(episode?.title).toBe(sim.title);

      if (episode) {
        const report = validateEpisode(episode);
        if (!report.isValid) {
          console.error(`Validation failed for simulation ${sim.id}:`, report.errors);
        }
        expect(report.isValid).toBe(true);
        expect(report.errors).toEqual([]);
        expect(report.stats.scenariosCount).toBeGreaterThanOrEqual(3);
        expect(report.stats.reachableEndings.length).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('validates #Negotiation simulation has concrete deal-scoping parameters', async () => {
    const negSim = await loadEpisode('skills-negotiation-deal-scoping');
    expect(negSim).toBeDefined();
    expect(negSim?.tags).toContain('#Negotiation');
    expect(negSim?.scenarios['scene-procurement-ambush']).toBeDefined();
    expect(negSim?.endings['ending-negotiation-mastery']).toBeDefined();
  });

  it('validates #Mentorship simulation has structured 1-on-1 coaching mechanics', async () => {
    const mentorSim = await loadEpisode('personal-difficult-conversations');
    expect(mentorSim).toBeDefined();
    expect(mentorSim?.tags).toContain('#Mentorship');
    expect(mentorSim?.scenarios['scene-conversation-open']).toBeDefined();
    expect(mentorSim?.endings['ending-mentorship-triumph']).toBeDefined();
  });
});

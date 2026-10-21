import { describe, it, expect } from 'vitest';
import {
  RELATIONSHIPS_SCENARIOS_METADATA,
  RELATIONSHIPS_PILLARS,
  toEpisodeMetadata,
} from '@/data/relationships/catalog';
import { loadEpisode, getAvailableEpisodeIds } from '@/features/episodes/episode-loader';
import { validateEpisode } from '@/features/validation/episode-validator';
import { getEpisodeBackgroundImage } from '@/features/episodes/backgrounds';

describe('Phase 4: Relationships & Social Life Scenarios', () => {
  it('catalog defines exactly 12 scenarios distributed across the 5 pillars', () => {
    expect(RELATIONSHIPS_SCENARIOS_METADATA.length).toBe(12);

    const friendship = RELATIONSHIPS_SCENARIOS_METADATA.filter(
      (s) => s.pillar === 'friendship'
    );
    const romance = RELATIONSHIPS_SCENARIOS_METADATA.filter(
      (s) => s.pillar === 'romance'
    );
    const family = RELATIONSHIPS_SCENARIOS_METADATA.filter(
      (s) => s.pillar === 'family'
    );
    const comms = RELATIONSHIPS_SCENARIOS_METADATA.filter(
      (s) => s.pillar === 'communication'
    );
    const boundaries = RELATIONSHIPS_SCENARIOS_METADATA.filter(
      (s) => s.pillar === 'boundaries'
    );

    expect(friendship.length).toBe(3);
    expect(romance.length).toBe(2);
    expect(family.length).toBe(2);
    expect(comms.length).toBe(3);
    expect(boundaries.length).toBe(2);

    expect(RELATIONSHIPS_PILLARS.length).toBe(5);
  });

  it('all 12 scenarios are registered in the dynamic episode loader', () => {
    const registeredIds = getAvailableEpisodeIds();
    for (const scenario of RELATIONSHIPS_SCENARIOS_METADATA) {
      expect(registeredIds).toContain(scenario.id);
    }
  });

  it('toEpisodeMetadata correctly converts relationship scenario metadata to episode metadata', () => {
    for (const scenario of RELATIONSHIPS_SCENARIOS_METADATA) {
      const epMeta = toEpisodeMetadata(scenario);
      expect(epMeta.id).toBe(scenario.id);
      expect(epMeta.title).toBe(scenario.title);
      expect(epMeta.subtitle).toBe(scenario.subtitle);
      expect(epMeta.difficulty).toBe(scenario.difficulty);
      expect(epMeta.estimatedMinutes).toBe(scenario.estimatedMinutes);
      expect(epMeta.tags).toBe(scenario.tags);
    }
  });

  it('all 12 scenarios have mapped background image assets', () => {
    for (const scenario of RELATIONSHIPS_SCENARIOS_METADATA) {
      const bg = getEpisodeBackgroundImage(scenario.id);
      expect(bg).toBeDefined();
      expect(bg).toContain('/images/relationships/');
    }
  });

  it('dynamically loads and validates every scenario with validateEpisode (0 errors, valid paths)', async () => {
    for (const scenario of RELATIONSHIPS_SCENARIOS_METADATA) {
      const episode = await loadEpisode(scenario.id);
      expect(episode).toBeDefined();
      expect(episode?.id).toBe(scenario.id);
      expect(episode?.title).toBe(scenario.title);

      if (episode) {
        const report = validateEpisode(episode);
        if (!report.isValid) {
          console.error(`Validation failed for scenario ${scenario.id}:`, report.errors);
        }
        expect(report.isValid).toBe(true);
        expect(report.errors).toEqual([]);
        // Every scenario must have at least 3 decision points/scenes
        expect(report.stats.scenariosCount).toBeGreaterThanOrEqual(3);
        // Every scenario must have at least 2 distinct reachable endings
        expect(report.stats.reachableEndings.length).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it('validates Friendship scenario: Cancelled Plans branching and characters', async () => {
    const episode = await loadEpisode('rel-friendship-cancelled-plans');
    expect(episode).toBeDefined();
    expect(episode?.suspects['person-maya']).toBeDefined();
    expect(episode?.scenarios['scene-cancelled-text']).toBeDefined();
    expect(episode?.scenarios['scene-resolution-reset']).toBeDefined();
    expect(episode?.scenarios['scene-defensive-retreat']).toBeDefined();
    // Verify endings exist and are reachable
    expect(episode?.endings['ending-mutual-reset']).toBeDefined();
    expect(episode?.endings['ending-defensive-rupture']).toBeDefined();
    expect(episode?.endings['ending-passive-estrangement']).toBeDefined();

    // Verify metadata character profiles
    const meta = RELATIONSHIPS_SCENARIOS_METADATA.find(s => s.id === 'rel-friendship-cancelled-plans');
    expect(meta?.characters.some(c => c.name.includes('Maya'))).toBe(true);
    expect(meta?.reflectionSummary.discussionQuestions.length).toBeGreaterThanOrEqual(2);
  });

  it('validates Romance scenario: Ambiguous Text branching and nuance', async () => {
    const episode = await loadEpisode('rel-romance-ambiguous-text');
    expect(episode).toBeDefined();
    expect(episode?.suspects['person-jordan']).toBeDefined();
    expect(episode?.scenarios['scene-glowing-screen']).toBeDefined();
    expect(episode?.scenarios['scene-vulnerable-grounding']).toBeDefined();
    expect(episode?.endings['ending-deepened-intimacy']).toBeDefined();
    expect(episode?.endings['ending-silent-resentment']).toBeDefined();
    expect(episode?.endings['ending-defensive-spiral']).toBeDefined();

    const meta = RELATIONSHIPS_SCENARIOS_METADATA.find(s => s.id === 'rel-romance-ambiguous-text');
    expect(meta?.characters.some(c => c.name.includes('Jordan'))).toBe(true);
  });

  it('validates Communication scenario: Differing Memories perspective taking', async () => {
    const episode = await loadEpisode('rel-communication-differing-memories');
    expect(episode).toBeDefined();
    expect(episode?.suspects['person-dev']).toBeDefined();
    expect(episode?.scenarios['scene-penalty-notice']).toBeDefined();
    expect(episode?.scenarios['scene-joint-appeal-victory']).toBeDefined();
    expect(episode?.endings['ending-collaborative-alignment']).toBeDefined();
    expect(episode?.endings['ending-lingering-grudge']).toBeDefined();
    expect(episode?.endings['ending-scorched-roommate-war']).toBeDefined();

    const meta = RELATIONSHIPS_SCENARIOS_METADATA.find(s => s.id === 'rel-communication-differing-memories');
    expect(meta?.characters.some(c => c.name.includes('Dev'))).toBe(true);
  });

  it('validates Group Dynamics scenario: Vanishing Contributor', async () => {
    const episode = await loadEpisode('rel-boundaries-group-project');
    expect(episode).toBeDefined();
    expect(episode?.suspects['person-sarah']).toBeDefined();
    expect(episode?.suspects['person-mateo']).toBeDefined();
    expect(episode?.scenarios['scene-forty-eight-hours']).toBeDefined();
    expect(episode?.scenarios['scene-triumphant-completion']).toBeDefined();
    expect(episode?.endings['ending-compassionate-triage']).toBeDefined();
    expect(episode?.endings['ending-nuclear-team-destruction']).toBeDefined();
    expect(episode?.endings['ending-burnout-collapse']).toBeDefined();

    const meta = RELATIONSHIPS_SCENARIOS_METADATA.find(s => s.id === 'rel-boundaries-group-project');
    expect(meta?.characters.some(c => c.name.includes('Sarah'))).toBe(true);
  });

  it('validates Family scenario: Legacy Expectation generational conflict', async () => {
    const episode = await loadEpisode('rel-family-legacy-expectation');
    expect(episode).toBeDefined();
    expect(episode?.suspects['person-ramesh']).toBeDefined();
    expect(episode?.scenarios['scene-succession-unveiled']).toBeDefined();
    expect(episode?.scenarios['scene-the-mature-pact']).toBeDefined();
    expect(episode?.endings['ending-dignified-self-authorship']).toBeDefined();
    expect(episode?.endings['ending-silent-capitulation']).toBeDefined();
    expect(episode?.endings['ending-estranged-fracture']).toBeDefined();

    const meta = RELATIONSHIPS_SCENARIOS_METADATA.find(s => s.id === 'rel-family-legacy-expectation');
    expect(meta?.characters.some(c => c.name.includes('Ramesh'))).toBe(true);
  });
});

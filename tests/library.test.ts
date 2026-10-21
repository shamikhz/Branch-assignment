import { describe, it, expect, beforeEach } from 'vitest';
import { EPISODE_CATALOG_METADATA, getEpisodeMetadataById } from '@/data/episodes/catalog';
import { loadEpisode } from '@/features/episodes/episode-loader';
import { SaveService } from '@/features/persistence/save-service';
import { GameState } from '@/features/episodes/types';
import { CATEGORIES } from '@/data/categories';

describe('Mystery Library & Multi-Case Architecture', () => {
  it('defines the 10 phases covering 9 major content categories with exact naming', () => {
    // 9 major content areas because Phase 1 & 2 both belong to Mystery & Investigation
    expect(CATEGORIES.length).toBe(9);
    const names = CATEGORIES.map((c) => c.title.en);
    expect(names).toEqual([
      'Mystery & Investigation',
      'Career, Skills & Personal Development',
      'Relationships & Social Life',
      'Money, Business & Entrepreneurship',
      'Leadership & Management',
      'Adventure & Exploration',
      'Survival & Crisis Scenarios',
      'Fantasy & Mythical Worlds',
      'Advanced Simulations & Connected Universes',
    ]);

    expect(CATEGORIES[0].status).toBe('active');
    expect(CATEGORIES[0].caseCount).toBe(6);
    expect(CATEGORIES[0].phaseNumbers).toEqual([1, 2]);
  });
  it('provides a catalog of 6 distinct original cases', () => {
    expect(EPISODE_CATALOG_METADATA.length).toBe(6);
    const ids = EPISODE_CATALOG_METADATA.map((e) => e.id);
    expect(ids).toContain('the-midnight-cipher');
    expect(ids).toContain('the-thames-alibi');
    expect(ids).toContain('the-blackwood-inheritance');
    expect(ids).toContain('the-galleria-forgery');
    expect(ids).toContain('the-hollow-automaton');
    expect(ids).toContain('the-diplomats-cipher');
  });

  it('covers required mystery archetypes across episodes', () => {
    const types = new Set(EPISODE_CATALOG_METADATA.map((e) => e.caseType));
    expect(types).toContain('locked_room');
    expect(types).toContain('missing_person');
    expect(types).toContain('disputed_will');
    expect(types).toContain('art_theft');
    expect(types).toContain('cold_case');
    expect(types).toContain('espionage');
  });

  it('retrieves metadata by id correctly', () => {
    const ep = getEpisodeMetadataById('the-galleria-forgery');
    expect(ep).toBeDefined();
    expect(ep?.title).toBe('The Phantom of the Renaissance');
    expect(ep?.caseType).toBe('art_theft');
  });

  it('dynamically loads each of the 6 episodes via code-splitting loader', async () => {
    for (const meta of EPISODE_CATALOG_METADATA) {
      const ep = await loadEpisode(meta.id);
      expect(ep).toBeDefined();
      expect(ep.id).toBe(meta.id);
      expect(Object.keys(ep.scenarios).length).toBeGreaterThan(0);
      expect(Object.keys(ep.suspects).length).toBeGreaterThan(0);
      expect(Object.keys(ep.clues).length).toBeGreaterThan(0);
      expect(Object.keys(ep.endings).length).toBe(4);
    }
  }, 20000);

  it('isolates active runs per episode without cross-case overwrite', async () => {
    const run1: GameState = {
      episodeId: 'the-midnight-cipher',
      currentScenarioId: 'conservatory_crime_scene',
      discoveredClueIds: ['clue-shattered-box'],
      examinedClueIds: [],
      formedConnectionIds: [],
      flags: {},
      variables: {},
      decisionHistory: [],
      selectedEvidenceForHypothesis: [],
      isCompleted: false,
      startedAt: 1000,
      updatedAt: 1000,
    };

    const run2: GameState = {
      episodeId: 'the-thames-alibi',
      currentScenarioId: 'scene-pier-arrival',
      discoveredClueIds: ['clue-broken-pocket-watch'],
      examinedClueIds: [],
      formedConnectionIds: [],
      flags: {},
      variables: {},
      decisionHistory: [],
      selectedEvidenceForHypothesis: [],
      isCompleted: false,
      startedAt: 2000,
      updatedAt: 2000,
    };

    await SaveService.saveActiveRun(run1);
    await SaveService.saveActiveRun(run2);

    const loadedRun1 = await SaveService.getActiveRun('the-midnight-cipher');
    const loadedRun2 = await SaveService.getActiveRun('the-thames-alibi');

    expect(loadedRun1).toBeDefined();
    expect(loadedRun1?.episodeId).toBe('the-midnight-cipher');
    expect(loadedRun1?.discoveredClueIds).toContain('clue-shattered-box');

    expect(loadedRun2).toBeDefined();
    expect(loadedRun2?.episodeId).toBe('the-thames-alibi');
    expect(loadedRun2?.discoveredClueIds).toContain('clue-broken-pocket-watch');

    // Clearing run1 does not erase run2
    await SaveService.clearActiveRun('the-midnight-cipher');
    const afterClearRun1 = await SaveService.getActiveRun('the-midnight-cipher');
    const afterClearRun2 = await SaveService.getActiveRun('the-thames-alibi');

    expect(afterClearRun1).toBeNull();
    expect(afterClearRun2).toBeDefined();
    expect(afterClearRun2?.episodeId).toBe('the-thames-alibi');
  });
});

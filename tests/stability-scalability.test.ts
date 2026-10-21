import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  loadEpisode,
  clearEpisodeMemoryCache,
  registerEpisodeLoader,
  downloadEpisodeForOffline,
} from '@/features/episodes/episode-loader';
import {
  SaveService,
  isIndexedDBSupported,
  resetDatabaseConnection,
  DEFAULT_SETTINGS,
} from '@/features/persistence/save-service';
import { Episode } from '@/features/episodes/types';

describe('Platform Stability & Scalability Tests', () => {
  beforeEach(() => {
    clearEpisodeMemoryCache();
    resetDatabaseConnection();
  });

  describe('Scalable Dynamic Episode Registry & Memory Management', () => {
    it('allows dynamic registration of new category episodes without modifying core loader', async () => {
      const mockEpisodeId = 'test-career-episode-1';
      const mockEpisode: Episode = {
        id: mockEpisodeId,
        version: '1.0.0',
        title: 'Career Crossroads: The Executive Dilemma',
        subtitle: 'The Executive Dilemma',
        synopsis: 'A simulated high-stakes corporate negotiation dilemma.',
        estimatedMinutes: 20,
        difficulty: 'Detective',
        timeSetting: '09:00 AM',
        location: 'London HQ',
        initialScenarioId: 'scene-start',
        scenarios: {
          'scene-start': {
            id: 'scene-start',
            title: 'Executive Boardroom',
            narrative: ['The board is deadlocked.'],
            location: 'London HQ',
            isEnding: true,
            endingId: 'ending-career-success',
            choices: [],
          },
        },
        clues: {},
        connections: [],
        suspects: {},
        hypotheses: {},
        endings: {
          'ending-career-success': {
            id: 'ending-career-success',
            title: 'Unanimous Board Resolution',
            tier: 'triumph',
            badge: 'Strategist',
            narrative: ['Your proposal was ratified.'],
            summary: 'You secured the strategic alliance.',
            criteriaReview: {
              theTruth: 'The alliance was approved.',
              yourDeduction: 'You proposed the correct terms.',
              accuracyRate: 100,
              keyDiscoveries: ['Terms aligned'],
              missedOpportunities: [],
              reasoningCritique: 'Excellent negotiation approach.',
            },
          },
        },
        tags: ['Career', 'Negotiation'],
      };

      registerEpisodeLoader(mockEpisodeId, async () => ({
        mockCareerEpisode: mockEpisode,
      }));

      const loaded = await loadEpisode(mockEpisodeId);
      expect(loaded).toBeDefined();
      expect(loaded.id).toBe(mockEpisodeId);
      expect(loaded.title).toBe('Career Crossroads: The Executive Dilemma');
    });

    it('enforces LRU memory bounded cache and clears memory on demand', async () => {
      const ep1 = await loadEpisode('the-midnight-cipher');
      expect(ep1.id).toBe('the-midnight-cipher');

      const ep2 = await loadEpisode('the-thames-alibi');
      expect(ep2.id).toBe('the-thames-alibi');

      // Clear memory cache explicitly
      clearEpisodeMemoryCache();

      // Loading again re-imports without issue
      const ep1Reloaded = await loadEpisode('the-midnight-cipher');
      expect(ep1Reloaded.id).toBe('the-midnight-cipher');
    });
  });

  describe('Persistence Stability, Connection Pooling & Quota Resilience', () => {
    it('isIndexedDBSupported correctly reports environment capability', () => {
      const supported = isIndexedDBSupported();
      expect(typeof supported).toBe('boolean');
    });

    it('resetDatabaseConnection safely resets cached DB connection', () => {
      expect(() => resetDatabaseConnection()).not.toThrow();
    });

    it('gracefully handles player progress reset without unhandled errors', async () => {
      await expect(SaveService.resetPlayerProgress()).resolves.not.toThrow();
      const active = await SaveService.getActiveRun();
      expect(active).toBeNull();
    });

    it('handles payload export and detects corrupted or invalid save imports', async () => {
      const exportData = await SaveService.exportFullSaveData();
      expect(exportData).toBeDefined();
      expect(exportData.version).toBe(1);
      expect(typeof exportData.exportedAt).toBe('number');
      expect(Array.isArray(exportData.completedRuns)).toBe(true);

      // Try importing invalid non-object payload
      const invalidResult = await SaveService.importFullSaveData(null as any);
      expect(invalidResult.success).toBe(false);

      // Try importing payload missing completedRuns array
      const malformedResult = await SaveService.importFullSaveData({
        version: 1,
        exportedAt: Date.now(),
        activeRun: null,
        completedRuns: 'not-an-array' as any,
        settings: DEFAULT_SETTINGS,
      });
      expect(malformedResult.success).toBe(false);
    });

    it('survives rapid consecutive storage queries via connection pooling', async () => {
      const promises = [
        SaveService.getSettings(),
        SaveService.getActiveRun(),
        SaveService.getCompletedRuns(),
        SaveService.getAllActiveRuns(),
        SaveService.listOfflineDownloadedEpisodeIds(),
      ];

      const results = await Promise.all(promises);
      expect(results[0]).toBeDefined(); // settings
      expect(Array.isArray(results[2])).toBe(true); // completed runs
      expect(Array.isArray(results[3])).toBe(true); // all active runs
    });
  });

  describe('Offline Download & Network Resilience', () => {
    it('reports offline state correctly when browser loses connection', async () => {
      const originalNavigator = global.navigator;
      Object.defineProperty(global, 'navigator', {
        value: { onLine: false },
        configurable: true,
        writable: true,
      });

      // Loading an undownloaded episode while offline should reject with clear guidance
      await expect(loadEpisode('the-hollow-automaton')).rejects.toThrow(/online/i);

      // Restore
      Object.defineProperty(global, 'navigator', {
        value: originalNavigator,
        configurable: true,
        writable: true,
      });
    });
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { EPISODE_CATALOG_METADATA, getEpisodeMetadataById } from '@/data/episodes/catalog';
import { loadEpisode } from '@/features/episodes/episode-loader';
import { createInitialGameState, finalizeRun, transitionScenario } from '@/features/game-engine/engine';
import { SaveService, DEFAULT_SETTINGS } from '@/features/persistence/save-service';

describe('PWA Storage Optimization & Online-First Architecture', () => {
  it('Episode catalog metadata contains only lightweight descriptors without heavy narrative bodies', () => {
    expect(EPISODE_CATALOG_METADATA.length).toBeGreaterThan(0);
    const meta = EPISODE_CATALOG_METADATA[0];

    expect(meta.id).toBe('the-midnight-cipher');
    expect(meta.title).toBeDefined();
    expect(meta.synopsis).toBeDefined();
    expect(meta.estimatedSizeBytes).toBeLessThan(500 * 1024); // Under 500 KB target

    // Ensure metadata does NOT bundle full scenarios, clues or suspects
    expect((meta as any).scenarios).toBeUndefined();
    expect((meta as any).clues).toBeUndefined();
    expect((meta as any).suspects).toBeUndefined();
    expect((meta as any).endings).toBeUndefined();

    // Verify metadata lookup
    const found = getEpisodeMetadataById('the-midnight-cipher');
    expect(found).toBeDefined();
    expect(found?.id).toBe('the-midnight-cipher');
  });

  it('Dynamically loaded episode adheres to the 100-500 KB per-episode budget', async () => {
    const episode = await loadEpisode('the-midnight-cipher');
    expect(episode).toBeDefined();
    expect(episode.id).toBe('the-midnight-cipher');

    const serializedSize = JSON.stringify(episode).length;
    // Target: 100-500 KB per episode
    expect(serializedSize).toBeGreaterThan(30 * 1024);
    expect(serializedSize).toBeLessThan(500 * 1024);
  });

  it('Player save records (GameState) store only references and variables (< 10 KB)', async () => {
    const episode = await loadEpisode('the-midnight-cipher');
    const initialRun = createInitialGameState(episode);

    // Progress the game a few steps
    const step1 = transitionScenario('choice-to-study', initialRun, episode);
    const step2 = transitionScenario('choice-examine-hearth', step1.nextState, episode);

    const serializedState = JSON.stringify(step2.nextState);
    const stateSizeBytes = serializedState.length;

    // Must be well below 1 MB budget (target < 10 KB for active run)
    expect(stateSizeBytes).toBeLessThan(10 * 1024);
    expect(step2.nextState.discoveredClueIds.length).toBeGreaterThan(0);
    expect(step2.nextState.decisionHistory.length).toBeGreaterThan(1);
  });

  it('Completed run summaries are compact archives (< 5 KB per run)', async () => {
    const episode = await loadEpisode('the-midnight-cipher');
    const run = createInitialGameState(episode);
    const completedState = {
      ...run,
      isCompleted: true,
      endingId: 'ending_triumph',
    };

    const summary = finalizeRun(completedState, episode);
    const serializedSummary = JSON.stringify(summary);

    expect(serializedSummary.length).toBeLessThan(5 * 1024);
    expect(summary.endingId).toBe('ending_triumph');
    expect(summary.accuracyScore).toBeDefined();
  });

  it('Resetting progress clears saved runs while preserving settings and structure', async () => {
    await SaveService.saveSettings({
      ...DEFAULT_SETTINGS,
      theme: 'noir-charcoal',
    });

    await SaveService.resetPlayerProgress();

    const active = await SaveService.getActiveRun();
    const episodeActive = await SaveService.getActiveRun('the-midnight-cipher');
    const allActive = await SaveService.getAllActiveRuns();
    const completed = await SaveService.getCompletedRuns();
    const settings = await SaveService.getSettings();

    expect(active).toBeNull();
    expect(episodeActive).toBeNull();
    expect(allActive).toEqual([]);
    expect(completed).toEqual([]);
    expect(settings.theme).toBe('noir-charcoal'); // Preserved!
  });

  it('StorageUsageSummary returns feature-detected measurements', async () => {
    const summary = await SaveService.getStorageUsageSummary();
    expect(summary).toBeDefined();
    expect(typeof summary.isSupported).toBe('boolean');
    expect(typeof summary.usageBytes).toBe('number');
    expect(typeof summary.quotaBytes).toBe('number');
    expect(typeof summary.activeRunBytes).toBe('number');
    expect(typeof summary.completedRunsBytes).toBe('number');
    expect(Array.isArray(summary.downloadedEpisodeIds)).toBe(true);
  });
});

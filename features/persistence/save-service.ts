import { CompletedRunSummary, Episode, GameState } from '@/features/episodes/types';

const DB_NAME = 'DetectiveInvestigationDB';
const DB_VERSION = 2;
const STORE_ACTIVE_RUN = 'active_run';
const STORE_COMPLETED_RUNS = 'completed_runs';
const STORE_SETTINGS = 'settings';
const STORE_OFFLINE_EPISODES = 'offline_episodes';

export interface GameSettings {
  soundEnabled: boolean;
  fontSize: 'compact' | 'normal' | 'relaxed';
  theme: 'paper-sepia' | 'noir-charcoal';
  readingComfortFont: boolean;
  highContrast: boolean;
  language: 'en' | 'hi';
}

export const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  fontSize: 'normal',
  theme: 'paper-sepia',
  readingComfortFont: false,
  highContrast: false,
  language: 'en',
};

export interface SerializedExportPayload {
  version: number;
  exportedAt: number;
  activeRun: GameState | null;
  completedRuns: CompletedRunSummary[];
  settings: GameSettings;
}

export interface StorageUsageSummary {
  isSupported: boolean;
  quotaBytes: number;
  usageBytes: number;
  usagePercent: number;
  activeRunBytes: number;
  completedRunsBytes: number;
  offlineEpisodesBytes: number;
  cacheStorageBytes: number;
  activeRunExists: boolean;
  completedRunsCount: number;
  downloadedEpisodeIds: string[];
}

export function isIndexedDBSupported(): boolean {
  return typeof window !== 'undefined' && typeof window.indexedDB !== 'undefined' && window.indexedDB !== null;
}

let cachedDbPromise: Promise<IDBDatabase> | null = null;

/**
 * Resets cached database connection (useful for testing and disaster recovery).
 */
export function resetDatabaseConnection(): void {
  cachedDbPromise = null;
}

/**
 * Opens or retrieves the shared cached IndexedDB database connection.
 * Automatically recovers from connection drops or unexpected close events.
 */
function openDatabase(): Promise<IDBDatabase> {
  if (!isIndexedDBSupported()) {
    return Promise.reject(new Error('IndexedDB not supported'));
  }

  if (cachedDbPromise) {
    return cachedDbPromise;
  }

  cachedDbPromise = new Promise((resolve, reject) => {
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains(STORE_ACTIVE_RUN)) {
          db.createObjectStore(STORE_ACTIVE_RUN, { keyPath: 'id' });
        }

        if (!db.objectStoreNames.contains(STORE_COMPLETED_RUNS)) {
          const store = db.createObjectStore(STORE_COMPLETED_RUNS, { keyPath: 'runId' });
          store.createIndex('completedAt', 'completedAt', { unique: false });
          store.createIndex('episodeId', 'episodeId', { unique: false });
        }

        if (!db.objectStoreNames.contains(STORE_SETTINGS)) {
          db.createObjectStore(STORE_SETTINGS, { keyPath: 'id' });
        }

        if (!db.objectStoreNames.contains(STORE_OFFLINE_EPISODES)) {
          db.createObjectStore(STORE_OFFLINE_EPISODES, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => {
        const db = request.result;
        db.onclose = () => {
          cachedDbPromise = null;
        };
        db.onversionchange = () => {
          db.close();
          cachedDbPromise = null;
        };
        resolve(db);
      };

      request.onerror = () => {
        cachedDbPromise = null;
        reject(request.error);
      };

      request.onblocked = () => {
        console.warn('IndexedDB connection open blocked by another tab');
      };
    } catch (err) {
      cachedDbPromise = null;
      reject(err);
    }
  });

  return cachedDbPromise;
}

function isValidGameState(obj: unknown): obj is GameState {
  if (!obj || typeof obj !== 'object') return false;
  const s = obj as Record<string, unknown>;
  return (
    typeof s.episodeId === 'string' &&
    typeof s.currentScenarioId === 'string' &&
    Array.isArray(s.discoveredClueIds) &&
    typeof s.variables === 'object' &&
    s.variables !== null
  );
}

/**
 * LocalStorage Fallback helper for environments where IndexedDB might fail or be blocked.
 */
const LocalStorageFallback = {
  saveActiveRun(run: GameState | null, episodeId?: string) {
    if (typeof window === 'undefined') return;
    try {
      if (run) {
        try {
          localStorage.setItem('detective_active_run', JSON.stringify(run));
          localStorage.setItem(`detective_active_run_${run.episodeId}`, JSON.stringify(run));
        } catch (quotaErr: any) {
          if (quotaErr?.name === 'QuotaExceededError' || quotaErr?.code === 22) {
            // Trim completed runs to free up critical storage
            const runs = this.getCompletedRuns().slice(0, 10);
            try {
              localStorage.setItem('detective_completed_runs', JSON.stringify(runs));
              localStorage.setItem('detective_active_run', JSON.stringify(run));
              localStorage.setItem(`detective_active_run_${run.episodeId}`, JSON.stringify(run));
            } catch {}
          } else {
            console.warn('LocalStorage save failed', quotaErr);
          }
        }
      } else if (episodeId) {
        localStorage.removeItem(`detective_active_run_${episodeId}`);
        const current = this.getActiveRun();
        if (current && current.episodeId === episodeId) {
          localStorage.removeItem('detective_active_run');
        }
      } else {
        // Clear all active runs from localStorage
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key === 'detective_active_run' || key.startsWith('detective_active_run_'))) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
      }
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  },

  getActiveRun(episodeId?: string): GameState | null {
    if (typeof window === 'undefined') return null;
    try {
      if (episodeId) {
        const epRaw = localStorage.getItem(`detective_active_run_${episodeId}`);
        if (epRaw) {
          const parsed = JSON.parse(epRaw);
          if (isValidGameState(parsed)) return parsed;
        }
      }
      const raw = localStorage.getItem('detective_active_run');
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (isValidGameState(parsed)) {
        if (!episodeId || parsed.episodeId === episodeId) {
          return parsed;
        }
      }
      return null;
    } catch {
      return null;
    }
  },

  saveCompletedRun(run: CompletedRunSummary) {
    if (typeof window === 'undefined') return;
    try {
      const runs = this.getCompletedRuns();
      const updated = [run, ...runs.filter((r) => r.runId !== run.runId)];
      try {
        localStorage.setItem('detective_completed_runs', JSON.stringify(updated));
      } catch (quotaErr: any) {
        // Quota exceeded: trim down to 20 most recent runs
        if (quotaErr?.name === 'QuotaExceededError' || quotaErr?.code === 22) {
          const trimmed = updated.slice(0, 20);
          try {
            localStorage.setItem('detective_completed_runs', JSON.stringify(trimmed));
          } catch {}
        } else {
          console.warn('LocalStorage completed runs failed', quotaErr);
        }
      }
    } catch (e) {
      console.warn('LocalStorage completed runs failed', e);
    }
  },

  getCompletedRuns(): CompletedRunSummary[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('detective_completed_runs');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  saveSettings(settings: GameSettings) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('detective_settings', JSON.stringify(settings));
    } catch {}
  },

  getSettings(): GameSettings {
    if (typeof window === 'undefined') return DEFAULT_SETTINGS;
    try {
      const raw = localStorage.getItem('detective_settings');
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },
};

export const SaveService = {
  /**
   * Saves the active investigation run (both general current and per-episode slot).
   */
  async saveActiveRun(run: GameState): Promise<void> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_ACTIVE_RUN, 'readwrite');
      const store = tx.objectStore(STORE_ACTIVE_RUN);
      store.put({ id: 'current', ...run });
      store.put({ id: `episode_${run.episodeId}`, ...run });
      await new Promise<void>((res, rej) => {
        tx.oncomplete = () => res();
        tx.onerror = () => rej(tx.error);
      });
    } catch (err) {
      // Fallback
      LocalStorageFallback.saveActiveRun(run);
    }
  },

  /**
   * Retrieves active investigation for a specific episode, or current if omitted.
   */
  async getActiveRun(episodeId?: string): Promise<GameState | null> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_ACTIVE_RUN, 'readonly');
      const store = tx.objectStore(STORE_ACTIVE_RUN);

      if (episodeId) {
        const epReq = store.get(`episode_${episodeId}`);
        const epResult = await new Promise<any>((res, rej) => {
          epReq.onsuccess = () => res(epReq.result);
          epReq.onerror = () => rej(epReq.error);
        });
        if (epResult) {
          const { id, ...state } = epResult;
          if (isValidGameState(state)) return state as GameState;
        }
      }

      const req = store.get('current');
      const result = await new Promise<any>((res, rej) => {
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      if (result) {
        const { id, ...state } = result;
        if (isValidGameState(state)) {
          if (!episodeId || state.episodeId === episodeId) {
            return state as GameState;
          }
        }
      }
      return null;
    } catch (err) {
      return LocalStorageFallback.getActiveRun(episodeId);
    }
  },

  /**
   * Returns all active in-progress runs across all episodes.
   */
  async getAllActiveRuns(): Promise<GameState[]> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_ACTIVE_RUN, 'readonly');
      const store = tx.objectStore(STORE_ACTIVE_RUN);
      const req = store.getAll();
      const results = await new Promise<any[]>((res, rej) => {
        req.onsuccess = () => res(req.result || []);
        req.onerror = () => rej(req.error);
      });
      const activeRuns: GameState[] = [];
      const seenEpisodes = new Set<string>();

      for (const item of results) {
        if (!item || item.id === 'current') continue;
        const { id, ...state } = item;
        if (isValidGameState(state) && !state.isCompleted && !seenEpisodes.has(state.episodeId)) {
          seenEpisodes.add(state.episodeId);
          activeRuns.push(state as GameState);
        }
      }

      // Check current fallback if empty
      if (activeRuns.length === 0) {
        const current = await this.getActiveRun();
        if (current && !current.isCompleted) {
          activeRuns.push(current);
        }
      }

      return activeRuns;
    } catch {
      const current = LocalStorageFallback.getActiveRun();
      return current && !current.isCompleted ? [current] : [];
    }
  },

  /**
   * Clears the active run for a specific episode or all active runs if episodeId is omitted.
   */
  async clearActiveRun(episodeId?: string): Promise<void> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_ACTIVE_RUN, 'readwrite');
      const store = tx.objectStore(STORE_ACTIVE_RUN);
      if (episodeId) {
        store.delete(`episode_${episodeId}`);
        const curReq = store.get('current');
        curReq.onsuccess = () => {
          if (curReq.result && curReq.result.episodeId === episodeId) {
            store.delete('current');
          }
        };
      } else {
        // If no episodeId is provided, clear all active runs
        store.clear();
      }
      await new Promise<void>((res, rej) => {
        tx.oncomplete = () => res();
        tx.onerror = () => rej(tx.error);
      });
    } catch {
      LocalStorageFallback.saveActiveRun(null, episodeId);
    }
    // Always mirror clearance to fallback
    LocalStorageFallback.saveActiveRun(null, episodeId);
  },

  /**
   * Archives a completed run into history.
   */
  async recordCompletedRun(run: CompletedRunSummary): Promise<void> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_COMPLETED_RUNS, 'readwrite');
      tx.objectStore(STORE_COMPLETED_RUNS).put(run);
      await new Promise<void>((res, rej) => {
        tx.oncomplete = () => res();
        tx.onerror = () => rej(tx.error);
      });
    } catch {
      LocalStorageFallback.saveCompletedRun(run);
    }
  },

  /**
   * Retrieves all completed runs sorted with newest first.
   */
  async getCompletedRuns(): Promise<CompletedRunSummary[]> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_COMPLETED_RUNS, 'readonly');
      const req = tx.objectStore(STORE_COMPLETED_RUNS).getAll();
      const results = await new Promise<CompletedRunSummary[]>((res, rej) => {
        req.onsuccess = () => res(req.result || []);
        req.onerror = () => rej(req.error);
      });
      return results.sort((a, b) => b.completedAt - a.completedAt);
    } catch {
      return LocalStorageFallback.getCompletedRuns();
    }
  },

  /**
   * Deletes a specific completed run from archives.
   */
  async deleteCompletedRun(runId: string): Promise<void> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_COMPLETED_RUNS, 'readwrite');
      tx.objectStore(STORE_COMPLETED_RUNS).delete(runId);
      await new Promise<void>((res, rej) => {
        tx.oncomplete = () => res();
        tx.onerror = () => rej(tx.error);
      });
    } catch {
      const runs = LocalStorageFallback.getCompletedRuns().filter((r) => r.runId !== runId);
      localStorage.setItem('detective_completed_runs', JSON.stringify(runs));
    }
  },

  /**
   * Loads saved user preferences.
   */
  async getSettings(): Promise<GameSettings> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_SETTINGS, 'readonly');
      const req = tx.objectStore(STORE_SETTINGS).get('user_prefs');
      const res = await new Promise<any>((resolve) => {
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      });
      if (res && res.settings) {
        return { ...DEFAULT_SETTINGS, ...res.settings };
      }
      return LocalStorageFallback.getSettings();
    } catch {
      return LocalStorageFallback.getSettings();
    }
  },

  /**
   * Persists user settings.
   */
  async saveSettings(settings: GameSettings): Promise<void> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_SETTINGS, 'readwrite');
      tx.objectStore(STORE_SETTINGS).put({ id: 'user_prefs', settings });
      await new Promise<void>((res, rej) => {
        tx.oncomplete = () => res();
        tx.onerror = () => rej(tx.error);
      });
    } catch {
      LocalStorageFallback.saveSettings(settings);
    }
  },

  /**
   * Exports entire game state (active run, history, settings) as a downloadable payload.
   */
  async exportFullSaveData(): Promise<SerializedExportPayload> {
    const [activeRun, completedRuns, settings] = await Promise.all([
      this.getActiveRun(),
      this.getCompletedRuns(),
      this.getSettings(),
    ]);

    return {
      version: 1,
      exportedAt: Date.now(),
      activeRun,
      completedRuns,
      settings,
    };
  },

  /**
   * Imports a save payload with integrity checks.
   */
  async importFullSaveData(payload: SerializedExportPayload): Promise<{ success: boolean; message: string }> {
    if (!payload || typeof payload !== 'object') {
      return { success: false, message: 'Invalid payload: not an object' };
    }
    if (!Array.isArray(payload.completedRuns)) {
      return { success: false, message: 'Invalid format: missing completedRuns list' };
    }

    try {
      if (payload.activeRun) {
        await this.saveActiveRun(payload.activeRun);
      }
      for (const run of payload.completedRuns) {
        if (run && run.runId) {
          await this.recordCompletedRun(run);
        }
      }
      if (payload.settings) {
        await this.saveSettings(payload.settings);
      }
      return { success: true, message: `Successfully restored ${payload.completedRuns.length} completed run(s).` };
    } catch (e: any) {
      return { success: false, message: `Import failed: ${e.message}` };
    }
  },

  /**
   * Saves an episode for offline play in the dedicated offline episodes store.
   */
  async saveOfflineDownloadedEpisode(episode: Episode): Promise<void> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_OFFLINE_EPISODES, 'readwrite');
      const store = tx.objectStore(STORE_OFFLINE_EPISODES);
      store.put({ id: episode.id, downloadedAt: Date.now(), episode });
      await new Promise<void>((res, rej) => {
        tx.oncomplete = () => res();
        tx.onerror = () => rej(tx.error);
      });
    } catch (e) {
      console.warn('Failed to save offline episode to IndexedDB', e);
    }
  },

  /**
   * Retrieves an offline downloaded episode, or null if not downloaded.
   */
  async getOfflineDownloadedEpisode(episodeId: string): Promise<Episode | null> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_OFFLINE_EPISODES, 'readonly');
      const store = tx.objectStore(STORE_OFFLINE_EPISODES);
      const req = store.get(episodeId);
      const record = await new Promise<any>((res, rej) => {
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      return record && record.episode ? (record.episode as Episode) : null;
    } catch {
      return null;
    }
  },

  /**
   * Removes an offline downloaded episode without touching player saves.
   */
  async removeOfflineDownloadedEpisode(episodeId: string): Promise<void> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_OFFLINE_EPISODES, 'readwrite');
      const store = tx.objectStore(STORE_OFFLINE_EPISODES);
      store.delete(episodeId);
      await new Promise<void>((res, rej) => {
        tx.oncomplete = () => res();
        tx.onerror = () => rej(tx.error);
      });
    } catch (e) {
      console.warn('Failed to remove offline episode', e);
    }
  },

  /**
   * Returns list of offline downloaded episode IDs.
   */
  async listOfflineDownloadedEpisodeIds(): Promise<string[]> {
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_OFFLINE_EPISODES, 'readonly');
      const store = tx.objectStore(STORE_OFFLINE_EPISODES);
      const req = store.getAllKeys();
      const keys = await new Promise<IDBValidKey[]>((res, rej) => {
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      return keys.map((k) => String(k));
    } catch {
      return [];
    }
  },

  /**
   * Resets player progress (active run & completed runs) without removing offline downloads or preferences.
   */
  async resetPlayerProgress(): Promise<void> {
    await this.clearActiveRun();
    if (isIndexedDBSupported()) {
      try {
        const db = await openDatabase();
        const tx = db.transaction([STORE_ACTIVE_RUN, STORE_COMPLETED_RUNS], 'readwrite');
        tx.objectStore(STORE_ACTIVE_RUN).clear();
        tx.objectStore(STORE_COMPLETED_RUNS).clear();
        await new Promise<void>((res, rej) => {
          tx.oncomplete = () => res();
          tx.onerror = () => rej(tx.error);
        });
      } catch (e) {
        console.warn('Failed to clear completed runs store', e);
      }
    }
    if (typeof window !== 'undefined') {
      try {
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (
            key &&
            (key.startsWith('detective_active_run') ||
              key.startsWith('detective_completed_runs') ||
              key === 'detective_active_run' ||
              key === 'detective_completed_runs')
          ) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
      } catch {}
    }
  },

  /**
   * Clears nonessential cache storage (episodes and media) without touching IndexedDB saves.
   */
  async clearNonessentialCaches(): Promise<{ freedBytes: number }> {
    let freedBytes = 0;
    if (typeof window !== 'undefined' && 'caches' in window) {
      try {
        const cacheKeys = await caches.keys();
        for (const key of cacheKeys) {
          // Keep app shell cache, evict dynamic and episode caches
          if (key.includes('episodes') || key.includes('media') || key === 'detective-game-v1') {
            await caches.delete(key);
            freedBytes += 1024 * 300;
          }
        }
      } catch (e) {
        console.warn('Failed to clear nonessential caches', e);
      }
    }
    return { freedBytes };
  },

  /**
   * Gets honest, feature-detected storage estimates.
   */
  async getStorageUsageSummary(): Promise<StorageUsageSummary> {
    const isSupported = typeof navigator !== 'undefined' && 'storage' in navigator && typeof navigator.storage.estimate === 'function';
    let quotaBytes = 0;
    let usageBytes = 0;

    if (isSupported) {
      try {
        const estimate = await navigator.storage.estimate();
        quotaBytes = estimate.quota || 0;
        usageBytes = estimate.usage || 0;
      } catch {}
    }

    const [activeRun, completedRuns, downloadedIds] = await Promise.all([
      this.getActiveRun(),
      this.getCompletedRuns(),
      this.listOfflineDownloadedEpisodeIds(),
    ]);

    const activeRunBytes = activeRun ? JSON.stringify(activeRun).length : 0;
    const completedRunsBytes = JSON.stringify(completedRuns).length;
    const offlineEpisodesBytes = downloadedIds.length * 184320;

    return {
      isSupported,
      quotaBytes,
      usageBytes,
      usagePercent: quotaBytes > 0 ? Math.min(100, Math.round((usageBytes / quotaBytes) * 100)) : 0,
      activeRunBytes,
      completedRunsBytes,
      offlineEpisodesBytes,
      cacheStorageBytes: Math.max(0, usageBytes - (activeRunBytes + completedRunsBytes + offlineEpisodesBytes)),
      activeRunExists: !!activeRun,
      completedRunsCount: completedRuns.length,
      downloadedEpisodeIds: downloadedIds,
    };
  },
};

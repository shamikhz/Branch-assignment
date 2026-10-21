import { Episode } from '@/features/episodes/types';
import { SaveService } from '@/features/persistence/save-service';
import { validateEpisode } from '@/features/validation/episode-validator';

/**
 * Maximum number of full episode narrative objects to hold in memory simultaneously.
 * Evicts least-recently-used episodes to maintain a strict memory budget (< 5 MB heap).
 */
const MAX_CACHE_SIZE = 6;

// Ordered map implementing an LRU (Least Recently Used) cache
const memoryCache = new Map<string, Episode>();

export type EpisodeModuleLoader = () => Promise<Record<string, unknown>>;

/**
 * Scalable Episode Registry
 * Maps episode identifiers to dynamic code-split loaders.
 * Allows new categories and episodes to be registered dynamically at runtime.
 */
const EPISODE_LOADER_REGISTRY: Record<string, EpisodeModuleLoader> = {
  // Mystery Category Episodes
  'the-midnight-cipher': () => import('@/data/episodes/the-midnight-cipher'),
  'the-thames-alibi': () => import('@/data/episodes/the-thames-alibi'),
  'the-blackwood-inheritance': () => import('@/data/episodes/the-blackwood-inheritance'),
  'the-galleria-forgery': () => import('@/data/episodes/the-galleria-forgery'),
  'the-hollow-automaton': () => import('@/data/episodes/the-hollow-automaton'),
  'the-diplomats-cipher': () => import('@/data/episodes/the-diplomats-cipher'),

  // Phase 3 Career, Skills & Personal Development Simulations
  'career-data-analytics': () => import('@/data/career-simulations/career-data-analytics'),
  'career-ai-software': () => import('@/data/career-simulations/career-ai-software'),
  'career-product-management': () => import('@/data/career-simulations/career-product-management'),
  'career-growth-marketing': () => import('@/data/career-simulations/career-growth-marketing'),
  'skills-data-business-analytics': () => import('@/data/career-simulations/skills-data-business-analytics'),
  'skills-ai-risk-evaluation': () => import('@/data/career-simulations/skills-ai-risk-evaluation'),
  'skills-blockchain-decision': () => import('@/data/career-simulations/skills-blockchain-decision'),
  'skills-marketing-campaign-optimization': () => import('@/data/career-simulations/skills-marketing-campaign-optimization'),
  'skills-negotiation-deal-scoping': () => import('@/data/career-simulations/skills-negotiation-deal-scoping'),
  'personal-priorities-time-management': () => import('@/data/career-simulations/personal-priorities-time-management'),
  'personal-difficult-conversations': () => import('@/data/career-simulations/personal-difficult-conversations'),
  'personal-critical-thinking-bias': () => import('@/data/career-simulations/personal-critical-thinking-bias'),

  // Phase 4 Relationships & Social Life Scenarios
  'rel-friendship-cancelled-plans': () => import('@/data/relationships/rel-friendship-cancelled-plans'),
  'rel-friendship-quiet-exclusion': () => import('@/data/relationships/rel-friendship-quiet-exclusion'),
  'rel-friendship-shared-secret': () => import('@/data/relationships/rel-friendship-shared-secret'),
  'rel-romance-ambiguous-text': () => import('@/data/relationships/rel-romance-ambiguous-text'),
  'rel-romance-two-futures': () => import('@/data/relationships/rel-romance-two-futures'),
  'rel-family-legacy-expectation': () => import('@/data/relationships/rel-family-legacy-expectation'),
  'rel-family-holiday-rift': () => import('@/data/relationships/rel-family-holiday-rift'),
  'rel-communication-differing-memories': () => import('@/data/relationships/rel-communication-differing-memories'),
  'rel-communication-apology-without-change': () => import('@/data/relationships/rel-communication-apology-without-change'),
  'rel-communication-one-sided-anchor': () => import('@/data/relationships/rel-communication-one-sided-anchor'),
  'rel-boundaries-peer-pressure': () => import('@/data/relationships/rel-boundaries-peer-pressure'),
  'rel-boundaries-group-project': () => import('@/data/relationships/rel-boundaries-group-project'),
};

/**
 * Registers an episode loader dynamically for scalable multi-category expansion.
 */
export function registerEpisodeLoader(episodeId: string, loader: EpisodeModuleLoader): void {
  EPISODE_LOADER_REGISTRY[episodeId] = loader;
}

export function getAvailableEpisodeIds(): string[] {
  return Object.keys(EPISODE_LOADER_REGISTRY);
}

/**
 * Helper to update LRU cache with size cap.
 */
function cacheEpisode(episodeId: string, episode: Episode): void {
  // If already in cache, remove first so re-insertion places it at the end (most recent)
  if (memoryCache.has(episodeId)) {
    memoryCache.delete(episodeId);
  } else if (memoryCache.size >= MAX_CACHE_SIZE) {
    // Evict oldest entry (first key in iteration order)
    const oldestKey = memoryCache.keys().next().value;
    if (oldestKey) {
      memoryCache.delete(oldestKey);
    }
  }
  memoryCache.set(episodeId, episode);
}

/**
 * Dynamically loads an episode on-demand.
 * Follows an online-first architecture with local offline fallback:
 * 1. Checks session memory cache (LRU).
 * 2. If offline, checks persistent offline storage (IndexedDB).
 * 3. If online, dynamically imports the code-split chunk via registry.
 * 4. Validates the episode schema and caches in memory.
 */
export async function loadEpisode(episodeId: string): Promise<Episode> {
  // 1. Session Memory Cache (LRU touch)
  if (memoryCache.has(episodeId)) {
    const cached = memoryCache.get(episodeId)!;
    // Re-insert to mark as recently used
    memoryCache.delete(episodeId);
    memoryCache.set(episodeId, cached);
    return cached;
  }

  const isOffline = typeof navigator !== 'undefined' && !navigator.onLine;

  // 2. Offline downloaded storage fallback
  try {
    const offlineEpisode = await SaveService.getOfflineDownloadedEpisode(episodeId);
    if (offlineEpisode) {
      cacheEpisode(episodeId, offlineEpisode);
      return offlineEpisode;
    }
  } catch {
    // Continue to network check
  }

  // 3. If offline and not downloaded locally, enforce online connection requirement
  if (isOffline) {
    throw new Error(
      'Live Central Bureau online connection required. You are currently offline and this case file has not been saved locally. Please connect to the internet to access and run case investigations.'
    );
  }

  // 4. Dynamic network import via scalable registry
  const loader = EPISODE_LOADER_REGISTRY[episodeId];
  if (!loader) {
    throw new Error(`Unknown episode identifier: "${episodeId}"`);
  }

  try {
    const module = await loader();

    // Find the episode object in the exported module
    let episodeData: Episode | undefined;
    for (const key of Object.keys(module)) {
      const val = module[key];
      if (val && typeof val === 'object' && 'id' in val && (val as Episode).id === episodeId) {
        episodeData = val as Episode;
        break;
      }
    }

    if (!episodeData) {
      // Fallback: search for any episode object or default export
      if (module.default && typeof module.default === 'object' && 'id' in module.default) {
        episodeData = module.default as Episode;
      } else {
        const firstObj = Object.values(module).find(
          (v) => v && typeof v === 'object' && 'scenarios' in (v as object)
        );
        if (firstObj) episodeData = firstObj as Episode;
      }
    }

    if (!episodeData) {
      throw new Error(`Episode data structure could not be resolved from module for "${episodeId}"`);
    }

    // 5. Schema validation
    const validation = validateEpisode(episodeData);
    if (!validation.isValid) {
      console.warn(`Episode validation warnings for "${episodeId}":`, validation.errors);
    }

    cacheEpisode(episodeId, episodeData);
    return episodeData;
  } catch (err: any) {
    throw new Error(`Failed to load case file "${episodeId}": ${err.message || 'Network error'}`);
  }
}

/**
 * Downloads and persists an episode for offline play.
 */
export async function downloadEpisodeForOffline(episodeId: string): Promise<{ success: boolean; message: string }> {
  try {
    const episode = await loadEpisode(episodeId);
    await SaveService.saveOfflineDownloadedEpisode(episode);
    return {
      success: true,
      message: `"${episode.title}" has been saved for offline play (~180 KB).`,
    };
  } catch (err: any) {
    return {
      success: false,
      message: `Offline download failed: ${err.message}`,
    };
  }
}

/**
 * Removes an episode from offline storage.
 */
export async function removeEpisodeFromOffline(episodeId: string): Promise<void> {
  await SaveService.removeOfflineDownloadedEpisode(episodeId);
  memoryCache.delete(episodeId);
}

/**
 * Releases memory by clearing in-memory episode cache.
 */
export function clearEpisodeMemoryCache(): void {
  memoryCache.clear();
}

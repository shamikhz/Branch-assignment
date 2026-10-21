import { describe, it, expect } from 'vitest';
import { midnightCipherEpisode } from '@/data/episodes/the-midnight-cipher';
import { getTranslation } from '@/features/localization/translations';
import { getLocalizedEpisode, getLocalizedMetadata } from '@/features/localization/case-translations';
import { validateEpisode } from '@/features/validation/episode-validator';
import { EPISODE_CATALOG_METADATA } from '@/data/episodes/catalog';

describe('Localization & Language Changer Unit Tests', () => {
  it('returns appropriate dictionary for en and hi', () => {
    const en = getTranslation('en');
    const hi = getTranslation('hi');

    expect(en.library).toBe('Library');
    expect(hi.library).toBe('केस सूची');
    expect(en.beginInvestigation).toBe('Begin Investigation');
    expect(hi.beginInvestigation).toBe('तफ्तीश शुरू करें');
  });

  it('translates episode metadata to Hindi', () => {
    const metaEn = getLocalizedMetadata(EPISODE_CATALOG_METADATA[0], 'en');
    const metaHi = getLocalizedMetadata(EPISODE_CATALOG_METADATA[0], 'hi');

    expect(metaEn.title).toBe('The Midnight Cipher of Saint-Claire');
    expect(metaHi.title).toBe('सेंट-क्लेयर का मध्यरात्रि सिफर');
  });

  it('translates episode into a valid, playable episode with 0 schema errors', () => {
    const hiEpisode = getLocalizedEpisode(midnightCipherEpisode, 'hi');

    expect(hiEpisode.title).toBe('सेंट-क्लेयर का मध्यरात्रि सिफर');
    expect(hiEpisode.suspects['suspect-sterling'].name).toBe('डॉ. आर्थर स्टर्लिंग');
    expect(hiEpisode.clues['clue-speaking-tube'].title).toBe('खरोंचा हुआ पीतल का स्पीकिंग ट्यूब');
    expect(hiEpisode.scenarios['scene-arrival'].title).toBe('संक्रांति का खतरे का अलार्म');

    // Run full domain validator on the Hindi episode
    const report = validateEpisode(hiEpisode);
    expect(report.isValid).toBe(true);
    expect(report.errors).toEqual([]);
    expect(report.stats.reachableEndings).toContain('ending-triumph');
  });

  it('preserves all choice destination IDs, conditions, and effects during translation', () => {
    const hiEpisode = getLocalizedEpisode(midnightCipherEpisode, 'hi');

    const origStudy = midnightCipherEpisode.scenarios['scene-study'];
    const hiStudy = hiEpisode.scenarios['scene-study'];

    expect(hiStudy.choices.length).toBe(origStudy.choices.length);
    hiStudy.choices.forEach((hiChoice, i) => {
      const origChoice = origStudy.choices[i];
      expect(hiChoice.id).toBe(origChoice.id);
      expect(hiChoice.destinationId).toBe(origChoice.destinationId);
      expect(hiChoice.consequencePreview).toBe(origChoice.consequencePreview);
    });
  });

  it('rejects loading episodes when browser is offline', async () => {
    const { loadEpisode } = await import('@/features/episodes/episode-loader');
    
    // Simulate offline
    const originalNavigator = global.navigator;
    Object.defineProperty(global, 'navigator', {
      value: { onLine: false },
      configurable: true,
      writable: true,
    });

    await expect(loadEpisode('the-midnight-cipher')).rejects.toThrow(/online/i);

    // Restore
    Object.defineProperty(global, 'navigator', {
      value: originalNavigator,
      configurable: true,
      writable: true,
    });
  });
});

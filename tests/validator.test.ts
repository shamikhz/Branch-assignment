import { describe, it, expect } from 'vitest';
import { midnightCipherEpisode } from '@/data/episodes/the-midnight-cipher';
import { theThamesAlibiEpisode } from '@/data/episodes/the-thames-alibi';
import { theBlackwoodInheritanceEpisode } from '@/data/episodes/the-blackwood-inheritance';
import { theGalleriaForgeryEpisode } from '@/data/episodes/the-galleria-forgery';
import { theHollowAutomatonEpisode } from '@/data/episodes/the-hollow-automaton';
import { theDiplomatsCipherEpisode } from '@/data/episodes/the-diplomats-cipher';
import { validateEpisode } from '@/features/validation/episode-validator';

describe('Episode Validator Unit Tests', () => {
  const allEpisodes = [
    midnightCipherEpisode,
    theThamesAlibiEpisode,
    theBlackwoodInheritanceEpisode,
    theGalleriaForgeryEpisode,
    theHollowAutomatonEpisode,
    theDiplomatsCipherEpisode,
  ];

  it.each(allEpisodes)('validates case "$title" with zero schema errors and reachable endings', (ep) => {
    const report = validateEpisode(ep);
    if (!report.isValid) {
      console.error(`Validation errors for ${ep.title}:`, report.errors);
    }
    expect(report.isValid).toBe(true);
    expect(report.errors).toEqual([]);
    expect(report.stats.scenariosCount).toBeGreaterThan(3);
    expect(report.stats.cluesCount).toBeGreaterThan(5);
    expect(report.stats.connectionsCount).toBeGreaterThan(1);
    expect(report.stats.reachableEndings.length).toBeGreaterThanOrEqual(1);
  });

  it('detects broken choice destination references', () => {
    const brokenEpisode = JSON.parse(JSON.stringify(midnightCipherEpisode));
    brokenEpisode.scenarios['scene-arrival'].choices[0].destinationId = 'scene-does-not-exist';

    const report = validateEpisode(brokenEpisode);
    expect(report.isValid).toBe(false);
    expect(report.errors.some((e) => e.code === 'BROKEN_DESTINATION')).toBe(true);
  });

  it('detects unknown clue references in scenario discoveries', () => {
    const brokenEpisode = JSON.parse(JSON.stringify(midnightCipherEpisode));
    brokenEpisode.scenarios['scene-study'].cluesDiscovered.push('clue-non-existent');

    const report = validateEpisode(brokenEpisode);
    expect(report.isValid).toBe(false);
    expect(report.errors.some((e) => e.code === 'UNKNOWN_CLUE_DISCOVERED')).toBe(true);
  });
});

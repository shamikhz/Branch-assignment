import { Episode } from '@/features/episodes/types';
import { midnightCipherEpisode } from './the-midnight-cipher';
import { theThamesAlibiEpisode } from './the-thames-alibi';
import { theBlackwoodInheritanceEpisode } from './the-blackwood-inheritance';
import { theGalleriaForgeryEpisode } from './the-galleria-forgery';
import { theHollowAutomatonEpisode } from './the-hollow-automaton';
import { theDiplomatsCipherEpisode } from './the-diplomats-cipher';

export const EPISODE_CATALOG: Record<string, Episode> = {
  [midnightCipherEpisode.id]: midnightCipherEpisode,
  [theThamesAlibiEpisode.id]: theThamesAlibiEpisode,
  [theBlackwoodInheritanceEpisode.id]: theBlackwoodInheritanceEpisode,
  [theGalleriaForgeryEpisode.id]: theGalleriaForgeryEpisode,
  [theHollowAutomatonEpisode.id]: theHollowAutomatonEpisode,
  [theDiplomatsCipherEpisode.id]: theDiplomatsCipherEpisode,
};

export function getEpisodeById(id: string): Episode | undefined {
  return EPISODE_CATALOG[id];
}

export function getAllEpisodes(): Episode[] {
  return Object.values(EPISODE_CATALOG);
}

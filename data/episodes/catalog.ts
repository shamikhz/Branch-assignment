import { EpisodeMetadata } from '@/features/episodes/types';

export const EPISODE_CATALOG_METADATA: EpisodeMetadata[] = [
  {
    id: 'the-midnight-cipher',
    version: '1.0.0',
    title: 'The Midnight Cipher of Saint-Claire',
    subtitle: 'The Murder of Dr. Arthur Sterling & The Clockwork Crypt',
    synopsis:
      'Inside the foggy glasshouse of Saint-Claire Estate, famous clockmaker Dr. Arthur Sterling is found poisoned next to a broken brass box. Three suspects were present—each with a clear motive, opportunity, and suspicious alibis. Collect clues, connect the evidence, and name the real culprit before morning.',
    estimatedMinutes: 25,
    difficulty: 'Detective',
    caseType: 'locked_room',
    seriesId: 'london-constabulary',
    seriesName: 'London Constabulary Inquiries',
    seriesPart: 1,
    featured: true,
    releaseDate: '1928-10-24',
    timeSetting: 'Midnight, October 24, 1928',
    location: 'Conservatory of Saint-Claire Estate, London',
    initialScenarioId: 'conservatory_crime_scene',
    tags: ['Noir', 'Locked Room', 'Clockwork', 'Poison', 'Atmospheric'],
    totalCluesCount: 12,
    totalEndingsCount: 4,
    estimatedSizeBytes: 184320, // ~180 KB
  },
  {
    id: 'the-thames-alibi',
    version: '1.0.0',
    title: 'The Whispering Docks of Wapping',
    subtitle: 'The Disappearance of Inspector Vance & The Thames Smugglers',
    synopsis:
      'On a cold autumn night at the London docks, customs officer Donald Vance went missing from Wapping Pier. A bloodstained pocket watch, altered cargo records, and conflicting stories from boatmen point to a secret smuggling gang operating from a tavern cellar.',
    estimatedMinutes: 25,
    difficulty: 'Detective',
    caseType: 'missing_person',
    seriesId: 'london-constabulary',
    seriesName: 'London Constabulary Inquiries',
    seriesPart: 2,
    prerequisiteEpisodeId: 'the-midnight-cipher',
    releaseDate: '1894-11-14',
    timeSetting: 'Night, November 14, 1894',
    location: 'Wapping Wharves & The Gilded Anchor Tavern, London',
    initialScenarioId: 'scene-pier-arrival',
    tags: ['Missing Person', 'Smuggling', 'Noir', 'Thames', 'Deception'],
    totalCluesCount: 8,
    totalEndingsCount: 4,
    estimatedSizeBytes: 153600, // ~150 KB
  },
  {
    id: 'the-blackwood-inheritance',
    version: '1.0.0',
    title: 'The Blackwood Deed Conspiracy',
    subtitle: 'The Forged Wills of Alistair Blackwood & The Old Town Vault',
    synopsis:
      'In an old Edinburgh townhouse, scholar Alistair Blackwood passes away, leaving behind three completely different wills. When paper and ink tests reveal razor scratches and fake watermarks, a plot to cheat his daughter out of her rightful inheritance comes to light.',
    estimatedMinutes: 25,
    difficulty: 'Detective',
    caseType: 'disputed_will',
    seriesId: 'edinburgh-inquiries',
    seriesName: 'Scottish Crown Legal Inquiries',
    seriesPart: 1,
    releaseDate: '1912-10-12',
    timeSetting: 'Evening, October 12, 1912',
    location: 'Blackwood Antiquarian House, Royal Mile, Edinburgh',
    initialScenarioId: 'scene-study-arrival',
    tags: ['Disputed Will', 'Forgery', 'Edinburgh', 'Forensic', 'Historical'],
    totalCluesCount: 8,
    totalEndingsCount: 4,
    estimatedSizeBytes: 163840, // ~160 KB
  },
  {
    id: 'the-galleria-forgery',
    version: '1.0.0',
    title: 'The Phantom of the Renaissance',
    subtitle: 'The Theft of the Bella Donna & The Florence Museum Heist',
    synopsis:
      'Inside a famous art gallery in Florence, a priceless 15th-century painting was stolen during a brief 90-second power blackout and replaced with a fake. Modern paint analysis and special light tests reveal fresh artificial colors. Can you find the real painting and catch the thief?',
    estimatedMinutes: 25,
    difficulty: 'Detective',
    caseType: 'art_theft',
    seriesId: 'continental-inquiries',
    seriesName: 'Continental Art & Antiquities Inquiries',
    seriesPart: 1,
    featured: true,
    releaseDate: '1931-05-18',
    timeSetting: 'Midnight, May 18, 1931',
    location: 'Galleria dell’Accademia Private Salon, Florence',
    initialScenarioId: 'scene-gallery-blackout',
    tags: ['Art Theft', 'Forgery', 'Florence', 'Pigments', 'Heist'],
    totalCluesCount: 8,
    totalEndingsCount: 4,
    estimatedSizeBytes: 168960, // ~165 KB
  },
  {
    id: 'the-hollow-automaton',
    version: '1.0.0',
    title: 'The Turk of St. Jude’s',
    subtitle: 'The Unsolved Chess Automaton Murder & The Vienna Cold Case',
    synopsis:
      'Ten years after chess master Victor Kozlov was found dead inside a mechanical chess-playing machine, a newly discovered scoresheet reopens the cold case. Hidden mirrors, secret wire mechanisms, and stolen machine designs reveal a carefully planned murder.',
    estimatedMinutes: 25,
    difficulty: 'Master Sleuth',
    caseType: 'cold_case',
    seriesId: 'vienna-mysteries',
    seriesName: 'Austro-Hungarian Imperial Archives',
    seriesPart: 1,
    releaseDate: '1905-11-03',
    timeSetting: 'Autumn, November 3, 1905',
    location: 'Imperial Exhibition Hall & Mechanics Guild, Vienna',
    initialScenarioId: 'scene-exhibition-hall',
    tags: ['Cold Case', 'Chess', 'Automaton', 'Vienna', 'Mechanical'],
    totalCluesCount: 8,
    totalEndingsCount: 4,
    estimatedSizeBytes: 174080, // ~170 KB
  },
  {
    id: 'the-diplomats-cipher',
    version: '1.0.0',
    title: 'The Dover Night Express',
    subtitle: 'The Poisoning of Envoy Moretti & The Continental Treaty Conspiracy',
    synopsis:
      'On a luxury night train speeding through the snow towards London, Italian diplomat Count Lorenzo Moretti is found dead inside his locked train compartment. A strange poison smell, torn peace papers, and suspicious passenger movements point to a high-stakes spy mystery.',
    estimatedMinutes: 25,
    difficulty: 'Master Sleuth',
    caseType: 'espionage',
    seriesId: 'continental-inquiries',
    seriesName: 'Continental Art & Antiquities Inquiries',
    seriesPart: 2,
    prerequisiteEpisodeId: 'the-galleria-forgery',
    releaseDate: '1924-12-19',
    timeSetting: 'Night, December 19, 1924',
    location: 'Sleeper Car "Europa", Dover-to-London Night Express',
    initialScenarioId: 'scene-sleeper-corridor',
    tags: ['Espionage', 'Locked Room', 'Train', 'Conspiracy', 'Poison'],
    totalCluesCount: 8,
    totalEndingsCount: 4,
    estimatedSizeBytes: 179200, // ~175 KB
  },
];

import { CAREER_SIMULATIONS_METADATA } from '@/data/career-simulations/catalog';
import { RELATIONSHIPS_SCENARIOS_METADATA, toEpisodeMetadata } from '@/data/relationships/catalog';

export function getEpisodeMetadataById(id: string): EpisodeMetadata | undefined {
  const mysteryEp = EPISODE_CATALOG_METADATA.find((ep) => ep.id === id);
  if (mysteryEp) return mysteryEp;

  const careerSim = CAREER_SIMULATIONS_METADATA.find((c) => c.id === id);
  if (careerSim) {
    return {
      id: careerSim.id,
      version: '1.0.0',
      title: careerSim.title,
      subtitle: careerSim.subtitle,
      synopsis: careerSim.practicalTakeaway.description || careerSim.subtitle,
      estimatedMinutes: careerSim.estimatedMinutes,
      difficulty: careerSim.difficulty,
      timeSetting: 'Workplace Simulation',
      location: careerSim.category,
      initialScenarioId: 'scene-briefing',
      tags: careerSim.tags,
      totalCluesCount: 4,
      totalEndingsCount: 3,
      estimatedSizeBytes: 120000,
      featured: false,
    };
  }

  const relScenario = RELATIONSHIPS_SCENARIOS_METADATA.find((r) => r.id === id);
  if (relScenario) {
    return toEpisodeMetadata(relScenario);
  }

  return undefined;
}

export function getAllEpisodeMetadata(): EpisodeMetadata[] {
  return EPISODE_CATALOG_METADATA;
}

/**
 * Background imagery mapping for Noir Mystery & Investigation episodes and portals.
 */

export const HOME_BACKGROUND_IMAGE = '/images/backgrounds/home-bg.webp';

export const EPISODE_BACKGROUND_IMAGES: Record<string, string> = {
  'the-midnight-cipher': '/images/backgrounds/the-midnight-cipher.webp',
  'the-thames-alibi': '/images/backgrounds/the-thames-alibi.webp',
  'the-blackwood-inheritance': '/images/backgrounds/the-blackwood-inheritance.webp',
  'the-galleria-forgery': '/images/backgrounds/the-galleria-forgery.webp',
  'the-hollow-automaton': '/images/backgrounds/the-midnight-cipher.webp',

  // Phase 3 Career Simulations
  'career-data-analytics': '/images/career/tech-data-workstation.webp',
  'career-ai-software': '/images/career/tech-data-workstation.webp',
  'career-product-management': '/images/career/career-hub-hero.webp',
  'career-growth-marketing': '/images/career/career-hub-hero.webp',
  'skills-data-business-analytics': '/images/career/tech-data-workstation.webp',
  'skills-ai-risk-evaluation': '/images/career/tech-data-workstation.webp',
  'skills-blockchain-decision': '/images/career/career-hub-hero.webp',
  'skills-marketing-campaign-optimization': '/images/career/career-hub-hero.webp',
  'skills-negotiation-deal-scoping': '/images/career/career-hub-hero.webp',
  'personal-priorities-time-management': '/images/career/career-hub-hero.webp',
  'personal-difficult-conversations': '/images/career/career-hub-hero.webp',
  'personal-critical-thinking-bias': '/images/career/career-hub-hero.webp',

  // Phase 4 Relationships & Social Life Scenarios
  'rel-friendship-cancelled-plans': '/images/relationships/friendship-scene.webp',
  'rel-friendship-quiet-exclusion': '/images/relationships/friendship-scene.webp',
  'rel-friendship-shared-secret': '/images/relationships/friendship-scene.webp',
  'rel-romance-ambiguous-text': '/images/relationships/romance-scene.webp',
  'rel-romance-two-futures': '/images/relationships/romance-scene.webp',
  'rel-family-legacy-expectation': '/images/relationships/family-scene.webp',
  'rel-family-holiday-rift': '/images/relationships/family-scene.webp',
  'rel-communication-differing-memories': '/images/relationships/communication-scene.webp',
  'rel-communication-apology-without-change': '/images/relationships/communication-scene.webp',
  'rel-communication-one-sided-anchor': '/images/relationships/communication-scene.webp',
  'rel-boundaries-peer-pressure': '/images/relationships/friendship-scene.webp',
  'rel-boundaries-group-project': '/images/relationships/communication-scene.webp',
};

/**
 * Returns the relevant atmospheric background image for an episode.
 */
export function getEpisodeBackgroundImage(episodeId: string): string {
  return EPISODE_BACKGROUND_IMAGES[episodeId] || '/images/backgrounds/the-midnight-cipher.webp';
}

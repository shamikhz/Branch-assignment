import { Episode } from '@/features/episodes/types';

export const relRomanceTwoFuturesEpisode: Episode = {
  id: 'rel-romance-two-futures',
  version: '1.0.0',
  title: 'Two Futures',
  subtitle: 'Negotiate diverging life trajectories, avoid sacrificial martyrdom, and align long-term aspirations.',
  synopsis:
    'You and Clara have shared a life and an apartment for three years. Today, Clara received a dream offer: a prestigious two-year architecture fellowship at the Bauhaus institute in Berlin with full studio funding. Meanwhile, your industrial prototyping workshop in London has finally reached profitability after three grueling years. Neither of you wants to hold the other back, but neither life path can be seamlessly abandoned. How do you navigate love when both dreams are legitimate?',
  estimatedMinutes: 20,
  difficulty: 'Advanced',
  timeSetting: 'Sunday Evening Over Unpacked Mail, 7:00 PM',
  location: 'Shared Kitchen Table, Borough Market Apartment',
  tags: ['Romance', 'Life Goals', 'Compromise', 'Autonomy', 'Difficult Conversations'],
  initialScenarioId: 'scene-berlin-envelope',

  suspects: {
    'person-clara': {
      id: 'person-clara',
      name: 'Clara Dubois',
      role: 'Partner of Three Years & Sustainable Architect',
      age: 29,
      initialDemeanor: 'Torn between explosive professional joy and paralyzing relational guilt.',
      motive: 'Desires the international fellowship with all her heart, but dreads being the one who "chose career over love."',
      opportunity: 'Has 14 days to formally accept or decline the Berlin residency position.',
      alibi: 'Did not apply secretly; you both knew it was a long-shot application six months ago.',
      weakness: 'Prone to offering sacrificial compromises she will later bitterly resent.',
      associatedClueIds: ['clue-fellowship-terms', 'clue-workshop-leases'],
      interrogationSummary:
        'Clara admits: "If I stay here and pass this up, every time your workshop has a bad month, a dark part of me will secretly blame you. I don’t want to hate the person I love."',
    },
    'person-marcus': {
      id: 'person-marcus',
      name: 'Marcus Bell',
      role: 'Your Workshop Co-Founder & Mechanical Lead',
      age: 32,
      initialDemeanor: 'Pragmatic, loyal, firm on commercial realities.',
      motive: 'Needs your physical presence in London to fulfill newly signed fabrication contracts.',
      opportunity: 'Co-signed the 3-year commercial workshop lease in Bermondsey.',
      alibi: 'Supports your personal happiness, but cannot run CNC machinery alone.',
      weakness: 'Views long-distance relationships as inherently doomed.',
      associatedClueIds: ['clue-workshop-leases'],
      interrogationSummary:
        'Marcus reminds you: "We have three apprentices depending on payroll now. You can’t operate 5-axis mills from a laptop in Kreuzberg."',
    },
  },

  clues: {
    'clue-fellowship-terms': {
      id: 'clue-fellowship-terms',
      title: 'Bauhaus Residency Contract Details',
      category: 'document',
      shortDescription: 'Two-year funded research posting in Berlin with mandatory nine-month physical studio presence each year.',
      detailedAnalysis:
        'The fellowship provides a generous stipend, private studio, and exhibition budget, but stipulates at least 75% on-site residency in Germany during academic terms.',
      locationFound: 'Clara’s Acceptance Letter',
      tags: ['Residency', 'Career Milestone', 'Geography'],
    },
    'clue-workshop-leases': {
      id: 'clue-workshop-leases',
      title: 'London Fabrication Studio 3-Year Commitment',
      category: 'document',
      shortDescription: 'Personal guarantees on equipment leases and staff contracts through 2028.',
      detailedAnalysis:
        'Walking away from the London studio would bankrupt the business and forfeit £45,000 in personal equipment guarantees, while shutting down three apprentice training slots.',
      locationFound: 'Your Business Ledger',
      tags: ['Financial Anchor', 'Responsibility', 'Roots'],
    },
    'clue-distance-feasibility': {
      id: 'clue-distance-feasibility',
      title: 'London–Berlin Travel & Schedule Matrix',
      category: 'digital',
      shortDescription: 'Flight time is 1 hour 45 minutes; Eurostar/DB rail is 8 hours; remote sync is possible.',
      detailedAnalysis:
        'Berlin is in the CET time zone (one hour ahead). Long-weekend rotations twice a month are financially feasible within your combined earnings, provided both partners commit to disciplined travel.',
      locationFound: 'Calendar Feasibility Model',
      tags: ['Logistics', 'Compromise', 'Rhythm'],
    },
  },

  connections: [
    {
      id: 'conn-martyrdom-danger',
      clueA: 'clue-fellowship-terms',
      clueB: 'clue-workshop-leases',
      deductionTitle: 'The Poison of Forcible Sacrifice',
      deductionText:
        'If Clara gives up Berlin for your workshop, or if you bankrupt your business to follow her passively, the sacrificed dream will become an invisible tumor of resentment in the relationship.',
      unlockedFlag: 'flag_rejected_martyrdom',
    },
  ],

  hypotheses: {
    'hyp-structured-bi-city': {
      id: 'hyp-structured-bi-city',
      title: 'Design a High-Structure Two-Year Bi-City Partnership with Honest Checkpoints',
      accusedSuspectId: 'person-clara',
      motiveSummary: 'Both partners have earned monumental career breakthroughs that cannot be casually discarded.',
      methodSummary: 'Refuse mutual martyrdom, embrace a defined 24-month long-distance architecture, and set six-month milestone reviews.',
      requiredClueIds: ['clue-fellowship-terms', 'clue-workshop-leases', 'clue-distance-feasibility'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-synchronized-expansion',
      failureEndingId: 'ending-martyrdom-collapse',
    },
  },

  scenarios: {
    'scene-berlin-envelope': {
      id: 'scene-berlin-envelope',
      title: 'The Letter on the Teapot',
      location: 'Kitchen Table, Borough Market',
      narrative: [
        'The smell of roasted vegetables fills the kitchen. On the butcher block counter, Clara’s acceptance letter from the Bauhaus Foundation rests next to the salt shaker.',
        'Clara is leaning against the sink, holding a glass of water without drinking it. She looks at you with wide, luminous eyes—half ecstatic, half terrified.',
        '"They chose three people out of four hundred applicants," she says, her voice trembling. "It’s everything I’ve worked for since university. But... you just signed the Bermondsey lease last month."',
      ],
      dialogue: [
        {
          speaker: 'Clara',
          text: 'Tell me honestly. Is this the end of us, or do I just email them tomorrow and say no?',
          mood: 'grief',
        },
      ],
      cluesDiscovered: ['clue-fellowship-terms', 'clue-workshop-leases'],
      choices: [
        {
          id: 'choice-celebrate-first',
          text: 'Cross the room and hold her: "First of all, you beat out four hundred architects in Europe. We are celebrating that tonight. Tomorrow we solve the logistics."',
          destinationId: 'scene-clear-eyed-exploration',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'emotional_generosity', value: 2 },
            { type: 'setFlag', target: 'flag_celebrated_first', value: true },
          ],
        },
        {
          id: 'choice-demand-sacrifice-implicitly',
          text: '"You know I can’t move to Berlin, Clara. My whole life and livelihood are tied to this workshop. If you take this, you’re choosing to leave."',
          destinationId: 'scene-guilt-ultimatum',
          consequencePreview: 'Direct',
          effects: [
            { type: 'decrementVariable', target: 'emotional_generosity', value: 2 },
            { type: 'setFlag', target: 'flag_issued_guilt_ultimatum', value: true },
          ],
        },
        {
          id: 'choice-offer-reckless-martyrdom',
          text: '"I’ll just close the workshop and come with you. Your fellowship is more important than my little shop."',
          destinationId: 'scene-false-martyrdom',
          consequencePreview: 'Risky',
          effects: [
            { type: 'setFlag', target: 'flag_offered_self_erasure', value: true },
          ],
        },
      ],
    },

    'scene-clear-eyed-exploration': {
      id: 'scene-clear-eyed-exploration',
      title: 'The Two-Year Blueprint',
      location: 'Living Room Floor with Notebooks, Monday Evening',
      narrative: [
        'Twenty-four hours later, the initial shock has settled into focused determination. You have laptops open on the floor, drafting calendars, flight routes, and monthly budgets.',
        '"Berlin is only an hour and forty minutes away by air," you map out. "It’s not Australia. It’s closer than Edinburgh in travel time."',
        'Clara traces the line between London and Berlin on the screen. "Long-distance ruins people when it has no end date, or when one person feels like an abandoned spectator. If we do this, what are our non-negotiables?"',
      ],
      dialogue: [
        {
          speaker: 'Clara',
          text: 'I don’t want a relationship where we just text "how was your day" while living separate lives. How do we keep our soul alive across 600 miles?',
          mood: 'intrigued',
        },
      ],
      cluesDiscovered: ['clue-distance-feasibility'],
      choices: [
        {
          id: 'choice-structured-bi-city-pact',
          text: '"Every three weeks, one of us gets on a flight—alternating hosts. We protect dedicated summer and winter residency months together. And if at six months it’s tearing us apart, we re-evaluate without guilt."',
          destinationId: 'scene-bi-city-agreement',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'strategic_maturity', value: 2 },
            { type: 'setFlag', target: 'flag_structured_bi_city_pact', value: true },
          ],
        },
        {
          id: 'choice-propose-open-relationship',
          text: '"Maybe we should take a complete break while you’re in Berlin and see where we are in two years."',
          destinationId: 'scene-the-clean-break',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'setFlag', target: 'flag_proposed_break', value: true },
          ],
        },
      ],
    },

    'scene-guilt-ultimatum': {
      id: 'scene-guilt-ultimatum',
      title: 'The Stifled Ambition',
      location: 'Kitchen Counter',
      isEnding: true,
      endingId: 'ending-martyrdom-collapse',
      narrative: [
        'By framing Clara’s fellowship as an act of personal abandonment, you forced her into a corner of agonizing guilt.',
        'Two days later, Clara declines the fellowship. She stays in London. On paper, your partnership was "saved." But within three months, an icy pall descends on the apartment.',
        'Every time Clara works late on routine local commercial retrofits, she looks at design journals with hollow sadness. The resentment is silent, but it is eating the marrow of your love.',
      ],
      dialogue: [
        {
          speaker: 'Clara',
          text: 'I’m here, aren’t I? What else do you want from me?',
          mood: 'evasive',
        },
      ],
      choices: [],
    },

    'scene-false-martyrdom': {
      id: 'scene-false-martyrdom',
      title: 'The Resentful Passenger',
      location: 'Bermondsey Workshop Floor',
      narrative: [
        'You offered to close your shop and accompany Clara to Germany. But when you tell Marcus, the reality crashes down: you would forfeit £45,000, fire your apprentices, and arrive in Berlin as a resentful, unemployed dependent.',
        'Clara sees it immediately. "You’d hate me within six months," she says softly. "You’d be sitting in our Berlin flat with nothing to build, watching me go to the studio every morning. That’s not love; that’s setting yourself on fire to keep me warm."',
      ],
      dialogue: [
        {
          speaker: 'Clara',
          text: 'I fell in love with someone who has purpose and fire. Don’t extinguish yours to become my shadow.',
          mood: 'calm',
        },
      ],
      choices: [
        {
          id: 'choice-pivot-to-mature-solution',
          text: 'Recalibrate away from martyrdom and build a realistic two-city structure.',
          destinationId: 'scene-clear-eyed-exploration',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-bi-city-agreement': {
      id: 'scene-bi-city-agreement',
      title: 'The Departure Platform at St Pancras',
      location: 'Eurostar Platform, Three Months Later',
      isEnding: true,
      endingId: 'ending-synchronized-expansion',
      narrative: [
        'October arrives with golden leaves. Clara’s suitcases are packed. You stand beside the train doors with coffee cups in hand.',
        'There is sadness, but it is clean and noble, unburdened by guilt or suppressed resentment. You have flights booked for November; she has flights booked for London in December. Your workshop in Bermondsey is thriving, and her studio in Kreuzberg is ready for fabrication.',
        'You are not staying together out of inertia or fear; you are choosing each other across geography with open eyes.',
      ],
      dialogue: [
        {
          speaker: 'Clara',
          text: 'Thank you for not making me choose between my dreams and my heart.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-the-clean-break': {
      id: 'scene-the-clean-break',
      title: 'The Graceful Parting',
      location: 'Apartment Packing Day',
      isEnding: true,
      endingId: 'ending-graceful-parting',
      narrative: [
        'Through long, tender conversations, you both realized that you are at different evolutionary chapters. Clara needs total immersion in international architecture; you need deep, grounded roots in your craft in London.',
        'Rather than slowly poisoning each other through two years of agonizing distance and failed video calls, you choose to release each other with deep gratitude and mutual honor.',
        'It hurts immensely, but the parting is clean, respectful, and dignified.',
      ],
      dialogue: [
        {
          speaker: 'Clara',
          text: 'We loved each other well for three beautiful years. That will always be true.',
          mood: 'calm',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-synchronized-expansion': {
      id: 'ending-synchronized-expansion',
      title: 'Synchronized Expansion: Two Lives, One Horizon',
      tier: 'triumph',
      badge: 'RELATIONAL MATURITY',
      narrative: [
        'You proved that mature love does not demand the truncation of either partner’s potential. By refusing both petty ultimatums and reckless martyrdom, you built a structured, bi-city partnership that honored both callings.',
        'The two years were demanding, requiring rigorous scheduling, intentional intimacy, and emotional resilience. But you emerged with both careers triumphant and a partnership proven in the fire of independence.',
      ],
      summary: 'You engineered a disciplined two-city partnership that protected both dreams without breeding resentment.',
      criteriaReview: {
        theTruth:
          'Neither the workshop nor the fellowship could be sacrificed without destroying the emotional integrity of the relationship.',
        yourDeduction:
          'You correctly identified that long-distance is sustainable when anchored by a finite timeline, frequent predictable visits, and mutual career celebration.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Rejected false martyrdom and guilt-based coercion.',
          'Built concrete logistical agreements with financial realism.',
          'Established mandatory check-in milestones to assess emotional strain.',
        ],
        missedOpportunities: [
          'Could have begun researching international project collaborations between your shop and her studio earlier.',
        ],
        reasoningCritique:
          'Exceptional emotional and practical balance. You demonstrated that true commitment enlarges both people rather than demanding one shrink for the other.',
      },
    },

    'ending-martyrdom-collapse': {
      id: 'ending-martyrdom-collapse',
      title: 'The Poison of Forcible Sacrifice: The Bitter Cage',
      tier: 'compromised',
      badge: 'UNSPOKEN RESENTMENT',
      narrative: [
        'Clara stayed, but the woman who stayed was not the woman you fell in love with. The ghost of the Bauhaus fellowship haunted every dinner, every late work night, and every conversation about the future.',
        'Guilt-tripping a partner into sacrificing their greatest opportunity guarantees that they will eventually associate you with the death of their potential.',
      ],
      summary: 'Forcing Clara to decline her fellowship preserved cohabitation while destroying genuine intimacy.',
      criteriaReview: {
        theTruth:
          'Clara needed your blessing to pursue her craft. Compelling her to stay turned the relationship into a prison of silent regret.',
        yourDeduction:
          'You assumed that physical proximity was the only metric of love, confusing possession with partnership.',
        accuracyRate: 35,
        keyDiscoveries: [
          'Discovered that unlived dreams turn into relational venom.',
        ],
        missedOpportunities: [
          'Failed to explore bi-city logistics.',
          'Allowed insecurity and territorial fear to dictate the outcome.',
        ],
        reasoningCritique:
          'Critical failure in partnership. Loving someone means wanting their full flourishing, not chaining them to your geographic convenience.',
      },
    },

    'ending-graceful-parting': {
      id: 'ending-graceful-parting',
      title: 'The Dignified Parting: Releasing with Honor',
      tier: 'partial',
      badge: 'NOBLE COMPLETION',
      narrative: [
        'Not every love story is meant to last fifty years. Some relationships are profound, life-altering seasons that complete their purpose and release both people to their next evolution.',
        'By choosing a conscious, loving parting over an agonizing, slow-motion decay, you preserved the beauty of what you built together.',
      ],
      summary: 'You chose an honest, loving release over two years of painful attrition, honoring what you shared.',
      criteriaReview: {
        theTruth:
          'Your developmental paths were genuinely divergent. A clean parting honored the truth of your callings.',
        yourDeduction:
          'You understood that letting go with love is infinitely superior to holding on with bitterness.',
        accuracyRate: 85,
        keyDiscoveries: [
          'Recognized that love and logistical incompatibility can coexist.',
          'Prioritized dignity and emotional truth over societal pressure to stay together at all costs.',
        ],
        missedOpportunities: [
          'Did not attempt the long-distance structure, choosing immediate release instead.',
        ],
        reasoningCritique:
          'High maturity and courage. While less ambitious than attempting the bi-city bridge, this was an honorable, deeply respectful resolution.',
      },
    },
  },
};

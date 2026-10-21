import { Episode } from '@/features/episodes/types';

export const relFamilyLegacyExpectationEpisode: Episode = {
  id: 'rel-family-legacy-expectation',
  version: '1.0.0',
  title: 'The Legacy Expectation',
  subtitle: 'Navigate generational duty, honor family heritage, and claim self-authorship with calm dignity.',
  synopsis:
    'For forty years, your father Ramesh and uncle Sunil have built Sharma Precision Tooling into an anchor of the regional community. At Sunday dinner, they unveil the retirement succession plan: you are expected to step in as Managing Director this January. Your independent career as a digital interaction designer is dismissed as a "youthful detour." How do you decline the legacy without dishonoring the sacrifices that built your life?',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Sunday Family Dinner, 7:30 PM',
  location: 'The Sharma Family Residence, Dining Room',
  tags: ['Family Dynamics', 'Generational Differences', 'Boundaries', 'Filial Duty', 'Self-Authorship'],
  initialScenarioId: 'scene-succession-unveiled',

  suspects: {
    'person-ramesh': {
      id: 'person-ramesh',
      name: 'Ramesh Sharma',
      role: 'Father & Founder of Sharma Precision Tooling',
      age: 64,
      initialDemeanor: 'Proud, traditional, emotionally stoic, deeply invested in family lineage.',
      motive: 'Equates passing the business to his child with the ultimate proof of a successful life.',
      opportunity: 'Controls the business succession trust and family patriarch dynamics.',
      alibi: 'Believes he is offering you guaranteed wealth, status, and community security.',
      weakness: 'Cannot distinguish between an independent career and filial rejection.',
      associatedClueIds: ['clue-machining-ledger', 'clue-father-sacrifices'],
      interrogationSummary:
        'Ramesh insists: "Everything your mother and I worked sixteen-hour shifts for was so this company would carry our name into the next generation. What is this computer drawing nonsense compared to something real you can touch?"',
    },
    'person-anita': {
      id: 'person-anita',
      name: 'Anita Sharma',
      role: 'Mother & Family Mediator',
      age: 61,
      initialDemeanor: 'Perceptive, gentle, protective of family harmony, caught in the middle.',
      motive: 'Wants you to be fulfilled, but dreads seeing her husband’s spirit broken by a family fracture.',
      opportunity: 'Hosts the Sunday dinners where family decisions are negotiated.',
      alibi: 'Understands your creative drive, but fears financial instability in tech.',
      weakness: 'Often urges you to "just compromise for peace" to avoid confrontation.',
      associatedClueIds: ['clue-anita-whisper'],
      interrogationSummary:
        'Anita whispers in the kitchen: "Your father’s knees ache every morning. He just wants to know that forty years of oil and metal meant something. Be gentle with him, even if you say no."',
    },
  },

  clues: {
    'clue-machining-ledger': {
      id: 'clue-machining-ledger',
      title: 'Sharma Tooling Succession Binder',
      category: 'document',
      shortDescription: 'Formal incorporation papers prepared with your name pre-filled as incoming director.',
      detailedAnalysis:
        'The documents show extensive estate planning by Ramesh and the family accountant. They have assumed your compliance for years, structuring tax handovers that depend on your signature.',
      locationFound: 'Dining Room Table',
      tags: ['Expectation', 'Succession', 'Pressure'],
    },
    'clue-father-sacrifices': {
      id: 'clue-father-sacrifices',
      title: 'The Origin Story of Sharma Tooling',
      category: 'testimony',
      shortDescription: 'Ramesh’s decades of grueling manual labor that funded your university education.',
      detailedAnalysis:
        'Your father worked seven days a week for eighteen years in an unheated shop floor so you could attend elite design schools debt-free. His pride is entangled in your success, even if he cannot understand your specific medium.',
      locationFound: 'Family History Recollection',
      tags: ['Sacrifice', 'Debt', 'Intergenerational Love'],
    },
    'clue-anita-whisper': {
      id: 'clue-anita-whisper',
      title: 'The Real Core Need Behind the Mandate',
      category: 'testimony',
      shortDescription: 'Ramesh is terrified of irrelevance and mortality, not just stubborn control.',
      detailedAnalysis:
        'Anita reveals that Ramesh had a minor cardiac scare three months ago that he hid from you. His sudden urgency to hand over the keys is driven by fear of mortality and legacy erasure.',
      locationFound: 'Kitchen Conversation with Mother',
      tags: ['Vulnerability', 'Mortality', 'Subtext'],
    },
  },

  connections: [
    {
      id: 'conn-mortality-not-tyranny',
      clueA: 'clue-father-sacrifices',
      clueB: 'clue-anita-whisper',
      deductionTitle: 'Legacy as Immortality, Not Control',
      deductionText:
        'Ramesh’s authoritarian pressure is driven by acute mortality fear and a desperate desire to see his life’s labor validated, not by hatred of your creative career.',
      unlockedFlag: 'flag_understood_father_mortality',
    },
  ],

  hypotheses: {
    'hyp-filial-reassurance': {
      id: 'hyp-filial-reassurance',
      title: 'Validate the Father’s Sacrifice While Standing Firm on Career Self-Authorship',
      accusedSuspectId: 'person-ramesh',
      motiveSummary: 'Ramesh fears that rejecting the factory means rejecting his fatherhood and sacrifices.',
      methodSummary: 'Demonstrate deep gratitude for his sacrifice, help structure an outside executive buyout, and assert your design career with unwavering dignity.',
      requiredClueIds: ['clue-machining-ledger', 'clue-father-sacrifices', 'clue-anita-whisper'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-dignified-self-authorship',
      failureEndingId: 'ending-estranged-fracture',
    },
  },

  scenarios: {
    'scene-succession-unveiled': {
      id: 'scene-succession-unveiled',
      title: 'The Binder on the Tablecloth',
      location: 'Dining Room, Sunday 7:30 PM',
      narrative: [
        'The brass dining table is set with silver platters of biryani, dal, and fresh rotis. But before anyone touches a spoon, Uncle Sunil slides a heavy leather-bound document between the water glasses.',
        'Your father Ramesh clears his throat, his calloused hands resting flat on the mahogany. "We spoke with the lawyers on Thursday," Ramesh announces, his voice steady with solemn pride. "The transition begins in January. You will take over the plant, learn the CNC client accounts, and keep this company in the family."',
        'Across the table, Uncle Sunil nods with a wide grin. Your mother Anita looks down at her napkin, her fingers nervously pleating the linen. All eyes are fixed on you.',
      ],
      dialogue: [
        {
          speaker: 'Ramesh',
          text: 'We gave you the best education money could buy so you would be ready for this day. It is your time to lead the family.',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-machining-ledger', 'clue-father-sacrifices'],
      choices: [
        {
          id: 'choice-grounded-gratitude-pause',
          text: 'Look your father in the eyes with warmth: "Papa, looking at this binder, I see forty years of your life and sacrifice. But I need you to listen to me about what my life has to be."',
          destinationId: 'scene-kitchen-interlude',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'filial_respect', value: 2 },
            { type: 'incrementVariable', target: 'assertiveness', value: 2 },
            { type: 'setFlag', target: 'flag_honored_father_sacrifice', value: true },
          ],
        },
        {
          id: 'choice-rebellious-explosion',
          text: 'Push the binder away angrily: "You never asked me! You’ve planned my entire life without caring about my passions! I’m not running your factory!"',
          destinationId: 'scene-dinner-explosion',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'filial_respect', value: 3 },
            { type: 'setFlag', target: 'flag_explosive_dinner_rejection', value: true },
          ],
        },
        {
          id: 'choice-cowardly-acquiescence',
          text: 'Nod weakly: "Thank you, Papa... I’ll look over the papers," terrified of making a scene.',
          destinationId: 'scene-silent-capitulation',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'self_authorship', value: 3 },
            { type: 'setFlag', target: 'flag_capitulated_to_father', value: true },
          ],
        },
      ],
    },

    'scene-kitchen-interlude': {
      id: 'scene-kitchen-interlude',
      title: 'The Kitchen Whispers',
      location: 'Family Kitchen over Chai, 8:15 PM',
      narrative: [
        'By pausing instead of shouting, you kept the air in the room. You step into the kitchen to help your mother pour the cardamom chai.',
        'Anita takes your wrists in both of her hands. Her eyes are shimmering with unshed tears. "He didn’t tell you, but three months ago the doctor put him on beta blockers. He wakes up at 4 AM worrying about the 25 families whose paychecks depend on that machine shop."',
        '"He doesn’t understand digital design," Anita continues. "To him, if you don’t own concrete and steel, you are living on thin air. Show him you understand his fear before you tell him your answer."',
      ],
      dialogue: [
        {
          speaker: 'Anita',
          text: 'Your father isn’t trying to steal your life. He is trying to protect you from the poverty he grew up in.',
          mood: 'grief',
        },
      ],
      cluesDiscovered: ['clue-anita-whisper'],
      choices: [
        {
          id: 'choice-propose-leadership-buyout',
          text: 'Formulate a solution: "Papa, let’s bring in Rajiv, your senior plant manager who has worked here for 20 years, as Managing Director with an equity buyout. The family keeps board ownership, and you get your retirement."',
          destinationId: 'scene-the-mature-pact',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'strategic_maturity', value: 2 },
            { type: 'setFlag', target: 'flag_proposed_manager_buyout', value: true },
          ],
        },
        {
          id: 'choice-pure-stand-alone-refusal',
          text: '"Papa, I love you, but I am an interaction designer. I will never run Sharma Tooling, and you must find an outside buyer."',
          destinationId: 'scene-the-stiff-rejection',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'assertiveness', value: 2 },
            { type: 'setFlag', target: 'flag_pure_refusal', value: true },
          ],
        },
      ],
    },

    'scene-dinner-explosion': {
      id: 'scene-dinner-explosion',
      title: 'The Broken Porcelain',
      location: 'Dining Room',
      isEnding: true,
      endingId: 'ending-estranged-fracture',
      narrative: [
        'Your explosive rejection lands like a grenade. Ramesh’s face pales, then turns dark with fury. Uncle Sunil stands up, shaking his head with bitter disgust.',
        '"Passions?" Ramesh’s voice is a razor. "You sit in air-conditioned offices drinking five-dollar coffee because my hands bled on Bridgeport lathes for twenty years. You think your passions feed a family?"',
        'Ramesh sweeps the binder off the table, sending cutlery clattering to the floor. "Get out of my house. If you have no respect for your family’s sweat, do not come back."',
      ],
      dialogue: [
        {
          speaker: 'Ramesh',
          text: 'I have no son who is ashamed of where his bread came from.',
          mood: 'defiant',
        },
      ],
      choices: [],
    },

    'scene-the-mature-pact': {
      id: 'scene-the-mature-pact',
      title: 'Honoring the Past, Authoring the Future',
      location: 'Ramesh’s Study, 9:00 PM',
      isEnding: true,
      endingId: 'ending-dignified-self-authorship',
      narrative: [
        'You sit in Ramesh’s study surrounded by vintage machine patents, brass micrometer calipers, and framed photographs of the factory opening in 1986.',
        'You do not shrink, and you do not shout. You look at your father and speak with clear, grounded devotion: "The education you gave me worked, Papa. It gave me the courage to build something of my own, exactly like you did when you were twenty-four."',
        'You lay out the operational succession plan: elevating senior manager Rajiv to operations, retaining family dividend shares, and designing the company’s new digital industrial catalog yourself.',
        'Ramesh sits in silence for a long time. His fingers trace the steel frame of an old photograph. Finally, a heavy, quiet sigh leaves his chest.',
      ],
      dialogue: [
        {
          speaker: 'Ramesh',
          text: 'You have your mother’s tongue and your grandfather’s stubbornness. But Rajiv knows the machines. If you design our new catalog... you are still part of the company.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-the-stiff-rejection': {
      id: 'scene-the-stiff-rejection',
      title: 'The Cold Acquiescence',
      location: 'Dining Room',
      isEnding: true,
      endingId: 'ending-unbridged-compromise',
      narrative: [
        'You stood your ground firmly, but offered no bridge to your father’s fear. Ramesh swallowed the rejection in stony silence.',
        'The factory was sold to a private equity firm six months later. Ramesh attends family gatherings, but he never asks about your design work, and a permanent, quiet wall stands between you.',
      ],
      dialogue: [
        {
          speaker: 'Ramesh',
          text: 'You made your choice. You have your life, and I have mine.',
          mood: 'evasive',
        },
      ],
      choices: [],
    },

    'scene-silent-capitulation': {
      id: 'scene-silent-capitulation',
      title: 'The Empty Executive',
      location: 'Sharma Precision Tooling Plant Floor, Two Years Later',
      isEnding: true,
      endingId: 'ending-silent-capitulation',
      narrative: [
        'You took the binder. You signed the incorporation papers. You told yourself you would do it for a couple of years to keep peace.',
        'Two years later, you sit in the managing director’s office surrounded by cutting fluid smell and shipping manifest spreadsheets you despise. Your design software lies unopened on your laptop.',
        'Ramesh is happy, but when you look in the bathroom mirror under fluorescent plant lights, you don’t recognize the person staring back.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I kept my father’s dream alive by murdering my own.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-dignified-self-authorship': {
      id: 'ending-dignified-self-authorship',
      title: 'Dignified Self-Authorship: Honor Without Enslavement',
      tier: 'triumph',
      badge: 'FILIAL HARMONY & AUTONOMY',
      narrative: [
        'You achieved the rarest triumph in intergenerational relationships: you claimed complete self-determination without tearing down the altar of your parents’ sacrifice.',
        'By seeing through your father’s authoritarian demand to the underlying fear of mortality and irrelevance, you built a pragmatic bridge that preserved both his business legacy and your authentic life.',
      ],
      summary: 'You declined the corporate mandate with profound respect, solved the operational succession, and preserved family love.',
      criteriaReview: {
        theTruth:
          'Ramesh’s demand was driven by love, sacrifice, and mortality terror, not malicious tyranny. He needed reassurance that his life’s labor had meaning.',
        yourDeduction:
          'You understood that true maturity is honoring your parents’ sweat without surrendering your right to author your own existence.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Distinguished between generational pressure and malicious control.',
          'Acknowledged the father’s immense historical sacrifice without accepting the career mandate.',
          'Proposed a viable commercial third path (manager buyout with digital advisory role).',
        ],
        missedOpportunities: [
          'Could have initiated dialogue about retirement succession months before the surprise binder dinner.',
        ],
        reasoningCritique:
          'Masterclass in generational diplomacy. You held your boundaries with diamond hardness and velvet softness, protecting both your integrity and your elders’ dignity.',
      },
    },

    'ending-estranged-fracture': {
      id: 'ending-estranged-fracture',
      title: 'The Bitter Shatter: Righteous Independence, Broken Blood',
      tier: 'compromised',
      badge: 'FAMILY ESTRANGEMENT',
      narrative: [
        'You were entitled to your own career, but by treating your father’s life work as an insult and mocking his sacrifices, you shattered the family bond.',
        'Standing up for yourself does not require trampling the hands that fed you. You won your independence, but at the cost of an empty chair at every holiday.',
      ],
      summary: 'Explosive rebellion turned a career disagreement into permanent family estrangement.',
      criteriaReview: {
        theTruth:
          'Ramesh built the company out of generational survival. Your mockery of his manual labor felt like a direct assault on his identity.',
        yourDeduction:
          'You framed a complex generational transition as a simplistic war between backward oppression and modern freedom.',
        accuracyRate: 35,
        keyDiscoveries: [
          'Discovered that self-righteous fury leaves both sides bleeding.',
        ],
        missedOpportunities: [
          'Failed to listen to the mother’s context.',
          'Failed to regulate temper at the family table.',
        ],
        reasoningCritique:
          'Poor emotional regulation. Assertiveness without empathy often degenerates into juvenile rebellion that destroys relationships unnecessarily.',
      },
    },

    'ending-silent-capitulation': {
      id: 'ending-silent-capitulation',
      title: 'The Living Ghost: Self-Surrender to Avoid Conflict',
      tier: 'compromised',
      badge: 'LIFELONG RESENTMENT',
      narrative: [
        'You surrendered your calling to avoid fifteen minutes of dinner-table discomfort. In doing so, you traded temporary harmony for decades of quiet despair.',
        'Living someone else’s life to keep them happy is a poison that eventually kills your ability to love them.',
      ],
      summary: 'You surrendered your vocation to appease family expectations, breeding silent lifelong resentment.',
      criteriaReview: {
        theTruth:
          'Ramesh would have survived your refusal. By lying to protect his feelings, you condemned yourself to an unlived life.',
        yourDeduction:
          'You believed that cowardice was filial virtue, forgetting that a child who lives as a ghost brings no real honor to their family.',
        accuracyRate: 25,
        keyDiscoveries: [
          'Learned that avoiding boundary conflict results in personal self-destruction.',
        ],
        missedOpportunities: [
          'Failed to speak your truth at any point in the conversation.',
        ],
        reasoningCritique:
          'Catastrophic failure of self-advocacy. Surrendering your entire identity to appease parental anxiety is neither love nor duty.',
      },
    },

    'ending-unbridged-compromise': {
      id: 'ending-unbridged-compromise',
      title: 'The Chilled Boundary: Autonomy Without Warmth',
      tier: 'partial',
      badge: 'GUARDED DISTANCE',
      narrative: [
        'You protected your career, but by offering no creative bridge or emotional reassurance to your father, you left the relationship formal and guarded.',
        'You are free to design, but the family warmth has been replaced by polite, cautious small talk over Sunday dinners.',
      ],
      summary: 'You preserved your career independence, but left a lasting emotional chill between you and your father.',
      criteriaReview: {
        theTruth:
          'Ramesh needed to feel that his legacy still had value to you, even if you did not operate the machinery.',
        yourDeduction:
          'You set a cold boundary that protected your autonomy but neglected the emotional vulnerability of aging parents.',
        accuracyRate: 70,
        keyDiscoveries: [
          'Held career autonomy successfully.',
        ],
        missedOpportunities: [
          'Did not propose a collaborative bridge (such as catalog design or board advisory).',
        ],
        reasoningCritique:
          'Acceptable but incomplete. Setting boundaries is the first half of emotional maturity; building bridges from behind the boundary is the second.',
      },
    },
  },
};

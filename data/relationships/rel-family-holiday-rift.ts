import { Episode } from '@/features/episodes/types';

export const relFamilyHolidayRiftEpisode: Episode = {
  id: 'rel-family-holiday-rift',
  version: '1.0.0',
  title: 'The Holiday Seating Chart',
  subtitle: 'Dismantle family triangulation, respect adult estrangement, and host with peaceful neutrality.',
  synopsis:
    'You are hosting Thanksgiving dinner for twelve relatives at your home in four days. Your sister Priya and your mother haven’t spoken a single word in eight months following an explosive blowout over Priya’s divorce. Your aunt calls insisting that you "set them next to each other and force them to make up—it’s Thanksgiving!" Meanwhile, Priya calls saying: "If Mom is sitting in that dining room, my kids and I are staying home." How do you refuse to be weaponized as a pawn in their war?',
  estimatedMinutes: 18,
  difficulty: 'Intermediate',
  timeSetting: 'Monday Evening Before Thanksgiving, 8:00 PM',
  location: 'Your Kitchen Table with Seating Charts & Phone',
  tags: ['Family Dynamics', 'Conflict Resolution', 'Triangulation', 'Boundaries', 'Mediation'],
  initialScenarioId: 'scene-incoming-demands',

  suspects: {
    'person-priya': {
      id: 'person-priya',
      name: 'Priya Patel',
      role: 'Older Sister & Mother of Two',
      age: 34,
      initialDemeanor: 'Fierce, exhausted, hyper-protective of her children, wounded by maternal criticism.',
      motive: 'Refuses to endure passive-aggressive jabs about her divorce in front of her children.',
      opportunity: 'Has the power to withhold attendance and isolate herself from the holiday.',
      alibi: 'Feels she was humiliated at Easter and drew a necessary boundary for her mental health.',
      weakness: 'Demands absolute loyalty pledges from siblings and treats neutrality as treason.',
      associatedClueIds: ['clue-easter-blowout', 'clue-priya-ultimatum'],
      interrogationSummary:
        'Priya states flatly: "Mom told Aunt Linda that my divorce was my fault because I worked too much. I will not sit across a turkey and pretend she didn’t poison my family."',
    },
    'person-mother': {
      id: 'person-mother',
      name: 'Geeta Patel',
      role: 'Mother & Family Matriarch',
      age: 62,
      initialDemeanor: 'Hurt, proud, clinging to holiday traditions, deflective of responsibility.',
      motive: 'Wants to see her grandchildren on the holidays and save face in front of the extended family.',
      opportunity: 'Expects automatic matriarchal deference and attendance at all major gatherings.',
      alibi: 'Claims she was only trying to give marital advice and was misunderstood.',
      weakness: 'Refuses to issue a direct, unconditional apology without attaching defensive justifications.',
      associatedClueIds: ['clue-mother-pride'],
      interrogationSummary:
        'Geeta sighs: "I am her mother. A daughter does not ban her mother from seeing her grandchildren on Thanksgiving. You need to talk sense into her."',
    },
  },

  clues: {
    'clue-easter-blowout': {
      id: 'clue-easter-blowout',
      title: 'The Easter Dining Room Transcript',
      category: 'testimony',
      shortDescription: 'The explosive argument where Geeta criticized Priya’s custody agreement in front of relatives.',
      detailedAnalysis:
        'Eight months ago, Geeta openly questioned Priya’s character and judgment regarding child custody in front of ten guests. Priya walked out and blocked Geeta’s phone number that night.',
      locationFound: 'Family Memory Record',
      tags: ['Root Conflict', 'Public Humiliation', 'Boundaries'],
    },
    'clue-priya-ultimatum': {
      id: 'clue-priya-ultimatum',
      title: 'Priya’s Attendance Condition',
      category: 'digital',
      shortDescription: 'Text message from Priya demanding that Geeta be uninvited from the main dinner.',
      detailedAnalysis:
        'Priya insists: "Either she comes or we come. You have to choose whose side you are on." Priya is forcing you into a classic triangulation bind.',
      locationFound: 'Smartphone Text History',
      tags: ['Triangulation', 'Ultimatum', 'Loyalty Trap'],
    },
    'clue-mother-pride': {
      id: 'clue-mother-pride',
      title: 'Geeta’s Fragile Posture',
      category: 'testimony',
      shortDescription: 'Geeta desperately misses the children but fears losing status by apologizing first.',
      detailedAnalysis:
        'Geeta hasn’t held her grandchildren since April. Her stubborn refusal to apologize is driven by shame and traditional hierarchy fear, not lack of love.',
      locationFound: 'Phone Call with Aunt Linda',
      tags: ['Shame', 'Hierarchy', 'Stubbornness'],
    },
  },

  connections: [
    {
      id: 'conn-triangulation-trap',
      clueA: 'clue-priya-ultimatum',
      clueB: 'clue-mother-pride',
      deductionTitle: 'The Triangulation Hostage Trap',
      deductionText:
        'Both Priya and Geeta are trying to use your holiday dinner to win their private feud. Accepting either ultimatum makes you their weapon instead of their host.',
      unlockedFlag: 'flag_unmasked_triangulation',
    },
  ],

  hypotheses: {
    'hyp-refuse-triangulation': {
      id: 'hyp-refuse-triangulation',
      title: 'Refuse Triangulation and Establish Clear Neutral Ground Agreements',
      accusedSuspectId: 'person-priya',
      motiveSummary: 'Both parties are forcing the host to choose sides rather than addressing their conflict directly.',
      methodSummary: 'Refuse to disinvite either, reject ambush reconciliation stunts, and offer structured separate hosting blocks or firm ground rules.',
      requiredClueIds: ['clue-easter-blowout', 'clue-priya-ultimatum', 'clue-mother-pride'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-dignified-neutrality',
      failureEndingId: 'ending-coerced-ambush-disaster',
    },
  },

  scenarios: {
    'scene-incoming-demands': {
      id: 'scene-incoming-demands',
      title: 'The Host’s Dilemma',
      location: 'Kitchen Island with Sticky Notes',
      narrative: [
        'Your kitchen table is covered with recipes, grocery lists, and a paper layout of your twelve-seat dining room. You hold a yellow sticky note with "Priya" in your left hand, and "Mom" in your right.',
        'Aunt Linda just finished a ten-minute monologue on your speakerphone: "Put them next to each other at the center! Once Mom sees the kids, her heart will melt! It’s the spirit of Thanksgiving!"',
        'Simultaneously, a text notification drops down from Priya: "I heard Mom is bringing the sweet potato casserole. Are you seriously expecting me to sit there with her? Tell me right now if she’s coming."',
      ],
      dialogue: [
        {
          speaker: 'Aunt Linda (Speakerphone)',
          text: 'Family is family! If you don’t force them into the same room, this feud will go on forever!',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-easter-blowout', 'clue-priya-ultimatum'],
      choices: [
        {
          id: 'choice-refuse-sides-call-priya',
          text: 'Call Priya directly: "Priya, I love you and I love Mom. I will not uninvite our mother, and I will not force you to be ambushed. Let’s talk about a real arrangement that protects your peace."',
          destinationId: 'scene-priya-direct-boundary',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'boundary_firmness', value: 2 },
            { type: 'setFlag', target: 'flag_refused_triangulation', value: true },
          ],
        },
        {
          id: 'choice-agree-to-ambush',
          text: 'Cave to Aunt Linda’s romanticized plan: "Fine, we’ll seat them together and pray the holiday spirit softens them."',
          destinationId: 'scene-forced-ambush-night',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'emotional_intelligence', value: 3 },
            { type: 'setFlag', target: 'flag_orchestrated_ambush', value: true },
          ],
        },
        {
          id: 'choice-disinvite-mother',
          text: 'Call your mother and tell her she cannot come to dinner to keep Priya happy.',
          destinationId: 'scene-uninvited-mother',
          consequencePreview: 'Direct',
          effects: [
            { type: 'decrementVariable', target: 'family_balance', value: 3 },
            { type: 'setFlag', target: 'flag_disinvited_mother', value: true },
          ],
        },
      ],
    },

    'scene-priya-direct-boundary': {
      id: 'scene-priya-direct-boundary',
      title: 'De-Escalating the Ultimatum',
      location: 'Phone Call with Priya',
      narrative: [
        'You dial Priya. She answers with sharp breath, already armed for battle. "Are you taking her side?"',
        'You keep your voice low, steady, and warm. "Priya, there are no sides here. Mom humiliated you at Easter, and your anger is completely understandable. But this is my home, and I am not slamming the door on our 62-year-old mother. Nor am I going to let anyone corner you or make comments about your divorce."',
        'Priya is quiet. The expectation of having to fight you for loyalty has dissolved into a real, calm conversation.',
      ],
      dialogue: [
        {
          speaker: 'Priya',
          text: 'Then what are you proposing? Because I am not sitting there listening to her subtle digs while my kids eat pie.',
          mood: 'grief',
        },
      ],
      cluesDiscovered: ['clue-mother-pride'],
      choices: [
        {
          id: 'choice-split-hosting-times',
          text: '"Option A: We host a special Thanksgiving dessert and game morning on Friday just for you, the kids, and me. Option B: You come to dinner, but you sit at the opposite end of the table with me, and I give Mom strict advance rules on boundaries."',
          destinationId: 'scene-geeta-ground-rules',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'conflict_deescalation', value: 2 },
            { type: 'setFlag', target: 'flag_offered_structured_options', value: true },
          ],
        },
        {
          id: 'choice-shame-priya-stubbornness',
          text: '"Priya, for God’s sake, swallow your pride for three hours for the kids."',
          destinationId: 'scene-priya-boycott',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'boundary_firmness', value: 2 },
            { type: 'setFlag', target: 'flag_shamed_sister', value: true },
          ],
        },
      ],
    },

    'scene-geeta-ground-rules': {
      id: 'scene-geeta-ground-rules',
      title: 'The Hard Conversation with Mom',
      location: 'Living Room, Tuesday Afternoon',
      narrative: [
        'Priya agreed to Option B, but on one non-negotiable condition: zero public commentary on her life. You visit your mother Geeta in person on Tuesday afternoon.',
        'You sit on her sofa and hold her hand: "Mom, you are coming to Thanksgiving. But I need you to give me your word on something. You will not mention Priya’s ex-husband, you will not give advice on parenting, and you will not corner her. If you start a debate, I will ask you to step outside."',
        'Geeta’s eyes widen. For thirty years, nobody has given her conditions in family spaces. She looks defensive, then hurt, then glances at the framed photograph of her grandchildren on the mantle.',
      ],
      dialogue: [
        {
          speaker: 'Geeta',
          text: 'You are setting rules for your own mother in your house?',
          mood: 'defiant',
        },
      ],
      choices: [
        {
          id: 'choice-hold-the-mother-line',
          text: '"Yes, Mom. Because I love you both too much to let our dinner turn into another war. If you want to hold your grandchildren on Thursday, this is the agreement."',
          destinationId: 'scene-peaceful-thanksgiving',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'matriarch_accountability', value: 2 },
            { type: 'setFlag', target: 'flag_mother_accepted_rules', value: true },
          ],
        },
        {
          id: 'choice-backtrack-with-mother',
          text: '"Well, you know what I mean, Mom... just try to be nice, okay?" backing down from the boundary.',
          destinationId: 'scene-forced-ambush-night',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-peaceful-thanksgiving': {
      id: 'scene-peaceful-thanksgiving',
      title: 'A Courteous Holiday Peace',
      location: 'Thanksgiving Dinner Table, 5:30 PM',
      isEnding: true,
      endingId: 'ending-dignified-neutrality',
      narrative: [
        'Thursday arrives. The candles glow against the china. Priya sits at the east end of the table near you; Geeta sits at the west end near Uncle Sunil.',
        'There are no fake tearful reconciliations, no theatrical movie hugs. But there are also no sarcastic barbs, no icy exits, and no screaming.',
        'At dessert, the kids show Geeta their drawings. Geeta hugs them with tears in her eyes, honoring the boundary completely. Priya watches from across the room, tension gradually melting from her shoulders.',
        'You created a sanctuary where family members could coexist without requiring either party to sacrifice their boundaries or dignity.',
      ],
      dialogue: [
        {
          speaker: 'Priya (Quietly by the Sink)',
          text: 'Thank you for protecting me tonight. It was the first holiday in two years where I didn’t feel like I was under siege.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-forced-ambush-night': {
      id: 'scene-forced-ambush-night',
      title: 'The Catastrophic Ambush',
      location: 'Thanksgiving Dinner Table',
      isEnding: true,
      endingId: 'ending-coerced-ambush-disaster',
      narrative: [
        'You followed Aunt Linda’s naive advice. You placed Priya and Geeta shoulder-to-shoulder at the center of the table.',
        'Within twenty minutes, Geeta passed the gravy and sighed: "Priya, if you just listened to your elders, your children wouldn’t have to shuttle between two houses." Priya slammed her fork onto her plate, stood up, and screamed.',
        'Wine glasses shattered. The children began crying. Priya grabbed her kids’ coats and stormed out into the cold night, leaving a dining room full of stunned, silent relatives.',
      ],
      dialogue: [
        {
          speaker: 'Priya',
          text: 'You set me up! I will never forgive you for this!',
          mood: 'shaken',
        },
      ],
      choices: [],
    },

    'scene-uninvited-mother': {
      id: 'scene-uninvited-mother',
      title: 'The Divided Camp',
      location: 'Dining Room',
      isEnding: true,
      endingId: 'ending-partisan-polarization',
      narrative: [
        'You uninvited your mother to satisfy Priya’s demand. Priya attended dinner, but Aunt Linda and Uncle Sunil boycotted in protest.',
        'Your mother spent Thanksgiving alone in her apartment. You won Priya’s temporary approval, but established yourself as an active partisan in the family civil war.',
      ],
      dialogue: [
        {
          speaker: 'Uncle Sunil (Voicemail)',
          text: 'Throwing your mother out of a family holiday is disgraceful. Don’t expect us on Thursday.',
          mood: 'defiant',
        },
      ],
      choices: [],
    },

    'scene-priya-boycott': {
      id: 'scene-priya-boycott',
      title: 'The Sister’s Absence',
      location: 'Dining Room',
      isEnding: true,
      endingId: 'ending-partisan-polarization',
      narrative: [
        'By shaming Priya’s boundary as "petty pride," you confirmed her fear that you didn’t care about her safety.',
        'Priya spent Thanksgiving at a diner with her children. Your mother held court at the table, but the empty seats cast a long shadow of guilt over the entire meal.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I pressured the victim of the criticism instead of holding the critic accountable.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-dignified-neutrality': {
      id: 'ending-dignified-neutrality',
      title: 'Dignified Neutrality: The Non-Anxious Presence',
      tier: 'triumph',
      badge: 'SYSTEMIC HARMONY',
      narrative: [
        'You refused to be seduced by the fantasy of instant cinematic reconciliation, and you refused to be blackmailed into becoming an executioner for either party.',
        'By setting firm, compassionate boundaries with your mother while providing physical and emotional safety for your sister, you hosted a peaceful holiday that honored adult reality.',
      ],
      summary: 'You neutralized family triangulation, held clear boundaries with both generations, and delivered a peaceful holiday.',
      criteriaReview: {
        theTruth:
          'Priya and Geeta were in an authentic relational impasse. Forcing them together without boundaries guarantees explosion; taking sides destroys the host.',
        yourDeduction:
          'You understood that healthy hosting means creating structural safety for conflicting adults, not manipulating them into false intimacy.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized triangulation and refused to carry other adults’ messages.',
          'Established strict ground rules with the family matriarch before dinner.',
          'Used thoughtful seating and physical space to prevent accidental ignition.',
        ],
        missedOpportunities: [
          'Could have encouraged professional family mediation outside of holiday contexts.',
        ],
        reasoningCritique:
          'Exemplary family systems leadership. You acted as a calm, differentiated presence, holding space for loved ones without absorbing their toxicity.',
      },
    },

    'ending-coerced-ambush-disaster': {
      id: 'ending-coerced-ambush-disaster',
      title: 'The Coerced Ambush: The Price of Naive Sentimentality',
      tier: 'compromised',
      badge: 'HOLIDAY EXPLOSION',
      narrative: [
        'You mistook Aunt Linda’s romanticized holiday wishes for realistic emotional strategy. By forcing two deeply wounded, unhealed people into close quarters, you caused a public humiliation that traumatized the children.',
        'Forcing reconciliation before genuine repentance has taken place is an act of violence against the wounded person.',
      ],
      summary: 'A naive attempt to force reconciliation exploded into public screaming, tears, and deeper estrangement.',
      criteriaReview: {
        theTruth:
          'Deep grievances cannot be resolved by proximity and turkey gravy. Priya needed protection, and Geeta needed firm accountability.',
        yourDeduction:
          'You capitulated to external family pressure and magical thinking rather than respecting adult emotional reality.',
        accuracyRate: 30,
        keyDiscoveries: [
          'Learned that forced proximity escalates unhealed conflict.',
        ],
        missedOpportunities: [
          'Failed to listen to Priya’s explicit warning.',
          'Failed to set boundaries with Aunt Linda.',
        ],
        reasoningCritique:
          'Critical failure of host responsibility. Sacrificing a guest’s safety to satisfy an idealized holiday fantasy is a failure of relational stewardship.',
      },
    },

    'ending-partisan-polarization': {
      id: 'ending-partisan-polarization',
      title: 'Partisan Polarization: The Fragmented House',
      tier: 'partial',
      badge: 'FAMILY SCHISM',
      narrative: [
        'By taking a side and exiling one family member to appease the other, you validated the feud and imported it permanently into your own home.',
        'The holiday went forward, but the extended family is now divided into warring camps that will take years to heal.',
      ],
      summary: 'Choosing a partisan side deepened family fractures and sparked mutual holiday boycotts.',
      criteriaReview: {
        theTruth:
          'Both relatives needed a neutral host who refused to be weaponized in their ongoing war.',
        yourDeduction:
          'You believed that peace could be bought by eliminating one conflicting party, forgetting that excommunication breeds retaliation.',
        accuracyRate: 50,
        keyDiscoveries: [
          'Discovered that taking sides in family triangles ensures half the family will turn on you.',
        ],
        missedOpportunities: [
          'Did not propose separate hosting times or firm behavioral ground rules.',
        ],
        reasoningCritique:
          'Sub-optimal systemic navigation. While defending a boundary is honorable, becoming a proxy combatant in someone else’s feud destroys your neutrality.',
      },
    },
  },
};

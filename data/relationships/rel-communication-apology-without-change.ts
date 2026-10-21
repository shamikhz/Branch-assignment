import { Episode } from '@/features/episodes/types';

export const relCommunicationApologyWithoutChangeEpisode: Episode = {
  id: 'rel-communication-apology-without-change',
  version: '1.0.0',
  title: 'The Apology Without Change',
  subtitle: 'Dismantle performative remorse, stop enabling habitual neglect, and establish structural accountability.',
  synopsis:
    'Your charming freelance photographer friend Julian has a well-practiced routine: whenever he leaves you covering his £120 share of the group cabin deposit or forgetting dinner tabs, he delivers an Oscar-worthy performance of heartfelt self-loathing: "I am the worst friend in the world! You are an absolute saint! I’ll pay you back Friday, I swear!" But Friday comes and goes, and the balance remains unpaid. Today, he asks you to put his festival ticket on your card. How do you break the cycle of empty apologies?',
  estimatedMinutes: 18,
  difficulty: 'Intermediate',
  timeSetting: 'Thursday Afternoon, 3:30 PM',
  location: 'Artisanal Bakery & Payment App Notifications',
  tags: ['Boundaries', 'Accountability', 'Financial Friction', 'Emotional Maturity', 'Communication'],
  initialScenarioId: 'scene-bakery-ticket-request',

  suspects: {
    'person-julian': {
      id: 'person-julian',
      name: 'Julian Thorne',
      role: 'Close Friend of Five Years & Freelance Photographer',
      age: 28,
      initialDemeanor: 'Charismatic, emotionally demonstrative, self-effacing, chronically financially chaotic.',
      motive: 'Uses lavish verbal apologies to disarm anger so he never has to make painful lifestyle adjustments.',
      opportunity: 'Relies on your friendship to act as an interest-free, no-consequence emergency buffer.',
      alibi: 'Claims his client invoices are always "just thirty days delayed."',
      weakness: 'Deeply uncomfortable with firm structural boundaries; relies on social warmth to blur financial lines.',
      associatedClueIds: ['clue-venmo-ledger', 'clue-apology-script'],
      interrogationSummary:
        'Julian admits: "I genuinely hate myself when I can’t pay people back. That’s why I apologize so much! But when you get cold with me, it feels like you care more about £120 than our five-year bond."',
    },
    'person-claire': {
      id: 'person-claire',
      name: 'Claire Moreau',
      role: 'Mutual Friend in Social Circle',
      age: 29,
      initialDemeanor: 'Sensible, boundary-conscious, has previously cut Julian off financially.',
      motive: 'Wants to protect friends from enabling Julian’s chronic irresponsibility.',
      opportunity: 'Watched Julian pull the exact same routine on three other people last year.',
      alibi: 'Stopped covering Julian’s tickets two years ago and observed the friendship survive just fine.',
      weakness: 'Can be blunt to the point of cynicism.',
      associatedClueIds: ['clue-claire-advice'],
      interrogationSummary:
        'Claire tells you: "Julian’s apologies are an anesthetic, not a cure. He apologizes profusely so you feel guilty for being upset. The moment you stop subsidizing him, he’ll magically find the money."',
    },
  },

  clues: {
    'clue-venmo-ledger': {
      id: 'clue-venmo-ledger',
      title: 'Payment App Unsettled Requests',
      category: 'digital',
      shortDescription: 'Three unpaid reimbursement requests spanning four months, totaling £280.',
      detailedAnalysis:
        'The ledger records: £120 for the Cotswolds cabin deposit (July), £85 for a birthday dinner split (August), and £75 for concert tickets (September). All accompanied by glowing "promise to pay Friday!" message replies.',
      locationFound: 'Banking App History',
      tags: ['Financial Record', 'Pattern of Evasion', 'Delinquency'],
    },
    'clue-apology-script': {
      id: 'clue-apology-script',
      title: 'Julian’s Emotional Deflection Script',
      category: 'testimony',
      shortDescription: 'The recurring tactic of beating you to the punch with excessive self-flagellation.',
      detailedAnalysis:
        'By aggressively proclaiming that he is "the worst human alive," Julian forces you out of the role of the aggrieved creditor and into the role of the comforting counselor ("No, you’re not terrible, don’t beat yourself up!").',
      locationFound: 'Psychological Behavioral Observation',
      tags: ['Manipulation', 'Deflection', 'Guilt Reversal'],
    },
    'clue-claire-advice': {
      id: 'clue-claire-advice',
      title: 'Claire’s Operational Precedent',
      category: 'testimony',
      shortDescription: 'Claire established a "cash in advance only" policy with Julian with zero relationship damage.',
      detailedAnalysis:
        'When Claire stopped fronting tickets for Julian, Julian grumbled for one weekend, then started using his debit card like everyone else. Enabling his chaos was prolonging it.',
      locationFound: 'Conversation with Claire',
      tags: ['Precedent', 'Structural Boundary', 'Tough Love'],
    },
  },

  connections: [
    {
      id: 'conn-apology-as-anesthetic',
      clueA: 'clue-venmo-ledger',
      clueB: 'clue-apology-script',
      deductionTitle: 'Apology as a Transactional Substitute for Repayment',
      deductionText:
        'Julian has learned that high-intensity emotional remorse substitutes for financial change. He purchases forgiveness with drama rather than currency.',
      unlockedFlag: 'flag_decoded_performative_remorse',
    },
  ],

  hypotheses: {
    'hyp-structural-boundary': {
      id: 'hyp-structural-boundary',
      title: 'Enforce Absolute Financial Separation While Maintaining Warm Personal Friendship',
      accusedSuspectId: 'person-julian',
      motiveSummary: 'Julian avoids growing up because friends consistently bail him out with gentle sympathy.',
      methodSummary: 'Refuse to front any future funds, decline the theatrical apology script, set a concrete repayment plan for the £280, and protect the bond.',
      requiredClueIds: ['clue-venmo-ledger', 'clue-apology-script'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-structural-accountability',
      failureEndingId: 'ending-chronic-enabling-burnout',
    },
  },

  scenarios: {
    'scene-bakery-ticket-request': {
      id: 'scene-bakery-ticket-request',
      title: 'The Festival Presale',
      location: 'Artisanal Bakery, Table 2',
      narrative: [
        'You are sharing an almond croissant with Julian when his phone chirps. "The Midsummer Electronic Festival presale just dropped!" he gasps, scrolling rapidly.',
        'Julian looks across the small marble table with pleading, puppy-dog eyes. "My client payment clears on Tuesday, but the early-bird tier sells out in twenty minutes. Can you put two tickets on your Amex? I swear to God on my grandmother’s grave, you’ll have the £140 by Wednesday noon."',
        'You glance at your phone screen. Your banking app still shows Julian’s three pending requests for £280 from the past four months.',
      ],
      dialogue: [
        {
          speaker: 'Julian',
          text: 'Come on, please! You know I’m good for it! I’d do the same for you in a heartbeat.',
          mood: 'intrigued',
        },
      ],
      cluesDiscovered: ['clue-venmo-ledger', 'clue-apology-script'],
      choices: [
        {
          id: 'choice-firm-refusal-with-balance',
          text: '"No, Julian. I’m not fronting the festival ticket. You currently owe me £280 across three separate outings, and we need to clear that balance first."',
          destinationId: 'scene-the-theatrical-meltdown',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'boundary_strength', value: 2 },
            { type: 'setFlag', target: 'flag_refused_festival_ticket', value: true },
          ],
        },
        {
          id: 'choice-cave-and-buy-ticket',
          text: '"Fine, I’ll buy it, but this is the absolute last time, Julian. I mean it!"',
          destinationId: 'scene-the-enabling-trap',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'boundary_strength', value: 3 },
            { type: 'setFlag', target: 'flag_caved_to_ticket', value: true },
          ],
        },
        {
          id: 'choice-passive-make-excuse',
          text: '"Oh man, my credit card is actually maxed out this week, sorry!" lying to avoid saying a direct no.',
          destinationId: 'scene-the-dishonest-dodge',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'boundary_strength', value: 1 },
            { type: 'setFlag', target: 'flag_lied_about_card', value: true },
          ],
        },
      ],
    },

    'scene-the-theatrical-meltdown': {
      id: 'scene-the-theatrical-meltdown',
      title: 'The Theatrical Reversal',
      location: 'Artisanal Bakery Patio',
      narrative: [
        'Your direct refusal halts Julian in his tracks. The bright, eager grin vanishes, replaced instantly by profound, wounded devastation.',
        'Julian puts his head in his hands, groaning audibly. "God, you’re right. I’m disgusting. I’m a terrible friend and an absolute parasite. You’ve been so generous and all I do is take, take, take. I should just sell my camera and go work in a warehouse."',
        'Other bakery patrons glance over. It is the exact conversational script designed to make you feel like a cruel monster for holding a basic financial boundary.',
      ],
      dialogue: [
        {
          speaker: 'Julian',
          text: 'I hate that you look at me and just see a spreadsheet of unpaid debts. Is that all our friendship is to you now?',
          mood: 'grief',
        },
      ],
      cluesDiscovered: ['clue-claire-advice'],
      choices: [
        {
          id: 'choice-disarm-the-script',
          text: '"Julian, stop. I am not going to comfort you for feeling bad about owing me money. You are not a parasite, but you are someone who routinely avoids paying your friends back. I love our friendship, which is why we are ending all shared financial loans today."',
          destinationId: 'scene-the-repayment-plan',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'emotional_sovereignty', value: 2 },
            { type: 'setFlag', target: 'flag_disarmed_self_loathing_script', value: true },
          ],
        },
        {
          id: 'choice-fall-into-comforting-trap',
          text: '"No, no, Julian, you’re not a parasite! Don’t say that! You’re an amazing artist!" backpedaling to ease his shame.',
          destinationId: 'scene-the-enabling-trap',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'emotional_sovereignty', value: 2 },
          ],
        },
      ],
    },

    'scene-the-repayment-plan': {
      id: 'scene-the-repayment-plan',
      title: 'The Concrete Structure',
      location: 'Artisanal Bakery, 4:00 PM',
      narrative: [
        'By refusing to play the role of the comforter, the air changes. Julian slowly lifts his head. The dramatic tears stop instantly once he realizes the emotional theater will not work.',
        'He looks at you with a new, sober respect. The childish mask is off.',
        '"Okay," Julian says quietly, his voice finally level and grounded. "You’re right. I’ve been treating your bank account like a safety net because you’re patient. How do we fix this?"',
      ],
      dialogue: [
        {
          speaker: 'Julian',
          text: 'What do you want me to do about the £280?',
          mood: 'calm',
        },
      ],
      choices: [
        {
          id: 'choice-structured-installment-agreement',
          text: '"Fifty pounds every other Friday via automatic transfer, starting next week. And moving forward, whenever we go out, we pay separate tabs on our own cards. No exceptions."',
          destinationId: 'scene-the-new-standard',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'structural_success', value: 2 },
            { type: 'setFlag', target: 'flag_signed_repayment_structure', value: true },
          ],
        },
        {
          id: 'choice-demanding-immediate-liquidation',
          text: '"Sell your vintage lens tonight and pay me before midnight, or we aren’t friends anymore."',
          destinationId: 'scene-scorched-ultimatum',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'structural_success', value: 2 },
          ],
        },
      ],
    },

    'scene-the-new-standard': {
      id: 'scene-the-new-standard',
      title: 'A Friendship on Equal Ground',
      location: 'Coffee Shop, Two Months Later',
      isEnding: true,
      endingId: 'ending-structural-accountability',
      narrative: [
        'Two months pass. Julian’s automatic bi-weekly transfers hit your bank account like clockwork. The balance is down to £80.',
        'More importantly, the dynamic has completely healed. Last Friday at dinner, Julian effortlessly pulled out his own debit card to pay his tab without making a scene.',
        'By refusing to accept theatrical remorse in place of real change, you didn’t lose a friend; you helped a friend grow up and saved the relationship from dying of resentment.',
      ],
      dialogue: [
        {
          speaker: 'Julian',
          text: 'Honestly? Having my own tab is so much better. I don’t have to carry the knot of shame every time I see you.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-the-enabling-trap': {
      id: 'scene-the-enabling-trap',
      title: 'The Expanding Sinkhole',
      location: 'Apartment, Six Months Later',
      isEnding: true,
      endingId: 'ending-chronic-enabling-burnout',
      narrative: [
        'You bought the festival ticket. Julian promised to pay you "next week." Next week turned into next month, which turned into an excuse about broken camera sensors.',
        'The debt is now £420. Every interaction with Julian feels tainted by uncollected money. You avoid his calls, and when you do see him on Instagram partying with friends, you feel sick with bitter resentment.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I funded his fun while he treated my hard-earned money like play money.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-the-dishonest-dodge': {
      id: 'scene-the-dishonest-dodge',
      title: 'The Cowardly Dodge',
      location: 'Bakery Exit',
      isEnding: true,
      endingId: 'ending-conflict-avoidant-rot',
      narrative: [
        'By lying and saying your credit card was maxed out, you avoided a five-minute boundary conversation, but you left the systemic problem untouched.',
        'Julian simply asked another friend in your circle, and three weeks later he was back asking you to split an Airbnb deposit. Because you never set a real boundary, you are condemned to keep inventing lies to protect yourself.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I lied to protect his feelings, and now I’m trapped in my own cowardice.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-scorched-ultimatum': {
      id: 'scene-scorched-ultimatum',
      title: 'The Humiliating Severance',
      location: 'Artisanal Bakery',
      isEnding: true,
      endingId: 'ending-punitive-alienation',
      narrative: [
        'Demanding that he liquidate his livelihood equipment before midnight turned a financial accountability talk into punitive cruelty.',
        'Julian walked away in tears and borrowed money from his parents to pay you £280 in one lump sum that evening. He then blocked your number permanently.',
        'You got your money back, but at the cost of humiliating a friend in public.',
      ],
      dialogue: [
        {
          speaker: 'Julian (Final Venmo Note)',
          text: 'Paid in full. Have a nice life.',
          mood: 'evasive',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-structural-accountability': {
      id: 'ending-structural-accountability',
      title: 'Structural Accountability: The End of Performative Remorse',
      tier: 'triumph',
      badge: 'HEALTHY ACCOUNTABILITY',
      narrative: [
        'You refused to be manipulated by theatrical self-loathing, and you refused to let financial resentment poison a valuable friendship. By separating affection from administrative bailouts, you liberated both of you.',
        'True friendship does not enable chronic irresponsibility; it offers a firm, loving container that expects people to rise to the level of their adulthood.',
      ],
      summary: 'You neutralized theatrical apologies, established an automated repayment plan, and created clean separate financial boundaries.',
      criteriaReview: {
        theTruth:
          'Julian used self-flagellation as an emotional shield to avoid financial discipline. Setting clear operational boundaries allowed him to mature.',
        yourDeduction:
          'You correctly identified that comfort and pity enable delinquency, and that real love demands clear structural consequences.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized performative remorse as a conversational trap.',
          'Refused to comfort someone for the guilt of their own bad behavior.',
          'Established concrete, automated repayment installments.',
        ],
        missedOpportunities: [
          'Could have ended the practice of fronting shared tickets after the second unpaid invoice.',
        ],
        reasoningCritique:
          'Flawless boundary enforcement. You showed that boundaries are not punishments; they are the rules of engagement that allow relationships to safely continue.',
      },
    },

    'ending-chronic-enabling-burnout': {
      id: 'ending-chronic-enabling-burnout',
      title: 'The Bank of Resentment: The Enabler’s Curse',
      tier: 'compromised',
      badge: 'FINANCIAL EROSION',
      narrative: [
        'You caved to theatrical guilt and bought the festival ticket. In doing so, you taught Julian that your boundaries are purely decorative, and that his promises require zero integrity.',
        'When you subsidize someone’s bad habits out of fear of their drama, you are not being generous; you are funding the destruction of your own peace.',
      ],
      summary: 'Capitulating to theatrical remorse deepened your financial losses and turned friendship into bitter resentment.',
      criteriaReview: {
        theTruth:
          'Julian’s apologies were designed to bypass your defenses. Caving once again ensured the cycle would repeat indefinitely.',
        yourDeduction:
          'You mistook emotional weakness for kindness, choosing temporary relief over lasting boundary health.',
        accuracyRate: 30,
        keyDiscoveries: [
          'Discovered that empty apologies repeated without change are merely manipulation.',
        ],
        missedOpportunities: [
          'Failed to say no to the festival ticket.',
          'Allowed emotional manipulation to dictate financial decisions.',
        ],
        reasoningCritique:
          'Critical failure of personal boundaries. Continually rescuing someone from the natural consequences of their behavior guarantees ongoing exploitation.',
      },
    },

    'ending-punitive-alienation': {
      id: 'ending-punitive-alienation',
      title: 'The Merciless Collector: Righteousness Without Grace',
      tier: 'partial',
      badge: 'BITTER TRANSACTION',
      narrative: [
        'You got your £280 back, but your vindictive cruelty and demand that he sell his work tools destroyed any chance of relational redemption.',
        'Enforcing a boundary should be like a stone wall—firm and immobile. When you turn it into a battering ram, you forfeit the moral high ground.',
      ],
      summary: 'You recovered your debt through public humiliation and cruel ultimatums, permanently severing the friendship.',
      criteriaReview: {
        theTruth:
          'Julian needed firm, realistic payment structure, not humiliating public destruction of his career tools.',
        yourDeduction:
          'You allowed accumulated rage to transform an administrative boundary into an execution.',
        accuracyRate: 50,
        keyDiscoveries: [
          'Recouped financial debt successfully.',
        ],
        missedOpportunities: [
          'Failed to offer a reasonable installment plan.',
          'Allowed malice to replace firm accountability.',
        ],
        reasoningCritique:
          'Sub-optimal emotional regulation. Boundaries protect your property; cruelty destroys the person.',
      },
    },

    'ending-conflict-avoidant-rot': {
      id: 'ending-conflict-avoidant-rot',
      title: 'The Dishonest Exit: The Chronic Dodge',
      tier: 'partial',
      badge: 'PASSIVE EVASION',
      narrative: [
        'By lying about your credit card balance, you avoided one awkward conversation while leaving the systemic trap wide open for the next encounter.',
        'Dishonest excuses do not establish boundaries; they merely buy you a few days of borrowed peace before the bill comes due.',
      ],
      summary: 'Lying to dodge the conflict preserved temporary comfort while leaving you vulnerable to future exploitation.',
      criteriaReview: {
        theTruth:
          'Julian needed an explicit "no" anchored in reality to understand that the dynamic had changed.',
        yourDeduction:
          'You believed that a harmless white lie would protect the friendship, forgetting that cowardice solves nothing.',
        accuracyRate: 45,
        keyDiscoveries: [
          'Avoided direct confrontation temporarily.',
        ],
        missedOpportunities: [
          'Failed to establish an honest boundary.',
          'Failed to address the existing £280 debt.',
        ],
        reasoningCritique:
          'Weak boundary work. Passive avoidance keeps you trapped in the very cycle you despise.',
      },
    },
  },
};

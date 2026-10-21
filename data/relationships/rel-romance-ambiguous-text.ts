import { Episode } from '@/features/episodes/types';

export const relRomanceAmbiguousTextEpisode: Episode = {
  id: 'rel-romance-ambiguous-text',
  version: '1.0.0',
  title: 'The Ambiguous Text',
  subtitle: 'Navigate romantic insecurity, past relationship trauma, and the balance of transparency and autonomy.',
  synopsis:
    'It is 11:15 PM on a Tuesday. You and your partner Jordan are relaxing on the couch watching a film. Your phone lights up on the coffee table with a preview banner from your former project colleague Alex: "Still thinking about our conversation last week... really grateful for you." Jordan stiffens, stares at the screen, and pulls their hands away. Having been cheated on in a past long-term relationship, Jordan is instantly flooded with anxiety. How do you respond?',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Tuesday Night, 11:15 PM',
  location: 'Apartment Living Room Couch',
  tags: ['Romance', 'Trust & Honesty', 'Insecurity', 'Boundaries', 'Emotional Safety'],
  initialScenarioId: 'scene-glowing-screen',

  suspects: {
    'person-jordan': {
      id: 'person-jordan',
      name: 'Jordan Miller',
      role: 'Romantic Partner of Two Years & Environmental Scientist',
      age: 29,
      initialDemeanor: 'Withdrawn, hyper-vigilant, battling internal shame about feeling paranoid.',
      motive: 'Desperately wants to feel safe and chosen, but is terrified of missing early warning signs of betrayal.',
      opportunity: 'Saw the notification directly on the shared table.',
      alibi: 'Was not snooping; the phone preview illuminated in plain view.',
      weakness: 'Projects the deceit of a previous unfaithful partner onto innocent ambiguities.',
      associatedClueIds: ['clue-alex-context', 'clue-jordan-past'],
      interrogationSummary:
        'Jordan whispers: "I recognize that sinking feeling in my stomach. The last time someone told me not to worry about a coworker, they had been lying to me for six months."',
    },
    'person-alex': {
      id: 'person-alex',
      name: 'Alex Rivera',
      role: 'Former Project Co-worker & Graphic Designer',
      age: 31,
      initialDemeanor: 'Expressive, slightly boundary-blind, currently going through a rough divorce.',
      motive: 'Reaching out for emotional support and advice after a brutal mediation session.',
      opportunity: 'Sent the late-night text after reading your encouraging note from last Thursday.',
      alibi: 'Harbors no romantic intent, but leans too heavily on friendly colleagues for therapy.',
      weakness: 'Uses overly intimate phrasing in late-night messages without considering partner impact.',
      associatedClueIds: ['clue-alex-context'],
      interrogationSummary:
        'Alex’s earlier messages show a strictly platonic, though emotionally intense, discussion about co-parenting legal disputes.',
    },
  },

  clues: {
    'clue-alex-context': {
      id: 'clue-alex-context',
      title: 'Full Message Thread with Alex',
      category: 'digital',
      shortDescription: 'The full context of the "conversation last week" regarding Alex’s child custody mediation.',
      detailedAnalysis:
        'Reading the entire thread shows Alex thanking you for recommending a family mediator. Alex’s phrase "grateful for you" was emotional relief over legal advice, completely devoid of flirtation.',
      locationFound: 'Phone Messaging Thread',
      tags: ['Context', 'Transparency', 'Facts'],
    },
    'clue-jordan-past': {
      id: 'clue-jordan-past',
      title: 'Jordan’s Relational Scar Tissue',
      category: 'testimony',
      shortDescription: 'The history of Jordan’s previous five-year relationship ending in infidelity.',
      detailedAnalysis:
        'Jordan’s former partner spent two years hiding an affair under the guise of "late-night work friends." When Jordan sees a glowing phone screen at 11 PM, their nervous system registers physical danger.',
      locationFound: 'Shared Personal History',
      tags: ['Trauma', 'Hypervigilance', 'Vulnerability'],
    },
    'clue-privacy-boundary': {
      id: 'clue-privacy-boundary',
      title: 'The Line Between Reassurance and Surveillance',
      category: 'document',
      shortDescription: 'The distinction between offering honest transparency and submitting to controlling scrutiny.',
      detailedAnalysis:
        'Offering context willingly de-escalates fear. However, handing over passwords, enduring phone audits, or cutting off platonic friendships fosters an unquenchable cycle of control.',
      locationFound: 'Relationship Ethics Philosophy',
      tags: ['Autonomy', 'Healthy Boundaries', 'Mutual Respect'],
    },
  },

  connections: [
    {
      id: 'conn-anxiety-vs-control',
      clueA: 'clue-alex-context',
      clueB: 'clue-jordan-past',
      deductionTitle: 'Fear Over Malice',
      deductionText:
        'Jordan’s freeze response is a post-traumatic echo, not an act of controlling malice. Compassionate transparency can disarm the panic without surrendering healthy autonomy.',
      unlockedFlag: 'flag_understood_jordan_anxiety',
    },
  ],

  hypotheses: {
    'hyp-compassionate-grounding': {
      id: 'hyp-compassionate-grounding',
      title: 'Offer Immediate Calm Transparency while Holding Healthy Autonomy',
      accusedSuspectId: 'person-jordan',
      motiveSummary: 'Jordan is flooded with past betrayal trauma and needs grounded emotional security.',
      methodSummary: 'Share the context voluntarily, validate the emotional trigger, and reaffirm mutual trust without becoming defensive.',
      requiredClueIds: ['clue-alex-context', 'clue-jordan-past'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-deepened-intimacy',
      failureEndingId: 'ending-defensive-spiral',
    },
  },

  scenarios: {
    'scene-glowing-screen': {
      id: 'scene-glowing-screen',
      title: 'The Notification at 11:15 PM',
      location: 'Living Room Couch',
      narrative: [
        'The opening credits of the film roll softly on the television. Your head was resting near Jordan’s shoulder. Then your phone buzzes on the glass coffee table, casting a white rectangle of light across the room.',
        '"Still thinking about our conversation last week... really grateful for you." — Alex.',
        'You feel Jordan’s shoulder muscles lock instantly. Jordan’s eyes are fixed on the screen. Slowly, Jordan pulls their arm away, shifts to the far corner of the couch, and folds their arms across their chest, staring straight ahead with shallow breaths.',
      ],
      dialogue: [
        {
          speaker: 'Jordan',
          text: 'Who is Alex? And why are they grateful for you at eleven o’clock at night?',
          mood: 'evasive',
        },
      ],
      cluesDiscovered: ['clue-alex-context', 'clue-jordan-past'],
      choices: [
        {
          id: 'choice-calm-transparency',
          text: 'Pick up the phone, unlock it, and turn to Jordan calmly: "That’s Alex from my previous design studio. They’re going through a custody battle and I recommended a mediator. Look, you can read the thread."',
          destinationId: 'scene-thread-review',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'transparency_score', value: 2 },
            { type: 'incrementVariable', target: 'jordan_calm', value: 2 },
            { type: 'setFlag', target: 'flag_offered_immediate_transparency', value: true },
          ],
        },
        {
          id: 'choice-defensive-indignation',
          text: 'Snatch the phone and turn it face down: "Why are you looking at my notifications? Don’t you trust me?"',
          destinationId: 'scene-defensive-escalation',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'jordan_calm', value: 3 },
            { type: 'setFlag', target: 'flag_defensive_snatch', value: true },
          ],
        },
        {
          id: 'choice-brush-off-dismissive',
          text: 'Laugh lightly: "Oh, it’s just a coworker being dramatic. Don’t be paranoid, let’s watch the movie."',
          destinationId: 'scene-gaslit-withdrawal',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'jordan_calm', value: 2 },
            { type: 'setFlag', target: 'flag_dismissive_laugh', value: true },
          ],
        },
      ],
    },

    'scene-thread-review': {
      id: 'scene-thread-review',
      title: 'Context in the Open',
      location: 'Living Room Couch',
      narrative: [
        'You hand the phone to Jordan. Your willingness to do so without hesitation visibly disrupts Jordan’s panic response.',
        'Jordan looks at the screen. The thread shows Alex’s desperate questions about family court, your recommendation for your cousin’s mediation firm, and your encouraging note saying you hope the kids are okay. The message is completely platonic.',
        'Jordan lowers the phone, exhaling a shuddering breath. A flush of shame washes over their face.',
      ],
      dialogue: [
        {
          speaker: 'Jordan',
          text: 'I’m sorry. I feel like an idiot. I just saw the late hour and "thinking about you" and my brain went straight to what David did to me.',
          mood: 'shaken',
        },
      ],
      cluesDiscovered: ['clue-privacy-boundary'],
      choices: [
        {
          id: 'choice-validate-and-partner',
          text: '"You don’t have to apologize for feeling triggered, Jordan. I love you, and I have nothing to hide from you. But I also need us to talk about how we handle these moments together."',
          destinationId: 'scene-vulnerable-grounding',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'relational_depth', value: 2 },
            { type: 'setFlag', target: 'flag_compassionate_holding', value: true },
          ],
        },
        {
          id: 'choice-chastise-for-distrust',
          text: '"See? Completely innocent. I’m tired of paying the emotional tax for what your ex did three years ago."',
          destinationId: 'scene-cold-shame',
          consequencePreview: 'Direct',
          effects: [
            { type: 'decrementVariable', target: 'relational_depth', value: 2 },
            { type: 'setFlag', target: 'flag_chastised_partner', value: true },
          ],
        },
      ],
    },

    'scene-defensive-escalation': {
      id: 'scene-defensive-escalation',
      title: 'The Triggered Minefield',
      location: 'Living Room',
      narrative: [
        'Flipping the phone face down was the exact choreography of Jordan’s ex. Jordan’s eyes widen in terror and sorrow.',
        '"I wasn’t snooping! It was lying right in front of my face!" Jordan’s voice shakes. "And the fact that you immediately hid it tells me everything I need to know."',
        'The room is thick with combat adrenaline. You are defending your abstract right to privacy; Jordan is fighting for emotional survival.',
      ],
      dialogue: [
        {
          speaker: 'Jordan',
          text: 'If it’s innocent, why can’t you just tell me who Alex is? Why are you screaming about privacy?',
          mood: 'defiant',
        },
      ],
      choices: [
        {
          id: 'choice-deescalate-lower-shields',
          text: 'Stop, put the phone on the table, and sit back down: "I reacted defensively because being questioned made me feel accused. I’m sorry. Alex is an old colleague. Let me show you."',
          destinationId: 'scene-thread-review',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'jordan_calm', value: 2 },
            { type: 'setFlag', target: 'flag_deescalated_defense', value: true },
          ],
        },
        {
          id: 'choice-storm-into-bedroom',
          text: '"I’m not doing this tonight. If you don’t trust me after two years, that’s your problem."',
          destinationId: 'scene-ending-rupture',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'jordan_calm', value: 3 },
            { type: 'setFlag', target: 'flag_stormed_out', value: true },
          ],
        },
      ],
    },

    'scene-gaslit-withdrawal': {
      id: 'scene-gaslit-withdrawal',
      title: 'The Unspoken Distance',
      location: 'Living Room Couch, Midnight',
      narrative: [
        'By laughing it off and calling Jordan "paranoid," you shut down the conversation, but you didn’t shut down Jordan’s nervous system.',
        'For the rest of the night, Jordan sits in silence, staring unblinkingly at the TV. In bed, Jordan turns away and lies rigid on the edge of the mattress.',
        'By morning, the intimacy between you feels brittle and cold. An unresolved seed of doubt has been planted deep into the relationship.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I thought I brushed it off, but I really just taught Jordan that I won’t meet their fear with care.',
          mood: 'grief',
        },
      ],
      choices: [
        {
          id: 'choice-morning-repair',
          text: 'Wake up and initiate repair: "Jordan, I was dismissive last night and that wasn’t fair. Let’s talk about Alex and why that scared you."',
          destinationId: 'scene-vulnerable-grounding',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'transparency_score', value: 1 },
            { type: 'setFlag', target: 'flag_morning_repaired', value: true },
          ],
        },
        {
          id: 'choice-let-it-simmer',
          text: 'Pretend nothing is wrong and leave for work in silence.',
          destinationId: 'scene-ending-cold-war',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-vulnerable-grounding': {
      id: 'scene-vulnerable-grounding',
      title: 'Building Unshakable Safety',
      location: 'Kitchen Island over Tea, Midnight',
      isEnding: true,
      endingId: 'ending-deepened-intimacy',
      narrative: [
        'You make two mugs of chamomile tea. Sitting across the island, Jordan’s shoulders finally drop from their ears.',
        'You talk through the double reality: Jordan’s trauma is valid and deserves gentle reassurance, but your relationship is not David’s relationship. True security comes from transparency that is freely given, not extracted through suspicion.',
        'You also establish a healthy personal boundary regarding late-night texts: you agree to let colleagues like Alex know that late-night check-ins are better handled during workday hours, out of respect for your shared evening sanctuary.',
      ],
      dialogue: [
        {
          speaker: 'Jordan',
          text: 'Thank you for not making me feel crazy. Knowing you will just show me what’s happening without fighting me makes me feel so much safer.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-cold-shame': {
      id: 'scene-cold-shame',
      title: 'The Burden of Shamed Fear',
      location: 'Living Room',
      isEnding: true,
      endingId: 'ending-silent-resentment',
      narrative: [
        'Telling Jordan you were "tired of paying the tax for their ex" was logically understandable, but emotionally devastating. Jordan retreated into deep shame.',
        'In the weeks that followed, Jordan stopped asking questions entirely—not because trust was restored, but because feeling terrified in silence was less painful than being rebuked.',
      ],
      dialogue: [
        {
          speaker: 'Jordan',
          text: 'You’re right. I’ll keep my issues to myself from now on.',
          mood: 'evasive',
        },
      ],
      choices: [],
    },

    'scene-ending-rupture': {
      id: 'scene-ending-rupture',
      title: 'The Closed Door',
      location: 'Apartment Hallway',
      isEnding: true,
      endingId: 'ending-defensive-spiral',
      narrative: [
        'By slamming the door and calling Jordan’s trauma "your problem," you confirmed Jordan’s worst fear: that when tension rises, you will abandon them rather than offer safety.',
        'By morning, Jordan had packed an overnight bag to stay with a sibling. What was a completely innocent text from a colleague dismantled a two-year commitment because defensiveness eclipsed empathy.',
      ],
      dialogue: [
        {
          speaker: 'Jordan (Left on Counter)',
          text: 'It was never about Alex. It was about how you treat me when I’m scared.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-ending-cold-war': {
      id: 'scene-ending-cold-war',
      title: 'The Slow Freeze',
      location: 'Apartment Kitchen, One Month Later',
      isEnding: true,
      endingId: 'ending-silent-resentment',
      narrative: [
        'The incident was never spoken of again. But every time your phone vibrated, Jordan looked away, and every time Jordan looked away, you felt irritated.',
        'The unaddressed text created a permanent, quiet draft in the room, slowly extinguishing the warmth of your partnership.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'We are sitting on the same couch, but we are miles apart.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-deepened-intimacy': {
      id: 'ending-deepened-intimacy',
      title: 'Deepened Intimacy: Transparency Without Surrender',
      tier: 'triumph',
      badge: 'EMOTIONAL SECURITY',
      narrative: [
        'You demonstrated that transparency is not an admission of guilt; it is a gift of reassurance offered freely to someone you love. By remaining calm and sharing context without defensiveness, you disarmed Jordan’s old ghost.',
        'Trust in a relationship is not forged when things are comfortable; it is forged when one partner is triggered and the other chooses safety over pride.',
      ],
      summary: 'You neutralized acute past trauma with calm transparency, deepened mutual security, and established healthy communication boundaries.',
      criteriaReview: {
        theTruth:
          'Alex’s text was purely platonic gratitude, but Jordan’s hypervigilance was a physiological trauma response to past infidelity, not an accusation of your character.',
        yourDeduction:
          'You correctly understood that meeting fear with immediate transparency disarms defensiveness and builds lasting relational resilience.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized that defensiveness mimics the behavior of deceit.',
          'Offered voluntary transparency without conceding to paranoid surveillance.',
          'Set realistic boundaries with colleagues around late-night texting.',
        ],
        missedOpportunities: [
          'Could have mentioned Alex’s mediation situation earlier in the week during normal casual conversation.',
        ],
        reasoningCritique:
          'Exceptional emotional intelligence. You protected both the partnership’s security and your own integrity without shaming your partner.',
      },
    },

    'ending-defensive-spiral': {
      id: 'ending-defensive-spiral',
      title: 'The Defensive Wall: Righteous Pride, Lost Partner',
      tier: 'compromised',
      badge: 'AVOIDANT FRACTURE',
      narrative: [
        'You were innocent of infidelity, but guilty of callousness. By prioritizing your indignation over Jordan’s trembling vulnerability, you mirrored the exact hostile evasion of their past abuser.',
        'You won the argument about your technical innocence, but lost the person you claimed to love.',
      ],
      summary: 'Aggressive defensiveness over an innocent notification destroyed the psychological safety of the relationship.',
      criteriaReview: {
        theTruth:
          'Jordan needed thirty seconds of calm reassurance. Your defensive explosion turned an innocent text into an existential relationship crisis.',
        yourDeduction:
          'You mistook a partner’s panic for an insult to your honor, reacting with pride instead of care.',
        accuracyRate: 35,
        keyDiscoveries: [
          'Discovered that righteous fury in the face of fear guarantees emotional severance.',
        ],
        missedOpportunities: [
          'Failed to pause and breathe before reacting.',
          'Did not show the harmless thread immediately.',
        ],
        reasoningCritique:
          'Critical failure in co-regulation. In intimate relationships, proving "you can’t tell me what to do" often costs you the relationship itself.',
      },
    },

    'ending-silent-resentment': {
      id: 'ending-silent-resentment',
      title: 'Silent Resentment: The Chilled Truce',
      tier: 'partial',
      badge: 'EMOTIONAL ESTRANGEMENT',
      narrative: [
        'By shaming Jordan’s question or brushing it off as paranoia, you didn’t eradicate the fear; you simply drove it underground where it could curdle into permanent insecurity.',
        'When fear cannot be spoken aloud in a relationship, intimacy quietly suffocates.',
      ],
      summary: 'Dismissing your partner’s insecurity created a silent chasm of unaddressed distrust.',
      criteriaReview: {
        theTruth:
          'Unhealed insecurity does not vanish when silenced; it requires active, patient transparency to be rewritten.',
        yourDeduction:
          'You believed that refusing to engage with the question would make the drama go away, failing to see that unresolved suspicion is poison.',
        accuracyRate: 50,
        keyDiscoveries: [
          'Learned that shaming someone’s fear creates emotional distance rather than security.',
        ],
        missedOpportunities: [
          'Failed to have an open conversation about past triggers and clear communication agreements.',
        ],
        reasoningCritique:
          'Sub-optimal relational empathy. While setting boundaries around trust is vital, punishing a partner for having feelings destroys the vulnerability that love requires.',
      },
    },
  },
};

import { Episode } from '@/features/episodes/types';

export const relFriendshipCancelledPlansEpisode: Episode = {
  id: 'rel-friendship-cancelled-plans',
  version: '1.0.0',
  title: 'The Cancelled Friday',
  subtitle: 'Decipher repeated last-minute cancellations, address silent burnout, and protect relational boundaries.',
  synopsis:
    'For the third consecutive Friday, your close friend Maya texts you ninety minutes before dinner to cancel, blaming sudden exhaustion and work backlog. You are sitting at the café table where you reserved a booth for two. Do you swallow your frustration, demand an immediate confrontation, set a firm relational boundary, or offer gentle curiosity without abandoning your own needs?',
  estimatedMinutes: 18,
  difficulty: 'Novice',
  timeSetting: 'Friday Evening, 6:45 PM',
  location: 'Clementine Bistro & Espresso Lounge',
  tags: ['Friendship', 'Boundaries', 'Active Listening', 'Burnout', 'Reciprocity'],
  initialScenarioId: 'scene-cancelled-text',

  suspects: {
    'person-maya': {
      id: 'person-maya',
      name: 'Maya Lin',
      role: 'Close Friend of Four Years & Architectural Designer',
      age: 28,
      initialDemeanor: 'Apologetic, scattered, overwhelmed, emotionally defensive when pressed.',
      motive: 'Desperately needs rest and solitude but feels immense shame about letting people down.',
      opportunity: 'Repeatedly postpones social commitments right at the transition from work to evening.',
      alibi: 'Claims unexpected revisions on a municipal permit package kept her trapped at her desk.',
      weakness: 'Over-commits when feeling guilty, then collapses into avoidance when energy runs out.',
      associatedClueIds: ['clue-cancellation-pattern', 'clue-maya-workload'],
      interrogationSummary:
        'Maya admits that saying "yes" to plans during the week feels like an aspirational promise she sincerely wants to keep, but by Friday 6 PM she feels physically unable to speak with anyone.',
    },
    'person-julian': {
      id: 'person-julian',
      name: 'Julian Vance',
      role: 'Mutual Friend & Studio Colleague',
      age: 29,
      initialDemeanor: 'Observant, candid, slightly weary of the recurring social drift.',
      motive: 'Wants the friendship circle to remain intact without everyone walking on eggshells.',
      opportunity: 'Shares a studio space with Maya and sees her daily work hours.',
      alibi: 'Had plans elsewhere but noticed Maya still at her computer looking hollowed out at 5:30 PM.',
      weakness: 'Tends to give unsolicited advice on managing friendships.',
      associatedClueIds: ['clue-studio-hours'],
      interrogationSummary:
        'Julian observes: "Maya hasn’t taken a lunch break in three weeks. She isn’t blowing you off for someone cooler; she’s drowning in silence."',
    },
  },

  clues: {
    'clue-cancellation-pattern': {
      id: 'clue-cancellation-pattern',
      title: 'Text Message Thread History',
      category: 'digital',
      shortDescription: 'Three last-minute cancellation texts spaced exactly two weeks apart.',
      detailedAnalysis:
        'Reviewing the message history reveals a consistent pattern: Maya enthusiastically confirms on Wednesday afternoon, sends a brief check-in on Thursday, and then sends a rushed, guilt-laden apology on Friday between 5:30 PM and 6:45 PM.',
      locationFound: 'Smartphone Messaging App',
      tags: ['Communication Pattern', 'Timing', 'Consistency'],
    },
    'clue-maya-workload': {
      id: 'clue-maya-workload',
      title: 'Structural Overwork Signs',
      category: 'testimony',
      shortDescription: 'Maya’s recent team restructuring doubled her deliverables without new staffing.',
      detailedAnalysis:
        'Maya’s company recently went through a quiet layoff round. She absorbed the workload of two departed project leads, leaving her working 60-hour weeks without overtime compensation.',
      locationFound: 'Julian’s Studio Observation',
      tags: ['Context', 'Burnout', 'Work Stress'],
    },
    'clue-emotional-toll': {
      id: 'clue-emotional-toll',
      title: 'Personal Resentment Ledger',
      category: 'document',
      shortDescription: 'The quiet buildup of one-sided effort and reserved restaurant tables.',
      detailedAnalysis:
        'You realize you have planned the last four outings, picked venues close to Maya’s apartment, and turned down other invitations to keep your Fridays open for her.',
      locationFound: 'Your Reflections',
      tags: ['Self-Awareness', 'Boundaries', 'Emotional Labor'],
    },
  },

  connections: [
    {
      id: 'conn-burnout-vs-disregard',
      clueA: 'clue-cancellation-pattern',
      clueB: 'clue-maya-workload',
      deductionTitle: 'Chronic Depletion Over Malice',
      deductionText:
        'Maya’s cancellations are driven by acute nervous system depletion rather than a lack of affection for the friendship, though the impact on your time remains real and draining.',
      unlockedFlag: 'flag_understood_burnout',
    },
  ],

  hypotheses: {
    'hyp-renegotiate-rhythm': {
      id: 'hyp-renegotiate-rhythm',
      title: 'Renegotiate Friday Expectations with Honest Boundaries',
      accusedSuspectId: 'person-maya',
      motiveSummary: 'Maya wants connection but cannot sustain formal Friday dinner obligations in her current state.',
      methodSummary: 'Name the pattern without contempt, validate her exhaustion, and reset how and when you meet.',
      requiredClueIds: ['clue-cancellation-pattern', 'clue-maya-workload'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-mutual-reset',
      failureEndingId: 'ending-passive-estrangement',
    },
  },

  scenarios: {
    'scene-cancelled-text': {
      id: 'scene-cancelled-text',
      title: 'The Buzz on the Table',
      location: 'Clementine Bistro, Booth 4',
      narrative: [
        'The restaurant buzzes with the clatter of cutlery and the warmth of Friday night reunions. The server has just filled your water glass for the second time, asking if your party is still arriving.',
        'Your phone illuminates against the dark wood tabletop. It is a long paragraph from Maya: "I am so, so sorry. My head is pounding, the permit office rejected our elevations, and I literally cannot keep my eyes open. Please don’t hate me. Can we reschedule for Sunday afternoon?"',
        'Your stomach tightens with familiar disappointment. It is the third time this month. You look across the empty wooden bench across from you.',
      ],
      dialogue: [
        {
          speaker: 'Server',
          text: 'Still waiting on one, or should I bring you a cocktail menu while you look over the specials?',
          mood: 'calm',
        },
      ],
      cluesDiscovered: ['clue-cancellation-pattern'],
      choices: [
        {
          id: 'choice-respond-grace-inquiry',
          text: 'Send a calm text: "I understand you are wiped out, but third-time cancellations sting. Rest tonight, and let’s talk honestly tomorrow."',
          destinationId: 'scene-next-day-call',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'candor_score', value: 1 },
            { type: 'incrementVariable', target: 'boundary_clarity', value: 1 },
            { type: 'setFlag', target: 'flag_clear_boundary_set', value: true },
          ],
        },
        {
          id: 'choice-respond-passive-fine',
          text: 'Reply immediately: "No worries at all! Get some rest! Totally fine!" while swallowing your irritation.',
          destinationId: 'scene-passive-suppression',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'candor_score', value: 1 },
            { type: 'setFlag', target: 'flag_suppressed_resentment', value: true },
          ],
        },
        {
          id: 'choice-respond-confrontational',
          text: 'Call her right now while she is reading the message: "Maya, this is the third time. You could have told me at 2 PM instead of 6:45 PM."',
          destinationId: 'scene-phone-confrontation',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'candor_score', value: 2 },
            { type: 'decrementVariable', target: 'empathy_score', value: 1 },
            { type: 'setFlag', target: 'flag_immediate_confrontation', value: true },
          ],
        },
      ],
    },

    'scene-next-day-call': {
      id: 'scene-next-day-call',
      title: 'Saturday Morning Recalibration',
      location: 'Your Living Room, 11:15 AM',
      narrative: [
        'Saturday morning brings clearer light. At 11:00 AM, Maya calls. Her voice sounds fragile, devoid of her usual quick wit.',
        '"I saw your text last night," she begins softly. "You were right to say it stings. I felt so sick with guilt that I barely slept. I just keep thinking I can power through the week, and then Friday at 5:00 PM my body completely shuts down."',
        'She is waiting to hear where you stand. The conversation is primed for either genuine renegotiation or escalating defensiveness.',
      ],
      dialogue: [
        {
          speaker: 'Maya',
          text: 'I really value our friendship. I’m terrified you think I don’t care about you.',
          mood: 'grief',
        },
      ],
      cluesDiscovered: ['clue-maya-workload', 'clue-emotional-toll'],
      choices: [
        {
          id: 'choice-renegotiate-format',
          text: '"I know you care, Maya. But dinner reservations right after your 60-hour work week aren’t working for either of us. Let’s stop booking Friday nights entirely until your studio rebalances."',
          destinationId: 'scene-resolution-reset',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'relational_health', value: 2 },
            { type: 'setFlag', target: 'flag_renegotiated_successfully', value: true },
          ],
        },
        {
          id: 'choice-demand-unconditional-prioritization',
          text: '"If you valued our friendship, you would schedule your sleep and prioritize me like I prioritize you."',
          destinationId: 'scene-defensive-retreat',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'empathy_score', value: 2 },
            { type: 'setFlag', target: 'flag_maya_shamed', value: true },
          ],
        },
        {
          id: 'choice-propose-casual-checkin',
          text: '"How about you take this weekend completely off, and next month we only do low-stakes Sunday morning coffee walks near your place?"',
          destinationId: 'scene-resolution-reset',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'relational_health', value: 2 },
            { type: 'setFlag', target: 'flag_low_stakes_alternative', value: true },
          ],
        },
      ],
    },

    'scene-passive-suppression': {
      id: 'scene-passive-suppression',
      title: 'The Silent Accumulation',
      location: 'Your Living Room, Two Weeks Later',
      narrative: [
        'By telling Maya "it was totally fine," you relieved her immediate guilt, but left your own frustration unacknowledged.',
        'Two weeks later, Maya suggests meeting for drinks. You notice yourself taking six hours to reply to her text, crafting curt responses, and looking for reasons to decline.',
        'You realize that avoiding a difficult conversation did not protect the friendship; it simply converted an honest conversation into passive withdrawal.',
      ],
      dialogue: [
        {
          speaker: 'Maya (Text)',
          text: 'Hey! Are we still on for tomorrow? You seemed a little distant this week, hope everything is ok?',
          mood: 'nervous',
        },
      ],
      choices: [
        {
          id: 'choice-break-silence-now',
          text: 'Course-correct honestly: "I haven’t been totally candid. I was actually really hurt by the repeated Friday cancellations, and I need us to clear the air."',
          destinationId: 'scene-resolution-reset',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'candor_score', value: 2 },
            { type: 'setFlag', target: 'flag_recovered_honesty', value: true },
          ],
        },
        {
          id: 'choice-continue-fading',
          text: 'Send an excuse: "Super slammed this weekend! Let’s reconnect later this month."',
          destinationId: 'scene-ending-fade',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'setFlag', target: 'flag_slow_fade', value: true },
          ],
        },
      ],
    },

    'scene-phone-confrontation': {
      id: 'scene-phone-confrontation',
      title: 'The Heated Speakerphone',
      location: 'Outside Clementine Bistro',
      narrative: [
        'You step outside the restaurant onto the cool pavement and dial Maya. She picks up on the second ring, caught off guard.',
        '"I am at the table right now, Maya. If you were exhausted, you knew at 2:00 PM, not fifteen minutes before our reservation," you tell her.',
        'There is a sharp intake of breath on the line. "I was trying! I literally thought I could finish my review!" Her tone turns defensive and wounded. "You think I want to be crying at my desk on a Friday night? You have no idea what my week was like."',
      ],
      dialogue: [
        {
          speaker: 'Maya',
          text: 'I’m drowning right now and the first thing you do is interrogate me about timing.',
          mood: 'defiant',
        },
      ],
      choices: [
        {
          id: 'choice-pivot-to-listening',
          text: 'Take a breath and dial back the heat: "You’re right that I don’t know what your week was like. Tell me what happened today."',
          destinationId: 'scene-resolution-reset',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'empathy_score', value: 2 },
            { type: 'setFlag', target: 'flag_deescalated_phone', value: true },
          ],
        },
        {
          id: 'choice-double-down-on-rudeness',
          text: '"Being stressed at work does not make it acceptable to treat other people’s time like garbage."',
          destinationId: 'scene-defensive-retreat',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'relational_health', value: 2 },
            { type: 'setFlag', target: 'flag_severed_temper', value: true },
          ],
        },
      ],
    },

    'scene-resolution-reset': {
      id: 'scene-resolution-reset',
      title: 'A New Relational Agreement',
      location: 'Sunday Morning Coffee, Park Bench',
      isEnding: true,
      endingId: 'ending-mutual-reset',
      narrative: [
        'Two days later, you meet Maya on a park bench over takeaway coffees. The environment is unhurried. There is no waiter waiting for an order, no crowded dining room, and no post-work exhaustion.',
        'With clear minds, you both map out what happened: Maya’s workplace crunch, her chronic over-promising, and your legitimate need not to have your Friday evenings held hostage by uncertain plans.',
        'You agree on a concrete shift: no high-effort weeknight plans until her firm hires reinforcement. Instead, you agree on spontaneous weekend calls with zero guilt if one person needs to rest.',
      ],
      dialogue: [
        {
          speaker: 'Maya',
          text: 'Thank you for not giving up on me, but also for not letting me pretend this was fine.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-defensive-retreat': {
      id: 'scene-defensive-retreat',
      title: 'The Wall of Guilt',
      location: 'Smartphone Call History',
      isEnding: true,
      endingId: 'ending-defensive-rupture',
      narrative: [
        'The confrontation left Maya feeling humiliated and fundamentally misunderstood. When demands for prioritization were made without acknowledging her acute burnout, she retreated entirely.',
        'Subsequent messages became stiff and formal. Neither of you reached out for weeks. What began as a solvable scheduling mismatch hardened into mutual resentment.',
      ],
      dialogue: [
        {
          speaker: 'Maya (Final Text)',
          text: 'I think I just need space to get through this month. Take care.',
          mood: 'evasive',
        },
      ],
      choices: [],
    },

    'scene-ending-fade': {
      id: 'scene-ending-fade',
      title: 'The Drift of Unspoken Grievance',
      location: 'Archived Chats',
      isEnding: true,
      endingId: 'ending-passive-estrangement',
      narrative: [
        'By never naming the frustration, you protected temporary comfort at the expense of intimacy. Months pass with sporadic "we should totally hang out soon" texts that neither party actually acts on.',
        'The friendship didn’t die from a dramatic betrayal; it simply starved from the lack of authentic truth.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'We never had an argument. We just stopped being real with each other.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-mutual-reset': {
      id: 'ending-mutual-reset',
      title: 'Reciprocal Reset: Honest Boundaries & Compassion',
      tier: 'triumph',
      badge: 'RELATIONAL EQUILIBRIUM',
      narrative: [
        'You neither pretended the cancellations were harmless nor attacked Maya for being depleted. By naming the impact on your time while adjusting the social structure to match her capacity, you preserved both your self-respect and the friendship.',
        'True friendship is not proven by enduring chronic disrespect in silence, nor by demanding that an exhausted friend perform for you. It lives in the courage to renegotiate the terms of connection when life changes.',
      ],
      summary: 'You established clear boundaries without contempt, creating a realistic, lower-friction friendship rhythm.',
      criteriaReview: {
        theTruth:
          'Maya was experiencing acute nervous system burnout and over-promising out of shame. She needed lower-pressure social contact, not repeated Friday dinner bookings.',
        yourDeduction:
          'You recognized that chronic last-minute cancellations require both firm boundary-setting and practical accommodation of life capacity.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized that saying "it’s fine" breeds poisonous passive resentment.',
          'Understood Maya’s structural work stress without sacrificing your own Friday boundaries.',
          'Shifted from high-stakes dinner reservations to low-stakes weekend check-ins.',
        ],
        missedOpportunities: [
          'Could have checked in earlier on Friday afternoon before heading to the restaurant.',
        ],
        reasoningCritique:
          'Excellent interpersonal calibration. You separated the person from the pattern, held accountability without humiliation, and created a sustainable new standard for both of you.',
      },
    },

    'ending-defensive-rupture': {
      id: 'ending-defensive-rupture',
      title: 'Defensive Fracture: Righteous Anger, Broken Bridge',
      tier: 'compromised',
      badge: 'RELATIONAL COLLAPSE',
      narrative: [
        'Your point about punctuality and respect was entirely correct, but your timing and tone treated an exhausted friend as an adversary. By framing her breakdown as a character defect, you provoked shame and withdrawal.',
        'Being right about a grievance is cold comfort when the relationship itself has been reduced to ash.',
      ],
      summary: 'You prioritized expressing indignation over understanding context, pushing Maya into complete emotional withdrawal.',
      criteriaReview: {
        theTruth:
          'Maya was genuinely unable to function after severe overwork. She required an honest boundary, but not a character indictment on an empty stomach.',
        yourDeduction:
          'You assumed the cancellations were proof of malice and entitlement rather than exhaustion and poor boundary management.',
        accuracyRate: 40,
        keyDiscoveries: [
          'Identified the cancellation pattern accurately.',
        ],
        missedOpportunities: [
          'Failed to pause before escalating the confrontation.',
          'Did not distinguish between deliberate neglect and overwhelmed avoidance.',
        ],
        reasoningCritique:
          'Accountability without empathy often reads as hostility. While setting a boundary was essential, attacking an already crumbling person rarely yields genuine change.',
      },
    },

    'ending-passive-estrangement': {
      id: 'ending-passive-estrangement',
      title: 'Silent Attrition: The Courtesy That Kills',
      tier: 'partial',
      badge: 'UNSPOKEN ESTRANGEMENT',
      narrative: [
        'To avoid an uncomfortable fifteen-minute conversation, you opted for polite cheerfulness. In doing so, you allowed silent resentment to erode the warmth you were trying to preserve.',
        'Friendships rarely survive long-term when one person silently keeps score.',
      ],
      summary: 'Suppressed frustration transformed a warm connection into an awkward, superficial acquaintanceship.',
      criteriaReview: {
        theTruth:
          'Maya could have handled an honest conversation about changing your meetup format, but your "no worries!" masked the real problem until it was too late.',
        yourDeduction:
          'You believed that being agreeable was the same as being kind, forgetting that unexpressed resentment always leaks out sideways.',
        accuracyRate: 50,
        keyDiscoveries: [
          'Learned that artificial harmony leads to real disconnection.',
        ],
        missedOpportunities: [
          'Did not express your disappointment when it occurred.',
          'Did not give Maya the chance to show accountability.',
        ],
        reasoningCritique:
          'Passive accommodation feels safe in the moment, but it denies the other person the chance to meet your needs and robs the friendship of honesty.',
      },
    },
  },
};

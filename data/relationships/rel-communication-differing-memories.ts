import { Episode } from '@/features/episodes/types';

export const relCommunicationDifferingMemoriesEpisode: Episode = {
  id: 'rel-communication-differing-memories',
  version: '1.0.0',
  title: 'Two Memories of One Night',
  subtitle: 'De-escalate contradictory recollections, overcome the compulsion to win, and align on reality.',
  synopsis:
    'Your landlord just dropped a £450 penalty notice through the mail slot: your apartment renewal paperwork was never submitted by the Friday deadline, triggering an automatic month-to-month rent increase. You distinctly remember handing the signed envelope to your roommate Dev on Tuesday night. Dev stares at you with pure indignation and insists: "You told me you were going to drop it off on your way to work Wednesday!" Both of you are 100% convinced you are telling the truth. How do you resolve the crisis without destroying the lease or the friendship?',
  estimatedMinutes: 18,
  difficulty: 'Intermediate',
  timeSetting: 'Monday Evening, 6:30 PM',
  location: 'Apartment Hallway & Kitchen Island',
  tags: ['Conflict Resolution', 'Active Listening', 'Memory & Bias', 'Communication', 'Accountability'],
  initialScenarioId: 'scene-penalty-notice',

  suspects: {
    'person-dev': {
      id: 'person-dev',
      name: 'Dev Malik',
      role: 'Roommate of Three Years & Environmental Consultant',
      age: 28,
      initialDemeanor: 'Incredulous, defensive, stressed by financial penalties, rigid in his recall.',
      motive: 'Needs to protect his self-image as a responsible, organized professional.',
      opportunity: 'Was in the living room on Tuesday night when the lease papers were being discussed.',
      alibi: 'Claims his calendar shows he was on client calls Wednesday morning and never touched the envelope.',
      weakness: 'Equates admitting memory fallibility with taking total blame for the penalty.',
      associatedClueIds: ['clue-hallway-console', 'clue-tuesday-recollection'],
      interrogationSummary:
        'Dev insists: "I am meticulous about documents. If you handed it to me, it would be in my briefcase. It isn’t there, so you never gave it to me."',
    },
    'person-landlord': {
      id: 'person-landlord',
      name: 'Mr. Henderson',
      role: 'Property Manager',
      age: 55,
      initialDemeanor: 'Bureaucratic, impersonal, driven strictly by postmarked timestamps.',
      motive: 'Enforcing the lease renewal penalty per property management guidelines.',
      opportunity: 'Controls whether the late penalty can be waived with a prompt joint submission.',
      alibi: 'States the office lockbox was checked Friday at 5:00 PM and was empty.',
      weakness: 'Will waive fees if tenants demonstrate cohesive, professional accountability.',
      associatedClueIds: ['clue-landlord-policy'],
      interrogationSummary:
        'Henderson’s note states: "Penalties stand unless signed lease documents and joint written appeal are received by 9:00 AM Tuesday."',
    },
  },

  clues: {
    'clue-hallway-console': {
      id: 'clue-hallway-console',
      title: 'The Hallway Mail Console Bowl',
      category: 'physical',
      shortDescription: 'The sealed brown envelope containing the lease was tucked beneath a stack of takeaway menus.',
      detailedAnalysis:
        'Looking beneath the takeout menus in the hallway console reveals the signed lease envelope. It was placed there on Tuesday night—neither taken to work by you nor packed into Dev’s briefcase.',
      locationFound: 'Hallway Entry Table',
      tags: ['Physical Evidence', 'Shared Error', 'Truth'],
    },
    'clue-tuesday-recollection': {
      id: 'clue-tuesday-recollection',
      title: 'Tuesday Night Distraction Dynamics',
      category: 'testimony',
      shortDescription: 'Both roommates were exhausted and multitasking during the conversation.',
      detailedAnalysis:
        'On Tuesday night, you were cooking pasta while Dev was taking an urgent client phone call. The agreement was made with half-attention while talking over boiling water, creating memory gaps on both sides.',
      locationFound: 'Mutual Reflection',
      tags: ['Cognitive Load', 'Distraction', 'False Memory'],
    },
    'clue-landlord-policy': {
      id: 'clue-landlord-policy',
      title: 'Penalty Waiver Grace Window',
      category: 'document',
      shortDescription: 'A signed joint appeal letter submitted with the lease can rescind the £450 fee before 9 AM.',
      detailedAnalysis:
        'Henderson’s management company policy allows a 24-hour one-time clerical grace period if both tenants submit a joint signed appeal and hand-deliver the lease before tomorrow morning.',
      locationFound: 'Tenancy Agreement Fine Print',
      tags: ['Urgency', 'Pragmatism', 'Solution'],
    },
  },

  connections: [
    {
      id: 'conn-shared-distraction',
      clueA: 'clue-hallway-console',
      clueB: 'clue-tuesday-recollection',
      deductionTitle: 'Mutual Amnesia of Half-Attention',
      deductionText:
        'Neither person deliberately lied. The envelope was set down on the console while both were distracted. Proving who was "more wrong" is a waste of precious hours when the penalty deadline is ticking.',
      unlockedFlag: 'flag_understood_shared_error',
    },
  ],

  hypotheses: {
    'hyp-collaborative-resolution': {
      id: 'hyp-collaborative-resolution',
      title: 'Abandon the Blame Game and Execute Joint Appeal Before 9 AM',
      accusedSuspectId: 'person-dev',
      motiveSummary: 'Both roommates are trapped in cognitive bias and defensive pride while £450 is on the line.',
      methodSummary: 'Find the envelope together on the console, acknowledge human memory limits, draft the joint appeal, and split any residual fee equally.',
      requiredClueIds: ['clue-hallway-console', 'clue-tuesday-recollection', 'clue-landlord-policy'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-collaborative-alignment',
      failureEndingId: 'ending-scorched-roommate-war',
    },
  },

  scenarios: {
    'scene-penalty-notice': {
      id: 'scene-penalty-notice',
      title: 'The Letter on the Mat',
      location: 'Apartment Entryway',
      narrative: [
        'The white envelope from Henderson Properties sits on the doormat like an unexploded shell. You rip it open: late submission fee of £450 and a £150/month rent hike starting next month.',
        'Your pulse spikes. You turn to Dev, who is taking off his trainers by the door. "Dev, didn’t you drop off the lease on Wednesday? Henderson says they never got it."',
        'Dev stops in his tracks. His jaw tightens instantly. "Me? You told me on Tuesday night that you had it in your backpack and were dropping it off before your morning standup!"',
        'Both of you are looking at each other with utter, unshakeable certainty that the other person is rewriting history.',
      ],
      dialogue: [
        {
          speaker: 'Dev',
          text: 'Don’t put this on me. I specifically remember you putting the pen in your bag.',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-tuesday-recollection', 'clue-landlord-policy'],
      choices: [
        {
          id: 'choice-pivot-to-facts-first',
          text: '"Dev, before we litigate Tuesday night, Henderson has a 9:00 AM grace window tomorrow. Where is the actual physical document right now? Let’s check the apartment."',
          destinationId: 'scene-the-console-search',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'deescalation_score', value: 2 },
            { type: 'setFlag', target: 'flag_searched_for_document_first', value: true },
          ],
        },
        {
          id: 'choice-defend-memory-aggressively',
          text: '"Are you insane? I was stirring the pasta sauce when I handed you the manila folder! How can you stand there and lie to my face?"',
          destinationId: 'scene-righteous-screaming',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'deescalation_score', value: 3 },
            { type: 'setFlag', target: 'flag_accused_of_lying', value: true },
          ],
        },
        {
          id: 'choice-passive-aggressive-martyr',
          text: '"Fine. I’ll pay the £450 myself since you refuse to take responsibility for your mistakes."',
          destinationId: 'scene-passive-martyrdom',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'deescalation_score', value: 2 },
            { type: 'setFlag', target: 'flag_bitter_martyr_payout', value: true },
          ],
        },
      ],
    },

    'scene-the-console-search': {
      id: 'scene-the-console-search',
      title: 'The Archaeology of the Hallway',
      location: 'Apartment Hallway Table',
      narrative: [
        'Instead of trading insults, you both start checking surfaces. Dev opens his laptop bag. You check your winter coat pockets.',
        'Then you lift the ceramic bowl on the entryway console where old mail and pizza flyers accumulate. There, nestled underneath three unread utility bills, is the brown manila envelope. Sealed. Addressed to Henderson Properties.',
        'Neither of you touched it on Wednesday. You both stare at the envelope on the console in stunned silence.',
      ],
      dialogue: [
        {
          speaker: 'Dev',
          text: 'Wait... we both set it down right here while the stove timer was beeping, didn’t we?',
          mood: 'shaken',
        },
      ],
      cluesDiscovered: ['clue-hallway-console'],
      choices: [
        {
          id: 'choice-humorous-grace',
          text: 'Burst out laughing in relief: "We were both 100% convinced, and our brains completely fabricated the ending. Let’s get this joint appeal written right now."',
          destinationId: 'scene-joint-appeal-victory',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'relational_humor', value: 2 },
            { type: 'setFlag', target: 'flag_mutual_humility_achieved', value: true },
          ],
        },
        {
          id: 'choice-petty-consolation-blame',
          text: '"See? It’s on the side of the table where you put your keys! Technically it was your zone."',
          destinationId: 'scene-petty-resurgence',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'relational_humor', value: 2 },
            { type: 'setFlag', target: 'flag_petty_blame_resurgence', value: true },
          ],
        },
      ],
    },

    'scene-righteous-screaming': {
      id: 'scene-righteous-screaming',
      title: 'The Trial of the Hallway',
      location: 'Apartment Living Room',
      narrative: [
        'The argument escalates into an all-out trial. You bring up the time Dev forgot to buy dish soap; Dev brings up the time you left the kitchen window open during rain.',
        'By 8:00 PM, you are both hoarse and furious. The physical lease is still missing, the Henderson deadline is twelve hours away, and the atmosphere in the apartment is toxic with contempt.',
      ],
      dialogue: [
        {
          speaker: 'Dev',
          text: 'I can’t live with someone who treats me like a criminal every time an administrative error happens.',
          mood: 'defiant',
        },
      ],
      choices: [
        {
          id: 'choice-force-cooling-off',
          text: 'Hit the emergency brake: "Stop. Look at us. We are screaming about dish soap while Henderson is about to charge us £450. Can we please just look for the envelope?"',
          destinationId: 'scene-the-console-search',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'deescalation_score', value: 1 },
          ],
        },
        {
          id: 'choice-slam-door-war',
          text: 'Slam your bedroom door and tell him to pay the fine.',
          destinationId: 'scene-scorched-earth',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-joint-appeal-victory': {
      id: 'scene-joint-appeal-victory',
      title: 'The Tuesday Morning Submission',
      location: 'Henderson Properties Office, Tuesday 8:30 AM',
      isEnding: true,
      endingId: 'ending-collaborative-alignment',
      narrative: [
        'At 8:30 AM, you and Dev stand together at the front desk of Henderson Properties. You hand over the signed lease along with a concise, professional letter explaining the clerical misplacement and offering your joint apologies.',
        'The property manager reads the letter, looks at both of you standing together in unified accountability, and stamps the document: "FEE WAIVED — ONE-TIME COURTESY."',
        'Outside on the pavement under morning sunlight, you and Dev grab coffees. The crisis is solved, and your friendship is stronger because you learned how to survive cognitive fallibility together.',
      ],
      dialogue: [
        {
          speaker: 'Dev',
          text: 'From now on, whoever drops off the lease takes a photo of it going into the box. Deal?',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-petty-resurgence': {
      id: 'scene-petty-resurgence',
      title: 'The Pyrrhic Victory',
      location: 'Apartment Hallway',
      isEnding: true,
      endingId: 'ending-lingering-grudge',
      narrative: [
        'Even after finding the envelope on neutral ground, you couldn’t resist claiming moral superiority by pointing out it was "near his keys."',
        'Dev sighed, rolled his eyes, and walked into his bedroom without helping you draft the appeal letter. You submitted it alone. The fee was waived, but the roommate camaraderie was replaced by guarded pettiness.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I proved a microscopic point and created three months of awkward silence.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-passive-martyrdom': {
      id: 'scene-passive-martyrdom',
      title: 'The Bill of Resentment',
      location: 'Bank Transfer App',
      isEnding: true,
      endingId: 'ending-lingering-grudge',
      narrative: [
        'You paid the £450 penalty out of your own account, telling Dev "don’t worry about it" through gritted teeth.',
        'Over the next four months, every time Dev left a dish in the sink, you thought about the £450. You never brought it up, but you radiated cold resentment until Dev signed a lease elsewhere and moved out in July.',
      ],
      dialogue: [
        {
          speaker: 'Dev (Moving Day)',
          text: 'You never really forgave me for that lease, did you?',
          mood: 'evasive',
        },
      ],
      choices: [],
    },

    'scene-scorched-earth': {
      id: 'scene-scorched-earth',
      title: 'The Broken Tenancy',
      location: 'Apartment Living Room, Three Weeks Later',
      isEnding: true,
      endingId: 'ending-scorched-roommate-war',
      narrative: [
        'Neither person backed down. The Henderson deadline lapsed. The penalty was deducted from your security deposit, and the rent increased by £150 per month.',
        'Living in the apartment became unbearable. You communicated only via post-it notes on the fridge until the tenancy ended in acrimony and lawyers.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'We burned down our living situation over a manila envelope sitting three feet away.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-collaborative-alignment': {
      id: 'ending-collaborative-alignment',
      title: 'Collaborative Alignment: Solving the Problem Over Winning the Fight',
      tier: 'triumph',
      badge: 'COGNITIVE HUMILITY',
      narrative: [
        'You understood that memory is not a video recording; it is an imaginative reconstruction easily distorted by distraction and stress. By prioritizing finding the document over winning the blame war, you avoided the penalty and preserved the friendship.',
        'The mark of mature communication is not never having misunderstandings; it is having the agility to laugh at shared fallibility and solve the problem together.',
      ],
      summary: 'You prioritized physical problem-solving over defensive righteousness, waived the £450 fine, and strengthened roommate trust.',
      criteriaReview: {
        theTruth:
          'Both roommates set the envelope on the console table during a chaotic Tuesday dinner and both misremembered the handoff.',
        yourDeduction:
          'You correctly identified that arguing about memories during an active deadline is self-sabotage, and focused on finding the physical paper.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized the fallibility of human memory under high cognitive load.',
          'Pivoted from accusing to searching for physical evidence.',
          'Leveraged the property manager’s grace window with a unified front.',
        ],
        missedOpportunities: [
          'Could have established an instant photographic verification habit for shared administrative paperwork.',
        ],
        reasoningCritique:
          'Exemplary conflict de-escalation. You defused a volatile, high-stakes domestic crisis by treating your roommate as a partner against a common problem rather than an adversary.',
      },
    },

    'ending-scorched-roommate-war': {
      id: 'ending-scorched-roommate-war',
      title: 'The Scorched Lease: Righteous Pride, Ruined Home',
      tier: 'compromised',
      badge: 'DOMESTIC COLLAPSE',
      narrative: [
        'You were both so addicted to proving your own infallibility that you allowed a £450 penalty to destroy a three-year living arrangement. The envelope sat in plain sight while you waged emotional warfare.',
        'Insisting on being "right" is the most expensive hobby in human relationships.',
      ],
      summary: 'Unchecked pride and shouting matches let the deadline expire, costing £450 and destroying the tenancy.',
      criteriaReview: {
        theTruth:
          'The envelope was sitting on the hallway table the entire time. A five-minute search would have saved both the money and the peace.',
        yourDeduction:
          'You assumed the other person was malicious and gaslighting you, escalating an administrative mistake into a character referendum.',
        accuracyRate: 25,
        keyDiscoveries: [
          'Discovered that unyielding pride blinds people to the simplest physical facts.',
        ],
        missedOpportunities: [
          'Failed to look around the apartment before launching into accusations.',
          'Failed to utilize the property management grace period.',
        ],
        reasoningCritique:
          'Catastrophic failure in conflict management. You allowed personal ego to completely eclipse practical reality and financial self-interest.',
      },
    },

    'ending-lingering-grudge': {
      id: 'ending-lingering-grudge',
      title: 'The Silent Ledger: The Petty Victory',
      tier: 'partial',
      badge: 'COLD ACCUMULATION',
      narrative: [
        'The crisis was averted on paper, but your refusal to let go of blaming Dev left a permanent chill in the apartment. You saved the money, but lost the easy warmth of home.',
        'A relationship where every mistake is cataloged and weaponized is merely a business partnership waiting to dissolve.',
      ],
      summary: 'You solved the paperwork but kept score, poisoning the domestic atmosphere with subtle resentment.',
      criteriaReview: {
        theTruth:
          'Both parties contributed to the misplacement. Pointing fingers after the fact achieved nothing except humiliating your roommate.',
        yourDeduction:
          'You believed that having the last word was necessary to establish accountability, confusing pettiness with boundaries.',
        accuracyRate: 65,
        keyDiscoveries: [
          'Found the document and avoided the financial penalty.',
        ],
        missedOpportunities: [
          'Failed to extend mutual grace after discovering the shared error.',
        ],
        reasoningCritique:
          'Sub-optimal relational maturity. Securing the practical outcome without repairing the emotional tone creates lingering domestic dysfunction.',
      },
    },
  },
};

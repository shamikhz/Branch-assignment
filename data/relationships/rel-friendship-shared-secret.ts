import { Episode } from '@/features/episodes/types';

export const relFriendshipSharedSecretEpisode: Episode = {
  id: 'rel-friendship-shared-secret',
  version: '1.0.0',
  title: 'The Shared Secret',
  subtitle: 'Confront a breach of confidence, distinguish carelessness from malice, and reconstruct boundary guardrails.',
  synopsis:
    'You confided in your longtime friend Sam that you were quietly interviewing for a senior role at a competitor while still employed. Last night at a casual dinner with industry acquaintances, Sam casually blurted out: "Well, assuming you even work at Apex next month!" You were stunned. Today, Sam texts asking to grab lunch like nothing happened. How do you confront the betrayal of trust without losing control or letting it slide?',
  estimatedMinutes: 18,
  difficulty: 'Intermediate',
  timeSetting: 'Monday Morning, 10:30 AM',
  location: 'City Green Pergola & Messaging Exchange',
  tags: ['Trust', 'Confidentiality', 'Repairing Relationships', 'Boundaries', 'Accountability'],
  initialScenarioId: 'scene-monday-text',

  suspects: {
    'person-sam': {
      id: 'person-sam',
      name: 'Sam Delgado',
      role: 'Close College Friend & Freelance Copywriter',
      age: 28,
      initialDemeanor: 'Gregarious, loose-lipped, emotionally warm, resistant to taking blame.',
      motive: 'Craves being the center of lively conversation and sharing "insider scoop" to feel interesting.',
      opportunity: 'Was told the sensitive job interview details under explicit promise of secrecy.',
      alibi: 'Claims it was an obvious joke that nobody at the table took seriously.',
      weakness: 'Minimizes other people’s vulnerability by branding serious mistakes as "accidents."',
      associatedClueIds: ['clue-dinner-slip', 'clue-sam-pattern'],
      interrogationSummary:
        'Sam insists: "Come on, it was just banter with Marcus and Nora! Nobody is running to your boss. You’re overthinking this."',
    },
    'person-nora': {
      id: 'person-nora',
      name: 'Nora Hayes',
      role: 'Dinner Guest & Colleague with Ties to Apex Management',
      age: 30,
      initialDemeanor: 'Discreet, observant, professional.',
      motive: 'Heard the comment and immediately understood the professional danger it posed to you.',
      opportunity: 'Sat directly across from Sam when the comment was dropped.',
      alibi: 'Did not repeat the slip to anyone, but texted you afterwards to check in.',
      weakness: 'Values workplace discretion and was visibly shocked by Sam’s carelessness.',
      associatedClueIds: ['clue-nora-text'],
      interrogationSummary:
        'Nora texted: "Hey, I don’t know what Sam was talking about, but if you’re looking to move, be careful who you tell. People talk."',
    },
  },

  clues: {
    'clue-dinner-slip': {
      id: 'clue-dinner-slip',
      title: 'The Table Incident Recall',
      category: 'testimony',
      shortDescription: 'The exact moment Sam dropped your confidential job hunt into public conversation.',
      detailedAnalysis:
        'The dinner table went momentarily silent after Sam’s quip. Nora raised an eyebrow, and you felt an icy wave of panic. Sam chuckled and moved on to ordering dessert, seemingly oblivious.',
      locationFound: 'Sunday Dinner Recall',
      tags: ['Slip of the Tongue', 'Exposure', 'Workplace Risk'],
    },
    'clue-sam-pattern': {
      id: 'clue-sam-pattern',
      title: 'Prior History of Conversational Leakage',
      category: 'document',
      shortDescription: 'Two previous occasions where Sam shared private friend details as storytelling fodder.',
      detailedAnalysis:
        'You remember Sam sharing David’s medical diagnosis at a birthday party last year, framing it as "showing concern." Sam treats private information as social currency without intending active harm.',
      locationFound: 'Personal Reflection Memory',
      tags: ['Behavioral Pattern', 'Social Currency', 'Indiscretion'],
    },
    'clue-nora-text': {
      id: 'clue-nora-text',
      title: 'Nora’s Follow-up Warning',
      category: 'digital',
      shortDescription: 'Direct proof that the table registered the secret and recognized the professional risk.',
      detailedAnalysis:
        'Nora’s late-night message confirms that Sam’s remark was not interpreted as a harmless joke, but as a genuine disclosure that could jeopardize your employment.',
      locationFound: 'SMS Log',
      tags: ['External Impact', 'Objective Evidence', 'Risk'],
    },
  },

  connections: [
    {
      id: 'conn-social-currency-vs-malice',
      clueA: 'clue-sam-pattern',
      clueB: 'clue-nora-text',
      deductionTitle: 'Chronic Carelessness as Social Currency',
      deductionText:
        'Sam does not harbor malice toward you, but chronically trades others’ confidential lives for conversational warmth and drama, making Sam structurally unsafe for delicate secrets.',
      unlockedFlag: 'flag_identified_social_currency',
    },
  ],

  hypotheses: {
    'hyp-recalibrate-trust': {
      id: 'hyp-recalibrate-trust',
      title: 'Establish Direct Accountability and Downgrade Information Clearance',
      accusedSuspectId: 'person-sam',
      motiveSummary: 'Sam blabs to be entertaining and refuses to acknowledge the real-world harm caused.',
      methodSummary: 'Demonstrate the impact with Nora’s text, demand genuine ownership, and establish firm conversational boundaries.',
      requiredClueIds: ['clue-dinner-slip', 'clue-nora-text'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-firm-guardrails',
      failureEndingId: 'ending-gaslit-acquiescence',
    },
  },

  scenarios: {
    'scene-monday-text': {
      id: 'scene-monday-text',
      title: 'The Casual Invitation',
      location: 'Your Workstation, 10:30 AM',
      narrative: [
        'Your phone buzzes on the desk beside your keyboard. It’s a message from Sam: "Hey! Thinking about that spicy Thai place for lunch today. You free around 12:30?"',
        'There is no mention of last night. No "Hey, I realized what I said," no apology, no acknowledgment of the fact that your job security was put on the line for a cheap laugh.',
        'You look at Nora’s warning message from midnight still sitting in your notification tray. The knot in your stomach has not dissolved.',
      ],
      dialogue: [
        {
          speaker: 'Sam (Text)',
          text: 'Craving pad see ew! Let me know if you can break away from the grind 🍜',
          mood: 'calm',
        },
      ],
      cluesDiscovered: ['clue-dinner-slip', 'clue-nora-text'],
      choices: [
        {
          id: 'choice-meet-in-person-confront',
          text: '"Yes, let’s get lunch. We need to talk about what you said at dinner last night."',
          destinationId: 'scene-lunch-confrontation',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'assertiveness', value: 2 },
            { type: 'setFlag', target: 'flag_arranged_in_person_talk', value: true },
          ],
        },
        {
          id: 'choice-text-confront-immediate',
          text: '"I can’t do lunch, Sam. What you blurted out about my job search in front of Nora was reckless and unacceptable."',
          destinationId: 'scene-text-defensive-spiral',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'assertiveness', value: 1 },
            { type: 'setFlag', target: 'flag_confronted_via_text', value: true },
          ],
        },
        {
          id: 'choice-swallow-and-attend',
          text: '"Sounds great! See you at 12:30!" hoping the tension will naturally dissipate.',
          destinationId: 'scene-swallowed-betrayal',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'self_respect', value: 2 },
            { type: 'setFlag', target: 'flag_swallowed_secret_breach', value: true },
          ],
        },
      ],
    },

    'scene-lunch-confrontation': {
      id: 'scene-lunch-confrontation',
      title: 'Face-to-Face Accountability',
      location: 'Thai Pavilion Corner Booth',
      narrative: [
        'You sit across from Sam as the steam rises from two noodle bowls. Sam begins talking about a new copywriting client, animated and enthusiastic.',
        'You wait for a pause, then lean in: "Sam, I need you to listen to me. When I told you I was interviewing at Zenith, I explicitly asked you to keep it between us. Last night you joked about it in front of Nora, whose brother works in my department."',
        'Sam’s smile stiffens. The defense mechanism fires instantly: "Whoa, okay! It was an offhand quip! Nora wasn’t taking notes! You know I’d never deliberately hurt you."',
      ],
      dialogue: [
        {
          speaker: 'Sam',
          text: 'You’re making me sound like a monster. I made a joke! Why are you coming at me like this?',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-sam-pattern'],
      choices: [
        {
          id: 'choice-show-nora-impact',
          text: '"I’m not calling you a monster, Sam. But look at this text Nora sent me at midnight. This wasn’t an invisible joke; it put my career in jeopardy. I need you to hear the impact, not defend your intent."',
          destinationId: 'scene-sam-reckoning',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'emotional_clarity', value: 2 },
            { type: 'setFlag', target: 'flag_evidence_shared_calmly', value: true },
          ],
        },
        {
          id: 'choice-explode-in-restaurant',
          text: '"You always do this! You have zero loyalty and you gossip about everyone to make yourself look important!"',
          destinationId: 'scene-toxic-shouting',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'emotional_clarity', value: 2 },
            { type: 'setFlag', target: 'flag_attacked_character_wholly', value: true },
          ],
        },
        {
          id: 'choice-accept-half-apology',
          text: '"Just promise me you won’t do it again," letting Sam off without actually reaching an understanding.',
          destinationId: 'scene-superficial-truce',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'setFlag', target: 'flag_soft_compromise', value: true },
          ],
        },
      ],
    },

    'scene-sam-reckoning': {
      id: 'scene-sam-reckoning',
      title: 'The Shift from Defense to Empathy',
      location: 'Thai Pavilion Corner Booth',
      narrative: [
        'Seeing Nora’s message in black and white strips away Sam’s ability to treat the incident as paranoia. Sam stares at the screen, jaw slightly slacked.',
        '"Oh God," Sam whispers, running a hand through their hair. "I... I honestly thought Nora was half-asleep during that conversation. I didn’t know her brother was at Apex."',
        'For the first time, the performative charm drops away. Sam looks genuinely sickened by their own carelessness.',
      ],
      dialogue: [
        {
          speaker: 'Sam',
          text: 'I was just trying to be the funny one at the table. I wasn’t thinking. That’s not an excuse—it was totally reckless. I am so sorry.',
          mood: 'shaken',
        },
      ],
      choices: [
        {
          id: 'choice-redefine-guardrails',
          text: '"I accept your apology, Sam. But trust takes time to rebuild. I love our friendship, but I am not going to share delicate career or family matters with you until I see that discretion in action."',
          destinationId: 'scene-restructured-trust',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'boundary_success', value: 2 },
          ],
        },
        {
          id: 'choice-total-forgiveness-no-change',
          text: '"Don’t worry about it, we’re all human! Just water under the bridge!"',
          destinationId: 'scene-superficial-truce',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-text-defensive-spiral': {
      id: 'scene-text-defensive-spiral',
      title: 'The Blue Bubble Crossfire',
      location: 'Messaging App',
      narrative: [
        'Over text, tone is lost. Sam responds with three paragraphs: "Seriously? I’ve supported you through everything and you’re accusing me of betraying you over a dinner table joke?"',
        'Within twenty minutes, you are typing long defensive essays back and forth, both of you reading hostility into every lowercase syllable.',
      ],
      dialogue: [
        {
          speaker: 'Sam (Text)',
          text: 'If you think so little of my character, maybe you shouldn’t tell me anything at all.',
          mood: 'defiant',
        },
      ],
      choices: [
        {
          id: 'choice-call-time-out',
          text: '"This is getting toxic over text. Let’s stop typing and talk on the phone tonight at 7."',
          destinationId: 'scene-lunch-confrontation',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-block-and-sever',
          text: '"Fine. Consider this friendship done."',
          destinationId: 'scene-toxic-shouting',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-restructured-trust': {
      id: 'scene-restructured-trust',
      title: 'Trust Rebuilt on New Ground',
      location: 'Thai Pavilion Corner Booth',
      isEnding: true,
      endingId: 'ending-firm-guardrails',
      narrative: [
        'By clearly stating your boundary without attacking Sam’s worth as a person, you established a healthy precedent.',
        'Sam nods slowly, recognizing that real friendship requires respecting vulnerability. You didn’t discard a long history over a single mistake, but you didn’t pretend the breach didn’t happen either.',
      ],
      dialogue: [
        {
          speaker: 'Sam',
          text: 'I hear you. I won’t let you down again.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-swallowed-betrayal': {
      id: 'scene-swallowed-betrayal',
      title: 'The Cost of Fake Smiles',
      location: 'Thai Pavilion, 1:00 PM',
      isEnding: true,
      endingId: 'ending-gaslit-acquiescence',
      narrative: [
        'You sat through lunch smiling, nodding, and pretending everything was fine. Meanwhile, your stomach churned and your resentment metastasized.',
        'A week later, you learn Nora mentioned your job search to a colleague in HR. You face disciplinary inquiry at Apex, and when you look at Sam, all you feel is cold contempt that you never had the bravery to voice.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I protected Sam’s feelings at the expense of my own survival.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-toxic-shouting': {
      id: 'scene-toxic-shouting',
      title: 'The Scene in Public',
      location: 'Thai Pavilion',
      isEnding: true,
      endingId: 'ending-rash-severance',
      narrative: [
        'Heads turn as voices rise. What could have been a sharp, necessary boundary turned into an assassination of Sam’s character.',
        'Sam stands up, throws down a twenty-dollar bill, and walks out into the rain. The issue of your confidentiality was buried beneath the rubble of a screaming match.',
      ],
      dialogue: [
        {
          speaker: 'Sam',
          text: 'You’ve been waiting to unload all your resentment on me. We’re done.',
          mood: 'defiant',
        },
      ],
      choices: [],
    },

    'scene-superficial-truce': {
      id: 'scene-superficial-truce',
      title: 'The Unrepaired Crack',
      location: 'Outside the Restaurant',
      isEnding: true,
      endingId: 'ending-enabling-loop',
      narrative: [
        'You accepted a quick "sorry, won’t do it again" without digging into why Sam treats confidential stories as party currency.',
        'The friendship continues on the surface, but you find yourself constantly filtering your speech, unable to relax, knowing that Sam has never truly understood the weight of discretion.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'We are still friends, but the intimacy is gone.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-firm-guardrails': {
      id: 'ending-firm-guardrails',
      title: 'Restructured Trust: Clear Guardrails and Preserved Bond',
      tier: 'triumph',
      badge: 'MEASURED ACCOUNTABILITY',
      narrative: [
        'You held Sam directly accountable using tangible evidence, rejected the minimization of your risk, and accepted a genuine apology without foolishly restoring full clearance.',
        'Forgiveness does not mean instantaneous amnesia. True relational maturity means loving someone while being clear about what they are—and are not—safe to hold.',
      ],
      summary: 'You confronted the breach with composure, won genuine remorse, and recalibrated your informational boundaries.',
      criteriaReview: {
        theTruth:
          'Sam was careless out of a desperate desire for social attention, not malice. Seeing Nora’s text shattered Sam’s rationalization.',
        yourDeduction:
          'You understood that confronting someone requires showing the impact rather than debating their intentions.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Distinguished between malicious betrayal and reckless conversational bragging.',
          'Used external documentation (Nora’s text) to dissolve defensive denial.',
          'Maintained the friendship while establishing firm informational boundaries.',
        ],
        missedOpportunities: [
          'Could have established explicit secrecy ground rules before telling Sam the news initially.',
        ],
        reasoningCritique:
          'Exemplary boundary work. You avoided both passive surrender and vindictive character assassination, securing genuine contrition while protecting your future safety.',
      },
    },

    'ending-gaslit-acquiescence': {
      id: 'ending-gaslit-acquiescence',
      title: 'The Silent Surrender: Swallowing Harm to Keep Peace',
      tier: 'compromised',
      badge: 'COMPROMISED SELF-RESPECT',
      narrative: [
        'By staying silent and smiling through lunch, you signaled to Sam that your professional safety and personal boundaries are negotiable whenever Sam wants a laugh.',
        'When you don’t stand up for your own boundaries, you train people to treat you carelessly.',
      ],
      summary: 'Unspoken fear of confrontation exposed your career to ongoing workplace gossip.',
      criteriaReview: {
        theTruth:
          'Sam needed a firm wake-up call to recognize the boundary line. Your silence enabled the pattern to continue.',
        yourDeduction:
          'You falsely believed that swallowing your pain was an act of loyalty, when it was actually an act of self-abandonment.',
        accuracyRate: 30,
        keyDiscoveries: [
          'Learned that tolerating indiscretion invites greater catastrophe.',
        ],
        missedOpportunities: [
          'Failed to speak up at lunch or name the betrayal.',
        ],
        reasoningCritique:
          'Critical failure in self-advocacy. Sacrificing your reality to keep a friend comfortable creates a one-sided dynamic built on sand.',
      },
    },

    'ending-rash-severance': {
      id: 'ending-rash-severance',
      title: 'The Scorched Bridge: Nuclear Escalation',
      tier: 'partial',
      badge: 'PERMANENT SEVERANCE',
      narrative: [
        'You had every right to be furious, but by attacking Sam’s entire character and escalating the fight into a public showdown, you made reconciliation impossible.',
        'The breach was serious, but the manner of your response permanently burned down an eight-year friendship that might have been reformed with disciplined boundaries.',
      ],
      summary: 'Righteous fury escalated a repairable breach of discretion into a permanent, bitter breakup.',
      criteriaReview: {
        theTruth:
          'Sam made a major mistake, but genuinely loved you and would have owned it if confronted with focused, unhurried composure.',
        yourDeduction:
          'You treated a reckless friend as an enemy combatant, burning the entire bridge rather than setting up a checkpoint.',
        accuracyRate: 50,
        keyDiscoveries: [
          'Recognized the gravity of the confidentiality breach.',
        ],
        missedOpportunities: [
          'Allowed emotional flooding to derail the conversation.',
          'Did not give Sam a clear path to take accountability.',
        ],
        reasoningCritique:
          'Over-escalated execution. A boundary is a fence that protects you; a weaponized explosion leaves both people bleeding.',
      },
    },

    'ending-enabling-loop': {
      id: 'ending-enabling-loop',
      title: 'The Superficial Loop: Forgiving Without Guardrails',
      tier: 'partial',
      badge: 'UNLEARNED LESSON',
      narrative: [
        'You accepted a quick "sorry" and rushed to say "it’s fine!" before the gravity of the situation was truly processed. As a result, Sam felt zero lasting weight, and the pattern will inevitably recur.',
        'Forgiveness without boundaries is merely permission for the next offense.',
      ],
      summary: 'A premature truce avoided immediate awkwardness but left your confidential life vulnerable.',
      criteriaReview: {
        theTruth:
          'Sam needed to feel the consequence of losing your confidences in order to change their behavioral habits.',
        yourDeduction:
          'You confused quick harmony with deep resolution.',
        accuracyRate: 60,
        keyDiscoveries: [
          'Addressed the issue initially, but folded at the first sign of discomfort.',
        ],
        missedOpportunities: [
          'Did not restrict future information sharing.',
        ],
        reasoningCritique:
          'Incomplete boundary work. True restoration requires clear agreements on changed behavior, not just verbal apologies over noodles.',
      },
    },
  },
};

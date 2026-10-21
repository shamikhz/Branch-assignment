import { Episode } from '@/features/episodes/types';

export const relCommunicationOneSidedAnchorEpisode: Episode = {
  id: 'rel-communication-one-sided-anchor',
  version: '1.0.0',
  title: 'The One-Sided Anchor',
  subtitle: 'Confront emotional dumping, demand conversational reciprocity, and establish reciprocal equilibrium.',
  synopsis:
    'Your childhood friend Chloe calls like clockwork whenever her life is in crisis. For 80 minutes, you listen patiently as she recounts every microscopic drama with her boss, her romantic partners, and her landlord. But tonight, when she finally pauses and you mention that your father is in the hospital awaiting biopsy results, she replies: "Oh no, sending vibes! Hey, my Uber is here, gotta run to drinks, love you so much!" and hangs up. How do you confront chronic conversational exploitation?',
  estimatedMinutes: 18,
  difficulty: 'Intermediate',
  timeSetting: 'Thursday Evening, 8:45 PM',
  location: 'Your Kitchen over a Cold Mug of Tea',
  tags: ['Communication', 'Reciprocity', 'Emotional Dumping', 'Boundaries', 'Active Listening'],
  initialScenarioId: 'scene-abrupt-hangup',

  suspects: {
    'person-chloe-vent': {
      id: 'person-chloe-vent',
      name: 'Chloe Davenport',
      role: 'Childhood Friend of Ten Years & Marketing Coordinator',
      age: 28,
      initialDemeanor: 'High-energy, hyper-verbal, self-absorbed, oblivious to other people’s emotional capacity.',
      motive: 'Uses friends as free emotional exhaust pipes without realizing she never provides reciprocal care.',
      opportunity: 'Relies on childhood loyalty as a permanent pass for conversational neglect.',
      alibi: 'Genuinely believes she is a "great friend" because she calls frequently when stressed.',
      weakness: 'Deeply shocked when called out; perceives any boundary as an accusation of malice.',
      associatedClueIds: ['clue-call-duration-logs', 'clue-chloe-self-absorption'],
      interrogationSummary:
        'Chloe exclaims when challenged: "I tell you everything! I share my deepest vulnerabilities with you! How can you say I don’t value you when you’re the first person I call?"',
    },
    'person-marcus-roommate': {
      id: 'person-marcus-roommate',
      name: 'Marcus Bell',
      role: 'Your Roommate & Observant Sounding Board',
      age: 30,
      initialDemeanor: 'Grounded, empathetic, tired of watching you look physically drained after Chloe’s calls.',
      motive: 'Wants you to recognize that an emotional vampire is draining your life energy.',
      opportunity: 'Has watched you pace the kitchen for eighty minutes holding a phone to your ear.',
      alibi: 'Heard the entire conversation and watched your face drop when she hung up on your dad’s news.',
      weakness: 'Advocates for cutting people off immediately without giving them a chance to adjust.',
      associatedClueIds: ['clue-marcus-witness'],
      interrogationSummary:
        'Marcus observes: "You aren’t her friend. You’re an emotional trash can. She dumps her waste into you, feels twenty pounds lighter, and skips off to drinks while you sit in the dark."',
    },
  },

  clues: {
    'clue-call-duration-logs': {
      id: 'clue-call-duration-logs',
      title: 'Phone History Duration Analysis',
      category: 'digital',
      shortDescription: 'The last six calls from Chloe: all between 65 and 95 minutes, initiated exclusively during her crises.',
      detailedAnalysis:
        'The call log reveals six incoming calls over two months, always after 8 PM, averaging 78 minutes. Outgoing calls initiated by you to share good or bad news were either rejected with a quick "can’t talk rn!" text or never returned.',
      locationFound: 'Smartphone Call History',
      tags: ['Reciprocity Metric', 'One-Sidedness', 'Evidence'],
    },
    'clue-chloe-self-absorption': {
      id: 'clue-chloe-self-absorption',
      title: 'Conversational Monopolization Ratio',
      category: 'testimony',
      shortDescription: 'Chloe spoke for 76 of the 80 minutes tonight, only stopping to catch her breath.',
      detailedAnalysis:
        'A cognitive breakdown of the call shows Chloe asking zero questions about your life, work, or emotional state. The solitary question asked was "Are you still there?" when you fell silent for three minutes.',
      locationFound: 'Call Memory Recall',
      tags: ['Conversational Narcissism', 'Neglect', 'Imbalance'],
    },
    'clue-marcus-witness': {
      id: 'clue-marcus-witness',
      title: 'The Biopsy Dismissal Reality',
      category: 'testimony',
      shortDescription: 'Marcus witnessed the exact moment Chloe dismissed your father’s cancer biopsy.',
      detailedAnalysis:
        'Marcus heard you say: "My dad was admitted to oncology today for a needle biopsy." He heard Chloe’s five-second "sending vibes, my Uber is here!" and the instant click of the disconnect.',
      locationFound: 'Roommate Witness Statement',
      tags: ['Crucial Moment', 'Callousness', 'Threshold'],
    },
  },

  connections: [
    {
      id: 'conn-emotional-parasitism',
      clueA: 'clue-call-duration-logs',
      clueB: 'clue-chloe-self-absorption',
      deductionTitle: 'Chronic Emotional Dumping Without Investment',
      deductionText:
        'Chloe treats the relationship as a one-way emotional sewer. She values having an audience for her distress, not a mutual relationship between two equals.',
      unlockedFlag: 'flag_unmasked_emotional_dumping',
    },
  ],

  hypotheses: {
    'hyp-recalibrate-reciprocity': {
      id: 'hyp-recalibrate-reciprocity',
      title: 'Confront the Imbalance Directly and Enforce Strict Reciprocity Guardrails',
      accusedSuspectId: 'person-chloe-vent',
      motiveSummary: 'Chloe is completely blind to her conversational narcissism due to unexamined habits.',
      methodSummary: 'Name the biopsy dismissal explicitly, demand reciprocal listening, and refuse any future 80-minute monologue venting sessions.',
      requiredClueIds: ['clue-call-duration-logs', 'clue-chloe-self-absorption', 'clue-marcus-witness'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-reciprocal-equilibrium',
      failureEndingId: 'ending-bitter-doormat-exhaustion',
    },
  },

  scenarios: {
    'scene-abrupt-hangup': {
      id: 'scene-abrupt-hangup',
      title: 'The Dial Tone at 8:45 PM',
      location: 'Apartment Kitchen Counter',
      narrative: [
        'The screen clicks black. The room falls into deafening silence. Your tea, poured seventy-five minutes ago when Chloe began recounting her argument with her landlord, is cold with a pale skin on top.',
        'Your hand trembles slightly holding the glass. You had spent eighty minutes offering validation, advice, and calm breathing. And when you finally gathered the courage to say, "My dad was admitted to oncology today," she gave you five words: "Sending vibes, my Uber is here!"',
        'Marcus steps into the kitchen from the hallway, leaning against the doorframe with crossed arms. He witnessed the entire exchange.',
      ],
      dialogue: [
        {
          speaker: 'Marcus',
          text: 'Did she just hang up on you after you told her your dad is in the hospital?',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-call-duration-logs', 'clue-marcus-witness'],
      choices: [
        {
          id: 'choice-call-back-immediate-boundary',
          text: 'Call her back right now or send a direct text: "Chloe, you just hung up on me after I told you my father is in oncology. We need to talk about what just happened."',
          destinationId: 'scene-the-confrontation-call',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'assertiveness', value: 2 },
            { type: 'setFlag', target: 'flag_called_out_biopsy_hangup', value: true },
          ],
        },
        {
          id: 'choice-swallow-and-internalize',
          text: 'Shake your head and pour the cold tea into the sink: "It’s fine... she was in a rush. She has a lot on her plate."',
          destinationId: 'scene-internalized-doormat',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'self_worth', value: 3 },
            { type: 'setFlag', target: 'flag_rationalized_chloe_neglect', value: true },
          ],
        },
        {
          id: 'choice-passive-aggressive-social-blast',
          text: 'Post an angry vague tweet: "Love when people use you as their therapist for an hour and don’t give a damn about your real life."',
          destinationId: 'scene-social-media-retaliation',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'emotional_maturity', value: 2 },
            { type: 'setFlag', target: 'flag_vagueposted_resentment', value: true },
          ],
        },
      ],
    },

    'scene-the-confrontation-call': {
      id: 'scene-the-confrontation-call',
      title: 'The Shock of the Mirror',
      location: 'Living Room, Next Day at Noon',
      narrative: [
        'You texted Chloe that night: "Do not call me with another crisis until we speak about how this relationship works." At noon the next day, Chloe calls. Her voice is defensive, nervous, and slightly aggrieved.',
        '"I saw your text," she begins. "I was running late to meet Sarah and Liam! You know how insane my week has been! Why are you turning me getting into an Uber into a federal crime?"',
        'You have the full picture in front of you: six months of 80-minute phone monologues, zero inquiries into your life, and an immediate dismissal of your family cancer scare.',
      ],
      dialogue: [
        {
          speaker: 'Chloe',
          text: 'I’ve been your best friend since tenth grade. How can you attack me like this?',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-chloe-self-absorption'],
      choices: [
        {
          id: 'choice-deliver-calm-objective-audit',
          text: '"Chloe, for the last six calls, you spoke for 90% of the time about your crises. I have listened with love. But last night I told you my father is being tested for cancer, and you dismissed it in five seconds to go to drinks. That is not friendship; that is emotional dumping. I cannot be in a one-way relationship anymore."',
          destinationId: 'scene-chloe-reckoning',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'relational_clarity', value: 2 },
            { type: 'setFlag', target: 'flag_objective_audit_delivered', value: true },
          ],
        },
        {
          id: 'choice-scream-in-fury',
          text: '"You are the most selfish, narcissistic person I have ever met in my life! You don’t care about anyone except yourself!"',
          destinationId: 'scene-scorched-breakup',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'relational_clarity', value: 2 },
            { type: 'setFlag', target: 'flag_screamed_insults', value: true },
          ],
        },
      ],
    },

    'scene-chloe-reckoning': {
      id: 'scene-chloe-reckoning',
      title: 'The Uncomfortable Awakening',
      location: 'Phone Call, 12:15 PM',
      narrative: [
        'Your calm, unflinching description of the facts pierces through her defensive armor. The word "cancer" echoes in the receiver.',
        'Silence hangs on the line for ten agonizing seconds. When Chloe speaks again, the theatrical self-righteousness is completely gone. She sounds like a stunned child.',
        '"I... I didn’t hear you say cancer," she whispers, her breath catching. "I was looking for my purse and looking at the app, and I only half-heard you say hospital. Oh my God. I am so horrible. Is your dad okay? Please tell me about your dad."',
      ],
      dialogue: [
        {
          speaker: 'Chloe',
          text: 'I honestly didn’t realize I was doing this. I get so wrapped up in my own panic that I stop seeing other people. Please don’t shut me out.',
          mood: 'shaken',
        },
      ],
      choices: [
        {
          id: 'choice-establish-reciprocity-contract',
          text: '"I want us to stay friends, Chloe. But here is the new reality: no more 80-minute monologue venting calls. If you call, we check in on both our lives. And if you’re overwhelmed, you ask if I have the capacity to listen before you unload. Can you commit to that?"',
          destinationId: 'scene-reciprocal-reset',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'healthy_boundaries', value: 2 },
            { type: 'setFlag', target: 'flag_new_conversational_contract', value: true },
          ],
        },
        {
          id: 'choice-decide-to-step-back-permanently',
          text: '"I appreciate the apology, Chloe. But I need space right now to focus on my family. I am stepping back from this friendship for the foreseeable future."',
          destinationId: 'scene-graceful-step-back',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'setFlag', target: 'flag_stepped_back_gracefully', value: true },
          ],
        },
      ],
    },

    'scene-reciprocal-reset': {
      id: 'scene-reciprocal-reset',
      title: 'The Rebalanced Scale',
      location: 'Hospital Waiting Room, Three Weeks Later',
      isEnding: true,
      endingId: 'ending-reciprocal-equilibrium',
      narrative: [
        'Three weeks later, your phone buzzes while you are sitting in the hospital lobby. It is Chloe. But this time, it’s not an unannounced 80-minute emergency monologue.',
        'It’s a text: "Thinking of you and your dad today during his biopsy follow-up. How did the consultation go? No need to call back if you’re exhausted—just sending real love."',
        'By setting a fearless boundary and refusing to play the silent therapist, you transformed a parasitic dynamic into a mutual, respectful friendship.',
      ],
      dialogue: [
        {
          speaker: 'Chloe (Text)',
          text: 'I made a pot of soup and left it in a cooler on your porch. You’ve taken care of me for years; let me take care of you for once.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-graceful-step-back': {
      id: 'scene-graceful-step-back',
      title: 'The Clean Unburdening',
      location: 'Kitchen Island, Evening',
      isEnding: true,
      endingId: 'ending-dignified-disengagement',
      narrative: [
        'You chose not to invest months into retraining an adult how to care about you. You stepped back with grace, clarity, and zero malice.',
        'With the constant 80-minute emotional exhaust pipe gone, your evenings felt peaceful and spacious. You directed your emotional energy where it mattered: toward your father’s recovery and friendships that give back.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I didn’t hate her. I just finally decided to love myself enough to walk away from one-way caretaking.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-internalized-doormat': {
      id: 'scene-internalized-doormat',
      title: 'The Exhausted Hollow',
      location: 'Hospital Room, Two Months Later',
      isEnding: true,
      endingId: 'ending-bitter-doormat-exhaustion',
      narrative: [
        'You stayed silent. You swallowed your pain. Two weeks later, Chloe called to spend 70 minutes complaining about a colleague who talked over her in a meeting.',
        'You sat in your father’s hospital room listening to her, feeling like an empty vessel whose own heart was completely invisible to everyone around you.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I volunteered to be invisible, and she accepted the offer.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-social-media-retaliation': {
      id: 'scene-social-media-retaliation',
      title: 'The Toxic Subtweet',
      location: 'Twitter/Instagram Timeline',
      isEnding: true,
      endingId: 'ending-scorched-alienation',
      narrative: [
        'By venting passively on social media instead of speaking directly, you ignited a petty online war. Mutual friends took sides, Chloe was humiliated and furious, and your real grief over your father was overshadowed by petty internet drama.',
      ],
      dialogue: [
        {
          speaker: 'Chloe (Text)',
          text: 'Subtweeting me in front of everyone? We’re done.',
          mood: 'defiant',
        },
      ],
      choices: [],
    },

    'scene-scorched-breakup': {
      id: 'scene-scorched-breakup',
      title: 'The Nuclear Blast',
      location: 'Living Room',
      isEnding: true,
      endingId: 'ending-scorched-alienation',
      narrative: [
        'Calling her a narcissistic parasite turned a legitimate boundary conversation into an abusive character assassination. Chloe slammed down the phone and blocked you everywhere.',
        'You got your anger out, but you lost a decade-long friendship in a cloud of radioactive smoke rather than with clean dignity.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I had the moral high ground, and I threw it into the mud.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-reciprocal-equilibrium': {
      id: 'ending-reciprocal-equilibrium',
      title: 'Reciprocal Equilibrium: The Reclaimed Friendship',
      tier: 'triumph',
      badge: 'MUTUAL RECIPROCITY',
      narrative: [
        'You refused to continue acting as an unpaid emotional disposal unit, and you held up a clear, undeniable mirror to a friend who had lost touch with mutual care.',
        'By confronting Chloe with objective facts rather than insult, you jolted her out of her self-absorption and gave her the chance to become a real friend. You reclaimed both your dignity and a restructured, reciprocal partnership.',
      ],
      summary: 'You confronted chronic emotional dumping with unflinching composure, establishing true conversational reciprocity and mutual care.',
      criteriaReview: {
        theTruth:
          'Chloe had slipped into chronic conversational narcissism because nobody had ever set a firm, calm boundary with her. Hearing the objective reality woke her up.',
        yourDeduction:
          'You understood that true friendship requires equal emotional airtime, and that tolerating one-sided venting is not love—it is enabling.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized the difference between mutual vulnerability and one-sided emotional dumping.',
          'Used specific objective facts (call duration, the cancer dismissal) to prevent defensive derailment.',
          'Created operational rules: asking for capacity before venting, and checking in on both lives.',
        ],
        missedOpportunities: [
          'Could have spoken up about the conversational imbalance months earlier before the crisis hit.',
        ],
        reasoningCritique:
          'Masterful relational boundary work. You saved an old friendship by demanding that it grow up, transforming exploitation into mutual support.',
      },
    },

    'ending-dignified-disengagement': {
      id: 'ending-dignified-disengagement',
      title: 'Dignified Disengagement: Reclaiming Your Life Energy',
      tier: 'partial',
      badge: 'HEALTHY DETACHMENT',
      narrative: [
        'You recognized that not every one-sided relationship can or should be reformed. In the midst of family medical distress, you chose to direct your precious emotional reserves where they were returned.',
        'Walking away from someone who only calls to take from you is not cruelty; it is the fundamental duty of personal stewardship.',
      ],
      summary: 'You stepped back from a chronic taker with quiet grace, protecting your energy for what truly mattered.',
      criteriaReview: {
        theTruth:
          'Chloe’s self-absorption was deeply ingrained. Stepping back protected you from ongoing emotional depletion.',
        yourDeduction:
          'You realized that you did not owe anyone lifelong emotional servitude simply because you shared childhood memories.',
        accuracyRate: 85,
        keyDiscoveries: [
          'Recognized that childhood longevity does not grant a license for emotional exploitation.',
          'Preserved your mental bandwidth for your father’s medical battle.',
        ],
        missedOpportunities: [
          'Did not test if Chloe could adapt to the new boundary, choosing clean exit instead.',
        ],
        reasoningCritique:
          'High self-respect and practical wisdom. Recognizing when you do not have the surplus energy to rehabilitate a friend is a vital life skill.',
      },
    },

    'ending-bitter-doormat-exhaustion': {
      id: 'ending-bitter-doormat-exhaustion',
      title: 'The Silent Reservoir: The Doormat’s Tragedy',
      tier: 'compromised',
      badge: 'EMOTIONAL DEPLETION',
      narrative: [
        'You swallowed the dismissal of your father’s biopsy and continued to play the loyal, silent listener. In doing so, you signaled that your pain, your life, and your family are meaningless compared to her trivial drama.',
        'When you refuse to set a boundary, you sentence yourself to living as an auxiliary character in someone else’s movie.',
      ],
      summary: 'You remained silent, continuing to serve as an emotional sponge while starving your own soul.',
      criteriaReview: {
        theTruth:
          'Chloe will never change on her own; people do not relinquish free emotional labor unless forced to by a firm boundary.',
        yourDeduction:
          'You mistook self-effacing passivity for saintly devotion, breeding bitter, silent self-loathing.',
        accuracyRate: 20,
        keyDiscoveries: [
          'Learned that silent martyrs are never rewarded—only used further.',
        ],
        missedOpportunities: [
          'Failed to speak up at every single decision node.',
        ],
        reasoningCritique:
          'Severe failure of self-advocacy. Surrendering your right to be heard during a family medical emergency is the ultimate act of self-abandonment.',
      },
    },

    'ending-scorched-alienation': {
      id: 'ending-scorched-alienation',
      title: 'The Scorched Explosion: Righteous Fury, Lost Poise',
      tier: 'partial',
      badge: 'VOLATILE RUPTURE',
      narrative: [
        'You let accumulated resentment sit in your chest for months until it exploded into character assassination and public subtweets.',
        'You were 100% right about the grievance, but your uncontrolled hostility allowed Chloe to play the victim and dismiss your real pain as irrational malice.',
      ],
      summary: 'Uncalibrated rage and public shaming turned a legitimate boundary into a radioactive brawl.',
      criteriaReview: {
        theTruth:
          'Chloe was thoughtless and self-absorbed, not an intentional monster. Measured confrontation would have held her feet to the fire far more effectively than screaming.',
        yourDeduction:
          'You allowed repressed fury to turn you into an aggressor, destroying your moral authority.',
        accuracyRate: 45,
        keyDiscoveries: [
          'Learned that public passive-aggression always backfires on the host.',
        ],
        missedOpportunities: [
          'Failed to communicate boundaries calmly before the boiling point was reached.',
        ],
        reasoningCritique:
          'Weak emotional regulation. When anger takes the steering wheel, justice is forgotten and destruction becomes the only outcome.',
      },
    },
  },
};

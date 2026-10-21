import { Episode } from '@/features/episodes/types';

export const relBoundariesGroupProjectEpisode: Episode = {
  id: 'rel-boundaries-group-project',
  version: '1.0.0',
  title: 'The Vanishing Contributor',
  subtitle: 'Triage team project equity, balance compassion with rigorous accountability, and handle sudden crisis.',
  synopsis:
    'With 48 hours until your final master’s capstone submission worth 40% of your grade, your group member Mateo has completely vanished. He hasn’t pushed code to GitHub, hasn’t updated his research slides, and hasn’t responded to six Slack tags. Your third teammate Sarah is furious, demanding that you immediately email the faculty director to have Mateo failed and removed from the project title page. How do you balance team fairness, investigate the silence, and protect your grade without resorting to cruel haste?',
  estimatedMinutes: 20,
  difficulty: 'Advanced',
  timeSetting: 'Wednesday Morning, 9:00 AM (48 Hours to Deadline)',
  location: 'Campus Design Lab & Collaborative Workspace',
  tags: ['Teamwork', 'Accountability', 'Empathy', 'Crisis Triage', 'Group Dynamics'],
  initialScenarioId: 'scene-forty-eight-hours',

  suspects: {
    'person-mateo': {
      id: 'person-mateo',
      name: 'Mateo Morales',
      role: 'Capstone Teammate & Lead System Architecture Contributor',
      age: 26,
      initialDemeanor: 'Ordinarily brilliant, reliable, but currently completely silent and off the grid.',
      motive: 'Struggling with a catastrophic family medical emergency that left him overwhelmed and paralyzed.',
      opportunity: 'Was assigned the core integration module due on Friday.',
      alibi: 'His younger sister was rushed to intensive care after a severe car crash three days ago.',
      weakness: 'Freezes under severe panic and fails to send even a simple 10-second warning text.',
      associatedClueIds: ['clue-commit-history', 'clue-mateo-emergency'],
      interrogationSummary:
        'Mateo explains in a trembling voice when reached: "My sister was in ICU. My phone broke at the hospital and I couldn’t access Slack. I haven’t slept in seventy hours. I know I let you down."',
    },
    'person-sarah': {
      id: 'person-sarah',
      name: 'Sarah Chen',
      role: 'Capstone Teammate & High-Achieving Project Lead',
      age: 25,
      initialDemeanor: 'Punctual, intense, high-strung, terrified of losing her top GPA ranking.',
      motive: 'Wants to protect her academic distinction and punish what she perceives as laziness or freeloading.',
      opportunity: 'Has a drafted escalation email ready to send to Professor Vance right now.',
      alibi: 'Completed all her assigned deliverables 48 hours ahead of schedule.',
      weakness: 'Assumes worst-case malice and negligence whenever anyone falls behind.',
      associatedClueIds: ['clue-sarah-draft-email'],
      interrogationSummary:
        'Sarah argues: "We are adults entering the industry! If you have an emergency, you send an email. You don’t ghost your team for five days while other people do your work!"',
    },
  },

  clues: {
    'clue-commit-history': {
      id: 'clue-commit-history',
      title: 'GitHub Repository Analytics',
      category: 'digital',
      shortDescription: 'Mateo’s commits stopped abruptly on Saturday at 2:14 AM.',
      detailedAnalysis:
        'Until Saturday 2 AM, Mateo was the most prolific contributor on the repository, authoring 60% of the foundational architecture code. This is not the profile of a chronic slacker, but someone hit by a sudden, acute shock.',
      locationFound: 'GitHub Project Telemetry',
      tags: ['Track Record', 'Baseline Performance', 'Anomalous Drop'],
    },
    'clue-mateo-emergency': {
      id: 'clue-mateo-emergency',
      title: 'Emergency Contact Check',
      category: 'testimony',
      shortDescription: 'A mutual classmate confirms Mateo was seen at St. Jude’s Hospital ICU on Sunday.',
      detailedAnalysis:
        'Calling Mateo’s studio locker neighbor reveals that Mateo’s family suffered a traumatic car accident over the weekend. He was not slacking off; he was sitting outside a trauma surgery room.',
      locationFound: 'Campus Network Inquiries',
      tags: ['Crisis Context', 'Compassion', 'Reality'],
    },
    'clue-sarah-draft-email': {
      id: 'clue-sarah-draft-email',
      title: 'Sarah’s Pre-Written Escalation to Faculty',
      category: 'document',
      shortDescription: 'Formal request to have Mateo expelled from the project and awarded a zero grade.',
      detailedAnalysis:
        'If sent immediately without context, this formal notice initiates a departmental honor code review that would revoke Mateo’s international student visa and ruin his academic career.',
      locationFound: 'Sarah’s Open Laptop Screen',
      tags: ['High Stakes', 'Disproportionate Punishment', 'Legal/Academic Impact'],
    },
  },

  connections: [
    {
      id: 'conn-anomalous-trauma-vs-slacking',
      clueA: 'clue-commit-history',
      clueB: 'clue-mateo-emergency',
      deductionTitle: 'Acute Catastrophe, Not Malicious Freeloading',
      deductionText:
        'Mateo’s silence is caused by severe acute family trauma, not academic parasitism. Reporting him for disciplinary expulsion would inflict catastrophic harm on an already devastated peer.',
      unlockedFlag: 'flag_identified_acute_trauma',
    },
  ],

  hypotheses: {
    'hyp-compassionate-triage': {
      id: 'hyp-compassionate-triage',
      title: 'Execute Collaborative Triage with Faculty Extension and Fair Credit Proration',
      accusedSuspectId: 'person-mateo',
      motiveSummary: 'Mateo is incapacitated by family tragedy, while Sarah is blinded by academic perfectionism.',
      methodSummary: 'Restrain Sarah’s nuclear email, reach Mateo directly, request a legitimate 72-hour family emergency extension from Professor Vance, and redistribute remaining slides fairly.',
      requiredClueIds: ['clue-commit-history', 'clue-mateo-emergency', 'clue-sarah-draft-email'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-compassionate-triage',
      failureEndingId: 'ending-nuclear-team-destruction',
    },
  },

  scenarios: {
    'scene-forty-eight-hours': {
      id: 'scene-forty-eight-hours',
      title: 'The Ticking Clock',
      location: 'Design Lab Workstation 4, Wednesday 9:00 AM',
      narrative: [
        'The fluorescent lights hum above the workbench. The digital countdown on your laptop screen reads: "47 HOURS, 58 MINUTES UNTIL SUBMISSION."',
        'Mateo’s chair is empty. His section of the final system integration—the critical bridge connecting the frontend interface to the data pipeline—is an uncompiled skeleton.',
        'Sarah slams her palm onto the laminate desk. She turns her laptop toward you. On the screen is a formal email addressed to Professor Vance: "Request for Immediate Removal of Non-Contributing Teammate Mateo Morales."',
      ],
      dialogue: [
        {
          speaker: 'Sarah',
          text: 'I’m hitting send. He ghosted us. I am not letting his laziness pull my grade down from a First to a 2:2. Are you with me?',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-commit-history', 'clue-sarah-draft-email'],
      choices: [
        {
          id: 'choice-investigate-first-pause-email',
          text: '"Hold on, Sarah. Mateo wrote 60% of our codebase until Saturday morning. Something catastrophic happened. Give me two hours to track him down before we blow up his academic life."',
          destinationId: 'scene-tracking-mateo',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'fairness_score', value: 2 },
            { type: 'setFlag', target: 'flag_paused_nuclear_email', value: true },
          ],
        },
        {
          id: 'choice-endorse-nuclear-email',
          text: '"You’re right. We have to look out for ourselves. Hit send and let the professor deal with him."',
          destinationId: 'scene-the-nuclear-report',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'fairness_score', value: 3 },
            { type: 'setFlag', target: 'flag_endorsed_expulsion_email', value: true },
          ],
        },
        {
          id: 'choice-martyr-cover-up',
          text: '"Don’t email the professor, but don’t call Mateo either. You and I will just pull two all-nighters, do his entire job, and give him full credit."',
          destinationId: 'scene-all-nighter-collapse',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'fairness_score', value: 2 },
            { type: 'setFlag', target: 'flag_martyr_all_nighter', value: true },
          ],
        },
      ],
    },

    'scene-tracking-mateo': {
      id: 'scene-tracking-mateo',
      title: 'The Truth at St. Jude’s',
      location: 'Campus Courtyard over Phone',
      narrative: [
        'You pull up Mateo’s student directory and call his project lab partner from last semester, Leo. Within three minutes, the truth comes out.',
        '"Mateo is at St. Jude’s Hospital," Leo says, his voice subdued. "His sixteen-year-old sister was in a head-on collision on Saturday. She was in surgery for eleven hours. He’s been sleeping in the intensive care waiting room."',
        'You walk back into the lab. Sarah is pacing by the whiteboard, finger poised over the trackpad. The drafted email glows on her screen.',
      ],
      dialogue: [
        {
          speaker: 'Sarah',
          text: 'Well? Did he pick up? Or is he sleeping off a party?',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-mateo-emergency'],
      choices: [
        {
          id: 'choice-present-reality-propose-extension',
          text: '"His sixteen-year-old sister is in ICU after a car accident on Saturday. Delete the email, Sarah. Here is what we do: we email Vance together, request the standard 72-hour family emergency extension, and triage the remaining deliverables between us."',
          destinationId: 'scene-compassionate-triage-meeting',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'leadership_presence', value: 2 },
            { type: 'setFlag', target: 'flag_revealed_hospital_truth', value: true },
          ],
        },
        {
          id: 'choice-scold-sarah-callously',
          text: '"You are heartless, Sarah. His sister is dying and all you care about is your stupid GPA."',
          destinationId: 'scene-team-infighting',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'leadership_presence', value: 2 },
          ],
        },
      ],
    },

    'scene-compassionate-triage-meeting': {
      id: 'scene-compassionate-triage-meeting',
      title: 'Leadership in the Breach',
      location: 'Professor Vance’s Office, Wednesday 11:30 AM',
      narrative: [
        'Hearing the word "ICU" shatters Sarah’s defensive aggression. Her face goes ash-white. She closes her laptop slowly, visibly horrified by what she almost sent.',
        'At 11:30 AM, you and Sarah meet with Professor Vance. You present Mateo’s existing contributions (the 60% codebase), explain the sudden medical crisis with medical intake documentation secured through Leo, and outline a realistic 72-hour contingency sprint.',
        'Professor Vance grants the extension immediately: "This is what real engineering teams do in crisis. You don’t abandon teammates in tragedy, but you also don’t leave work undone."',
      ],
      dialogue: [
        {
          speaker: 'Professor Vance',
          text: 'Extension granted through Monday 9:00 AM. Submit your revised sprint plan by 4 PM today.',
          mood: 'calm',
        },
      ],
      choices: [
        {
          id: 'choice-reach-mateo-with-care',
          text: 'Send Mateo a warm, reassuring text: "Mateo, we spoke to Vance. The extension is granted. Focus on your sister. We have the architecture covered."',
          destinationId: 'scene-triumphant-completion',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'integrity_score', value: 2 },
            { type: 'setFlag', target: 'flag_reached_mateo_with_reassurance', value: true },
          ],
        },
      ],
    },

    'scene-triumphant-completion': {
      id: 'scene-triumphant-completion',
      title: 'The Final Build',
      location: 'Design Lab, Sunday Evening',
      isEnding: true,
      endingId: 'ending-compassionate-triage',
      narrative: [
        'By Sunday evening, the system is compiling without errors. Sarah handled the data integration; you finished the interface modules. Mateo’s sister stabilized and was moved out of intensive care on Saturday.',
        'Mateo logged on remotely from a hospital laptop on Sunday afternoon, fixing three subtle memory leaks in his earlier code and writing the technical documentation.',
        'On Monday morning, the capstone was submitted. It received a First Class mark with departmental honors. More importantly, nobody’s soul was sacrificed for a grade.',
      ],
      dialogue: [
        {
          speaker: 'Mateo (Voice Note)',
          text: 'I will never forget what you two did for me this week. You saved my degree and gave me the space to be with my sister. Thank you.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-the-nuclear-report': {
      id: 'scene-the-nuclear-report',
      title: 'The Disciplinary Fallout',
      location: 'Departmental Hearing Room, Friday',
      isEnding: true,
      endingId: 'ending-nuclear-team-destruction',
      narrative: [
        'Sarah sent the email. Professor Vance opened an official academic misconduct investigation against Mateo for team abandonment.',
        'When Mateo emerged from the ICU on Friday to find out his visa status was under review and his degree was in jeopardy, his family was devastated. The story circulated through the department.',
        'You and Sarah received your high marks, but your professional reputation among faculty and peers was permanently stained as callous, ruthless climbers who stabbed a grieving peer in the back.',
      ],
      dialogue: [
        {
          speaker: 'Professor Vance (Review Outcome)',
          text: 'You followed the letter of the syllabus, but failed the most fundamental test of professional ethics.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-all-nighter-collapse': {
      id: 'scene-all-nighter-collapse',
      title: 'The Hallucinatory Sprint',
      location: 'Design Lab, Friday 4:00 AM',
      isEnding: true,
      endingId: 'ending-burnout-collapse',
      narrative: [
        'You and Sarah tried to write Mateo’s complex system architecture from scratch without knowing his design patterns. You drank four energy drinks, slept two hours in forty-eight, and turned in a broken, buggy project.',
        'The capstone received a failing 44% mark. You burned out completely, ruined your health, and enabled Mateo without solving anything.',
      ],
      dialogue: [
        {
          speaker: 'Sarah (Crying at Dawn)',
          text: 'We should have just talked to the professor. We destroyed ourselves for nothing.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-team-infighting': {
      id: 'scene-team-infighting',
      title: 'The Lab Shouting Match',
      location: 'Design Lab Hallway',
      isEnding: true,
      endingId: 'ending-nuclear-team-destruction',
      narrative: [
        'By calling Sarah "heartless" and screaming at her, you pushed her into defensive survival mode. She sent the email anyway behind your back.',
        'The team disintegrated into mutual accusations, and Professor Vance had to intervene in a toxic war between two hostile factions.',
      ],
      dialogue: [
        {
          speaker: 'Sarah',
          text: 'You don’t get to lecture me about morals while our submission burns to the ground!',
          mood: 'defiant',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-compassionate-triage': {
      id: 'ending-compassionate-triage',
      title: 'Compassionate Triage: High Standards, Deep Humanity',
      tier: 'triumph',
      badge: 'COLLABORATIVE LEADERSHIP',
      narrative: [
        'You proved that high performance and human empathy are not opposing forces; they are mutual prerequisites for world-class teamwork.',
        'By pausing a reactive nuclear strike, investigating the facts, securing an official administrative extension, and reallocating workloads fairly, you protected your academic excellence while saving a teammate from destruction in his darkest hour.',
      ],
      summary: 'You paused a vindictive escalation, discovered a family medical crisis, secured an official 72-hour extension, and led the team to honors.',
      criteriaReview: {
        theTruth:
          'Mateo was incapacitated by acute family trauma after carrying 60% of the early project. Sarah was reacting from extreme grade panic.',
        yourDeduction:
          'You understood that true team leadership requires investigating anomalies before issuing penalties, and solving logistics before passing moral judgment.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Audited GitHub telemetry to recognize that sudden silence was an anomaly, not chronic freeloading.',
          'Prevented a disproportionate disciplinary report from ruining a peer’s visa.',
          'Leveraged formal faculty emergency procedures collaboratively.',
        ],
        missedOpportunities: [
          'Could have established emergency off-platform contact protocols at the start of the semester.',
        ],
        reasoningCritique:
          'Flawless group dynamics leadership. You demonstrated crisis management, emotional regulation, and ethical stewardship under extreme deadline pressure.',
      },
    },

    'ending-nuclear-team-destruction': {
      id: 'ending-nuclear-team-destruction',
      title: 'The Ruthless Escalation: The Hollow Grade',
      tier: 'compromised',
      badge: 'ETHICAL BANKRUPTCY',
      narrative: [
        'You protected your GPA, but at the cost of your humanity. By endorsing an immediate disciplinary report without investigating the silence, you inflicted devastating academic and visa trauma on a peer whose sister was in intensive care.',
        'A high mark achieved through the destruction of a grieving teammate is an indelible mark of character failure.',
      ],
      summary: 'A panicked rush to report Mateo triggered disciplinary review, visa threats, and permanent peer alienation.',
      criteriaReview: {
        theTruth:
          'Mateo was in a hospital ICU. A two-hour investigation would have revealed the truth and protected the entire team.',
        yourDeduction:
          'You capitulated to panic and punitive instincts, treating an anomalous crisis as deliberate freeloading.',
        accuracyRate: 30,
        keyDiscoveries: [
          'Discovered that academic success achieved through cruelty brings no professional honor.',
        ],
        missedOpportunities: [
          'Failed to pause the email.',
          'Failed to check with lab classmates or emergency contacts.',
        ],
        reasoningCritique:
          'Severe failure of collective stewardship. When teams prioritize punitive panic over verification, catastrophe is guaranteed.',
      },
    },

    'ending-burnout-collapse': {
      id: 'ending-burnout-collapse',
      title: 'The Silent Martyrs: The Fantasy of Carrying the World',
      tier: 'partial',
      badge: 'COLLATERAL BURNOUT',
      narrative: [
        'You thought you were being noble by covering for Mateo in secret without speaking to the professor. Instead, you hallucinated through two sleepless nights, produced broken work, and failed the project anyway.',
        'Martyrdom is not leadership; it is merely fear of transparent communication disguised as sacrifice.',
      ],
      summary: 'Trying to secretly do a missing teammate’s entire workload resulted in exhaustion and project failure.',
      criteriaReview: {
        theTruth:
          'The university had legitimate emergency extension policies designed specifically for this situation. You suffered unnecessarily out of fear of communication.',
        yourDeduction:
          'You believed that true teamwork meant suffering in silence rather than communicating with faculty.',
        accuracyRate: 50,
        keyDiscoveries: [
          'Learned that secret martyrdom leads to systemic collapse.',
        ],
        missedOpportunities: [
          'Failed to contact the professor for an extension.',
          'Failed to assess realistic capacity.',
        ],
        reasoningCritique:
          'Sub-optimal crisis management. Transparent, courageous communication with authority figures is always superior to suicidal overwork.',
      },
    },
  },
};

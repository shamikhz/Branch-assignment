import { Episode } from '@/features/episodes/types';

export const personalDifficultConversationsEpisode: Episode = {
  id: 'personal-difficult-conversations',
  version: '1.0.0',
  title: 'Mentorship Discussion: Giving Difficult Feedback',
  subtitle: 'Learn how to talk through problems calmly, separate facts from personal opinions, and build trust.',
  synopsis:
    'You are a Senior Team Lead and Mentor at Catalyst Labs. Mateo Rivera, a talented junior developer hired three months ago, has suddenly slowed down: his code output dropped drastically, he missed deadlines, and he became defensive during a recent team meeting after receiving tough feedback. Other team members are frustrated, and HR wants to know what action to take. Have an honest 1-on-1 talk with him, find out the real issues, give polite and clear feedback without hurting his confidence, and create a realistic improvement plan together.',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Friday 1-on-1 Mentorship Catchup, 3:30 PM',
  location: 'Catalyst Labs Quiet Coaching Room & Coffee Terrace, Seattle',
  tags: ['#Skill Trees', '#Mentorship', 'Difficult Conversations', 'Active Listening', 'Psychological Safety', 'Feedback & Coaching'],
  initialScenarioId: 'scene-mentorship-prep',

  suspects: {
    'stakeholder-mateo': {
      id: 'stakeholder-mateo',
      name: 'Mateo Rivera',
      role: 'Junior Full-Stack Engineer (Mentee)',
      age: 24,
      initialDemeanor: 'Defensive and quiet, worried about harsh criticism or being fired.',
      motive: 'Protect his self-respect after feeling humiliated by harsh public comments on his code.',
      opportunity: 'Controls his own effort, willingness to speak up, and future at the company.',
      alibi: 'Points out that the old codebase lacks proper documentation and setup guides.',
      weakness: 'Takes technical feedback personally and shuts down in silence instead of asking for help.',
      associatedClueIds: ['data-pr-review-history', 'data-sprint-velocity-chart'],
      interrogationSummary:
        'Mateo looks down: "Every time I submit code, people leave dozens of nitpick comments. It feels like nothing I build is ever good enough, so why bother rushing?"',
    },
    'stakeholder-claudia': {
      id: 'stakeholder-claudia',
      name: 'Claudia Vance',
      role: 'Senior Staff Engineer & Code Reviewer',
      age: 40,
      initialDemeanor: 'Direct and strict, values high code standards over polite wording.',
      motive: 'Ensure zero bugs and high quality in production services.',
      opportunity: 'Main reviewer on Mateo’s code submissions.',
      alibi: 'Her comments are technically correct and catch real bugs.',
      weakness: 'Uses blunt words ("Why did you do this?", "This makes no sense") that make junior developers feel attacked.',
      associatedClueIds: ['data-code-review-comments', 'data-team-friction-notes'],
      interrogationSummary:
        'Claudia says: "I don’t have time to sugarcoat feedback. The code had serious issues and would have broken production. He needs to learn to take critique."',
    },
    'stakeholder-marcus-hr': {
      id: 'stakeholder-marcus-hr',
      name: 'Marcus Thorne',
      role: 'People Operations & Leadership Coach (Mentor)',
      age: 46,
      initialDemeanor: 'Calm, supportive, experienced in helping teams communicate better.',
      motive: 'Help turn team conflict into growth rather than losing promising junior engineers.',
      opportunity: 'Guides team leads on management practices and performance reviews.',
      alibi: 'Has seen many junior developers succeed once feedback is given with kindness and clear steps.',
      weakness: 'Resists hasty disciplinary warnings when the real issue is poor communication.',
      associatedClueIds: ['data-radical-candor-framework', 'data-growth-contract-template'],
      interrogationSummary:
        'Marcus advises: "Praise in public, critique in private. Focus on the work, not the person. Show him a clear path from where he is today to where he can reach."',
    },
  },

  clues: {
    'data-pr-review-history': {
      id: 'data-pr-review-history',
      title: 'Pull Request #342 Review History',
      category: 'document',
      shortDescription: 'Mateo submitted an 800-line PR. Claudia left 32 review comments including public criticisms.',
      detailedAnalysis:
        'Mateo submitted an 800-line PR. Claudia left 32 review comments including: "Why would anyone write this loop?", "Did you even test this?", and "Completely wrong pattern for this service." Exposes the catalyst: public, abrasive review language caused Mateo to shut down in shame.',
      locationFound: 'GitHub Enterprise PR Archive',
      tags: ['Code Review', 'Team Communication', 'PR Comments'],
    },
    'data-sprint-velocity-chart': {
      id: 'data-sprint-velocity-chart',
      title: 'Sprint Burndown & Ticket Stagnation Log',
      category: 'document',
      shortDescription: 'Mateo completed 18 story points in Month 1, dropping to 4 points with tickets idling 12 days.',
      detailedAnalysis:
        'Mateo completed 18 story points in Month 1, but dropped to 4 points in Month 3 with tickets idling in "In Progress" for 12 days without status updates. Objective data demonstrating a real performance decline that requires supportive managerial intervention.',
      locationFound: 'Jira Sprint Board',
      tags: ['Sprint Metrics', 'Velocity', 'Performance'],
    },
    'data-radical-candor-framework': {
      id: 'data-radical-candor-framework',
      title: 'Radical Candor & Non-Violent Communication Guide',
      category: 'document',
      shortDescription: 'State objective facts without blame, care personally, listen actively, and challenge directly.',
      detailedAnalysis:
        'Structure: 1) State objective observations without blame; 2) Express the shared goal and care personally; 3) Listen actively to uncover root hurdles; 4) Challenge directly with specific milestones. Provides the roadmap to deliver candid feedback while preserving dignity.',
      locationFound: 'Leadership Development Portal',
      tags: ['#Mentorship', 'Radical Candor', 'Coaching Guide'],
    },
    'data-growth-contract-template': {
      id: 'data-growth-contract-template',
      title: 'Scaffolded Mentorship Growth Plan',
      category: 'document',
      shortDescription: 'Plan pairing smaller PR scopes (<200 lines), pre-review design pairing, and weekly 1-on-1s.',
      detailedAnalysis:
        'Plan pairing smaller PR scopes (<200 lines), pre-review architectural pairing sessions, and dedicated senior mentoring check-ins twice weekly. Practical takeaway that restores velocity, mentorship support, and accountability.',
      locationFound: 'Engineering Mentorship Wiki',
      tags: ['Mentorship Plan', 'Pair Programming', 'Scaffolding'],
    },
  },

  connections: [
    {
      id: 'conn-mentorship-root-cause',
      clueA: 'data-pr-review-history',
      clueB: 'data-sprint-velocity-chart',
      deductionTitle: 'Performance Slump Caused by Fear of Public Humiliation',
      deductionText:
        'Cross-referencing the 32 harsh PR comments with the sudden velocity drop reveals Mateo stopped submitting code not from laziness, but from fear of caustic peer judgment.',
      unlockedFlag: 'flag-root-cause-isolated',
    },
    {
      id: 'conn-growth-scaffolding',
      clueA: 'data-radical-candor-framework',
      clueB: 'data-growth-contract-template',
      deductionTitle: 'Compassionate Candor Paired with Concrete Scaffolding Restores Velocity',
      deductionText:
        'Combining emotional validation with smaller PR chunks and architectural pairing provides both psychological safety and clear technical guardrails.',
      unlockedFlag: 'flag-scaffolding-ready',
    },
  ],

  hypotheses: {
    'hypo-mentorship-mastery': {
      id: 'hypo-mentorship-mastery',
      title: 'Leadership Strategy: Radical Candor, Psychological Safety, and Pair Scaffolding',
      accusedSuspectId: 'stakeholder-mateo',
      motiveSummary: 'Address the caustic code review culture while establishing smaller PR milestones and dedicated coaching.',
      methodSummary: 'Lead with empathy and objective facts, uncover underlying fears, and provide supportive engineering structure.',
      requiredClueIds: ['data-pr-review-history', 'data-radical-candor-framework', 'data-growth-contract-template'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-mentorship-triumph',
      failureEndingId: 'ending-toxic-burnout',
    },
  },

  scenarios: {
    'scene-mentorship-prep': {
      id: 'scene-mentorship-prep',
      title: 'Phase 1: Preparing for the 1-on-1',
      location: 'Catalyst Labs Coaching Room',
      narrative: [
        'It is 3:15 PM on Friday. In 15 minutes, you have your bi-weekly 1-on-1 with Mateo Rivera. His sprint velocity has cratered, and teammates are complaining about uncommunicated delays.',
        'You just reviewed Claudia\'s caustic GitHub comments on his last PR. How do you mentally frame the upcoming conversation?',
      ],
      choices: [
        {
          id: 'choice-punitive-reprimand-prep',
          text: 'Prepare a strict disciplinary warning: inform Mateo that his missed deadlines are unacceptable and threaten him with a PIP if he doesn\'t immediately catch up.',
          destinationId: 'scene-alienation-disaster',
        },
        {
          id: 'choice-compassionate-inquiry-prep',
          text: 'Adopt Marcus\'s framework: enter with genuine curiosity, separate objective behavioral facts from moral judgments, and aim to uncover what is blocking his growth and confidence.',
          destinationId: 'scene-conversation-open',
        },
      ],
    },

    'scene-alienation-disaster': {
      id: 'scene-alienation-disaster',
      title: 'Total Emotional Shutdown',
      location: 'Catalyst Labs Coaching Room',
      narrative: [
        'Starting the meeting with immediate disciplinary threats made Mateo completely disengage.',
        'He gave monosyllabic answers, looked at the clock, and submitted his formal resignation letter that evening. You lost a promising, talented hire. Marcus Thorne steps in to help you analyze what went wrong.',
      ],
      choices: [
        {
          id: 'choice-relearn-mentorship',
          text: 'Study the Radical Candor and Non-Violent Communication framework to master developmental feedback.',
          destinationId: 'scene-conversation-open',
        },
      ],
    },

    'scene-conversation-open': {
      id: 'scene-conversation-open',
      title: 'Phase 2: Opening the Dialogue',
      location: 'Catalyst Labs Coaching Room',
      narrative: [
        'Mateo sits down in the coaching room, arms crossed, posture rigid. He expects you to chew him out for the missed sprint.',
        'How do you open the conversation to build trust while remaining clear on standards?',
      ],
      choices: [
        {
          id: 'choice-empathetic-observation',
          text: '"Mateo, thanks for sitting down with me. I value you and your potential on this team. Over the last three weeks, I noticed your tickets stayed in progress for 12 days and our sprint commitments were missed. That seems very different from your strong first month. I want to understand what you\'re experiencing and how we can support you."',
          destinationId: 'scene-uncovering-vulnerability',
        },
        {
          id: 'choice-beat-around-the-bush',
          text: 'Spend 20 minutes talking about the weather and video games, then casually ask at the very last minute why his code is late.',
          destinationId: 'scene-evasion-frustration',
        },
      ],
    },

    'scene-evasion-frustration': {
      id: 'scene-evasion-frustration',
      title: 'Unresolved Ambiguity',
      location: 'Catalyst Labs Coaching Room',
      narrative: [
        'Small talk failed to address the core problem, leaving Mateo even more anxious about hidden agendas.',
        'Marcus advises you to be direct, transparent, and kind without beating around the bush.',
      ],
      choices: [
        {
          id: 'choice-pivot-direct-care',
          text: 'State the observations clearly with compassionate intention.',
          destinationId: 'scene-uncovering-vulnerability',
        },
      ],
    },

    'scene-uncovering-vulnerability': {
      id: 'scene-uncovering-vulnerability',
      title: 'Phase 3: The Breakthrough & Action Plan',
      location: 'Catalyst Labs Coaching Room',
      narrative: [
        'Mateo exhales, his shoulders dropping: "To be honest, after Claudia left 32 comments calling my code \'substandard\' on PR #342 in front of the whole engineering channel, I felt humiliated.',
        'I don\'t understand our complex legacy database patterns, but whenever I ask, I feel like people think I\'m an idiot. So I spent 10 days rewriting code in secret, terrified of submitting another PR." How do you co-create a solution?',
      ],
      choices: [
        {
          id: 'choice-co-created-mentorship-plan',
          text: 'Validate his emotions while upholding standards: 1) Address Claudia\'s harsh review tone privately with her; 2) Structure Mateo\'s work into smaller PRs (<200 lines); 3) Pair him with a senior engineer for 30-minute design reviews before writing code; 4) Set up a weekly 1-on-1 coaching cadence with explicit milestones.',
          destinationId: 'ending-mentorship-triumph',
        },
        {
          id: 'choice-tell-him-to-toughen-up',
          text: 'Tell Mateo: "That\'s just how engineering works. You need to develop thick skin and deal with Claudia\'s style. Now get back to your desk."',
          destinationId: 'ending-toxic-burnout',
        },
      ],
    },

    'ending-mentorship-triumph': {
      id: 'ending-mentorship-triumph',
      title: 'Psychological Safety & Re-Energized Growth',
      location: 'Catalyst Labs Coffee Terrace',
      narrative: [
        'With smaller PRs and pre-code design pairing, Mateo\'s confidence skyrocketed. Within four sprints, his throughput tripled, and he shipped Catalyst Labs\' new search indexing service with zero bugs.',
        'Claudia also adjusted her review style to be constructive. Mateo credited your empathetic, structured 1-on-1 as the pivotal turning point in his engineering career.',
      ],
      choices: [],
    },

    'ending-toxic-burnout': {
      id: 'ending-toxic-burnout',
      title: 'Cultural Decay & Talent Drain',
      location: 'Catalyst Labs Coaching Room',
      narrative: [
        'Telling Mateo to "toughen up" confirmed his worst fears. He checked out mentally, did the bare minimum for two months, and left for another company.',
        'Other junior hires noticed the cold environment, and Catalyst Labs gained a reputation for burning out new talent.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-mentorship-triumph': {
      id: 'ending-mentorship-triumph',
      title: 'Mentorship Review: Master People Developer',
      tier: 'triumph',
      badge: 'Master Mentor & Empathetic Leader',
      summary:
        'You transformed a potential performance crisis into a career-defining growth breakthrough by combining radical candor, psychological safety, and structured coaching scaffolds.',
      narrative: [
        'You uncovered the true psychological roadblock behind the employee\'s withdrawal.',
        'Your structured mentoring scaffolding restored team confidence and delivery velocity.',
      ],
      criteriaReview: {
        theTruth: 'Mateo disengaged due to public humiliation on code reviews and lack of architecture guidance, not incompetence.',
        yourDeduction: 'You opened with non-judgmental observation, restored psychological safety, addressed review culture, and implemented paired design scaffolding.',
        accuracyRate: 100,
        keyDiscoveries: [
          '32 caustic review comments on PR #342 catalyzed Mateo\'s disengagement',
          'Sprint velocity collapse was driven by fear of criticism rather than skill deficiency',
          'Pairing on pre-code design reviews eliminated large rewrites and built confidence',
          'Scaffolded smaller PR scopes (<200 lines) normalized frequent constructive feedback',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary mentorship and leadership: creating psychological safety while maintaining uncompromising engineering standards.',
      },
    },
    'ending-toxic-burnout': {
      id: 'ending-toxic-burnout',
      title: 'Mentorship Review: Dismissive Culture Trap',
      tier: 'compromised',
      badge: 'Dismissive Culture Trap',
      summary:
        'You dismissed legitimate communication barriers and psychological distress as weakness, accelerating talent attrition.',
      narrative: [
        'Abrasive feedback was treated as standard procedure, alienating junior talent.',
        'The team suffered unnecessary turnover and lost a promising engineer.',
      ],
      criteriaReview: {
        theTruth: 'Abrasive team feedback destroyed psychological safety, causing avoidable attrition.',
        yourDeduction: 'You told the mentee to "toughen up" and ignored systemic review hostility.',
        accuracyRate: 20,
        keyDiscoveries: ['Identified missed deadlines'],
        missedOpportunities: ['Failed to address code review hostility and provide paired coaching'],
        reasoningCritique: 'Telling struggling employees to toughen up ignores root causes and destroys trust.',
      },
    },
  },
};

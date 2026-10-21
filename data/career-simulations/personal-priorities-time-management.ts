import { Episode } from '@/features/episodes/types';

export const personalPrioritiesTimeManagementEpisode: Episode = {
  id: 'personal-priorities-time-management',
  version: '1.0.0',
  title: 'Managing Deadlines: Priorities & Focus',
  subtitle: 'Learn how to prioritize what is truly important, avoid getting distracted by urgent messages, and protect your focus time.',
  synopsis:
    'You are a Senior Project Coordinator at Apex Media, handling a major brand launch due in just 48 hours. Your morning is flooded with urgent requests: a senior VP asks for an unplanned presentation, junior team members need immediate design approvals, dozens of urgent chat pings keep arriving, and your main work needs 6 hours of solid focus. Learn how to sort tasks by priority, set polite boundaries, and get the key work done on time without stress.',
  estimatedMinutes: 18,
  difficulty: 'Novice',
  timeSetting: 'Thursday Morning Crisis, 8:45 AM',
  location: 'Apex Media Corporate Suite & Home Office, London',
  tags: ['#Skill Trees', 'Personal Development', 'Time Management', 'Prioritization', 'Deep Work', 'Burnout Prevention'],
  initialScenarioId: 'scene-morning-deluge',

  suspects: {
    'stakeholder-vp-carter': {
      id: 'stakeholder-vp-carter',
      name: 'Harrison Carter',
      role: 'Executive Vice President of Operations',
      age: 53,
      initialDemeanor: 'Demanding and energetic, expects immediate answers to off-the-cuff requests.',
      motive: 'Wants a quick 10-slide deck summarizing global numbers for an informal lunch meeting with a board member.',
      opportunity: 'Has executive power to pull team members off their planned project tasks.',
      alibi: 'Claims his board lunch is very important for the company’s image.',
      weakness: 'Treats every passing thought as an urgent emergency, putting pressure on everyone else.',
      associatedClueIds: ['data-vp-request-email'],
      interrogationSummary:
        'Carter says: "I need these slides by 1:00 PM. Drop whatever you are doing and finish them; it should only take an hour or two."',
    },
    'stakeholder-liam': {
      id: 'stakeholder-liam',
      name: 'Liam Chen',
      role: 'Associate Visual Designer',
      age: 26,
      initialDemeanor: 'Worried and anxious, hesitates to finalize designs without explicit approval.',
      motive: 'Needs approval on billboard color proofs so the printing vendor does not miss their scheduled print run.',
      opportunity: 'Currently blocked; printing machines will sit idle at high cost if proofs are not approved by 11:30 AM.',
      alibi: 'Submitted the proofs yesterday afternoon on schedule.',
      weakness: 'Lacks confidence to proceed with clear brand guidelines on his own without constant reassurance.',
      associatedClueIds: ['data-print-vendor-contract'],
      interrogationSummary:
        'Liam nervously says: "The printer needs our final sign-off before 11:30 AM or our printing slot gets pushed to next week."',
    },
    'stakeholder-dr-simone': {
      id: 'stakeholder-dr-simone',
      name: 'Dr. Simone Becker',
      role: 'Head of Organizational Effectiveness & Executive Coach',
      age: 49,
      initialDemeanor: 'Calm, thoughtful, strong advocate for work-life balance and deep focus time.',
      motive: 'Help hardworking professionals avoid falling into the trap of false emergencies.',
      opportunity: 'Observes team burnout and executive escalations.',
      alibi: 'Published company research showing that frequent task switching cuts productive output by 40%.',
      weakness: 'Values sustainable daily habits over heroic last-minute overtime.',
      associatedClueIds: ['data-campaign-timeline-audit', 'data-eisenhower-matrix-template'],
      interrogationSummary:
        'Dr. Simone coaches: "Urgent things are loud, but important things are quiet. If you let other people’s panic run your calendar, your most valuable work will never get finished."',
    },
  },

  clues: {
    'data-vp-request-email': {
      id: 'data-vp-request-email',
      title: 'VP Carter’s Casual Slide Request Memo',
      category: 'document',
      shortDescription: 'Request for 10 slides for an informal lunch meeting with no formal board vote or budget attached.',
      detailedAnalysis:
        'Request for 10 slides on global metrics for an informal lunch. No formal board vote or budget decision is attached to this lunch meeting.',
      locationFound: 'Executive Outlook Inbox',
      tags: ['Urgency Trap', 'Executive Requests', 'Email'],
    },
    'data-print-vendor-contract': {
      id: 'data-print-vendor-contract',
      title: 'European Print Vendor Hard Deadline SLA',
      category: 'document',
      shortDescription: 'Hard deadline: sign-off by 11:30 AM avoids $2,000/hr idling fees and 5-day launch delay.',
      detailedAnalysis:
        'Vendor contract stipulating that print sign-offs received by 11:30 AM will print on schedule; any delay past 11:30 AM incurs $2,000/hr idling fees and delays rollout by 5 business days.',
      locationFound: 'Vendor Procurement Portal',
      tags: ['Critical Path', 'Deadlines', 'SLA'],
    },
    'data-campaign-timeline-audit': {
      id: 'data-campaign-timeline-audit',
      title: '48-Hour Campaign Critical Path Deliverables',
      category: 'document',
      shortDescription: 'The core digital asset pack and ad copy require 5 hours of uninterrupted deep focus.',
      detailedAnalysis:
        'The core digital asset pack and localized ad copy require 5 hours of uninterrupted deep focus to finalize before tomorrow morning\'s regulatory clearance.',
      locationFound: 'Asana Project Timeline',
      tags: ['Deep Work', 'Project Management', 'Focus'],
    },
    'data-eisenhower-matrix-template': {
      id: 'data-eisenhower-matrix-template',
      title: 'Eisenhower Priority & Boundary Framework',
      category: 'document',
      shortDescription: 'Decision structure separating Do First (Print SLA) from Deep Work blocks and negotiated executive requests.',
      detailedAnalysis:
        'Categorization matrix: 1) Do First (Print SLA), 2) Schedule/Protect (Core Deliverables Deep Work), 3) Delegate/Negotiate (VP slides), 4) Eliminate (Reactive Slack threads).',
      locationFound: 'Personal Effectiveness Toolkit',
      tags: ['Eisenhower Matrix', 'Productivity', 'Boundaries'],
    },
  },

  connections: [
    {
      id: 'conn-eisenhower-contrast',
      clueA: 'data-vp-request-email',
      clueB: 'data-print-vendor-contract',
      deductionTitle: 'Print Press SLA Outranks Casual Slide Request in Consequence',
      deductionText:
        'Comparing the $2,000/hr vendor idling fee with Carter’s informal lunch proves that approving Liam’s billboard proofs must take immediate precedence.',
      unlockedFlag: 'flag-priority-isolated',
    },
    {
      id: 'conn-deep-work-block',
      clueA: 'data-campaign-timeline-audit',
      clueB: 'data-eisenhower-matrix-template',
      deductionTitle: 'Protecting Scheduled Time Blocks Guarantees Flawless Delivery',
      deductionText:
        'Protecting a 2.5-hour deep work focus window prevents context switching and ensures ad copy is delivered with zero regulatory errors.',
      unlockedFlag: 'flag-deep-work-ready',
    },
  ],

  hypotheses: {
    'hypo-eisenhower-mastery': {
      id: 'hypo-eisenhower-mastery',
      title: 'Effectiveness Strategy: Quadrant 1 SLA Resolution with Protected Deep Work',
      accusedSuspectId: 'stakeholder-vp-carter',
      motiveSummary: 'Sign off on the print proofs, provide an executive summary PDF to Carter, and protect deep focus time.',
      methodSummary: 'Avoid reactive Slack distractions and preserve high cognitive energy for core creative deliverables.',
      requiredClueIds: ['data-print-vendor-contract', 'data-campaign-timeline-audit', 'data-eisenhower-matrix-template'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-focus-mastery',
      failureEndingId: 'ending-multi-task-failure',
    },
  },

  scenarios: {
    'scene-morning-deluge': {
      id: 'scene-morning-deluge',
      title: 'Phase 1: The Firestorm',
      location: 'Apex Media Corporate Suite',
      narrative: [
        'It is 8:45 AM. Your Slack is blowing up with 47 unread messages about a non-critical copy typo.',
        'Liam Chen is at your desk in a panic: the European billboard printer will shut down production at 11:30 AM without sign-off. Simultaneously, an email from VP Harrison Carter dings: "Need a 10-slide deck for my board lunch at 1:00 PM today. Make it pretty." Meanwhile, your core campaign deliverables require 5 hours of deep focus. What is your first move?',
      ],
      choices: [
        {
          id: 'choice-drop-everything-for-vp',
          text: 'Immediately drop all campaign work and start building Carter\'s 10 slides to keep executive leadership happy.',
          destinationId: 'scene-printer-catastrophe',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-pleased-the-vp', value: true }],
        },
        {
          id: 'choice-apply-eisenhower-triage',
          text: 'Take a deep breath, refuse to react in panic, and apply the Eisenhower Matrix to categorize all incoming demands by true urgency and consequence.',
          destinationId: 'scene-triage-exercise',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-vp-request-email', description: 'Evaluated Executive Slide Urgency' },
            { type: 'unlockClue', target: 'data-print-vendor-contract', description: 'Inspected 11:30 AM Print SLA Deadline' },
          ],
        },
      ],
    },

    'scene-printer-catastrophe': {
      id: 'scene-printer-catastrophe',
      title: 'The Collateral Damage of Pleasing',
      location: 'Open Plan Office Floor',
      narrative: [
        'While you polished Carter’s slide graphics, the clock struck 11:30 AM. Liam could not get sign-off, the German printing press stopped, and Apex was billed an $8,000 idle charge while delaying the campaign launch.',
        'Carter glanced at your slides for 30 seconds over lunch and remarked: "Thanks, but we ended up just chatting informally." Dr. Simone Becker visits your desk.',
      ],
      choices: [
        {
          id: 'choice-reclaim-priorities',
          text: 'Work with Dr. Simone to establish boundaries and triage the remaining deliverables.',
          destinationId: 'scene-triage-exercise',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-campaign-timeline-audit', description: 'Audited Core Campaign Schedule' },
          ],
        },
      ],
    },

    'scene-triage-exercise': {
      id: 'scene-triage-exercise',
      title: 'Phase 2: Triage & Boundary Communication',
      location: 'Quiet Coaching Room',
      narrative: [
        'You map out the four quadrants:',
        '1. Urgent & Important: Sign off on Liam’s print proofs before 11:30 AM ($8k penalty avoided).',
        '2. Important, Not Urgent (Deep Work): 5 hours of core ad localization and packaging.',
        '3. Urgent, Low Importance: Carter’s casual slide deck.',
        '4. Neither: The 47 Slack messages debating font kerning. How do you handle Carter\'s slide request without jeopardizing your career or campaign?',
      ],
      choices: [
        {
          id: 'choice-graceful-boundary-negotiation',
          text: 'Send Carter a polite, clear boundary: "Harrison, I am currently finalizing the European print press release to avoid $8k in idle fees before 11:30 AM. I can either send you our 2-page executive summary PDF right now, or pull in an analyst to compile the raw slides for your review."',
          destinationId: 'scene-boundary-execution',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-eisenhower-matrix-template', description: 'Applied Boundary Framework' },
            { type: 'setFlag', target: 'flag-boundary-communicated', value: true },
          ],
        },
      ],
    },

    'scene-boundary-execution': {
      id: 'scene-boundary-execution',
      title: 'Phase 3: The Focused Execution Architecture',
      location: 'Focus Workstation',
      narrative: [
        'Carter replies: "The 2-page executive PDF is actually perfect; saves me reading 10 slides. Thanks for saving the print press."',
        'With Liam’s proofs signed off at 10:15 AM and Carter satisfied, you have 6 hours remaining before the end of the day. How do you protect your focus for the core campaign assets?',
      ],
      choices: [
        {
          id: 'choice-deep-work-timeblock',
          text: 'Schedule two uninterrupted 2.5-hour Deep Work blocks, set Slack to "Focus Mode: Finalizing Print Release (Urgent Pagers Only)", close all 28 browser tabs, and execute the core deliverables with full cognitive attention.',
          destinationId: 'ending-focus-mastery',
          consequencePreview: 'Deductive',
          effects: [{ type: 'setFlag', target: 'flag-deep-work-protected', value: true }],
        },
        {
          id: 'choice-multi-task-everything',
          text: 'Keep Slack notifications pinging on screen, reply to every message within 30 seconds while writing campaign copy in between.',
          destinationId: 'ending-multi-task-failure',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-multitasking-burnout', value: true }],
        },
      ],
    },

    'ending-focus-mastery': {
      id: 'ending-focus-mastery',
      title: 'Calm Mastery & High-Impact Delivery',
      location: 'Apex Media Quiet Lounge',
      isEnding: true,
      endingId: 'ending-focus-mastery',
      narrative: [
        'You finished the core European asset pack 4 hours ahead of schedule with zero errors.',
        'The printing presses ran smoothly, Carter had what he needed for his lunch, and you ended the day feeling accomplished, calm, and in control rather than depleted.',
      ],
      choices: [],
    },

    'ending-multi-task-failure': {
      id: 'ending-multi-task-failure',
      title: 'Context-Switching Burnout',
      location: 'Evening Workstation',
      isEnding: true,
      endingId: 'ending-multi-task-failure',
      narrative: [
        'Bouncing between Slack pings and ad copy resulted in 3 critical translation typos that made it into the final release.',
        'You worked until 11:30 PM, exhausted and stressed, realizing that reactive busyness is not the same as high performance.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-focus-mastery': {
      id: 'ending-focus-mastery',
      title: 'Personal Effectiveness Review: Master of Focus',
      tier: 'triumph',
      badge: 'Master of Focus & Deep Work',
      summary: 'You separated real urgency from noisy demands, practiced graceful upward boundary setting, and protected deep work to deliver flawless results with calm sustainability.',
      narrative: [
        'You executed high-stakes commercial deliverables without succumbing to urgency panic.',
        'Your proactive boundary communication earned the respect of executive leadership.',
      ],
      criteriaReview: {
        theTruth: 'The printing press was an irreversible deadline, while the VP’s slides were a low-consequence request best served by an executive summary.',
        yourDeduction: 'You triaged using the Eisenhower Matrix, negotiated upward boundaries, and protected deep work blocks.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Print vendor 11:30 AM deadline carried an $8,000 penalty and 5-day delay',
          'VP slide request was for an informal lunch without formal board voting',
          'Graceful alternatives (2-page PDF) satisfied executive needs in 5 minutes',
          'Deep work blocks eliminated context-switching errors on critical ad copy',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary personal effectiveness: refusing to confuse loud urgency with true importance.',
      },
    },
    'ending-multi-task-failure': {
      id: 'ending-multi-task-failure',
      title: 'Effectiveness Review: Reactive Busyness Trap',
      tier: 'partial',
      badge: 'Multitasking Trap',
      summary: 'You confused constant responsiveness with effectiveness, allowing context-switching to degrade the quality of your core deliverables.',
      narrative: [
        'Constant Slack distractions led to fatigue, errors, and unnecessary overtime.',
        'Reactive firefighting crowded out meaningful high-impact work.',
      ],
      criteriaReview: {
        theTruth: 'Cognitive multitasking introduces severe attentional residue and increases error rates.',
        yourDeduction: 'You attempted to reply to reactive pings while writing critical copy.',
        accuracyRate: 40,
        keyDiscoveries: ['Addressed incoming messages'],
        missedOpportunities: ['Failed to block uninterrupted deep focus time'],
        reasoningCritique: 'Prioritize deep work over constant superficial responsiveness.',
      },
    },
  },
};

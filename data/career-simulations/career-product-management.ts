import { Episode } from '@/features/episodes/types';

export const careerProductManagementEpisode: Episode = {
  id: 'career-product-management',
  version: '1.0.0',
  title: 'The Backlog Tug-of-War: Sprint Strategy',
  subtitle: 'Balance enterprise sales promises, engineering technical debt, and real customer adoption.',
  synopsis:
    'As an Associate Product Manager at CloudCollab, a B2B SaaS workflow platform, you face conflicting high-pressure demands for the upcoming quarterly roadmap. Enterprise Sales demands a custom PDF compliance exporter to close a $400k enterprise deal; Engineering insists that critical authentication tech debt will cause a security audit failure; and Product Analytics proves that 62% of regular users are abandoning the newly launched collaboration canvas. Navigate stakeholder trade-offs, apply RICE scoring, and build a defensible product roadmap.',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Roadmap Planning Week, 10:00 AM',
  location: 'CloudCollab Product Strategy War Room, San Francisco',
  tags: ['#Career Paths', '#Skill Trees', 'Product Management', 'Roadmap Prioritization', 'RICE Scoring', 'Stakeholder Management'],
  initialScenarioId: 'scene-roadmap-kickoff',

  suspects: {
    'stakeholder-diana': {
      id: 'stakeholder-diana',
      name: 'Diana Croft',
      role: 'Head of Enterprise Sales',
      age: 41,
      initialDemeanor: 'Charismatic, aggressive, laser-focused on hitting quarterly sales quotas.',
      motive: 'Close a marquee enterprise logo (Apex Global) to secure her team bonus.',
      opportunity: 'Direct access to the CEO and influence over executive board meetings.',
      alibi: 'Claims Apex Global will walk away immediately unless the custom PDF exporter is committed in Sprint 1.',
      weakness: 'Willing to compromise product roadmap integrity for short-term single-client customizations.',
      associatedClueIds: ['data-sales-pipeline-report'],
      interrogationSummary:
        'Diana insists: "Apex Global represents $400k in ARR. If we do not build their proprietary audit exporter, our competitors will win the deal."',
    },
    'stakeholder-kenji': {
      id: 'stakeholder-kenji',
      name: 'Kenji Sato',
      role: 'Lead Security & Infrastructure Architect',
      age: 45,
      initialDemeanor: 'Exhausted, uncompromising on security integrity and system maintainability.',
      motive: 'Pass the upcoming SOC2 compliance audit and eliminate catastrophic single-point-of-failure vulnerabilities.',
      opportunity: 'Can veto production releases if security standards are violated.',
      alibi: 'Logged 4 separate vulnerability warnings over the past six months in Jira.',
      weakness: 'Communicates purely in technical jargon without framing risks in business and liability terms.',
      associatedClueIds: ['data-soc2-audit-gap'],
      interrogationSummary:
        'Kenji warns: "Our legacy OAuth token exchange has a critical session invalidation gap. If SOC2 fails, no enterprise customer will sign with us anyway."',
    },
    'stakeholder-amara': {
      id: 'stakeholder-amara',
      name: 'Amara Okafor',
      role: 'VP of Product (Mentor)',
      age: 39,
      initialDemeanor: 'Strategic, inquisitive, focused on repeatable product-market fit over custom agency work.',
      motive: 'Guide junior PMs to develop rigorous prioritization frameworks rather than succumbing to the loudest voice.',
      opportunity: 'Final signatory on the product roadmap and resource allocation.',
      alibi: 'Instituted the company’s RICE prioritization framework two quarters ago.',
      weakness: 'Expects junior PMs to negotiate consensus without intervening prematurely.',
      associatedClueIds: ['data-user-dropoff-funnel', 'data-rice-scoring-matrix'],
      interrogationSummary:
        'Amara advises: "If you try to please everyone, you please no one. Base your roadmap on measurable impact, strategic alignment, and honest risk appraisal."',
    },
  },

  clues: {
    'data-sales-pipeline-report': {
      id: 'data-sales-pipeline-report',
      title: 'Enterprise Pipeline & Deal Flow Audit',
      category: 'document',
      shortDescription: 'Apex Global represents $400k ARR, but is only 1 out of 8 pipeline deals.',
      detailedAnalysis:
        'Apex Global represents $400k ARR, but represents only 1 out of 8 pipeline deals. The other 7 prospects specifically cited ease of collaboration as their main buying criteria.',
      locationFound: 'Salesforce CRM Dashboard',
      tags: ['Sales Pipeline', 'Enterprise Deals', 'Market Demand'],
    },
    'data-soc2-audit-gap': {
      id: 'data-soc2-audit-gap',
      title: 'SOC2 Type II Readiness Assessment',
      category: 'document',
      shortDescription: 'External auditors flagged Session Token Invalidation as a Critical Severity Finding.',
      detailedAnalysis:
        'External auditors flagged Session Token Invalidation as a Critical Severity Finding with a mandatory 45-day remediation window. Failure guarantees immediate audit failure.',
      locationFound: 'Security Compliance Vault',
      tags: ['Compliance', 'SOC2', 'Security'],
    },
    'data-user-dropoff-funnel': {
      id: 'data-user-dropoff-funnel',
      title: 'Mixpanel Collaboration Canvas Telemetry',
      category: 'digital',
      shortDescription: '62% of users drop off at Step 2 of the canvas workflow due to verification friction.',
      detailedAnalysis:
        '62% of users drop off at Step 2 of the canvas workflow because invitation links require complex corporate domain verification, bottlenecking user growth.',
      locationFound: 'Product Analytics Suite',
      tags: ['Product Telemetry', 'User Funnel', 'Onboarding'],
    },
    'data-rice-scoring-matrix': {
      id: 'data-rice-scoring-matrix',
      title: 'Product Initiative RICE Comparison Sheet',
      category: 'document',
      shortDescription: 'Quantifies Reach, Impact, Confidence, and Effort across the 3 competing initiatives.',
      detailedAnalysis:
        'RICE evaluation proves that simplifying canvas onboarding scores 720, SOC2 is a mandatory hygiene baseline, and the custom single-client PDF exporter scores only 80.',
      locationFound: 'Product Planning Notion Doc',
      tags: ['RICE Scoring', 'Prioritization', 'Product Strategy'],
    },
  },

  connections: [
    {
      id: 'conn-security-mandate',
      clueA: 'data-sales-pipeline-report',
      clueB: 'data-soc2-audit-gap',
      deductionTitle: 'Compliance Is an Absolute Commercial Prerequisite',
      deductionText:
        'Failing SOC2 invalidates enterprise sales security requirements across all 8 pipeline deals, proving security debt remediation must take priority over custom feature requests.',
      unlockedFlag: 'flag-compliance-prerequisite',
    },
    {
      id: 'conn-onboarding-reach',
      clueA: 'data-user-dropoff-funnel',
      clueB: 'data-rice-scoring-matrix',
      deductionTitle: 'High-Reach UX Drives Highest Platform ROI',
      deductionText:
        'Fixing collaboration onboarding impacts 18,000 monthly active users and delivers a 9x higher RICE ROI than single-customer bespoke custom software.',
      unlockedFlag: 'flag-ux-roi-verified',
    },
  ],

  hypotheses: {
    'hypo-balanced-roadmap': {
      id: 'hypo-balanced-roadmap',
      title: 'Roadmap Strategy: 50/30/20 Capacity Allocation with Generic Export API',
      accusedSuspectId: 'stakeholder-diana',
      motiveSummary: 'Allocate capacity to guarantee SOC2 compliance and self-serve onboarding, while building an extensible API for enterprise sales.',
      methodSummary: 'Avoid custom agency code by translating bespoke customer requests into generic platform integrations.',
      requiredClueIds: ['data-soc2-audit-gap', 'data-user-dropoff-funnel', 'data-rice-scoring-matrix'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-strategic-pm',
      failureEndingId: 'ending-agency-failure',
    },
  },

  scenarios: {
    'scene-roadmap-kickoff': {
      id: 'scene-roadmap-kickoff',
      title: 'Phase 1: The Conflicting Demands',
      location: 'Product Strategy War Room',
      narrative: [
        'The quarterly roadmap review begins. Diana Croft slams an executive summary on the desk: "Apex Global wants our custom PDF compliance exporter in Sprint 1. If we deliver it, we hit our annual target early. If we hesitate, they walk."',
        'Kenji Sato crosses his arms: "If we don’t fix our authentication token vulnerability within 30 days, we fail our SOC2 audit, rendering Diana’s contract legally void." Amara Okafor turns to you: "How do you evaluate these competing priorities?"',
      ],
      choices: [
        {
          id: 'choice-surrender-to-sales',
          text: 'Agree immediately to commit all sprint capacity to Apex Global’s custom PDF exporter.',
          destinationId: 'scene-sales-trap',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-surrendered-to-sales', value: true }],
        },
        {
          id: 'choice-investigate-data',
          text: 'Request 24 hours to cross-reference pipeline data, security audit mandates, and product usage analytics using an objective framework.',
          destinationId: 'scene-analytics-review',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-sales-pipeline-report', description: 'Audited Enterprise Sales Pipeline' },
            { type: 'unlockClue', target: 'data-soc2-audit-gap', description: 'Inspected SOC2 Compliance Audit Mandate' },
          ],
        },
      ],
    },

    'scene-sales-trap': {
      id: 'scene-sales-trap',
      title: 'The Custom Agency Trap',
      location: 'Executive Suite',
      narrative: [
        'Pledging all engineering resources to Apex Global sends shockwaves through the engineering team.',
        'Kenji issues a formal security grievance, and product telemetry shows standard users continuing to abandon the platform in droves. Amara pulls you aside: "A product manager must guide strategy, not take feature orders without validation."',
      ],
      choices: [
        {
          id: 'choice-reset-evaluation',
          text: 'Re-open the roadmap and conduct an empirical evaluation using product analytics and compliance deadlines.',
          destinationId: 'scene-analytics-review',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-user-dropoff-funnel', description: 'Analyzed User Drop-off Funnels' },
          ],
        },
      ],
    },

    'scene-analytics-review': {
      id: 'scene-analytics-review',
      title: 'Phase 2: Uncovering Core Bottlenecks',
      location: 'Product Analytics Lab',
      narrative: [
        'In the product analytics portal, you discover that 62% of regular users fail to onboard to the collaboration canvas because of domain verification friction.',
        'Meanwhile, Kenji shares the SOC2 external audit report: the token vulnerability is an absolute disqualifier for any regulated enterprise.',
      ],
      choices: [
        {
          id: 'choice-build-rice-matrix',
          text: 'Frame all three initiatives into a standardized RICE (Reach x Impact x Confidence / Effort) matrix with realistic resource estimates.',
          destinationId: 'scene-prioritization-matrix',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-rice-scoring-matrix', description: 'Calculated RICE Prioritization Scores' },
          ],
        },
      ],
    },

    'scene-prioritization-matrix': {
      id: 'scene-prioritization-matrix',
      title: 'Phase 3: The Executive Recommendation',
      location: 'Executive Boardroom',
      narrative: [
        'The RICE analysis is crystal clear:',
        '1. SOC2 Security Remediation: Mandatory baseline (Compliance blocker for all enterprise contracts).',
        '2. Collaboration Onboarding Streamlining: Reach 18,000 users/mo, Impact High, Effort Low (Score 720).',
        '3. Custom PDF Exporter: Reach 1 client, Impact High for Apex, Effort Very High (Score 80). How do you present the final quarterly roadmap to the executive board?',
      ],
      choices: [
        {
          id: 'choice-balanced-compromise',
          text: 'Propose a 50/30/20 Capacity Allocation: 50% for core self-serve onboarding, 30% to guarantee SOC2 compliance, and 20% to build an extensible Generic Webhook/Export API that satisfies Apex while unlocking integrations for all future clients.',
          destinationId: 'ending-strategic-pm',
          consequencePreview: 'Deductive',
          effects: [{ type: 'setFlag', target: 'flag-strategic-allocation-chosen', value: true }],
        },
        {
          id: 'choice-total-sales-concession',
          text: 'Give Diana 100% of engineering bandwidth for Apex Global and defer SOC2 and onboarding to next year.',
          destinationId: 'ending-agency-failure',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-feature-factory-chosen', value: true }],
        },
      ],
    },

    'ending-strategic-pm': {
      id: 'ending-strategic-pm',
      title: 'Strategic Product Leadership & Balanced Growth',
      location: 'CloudCollab All-Hands Auditorium',
      isEnding: true,
      endingId: 'ending-strategic-pm',
      narrative: [
        'Your 50/30/20 framework passed unanimously. CloudCollab achieved SOC2 Type II certification on schedule.',
        'The simplified onboarding flow drove a 34% increase in team activations. And by delivering an extensible API exporter, Apex Global signed their $400k contract alongside three other regulated enterprise clients.',
      ],
      choices: [],
    },

    'ending-agency-failure': {
      id: 'ending-agency-failure',
      title: 'The Feature Factory Failure',
      location: 'Executive Briefing Room',
      isEnding: true,
      endingId: 'ending-agency-failure',
      narrative: [
        'CloudCollab built the bespoke exporter for Apex Global, but failed the SOC2 audit three weeks later.',
        'Apex cited compliance failure and terminated their contract. Product retention cratered as self-serve onboarding remained broken.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-strategic-pm': {
      id: 'ending-strategic-pm',
      title: 'Product Leadership Review: Master Strategist',
      tier: 'triumph',
      badge: 'Master Product Strategist',
      summary: 'You resisted emotional pressure, used empirical RICE prioritization, and transformed a bespoke client request into an extensible platform capability.',
      narrative: [
        'CloudCollab achieved compliance excellence while unlocking scalable self-serve customer growth.',
        'Your strategic 50/30/20 capacity framework established a company-wide standard for objective roadmap governance.',
      ],
      criteriaReview: {
        theTruth: 'SOC2 was mandatory for all commercial deals, and self-serve onboarding was the primary user growth bottleneck.',
        yourDeduction: 'You protected compliance capacity, solved core user onboarding, and fulfilled sales requirements via scalable platform architecture.',
        accuracyRate: 100,
        keyDiscoveries: [
          'SOC2 compliance was a hard dependency for enterprise sales contracts',
          'Collaboration canvas onboarding friction drove 62% user drop-off',
          'RICE scoring revealed that generic export APIs provided 9x higher return than single-client custom code',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary product prioritization: de-biasing roadmaps with transparent frameworks.',
      },
    },
    'ending-agency-failure': {
      id: 'ending-agency-failure',
      title: 'Product Review: Reactive Feature Factory',
      tier: 'partial',
      badge: 'Feature Factory Trap',
      summary: 'You surrendered roadmap governance to short-term sales promises, jeopardizing compliance and scalable product-market fit.',
      narrative: [
        'Bespoke client customizations turned the software team into a reactive custom agency.',
        'Compliance failure invalidated the very contracts the team sacrificed their roadmap to close.',
      ],
      criteriaReview: {
        theTruth: 'Enterprise clients require certified compliance before signing legally binding contracts.',
        yourDeduction: 'You subordinated compliance and user growth to closed-deal sales pressure.',
        accuracyRate: 40,
        keyDiscoveries: ['Closed short-term deal interest'],
        missedOpportunities: ['Ignored mandatory SOC2 audit deadlines and user onboarding drop-off'],
        reasoningCritique: 'Resist feature factory temptations; product managers must defend long-term platform viability.',
      },
    },
  },
};

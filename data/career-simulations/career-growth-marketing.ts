import { Episode } from '@/features/episodes/types';

export const careerGrowthMarketingEpisode: Episode = {
  id: 'career-growth-marketing',
  version: '1.0.0',
  title: 'The Zero-Waste Funnel: Growth Strategy',
  subtitle: 'Deploy a $15,000 monthly acquisition budget, diagnose attribution leakage, and master growth marketing.',
  synopsis:
    'You are appointed Growth Marketing Strategist at SaaSify, an all-in-one invoicing platform for remote contractors. The company has allocated a strict $15,000 experimental monthly budget. However, Customer Acquisition Cost (CAC) on paid social has exploded from $45 to $168, landing page visitor-to-signup conversion has stalled at 1.4%, and attribution data between Google Ads, Meta Ads, and Stripe is completely out of sync. Formulate honest test hypotheses, allocate capital efficiently, and establish sustainable unit economics.',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Monday Campaign Launch Briefing, 10:30 AM',
  location: 'SaaSify Marketing Strategy Suite, Austin',
  tags: ['#Career Paths', '#Skill Trees', 'Growth Marketing', 'Unit Economics', 'CAC/LTV', 'Conversion Rate Optimization', 'Attribution'],
  initialScenarioId: 'scene-marketing-audit',

  suspects: {
    'stakeholder-blake': {
      id: 'stakeholder-blake',
      name: 'Blake Sterling',
      role: 'Paid Acquisition Lead',
      age: 29,
      initialDemeanor: 'Hyperactive, metric-obsessed, relies heavily on algorithm-driven automated bidding.',
      motive: 'Wants to maximize top-of-funnel impression volume and ad spend budget.',
      opportunity: 'Manages Meta, LinkedIn, and Google Ads ad accounts directly.',
      alibi: 'Reports high click-through rates (CTR of 4.2%) on dynamic video ads.',
      weakness: 'Optimizes for cheap clicks rather than qualified trial activations, generating low-intent traffic.',
      associatedClueIds: ['data-paid-ad-dashboard'],
      interrogationSummary:
        'Blake argues: "We just need to double down on our high-performing viral video hooks. The clicks are coming in cheap at $0.40 per click!"',
    },
    'stakeholder-nina': {
      id: 'stakeholder-nina',
      name: 'Nina Alvarez',
      role: 'Conversion Rate Optimization (CRO) Lead',
      age: 34,
      initialDemeanor: 'Empirical, skeptical of vanity metrics, obsessive about user intent and page speed.',
      motive: 'Fix landing page friction and eliminate misleading promotional copy.',
      opportunity: 'Controls website AB testing, copy variants, and landing page hosting.',
      alibi: 'Installed Hotjar session recordings revealing that 70% of mobile ad visitors bounce before the pricing calculator loads.',
      weakness: 'Reluctant to run paid experiments until landing pages achieve theoretical perfection.',
      associatedClueIds: ['data-session-recordings'],
      interrogationSummary:
        'Nina notes: "Blake is sending traffic to a page that takes 4.8 seconds to load on mobile and promises \'Free Forever\' when our free tier has a 3-invoice cap. Users feel tricked and bounce immediately."',
    },
    'stakeholder-vikram': {
      id: 'stakeholder-vikram',
      name: 'Vikram Seth',
      role: 'Chief Marketing Officer (Mentor)',
      age: 47,
      initialDemeanor: 'Experienced, calm, focused on long-term payback periods and unit economics over vanity growth spikes.',
      motive: 'Instill disciplined experimental methodology and honest positioning into the marketing team.',
      opportunity: 'Final authority over quarterly budget re-allocations.',
      alibi: 'Demanded an end-to-end audit connecting ad platform pixels to actual Stripe subscription renewals.',
      weakness: 'Occasionally cautious, requiring deep statistical significance before scaling new channels.',
      associatedClueIds: ['data-stripe-cohort-retention', 'data-channel-unit-economics'],
      interrogationSummary:
        'Vikram advises: "Growth marketing is not growth hacking tricks. It is identifying who gets authentic value from your product, meeting them with honest messaging, and acquiring them at a cost lower than their lifetime value."',
    },
  },

  clues: {
    'data-paid-ad-dashboard': {
      id: 'data-paid-ad-dashboard',
      title: 'Ad Platform Performance Summary',
      category: 'digital',
      shortDescription: 'Meta Ads shows 32,000 clicks at $0.42 CPC, but Stripe records only 114 paid conversions.',
      detailedAnalysis:
        'Meta Ads shows 32,000 clicks at $0.42 CPC, but Stripe records only 114 actual paid conversions from this campaign, yielding an effective CAC of $118 against an average customer LTV of $90.',
      locationFound: 'Meta & Google Ads Manager',
      tags: ['Ad Spend', 'Attribution', 'CAC'],
    },
    'data-session-recordings': {
      id: 'data-session-recordings',
      title: 'Hotjar Mobile Session Recordings',
      category: 'digital',
      shortDescription: 'Mobile page load time is 4.8 seconds; 68% of visitors bounce before interactive elements appear.',
      detailedAnalysis:
        'Mobile page load time is 4.8 seconds due to uncompressed 8MB hero video assets. 68% of visitors bounce before interactive elements appear.',
      locationFound: 'CRO Analytics Suite',
      tags: ['CRO', 'Mobile Latency', 'User Experience'],
    },
    'data-stripe-cohort-retention': {
      id: 'data-stripe-cohort-retention',
      title: 'Stripe Cohort LTV & Churn Breakdown',
      category: 'document',
      shortDescription: 'High-intent search cohorts retain for 14.8 months ($260 LTV) vs 2.4 months ($43 LTV) for viral social ads.',
      detailedAnalysis:
        'Customers acquired through organic search and high-intent comparison articles retain for 14.8 months ($260 LTV) with 2.1% monthly churn, compared to 2.4 months ($43 LTV) for viral social ad signups.',
      locationFound: 'Stripe Revenue Analytics',
      tags: ['LTV', 'Retention', 'Customer Value'],
    },
    'data-channel-unit-economics': {
      id: 'data-channel-unit-economics',
      title: 'Channel Experimentation Model ($15,000 Allocation)',
      category: 'document',
      shortDescription: 'Model comparing 3 allocation strategies across High-Intent Search, Partnerships, and Retargeting.',
      detailedAnalysis:
        'Model proving that reallocating budget into high-intent search and contractor community partnerships delivers a sustainable 5.3x LTV:CAC ratio.',
      locationFound: 'Marketing Finance Sheet',
      tags: ['Capital Allocation', 'Financial Modeling', 'Unit Economics'],
    },
  },

  connections: [
    {
      id: 'conn-underwater-unit-economics',
      clueA: 'data-paid-ad-dashboard',
      clueB: 'data-stripe-cohort-retention',
      deductionTitle: 'Paid Social CAC Exceeds Customer Lifetime Value',
      deductionText:
        'Cross-referencing ad spend with Stripe revenue proves that broad viral social ads are acquiring customers at an unsustainable loss ($118 CAC vs $43 retained LTV).',
      unlockedFlag: 'flag-underwater-economics-proved',
    },
    {
      id: 'conn-mobile-cro-fix',
      clueA: 'data-session-recordings',
      clueB: 'data-channel-unit-economics',
      deductionTitle: 'Technical Latency Resolution Restores Conversion Baselines',
      deductionText:
        'Compressing hero video assets and eliminating deceptive copy raises conversion rates from 1.4% to 4.8%, creating the baseline needed to scale high-intent channels.',
      unlockedFlag: 'flag-cro-restored',
    },
  ],

  hypotheses: {
    'hypo-high-intent-allocation': {
      id: 'hypo-high-intent-allocation',
      title: 'Growth Strategy: High-Intent Search & Transparent CRO Optimization',
      accusedSuspectId: 'stakeholder-blake',
      motiveSummary: 'Pivot from broad low-intent social clicks to high-intent contractor search queries with optimized mobile speed.',
      methodSummary: 'Allocate 80%+ of budget to search terms and partner channels while maintaining a 5:1 LTV:CAC ratio.',
      requiredClueIds: ['data-paid-ad-dashboard', 'data-session-recordings', 'data-stripe-cohort-retention'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-growth-mastery',
      failureEndingId: 'ending-speculative-bust',
    },
  },

  scenarios: {
    'scene-marketing-audit': {
      id: 'scene-marketing-audit',
      title: 'Phase 1: The Paid Acquisition Audit',
      location: 'SaaSify Growth Lab',
      narrative: [
        'SaaSify is burning its $15,000 monthly marketing budget rapidly.',
        'Blake Sterling presents the dashboard: "Our new video ads brought 32,000 visits! Traffic is through the roof." But Vikram checks Stripe: only 114 customers upgraded to paid plans. CAC is $118, while average customer LTV is just $90. SaaSify is losing $28 on every customer acquired. How do you assess the situation?',
      ],
      choices: [
        {
          id: 'choice-increase-ad-spend',
          text: 'Pour the remaining budget into the same video ads, assuming higher volume will lower average CAC through algorithmic optimization.',
          destinationId: 'scene-ad-burnout',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-doubled-down-social', value: true }],
        },
        {
          id: 'choice-audit-conversion-funnel',
          text: 'Pause underperforming broad campaigns immediately and inspect user session behavior, load times, and landing page message match with Nina.',
          destinationId: 'scene-funnel-inspection',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-paid-ad-dashboard', description: 'Exposed Underwater CAC:LTV Ratio' },
            { type: 'unlockClue', target: 'data-session-recordings', description: 'Inspected 4.8s Mobile Latency Bottleneck' },
          ],
        },
      ],
    },

    'scene-ad-burnout': {
      id: 'scene-ad-burnout',
      title: 'Ad Budget Depletion',
      location: 'Marketing Finance Dashboard',
      narrative: [
        'Pumping more budget into broad social video ads drove 15,000 more clicks, but paid conversions barely moved. Blended CAC surged to $145.',
        'Vikram calls an immediate budget freeze: "We cannot afford vanity metrics. We must fix the conversion leak."',
      ],
      choices: [
        {
          id: 'choice-pivot-funnel',
          text: 'Join Nina in auditing landing page speed, user drop-offs, and value proposition messaging.',
          destinationId: 'scene-funnel-inspection',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'unlockClue', target: 'data-session-recordings', description: 'Identified Mobile Funnel Friction' },
          ],
        },
      ],
    },

    'scene-funnel-inspection': {
      id: 'scene-funnel-inspection',
      title: 'Phase 2: Fixing Friction & Intent Mismatch',
      location: 'CRO Testing Suite',
      narrative: [
        'Reviewing Nina’s session recordings reveals two fatal problems: 1) The landing page takes 4.8 seconds to load on mobile because of uncompressed assets, causing a 68% immediate drop-off.',
        '2) The ad promised "Unlimited Free Invoicing," but the landing page asks for a credit card and restricts free usage to 3 invoices, destroying user trust.',
      ],
      choices: [
        {
          id: 'choice-cro-overhaul',
          text: 'Optimize mobile asset compression (<1.2s load time), align landing page copy with clear, honest pricing ("14-day free trial, no card required"), and create tailored landing pages by search intent.',
          destinationId: 'scene-allocation-decision',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-stripe-cohort-retention', description: 'Discovered High Search Cohort LTV' },
            { type: 'setFlag', target: 'flag-cro-overhaul-executed', value: true },
          ],
        },
      ],
    },

    'scene-allocation-decision': {
      id: 'scene-allocation-decision',
      title: 'Phase 3: The $15,000 Capital Allocation Blueprint',
      location: 'CMO Strategy Office',
      narrative: [
        'With landing page performance fixed and visitor conversion up from 1.4% to 4.8% on clean traffic, you must allocate the $15,000 monthly marketing budget across three potential channel strategies to maximize durable, profitable growth.',
      ],
      choices: [
        {
          id: 'choice-balanced-intent-strategy',
          text: 'Allocate $8,000 to High-Intent Search & Comparison Terms (CAC $52, LTV $260), $4,000 to Targeted Contractor Community Partnerships & Educational Content, and $3,000 to Warm Retargeting of engaged visitors.',
          destinationId: 'ending-growth-mastery',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-channel-unit-economics', description: 'Formulated 5.3x LTV:CAC Model' },
            { type: 'setFlag', target: 'flag-balanced-growth-chosen', value: true },
          ],
        },
        {
          id: 'choice-all-in-viral-social',
          text: 'Allocate 100% ($15,000) to TikTok and Meta viral influencer sponsorships to try and create a viral sensation.',
          destinationId: 'ending-speculative-bust',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-influencer-gamble-chosen', value: true }],
        },
      ],
    },

    'ending-growth-mastery': {
      id: 'ending-growth-mastery',
      title: 'Profitable Scalable Growth Engine',
      location: 'SaaSify Town Hall',
      isEnding: true,
      endingId: 'ending-growth-mastery',
      narrative: [
        'By fixing mobile load latency, aligning honest positioning, and reallocating capital into high-intent search and contractor community partnerships, SaaSify achieved an overall blended CAC of $48 against an LTV of $255 (a 5.3x LTV:CAC ratio).',
        'Monthly recurring revenue expanded 48% within 90 days with positive unit economics.',
      ],
      choices: [],
    },

    'ending-speculative-bust': {
      id: 'ending-speculative-bust',
      title: 'Burned Budget & Negative Unit Economics',
      location: 'Boardroom',
      isEnding: true,
      endingId: 'ending-speculative-bust',
      narrative: [
        'The influencer sponsorships generated vanity buzz and low-quality signups, but 94% of users churned before their first billing cycle.',
        'The $15,000 budget was exhausted with zero sustainable payback.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-growth-mastery': {
      id: 'ending-growth-mastery',
      title: 'Growth Strategy Review: Master Marketer',
      tier: 'triumph',
      badge: 'Master Growth Strategist',
      summary: 'You grounded growth in rigorous unit economics, eliminated technical funnel friction, and matched honest value propositions to high-intent customer segments.',
      narrative: [
        'SaaSify achieved profitable unit economics and a durable 5.3x return on capital.',
        'Your strategy eliminated deceptive marketing practices and built genuine product-led retention.',
      ],
      criteriaReview: {
        theTruth: 'Broad social ads were unprofitable due to low intent, mobile page latency, and misleading promotional claims.',
        yourDeduction: 'You resolved page speed friction, aligned transparent pricing, and allocated capital into high-intent search and partnerships.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Meta ad campaigns had an underwater CAC of $118 vs $43 retained LTV',
          'Uncompressed video assets caused 68% of mobile visitors to bounce in 4.8 seconds',
          'High-intent search traffic generated 6x higher retention than broad viral ads',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary growth marketing: prioritizing unit economics and intent over vanity traffic.',
      },
    },
    'ending-speculative-bust': {
      id: 'ending-speculative-bust',
      title: 'Growth Review: Vanity Metric Trap',
      tier: 'partial',
      badge: 'Vanity Metric Trap',
      summary: 'You chased top-of-funnel impressions and viral hype without validating retention cohorts or economic viability.',
      narrative: [
        'Speculative marketing exhausted capital with negligible retained revenue.',
        'The business was forced to cut marketing budgets drastically.',
      ],
      criteriaReview: {
        theTruth: 'B2B SaaS requires high customer retention and sustainable payback periods.',
        yourDeduction: 'You gambled marketing budget on viral B2C social buzz.',
        accuracyRate: 35,
        keyDiscoveries: ['Generated top-of-funnel traffic'],
        missedOpportunities: ['Neglected cohort retention, unit economics, and search intent'],
        reasoningCritique: 'Do not confuse temporary traffic spikes with durable business growth.',
      },
    },
  },
};

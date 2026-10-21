import { Episode } from '@/features/episodes/types';

export const skillsMarketingCampaignOptimizationEpisode: Episode = {
  id: 'skills-marketing-campaign-optimization',
  version: '1.0.0',
  title: 'The Cold-Audience Pivot: Campaign Optimization',
  subtitle: 'Diagnose ad creative fatigue, master A/B testing statistical significance, and restore campaign ROAS.',
  synopsis:
    'You are the Senior Digital Acquisition Specialist at Lumina Health, a direct-to-consumer ergonomics and wellness company. The flagship campaign for Lumina’s ergonomic desk setup generated a stellar 4.2x Return on Ad Spend (ROAS) during its first 60 days, but has recently crashed to 1.1x ROAS. Ad frequency has spiked to 6.8 impressions per user, click-through rates have fallen by 58%, and the marketing VP is threatening to pull the plug on paid channels. Diagnose creative saturation, design a statistically valid A/B test matrix, and pivot to fresh cold audiences.',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Monday Sprint Optimization, 10:00 AM',
  location: 'Lumina Growth Marketing Studio, Austin',
  tags: ['#Skill Trees', 'Digital Marketing', 'ROAS Optimization', 'A/B Testing', 'Creative Strategy', 'Audience Segmentation'],
  initialScenarioId: 'scene-roas-collapse',

  suspects: {
    'stakeholder-jordan': {
      id: 'stakeholder-jordan',
      name: 'Jordan Hayes',
      role: 'Creative Director',
      age: 35,
      initialDemeanor: 'Protective of existing video assets, resistant to changing the brand aesthetic.',
      motive: 'Protect his award-winning 60-second cinematic brand film.',
      opportunity: 'Controls creative production pipelines and visual style guidelines.',
      alibi: 'The cinematic film won an industry design award and had great initial engagement.',
      weakness: 'Fails to recognize that even brilliant creative assets suffer audience fatigue after multiple exposures.',
      associatedClueIds: ['data-creative-fatigue-chart'],
      interrogationSummary:
        'Jordan insists: "Our cinematic video is our brand identity. If people aren\'t buying, the algorithm must be broken, not our creative storytelling."',
    },
    'stakeholder-chloe': {
      id: 'stakeholder-chloe',
      name: 'Chloe Kim',
      role: 'Marketing Analytics & Experimentation Lead',
      age: 31,
      initialDemeanor: 'Rigorous, data-driven, relentless on sample sizes and statistical significance.',
      motive: 'Prevent the team from making knee-jerk decisions based on underpowered sample sizes.',
      opportunity: 'Manages marketing attribution models and A/B testing calculation tools.',
      alibi: 'Pointed out that a recent 24-hour test had only 14 conversions, rendering its \'statistical win\' completely invalid.',
      weakness: 'Can be overly cautious, wanting weeks of observation before declaring a clear test winner.',
      associatedClueIds: ['data-audience-overlap-matrix', 'data-sample-size-calculator'],
      interrogationSummary:
        'Chloe warns: "Never call an A/B test winner after 48 hours or with fewer than 100 conversions per variant. You are just measuring statistical noise."',
    },
    'stakeholder-tarek': {
      id: 'stakeholder-tarek',
      name: 'Tarek Mansour',
      role: 'VP of Growth (Mentor)',
      age: 44,
      initialDemeanor: 'Results-oriented, commercially focused, values clear systematic experimentation over guesswork.',
      motive: 'Restore blended campaign ROAS to >3.0x to hit quarterly EBITDA targets.',
      opportunity: 'Approves weekly budget allocations across Meta, Google, and YouTube.',
      alibi: 'Successfully scaled Lumina from zero to $10M in revenue using structured scientific testing.',
      weakness: 'Under intense board pressure to maintain rapid customer acquisition pace.',
      associatedClueIds: ['data-pivot-testing-framework'],
      interrogationSummary:
        'Tarek advises: "When a winning ad dies of fatigue, don\'t panic. Systematically test new creative hooks, angle variations, and lookalike/broad audience expansions with pre-calculated sample sizes."',
    },
  },

  clues: {
    'data-creative-fatigue-chart': {
      id: 'data-creative-fatigue-chart',
      title: 'Ad Frequency vs. CTR Saturation Curve',
      category: 'digital',
      shortDescription: 'Average ad frequency reached 6.8 impressions per user, while CTR dropped from 3.1% to 0.72%.',
      detailedAnalysis:
        'Average ad frequency reached 6.8 impressions per unique user in the core lookalike audience, while CTR dropped from 3.1% to 0.72% and Cost Per Click rose from $0.65 to $2.40.',
      locationFound: 'Meta Ads Manager Analytics',
      tags: ['Ad Saturation', 'CTR', 'Creative Fatigue'],
    },
    'data-audience-overlap-matrix': {
      id: 'data-audience-overlap-matrix',
      title: 'Audience Overlap & Self-Competition Diagnostic',
      category: 'digital',
      shortDescription: 'Three separate active ad sets are bidding against the exact same 2.5 million US office workers.',
      detailedAnalysis:
        'Three separate active ad sets are bidding against the exact same 2.5 million US office workers, driving up CPMs through internal auction competition.',
      locationFound: 'Audience Insights Tool',
      tags: ['Audience Overlap', 'Auction Bidding', 'CPM'],
    },
    'data-sample-size-calculator': {
      id: 'data-sample-size-calculator',
      title: 'Statistical Power & Minimum Sample Size Sheet',
      category: 'document',
      shortDescription: 'Calculates that achieving 95% statistical confidence requires at least 4,200 visitors and 92 conversions per variant.',
      detailedAnalysis:
        'Calculates that at Lumina’s 2.2% baseline conversion rate, an A/B test requires at least 4,200 visitors and 92 conversions per variant to achieve 95% statistical confidence (p < 0.05).',
      locationFound: 'Experimentation Notion Workspace',
      tags: ['A/B Testing', 'Statistical Power', 'Data Science'],
    },
    'data-pivot-testing-framework': {
      id: 'data-pivot-testing-framework',
      title: 'Hook & Angle Creative Matrix Blueprint',
      category: 'document',
      shortDescription: 'Framework testing 4 distinct message angles across broad open audiences.',
      detailedAnalysis:
        'Framework testing 4 distinct message angles (Ergonomic Pain Relief, Productivity, Minimalist Design, and Physical Therapist Endorsement) across broad open audiences.',
      locationFound: 'Growth Strategy Playbook',
      tags: ['Creative Strategy', 'Angle Testing', 'Scaling'],
    },
  },

  connections: [
    {
      id: 'conn-fatigue-overlap-insight',
      clueA: 'data-creative-fatigue-chart',
      clueB: 'data-audience-overlap-matrix',
      deductionTitle: 'Ad Saturation and Auction Self-Competition Drive ROAS Collapse',
      deductionText:
        'High frequency (6.8x) combined with overlapping ad sets proves that internal self-bidding and ad blindness caused the collapse from 4.2x to 1.1x ROAS.',
      unlockedFlag: 'flag-ad-fatigue-proved',
    },
    {
      id: 'conn-scientific-matrix-solution',
      clueA: 'data-sample-size-calculator',
      clueB: 'data-pivot-testing-framework',
      deductionTitle: 'Multi-Angle Testing with Statistical Power Restores Predictable ROAS',
      deductionText:
        'Testing 4 distinct psychological angles on broad consolidated audiences while respecting minimum conversion sample sizes reliably unlocks cold audience growth.',
      unlockedFlag: 'flag-creative-matrix-ready',
    },
  ],

  hypotheses: {
    'hypo-scientific-creative-matrix': {
      id: 'hypo-scientific-creative-matrix',
      title: 'Strategy: Broad Audience Consolidation with 4-Angle Creative Testing',
      accusedSuspectId: 'stakeholder-jordan',
      motiveSummary: 'Stop self-competition by consolidating ad sets and test diverse emotional hooks with statistical rigor.',
      methodSummary: 'Deploy 4 psychological angles (Pain, Routine, Expert, Aesthetic) with 90+ conversions per cell before scaling.',
      requiredClueIds: ['data-creative-fatigue-chart', 'data-sample-size-calculator', 'data-pivot-testing-framework'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-growth-experimenter',
      failureEndingId: 'ending-auction-shock',
    },
  },

  scenarios: {
    'scene-roas-collapse': {
      id: 'scene-roas-collapse',
      title: 'Phase 1: The ROAS Crash',
      location: 'Growth Marketing War Room',
      narrative: [
        'Tarek calls an urgent meeting: "Our flagship campaign just crashed to 1.1x ROAS. We spent $24,000 this week and barely broke even."',
        'Jordan thinks the Facebook algorithm is broken; Chloe says we are exhausting our audience. How do you approach the problem?',
      ],
      choices: [
        {
          id: 'choice-increase-budget-push',
          text: 'Triple the daily ad budget to force the algorithm to push through the slump.',
          destinationId: 'scene-budget-bleed',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-tripled-ad-budget', value: true }],
        },
        {
          id: 'choice-audit-frequency-and-audiences',
          text: 'Inspect ad frequency metrics, audience overlap, and creative retention graphs with Chloe to diagnose fatigue.',
          destinationId: 'scene-audience-audit',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-creative-fatigue-chart', description: 'Diagnosed 6.8x Ad Saturation Frequency' },
            { type: 'unlockClue', target: 'data-audience-overlap-matrix', description: 'Identified Self-Bidding Audience Overlap' },
          ],
        },
      ],
    },

    'scene-budget-bleed': {
      id: 'scene-budget-bleed',
      title: 'Accelerated Burn',
      location: 'Campaign Dashboard',
      narrative: [
        'Tripling the budget pushed frequency to 9.2 impressions per user. Negative comments started appearing on the ad: "Stop showing me this video!"',
        'ROAS dropped to 0.7x. Tarek intervenes to freeze the ad set.',
      ],
      choices: [
        {
          id: 'choice-diagnose-overlap',
          text: 'Run the audience overlap analysis and creative breakdown.',
          destinationId: 'scene-audience-audit',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-audience-overlap-matrix', description: 'Analyzed Auction Overlap' },
          ],
        },
      ],
    },

    'scene-audience-audit': {
      id: 'scene-audience-audit',
      title: 'Phase 2: Overlap & Experimentation Design',
      location: 'Analytics Evaluation Suite',
      narrative: [
        'The data reveals two huge leaks: 1) Three ad sets are competing against each other in the auction, driving CPMs up 45%.',
        '2) The single 60-second video has been viewed by 92% of the retargeting pool. Chloe presents the sample size calculator: we need a structured creative test with sufficient statistical power.',
      ],
      choices: [
        {
          id: 'choice-consolidate-and-matrix-test',
          text: 'Consolidate overlapping ad sets to stop self-bidding, open up Broad Targeting, and design a 4-Angle Creative Matrix (Pain Relief, Productivity, Physical Therapist Review, Minimalist Design) testing short 15-second hooks.',
          destinationId: 'scene-execution-matrix',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-sample-size-calculator', description: 'Calculated Statistical Power Sample Sizes' },
            { type: 'unlockClue', target: 'data-pivot-testing-framework', description: 'Built 4-Angle Creative Matrix' },
          ],
        },
      ],
    },

    'scene-execution-matrix': {
      id: 'scene-execution-matrix',
      title: 'Phase 3: The Scaling Strategy',
      location: 'Lumina Media Buying Studio',
      narrative: [
        'The new creative variants ran for 7 days, achieving 4,800 visitors and 112 conversions per cell.',
        'The \'Physical Therapist Posture Audit\' UGC hook achieved a 3.8x ROAS on broad audiences, while the \'Morning Productivity Routine\' hook hit 3.4x ROAS. How do you scale this winning structure?',
      ],
      choices: [
        {
          id: 'choice-scientific-scaling-protocol',
          text: 'Scale the two winning hooks by 20% budget increases every 72 hours, feed new creative iterations into the test pipeline weekly, and maintain consolidated Broad Targeting to allow the platform machine-learning engine to optimize bidding.',
          destinationId: 'ending-growth-experimenter',
          consequencePreview: 'Forensic',
          effects: [{ type: 'setFlag', target: 'flag-gradual-scaling-chosen', value: true }],
        },
        {
          id: 'choice-10x-budget-immediately',
          text: 'Instantly increase the budget 10x (from $1,000/day to $10,000/day) on the winning video in a single click.',
          destinationId: 'ending-auction-shock',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-10x-budget-shock', value: true }],
        },
      ],
    },

    'ending-growth-experimenter': {
      id: 'ending-growth-experimenter',
      title: 'Systematic Growth & ROAS Triumph',
      location: 'Lumina Executive Suite',
      isEnding: true,
      endingId: 'ending-growth-experimenter',
      narrative: [
        'Lumina’s campaign ROAS rebounded from 1.1x to 3.6x across $180,000 in monthly ad spend.',
        'By establishing a weekly creative iteration cadence and respecting statistical significance thresholds, the marketing team transformed from chaotic guesswork into a predictable, scientific growth engine.',
      ],
      choices: [],
    },

    'ending-auction-shock': {
      id: 'ending-auction-shock',
      title: 'Auction Reset & Volatility Spike',
      location: 'Marketing Operations Lab',
      isEnding: true,
      endingId: 'ending-auction-shock',
      narrative: [
        'The 10x sudden budget jump reset the auction bidding algorithm. CPA spiked by 240%, and the ad set entered prolonged learning instability, erasing the performance gains of the new creative.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-growth-experimenter': {
      id: 'ending-growth-experimenter',
      title: 'Growth Marketing Review: Master Campaign Optimizer',
      tier: 'triumph',
      badge: 'Master Campaign Optimizer',
      summary: 'You diagnosed creative fatigue and audience overlap, enforced statistical significance standards, and established a scalable, data-backed creative testing pipeline.',
      narrative: [
        'Lumina achieved record commercial acquisition with predictable 3.6x ROAS.',
        'Your scientific testing methodology eliminated emotional creative debates and grounded marketing in statistical rigor.',
      ],
      criteriaReview: {
        theTruth: 'The campaign slump was driven by audience fatigue from a single over-exposed video asset and internal auction self-competition.',
        yourDeduction: 'You consolidated ad sets, designed a 4-angle psychological testing matrix, enforced 90+ conversion sample sizes, and scaled gradually.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Ad frequency touched 6.8x, triggering ad blindness and 58% lower CTR',
          'Three overlapping ad sets were driving up CPMs through self-competition',
          'Enforced statistical sample sizes (92 conversions per variant at p < 0.05)',
          'Scaled winning creative by 20% increments every 72 hours without disrupting algorithmic bidding',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary performance marketing: combining creative psychological diversity with empirical statistical power.',
      },
    },
    'ending-auction-shock': {
      id: 'ending-auction-shock',
      title: 'Growth Review: Impatient Scaling Trap',
      tier: 'partial',
      badge: 'Bidding Shock Trap',
      summary: 'You found the winning creative but destroyed algorithmic bidding efficiency through erratic budget shocks.',
      narrative: [
        'Drastic budget spikes reset machine learning bidding algorithms and inflated customer acquisition costs.',
        'Impatient scaling turned an experimentation victory into operational chaos.',
      ],
      criteriaReview: {
        theTruth: 'Algorithmic ad auctions require gradual budget adjustments to maintain bidding stability.',
        yourDeduction: 'You attempted to scale the winning creative with a 10x overnight budget increase.',
        accuracyRate: 45,
        keyDiscoveries: ['Identified winning creative angles'],
        missedOpportunities: ['Failed to follow disciplined algorithmic budget pacing'],
        reasoningCritique: 'Always scale high-performing ad sets gradually to prevent auction learning phase resets.',
      },
    },
  },
};

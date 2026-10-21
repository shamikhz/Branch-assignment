import { Episode } from '@/features/episodes/types';

export const personalCriticalThinkingBiasEpisode: Episode = {
  id: 'personal-critical-thinking-bias',
  version: '1.0.0',
  title: 'The Sunk-Cost Pitch: Cognitive Bias & Decisions',
  subtitle: 'Overcome confirmation bias, the sunk-cost fallacy, and groupthink in a $500,000 project audit.',
  synopsis:
    'You are appointed Lead Strategic Evaluator at Veloce Digital. For the past nine months, the company has poured $520,000 and 8,000 engineering hours into "Project Aegis"—a proprietary in-house content management and digital asset engine. The project has missed three sequential delivery milestones, customer pilot feedback is overwhelmingly negative, and modern off-the-shelf headless alternatives cost $800/month. Yet the steering committee insists: "We have invested too much money and reputation to stop now." Dissect cognitive biases, apply counterfactual thinking, and present an objective post-mortem and pivot proposal.',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Monday Executive Strategy Committee, 1:00 PM',
  location: 'Veloce Digital Headquarters Boardroom, Chicago',
  tags: ['#Skill Trees', 'Personal Development', 'Critical Thinking', 'Cognitive Bias', 'Sunk Cost Fallacy', 'Decision Making'],
  initialScenarioId: 'scene-steering-defense',

  suspects: {
    'stakeholder-victor': {
      id: 'stakeholder-victor',
      name: 'Victor Sterling',
      role: 'Senior Vice President of Product & Original Project Sponsor',
      age: 51,
      initialDemeanor: 'Authoritative, defensive, emotionally invested in his brainchild.',
      motive: 'Protect his corporate standing and avoid admitting that a half-million dollar initiative was ill-conceived.',
      opportunity: 'Chairs the executive steering committee and controls discretionary R&D budgets.',
      alibi: 'Claims that with just $150,000 more and another 3 months, Project Aegis will "finally leapfrog the market."',
      weakness: 'Blinded by the Sunk Cost Fallacy and Confirmation Bias, seeking only positive validation.',
      associatedClueIds: ['data-project-burn-rate', 'data-cherrypicked-pilot-survey'],
      interrogationSummary:
        'Victor insists: "We\'ve already spent $520,000! If we cancel now, every single dollar is completely wasted. We must finish what we started."',
    },
    'stakeholder-nadia-dev': {
      id: 'stakeholder-nadia-dev',
      name: 'Nadia Rossi',
      role: 'Lead Full-Stack Engineer on Project Aegis',
      age: 33,
      initialDemeanor: 'Tired, cynical, secretly relieved someone is finally looking at the real engineering telemetry.',
      motive: 'Escape the endless cycle of patching an over-engineered legacy codebase.',
      opportunity: 'Has maintained the internal bug tracker and maintenance cost logs.',
      alibi: 'Has privately warned about architectural dead-ends for five months.',
      weakness: 'Hesitated to speak truth to power in committee meetings due to fear of career retribution.',
      associatedClueIds: ['data-saas-alternative-benchmark'],
      interrogationSummary:
        'Nadia reveals: "We are spending 80% of every sprint fixing custom rendering bugs that standard open-source tools solved six years ago. It\'s an endless money pit."',
    },
    'stakeholder-dr-elias': {
      id: 'stakeholder-dr-elias',
      name: 'Dr. Elias Thorne',
      role: 'Professor of Behavioral Economics & Board Advisor (Mentor)',
      age: 58,
      initialDemeanor: 'Calm, Socratic, fascinated by cognitive traps and institutional groupthink.',
      motive: 'Teach emerging leaders how to untangle emotional attachment from rational forward-looking decision-making.',
      opportunity: 'Advises the CEO on corporate governance and strategic capital allocation.',
      alibi: 'Published landmark papers on escalation of commitment and the sunk cost fallacy.',
      weakness: 'Speaks in conceptual frameworks that need translation into practical business recommendations.',
      associatedClueIds: ['data-counterfactual-decision-matrix'],
      interrogationSummary:
        'Dr. Elias notes: "The money spent in the past is gone forever, whether you continue or stop. A rational decision looks strictly forward: what is the best use of the next dollar and the next hour?"',
    },
  },

  clues: {
    'data-project-burn-rate': {
      id: 'data-project-burn-rate',
      title: 'Project Aegis Cumulative Spend & Burn Audit',
      category: 'document',
      shortDescription: 'Total spend: $520,000. Burn: $58k/mo. Projected cost to reach MVP parity: $220,000 over 5 months.',
      detailedAnalysis:
        'Total spend to date: $520,000. Current burn rate: $58,000/month. Projected cost to achieve basic MVP parity: $220,000 over 5 additional months. Exposes that continuing the project requires substantial new capital, completely invalidating the idea that finishing it is "cheap".',
      locationFound: 'Corporate Finance Portal',
      tags: ['Budget Audit', 'Burn Rate', 'Sunk Cost'],
    },
    'data-cherrypicked-pilot-survey': {
      id: 'data-cherrypicked-pilot-survey',
      title: 'Customer Pilot Feedback Survey (Full vs Executive Excerpt)',
      category: 'document',
      shortDescription: 'Victor highlighted 1 positive quote. Full survey of 40 beta users showed an NPS of -48.',
      detailedAnalysis:
        'Victor\'s slide showed 1 positive quote ("Great custom color scheme"). The full raw survey of 40 beta users showed an NPS of -48, with 34 users citing extreme slowness and broken image uploads. Textbook confirmation bias: filtering out 34 negative data points to highlight a single flattering anecdote.',
      locationFound: 'User Research Repository',
      tags: ['Confirmation Bias', 'User Research', 'NPS Survey'],
    },
    'data-saas-alternative-benchmark': {
      id: 'data-saas-alternative-benchmark',
      title: 'Commercial Headless CMS & Asset Benchmark',
      category: 'document',
      shortDescription: 'Industry headless platform costs $9,600/year, integrates in 2 weeks, with 99.99% SLA.',
      detailedAnalysis:
        'Industry-standard headless platform (Contentful/Sanity enterprise tier) costs $9,600/year, integrates in 2 weeks, includes 99.99% SLA, and eliminates all in-house maintenance. Demonstrates extreme opportunity cost: continuing Aegis costs 22x more than buying a superior established enterprise solution.',
      locationFound: 'Solutions Architecture Wiki',
      tags: ['Opportunity Cost', 'SaaS Benchmark', 'Architecture'],
    },
    'data-counterfactual-decision-matrix': {
      id: 'data-counterfactual-decision-matrix',
      title: 'Clean-Slate Reversibility & Opportunity Cost Framework',
      category: 'document',
      shortDescription: 'The "Clean-Slate Test": If you arrived today with $220,000 in fresh capital, would you invest it in Aegis?',
      detailedAnalysis:
        'The "Clean-Slate Test": If you arrived at Veloce Digital today with $220,000 in fresh capital and zero history, would you invest it in Project Aegis or allocate it to core customer acquisition and an off-the-shelf CMS? Decisive cognitive tool that strips away historical emotional investment and forces rational forward evaluation.',
      locationFound: 'Executive Decision Playbook',
      tags: ['Clean-Slate Test', 'Critical Thinking', 'Counterfactuals'],
    },
  },

  connections: [
    {
      id: 'conn-sunk-cost-opportunity',
      clueA: 'data-project-burn-rate',
      clueB: 'data-saas-alternative-benchmark',
      deductionTitle: 'Continuing Aegis Costs 22x More Than Enterprise SaaS Alternatives',
      deductionText:
        'Comparing the projected $220,000 completion cost with a $9,600/yr SaaS platform proves continuing development is financially irrational regardless of past expenses.',
      unlockedFlag: 'flag-opportunity-cost-proven',
    },
    {
      id: 'conn-confirmation-bias-clean-slate',
      clueA: 'data-cherrypicked-pilot-survey',
      clueB: 'data-counterfactual-decision-matrix',
      deductionTitle: 'Clean-Slate Evaluation Neutralizes Cherry-Picked Confirmation Bias',
      deductionText:
        'Evaluating the full -48 NPS dataset through a fresh investment lens confirms no rational newcomer would spend $220,000 on this architecture.',
      unlockedFlag: 'flag-clean-slate-confirmed',
    },
  ],

  hypotheses: {
    'hypo-critical-thinking-mastery': {
      id: 'hypo-critical-thinking-mastery',
      title: 'Strategic Verdict: Graceful Pivot to Commercial SaaS and Talent Redeployment',
      accusedSuspectId: 'stakeholder-victor',
      motiveSummary: 'Sunset Project Aegis without personal blame, adopt commercial headless CMS, and redeploy engineering talent.',
      methodSummary: 'Demonstrate the Clean-Slate opportunity cost, reveal full telemetry, and protect capital and executive dignity.',
      requiredClueIds: ['data-project-burn-rate', 'data-cherrypicked-pilot-survey', 'data-saas-alternative-benchmark'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-critical-thinking-master',
      failureEndingId: 'ending-sunk-cost-ruin',
    },
  },

  scenarios: {
    'scene-steering-defense': {
      id: 'scene-steering-defense',
      title: 'Phase 1: The Escalation of Commitment',
      location: 'Veloce Digital Headquarters Boardroom',
      narrative: [
        'Victor Sterling clicks through his presentation: "Project Aegis has encountered a few minor scheduling adjustments, but we have already spent $520,000 on this architecture.',
        'We cannot walk away now—that would make the last nine months a complete waste. I am requesting an additional $180,000 and 4 months to complete Phase 1." Several committee members nod along passively. How do you assess Victor\'s reasoning?',
      ],
      choices: [
        {
          id: 'choice-surrender-to-sunk-cost',
          text: 'Agree with Victor: since the company already spent $520k, it would be wasteful to quit before seeing it through.',
          destinationId: 'scene-bankruptcy-spiral',
        },
        {
          id: 'choice-probe-forward-assumptions',
          text: 'Apply critical thinking: decouple past unrecoverable expenses from forward-looking ROI, and audit true user feedback and engineering maintenance costs with Nadia and Dr. Elias.',
          destinationId: 'scene-bias-forensics',
        },
      ],
    },

    'scene-bankruptcy-spiral': {
      id: 'scene-bankruptcy-spiral',
      title: 'The Bottomless Pit',
      location: 'Veloce Digital Headquarters Boardroom',
      narrative: [
        'The committee approved Victor\'s $180,000. Four months later, Project Aegis missed its fourth milestone, burn rate reached $700,000, and competitors released modern AI features while Veloce was stuck debugging custom CMS forms.',
        'Dr. Elias calls an urgent retrospective to break the cycle of cognitive bias.',
      ],
      choices: [
        {
          id: 'choice-confront-biases',
          text: 'Confront the cognitive biases driving the project and conduct an empirical evaluation.',
          destinationId: 'scene-bias-forensics',
        },
      ],
    },

    'scene-bias-forensics': {
      id: 'scene-bias-forensics',
      title: 'Phase 2: Confirmation Bias & The Clean-Slate Test',
      location: 'Veloce Digital Executive Strategy Room',
      narrative: [
        'Dr. Elias and Nadia share the full user research and benchmark files. Victor had cherry-picked one flattering quote, while the full survey showed an NPS of -48.',
        'Furthermore, Nadia reveals that commercial headless platforms provide more features for $9,600/year than Aegis would provide after another $220,000 in custom development.',
      ],
      choices: [
        {
          id: 'choice-apply-clean-slate-test',
          text: 'Apply the "Clean-Slate Reversibility Test": Frame the choice to the committee not as "quitting our project", but as "how would we invest $220,000 today if we had just started fresh with zero historical baggage?"',
          destinationId: 'scene-pivot-presentation',
        },
        {
          id: 'choice-public-humiliation',
          text: 'Directly accuse Victor of deliberately fabricating slides and demand he be disciplined for incompetence.',
          destinationId: 'scene-political-backlash',
        },
      ],
    },

    'scene-political-backlash': {
      id: 'scene-political-backlash',
      title: 'Defensive Retrenchment',
      location: 'Veloce Digital Boardroom',
      narrative: [
        'Attacking Victor personally caused him to dig his heels in deeper and rally his political allies on the board. The discussion degenerated into personal grievances rather than strategic economics.',
        'Dr. Elias intervenes to bring the conversation back to objective data.',
      ],
      choices: [
        {
          id: 'choice-pivot-to-objective-matrix',
          text: 'Refocus on the objective Clean-Slate Decision Matrix.',
          destinationId: 'scene-pivot-presentation',
        },
      ],
    },

    'scene-pivot-presentation': {
      id: 'scene-pivot-presentation',
      title: 'Phase 3: The Rational Pivot Proposal',
      location: 'Veloce Digital Executive Boardroom',
      narrative: [
        'You stand before the steering committee for the final vote. How do you present the strategic verdict for Project Aegis to maximize clarity and alignment?',
      ],
      choices: [
        {
          id: 'choice-graceful-pivot-plan',
          text: 'Propose the Graceful Pivot Plan: Gracefully sunset Project Aegis, celebrate the team\'s learnings, migrate to a commercial enterprise headless CMS ($9,600/yr), and redeploy the $220,000 and Nadia\'s senior engineering team to our high-margin core customer-facing products.',
          destinationId: 'ending-critical-thinking-master',
        },
        {
          id: 'choice-continue-blindly',
          text: 'Recommend spending the full $220,000 on Aegis to avoid hurting anyone\'s feelings.',
          destinationId: 'ending-sunk-cost-ruin',
        },
      ],
    },

    'ending-critical-thinking-master': {
      id: 'ending-critical-thinking-master',
      title: 'Rational Clarity & Strategic Triumph',
      location: 'Veloce Digital Executive Boardroom',
      narrative: [
        'The committee voted 6-1 to adopt the Graceful Pivot Plan. Migrating to the commercial platform took just 3 weeks.',
        'Nadia\'s team was reassigned to the core customer analytics engine, which shipped on time and generated $1.4M in new ARR. Victor thanked you privately for framing the pivot in a way that preserved his dignity and protected company capital.',
      ],
      choices: [],
    },

    'ending-sunk-cost-ruin': {
      id: 'ending-sunk-cost-ruin',
      title: 'The Sunk-Cost Quagmire',
      location: 'Veloce Digital Executive Boardroom',
      narrative: [
        'Veloce burned an additional $220,000 on Project Aegis before quietly abandoning it a year later.',
        'Nadia and two other senior engineers resigned out of frustration with poor leadership.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-critical-thinking-master': {
      id: 'ending-critical-thinking-master',
      title: 'Critical Thinking Review: Master Strategic Evaluator',
      tier: 'triumph',
      badge: 'Master of Critical Thinking & Strategic Clarity',
      summary:
        'You diagnosed confirmation bias and the sunk-cost fallacy, applied the Clean-Slate test, and delivered a graceful, high-ROI pivot that protected capital, morale, and executive dignity.',
      narrative: [
        'You exposed unrecoverable sunk costs without attacking executive dignity.',
        'Your Clean-Slate analysis unlocked $220k in capital savings and redeployed talent to high-growth areas.',
      ],
      criteriaReview: {
        theTruth: 'Project Aegis was economically obsolete compared to modern $9.6k/yr SaaS headless alternatives, kept alive only by the sunk-cost fallacy.',
        yourDeduction: 'You uncovered the full -48 NPS survey, proved commercial SaaS superiority, and formulated a dignified pivot plan.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Continuing Aegis would burn $220,000 more versus $9,600/year for enterprise headless SaaS',
          'Executive presentation suffered from confirmation bias by omitting 34 negative pilot reviews',
          'Applying the Clean-Slate Reversibility test detached emotional inertia from capital allocation',
          'Redeploying in-house engineering to core customer features produced $1.4M in new ARR',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Flawless strategic evaluation: decoupling past expenditure from future capital allocation.',
      },
    },
    'ending-sunk-cost-ruin': {
      id: 'ending-sunk-cost-ruin',
      title: 'Critical Thinking Review: Cognitive Inertia Trap',
      tier: 'compromised',
      badge: 'Sunk-Cost Trap',
      summary:
        'You succumbed to executive confirmation bias and social proof, perpetuating an unviable project at massive financial and organizational expense.',
      narrative: [
        'Throwing good money after bad resulted in severe capital destruction and engineering attrition.',
      ],
      criteriaReview: {
        theTruth: 'Unrecoverable historical spending should never justify ongoing capital allocation to obsolete architectures.',
        yourDeduction: 'You recommended continuing development to justify past expenses.',
        accuracyRate: 15,
        keyDiscoveries: ['Identified project budget constraints'],
        missedOpportunities: ['Failed to decouple past spend from forward-looking ROI and examine SaaS benchmarks'],
        reasoningCritique: 'Never let past investment dictate future commitment when objective evidence reveals obsolescence.',
      },
    },
  },
};

import { Episode } from '@/features/episodes/types';

export const skillsNegotiationDealScopingEpisode: Episode = {
  id: 'skills-negotiation-deal-scoping',
  version: '1.0.0',
  title: 'Enterprise Deal Scoping: High-Stakes Negotiation',
  subtitle: 'Learn how to handle tough client demands, protect company profits, and negotiate fair terms for both sides.',
  synopsis:
    'You are a Senior Solutions Director at SecureCloud, negotiating a major annual enterprise software deal with Global Logistics Corp. In the final meeting, their tough procurement head demands a heavy 35% discount, unlimited free custom coding, and harsh penalty clauses. Learn how to negotiate smartly: defend your value, trade smart concessions instead of cutting prices, and close a profitable deal that keeps both sides happy.',
  estimatedMinutes: 22,
  difficulty: 'Advanced',
  timeSetting: 'Thursday Final Procurement Review, 3:00 PM',
  location: 'Global Logistics Corp Boardroom & Zoom Conference, Chicago',
  tags: ['#Skill Trees', '#Negotiation', 'Enterprise Sales', 'Contract Scoping', 'BATNA', 'Procurement Strategy'],
  initialScenarioId: 'scene-procurement-ambush',

  suspects: {
    'stakeholder-sterling': {
      id: 'stakeholder-sterling',
      name: 'Arthur Sterling',
      role: 'Chief Procurement Officer (Global Logistics Corp)',
      age: 54,
      initialDemeanor: 'Serious and intimidating, expert in high-pressure bargaining tactics.',
      motive: 'Get maximum price cuts and concessions to hit his annual savings targets.',
      opportunity: 'Has final signing authority to approve or reject the contract before the deadline.',
      alibi: 'Claims a rival vendor offered similar features at 40% lower cost.',
      weakness: 'His own internal teams strongly prefer SecureCloud and dislike the competitor’s outdated software.',
      associatedClueIds: ['data-procurement-redlines'],
      interrogationSummary:
        'Arthur leans forward: "We like your product, but your price is too high. Give us a 35% discount and free custom engineering, or we will sign with your competitor tomorrow."',
    },
    'stakeholder-nadia': {
      id: 'stakeholder-nadia',
      name: 'Nadia Thorne',
      role: 'VP of Customer Success & Operations (SecureCloud)',
      age: 38,
      initialDemeanor: 'Practical and firm, protective of her engineering and support teams.',
      motive: 'Stop the sales team from making impossible delivery promises that overburden engineers.',
      opportunity: 'Responsible for post-sale implementation and delivering on contract promises.',
      alibi: 'Proved with numbers that agreeing to unlimited custom coding will cause a financial loss on the deal.',
      weakness: 'Tends to walk away from deals quickly rather than exploring creative middle grounds.',
      associatedClueIds: ['data-service-margin-model'],
      interrogationSummary:
        'Nadia warns: "If you give them unlimited custom integrations and penalty clauses, our engineering team will collapse. Stand firm on standard service packages."',
    },
    'stakeholder-grant': {
      id: 'stakeholder-grant',
      name: 'Grant Holloway',
      role: 'Executive Vice President of Sales & Negotiation Mentor',
      age: 50,
      initialDemeanor: 'Calm, strategic, seasoned in structured business negotiations.',
      motive: 'Teach team leaders how to negotiate based on true business value rather than desperate discounting.',
      opportunity: 'Advises executive leadership on deal thresholds and acceptable terms.',
      alibi: 'Has successfully negotiated hundreds of major business contracts globally.',
      weakness: 'Sometimes lets discussions drag out to test the client’s patience.',
      associatedClueIds: ['data-batna-concession-matrix', 'data-competitor-intelligence'],
      interrogationSummary:
        'Grant advises: "Never give a discount without asking for something back in return. If they demand lower prices, adjust the project scope, payment schedules, or agreement length instead."',
    },
  },

  clues: {
    'data-procurement-redlines': {
      id: 'data-procurement-redlines',
      title: 'Arthur Sterling’s Contract Redline Markup',
      category: 'document',
      shortDescription: 'Demands 35% price cut to $247,000, 99.999% uptime penalties, and 500 hours of custom engineering.',
      detailedAnalysis:
        'Demands: 1) 35% price cut to $247,000; 2) 99.999% uptime with 20% invoice rebates for any 15-minute outage; 3) 500 hours of unbilled custom engineering.',
      locationFound: 'Contract Lifecycle Management System',
      tags: ['Procurement', 'Contract Terms', 'Redlines'],
    },
    'data-competitor-intelligence': {
      id: 'data-competitor-intelligence',
      title: 'VaultTech Competitive Pricing & Technical Intelligence',
      category: 'document',
      shortDescription: 'Intelligence confirms VaultTech was officially disqualified by Global Logistics Corp’s InfoSec team.',
      detailedAnalysis:
        'Intelligence confirms VaultTech quoted low on software licenses, but added mandatory $150k implementation fees, and failed Global Logistics Corp’s InfoSec audit due to lack of ISO-27001.',
      locationFound: 'Sales Intelligence Portal',
      tags: ['Competitive Intelligence', 'BATNA', 'Enterprise Sales'],
    },
    'data-service-margin-model': {
      id: 'data-service-margin-model',
      title: 'SecureCloud Deal Margin & Delivery Cost Model',
      category: 'document',
      shortDescription: 'At $247,000 with 500 custom engineering hours, gross margin drops to 12%, making the deal unprofitable.',
      detailedAnalysis:
        'At $380,000, gross margin is 78%. At $247,000 with 500 custom engineering hours, gross margin drops to 12%, making the account unprofitable after support overhead.',
      locationFound: 'Deal Desk Financial Model',
      tags: ['Deal Margins', 'Gross Margin', 'Financial Modeling'],
    },
    'data-batna-concession-matrix': {
      id: 'data-batna-concession-matrix',
      title: 'Symmetric Value Concession Exchange Framework',
      category: 'document',
      shortDescription: 'Structured trade-offs: Offer 10% discount ONLY in exchange for 3-year commitment and upfront billing.',
      detailedAnalysis:
        'Structured trade-offs: Offer a 10% discount ONLY in exchange for: 1) 3-year multi-year commitment, 2) Upfront annual payment, 3) Co-marketing case study rights, and 4) Standardized implementation scope with standard 99.9% SLA.',
      locationFound: 'Executive Negotiation Playbook',
      tags: ['Principled Negotiation', 'Concession Trading', 'BATNA'],
    },
  },

  connections: [
    {
      id: 'conn-procurement-bluff',
      clueA: 'data-procurement-redlines',
      clueB: 'data-competitor-intelligence',
      deductionTitle: 'Procurement Competitor Threat Is an Unsubstantiated Bluff',
      deductionText:
        'Uncovering that VaultTech failed the customer’s internal InfoSec audit proves Arthur has no viable alternative vendor and cannot walk away from SecureCloud.',
      unlockedFlag: 'flag-procurement-bluff-exposed',
    },
    {
      id: 'conn-principled-margin-trade',
      clueA: 'data-service-margin-model',
      clueB: 'data-batna-concession-matrix',
      deductionTitle: 'Symmetric Concessions Protect Margins and Secure Contracted ARR',
      deductionText:
        'Trading a modest 10% discount for a 3-year multi-year contract with annual upfront payments protects 74% gross margins while securing $1.026M in guaranteed revenue.',
      unlockedFlag: 'flag-principled-trade-ready',
    },
  ],

  hypotheses: {
    'hypo-principled-enterprise-agreement': {
      id: 'hypo-principled-enterprise-agreement',
      title: 'Negotiation Strategy: 3-Year Upfront Commitment with Symmetric Value Concessions',
      accusedSuspectId: 'stakeholder-sterling',
      motiveSummary: 'Trade a 10% price concession strictly in return for a 3-year locked contract, upfront annual billing, and standardized delivery scope.',
      methodSummary: 'Give procurement a visible cost-saving win while protecting SecureCloud’s service delivery capacity and cash flow.',
      requiredClueIds: ['data-procurement-redlines', 'data-competitor-intelligence', 'data-batna-concession-matrix'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-negotiation-mastery',
      failureEndingId: 'ending-missed-opportunity',
    },
  },

  scenarios: {
    'scene-procurement-ambush': {
      id: 'scene-procurement-ambush',
      title: 'Phase 1: The Procurement Hardball',
      location: 'Executive Boardroom, Chicago',
      narrative: [
        'You take your seat in the Chicago boardroom across from Arthur Sterling.',
        'He slides the contract back across the mahogany table, covered in red markup: "We like your software, but your price is completely detached from reality. We need a 35% discount, 500 hours of custom engineering support, and full financial penalties for any downtime. VaultTech has already agreed to these terms. If you can\'t meet us here, we sign with VaultTech before 5:00 PM." How do you respond?',
      ],
      choices: [
        {
          id: 'choice-cave-to-demands',
          text: 'Immediately accept the 35% price cut and custom engineering commitments to guarantee winning the marquee logo today.',
          destinationId: 'scene-margin-disaster',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-unilateral-surrender', value: true }],
        },
        {
          id: 'choice-probe-and-anchor',
          text: 'Maintain emotional composure, resist reacting defensively, and probe behind the position: "Arthur, help me understand which specific business outcomes and timeline constraints are driving this requirement."',
          destinationId: 'scene-counterparty-discovery',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-procurement-redlines', description: 'Examined Procurement Anchoring Redlines' },
          ],
        },
      ],
    },

    'scene-margin-disaster': {
      id: 'scene-margin-disaster',
      title: 'The Winner’s Curse',
      location: 'Operations Review Room',
      narrative: [
        'You signed Arthur’s redlines. Six months later, SecureCloud has burned 600 engineering hours on bespoke integrations, the account has generated a $70,000 net loss, and Arthur is demanding penalty rebates for a 10-minute maintenance window.',
        'Nadia calls an emergency deal audit.',
      ],
      choices: [
        {
          id: 'choice-reset-negotiation',
          text: 'Confront the reality of deal margins and renegotiate boundaries with Grant’s assistance.',
          destinationId: 'scene-counterparty-discovery',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-service-margin-model', description: 'Audited Deal Delivery Costs' },
          ],
        },
      ],
    },

    'scene-counterparty-discovery': {
      id: 'scene-counterparty-discovery',
      title: 'Phase 2: Uncovering Leverage & Bluffs',
      location: 'Executive Recess Lounge',
      narrative: [
        'During the recess, your intelligence confirms that VaultTech was officially disqualified by Global Logistics Corp’s security committee last week due to lack of ISO-27001 compliance.',
        'Arthur’s threat to sign with VaultTech is an empty bluff. Furthermore, their warehouse operations team has already scheduled their Q1 rollout around SecureCloud.',
      ],
      choices: [
        {
          id: 'choice-trade-concessions-symmetrically',
          text: 'Use the BATNA Concession Matrix: acknowledge their budget constraints, re-anchor our unmatched compliance security, and propose a structured trade of price for contractual value.',
          destinationId: 'scene-negotiation-round',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-competitor-intelligence', description: 'Discovered Competitor Disqualification' },
            { type: 'unlockClue', target: 'data-batna-concession-matrix', description: 'Formulated Concession Trade-offs' },
          ],
        },
      ],
    },

    'scene-negotiation-round': {
      id: 'scene-negotiation-round',
      title: 'Phase 3: The Closing Trade',
      location: 'Global Logistics Corp Boardroom',
      narrative: [
        'Arthur leans back: "Alright, let\'s cut the theater. We need to present something to our CFO by 5:00 PM that shows significant cost discipline. What is your final proposal?" How do you package the final agreement?',
      ],
      choices: [
        {
          id: 'choice-principled-win-win-package',
          text: 'Present the Principled Enterprise Package: Agree to a 10% price adjustment (to $342,000/yr) ONLY if Global Logistics Corp signs a 3-year locked agreement with annual upfront billing, standardized API deployment scope, industry-standard 99.9% SLA, and global press release/case study rights.',
          destinationId: 'ending-negotiation-mastery',
          consequencePreview: 'Deductive',
          effects: [{ type: 'setFlag', target: 'flag-principled-agreement-closed', value: true }],
        },
        {
          id: 'choice-absolute-stonewall',
          text: 'Refuse to budge a single penny or modify a single comma on the contract, demanding $380,000 exactly with zero flexibility.',
          destinationId: 'ending-missed-opportunity',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-negotiation-deadlocked', value: true }],
        },
      ],
    },

    'ending-negotiation-mastery': {
      id: 'ending-negotiation-mastery',
      title: 'Principled Agreement & Long-Term Partnership',
      location: 'SecureCloud Executive Floor',
      isEnding: true,
      endingId: 'ending-negotiation-mastery',
      narrative: [
        'Arthur smiled and extended his hand: "You drive a hard bargain, but you understand business. Done."',
        'The 3-year contract secured $1.026M in high-margin ARR with upfront annual cash flow. Nadia’s delivery team onboarded the client seamlessly under standard scopes, and Global Logistics Corp became SecureCloud’s premier case study at the annual tech summit.',
      ],
      choices: [],
    },

    'ending-missed-opportunity': {
      id: 'ending-missed-opportunity',
      title: 'Contract Collapse & Lost Pipeline',
      location: 'Corporate Conference Center',
      isEnding: true,
      endingId: 'ending-missed-opportunity',
      narrative: [
        'Refusing to provide any path for procurement to demonstrate cost savings forced Arthur to re-open the vendor tender.',
        'The sales cycle dragged out for another 9 months, and the deal was eventually split between multiple niche vendors.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-negotiation-mastery': {
      id: 'ending-negotiation-mastery',
      title: 'Negotiation Mastery Review: Principled Deal Architect',
      tier: 'triumph',
      badge: 'Master Commercial Negotiator',
      summary: 'You resisted high-pressure procurement intimidation, uncovered counterparty bluffs without personal confrontation, and traded concessions symmetrically to close a $1.02M profitable contract.',
      narrative: [
        'SecureCloud closed its largest commercial partnership of the fiscal year.',
        'Your principled negotiation protected engineering delivery teams while securing upfront multi-year cash flow.',
      ],
      criteriaReview: {
        theTruth: 'Global Logistics Corp desperately needed SecureCloud’s compliance capabilities, and Arthur’s competitor threat was an unviable bluff.',
        yourDeduction: 'You anchored on value, verified counterparty constraints, and traded price concessions symmetrically for contract length and upfront payment.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Arthur’s 35% discount demand was an aggressive procurement anchoring tactic',
          'VaultTech was disqualified due to failing ISO-27001 InfoSec requirements',
          'Grant’s concession framework enabled trading price for a 3-year contract ($1.026M ARR)',
          'Standardized delivery scopes protected service team gross margins at 74%',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary principled negotiation: turning procurement confrontation into a high-trust commercial partnership.',
      },
    },
    'ending-missed-opportunity': {
      id: 'ending-missed-opportunity',
      title: 'Negotiation Review: Rigid Inflexibility Trap',
      tier: 'partial',
      badge: 'Rigid Obstinacy Trap',
      summary: 'You confused firm principles with stubborn rigidity, failing to create a win-win structure that met procurement’s political needs.',
      narrative: [
        'Total inflexibility forced procurement to delay the project and seek alternatives.',
        'The sales cycle stretched by 9 months without generating revenue.',
      ],
      criteriaReview: {
        theTruth: 'Procurement officers must show tangible cost discipline to their executive committees.',
        yourDeduction: 'You refused to trade non-monetary value concessions.',
        accuracyRate: 40,
        keyDiscoveries: ['Stood firm on list pricing'],
        missedOpportunities: ['Failed to secure multi-year commitment or upfront payment concessions'],
        reasoningCritique: 'Negotiation requires finding creative trades that deliver value to both parties.',
      },
    },
  },
};

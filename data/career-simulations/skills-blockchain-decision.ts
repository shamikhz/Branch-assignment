import { Episode } from '@/features/episodes/types';

export const skillsBlockchainDecisionEpisode: Episode = {
  id: 'skills-blockchain-decision',
  version: '1.0.0',
  title: 'The Ledger Verdict: Blockchain vs Architecture',
  subtitle: 'Evaluate whether a multi-party pharmaceutical supply chain genuinely requires a blockchain or a cryptographic ledger.',
  synopsis:
    'You are a Principal Solutions Architect at MediChain Consortium, an alliance of four pharmaceutical manufacturers and twelve hospital networks. Counterfeit medication is entering secondary distribution channels. The steering committee wants to invest $3.5M to deploy an Ethereum-based private blockchain with custom tokens to track drug serial numbers. Analyze transaction throughput, data privacy regulations (HIPAA/GDPR right to be forgotten), validator governance, and operational costs. Deliver an evidence-based architectural verdict.',
  estimatedMinutes: 20,
  difficulty: 'Advanced',
  timeSetting: 'Friday Architecture Review Board, 1:30 PM',
  location: 'MediChain Consortium Headquarters, Zurich',
  tags: ['#Skill Trees', 'Blockchain', 'System Architecture', 'Distributed Systems', 'Data Privacy', 'Technology Evaluation'],
  initialScenarioId: 'scene-blockchain-proposal',

  suspects: {
    'stakeholder-gaston': {
      id: 'stakeholder-gaston',
      name: 'Gaston Delacroix',
      role: 'Consortium Innovation Director & Blockchain Evangelist',
      age: 43,
      initialDemeanor: 'Passionate, buzzword-heavy, convinced decentralized Web3 tokens will revolutionize pharma.',
      motive: 'Position MediChain as a pioneering blockchain case study to win industry innovation awards.',
      opportunity: 'Has drafted the $3.5M vendor RFP for an external smart contract development firm.',
      alibi: 'Claims public or consortium blockchain is the only way to achieve "zero trust without central gatekeepers."',
      weakness: 'Overlooks transaction gas fees, immutable privacy violations, and physical-to-digital reality gaps.',
      associatedClueIds: ['data-vendor-rfp-proposal'],
      interrogationSummary:
        'Gaston declares: "Traditional databases require trusting a central entity. With a blockchain and smart contracts, trust is mathematically obsolete!"',
    },
    'stakeholder-dr-ingrid': {
      id: 'stakeholder-dr-ingrid',
      name: 'Dr. Ingrid Lindholm',
      role: 'Hospital Network Chief Compliance Officer',
      age: 50,
      initialDemeanor: 'Pragmatic, legally cautious, concerned about patient prescription data privacy under GDPR.',
      motive: 'Ensure absolute compliance with GDPR and medical data confidentiality laws.',
      opportunity: 'Can legally block hospital participation if patient identifiers are exposed or immutable.',
      alibi: 'Pointed out that GDPR grants patients the legal \'Right to Erasure\', which directly conflicts with immutable block storage.',
      weakness: 'Initially unfamiliar with cryptographic zero-knowledge proofs and cryptographic hashing.',
      associatedClueIds: ['data-gdpr-privacy-conflict', 'data-throughput-benchmark'],
      interrogationSummary:
        'Dr. Lindholm warns: "If patient prescription IDs or hospital dispensation records are written permanently to an immutable blockchain ledger, we face millions in regulatory fines under GDPR Article 17."',
    },
    'stakeholder-marcus-lin': {
      id: 'stakeholder-marcus-lin',
      name: 'Marcus Lin',
      role: 'Distinguished Distributed Systems Architect (Mentor)',
      age: 46,
      initialDemeanor: 'Deeply technical, calm, veteran of high-throughput distributed database engineering.',
      motive: 'Guide the consortium toward the simplest, most reliable, and cost-effective architecture that solves the actual problem.',
      opportunity: 'Deep knowledge of Merkle trees, public-key PKI signatures, and verifiable append-only data stores.',
      alibi: 'Designed high-throughput clearing houses processing 50,000 transactions per second without blockchain.',
      weakness: 'Prefers quiet code reviews over political committee debates.',
      associatedClueIds: ['data-cryptographic-ledger-benchmark'],
      interrogationSummary:
        'Marcus emphasizes: "A blockchain does not solve the Oracle Problem. If someone sticks a counterfeit barcode on a fake bottle, an immutable blockchain simply records counterfeit data with immutable permanence. Solve the physical authentication first, then choose the ledger."',
    },
  },

  clues: {
    'data-vendor-rfp-proposal': {
      id: 'data-vendor-rfp-proposal',
      title: 'Web3 Vendor Consulting RFP & Cost Estimate',
      category: 'document',
      shortDescription: 'Quote of $3.5M initial build plus $600k/year in node validator hosting and gas fee subsidies.',
      detailedAnalysis:
        'Quote of $3.5M initial build plus $600k/year in node validator hosting and gas fee subsidies for an enterprise Ethereum fork processing 15 transactions per second.',
      locationFound: 'Consortium Procurement Folder',
      tags: ['Procurement', 'Web3 Costs', 'RFP'],
    },
    'data-throughput-benchmark': {
      id: 'data-throughput-benchmark',
      title: 'Pharma Supply Chain Throughput Requirements',
      category: 'digital',
      shortDescription: 'The consortium generates 8,400 bottle scan events per second during peak hours; the proposed blockchain caps at 45 TPS.',
      detailedAnalysis:
        'The consortium generates 8,400 bottle scan events per second during peak distribution hours across 12 countries. The proposed blockchain caps at 45 TPS without centralized Layer-2 rollups.',
      locationFound: 'Logistics Operations Dashboard',
      tags: ['Throughput', 'Latency', 'TPS'],
    },
    'data-gdpr-privacy-conflict': {
      id: 'data-gdpr-privacy-conflict',
      title: 'GDPR / HIPAA Legal Memorandum on Immutability',
      category: 'document',
      shortDescription: 'Storing patient health data permanently on an immutable ledger violates the GDPR Right to Erasure.',
      detailedAnalysis:
        'Storing any personal health data or pseudonymized keys permanently violates the GDPR \'Right to Erasure\'. Only transient off-chain storage with cryptographic hashes can satisfy statutory mandates.',
      locationFound: 'Legal & Regulatory Archive',
      tags: ['GDPR', 'Compliance', 'Privacy'],
    },
    'data-cryptographic-ledger-benchmark': {
      id: 'data-cryptographic-ledger-benchmark',
      title: 'Verifiable Cryptographic Merkle Log Architecture',
      category: 'document',
      shortDescription: 'An append-only Merkle-tree cryptographic log with digital signatures achieves 25,000 TPS at 1/10th the cost.',
      detailedAnalysis:
        'An append-only Merkle-tree cryptographic log with digital signatures achieves 25,000 TPS, zero gas fees, verifiable tampering detection, and full GDPR compliance at 1/10th the cost.',
      locationFound: 'Engineering Architecture Whitepaper',
      tags: ['Cryptography', 'Merkle Trees', 'Distributed Systems'],
    },
  },

  connections: [
    {
      id: 'conn-blockchain-mismatch',
      clueA: 'data-vendor-rfp-proposal',
      clueB: 'data-throughput-benchmark',
      deductionTitle: 'Blockchain Cannot Meet Supply Chain Throughput Demands',
      deductionText:
        'Comparing the 8,400 TPS operational demand with the 45 TPS blockchain limit proves the proposed ledger would paralyze warehouse distribution logistics.',
      unlockedFlag: 'flag-throughput-mismatch-proved',
    },
    {
      id: 'conn-merkle-superiority',
      clueA: 'data-gdpr-privacy-conflict',
      clueB: 'data-cryptographic-ledger-benchmark',
      deductionTitle: 'Cryptographic Log Satisfies GDPR and Outperforms Blockchain',
      deductionText:
        'Verifiable append-only Merkle logs provide cryptographic tamper-evidence and auditability while remaining fully compliant with GDPR Right to Erasure at 1/8th the cost.',
      unlockedFlag: 'flag-merkle-superiority-proved',
    },
  ],

  hypotheses: {
    'hypo-cryptographic-log': {
      id: 'hypo-cryptographic-log',
      title: 'Architectural Verdict: Verifiable Append-Only Cryptographic Log with HSM Signatures',
      accusedSuspectId: 'stakeholder-gaston',
      motiveSummary: 'Reject the $3.5M blockchain proposal in favor of high-throughput verifiable cryptographic Merkle trees.',
      methodSummary: 'Achieve 25,000 TPS, eliminate gas fees, and maintain full GDPR compliance with tamper-evident cryptography.',
      requiredClueIds: ['data-throughput-benchmark', 'data-gdpr-privacy-conflict', 'data-cryptographic-ledger-benchmark'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-architectural-mastery',
      failureEndingId: 'ending-speculative-collapse',
    },
  },

  scenarios: {
    'scene-blockchain-proposal': {
      id: 'scene-blockchain-proposal',
      title: 'Phase 1: The $3.5M Blockchain Pitch',
      location: 'Consortium Boardroom',
      narrative: [
        'Gaston Delacroix opens the consortium steering committee with a dramatic slide deck: "Counterfeit medicine is infiltrating pharmacies. We must deploy an enterprise blockchain with custom MediTokens to record every pharmaceutical transfer. It guarantees decentralization and unhackable trust."',
        'The vendor quote is $3.5M. Marcus Lin and Dr. Ingrid Lindholm look deeply skeptical. What is your initial investigative action?',
      ],
      choices: [
        {
          id: 'choice-rubber-stamp-blockchain',
          text: 'Approve the $3.5M blockchain proposal immediately to maintain our status as an innovative Web3 leader.',
          destinationId: 'scene-hype-disaster',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-approved-blockchain', value: true }],
        },
        {
          id: 'choice-conduct-technical-audit',
          text: 'Benchmark the required transaction throughput, physical anti-counterfeit mechanics (the Oracle problem), and GDPR regulatory constraints.',
          destinationId: 'scene-throughput-analysis',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-vendor-rfp-proposal', description: 'Analyzed Vendor Web3 RFP Quote' },
            { type: 'unlockClue', target: 'data-throughput-benchmark', description: 'Benchmarked 8,400 TPS Demand' },
          ],
        },
      ],
    },

    'scene-hype-disaster': {
      id: 'scene-hype-disaster',
      title: 'The Bottleneck Collapse',
      location: 'Hospital Warehouse Bay',
      narrative: [
        'Six months into the pilot, hospital warehouses are blocked with pallets of medicine because the blockchain node network takes 8 minutes to confirm each batch of scans.',
        'Gas fees exceeded $40,000 in a single week. Hospital directors are furious. Marcus Lin calls an emergency technical intervention.',
      ],
      choices: [
        {
          id: 'choice-re-evaluate-architecture',
          text: 'Halt the blockchain deployment and benchmark realistic distributed architectures.',
          destinationId: 'scene-throughput-analysis',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-throughput-benchmark', description: 'Measured Real Throughput Deficits' },
          ],
        },
      ],
    },

    'scene-throughput-analysis': {
      id: 'scene-throughput-analysis',
      title: 'Phase 2: Throughput & Privacy Reality Check',
      location: 'Technical Evaluation Suite',
      narrative: [
        'Analyzing telemetry data reveals the consortium requires 8,400 scan verifications per second at peak times—far beyond the proposed consortium blockchain’s 45 TPS limit.',
        'Worse, Dr. Lindholm points out that storing patient-linked pharmacy dispenses on an immutable chain violates GDPR’s Right to Erasure.',
      ],
      choices: [
        {
          id: 'choice-evaluate-merkle-log',
          text: 'Investigate a Verifiable Append-Only Cryptographic Log (Merkle Tree with mutual TLS and PKI signatures) with off-chain encrypted medical data.',
          destinationId: 'scene-architectural-decision',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-gdpr-privacy-conflict', description: 'Audited GDPR Article 17 Conflicts' },
            { type: 'unlockClue', target: 'data-cryptographic-ledger-benchmark', description: 'Benchmarked Merkle Tree Architecture' },
          ],
        },
      ],
    },

    'scene-architectural-decision': {
      id: 'scene-architectural-decision',
      title: 'Phase 3: The Architectural Verdict',
      location: 'Consortium Architecture Board',
      narrative: [
        'You present the final evaluation to the consortium board. Which architectural path do you recommend for MediChain’s counterfeit drug tracking system?',
      ],
      choices: [
        {
          id: 'choice-pragmatic-cryptographic-ledger',
          text: 'Reject the $3.5M blockchain proposal. Deploy a Verifiable Cryptographic Append-Only Ledger (using Merkle Trees and hardware security module PKI signatures) with physical tamper-evident RFID serialization. Total cost: $450k; Throughput: 25,000 TPS; 100% GDPR compliant.',
          destinationId: 'ending-architectural-mastery',
          consequencePreview: 'Deductive',
          effects: [{ type: 'setFlag', target: 'flag-merkle-architecture-chosen', value: true }],
        },
        {
          id: 'choice-force-blockchain-regardless',
          text: 'Proceed with the Ethereum private blockchain and create a speculative crypto token for consortium members.',
          destinationId: 'ending-speculative-collapse',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-blockchain-token-chosen', value: true }],
        },
      ],
    },

    'ending-architectural-mastery': {
      id: 'ending-architectural-mastery',
      title: 'Verifiable Integrity & Practical Success',
      location: 'MediChain Operations Center',
      isEnding: true,
      endingId: 'ending-architectural-mastery',
      narrative: [
        'MediChain successfully deployed the cryptographic Merkle log system in 4 months for under $500k.',
        'Processing 12,000 scans per second with sub-10ms response times, the system identified and intercepted 14 counterfeit shipments in its first quarter while remaining fully compliant with GDPR and HIPAA.',
      ],
      choices: [],
    },

    'ending-speculative-collapse': {
      id: 'ending-speculative-collapse',
      title: 'Hype-Driven Failure',
      location: 'Consortium Audit Chamber',
      isEnding: true,
      endingId: 'ending-speculative-collapse',
      narrative: [
        'MediChain spent $3.5M on the blockchain token platform.',
        'It could not keep up with warehouse logistics scan speeds, node governance devolved into political infighting, and the consortium dissolved after 18 months of wasted capital.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-architectural-mastery': {
      id: 'ending-architectural-mastery',
      title: 'Architecture Review: Master Systems Evaluator',
      tier: 'triumph',
      badge: 'Master Systems Evaluator',
      summary: 'You distinguished genuine technical requirements from speculative hype, solved the real physical and data verification problem, and saved millions in unnecessary capital expenditure.',
      narrative: [
        'MediChain established a global model for tamper-evident supply chain tracking.',
        'Your architectural evaluation protected patient privacy, delivered 25,000 TPS, and saved over $3M in capital expenditure.',
      ],
      criteriaReview: {
        theTruth: 'Multi-party supply chains with established legal accountability need tamper-evident cryptographic verification, not decentralized token mining.',
        yourDeduction: 'You benchmarked throughput limits, identified GDPR erasure blockers, and deployed a high-speed Merkle log.',
        accuracyRate: 100,
        keyDiscoveries: [
          '8,400 TPS scan requirements far exceeded blockchain throughput limits',
          'GDPR Right to Erasure prohibited immutable patient prescription storage',
          'Verifiable Merkle logs delivered 25,000 TPS with zero gas fees at 1/8th the cost',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary solutions architecture: choosing technology based on verifiable constraints rather than speculative hype.',
      },
    },
    'ending-speculative-collapse': {
      id: 'ending-speculative-collapse',
      title: 'Architecture Review: Hype Trap',
      tier: 'partial',
      badge: 'Speculative Hype Trap',
      summary: 'You chose technology based on buzzwords rather than constraints, latency requirements, and regulatory realities.',
      narrative: [
        'The blockchain project collapsed under operating costs and throughput latency.',
        'The consortium dissolved in acrimony and missed its regulatory deadlines.',
      ],
      criteriaReview: {
        theTruth: 'Decentralized blockchains are poorly suited for high-frequency low-latency logistics scanning.',
        yourDeduction: 'You approved an unfeasible Web3 token system without evaluating throughput or privacy laws.',
        accuracyRate: 35,
        keyDiscoveries: ['Identified counterfeit tracking goals'],
        missedOpportunities: ['Failed to analyze TPS throughput and GDPR Right to Erasure compliance'],
        reasoningCritique: 'Never commit architecture to buzzwords without rigorous performance benchmarking.',
      },
    },
  },
};

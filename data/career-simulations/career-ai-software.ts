import { Episode } from '@/features/episodes/types';

export const careerAiSoftwareEpisode: Episode = {
  id: 'career-ai-software',
  version: '1.0.0',
  title: 'The Scalability Crossroads: Finflow Architecture',
  subtitle: 'Evaluate cloud architecture trade-offs, manage latency budgets, and navigate software engineering career paths.',
  synopsis:
    'You are a Software Engineer at Finflow, a fast-growing fintech startup processing real-time ledger events. Following a marketing surge, database connection pools are maxing out, p99 API latency has jumped from 120ms to 2.4 seconds, and a proposed AI categorization service threatens to overwhelm backend resources. Balance immediate reliability triage with sustainable architectural evolution.',
  estimatedMinutes: 22,
  difficulty: 'Intermediate',
  timeSetting: 'Tuesday Production Incident, 11:30 AM',
  location: 'Finflow Engineering HQ & Cloud Ops Center',
  tags: ['#Career Paths', '#Skill Trees', 'Software Engineering', 'System Architecture', 'Cloud Infrastructure', 'AI Engineering'],
  initialScenarioId: 'scene-incident-alert',

  suspects: {
    'stakeholder-elena': {
      id: 'stakeholder-elena',
      name: 'Elena Rostova',
      role: 'VP of Engineering',
      age: 44,
      initialDemeanor: 'Calm under pressure, intensely focused on system resilience and cloud infrastructure costs.',
      motive: 'Protect engineering uptime SLAs and stop cloud spend from draining the startup runway.',
      opportunity: 'Approves all major infrastructure refactors and vendor commitments.',
      alibi: 'Advocated for horizontal read replicas two months ago, but the project was de-prioritized for growth features.',
      weakness: 'Cautious to a fault; resists adopting new tech stacks until existing infrastructure is completely saturated.',
      associatedClueIds: ['data-cloudwatch-metrics', 'data-infrastructure-bill'],
      interrogationSummary:
        'Elena states: "Do not jump to a distributed microservices rewrite when our primary bottleneck is an unindexed join on transaction ledgers."',
    },
    'stakeholder-tariq': {
      id: 'stakeholder-tariq',
      name: 'Tariq Mansoor',
      role: 'Senior AI Engineer',
      age: 31,
      initialDemeanor: 'Enthusiastic, eager to deploy the latest transformer models directly into the transaction path.',
      motive: 'Showcase cutting-edge ML capabilities to drive user retention.',
      opportunity: 'Author of the new real-time transaction enrichment service.',
      alibi: 'Tested the model locally with single-threaded synthetic requests and achieved 80ms inference times.',
      weakness: 'Overlooked production concurrency; synchronous LLM API calls are blocking the payment gateway event loop.',
      associatedClueIds: ['data-profiler-trace'],
      interrogationSummary:
        'Tariq concedes that calling external LLM APIs synchronously during each webhook request caused the thread exhaustion.',
    },
    'stakeholder-maya': {
      id: 'stakeholder-maya',
      name: 'Maya Patel',
      role: 'Staff Site Reliability Engineer (Mentor)',
      age: 38,
      initialDemeanor: 'Pragmatic, systems-thinker, advocate for observability and decoupled queues.',
      motive: 'Wants to instill sound architectural discipline in junior and mid-level engineers.',
      opportunity: 'Maintains CI/CD pipelines, Kubernetes clusters, and OpenTelemetry instrumentation.',
      alibi: 'Automated alert triggers fired instantly when p99 latency crossed 800ms.',
      weakness: 'Prefers deep diagnostic forensics over rapid temporary patches.',
      associatedClueIds: ['data-database-slow-query-log'],
      interrogationSummary:
        'Maya explains: "Good engineering is not about using the most complex architecture; it is about choosing the right trade-off for your latency, consistency, and team cognitive load."',
    },
  },

  clues: {
    'data-cloudwatch-metrics': {
      id: 'data-cloudwatch-metrics',
      title: 'Production APM Metrics & Connection Pool Graph',
      category: 'digital',
      shortDescription: 'Grafana dashboards show DB connection pool saturation at 100% and 504 Gateway Timeouts.',
      detailedAnalysis:
        'Telemetry reveals that database connection pool exhaustion is causing worker threads to queue, triggering cascading 504 timeouts across the API gateway.',
      locationFound: 'Observability Portal',
      tags: ['Observability', 'APM', 'Connection Pool'],
    },
    'data-profiler-trace': {
      id: 'data-profiler-trace',
      title: 'Distributed Trace #9842',
      category: 'digital',
      shortDescription: 'Jaeger trace shows 2,140ms waiting on external synchronous AI categorization API.',
      detailedAnalysis:
        'Core transaction logic finishes in 30ms, but an inline synchronous HTTP request to Tariq’s AI categorization endpoint holds worker connections open for over 2 seconds.',
      locationFound: 'Telemetry Pipeline',
      tags: ['Distributed Tracing', 'AI Engineering', 'Latency'],
    },
    'data-database-slow-query-log': {
      id: 'data-database-slow-query-log',
      title: 'PostgreSQL Slow Query Log',
      category: 'digital',
      shortDescription: 'Sequential table scans on 4.2 million transaction rows due to missing composite index.',
      detailedAnalysis:
        'Under high transaction concurrency, queries scanning (merchant_id, created_at) sequentially consume 95% of database CPU, compounding the connection starvation.',
      locationFound: 'Database Cluster Replica',
      tags: ['SQL', 'Indexing', 'Database Optimization'],
    },
    'data-infrastructure-bill': {
      id: 'data-infrastructure-bill',
      title: 'Monthly Cloud Infrastructure Bill',
      category: 'document',
      shortDescription: 'Compute costs jumped 62% month-over-month due to unconstrained pod auto-scaling.',
      detailedAnalysis:
        'Kubernetes Horizontal Pod Autoscaler doubled pod instances to compensate for stuck threads, multiplying database connections and cloud hosting expenses.',
      locationFound: 'AWS Cost Management Portal',
      tags: ['Cloud Costs', 'FinOps', 'Kubernetes'],
    },
  },

  connections: [
    {
      id: 'conn-async-ai-solution',
      clueA: 'data-profiler-trace',
      clueB: 'data-cloudwatch-metrics',
      deductionTitle: 'Synchronous AI Workload Blocks Core Payment Gateway',
      deductionText:
        'Isolating the trace proves that offloading AI transaction categorization to an asynchronous message queue will instantly restore p99 latency below 50ms.',
      unlockedFlag: 'flag-async-solution-discovered',
    },
    {
      id: 'conn-db-optimization',
      clueA: 'data-database-slow-query-log',
      clueB: 'data-infrastructure-bill',
      deductionTitle: 'Index Optimization Prevents Compute Cost Sprawl',
      deductionText:
        'Adding composite indexing and PgBouncer connection pooling resolves the database CPU bottleneck without expensive horizontal over-provisioning.',
      unlockedFlag: 'flag-db-optimized',
    },
  ],

  hypotheses: {
    'hypo-decoupled-architecture': {
      id: 'hypo-decoupled-architecture',
      title: 'Architectural Solution: Event-Driven Queue & Database Pooling',
      accusedSuspectId: 'stakeholder-tariq',
      motiveSummary: 'Decouple AI enrichment into background queues and optimize relational database indexes.',
      methodSummary: 'Implement RabbitMQ/SQS for non-critical ML tasks and deploy PgBouncer connection pooling.',
      requiredClueIds: ['data-profiler-trace', 'data-cloudwatch-metrics', 'data-database-slow-query-log'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-master-architect',
      failureEndingId: 'ending-premature-microservices',
    },
  },

  scenarios: {
    'scene-incident-alert': {
      id: 'scene-incident-alert',
      title: 'Phase 1: Production Latency Spike',
      location: 'Finflow Ops War Room',
      narrative: [
        'Pagers buzz across the engineering floor. Finflow payment webhooks are failing with 504 Gateway Timeouts.',
        'Elena Rostova steps into the war room: "Our p99 response time has exploded to 2.4 seconds, and customer checkout sessions are timing out. We need to diagnose the primary bottleneck immediately before merchant cancellations start."',
      ],
      choices: [
        {
          id: 'choice-scale-containers',
          text: 'Immediately double the Kubernetes replica count from 20 to 40 pods to absorb the load.',
          destinationId: 'scene-scale-failure',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-scaled-prematurely', value: true }],
        },
        {
          id: 'choice-inspect-traces',
          text: 'Pull distributed APM traces and database metrics to identify the specific operation holding requests open.',
          destinationId: 'scene-trace-inspection',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-cloudwatch-metrics', description: 'Examined APM Connection Saturation' },
            { type: 'unlockClue', target: 'data-profiler-trace', description: 'Isolated 2,140ms External AI Latency' },
          ],
        },
      ],
    },

    'scene-scale-failure': {
      id: 'scene-scale-failure',
      title: 'Cascading DB Lockup',
      location: 'Cloud Operations Dashboard',
      narrative: [
        'Spinning up 20 more container pods instantly flooded the PostgreSQL database with 800 new connections.',
        'The database CPU spiked to 99%, and now even basic health checks are failing. Maya Patel intervenes: "We poured fuel on the fire. We must look at the distributed traces right now."',
      ],
      choices: [
        {
          id: 'choice-fallback-traces',
          text: 'Roll back container count and inspect distributed trace spans to isolate the delay.',
          destinationId: 'scene-trace-inspection',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-profiler-trace', description: 'Isolated Synchronous AI Delay' },
          ],
        },
      ],
    },

    'scene-trace-inspection': {
      id: 'scene-trace-inspection',
      title: 'Phase 2: Isolating the Critical Path',
      location: 'Jaeger Distributed Tracing Console',
      narrative: [
        'Opening Jaeger distributed tracing, you review sample request #9842. Core authorization took 12ms, ledger deduction took 18ms, but a synchronous external call to Tariq’s new AI categorization endpoint consumed 2,140ms.',
        'Because node worker threads wait synchronously for the AI response, connections remain open for over two seconds per request.',
      ],
      choices: [
        {
          id: 'choice-decouple-async',
          text: 'Decouple the AI enrichment into an asynchronous message queue (RabbitMQ/SQS) with background worker processing.',
          destinationId: 'scene-architecture-review',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-database-slow-query-log', description: 'Inspected Slow Query Logs' },
            { type: 'setFlag', target: 'flag-async-decoupled', value: true },
          ],
        },
        {
          id: 'choice-kill-feature',
          text: 'Completely delete the AI categorization feature and ban machine learning capabilities.',
          destinationId: 'scene-architecture-review',
          consequencePreview: 'Direct',
          effects: [{ type: 'setFlag', target: 'flag-feature-killed', value: true }],
        },
      ],
    },

    'scene-architecture-review': {
      id: 'scene-architecture-review',
      title: 'Phase 3: Long-Term System Blueprint',
      location: 'Architecture Steering Boardroom',
      narrative: [
        'With the immediate incident mitigated by moving enrichment to a background queue, the executive committee meets to decide the technical roadmap for the next two quarters.',
        'The team is debating whether to break the existing modular monolith into 15 distributed microservices, or optimize the modular monolith with database connection pooling (PgBouncer) and read replicas.',
      ],
      choices: [
        {
          id: 'choice-optimized-monolith',
          text: 'Recommend a Pragmatic Modular Monolith: implement PgBouncer connection pooling, add composite indexes, and use read replicas with async events.',
          destinationId: 'ending-master-architect',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-infrastructure-bill', description: 'Audited Cloud Cost Economics' },
            { type: 'setFlag', target: 'flag-master-architect-chosen', value: true },
          ],
        },
        {
          id: 'choice-microservices-rewrite',
          text: 'Advocate for a full microservices rewrite across 15 separate repositories and teams.',
          destinationId: 'ending-premature-microservices',
          consequencePreview: 'Risky',
          effects: [{ type: 'setFlag', target: 'flag-microservices-chosen', value: true }],
        },
      ],
    },

    'ending-master-architect': {
      id: 'ending-master-architect',
      title: 'Architectural Excellence & Uptime Victory',
      location: 'Finflow Main Engineering Floor',
      isEnding: true,
      endingId: 'ending-master-architect',
      narrative: [
        'By decoupling synchronous AI dependencies into background event workers and optimizing database connection pooling with composite indexes, Finflow’s p99 latency dropped to an unprecedented 42ms.',
        'Infrastructure spending was reduced by 35%, and the team avoided the crippling operational overhead of premature microservices.',
      ],
      choices: [],
    },

    'ending-premature-microservices': {
      id: 'ending-premature-microservices',
      title: 'Microservice Sprawl & Overhead Trap',
      location: 'Executive Boardroom',
      isEnding: true,
      endingId: 'ending-premature-microservices',
      narrative: [
        'Finflow embarked on a 9-month distributed microservice rewrite. Feature delivery ground to a halt, distributed tracing became a daily nightmare of cascading network retries, and cloud costs tripled.',
        'The core performance bottleneck had never required microservices in the first place.',
      ],
      choices: [],
    },
  },

  endings: {
    'ending-master-architect': {
      id: 'ending-master-architect',
      title: 'Staff Engineer Assessment: Master System Architect',
      tier: 'triumph',
      badge: 'Master Cloud Architect',
      summary: 'You diagnosed the critical latency path empirically, decoupled synchronous AI workloads, and championed disciplined, high-leverage architectural patterns.',
      narrative: [
        'Finflow achieved record reliability during the holiday peak with 42ms response times.',
        'Your architectural proposal demonstrated the rare maturity of solving performance bottlenecks through targeted systems engineering rather than fashionable buzzword rewrites.',
      ],
      criteriaReview: {
        theTruth: 'The primary bottleneck was synchronous external API blocking coupled with missing database composite indexes.',
        yourDeduction: 'You isolated the synchronous AI latency and decoupled the workload into asynchronous background queues while optimizing connection pooling.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Jaeger trace identified 2,140ms external LLM blocking',
          'Database connection pool starvation triggered cascading 504 timeouts',
          'Composite index remediation eliminated 95% of database CPU utilization',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary systems engineering methodology: measuring before scaling and maintaining pragmatic architecture.',
      },
    },
    'ending-premature-microservices': {
      id: 'ending-premature-microservices',
      title: 'Architecture Review: Premature Complexity Trap',
      tier: 'partial',
      badge: 'Over-Engineered Sprawl',
      summary: 'You confused architectural complexity with architectural maturity, triggering severe organizational and operational friction.',
      narrative: [
        'Premature distributed microservices consumed all engineering velocity for nearly a year.',
        'Network partitioning and distributed transaction failures severely eroded customer trust.',
      ],
      criteriaReview: {
        theTruth: 'A modular monolith with connection pooling and async queues easily satisfied all performance and scale requirements.',
        yourDeduction: 'You opted for a complex multi-repo microservices migration that introduced massive operational debt.',
        accuracyRate: 50,
        keyDiscoveries: ['Identified that AI caused latency'],
        missedOpportunities: ['Failed to recognize that connection pooling and indexing solved the root problem'],
        reasoningCritique: 'Avoid confusing architectural complexity with engineering maturity.',
      },
    },
  },
};

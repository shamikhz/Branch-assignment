import { Episode } from '@/features/episodes/types';

export const careerDataAnalyticsEpisode: Episode = {
  id: 'career-data-analytics',
  version: '1.0.0',
  title: 'The Churn Diagnostic: RetailMetrics Inquiry',
  subtitle: 'Diagnose dropping subscriber retention, inspect cohort data, and challenge misleading executive assumptions.',
  synopsis:
    'As an incoming Data Analyst at RetailMetrics, you are tasked with investigating a sharp 14.2% drop in customer retention over the last two quarters. The executive team blames recent pricing changes, but initial raw data suggests a different story. Query cohort analytics, identify survivorship and attrition biases, cross-examine stakeholder hypotheses, and present an empirical, high-impact retention roadmap.',
  estimatedMinutes: 20,
  difficulty: 'Novice',
  timeSetting: 'Monday Morning Sprint Review, 9:00 AM',
  location: 'RetailMetrics Analytics Suite, London',
  tags: ['#Career Paths', '#Skill Trees', 'Data Analytics', 'SQL', 'Cohort Analysis', 'Business Metrics'],
  initialScenarioId: 'scene-analytics-briefing',

  suspects: {
    'stakeholder-marcus': {
      id: 'stakeholder-marcus',
      name: 'Marcus Vance',
      role: 'Chief Revenue Officer & Executive Stakeholder',
      age: 46,
      initialDemeanor: 'Urgent, assertive, convinced the problem is solely due to the new monthly pricing tier.',
      motive: 'Needs a quick justification to roll back the pricing experiment before the quarterly board audit.',
      opportunity: 'Direct authority over pricing and commercial packaging decisions.',
      alibi: 'Claims his sales team has received hundreds of verbal complaints about pricing.',
      weakness: 'Relies heavily on anecdotal feedback rather than statistically valid customer sampling.',
      associatedClueIds: ['data-pricing-experiment', 'data-sales-call-logs'],
      interrogationSummary:
        'Marcus insists customers are leaving because of the $5 price hike, but when asked for cohort cancellation logs, he admits he only reviewed 12 enterprise escalation tickets.',
    },
    'stakeholder-sarah': {
      id: 'stakeholder-sarah',
      name: 'Sarah Chen',
      role: 'Lead Product Manager (Onboarding & Mobile)',
      age: 33,
      initialDemeanor: 'Data-literate, defensive about recent feature deployments, but collaborative.',
      motive: 'Worried that recent mobile app performance regressions might be flagged as the culprit.',
      opportunity: 'Oversaw the release of the redesigned mobile onboarding funnel in Q2.',
      alibi: 'Points to high Day-1 app installation counts as evidence of onboarding success.',
      weakness: 'Confuses initial sign-up volume with 30-day active feature adoption.',
      associatedClueIds: ['data-onboarding-funnel', 'data-crash-telemetry'],
      interrogationSummary:
        'Sarah highlights that new installs reached an all-time high in May, but concedes that Day-14 completion of the core setup wizard plunged by 38% after version 3.2.',
    },
    'stakeholder-dr-arun': {
      id: 'stakeholder-dr-arun',
      name: 'Dr. Arun Patel',
      role: 'Staff Data Architect & Analytics Mentor',
      age: 51,
      initialDemeanor: 'Patient, methodical, encouraging empirical rigor over executive guesswork.',
      motive: 'Dedicated to establishing high-integrity data governance across the organization.',
      opportunity: 'Full access to raw data pipelines, database replicas, and telemetry schemas.',
      alibi: 'Warned leadership two months ago about uninstrumented drop-off events in the data warehouse.',
      weakness: 'Occasionally overly cautious, preferring prolonged observation over decisive operational calls.',
      associatedClueIds: ['data-sql-query-audit', 'data-cohort-retention-table'],
      interrogationSummary:
        'Dr. Patel advises looking beyond top-line averages: "A single blended metric is like a broken compass. Slice by acquisition channel, device platform, and user tenure."',
    },
  },

  clues: {
    'data-cohort-retention-table': {
      id: 'data-cohort-retention-table',
      title: 'Cohort Retention Matrix (Q1–Q3)',
      category: 'document',
      shortDescription: 'Heatmap showing retention curves broken down by monthly sign-up cohorts.',
      detailedAnalysis:
        'Analysis reveals that existing customers from 2024 cohorts retained at 91% despite the price increase. However, new users acquired in May and June show a steep drop-off between Day 7 and Day 14, plummeting from 78% down to 32% retention.',
      locationFound: 'Snowflake Analytics Dashboard',
      tags: ['Cohort Analysis', 'Retention', 'Empirical Data'],
      contradictsSuspectId: 'stakeholder-marcus',
      contradictionNote: 'Directly refutes Marcus’s theory that older customers are churning due to pricing changes.',
    },
    'data-pricing-experiment': {
      id: 'data-pricing-experiment',
      title: 'A/B Pricing Tier Experiment Log',
      category: 'document',
      shortDescription: 'Conversion and churn records from the $5 price elasticity test.',
      detailedAnalysis:
        'The A/B price elasticity test shows that the $29 vs $24 pricing split had a negligible 1.2% difference in churn rate. Customer lifetime value (LTV) actually increased by 11% among users who successfully completed onboarding.',
      locationFound: 'Revenue Operations Repository',
      tags: ['Pricing', 'A/B Test', 'Revenue'],
      contradictsSuspectId: 'stakeholder-marcus',
      contradictionNote: 'Demonstrates that price elasticity is not the root cause of the broad retention collapse.',
    },
    'data-onboarding-funnel': {
      id: 'data-onboarding-funnel',
      title: 'Mobile Onboarding Drop-off Telemetry',
      category: 'digital',
      shortDescription: 'Step-by-step funnel logs from user sign-up to first meaningful action.',
      detailedAnalysis:
        'Funnel telemetry for Android app version 3.2 reveals that 44% of new users abandon during mandatory phone verification due to a 90-second SMS gateway timeout failure.',
      locationFound: 'Mixpanel Funnel Reports',
      tags: ['Onboarding', 'UX Friction', 'Mobile'],
      contradictsSuspectId: 'stakeholder-sarah',
      contradictionNote: 'Reveals that high sign-up numbers concealed an acute bottleneck in verification delivery.',
    },
    'data-sql-query-audit': {
      id: 'data-sql-query-audit',
      title: 'SQL Attribution Query Script',
      category: 'digital',
      shortDescription: 'The core pipeline query aggregating monthly active retention.',
      detailedAnalysis:
        'Auditing the SQL query shows an unhandled INNER JOIN with the legacy billing table, which silently excluded enterprise customers using quarterly invoicing from the retention denominator.',
      locationFound: 'dbt Model Repository',
      tags: ['SQL', 'Data Quality', 'Pipeline Audit'],
    },
    'data-sales-call-logs': {
      id: 'data-sales-call-logs',
      title: 'Customer Success Escalation Transcripts',
      category: 'testimony',
      shortDescription: 'Qualitative notes from 12 churned account reviews.',
      detailedAnalysis:
        'While 3 accounts mentioned pricing as a factor, 9 stated their junior team members could not complete team invite onboarding on Android devices and abandoned the trial.',
      locationFound: 'Zendesk CRM Archives',
      tags: ['Qualitative', 'Customer Feedback', 'Triangulation'],
    },
    'data-crash-telemetry': {
      id: 'data-crash-telemetry',
      title: 'Sentry Android Crash & Timeout Telemetry',
      category: 'physical',
      shortDescription: 'Error logs for SMS OTP verification services on mobile.',
      detailedAnalysis:
        'Sentry telemetry confirms a 504 Gateway Timeout error on the Twilio SMS bridge, impacting international phone number formats specifically.',
      locationFound: 'Engineering DevOps Monitor',
      tags: ['Telemetry', 'Infrastructure', 'Root Cause'],
    },
  },

  connections: [
    {
      id: 'conn-sms-cohort-drop',
      clueA: 'data-cohort-retention-table',
      clueB: 'data-onboarding-funnel',
      deductionTitle: 'Onboarding Bottleneck Explains Cohort Drop',
      deductionText:
        'Cross-referencing the cohort matrix with mobile onboarding telemetry proves that retention collapse is isolated to new user cohorts failing the SMS verification step, while tenured customers are unaffected by pricing.',
      unlockedFlag: 'flag-root-cause-isolated',
    },
    {
      id: 'conn-pricing-refutation',
      clueA: 'data-pricing-experiment',
      clueB: 'data-sales-call-logs',
      deductionTitle: 'Pricing Is a False Scapegoat',
      deductionText:
        'Qualitative calls coupled with the controlled A/B pricing test prove that price rollback will not solve the churn issue and would unnecessarily sacrifice 11% higher LTV among successful onboarders.',
      unlockedFlag: 'flag-pricing-refuted',
    },
  ],

  hypotheses: {
    'hypo-onboarding-sms-failure': {
      id: 'hypo-onboarding-sms-failure',
      title: 'Root Cause: Mobile SMS Gateway Timeout in v3.2 Onboarding',
      accusedSuspectId: 'stakeholder-sarah',
      motiveSummary: 'Fix the technical SMS gateway timeout and streamline Android onboarding verification.',
      methodSummary:
        'Provide multi-factor email fallback, repair the 504 gateway timeout, and preserve the optimized pricing tier.',
      requiredClueIds: ['data-cohort-retention-table', 'data-onboarding-funnel', 'data-pricing-experiment'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-partial',
    },
    'hypo-pricing-rollback': {
      id: 'hypo-pricing-rollback',
      title: 'Premature Action: Roll Back Pricing to $24 Across All Accounts',
      accusedSuspectId: 'stakeholder-marcus',
      motiveSummary: 'Bow to executive pressure and roll back pricing without addressing the real activation bottleneck.',
      methodSummary: 'Reduces revenue without addressing the 44% SMS onboarding failure.',
      requiredClueIds: ['data-pricing-experiment'],
      disqualifyingClueIds: ['data-cohort-retention-table', 'data-onboarding-funnel'],
      isValidTruth: false,
      flawExplanation: 'Empirical cohort data proves pricing did not cause the drop-off; rolling it back costs $450k ARR while users continue dropping out.',
      successEndingId: 'ending-partial',
      failureEndingId: 'ending-compromised',
    },
  },

  scenarios: {
    'scene-analytics-briefing': {
      id: 'scene-analytics-briefing',
      title: 'Day 1: The Executive Directive',
      location: 'RetailMetrics Conference Room 4B',
      narrative: [
        'You step into the glass-walled conference room on your first morning as a Data Analyst. Marcus Vance, Chief Revenue Officer, slaps a printed slide deck onto the mahogany table.',
        '"Our Q2 churn spiked by fourteen percent," Marcus announces bluntly. "The product team wants to run six weeks of user surveys, but I know what happened. In April we raised subscription rates by five dollars. Customers are voting with their wallets. I want you to run the numbers that justify an immediate rollback to our board by five PM."',
        'Across the table, Dr. Arun Patel raises a calm hand. "Correlation is not causation, Marcus. If we roll back pricing based on gut feeling, we might destroy our unit economics while leaving the real leak unplugged. Let the analyst inspect the raw tables first."',
      ],
      choices: [
        {
          id: 'choice-inspect-cohorts',
          text: 'Query the Snowflake data warehouse and break down retention by monthly sign-up cohorts.',
          destinationId: 'scene-cohort-deepdive',
          consequencePreview: 'Forensic',
          effects: [
            { type: 'unlockClue', target: 'data-cohort-retention-table', description: 'Discovered Cohort Retention Matrix' },
            { type: 'setFlag', target: 'flag-chose-empirical-path', value: true },
          ],
        },
        {
          id: 'choice-audit-pricing-logs',
          text: 'Inspect the historical A/B pricing experiment tables and sales cancellation logs first.',
          destinationId: 'scene-pricing-investigation',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'unlockClue', target: 'data-pricing-experiment', description: 'Examined Pricing A/B Test Logs' },
            { type: 'unlockClue', target: 'data-sales-call-logs', description: 'Retrieved Qualitative Sales Escalations' },
          ],
        },
      ],
    },

    'scene-cohort-deepdive': {
      id: 'scene-cohort-deepdive',
      title: 'The SQL Workbench: Unmasking the Curve',
      location: 'Analytics Team Lab, Terminal 02',
      narrative: [
        'You write a series of dbt queries to partition monthly user retention from January through August. When the cohort heatmap renders on your monitor, the pattern is unmistakable.',
        'Users who joined before April—the very cohort that experienced the price increase on their monthly renewal—show a rock-solid 91% retention curve. They did not churn.',
        'Instead, the collapse is concentrated exclusively among accounts created in May and June. Their retention plummets between Day 7 and Day 14. Something broke for new users right around the Q2 feature release.',
      ],
      choices: [
        {
          id: 'choice-examine-onboarding',
          text: 'Cross-examine Sarah Chen and pull Mixpanel telemetry for the Q2 mobile onboarding redesign.',
          destinationId: 'scene-onboarding-investigation',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'unlockClue', target: 'data-onboarding-funnel', description: 'Uncovered 44% Drop-off in Phone Verification' },
            { type: 'unlockClue', target: 'data-crash-telemetry', description: 'Identified 504 SMS Gateway Timeouts' },
          ],
        },
        {
          id: 'choice-audit-sql-pipeline',
          text: 'Audit the dbt pipeline query itself to confirm there are no calculation or joining errors.',
          destinationId: 'scene-pipeline-verification',
          consequencePreview: 'Direct',
          effects: [
            { type: 'unlockClue', target: 'data-sql-query-audit', description: 'Verified dbt SQL Query Model' },
          ],
        },
      ],
    },

    'scene-pricing-investigation': {
      id: 'scene-pricing-investigation',
      title: 'The Revenue Ledger: Testing Elasticity',
      location: 'Commercial Strategy Lab',
      narrative: [
        'You pull the raw data from the two-month pricing experiment. Marcus’s assertion was that price elasticity drove customers away.',
        'However, statistical regression reveals that the churn elasticity coefficient is -0.04—virtually inelastic. Even better, total customer lifetime value actually climbed 11% because successful users gladly paid for the advanced features.',
        'When you review the qualitative cancellation notes, the real voice of the customer emerges: "Could not receive the verification code to activate our secondary teammates on Android."',
      ],
      choices: [
        {
          id: 'choice-pivot-to-cohorts',
          text: 'Bring this evidence to Dr. Patel and run the cohort segmentation to pinpoint when the onboarding failure started.',
          destinationId: 'scene-cohort-deepdive',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'unlockClue', target: 'data-cohort-retention-table', description: 'Discovered Cohort Retention Matrix' },
          ],
        },
      ],
    },

    'scene-pipeline-verification': {
      id: 'scene-pipeline-verification',
      title: 'Data Hygiene: The Inner Join Flaw',
      location: 'Code Review Terminal',
      narrative: [
        'Reviewing the dbt staging models, you notice that a legacy join condition excluded certain quarterly enterprise billings. Fixing the join refines the numbers, but the core finding holds firm:',
        'Tenured customers are highly satisfied; newly acquired mobile users are dropping off before ever reaching core product value.',
      ],
      choices: [
        {
          id: 'choice-proceed-to-onboarding',
          text: 'Interview Sarah Chen regarding the mobile app onboarding release in May.',
          destinationId: 'scene-onboarding-investigation',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'unlockClue', target: 'data-onboarding-funnel', description: 'Uncovered 44% Drop-off in Phone Verification' },
          ],
        },
      ],
    },

    'scene-onboarding-investigation': {
      id: 'scene-onboarding-investigation',
      title: 'The Onboarding Friction: 90-Second Blackout',
      location: 'Product Design Studio',
      narrative: [
        'Sarah Chen pulls up the Mixpanel event analytics alongside your cohort charts. Together you trace the journey step by step: Welcome screen: 98% pass. Workspace name: 94% pass. SMS Phone Verification: 50% drop-off.',
        '"In May we switched our international SMS verification provider to cut third-party costs," Sarah realizes with wide eyes. "In non-UK regions, the delivery latency exceeds 90 seconds. Users think the app is broken and delete it."',
        'You have found the smoking gun: an engineering integration timeout masquerading as a high-level commercial pricing crisis.',
      ],
      choices: [
        {
          id: 'choice-formulate-hypothesis',
          text: 'Synthesize the findings on your deduction board and prepare the executive presentation.',
          destinationId: 'scene-executive-showdown',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-executive-showdown': {
      id: 'scene-executive-showdown',
      title: 'The 5 PM Presentation: Courage With Data',
      location: 'Executive Boardroom',
      narrative: [
        'At 5:00 PM, the leadership team reconvenes. Marcus Vance leans forward. "Well? Do we have our slide to roll back the price hike to twenty-four dollars?"',
        'You have the floor. The future of the product and hundreds of thousands of dollars in annual recurring revenue depend on your recommendation.',
      ],
      choices: [
        {
          id: 'choice-present-empirical-truth',
          text: 'Recommend maintaining the pricing tier while issuing an urgent hotfix for the SMS gateway and adding email verification fallback.',
          destinationId: 'scene-resolution-triumph',
          consequencePreview: 'Deductive',
          conditions: [{ type: 'hasClue', target: 'data-onboarding-funnel' }],
        },
        {
          id: 'choice-compromise-rollback',
          text: 'Agree with Marcus to roll back pricing temporarily as a goodwill gesture while engineering investigates onboarding.',
          destinationId: 'scene-resolution-partial',
          consequencePreview: 'Risky',
        },
        {
          id: 'choice-refuse-responsibility',
          text: 'Present raw uninterpreted data tables and let the executives argue without offering a clear recommendation.',
          destinationId: 'scene-resolution-compromised',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-resolution-triumph': {
      id: 'scene-resolution-triumph',
      title: 'Empirical Triumph: The Data Speaks',
      location: 'Executive Boardroom',
      narrative: [
        'You project the cohort retention matrix alongside Sentry gateway logs. You demonstrate that tenured users retained at 91% under the $29 price, proving that product value is validated.',
        'You show the 44% drop-off at the SMS verification step and outline the engineering hotfix: a dual SMS/Email OTP fallback with a 15-second timeout.',
        'Marcus sits back in his chair, studying the cohort curve. "I was looking at the wrong end of the funnel. If we had rolled back the price, we would have lost half a million dollars while new users kept bleeding out."',
        'Engineering deploys the hotfix that evening. Within three weeks, 30-day cohort retention recovers to 84%. You have demonstrated the essence of world-class data analytics: finding the ground truth through rigor and clear communication.',
      ],
      choices: [],
      isEnding: true,
      endingId: 'ending-triumph',
    },

    'scene-resolution-partial': {
      id: 'scene-resolution-partial',
      title: 'Costly Compromise: The Partial Solution',
      location: 'Executive Boardroom',
      narrative: [
        'You present the SMS issue but concede to Marcus’s rollback to avoid executive friction. The pricing returns to $24.',
        'While the SMS hotfix eventually restores onboarding, the company needlessly surrenders $480,000 in annualized expansion revenue that customers were willing to pay. You diagnosed the problem, but lacked the data confidence to defend the optimal commercial outcome.',
      ],
      choices: [],
      isEnding: true,
      endingId: 'ending-partial',
    },

    'scene-resolution-compromised': {
      id: 'scene-resolution-compromised',
      title: 'Analysis Paralysis: The Abdication',
      location: 'Executive Boardroom',
      narrative: [
        'You present pages of unsummarized query outputs without a synthesis. The executives spend forty minutes arguing past each other.',
        'Marcus pushes through his pricing rollback by default. The SMS timeout remains unaddressed for another three weeks, during which thousands more prospective users churn permanently. A data analyst who cannot communicate conclusions leaves the team blind.',
      ],
      choices: [],
      isEnding: true,
      endingId: 'ending-compromised',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'Senior Analytical Acumen — Flawless Cohort Diagnosis',
      tier: 'triumph',
      badge: '★ MASTER DATA STRATEGIST (100%)',
      summary:
        'You correctly isolated customer cohort anomalies, disproved the pricing scapegoat hypothesis, and identified the technical onboarding gateway bottleneck to save $480,000 ARR.',
      narrative: [
        'Your recommendation prevented a disastrous pricing rollback and fixed the true root cause of new user drop-off.',
        'You demonstrated professional courage, statistical rigor, and cross-functional leadership on your very first day.',
      ],
      criteriaReview: {
        theTruth: 'The 14.2% churn drop was caused exclusively by a 90-second SMS gateway timeout in v3.2 mobile onboarding, not price elasticity.',
        yourDeduction: 'Segmented cohorts proved existing accounts were retaining at 91%; mobile telemetry exposed the phone verification failure.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Cohort Retention Matrix disproved overall pricing churn',
          'A/B test logs confirmed price elasticity was virtually inelastic (-0.04)',
          'Sentry and Mixpanel logs revealed 44% SMS timeout drop-off in v3.2',
        ],
        missedOpportunities: [],
        reasoningCritique:
          'Exemplary analytical reasoning. You sliced aggregate metrics by cohort and platform, avoiding the trap of averages and resisting executive confirmation bias.',
      },
    },
    'ending-partial': {
      id: 'ending-partial',
      title: 'Compromised Strategy — The Unnecessary Rollback',
      tier: 'partial',
      badge: 'PARTIAL ACCURACY (70%)',
      summary:
        'You correctly diagnosed the onboarding bottleneck but yielded to executive pressure on pricing, sacrificing substantial company ARR.',
      narrative: [
        'The SMS fix resolved customer churn, but rolling back prices cost the company $480,000 unnecessarily.',
      ],
      criteriaReview: {
        theTruth: 'Pricing was innocent; onboarding SMS failure was the sole driver of churn.',
        yourDeduction: 'You identified the onboarding bug but compromised on pricing rollback.',
        accuracyRate: 70,
        keyDiscoveries: ['Onboarding drop-off in Mixpanel', 'SMS gateway timeout'],
        missedOpportunities: ['Defending the 11% higher LTV confirmed by the A/B pricing test'],
        reasoningCritique:
          'Solid diagnostic work, but weakened by lack of persuasion in the boardroom. A strong data analyst must champion data-backed conclusions.',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'Analysis Paralysis — Uncommunicated Insights',
      tier: 'compromised',
      badge: 'COMPROMISED (35%)',
      summary:
        'Failing to deliver a clear recommendation allowed management to implement the wrong fix while customer drop-off continued.',
      narrative: [
        'Raw data without clear narrative insight led to continued churn and lost revenue.',
      ],
      criteriaReview: {
        theTruth: 'SMS timeout bottleneck in mobile onboarding.',
        yourDeduction: 'Failed to present a coherent conclusion, allowing the incorrect decision to proceed.',
        accuracyRate: 35,
        keyDiscoveries: ['Raw query data gathered but not synthesized'],
        missedOpportunities: ['Leading the executive decision with clear recommendations and actionable next steps'],
        reasoningCritique:
          'Data is only as valuable as the decisions it empowers. Presentation and executive communication are vital core skills for any data professional.',
      },
    },
  },
};

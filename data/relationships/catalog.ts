import {
  RelationshipPillar,
  RelationshipScenarioMetadata,
  CharacterProfile,
} from '@/features/relationships/types';
import { EpisodeMetadata } from '@/features/episodes/types';

export const RELATIONSHIPS_SCENARIOS_METADATA: RelationshipScenarioMetadata[] = [
  // ─── 1. FRIENDSHIP & SOCIAL CIRCLES (3 Scenarios) ───
  {
    id: 'rel-friendship-cancelled-plans',
    title: 'The Cancelled Friday',
    subtitle: 'Decipher repeated last-minute cancellations, address silent burnout, and protect relational boundaries.',
    pillar: 'friendship',
    category: 'Friendship & Social Circles',
    difficulty: 'Novice',
    estimatedMinutes: 18,
    tags: ['#Friendship', '#Boundaries', '#Active Listening', '#Burnout', '#Reciprocity'],
    heroImage: '/images/relationships/friendship-scene.webp',
    thumbnailImage: '/images/relationships/cancelled-plans.svg',
    characters: [
      {
        id: 'person-maya',
        name: 'Maya Lin',
        role: 'Architectural Designer & Close Friend',
        personalitySummary: 'Generous, creative, but chronically over-committed and prone to guilt-driven isolation.',
        communicationTendency: 'Over-promises when calm, avoids communication when overwhelmed.',
        coreNeedOrFear: 'Fears letting friends down, but suffers from acute work-induced burnout.',
      },
      {
        id: 'person-julian',
        name: 'Julian Vance',
        role: 'Mutual Friend & Studio Colleague',
        personalitySummary: 'Observant, grounded, sees the workplace structural load Maya carries.',
        communicationTendency: 'Direct and analytical.',
        coreNeedOrFear: 'Wants group equilibrium without unnecessary passive-aggressive tension.',
      },
    ],
    coreTension:
      'Balancing genuine empathy for a friend’s workplace burnout with the self-respect required to stop having your Friday nights held hostage by last-minute cancellations.',
    learningInsights: [
      'Recognize that chronic cancellations often reflect nervous system depletion rather than personal malice.',
      'Understand that unexpressed frustration always leaks out as passive-aggressive withdrawal.',
      'Shift from high-stakes rigid commitments to low-pressure connection rhythms during seasons of crisis.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You named the cancellation pattern without contempt, offered structural adjustments, and set clear boundaries around your own time.',
      otherPersonPerspective:
        'Maya was trapped in a shame cycle of over-promising and crashing. Direct, calm boundary enforcement offered her relief rather than hostility.',
      relationalImpact:
        'Eliminated passive resentment and established a realistic weekend rhythm tailored to real-world capacity.',
      whatWasOutsideControl:
        'Maya’s excessive studio workload and structural staffing shortages at her firm.',
      alternativeConsideration:
        'Could have initiated an earlier Friday afternoon check-in before heading to the restaurant.',
      discussionQuestions: [
        'How do you distinguish between a friend who is genuinely depleted and one who is taking your availability for granted?',
        'When has saying "it’s fine" when you were actually hurt led to greater damage later?',
      ],
    },
  },
  {
    id: 'rel-friendship-quiet-exclusion',
    title: 'The Quiet Exclusion',
    subtitle: 'Confront subtle social ostracism in a close group, balance loyalty, and advocate for belonging.',
    pillar: 'friendship',
    category: 'Friendship & Social Circles',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    tags: ['#Group Dynamics', '#Inclusion', '#Peer Pressure', '#Integrity', '#Social Courage'],
    heroImage: '/images/relationships/friendship-scene.webp',
    thumbnailImage: '/images/relationships/quiet-exclusion.svg',
    characters: [
      {
        id: 'person-chloe',
        name: 'Chloe Bennett',
        role: 'Group Planner & Gatekeeper',
        personalitySummary: 'Protective of original group nostalgia, charismatic, uncomfortable with new social friction.',
        communicationTendency: 'Uses back-channel group chats and omission to manage social circles.',
        coreNeedOrFear: 'Fears losing effortless intimacy of original university friendships.',
      },
      {
        id: 'person-tariq',
        name: 'Tariq Al-Mansoor',
        role: 'Newer Friend & Documentary Editor',
        personalitySummary: 'Perceptive, gentle, observant of micro-rejections, quiet dignity.',
        communicationTendency: 'Withdraws into complete isolation when he senses uninvited awkwardness.',
        coreNeedOrFear: 'Desires authentic community in a new city without being a burden.',
      },
    ],
    coreTension:
      'Standing up against polite, covert social exclusion within your inner circle without causing destructive group fracturing.',
    learningInsights: [
      'Understand that silent bystanders are experienced as active accomplices by the excluded person.',
      'Dismantle secret side-chat hierarchies before they poison group culture.',
      'Distinguish between individual friendship and forced group conformity.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You challenged the exclusionary lie openly at the table with composure, refusing to participate in the secretive tier.',
      otherPersonPerspective:
        'Chloe acted out of lazy comfort rather than deep cruelty; a firm peer mirror forced her to recognize her cliquishness.',
      relationalImpact:
        'Protected Tariq’s dignity and reset the ethical baseline of the friend group toward open hospitality.',
      whatWasOutsideControl:
        'The natural historical bond the original group shared before Tariq arrived.',
      alternativeConsideration:
        'Could have addressed the side-chat dynamic directly with Chloe before the public brunch setting.',
      discussionQuestions: [
        'Why is it often harder to call out subtle exclusion among friends than overt bullying among strangers?',
        'What is the difference between healthy private intimacy and toxic cliquish exclusion?',
      ],
    },
  },
  {
    id: 'rel-friendship-shared-secret',
    title: 'The Shared Secret',
    subtitle: 'Confront a breach of confidence, distinguish carelessness from malice, and reconstruct boundary guardrails.',
    pillar: 'friendship',
    category: 'Friendship & Social Circles',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    tags: ['#Trust', '#Confidentiality', '#Repairing Relationships', '#Boundaries', '#Accountability'],
    heroImage: '/images/relationships/friendship-scene.webp',
    thumbnailImage: '/images/relationships/shared-secret.svg',
    characters: [
      {
        id: 'person-sam',
        name: 'Sam Delgado',
        role: 'Longtime Friend & Freelance Copywriter',
        personalitySummary: 'Extroverted, storytelling-oriented, trades confidential details for dinner-table attention.',
        communicationTendency: 'Uses humor and self-defense to minimize boundary violations.',
        coreNeedOrFear: 'Desires social relevance and being seen as an entertaining insider.',
      },
      {
        id: 'person-nora',
        name: 'Nora Hayes',
        role: 'Dinner Guest & Industry Peer',
        personalitySummary: 'Discreet, observant, protective of workplace ethics.',
        communicationTendency: 'Quiet, indirect, acts through discreet warnings.',
        coreNeedOrFear: 'Values professional confidentiality and safe workplace transitions.',
      },
    ],
    coreTension:
      'Addressing a friend who weaponizes your confidential information as cheap social currency without blowing up the relationship or pretending nothing happened.',
    learningInsights: [
      'Distinguish between intentional betrayal and reckless conversational bragging.',
      'Use objective external impact (Nora’s warning text) to penetrate defensive rationalizations.',
      'Recognize that forgiveness can coexist with downgraded informational access.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You met in person, showed the tangible risk with external evidence, accepted genuine remorse, and drew clear informational boundaries.',
      otherPersonPerspective:
        'Sam was devastated once the real-world danger was made clear, realizing that storytelling had replaced basic loyalty.',
      relationalImpact:
        'Saved the long-term friendship while ensuring delicate future career matters are never entrusted to an indiscreet friend.',
      whatWasOutsideControl:
        'Whether Nora or other table guests mention the slip to industry contacts.',
      alternativeConsideration:
        'Could have set explicit ground rules before sharing the sensitive interview news initially.',
      discussionQuestions: [
        'Can you truly trust someone again after they share your private life with others for laughs?',
        'How do you manage friendships with people you love who have poor impulse control?',
      ],
    },
  },

  // ─── 2. ROMANTIC RELATIONSHIPS (2 Scenarios) ───
  {
    id: 'rel-romance-ambiguous-text',
    title: 'The Ambiguous Text',
    subtitle: 'Navigate romantic insecurity, past relationship trauma, and the balance of transparency and autonomy.',
    pillar: 'romance',
    category: 'Romantic Relationships',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    tags: ['#Romance', '#Trust & Honesty', '#Insecurity', '#Boundaries', '#Emotional Safety'],
    heroImage: '/images/relationships/romance-scene.webp',
    thumbnailImage: '/images/relationships/ambiguous-text.svg',
    characters: [
      {
        id: 'person-jordan',
        name: 'Jordan Miller',
        role: 'Romantic Partner of Two Years',
        personalitySummary: 'Loving, deeply committed, but carries hypervigilant scar tissue from past infidelity.',
        communicationTendency: 'Freezes, withdraws into icy silence, and assumes worst-case scenarios.',
        coreNeedOrFear: 'Terrified of being blind-sided by deceit again.',
      },
      {
        id: 'person-alex',
        name: 'Alex Rivera',
        role: 'Former Project Co-worker',
        personalitySummary: 'Emotional, going through a contentious custody dispute, boundary-blind.',
        communicationTendency: 'Sends overly intimate late-night messages without romantic intent.',
        coreNeedOrFear: 'Desires emotional grounding during personal crisis.',
      },
    ],
    coreTension:
      'Offering transparent emotional reassurance to a traumatized partner without submitting to controlling surveillance or sacrificing healthy personal autonomy.',
    learningInsights: [
      'Understand that defensive hostility mimics the behavior of deceit to a triggered partner.',
      'Provide voluntary transparency as an act of love, not as an admission of wrongdoing.',
      'Establish reasonable boundaries around late-night communication with colleagues.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You handed over the phone willingly, validated Jordan’s past trauma, and set healthy boundaries around colleague communication hours.',
      otherPersonPerspective:
        'Jordan experienced an involuntary panic response; your calm composure allowed the fear to de-escalate into safety.',
      relationalImpact:
        'Deepened emotional intimacy and proved that triggers can be met with connection rather than conflict.',
      whatWasOutsideControl:
        'The unhealed betrayal wounds inflicted on Jordan by a previous partner.',
      alternativeConsideration:
        'Could have mentioned Alex’s legal crisis casually earlier in the week.',
      discussionQuestions: [
        'What is the difference between healthy partner transparency and toxic controlling surveillance?',
        'How should a couple handle unhealed relationship trauma from prior relationships?',
      ],
    },
  },
  {
    id: 'rel-romance-two-futures',
    title: 'Two Futures',
    subtitle: 'Negotiate diverging life trajectories, avoid sacrificial martyrdom, and align long-term aspirations.',
    pillar: 'romance',
    category: 'Romantic Relationships',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    tags: ['#Romance', '#Life Goals', '#Compromise', '#Autonomy', '#Difficult Conversations'],
    heroImage: '/images/relationships/romance-scene.webp',
    thumbnailImage: '/images/relationships/two-futures.svg',
    characters: [
      {
        id: 'person-clara',
        name: 'Clara Dubois',
        role: 'Partner of Three Years & Sustainable Architect',
        personalitySummary: 'Visionary, ambitious, deeply loyal, terrified of becoming a relational martyr.',
        communicationTendency: 'Open and emotionally expressive, but vulnerable to guilt-tripping.',
        coreNeedOrFear: 'Fears having to choose between her calling and the person she loves.',
      },
      {
        id: 'person-marcus',
        name: 'Marcus Bell',
        role: 'Workshop Co-Founder & Mechanical Lead',
        personalitySummary: 'Pragmatic, committed to the business, firm on contractual realities.',
        communicationTendency: 'Direct, focused on numbers and staffing.',
        coreNeedOrFear: 'Needs operational stability for the London workshop.',
      },
    ],
    coreTension:
      'Honoring two monumental, legitimate life breakthroughs in different cities without resorting to guilt, sacrifice, or passive abandonment.',
    learningInsights: [
      'Reject both coercive ultimatums and destructive self-erasing martyrdom.',
      'Recognize that long-distance succeeds through rigorous structure, predictable visits, and a finite timeline.',
      'Understand that genuine love enlarges both partners rather than shrinking either.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You celebrated Clara’s achievement first, refused false martyrdom, and designed a disciplined bi-city operational bridge.',
      otherPersonPerspective:
        'Clara was relieved that her breakthrough was met with support rather than resentment, allowing her to commit fully to the relationship across distance.',
      relationalImpact:
        'Transformed an apparent geographic crisis into a testament to mature, autonomous commitment.',
      whatWasOutsideControl:
        'The rigid physical residency requirements of the Bauhaus fellowship and the London equipment leases.',
      alternativeConsideration:
        'Could have begun researching international industrial design collaborations earlier.',
      discussionQuestions: [
        'Under what conditions is a long-distance relationship worth pursuing?',
        'How do you know when a career compromise has turned into toxic resentment?',
      ],
    },
  },

  // ─── 3. FAMILY RELATIONSHIPS (2 Scenarios) ───
  {
    id: 'rel-family-legacy-expectation',
    title: 'The Legacy Expectation',
    subtitle: 'Navigate generational duty, honor family heritage, and claim self-authorship with calm dignity.',
    pillar: 'family',
    category: 'Family Relationships',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    tags: ['#Family Dynamics', '#Generational Differences', '#Boundaries', '#Filial Duty', '#Self-Authorship'],
    heroImage: '/images/relationships/family-scene.webp',
    thumbnailImage: '/images/relationships/legacy-expectation.svg',
    characters: [
      {
        id: 'person-ramesh',
        name: 'Ramesh Sharma',
        role: 'Father & Tooling Factory Founder',
        personalitySummary: 'Disciplined, traditional, stoic, equated parental sacrifice with corporate succession.',
        communicationTendency: 'Authoritarian when anxious; struggles with emotional vulnerability.',
        coreNeedOrFear: 'Fears his forty years of labor will be erased and forgotten after his death.',
      },
      {
        id: 'person-anita',
        name: 'Anita Sharma',
        role: 'Mother & Family Mediator',
        personalitySummary: 'Perceptive, gentle, protective of family cohesion.',
        communicationTendency: 'Whispers hard truths in private; advocates for peace.',
        coreNeedOrFear: 'Dreads seeing an irreconcilable fracture between her husband and child.',
      },
    ],
    coreTension:
      'Refusing to inherit a multi-generational family factory while honoring the grueling parental sacrifices that financed your freedom.',
    learningInsights: [
      'Distinguish between patriarchal control and underlying existential mortality fear.',
      'Honor the sacrifice of immigrant or working-class parents without surrendering personal destiny.',
      'Propose creative structural bridges (such as management buyouts or digital advisory roles).',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You validated your father’s forty-year sacrifice, held your career boundary with steady calm, and engineered a practical executive buyout solution.',
      otherPersonPerspective:
        'Ramesh realized that his child was not rejecting him, but living out the self-determination his sacrifices had made possible.',
      relationalImpact:
        'Preserved filial warmth and dignity while establishing full career self-authorship.',
      whatWasOutsideControl:
        'Ramesh’s aging health challenges and traditional cultural views on family duty.',
      alternativeConsideration:
        'Could have initiated succession discussions months before the surprise dinner binder was printed.',
      discussionQuestions: [
        'How much do children owe their parents for the sacrifices made on their behalf?',
        'How do you tell a loving, traditional parent that your life cannot look like theirs?',
      ],
    },
  },
  {
    id: 'rel-family-holiday-rift',
    title: 'The Holiday Seating Chart',
    subtitle: 'Dismantle family triangulation, respect adult estrangement, and host with peaceful neutrality.',
    pillar: 'family',
    category: 'Family Relationships',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    tags: ['#Family Dynamics', '#Conflict Resolution', '#Triangulation', '#Boundaries', '#Mediation'],
    heroImage: '/images/relationships/family-scene.webp',
    thumbnailImage: '/images/relationships/holiday-rift.svg',
    characters: [
      {
        id: 'person-priya',
        name: 'Priya Patel',
        role: 'Sister & Divorced Mother of Two',
        personalitySummary: 'Protective, hyper-sensitive to judgment, exhausted by family gossip.',
        communicationTendency: 'Issues hard ultimatums and demands loyalty pledges from siblings.',
        coreNeedOrFear: 'Refuses to let her children see her publicly undermined or shamed.',
      },
      {
        id: 'person-mother',
        name: 'Geeta Patel',
        role: 'Mother & Matriarch',
        personalitySummary: 'Proud, traditional, misses her grandchildren, defensive about her opinions.',
        communicationTendency: 'Uses passive-aggressive remarks to assert dominance.',
        coreNeedOrFear: 'Fears losing her place at the center of the family holiday.',
      },
    ],
    coreTension:
      'Hosting an extended holiday gathering without becoming weaponized by warring family members or forcing unnatural, unsafe reconciliations.',
    learningInsights: [
      'Refuse to participate in triangulation: never carry angry messages between feuding adults.',
      'Understand that forced holiday proximity escalates unhealed trauma rather than solving it.',
      'Establish firm, advance behavioral ground rules with family matriarchs and patriarchs.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You refused to uninvite your mother, rejected ambush seating stunts, set strict behavioral rules with Geeta, and protected Priya’s physical space.',
      otherPersonPerspective:
        'Both Geeta and Priya respected that your home had clear, non-negotiable rules of mutual respect.',
      relationalImpact:
        'Delivered a peaceful, dignified holiday where grandchildren reconnected with grandparents without conflict.',
      whatWasOutsideControl:
        'The deep historical resentment stemming from the Easter divorce argument.',
      alternativeConsideration:
        'Could have offered a split two-day holiday structure if the single dinner had been too volatile.',
      discussionQuestions: [
        'Is it ever appropriate to force estranged family members into the same room?',
        'How can a host maintain neutrality without making wounded family members feel unprotected?',
      ],
    },
  },

  // ─── 4. COMMUNICATION & CONFLICT RESOLUTION (3 Scenarios) ───
  {
    id: 'rel-communication-differing-memories',
    title: 'Two Memories of One Night',
    subtitle: 'De-escalate contradictory recollections, overcome the compulsion to win, and align on reality.',
    pillar: 'communication',
    category: 'Communication & Conflict',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    tags: ['#Conflict Resolution', '#Active Listening', '#Memory & Bias', '#Communication', '#Accountability'],
    heroImage: '/images/relationships/communication-scene.webp',
    thumbnailImage: '/images/relationships/differing-memories.svg',
    characters: [
      {
        id: 'person-dev',
        name: 'Dev Malik',
        role: 'Roommate & Environmental Consultant',
        personalitySummary: 'Methodical, prideful about administrative competence, defensive under financial threat.',
        communicationTendency: 'Digs in heels when accused; equates admitting error with total fault.',
        coreNeedOrFear: 'Dreads being blamed for a £450 financial disaster.',
      },
      {
        id: 'person-landlord',
        name: 'Mr. Henderson',
        role: 'Property Manager',
        personalitySummary: 'Impersonal, policy-driven, values unified professional communication.',
        communicationTendency: 'Operates by postmarks and deadlines.',
        coreNeedOrFear: 'Requires clean, compliant administrative paperwork.',
      },
    ],
    coreTension:
      'Resolving a high-stakes administrative crisis when both roommates have mutually contradictory, 100% confident memories of who dropped the ball.',
    learningInsights: [
      'Recognize that human memory under cognitive load is constructive and prone to confident confabulation.',
      'Prioritize locating physical facts and solving the deadline over arguing about who was "right."',
      'Use shared humor to disarm defensive pride once an error is discovered.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You paused the shouting match, searched for the physical envelope, discovered the shared distraction, and submitted a joint waiver.',
      otherPersonPerspective:
        'Dev was relieved when the search showed neither party had acted maliciously, allowing him to step out of his defensive posture.',
      relationalImpact:
        'Saved £450 in fines, secured lease renewal, and built a resilient template for handling domestic mishaps.',
      whatWasOutsideControl:
        'The strict property management submission deadline.',
      alternativeConsideration:
        'Could have established an instant photo-confirmation habit for critical mail items.',
      discussionQuestions: [
        'Why does our brain invent vivid memories of doing things we intended to do but never did?',
        'How do you pivot an argument from "Who is at fault?" to "What is our joint solution?"',
      ],
    },
  },
  {
    id: 'rel-communication-apology-without-change',
    title: 'The Apology Without Change',
    subtitle: 'Dismantle performative remorse, stop enabling habitual neglect, and establish structural accountability.',
    pillar: 'communication',
    category: 'Communication & Conflict',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    tags: ['#Boundaries', '#Accountability', '#Financial Friction', '#Emotional Maturity', '#Communication'],
    heroImage: '/images/relationships/communication-scene.webp',
    thumbnailImage: '/images/relationships/apology-without-change.svg',
    characters: [
      {
        id: 'person-julian',
        name: 'Julian Thorne',
        role: 'Close Friend & Freelance Photographer',
        personalitySummary: 'Artistic, charismatic, emotionally demonstrative, chronically irresponsible with money.',
        communicationTendency: 'Beats friends to the punch with dramatic self-loathing to disarm accountability.',
        coreNeedOrFear: 'Fears being rejected or held to adult financial consequences.',
      },
      {
        id: 'person-claire',
        name: 'Claire Moreau',
        role: 'Mutual Friend in Social Circle',
        personalitySummary: 'Pragmatic, observant, has already established clear boundaries with Julian.',
        communicationTendency: 'Direct and unbothered by emotional drama.',
        coreNeedOrFear: 'Protects friends from being drained by chronic takers.',
      },
    ],
    coreTension:
      'Stopping the cycle of bailing out a charming friend whose lavish apologies substitute for actual behavioral change.',
    learningInsights: [
      'Understand that excessive self-flagellation is often a subconscious tactic to make the victim comfort the offender.',
      'Refuse to subsidize someone’s lifestyle under the guise of "being a good friend."',
      'Establish automated, structural solutions (installment transfers and separate tabs) rather than moral debates.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You refused the festival presale ticket, neutralized the theatrical self-loathing script, and instituted a structured repayment plan.',
      otherPersonPerspective:
        'Julian was forced to drop the child persona and recognize that true friendship requires financial integrity.',
      relationalImpact:
        'Recovered the outstanding debt, removed financial friction from social outings, and helped Julian mature.',
      whatWasOutsideControl:
        'Julian’s unpredictable freelance photography payment cycles.',
      alternativeConsideration:
        'Could have ended the practice of fronting money after the very first delinquent repayment.',
      discussionQuestions: [
        'How can you tell when an apology is genuine versus when it is an emotional anesthetic?',
        'Why is enabling someone’s bad behavior actually an unloving thing to do?',
      ],
    },
  },
  {
    id: 'rel-communication-one-sided-anchor',
    title: 'The One-Sided Anchor',
    subtitle: 'Confront emotional dumping, demand conversational reciprocity, and establish reciprocal equilibrium.',
    pillar: 'communication',
    category: 'Communication & Conflict',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    tags: ['#Communication', '#Reciprocity', '#Emotional Dumping', '#Boundaries', '#Active Listening'],
    heroImage: '/images/relationships/communication-scene.webp',
    thumbnailImage: '/images/relationships/one-sided-anchor.svg',
    characters: [
      {
        id: 'person-chloe-vent',
        name: 'Chloe Davenport',
        role: 'Childhood Friend of Ten Years',
        personalitySummary: 'High-energy, hyper-verbal, chronically anxious, oblivious to other people’s emotional capacity.',
        communicationTendency: 'Monopolizes phone calls for 80+ minutes; changes subject when others speak.',
        coreNeedOrFear: 'Terrified of sitting alone with her own unmanaged anxiety.',
      },
      {
        id: 'person-marcus-roommate',
        name: 'Marcus Bell',
        role: 'Roommate & Supportive Sounding Board',
        personalitySummary: 'Grounded, empathetic, protective of your emotional health.',
        communicationTendency: 'Direct and candid.',
        coreNeedOrFear: 'Wants to see you treated with the care and reciprocity you give to others.',
      },
    ],
    coreTension:
      'Breaking free from being used as an unpaid emotional disposal unit by a childhood friend who hangs up the moment your life is in crisis.',
    learningInsights: [
      'Recognize conversational narcissism: when someone only calls during their emergencies and tunes out yours.',
      'Use objective data (call logs and specific instances) to bypass defensive denial.',
      'Require friends to ask for consent/capacity before unloading heavy emotional trauma.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You called out the cancer biopsy dismissal directly, held up the mirror to the 90/10 conversational ratio, and demanded mutual care.',
      otherPersonPerspective:
        'Chloe was shocked into awareness, realizing for the first time that her anxiety was blinding her to her friend’s pain.',
      relationalImpact:
        'Transformed an extractive dynamic into an authentic, reciprocal connection where care flows both ways.',
      whatWasOutsideControl:
        'Your father’s hospital diagnosis and medical timeline.',
      alternativeConsideration:
        'Could have intervened earlier before your own crisis forced the confrontation.',
      discussionQuestions: [
        'What boundaries do you need to set with friends who treat you as their full-time therapist?',
        'How do you balance being there for an anxious friend with protecting your own mental bandwidth?',
      ],
    },
  },

  // ─── 5. BOUNDARIES, PEER PRESSURE & GROUP DYNAMICS (2 Scenarios) ───
  {
    id: 'rel-boundaries-peer-pressure',
    title: 'The Uncomfortable Dare',
    subtitle: 'Hold firm boundaries under intense social mockery, resist coercive groupthink, and protect personal safety.',
    pillar: 'boundaries',
    category: 'Boundaries & Group Dynamics',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    tags: ['#Boundaries', '#Peer Pressure', '#Groupthink', '#Integrity', '#Social Courage'],
    heroImage: '/images/relationships/friendship-scene.webp',
    thumbnailImage: '/images/relationships/peer-pressure.svg',
    characters: [
      {
        id: 'person-kyle',
        name: 'Kyle Vance',
        role: 'College Reunion Instigator',
        personalitySummary: 'Dominant, intoxicated, uses public mockery to coerce group conformity.',
        communicationTendency: 'Chants, taunts, challenges masculinity and courage.',
        coreNeedOrFear: 'Terrified of being seen as weak, boring, or having a party fizzle out.',
      },
      {
        id: 'person-maya-bystander',
        name: 'Maya Thorne',
        role: 'Hesitant Friend on the Dock',
        personalitySummary: 'Sensible, quiet, terrified of the cold lake but afraid to challenge Kyle.',
        communicationTendency: 'Whispers private concerns; looks for someone else to take the lead.',
        coreNeedOrFear: 'Wants physical safety without becoming Kyle’s next verbal target.',
      },
    ],
    coreTension:
      'Holding the keys to an uncle’s boat and refusing a dangerous midnight drunken cruise while a chanting circle of friends calls you a coward.',
    learningInsights: [
      'Recognize pluralistic ignorance: half the crowd is often privately terrified and waiting for one brave person to speak.',
      'Never plead or negotiate when holding a safety boundary—speak with calm, immovable finality.',
      'Provide an immediate social alternative (a bonfire) so the group can pivot without losing face.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You stood tall, pocketed the keys, stated the physical hazard calmly, and pivoted the group to the shore bonfire.',
      otherPersonPerspective:
        'Morning revealed the deadly granite shoals, turning Kyle’s drunken fury into deep sober gratitude.',
      relationalImpact:
        'Prevented a lethal boating accident and established your reputation as an unshakable, protective leader.',
      whatWasOutsideControl:
        'Kyle’s heavy drinking and the aggressive group contagion.',
      alternativeConsideration:
        'Could have locked the boat keys in the house safe before the drinking started.',
      discussionQuestions: [
        'Why does group pressure make otherwise intelligent adults do lethally stupid things?',
        'How can you say "no" to peers without escalating the situation into physical violence?',
      ],
    },
  },
  {
    id: 'rel-boundaries-group-project',
    title: 'The Vanishing Contributor',
    subtitle: 'Triage team project equity, balance compassion with rigorous accountability, and handle sudden crisis.',
    pillar: 'boundaries',
    category: 'Boundaries & Group Dynamics',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    tags: ['#Teamwork', '#Accountability', '#Empathy', '#Crisis Triage', '#Group Dynamics'],
    heroImage: '/images/relationships/communication-scene.webp',
    thumbnailImage: '/images/relationships/group-project.svg',
    characters: [
      {
        id: 'person-mateo',
        name: 'Mateo Morales',
        role: 'Capstone Lead Architect',
        personalitySummary: 'Technically brilliant, ordinarily dependable, paralyzed by sudden family tragedy.',
        communicationTendency: 'Freezes and goes completely dark under acute panic.',
        coreNeedOrFear: 'Terrified of failing his degree while sitting at his sister’s ICU bedside.',
      },
      {
        id: 'person-sarah',
        name: 'Sarah Chen',
        role: 'Driven Teammate',
        personalitySummary: 'Perfectionist, punctual, intense, terrified of a compromised GPA.',
        communicationTendency: 'Escalates rapidly to punitive administrative reporting.',
        coreNeedOrFear: 'Fears having her future job prospects ruined by someone else’s failure.',
      },
    ],
    coreTension:
      'Navigating a missing teammate 48 hours before a master’s capstone deadline without either destroying him unfairly or burning yourself out in secret martyrdom.',
    learningInsights: [
      'Check baseline contribution data (GitHub commits) to distinguish acute shock from chronic slacking.',
      'Investigate anomalous silence before sending irreversible disciplinary reports.',
      'Combine ruthless operational problem-solving with profound human compassion.',
    ],
    reflectionSummary: {
      playerApproachSummary:
        'You paused the disciplinary email, investigated the hospital emergency, secured an official 72-hour extension, and reallocated work fairly.',
      otherPersonPerspective:
        'Mateo’s academic future and visa were protected, and Sarah learned that crisis management is superior to punitive panic.',
      relationalImpact:
        'Achieved First Class honors on the project while preserving the dignity and humanity of the team.',
      whatWasOutsideControl:
        'The severe car accident that put Mateo’s sister in intensive care.',
      alternativeConsideration:
        'Could have established emergency off-platform contact protocols at the start of the semester.',
      discussionQuestions: [
        'How should professional and academic teams handle sudden personal catastrophes without burning out remaining members?',
        'What is the difference between compassionate triage and irresponsible enabling?',
      ],
    },
  },
];

export const RELATIONSHIPS_PILLARS: RelationshipPillar[] = [
  'friendship',
  'romance',
  'family',
  'communication',
  'boundaries',
];

export function getRelationshipMetadataById(id: string): RelationshipScenarioMetadata | undefined {
  return RELATIONSHIPS_SCENARIOS_METADATA.find((s) => s.id === id);
}

export function getScenariosByPillar(pillar: RelationshipPillar): RelationshipScenarioMetadata[] {
  return RELATIONSHIPS_SCENARIOS_METADATA.filter((s) => s.pillar === pillar);
}

/**
 * Adapter converting RelationshipScenarioMetadata to standard EpisodeMetadata
 * for seamless integration into existing library, save, and engine systems.
 */
export function toEpisodeMetadata(meta: RelationshipScenarioMetadata): EpisodeMetadata {
  return {
    id: meta.id,
    version: '1.0.0',
    title: meta.title,
    subtitle: meta.subtitle,
    synopsis: meta.coreTension,
    estimatedMinutes: meta.estimatedMinutes,
    difficulty: meta.difficulty,
    timeSetting: 'Modern Day',
    location: meta.category,
    initialScenarioId: 'scene-start',
    tags: meta.tags,
    totalCluesCount: 3,
    totalEndingsCount: 3,
    estimatedSizeBytes: 180000,
    caseType: undefined,
    featured: meta.id === 'rel-friendship-cancelled-plans' || meta.id === 'rel-romance-ambiguous-text',
    releaseDate: '2026-10-20',
  };
}

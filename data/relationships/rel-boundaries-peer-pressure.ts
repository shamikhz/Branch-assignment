import { Episode } from '@/features/episodes/types';

export const relBoundariesPeerPressureEpisode: Episode = {
  id: 'rel-boundaries-peer-pressure',
  version: '1.0.0',
  title: 'The Uncomfortable Dare',
  subtitle: 'Hold firm boundaries under intense social mockery, resist coercive groupthink, and protect personal safety.',
  synopsis:
    'It is midnight at an isolated lakeside cabin during an annual reunion of college friends. The drinks have been flowing for five hours. Kyle and Brett suddenly decide it would be "legendary" to unlock the owner’s motorized pontoon boat and take a drunken midnight joyride across choppy, pitch-black water. You hold the dock keys entrusted to you by your uncle who owns the cabin. The entire circle surrounds you, chanting, teasing, and calling you a "buzzkill" and a "coward" to hand over the keys. How do you hold your ground against the mob?',
  estimatedMinutes: 18,
  difficulty: 'Intermediate',
  timeSetting: 'Midnight, 12:15 AM',
  location: 'Pine Crest Lake Cabin Dock',
  tags: ['Boundaries', 'Peer Pressure', 'Groupthink', 'Integrity', 'Social Courage'],
  initialScenarioId: 'scene-the-dock-standoff',

  suspects: {
    'person-kyle': {
      id: 'person-kyle',
      name: 'Kyle Vance',
      role: 'College Friend & Aggressive Party Ringleader',
      age: 28,
      initialDemeanor: 'Intoxicated, adrenaline-fueled, domineering, uses mockery as a weapon.',
      motive: 'Needs to maintain his reputation as the fearless instigator who pushes everyone past their comfort zone.',
      opportunity: 'Has whipped the six other guests into a loud chant demanding the keys.',
      alibi: 'Claims he’s driven boats drunk "a hundred times" and knows the lake.',
      weakness: 'Deeply insecure about being ignored or challenged with calm, unyielding authority.',
      associatedClueIds: ['clue-lake-hazards', 'clue-uncle-trust'],
      interrogationSummary:
        'Kyle laughs loudly: "Come on! Live a little! You’re twenty-eight, not sixty-five! Don’t ruin the entire trip because you’re scared of the dark!"',
    },
    'person-maya-bystander': {
      id: 'person-maya-bystander',
      name: 'Maya Thorne',
      role: 'Quiet Mutual Friend on the Dock',
      age: 27,
      initialDemeanor: 'Uncomfortable, hesitant, secretly terrified of the water but afraid to speak up.',
      motive: 'Wants someone to stop the reckless plan without having to face Kyle’s ridicule herself.',
      opportunity: 'Standing on the edge of the wooden dock watching your reaction.',
      alibi: 'Drank only one beer and recognized the dangerous whitecap waves on the lake.',
      weakness: 'Follows whatever strong personality commands the space.',
      associatedClueIds: ['clue-maya-whisper'],
      interrogationSummary:
        'Maya whispers when Kyle looks away: "The water is freezing tonight. If someone falls in with boots on, they won’t come up. Please don’t give them the keys."',
    },
  },

  clues: {
    'clue-lake-hazards': {
      id: 'clue-lake-hazards',
      title: 'Pine Crest Lake Submerged Shoal Map',
      category: 'physical',
      shortDescription: 'Unmarked granite reefs sit eighteen inches below the surface within two hundred yards of the dock.',
      detailedAnalysis:
        'Your uncle specifically warned you that early autumn low water levels expose razor-sharp granite boulders just outside the bay. Navigating at night without searchlights guarantees a hull rupture.',
      locationFound: 'Cabin Boathouse Wall Chart',
      tags: ['Lethal Hazard', 'Physical Reality', 'Objective Risk'],
    },
    'clue-uncle-trust': {
      id: 'clue-uncle-trust',
      title: 'The Cabin Owner’s Personal Entrustment',
      category: 'document',
      shortDescription: 'Your Uncle David gave you the keys based on your promise that no guests would operate the boat.',
      detailedAnalysis:
        'The boat belongs to your uncle, not the rental company. Allowing drunk friends to joyride violates family trust, legal liability, and insurance contracts.',
      locationFound: 'Key Fob and Family Agreement',
      tags: ['Integrity', 'Fiduciary Duty', 'Honor'],
    },
    'clue-maya-whisper': {
      id: 'clue-maya-whisper',
      title: 'The Silent Majority’s Fear',
      category: 'testimony',
      shortDescription: 'Three other friends in the circle are privately terrified and praying someone says no.',
      detailedAnalysis:
        'Kyle’s loud shouting creates an illusion of total group consensus. In reality, half the circle is uneasy and waiting for someone with backbone to break the spell of groupthink.',
      locationFound: 'Maya’s Body Language',
      tags: ['Group Dynamics', 'Pluralistic Ignorance', 'Leadership'],
    },
  },

  connections: [
    {
      id: 'conn-groupthink-illusion',
      clueA: 'clue-lake-hazards',
      clueB: 'clue-maya-whisper',
      deductionTitle: 'The Paper Tiger of Group Mockery',
      deductionText:
        'Kyle’s chanting is hollow bravado masking lethal physical danger. Standing completely firm will cause the silent, sober majority to break rank and back you up.',
      unlockedFlag: 'flag_unmasked_groupthink',
    },
  ],

  hypotheses: {
    'hyp-unshakable-stand': {
      id: 'hyp-unshakable-stand',
      title: 'Hold Absolute Composure, Refuse the Keys, and Provide an Alternative Ritual',
      accusedSuspectId: 'person-kyle',
      motiveSummary: 'Kyle is running on drunken ego and peer pressure to force conformity.',
      methodSummary: 'Pocket the keys firmly, refuse to debate or apologize, state the lethal shoal hazards flatly, and pivot the group to a bonfire on shore.',
      requiredClueIds: ['clue-lake-hazards', 'clue-uncle-trust', 'clue-maya-whisper'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-unshakable-autonomy',
      failureEndingId: 'ending-catastrophic-compliance',
    },
  },

  scenarios: {
    'scene-the-dock-standoff': {
      id: 'scene-the-dock-standoff',
      title: 'The Circle on the Dock',
      location: 'Pine Crest Boathouse Dock, 12:15 AM',
      narrative: [
        'The wind off the lake cuts sharp and cold. Black waves lap violently against the wooden dock pylons. In the middle of the dock, Kyle stands with a red plastic cup in one hand, gesturing wildly at the 24-foot pontoon boat tied to the cleats.',
        '"The keys are in your pocket, man! Give them up!" Brett shouts, clapping you on the shoulder. "Midnight cruise! Let’s go! Don’t be a baby!"',
        'Five other people join in, chanting your name, laughing, and clapping. The social pressure is a physical wall. Every social instinct in your body wants to smile, cave in, and avoid being the outcast who "ruined the party."',
      ],
      dialogue: [
        {
          speaker: 'Kyle',
          text: 'If you don’t hand over the keys right now, we’re throwing you in the lake and taking them out of your jeans. Don’t be a buzzkill!',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-lake-hazards', 'clue-uncle-trust'],
      choices: [
        {
          id: 'choice-unflinching-refusal',
          text: 'Put both hands in your pockets, stand completely tall, and look Kyle directly in the eyes: "No. The boat stays tied to the dock tonight."',
          destinationId: 'scene-the-escalated-dare',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'social_courage', value: 2 },
            { type: 'setFlag', target: 'flag_refused_keys_flatly', value: true },
          ],
        },
        {
          id: 'choice-apologetic-weakness',
          text: '"Guys, please, my uncle will kill me... can we please not do this?" pleading with nervous giggles.',
          destinationId: 'scene-the-sharks-circle',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'social_courage', value: 2 },
            { type: 'setFlag', target: 'flag_showed_weakness_pleading', value: true },
          ],
        },
        {
          id: 'choice-hand-over-keys',
          text: 'Pull the brass keys from your pocket and toss them to Kyle: "Fine! Do whatever you want, but don’t blame me if something happens!"',
          destinationId: 'scene-the-night-voyage',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'social_courage', value: 4 },
            { type: 'setFlag', target: 'flag_surrendered_boat_keys', value: true },
          ],
        },
      ],
    },

    'scene-the-escalated-dare': {
      id: 'scene-the-escalated-dare',
      title: 'The Eye of the Storm',
      location: 'Pine Crest Dock',
      narrative: [
        'Your flat, unblinking "No" stops the rhythm of the chanting. Kyle takes half a step forward, his chest puffing out, trying to physically intimidate you into submission.',
        '"You think you’re better than everyone here?" Kyle snarls, his voice dropping into ugly contempt. "We all paid for this cabin! You don’t own us!"',
        'You feel Maya’s terrified gaze from behind him. You have the objective facts in your mind: twenty-foot water, forty-degree temperature, and submerged granite reefs that would tear the pontoon in half.',
      ],
      dialogue: [
        {
          speaker: 'Kyle',
          text: 'Hand over the keys or get off the dock. You’re ruining everyone’s night.',
          mood: 'defiant',
        },
      ],
      cluesDiscovered: ['clue-maya-whisper'],
      choices: [
        {
          id: 'choice-state-lethal-facts-calmly',
          text: '"Kyle, low water has exposed three granite reefs two hundred yards out. There are no searchlights. The water is forty degrees. If we hit a rock, people die tonight. The boat is not leaving this dock. If you want to drink, I’m lighting the bonfire by the fire pit right now."',
          destinationId: 'scene-the-spell-breaks',
          consequencePreview: 'Deductive',
          effects: [
            { type: 'incrementVariable', target: 'leadership_presence', value: 2 },
            { type: 'setFlag', target: 'flag_revealed_shoals_and_bonfire', value: true },
          ],
        },
        {
          id: 'choice-start-fistfight',
          text: '"Try taking them from my jeans, Kyle. Let’s see what happens."',
          destinationId: 'scene-dock-brawl',
          consequencePreview: 'Risky',
          effects: [
            { type: 'decrementVariable', target: 'leadership_presence', value: 2 },
            { type: 'setFlag', target: 'flag_threatened_physical_violence', value: true },
          ],
        },
      ],
    },

    'scene-the-spell-breaks': {
      id: 'scene-the-spell-breaks',
      title: 'The Spell Dissolves',
      location: 'Boathouse Fire Pit, 12:30 AM',
      narrative: [
        'The cold, clinical reality of "forty-degree water and submerged granite reefs" acts like ice water tossed onto drunk brains. The bravado suddenly feels grotesque.',
        'Maya immediately steps forward: "He’s right. It’s freezing and pitch black. Taking a boat out right now is insane."',
        'Brett looks at the choppy black lake, then shivers: "Yeah... honestly, my hands are numb already. Let’s do the bonfire."',
        'Kyle stands alone on the wooden dock, stripped of his audience. He scowls, kicks an empty beer can into the grass, and follows the group toward the fire pit.',
      ],
      dialogue: [
        {
          speaker: 'Kyle (Muttering)',
          text: 'Whatever. I was just trying to make it fun.',
          mood: 'evasive',
        },
      ],
      choices: [
        {
          id: 'choice-light-bonfire-inclusive',
          text: 'Toss dry pine logs into the fire pit and hand Kyle a beer: "Fire’s lit. Let’s warm up."',
          destinationId: 'scene-morning-revelation',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'mature_magnanimity', value: 2 },
            { type: 'setFlag', target: 'flag_offered_grace_after_boundary', value: true },
          ],
        },
      ],
    },

    'scene-morning-revelation': {
      id: 'scene-morning-revelation',
      title: 'The Morning Sun on the Granite',
      location: 'Cabin Porch, Saturday 8:00 AM',
      isEnding: true,
      endingId: 'ending-unshakable-autonomy',
      narrative: [
        'The morning sun reveals the lake in flat, crystal clarity. You sit on the cabin porch with a mug of black coffee.',
        'Kyle walks out onto the dock with sunglasses on, nursing a massive hangover. He looks out across the bay where he wanted to drive the boat last night.',
        'There, barely seventy yards from the dock, three jagged black granite boulders break the water’s surface like shark fins. At midnight, traveling at 25 knots, the boat would have slammed into them head-on.',
        'Kyle stares at the rocks for two full minutes in total silence. He turns around, walks up the porch steps, and looks you in the eyes.',
      ],
      dialogue: [
        {
          speaker: 'Kyle',
          text: 'I was an absolute idiot last night. You saved our lives, man. Thank you for not giving me those keys.',
          mood: 'shaken',
        },
      ],
      choices: [],
    },

    'scene-the-sharks-circle': {
      id: 'scene-the-sharks-circle',
      title: 'The Scent of Hesitation',
      location: 'Pine Crest Dock',
      narrative: [
        'When you pleaded and laughed nervously, Kyle and Brett smelled weakness. They stepped closer, laughing at your excuses, mocking your uncle, and crowding your personal space.',
        'Within sixty seconds, Brett grabbed you in a mock headlock while Kyle dug the keys out of your pocket. You stood on the dock watching them untie the mooring lines, helpless and humiliated.',
      ],
      dialogue: [
        {
          speaker: 'Brett',
          text: 'See? That wasn’t so hard! We’ll be back in twenty minutes!',
          mood: 'defiant',
        },
      ],
      choices: [
        {
          id: 'choice-watch-them-depart',
          text: 'Watch them motor into the pitch-black water.',
          destinationId: 'scene-the-night-voyage',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-the-night-voyage': {
      id: 'scene-the-night-voyage',
      title: 'The Sound of Tearing Aluminum',
      location: 'Dark Lake Waters, 12:40 AM',
      isEnding: true,
      endingId: 'ending-catastrophic-compliance',
      narrative: [
        'The pontoon boat roared into the dark lake. Twelve minutes later, an echoing, sickening crunch of tearing aluminum and screaming shattered the night air.',
        'The boat had struck the granite reef at full throttle. Two people were thrown into the freezing 40-degree water. You spent the next three hours running along the rocky shoreline screaming for 999 emergency search and rescue teams.',
        'The reunion ended with hypothermia hospitalizations, police interrogation, and your uncle’s boat destroyed.',
      ],
      dialogue: [
        {
          speaker: 'Inner Thought',
          text: 'I knew it was dangerous, and I gave them the keys because I was scared they’d call me a buzzkill.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-dock-brawl': {
      id: 'scene-dock-brawl',
      title: 'The Drunken Scuffle',
      location: 'Pine Crest Dock Edge',
      isEnding: true,
      endingId: 'ending-polarized-isolation',
      narrative: [
        'You threw a punch. Kyle tackled you into the freezing water. Both of you came out soaked, shivering, and bruised.',
        'The trip was ruined by a drunken brawl. Everyone packed up and left early the next morning in angry silence.',
      ],
      dialogue: [
        {
          speaker: 'Maya',
          text: 'You were right about the boat, but turning it into a fight made everything ten times worse.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-unshakable-autonomy': {
      id: 'ending-unshakable-autonomy',
      title: 'Unshakable Autonomy: The Anchor in the Storm',
      tier: 'triumph',
      badge: 'COURAGEOUS STEWARDSHIP',
      narrative: [
        'You demonstrated the highest form of social courage: the willingness to stand completely alone against the chant of a crowd to protect physical safety and personal integrity.',
        'By combining immovable boundary firmness with objective reality (the granite shoals) and offering an immediate warm alternative (the bonfire), you dismantled groupthink without escalating into violence.',
      ],
      summary: 'You resisted intense peer mockery, protected the lives of your friends, and earned universal morning gratitude.',
      criteriaReview: {
        theTruth:
          'Kyle was driving on drunken ego and group applause. The granite shoals were a genuine lethal threat, and the silent majority was praying for a leader with backbone.',
        yourDeduction:
          'You understood that true leadership is being willing to be called "boring" or "a buzzkill" for twenty minutes rather than attending funerals on Monday.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized that peer pressure relies on pluralistic ignorance and noise.',
          'Maintained absolute physical composure without pleading or shouting.',
          'Pivoted the group toward an alternative ritual (the bonfire) to allow the instigator to save face.',
        ],
        missedOpportunities: [
          'Could have locked the boat keys in the cabin gun safe before the drinking began.',
        ],
        reasoningCritique:
          'Masterclass in boundary holding under pressure. You showed that saying "no" with calm authority pierces the illusion of mob consensus every time.',
      },
    },

    'ending-catastrophic-compliance': {
      id: 'ending-catastrophic-compliance',
      title: 'Catastrophic Compliance: The Price of Being Liked',
      tier: 'compromised',
      badge: 'TRAGIC CAPITULATION',
      narrative: [
        'You surrendered the keys to avoid social awkwardness. The result was a destroyed boat, hypothermia hospitalizations, and a lifetime of traumatic guilt.',
        'The desire to be liked by a room of intoxicated peers is the most dangerous drug on earth.',
      ],
      summary: 'You surrendered the keys under peer mockery, resulting in a midnight boat crash and emergency rescue.',
      criteriaReview: {
        theTruth:
          'You held the fiduciary and physical responsibility. Caving to peer pressure was a complete abdication of duty.',
        yourDeduction:
          'You falsely believed that being called a "buzzkill" was worse than a boat crash, prioritizing fleeting social approval over human life.',
        accuracyRate: 20,
        keyDiscoveries: [
          'Discovered that cowardice in the face of pressure leads to catastrophic real-world consequences.',
        ],
        missedOpportunities: [
          'Failed to stand firm at every single decision node.',
        ],
        reasoningCritique:
          'Catastrophic failure of character. When entrusted with the safety of others, caving to mockery is a fatal breach of integrity.',
      },
    },

    'ending-polarized-isolation': {
      id: 'ending-polarized-isolation',
      title: 'The Toxic Clash: Righteousness Through Fists',
      tier: 'partial',
      badge: 'PHYSICAL ESCALATION',
      narrative: [
        'You kept the boat on the dock, but your violent escalation turned a safety boundary into an ugly brawl. You proved your point, but destroyed the social fabric of the weekend.',
        'A boundary enforced with fists and machismo is merely another form of bullying.',
      ],
      summary: 'You stopped the boat ride, but physical violence ruined the cabin trip and alienated your peers.',
      criteriaReview: {
        theTruth:
          'Kyle needed calm, immovable authority and objective hazard facts, not an invitation to a dockside fistfight.',
        yourDeduction:
          'You allowed your masculine ego to take the bait of Kyle’s taunts, descending into the exact immaturity you sought to oppose.',
        accuracyRate: 50,
        keyDiscoveries: [
          'Prevented the boat crash successfully.',
        ],
        missedOpportunities: [
          'Failed to use calm verbal de-escalation.',
          'Failed to present the granite shoal hazard rationally.',
        ],
        reasoningCritique:
          'Sub-optimal emotional self-control. True strength is calm and immovable; physical violence is an admission that you have lost internal composure.',
      },
    },
  },
};

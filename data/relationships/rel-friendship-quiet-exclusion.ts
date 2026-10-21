import { Episode } from '@/features/episodes/types';

export const relFriendshipQuietExclusionEpisode: Episode = {
  id: 'rel-friendship-quiet-exclusion',
  version: '1.0.0',
  title: 'The Quiet Exclusion',
  subtitle: 'Confront subtle social ostracism in a close group, balance loyalty, and advocate for belonging.',
  synopsis:
    'Your established social group has welcomed a newer, quieter friend named Tariq over the past six months. But during brunch, you notice a second, secret WhatsApp group titled "Real Crew" where weekend cabin trips are being coordinated without him. When Tariq asks what everyone is up to this Saturday, an awkward silence settles over the table. How do you respond?',
  estimatedMinutes: 20,
  difficulty: 'Intermediate',
  timeSetting: 'Sunday Afternoon Brunch, 1:15 PM',
  location: 'The Rusty Lantern Courtyard',
  tags: ['Group Dynamics', 'Inclusion', 'Peer Pressure', 'Integrity', 'Social Courage'],
  initialScenarioId: 'scene-brunch-secret',

  suspects: {
    'person-chloe': {
      id: 'person-chloe',
      name: 'Chloe Bennett',
      role: 'Informal Social Planner & Group Ringleader',
      age: 27,
      initialDemeanor: 'Charismatic, protective of original group intimacy, quick to gatekeep.',
      motive: 'Wants gatherings to feel effortless and familiar; perceives Tariq’s quiet demeanor as "awkward energy."',
      opportunity: 'Creates and manages the side chat where trips and dinners are planned in advance.',
      alibi: 'Claims the cabin only has four beds, so she didn’t want to make things complicated.',
      weakness: 'Dislikes direct friction and relies on indirect social freezing to push people out.',
      associatedClueIds: ['clue-side-chat-threads', 'clue-cabin-capacity'],
      interrogationSummary:
        'Chloe privately explains: "We’ve known each other for seven years. With Tariq, everything feels like small talk. I just wanted a weekend where we don’t have to play host."',
    },
    'person-tariq': {
      id: 'person-tariq',
      name: 'Tariq Al-Mansoor',
      role: 'Newer Social Group Member & Documentary Sound Editor',
      age: 26,
      initialDemeanor: 'Thoughtful, perceptive, self-conscious, observant of micro-rejections.',
      motive: 'Desires authentic community in a new city but is hyper-sensitive to being an unwanted burden.',
      opportunity: 'Was invited into the circle by you after collaborating on a film project.',
      alibi: 'Genuinely believed the group had embraced him until the recent secrecy.',
      weakness: 'Quick to withdraw into complete isolation when he senses polite exclusion.',
      associatedClueIds: ['clue-tariq-isolation'],
      interrogationSummary:
        'Tariq remarks quietly: "I can tell when people are glancing at each other before answering. It’s worse than being told directly that I’m not invited."',
    },
  },

  clues: {
    'clue-side-chat-threads': {
      id: 'clue-side-chat-threads',
      title: 'The "Real Crew" Group Chat Notification',
      category: 'digital',
      shortDescription: 'Active side-channel where 4 out of 5 people at the table are coordinating.',
      detailedAnalysis:
        'A notification pops up on Chloe’s screen showing grocery lists, playlist assignments, and arrival times for the Lake Huron cabin this weekend—all arranged behind Tariq’s back.',
      locationFound: 'Chloe’s Phone Screen at Brunch',
      tags: ['Cliquishness', 'Exclusion', 'Communication'],
    },
    'clue-cabin-capacity': {
      id: 'clue-cabin-capacity',
      title: 'Cabin Booking Details',
      category: 'document',
      shortDescription: 'The rental actually accommodates six guests, contrary to Chloe’s claim.',
      detailedAnalysis:
        'The Airbnb listing shared in the group shows three queen bedrooms and a pull-out sofa. The exclusion is social preference, not space constraint.',
      locationFound: 'Group Chat Link',
      tags: ['Dishonesty', 'Excuses', 'Selectivity'],
    },
    'clue-tariq-isolation': {
      id: 'clue-tariq-isolation',
      title: 'Tariq’s Subtle Posture Shift',
      category: 'testimony',
      shortDescription: 'Tariq’s sudden pullback when the topic of weekend plans was brought up.',
      detailedAnalysis:
        'When Tariq asked about the weekend, Chloe froze and looked down at her plate. Tariq noticed the hesitation, pulled his phone closer, and smiled faintly, shrinking back into his jacket.',
      locationFound: 'Courtyard Table Dynamics',
      tags: ['Body Language', 'Social Pain', 'Perception'],
    },
  },

  connections: [
    {
      id: 'conn-gatekeeping-motive',
      clueA: 'clue-side-chat-threads',
      clueB: 'clue-cabin-capacity',
      deductionTitle: 'Comfort-Seeking Gatekeeping',
      deductionText:
        'Chloe’s gatekeeping is not malicious cruelty, but passive cowardice: she prefers lying by omission over having an honest conversation or making space for a new friend to find his footing.',
      unlockedFlag: 'flag_unmasked_gatekeeping',
    },
  ],

  hypotheses: {
    'hyp-bridge-inclusion': {
      id: 'hyp-bridge-inclusion',
      title: 'Advocate Directly for Group Integrity and Honest Transparency',
      accusedSuspectId: 'person-chloe',
      motiveSummary: 'Chloe is prioritizing effortless nostalgia over relational hospitality.',
      methodSummary: 'Name the reality respectfully, refuse complicity in side chats, and invite Tariq actively.',
      requiredClueIds: ['clue-side-chat-threads', 'clue-cabin-capacity'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-courageous-inclusion',
      failureEndingId: 'ending-silent-complicity',
    },
  },

  scenarios: {
    'scene-brunch-secret': {
      id: 'scene-brunch-secret',
      title: 'The Hesitation at the Table',
      location: 'The Rusty Lantern Courtyard',
      narrative: [
        'The sun streams through the courtyard pergola. Plates of French toast and avocado tartines cover the wooden table. For forty minutes, conversation flowed smoothly.',
        'Then Tariq wiped his hands with a napkin and smiled warmly: "Hey, do you guys have any plans for the long weekend? I finally finished color-grading that pilot and have three days free."',
        'Chloe’s fork freezes halfway to her mouth. She shoots a rapid, warning glance at Liam across the table. Nobody speaks for three painful seconds.',
      ],
      dialogue: [
        {
          speaker: 'Chloe',
          text: 'Oh... um, we were just thinking of keeping it super low-key, honestly. Catching up on sleep, running errands.',
          mood: 'evasive',
        },
        {
          speaker: 'Tariq',
          text: 'Ah, gotcha. Totally. Good weekend to recharge.',
          mood: 'grief',
        },
      ],
      cluesDiscovered: ['clue-side-chat-threads', 'clue-tariq-isolation'],
      choices: [
        {
          id: 'choice-speak-up-table',
          text: 'Break the lie publicly: "Actually, Chloe, Liam and I are heading up to the cabin. We definitely have room for one more—Tariq, would you want to join us?"',
          destinationId: 'scene-public-intervention',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'social_courage', value: 2 },
            { type: 'incrementVariable', target: 'chloe_friction', value: 2 },
            { type: 'setFlag', target: 'flag_public_inclusion_called', value: true },
          ],
        },
        {
          id: 'choice-stay-silent-table',
          text: 'Look down at your coffee and let Chloe’s answer stand, deciding you will deal with it in private later.',
          destinationId: 'scene-private-aftermath',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'social_courage', value: 1 },
            { type: 'setFlag', target: 'flag_bystander_silence', value: true },
          ],
        },
        {
          id: 'choice-deflect-with-tariq-plan',
          text: 'Offer a direct personal counter-invite: "I actually have some studio stuff, but Tariq, do you want to hit the indie cinema retrospective on Saturday?"',
          destinationId: 'scene-side-alliance',
          consequencePreview: 'Inquisitive',
          effects: [
            { type: 'incrementVariable', target: 'tariq_trust', value: 1 },
            { type: 'setFlag', target: 'flag_parallel_invitation', value: true },
          ],
        },
      ],
    },

    'scene-public-intervention': {
      id: 'scene-public-intervention',
      title: 'The Air Clears—And Stiffens',
      location: 'The Rusty Lantern Courtyard',
      narrative: [
        'Your words shatter the polite veneer. Chloe’s cheeks flush bright pink. Liam coughs nervously into his water glass.',
        'Tariq looks stunned, shifting his gaze from Chloe’s stricken face to yours. He realizes instantly that a trip existed and that Chloe had just lied to his face.',
        '"Wait," Tariq says, his voice quiet and even. "You guys booked a cabin?"',
      ],
      dialogue: [
        {
          speaker: 'Chloe',
          text: 'It was planned months ago before we even knew you were free, Tariq. It wasn’t personal!',
          mood: 'defiant',
        },
        {
          speaker: 'Tariq',
          text: 'It’s fine, Chloe. You don’t have to invite me out of pity.',
          mood: 'calm',
        },
      ],
      cluesDiscovered: ['clue-cabin-capacity'],
      choices: [
        {
          id: 'choice-own-the-group-failure',
          text: '"It’s not pity, Tariq. It’s that we were being cowardly and cliquey with side chats, and that’s on us, not you. The house has beds, and we’d genuinely love you there."',
          destinationId: 'scene-honest-breakthrough',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'integrity_score', value: 2 },
            { type: 'setFlag', target: 'flag_acknowledged_clique', value: true },
          ],
        },
        {
          id: 'choice-attack-chloe',
          text: '"Chloe specifically lied to you because she thinks keeping the old crew isolated is more important than basic respect."',
          destinationId: 'scene-group-implosion',
          consequencePreview: 'Risky',
          effects: [
            { type: 'incrementVariable', target: 'chloe_friction', value: 3 },
            { type: 'setFlag', target: 'flag_scapegoated_chloe', value: true },
          ],
        },
      ],
    },

    'scene-private-aftermath': {
      id: 'scene-private-aftermath',
      title: 'The Bitter Walk Home',
      location: 'Pedestrian Walkway, 2:30 PM',
      narrative: [
        'Brunch ended in awkward hurry. Tariq made an excuse about needing to feed his cat and left forty-five minutes early, walking with his hands buried in his pockets.',
        'You pull Chloe aside as you both leave the restaurant. "Why did you lie to him like that? The cabin has plenty of room."',
        'Chloe rolls her eyes defensively. "Because I don’t want to babysit someone’s mood all weekend! We’ve had this trip tradition since sophomore year. Why do I have to apologize for wanting time with just my oldest friends?"',
      ],
      dialogue: [
        {
          speaker: 'Chloe',
          text: 'You brought him into the group. That doesn’t mean he automatically gets grandfathered into every sacred tradition we have.',
          mood: 'defiant',
        },
      ],
      choices: [
        {
          id: 'choice-challenge-side-chat-culture',
          text: '"You don’t have to invite everyone to everything, Chloe. But lying to someone’s face at a table while whispering in a secret chat is toxic. If we’re doing secret tiers, count me out of the cabin."',
          destinationId: 'scene-principled-stand',
          consequencePreview: 'Direct',
          effects: [
            { type: 'incrementVariable', target: 'integrity_score', value: 2 },
            { type: 'setFlag', target: 'flag_boycotted_cabin', value: true },
          ],
        },
        {
          id: 'choice-cave-to-nostalgia',
          text: '"Fine. But next time don’t put me in a position where I have to sit there while you lie."',
          destinationId: 'scene-ending-complicity',
          consequencePreview: 'Subtle',
          effects: [
            { type: 'decrementVariable', target: 'integrity_score', value: 2 },
            { type: 'setFlag', target: 'flag_complacent_acceptance', value: true },
          ],
        },
      ],
    },

    'scene-side-alliance': {
      id: 'scene-side-alliance',
      title: 'The Parallel Bridge',
      location: 'Cinema Lobby, Saturday Afternoon',
      isEnding: true,
      endingId: 'ending-parallel-anchor',
      narrative: [
        'You chose not to explode the brunch table, but you made sure Tariq was not left adrift. On Saturday, the two of you meet for the film retrospective.',
        'Over a post-screening drink, Tariq looks at you with gratitude and sharp clarity: "I knew what Chloe was doing at brunch. I’m not stupid. But I appreciated that you didn’t pretend not to see it, and that you made real time for me today."',
        'You realize that social groups are not monoliths: one-on-one loyalty often provides deeper shelter than forcing an unwilling clique into simulated enthusiasm.',
      ],
      dialogue: [
        {
          speaker: 'Tariq',
          text: 'I don’t need Chloe to love me. But it’s good to know I have one real friend in that room.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-honest-breakthrough': {
      id: 'scene-honest-breakthrough',
      title: 'Dismantling the False Gate',
      location: 'Courtyard Table, 1:45 PM',
      isEnding: true,
      endingId: 'ending-courageous-inclusion',
      narrative: [
        'Taking collective accountability rather than turning Chloe into a villain shifted the room. Chloe softened, exhaling her defensive posture.',
        '"Look," Chloe admitted, looking genuinely ashamed. "I was being territorial and childish. I was scared the trip would change if we added someone new. Tariq, that was really unfair to you, and I am genuinely sorry."',
        'Tariq took a moment before answering. He didn’t leap to say "it’s fine"—he allowed the apology to land. Then he smiled: "I make a killer breakfast shakshuka. If there’s an apron at the cabin, I’m in."',
      ],
      dialogue: [
        {
          speaker: 'Chloe',
          text: 'Deal. And I am deleting the stupid side chat right now.',
          mood: 'calm',
        },
      ],
      choices: [],
    },

    'scene-principled-stand': {
      id: 'scene-principled-stand',
      title: 'A Necessary Line in the Sand',
      location: 'Outside Chloe’s Apartment',
      isEnding: true,
      endingId: 'ending-courageous-inclusion',
      narrative: [
        'You declined the cabin trip. Chloe was stunned that you chose social solidarity over group convenience.',
        'Over the weekend, Chloe reflected on how her cliquishness had driven a wedge into her oldest friendships. The cabin trip went forward, but the group dynamic was permanently shaken out of its smug complacency.',
        'Meanwhile, you and Tariq spent Saturday cooking and talking. You showed that belonging in your world is not governed by secretive tiers.',
      ],
      dialogue: [
        {
          speaker: 'Chloe (Text)',
          text: 'The cabin was quiet without you. You were right about the side chat. We need to talk when I get back.',
          mood: 'intrigued',
        },
      ],
      choices: [],
    },

    'scene-group-implosion': {
      id: 'scene-group-implosion',
      title: 'The Scorched Earth',
      location: 'The Rusty Lantern Courtyard',
      isEnding: true,
      endingId: 'ending-destructive-crusade',
      narrative: [
        'By publicly attacking Chloe’s character rather than addressing the behavior, you created an instant tribal war. Chloe burst into tears, slammed cash on the table, and stormed out.',
        'Liam glared at you: "Did you really have to do that in the middle of a restaurant?" Tariq looked mortified, feeling like the catalyst for an atomic blast in a group he barely knew.',
      ],
      dialogue: [
        {
          speaker: 'Tariq',
          text: 'I really wish you hadn’t done that. Now everyone blames me for this fight.',
          mood: 'grief',
        },
      ],
      choices: [],
    },

    'scene-ending-complicity': {
      id: 'scene-ending-complicity',
      title: 'The Silent Accomplice',
      location: 'Lake Huron Cabin, Saturday Night',
      isEnding: true,
      endingId: 'ending-silent-complicity',
      narrative: [
        'You went to the cabin. The lake was beautiful, but a heavy sour taste hung over every conversation.',
        'Two weeks later, Tariq stopped replying to the main group chat entirely. He quietly unfollowed everyone and faded out of your life, having learned that your friendship was conditional upon Chloe’s permission.',
      ],
      dialogue: [
        {
          speaker: 'Inner Voice',
          text: 'We kept the old tradition alive, but at the cost of our self-respect.',
          mood: 'grief',
        },
      ],
      choices: [],
    },
  },

  endings: {
    'ending-courageous-inclusion': {
      id: 'ending-courageous-inclusion',
      title: 'Courageous Inclusion: Integrity Over Cliquish Comfort',
      tier: 'triumph',
      badge: 'SOCIAL INTEGRITY',
      narrative: [
        'You broke the cardinal rule of passive social circles: you refused to play along with silent exclusion. By naming the dynamic with poise and refusing to participate in secondary tiers, you pushed the group into maturity.',
        'Belonging is not created by keeping the perimeter tight; it is created by having the courage to widen the circle without fear.',
      ],
      summary: 'You dismantled a secretive side-clique, defended a newer friend’s dignity, and set a higher standard for group conduct.',
      criteriaReview: {
        theTruth:
          'Chloe’s gatekeeping was driven by fear of disrupting easy nostalgia. She needed a clear peer challenge to recognize how cruel her omission felt.',
        yourDeduction:
          'You correctly identified that silence in the presence of ostracism is functional agreement, and that direct intervention was required.',
        accuracyRate: 95,
        keyDiscoveries: [
          'Recognized that side-chats create toxic informal hierarchies.',
          'Understood that Tariq noticed the micro-rejections long before anyone spoke.',
          'Refused to sacrifice personal values for comfortable group acceptance.',
        ],
        missedOpportunities: [
          'Could have checked in with Chloe before brunch if you had noticed the cabin planning earlier.',
        ],
        reasoningCritique:
          'Masterful social courage. You held peers accountable without destroying the fabric of the community, prioritizing human dignity over cliquish preservation.',
      },
    },

    'ending-parallel-anchor': {
      id: 'ending-parallel-anchor',
      title: 'Individual Sanctuary: The True Companion',
      tier: 'partial',
      badge: 'AUTHENTIC ALLY',
      narrative: [
        'You didn’t reform the entire group, but you provided Tariq with what mattered most: an ally who sees through the social theatre and shows up consistently one-on-one.',
        'Not every social group can be redeemed, but any two people can build an honest friendship that transcends the crowd.',
      ],
      summary: 'You bypassed group politics to build a resilient, direct bond with Tariq outside the clique.',
      criteriaReview: {
        theTruth:
          'Tariq cared far more about having one genuine, loyal friend than being reluctantly tolerated on a crowded cabin weekend.',
        yourDeduction:
          'You focused your energy where it had the highest authentic impact—nurturing direct relationship over fighting group politics.',
        accuracyRate: 80,
        keyDiscoveries: [
          'Recognized that forced group inclusion often feels like humiliation to the excluded party.',
          'Demonstrated authentic loyalty through dedicated personal time.',
        ],
        missedOpportunities: [
          'Chloe’s gatekeeping behavior remained unaddressed within the wider group.',
        ],
        reasoningCritique:
          'Very solid relational wisdom. You protected the vulnerable individual directly, even if you left the group’s systemic dysfunction intact.',
      },
    },

    'ending-silent-complicity': {
      id: 'ending-silent-complicity',
      title: 'Silent Complicity: The Cost of Convenience',
      tier: 'compromised',
      badge: 'BYSTANDER APATHY',
      narrative: [
        'You chose your own social convenience and peace over speaking up when you saw someone quietly ostracized. You kept your spot at the cabin, but lost Tariq’s trust and diminished your own moral standing.',
        'Every time we smile at a lie told to exclude someone, we become the gatekeeper.',
      ],
      summary: 'Your silence preserved weekend cabin plans but permanently alienated a loyal friend.',
      criteriaReview: {
        theTruth:
          'Tariq knew you saw the exclusion and did nothing. Your silence communicated that Chloe’s approval mattered more to you than his dignity.',
        yourDeduction:
          'You rationalized your inaction as "avoiding drama," confusing cowardice with diplomacy.',
        accuracyRate: 35,
        keyDiscoveries: [
          'Discovered that silent bystanders inflict just as much pain as active bullies.',
        ],
        missedOpportunities: [
          'Failed to speak at the table.',
          'Failed to reject the secret side-chat culture.',
        ],
        reasoningCritique:
          'Poor relational courage. By prioritizing immediate comfort over fairness, you allowed subtle cruelty to define your social circle.',
      },
    },

    'ending-destructive-crusade': {
      id: 'ending-destructive-crusade',
      title: 'Self-Righteous Explosion: Moral Superiority Gone Wild',
      tier: 'partial',
      badge: 'COLLATERAL DAMAGE',
      narrative: [
        'You were on the side of justice, but you delivered it like a sledgehammer. By publicly humiliating Chloe and weaponizing Tariq’s presence, you turned a social grievance into a public spectacle.',
        'Advocating for someone against their wishes and causing them further embarrassment is not advocacy; it is ego.',
      ],
      summary: 'Aggressive moral grandstanding shattered the group and left Tariq feeling more exposed and humiliated than before.',
      criteriaReview: {
        theTruth:
          'Tariq wanted subtle dignity and honest friendship, not to be the centerpiece of a public dining-room brawl.',
        yourDeduction:
          'You channeled genuine indignation into vindictive aggression rather than measured accountability.',
        accuracyRate: 45,
        keyDiscoveries: [
          'Learned that how you say the truth matters as much as the truth itself.',
        ],
        missedOpportunities: [
          'Did not consider Tariq’s comfort before launching into a scorched-earth attack.',
        ],
        reasoningCritique:
          'Misguided execution. Passion without tactical empathy often destroys the people you set out to defend.',
      },
    },
  },
};

import { Episode } from '@/features/episodes/types';

export const theThamesAlibiEpisode: Episode = {
  id: 'the-thames-alibi',
  version: '1.0.0',
  title: 'The Whispering Docks of Wapping',
  subtitle: 'The Disappearance of Inspector Vance & The Thames Smugglers',
  synopsis:
    'On a frostbitten autumn night along the London docks, river customs surveyor Donald Vance went missing from Wapping Pier. A bloodstained pocket watch, a forged ship manifest, and contradictory waterman alibis point to an inside smuggling ring operated from the tavern cellar. Recover the truth before the morning tide washes away all trace.',
  estimatedMinutes: 25,
  difficulty: 'Detective',
  caseType: 'missing_person',
  seriesId: 'london-constabulary',
  seriesName: 'London Constabulary Inquiries',
  seriesPart: 2,
  prerequisiteEpisodeId: 'the-midnight-cipher',
  timeSetting: 'Night, November 14, 1894',
  location: 'Wapping Wharves & The Gilded Anchor Tavern, London',
  initialScenarioId: 'scene-pier-arrival',
  tags: ['Missing Person', 'Smuggling', 'Noir', 'Thames', 'Deception'],

  suspects: {
    'suspect-quinn': {
      id: 'suspect-quinn',
      name: 'Captain Malachi Quinn',
      role: 'Master of the Dutch Cargo Ketch "Zeemeeuw"',
      age: 48,
      initialDemeanor: 'Gruff, weathered, and dismissive of landlubber inquiries.',
      motive: 'Avoid customs seizure of a high-value shipment of untaxed opium and industrial optical lenses.',
      opportunity: 'Moored at Wapping pier right when Inspector Vance conducted the midnight boarding check.',
      alibi: 'Claims he was asleep in his cabin with the hatch bolted from 11:00 PM until the police sirens sounded.',
      weakness: 'Recent port citations for falsified cargo weight and unregistered midnight moorings.',
      associatedClueIds: ['clue-cargo-manifest', 'clue-quinn-ledger', 'clue-lantern-oil'],
      interrogationSummary: 'Quinn admits Vance boarded his vessel, but swears the inspector left without incident before midnight.',
    },
    'suspect-maggie': {
      id: 'suspect-maggie',
      name: 'Maggie "The Gilded" Fletcher',
      role: 'Publican of The Gilded Anchor Tavern',
      age: 39,
      initialDemeanor: 'Sharptongued, fiercely protective of her tavern cellar and regular dock patrons.',
      motive: 'Inspector Vance uncovered an underground cellar chute leading directly into the low-tide river wall.',
      opportunity: 'Was behind the tavern bar overlooking the wharf steps throughout the night.',
      alibi: 'Insists the cellar was locked all evening and she was pouring ale for the stevedores.',
      weakness: 'Possesses the only brass key to the river chute gate.',
      associatedClueIds: ['clue-cellar-key', 'clue-whispering-chute', 'clue-maggie-apron'],
      interrogationSummary: 'Maggie denies Vance ever entered her cellar, claiming he argued with a waterman on the stairs.',
    },
    'suspect-hobbs': {
      id: 'suspect-hobbs',
      name: 'Silas Hobbs',
      role: 'Licensed Thames Waterman & Lighterman',
      age: 34,
      initialDemeanor: 'Nervous, smelling strongly of river mud and lamp paraffin.',
      motive: 'Paid a substantial bribe by the smugglers to transport Vance under duress across to the Rotherhithe marshes.',
      opportunity: 'Operating his skiff near the pier steps between 11:30 PM and 1:00 AM.',
      alibi: 'Claims his boat was tied to the buoy because the rudder pin snapped at 10:45 PM.',
      weakness: 'Fresh oarsman calluses and wet river mud matching the low-water marks on his trousers.',
      associatedClueIds: ['clue-rudder-pin', 'clue-muddy-skiff', 'clue-tide-chart'],
      interrogationSummary: 'Hobbs stammers when asked how his skiff was seen midstream if his rudder was supposedly broken.',
    },
  },

  clues: {
    'clue-pocket-watch': {
      id: 'clue-pocket-watch',
      title: 'Inspector Vance’s Smashed Pocket Watch',
      category: 'physical',
      shortDescription: 'Silver customs pocket watch found wedged between pier timbers.',
      detailedAnalysis:
        'The crystal is cracked and stained with brackish river silt. The hands stopped violently at 11:48 PM, indicating the exact moment of a violent scuffle on the wharf edge.',
      locationFound: 'Wapping Pier Steps',
      tags: ['Physical', 'Time', 'Forensic'],
    },
    'clue-cargo-manifest': {
      id: 'clue-cargo-manifest',
      title: 'Altered Dutch Cargo Manifest',
      category: 'document',
      shortDescription: 'Shipping papers for the ketch "Zeemeeuw" with scratched-out tonnage figures.',
      detailedAnalysis:
        'A duplicate copy recovered from Vance’s satchel shows a discrepancy of 40 crates marked as "Pickled Herrings" which were actually imported optical prisms and high-grade Turkish tobacco.',
      locationFound: 'Customs Guardhouse Desk',
      tags: ['Document', 'Contraband', 'Smuggling'],
    },
    'clue-rudder-pin': {
      id: 'clue-rudder-pin',
      title: 'Undamaged Brass Rudder Pin',
      category: 'physical',
      shortDescription: 'A functioning brass pin found in Silas Hobbs’s coat pocket.',
      detailedAnalysis:
        'Silas claimed his rudder broke at 10:45 PM, but this pin is completely intact and matches his boat rudder pintle perfectly, proving his broken-boat alibi is a deliberate lie.',
      locationFound: 'Silas Hobbs’s Coat Pocket',
      tags: ['Physical', 'Alibi', 'Waterman'],
      contradictsSuspectId: 'suspect-hobbs',
      contradictionNote: 'Proves Silas was operating his skiff across the river during the disappearance.',
    },
    'clue-whispering-chute': {
      id: 'clue-whispering-chute',
      title: 'The Gilded Anchor Smuggler’s Chute',
      category: 'physical',
      shortDescription: 'A secret sliding trapdoor connecting the tavern cellar directly to the river mudflats.',
      detailedAnalysis:
        'Fresh scrape marks on the wooden ramp and rope burns indicate heavy cargo—and a struggling captive—were pushed down this chute during the low-tide window around midnight.',
      locationFound: 'Tavern Wine Cellar Behind Casks',
      tags: ['Physical', 'Location', 'Smuggling'],
    },
    'clue-tide-chart': {
      id: 'clue-tide-chart',
      title: 'Annotated Thames Low-Tide Table',
      category: 'document',
      shortDescription: 'Tide chart with handwritten pencil notations for 11:30 PM–12:30 AM.',
      detailedAnalysis:
        'Marks indicate that the low-tide mudflat was walkable only between 11:30 PM and 12:15 AM. Any crossing to Rotherhithe on foot or shallow draft skiff had to occur within this exact 45-minute window.',
      locationFound: 'Pier Master’s Desk',
      tags: ['Document', 'Time', 'Navigation'],
    },
    'clue-cellar-key': {
      id: 'clue-cellar-key',
      title: 'Maggie’s Heavy Brass River-Gate Key',
      category: 'physical',
      shortDescription: 'An ornate brass key kept on Maggie Fletcher’s belt ring.',
      detailedAnalysis:
        'Traces of fresh tallow grease on the key bit match the freshly greased padlock of the cellar river chute, confirming it was unlocked tonight.',
      locationFound: 'Bar Counter Behind Taps',
      tags: ['Physical', 'Access', 'Tavern'],
    },
    'clue-quinn-ledger': {
      id: 'clue-quinn-ledger',
      title: 'Captain Quinn’s Private Bribe Book',
      category: 'document',
      shortDescription: 'Leather notebook with cipher initials and cash payouts.',
      detailedAnalysis:
        'Lists regular payments of £15 to "S.H." (Silas Hobbs) and £20 to "M.F." (Maggie Fletcher) for nighttime cargo clearance without customs inspection.',
      locationFound: 'Captain’s Sea Chest Aboard Ketch',
      tags: ['Document', 'Financial', 'Conspiracy'],
    },
    'clue-muddy-skiff': {
      id: 'clue-muddy-skiff',
      title: 'River Mud Traces in Silas’s Skiff',
      category: 'physical',
      shortDescription: 'Dark blue river clay and hemp fibers inside the rowboat bilge.',
      detailedAnalysis:
        'The mud contains high concentrations of tannery effluent unique to the Rotherhithe shore, proving Silas rowed across to the abandoned tannery warehouse tonight.',
      locationFound: 'Wapping Basin Mooring',
      tags: ['Physical', 'Forensic', 'Navigation'],
    },
  },

  connections: [
    {
      id: 'conn-conspiracy-bypass',
      clueA: 'clue-cargo-manifest',
      clueB: 'clue-quinn-ledger',
      deductionTitle: 'Coordinated Customs Evasion Ring',
      deductionText:
        'Captain Quinn did not act alone. He systematically paid Maggie Fletcher for cellar storage and Silas Hobbs for river transport to bypass customs inspector Donald Vance entirely.',
      unlockedFlag: 'knows_customs_ring',
    },
    {
      id: 'conn-vance-abduction-route',
      clueA: 'clue-pocket-watch',
      clueB: 'clue-whispering-chute',
      deductionTitle: 'The Cellar Abduction Mechanism',
      deductionText:
        'Inspector Vance was ambushed on the pier steps at 11:48 PM, dragged into the tavern cellar, and pushed down the chute into Silas’s waiting boat while the tide was at lowest ebb.',
      unlockedFlag: 'knows_abduction_method',
    },
    {
      id: 'conn-rotherhithe-destination',
      clueA: 'clue-muddy-skiff',
      clueB: 'clue-rudder-pin',
      deductionTitle: 'Silas’s Secret Destination',
      deductionText:
        'Silas Hobbs lied about his rudder. He used his working skiff to ferry the captive Inspector Vance across the Thames directly to the abandoned Rotherhithe tannery storehouse.',
      unlockedFlag: 'knows_rotherhithe_hideout',
    },
  ],

  hypotheses: {
    'hypo-ring-conspiracy': {
      id: 'hypo-ring-conspiracy',
      title: 'Quinn, Fletcher & Hobbs: Organized Customs Kidnapping',
      accusedSuspectId: 'suspect-quinn',
      motiveSummary: 'Prevent the impounding of forty crates of illegal Dutch optical contraband and avoid federal penal exile.',
      methodSummary: 'Ambushed Vance at 11:48 PM on the pier, forced him through the tavern chute, and Silas ferried him to the Rotherhithe tannery.',
      requiredClueIds: ['clue-pocket-watch', 'clue-cargo-manifest', 'clue-whispering-chute', 'clue-muddy-skiff'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
    'hypo-maggie-solo': {
      id: 'hypo-maggie-solo',
      title: 'Maggie Fletcher: Tavern Cellar Smuggling Homicide',
      accusedSuspectId: 'suspect-maggie',
      motiveSummary: 'Silenced Vance to protect her illicit river chute franchise.',
      methodSummary: 'Poisoned Vance in the cellar and dumped him directly into the river without accomplices.',
      requiredClueIds: ['clue-cellar-key', 'clue-whispering-chute'],
      disqualifyingClueIds: ['clue-quinn-ledger', 'clue-muddy-skiff'],
      isValidTruth: false,
      flawExplanation: 'Vance was not drowned in the river; mud analysis proves he was ferried alive across to Rotherhithe by Silas Hobbs on Quinn’s orders.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-wrong-conviction',
    },
    'hypo-hobbs-waterman': {
      id: 'hypo-hobbs-waterman',
      title: 'Silas Hobbs: Drunken Pier Robbery',
      accusedSuspectId: 'suspect-hobbs',
      motiveSummary: 'Stole Vance’s silver watch and gold sovereign customs purse.',
      methodSummary: 'Clubbed Vance on the pier stairs and threw him into the river.',
      requiredClueIds: ['clue-pocket-watch', 'clue-rudder-pin'],
      disqualifyingClueIds: ['clue-quinn-ledger'],
      isValidTruth: false,
      flawExplanation: 'Hobbs was merely the hired ferryman; the entire operation was financed by Captain Quinn and facilitated by Maggie Fletcher.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-partial',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'The River Rescuer & The Smugglers’ Fall',
      tier: 'triumph',
      badge: 'FLAWLESS MARITIME DEDUCTION',
      narrative: [
        'Before the morning tide flooded the Thames Basin, your armed water-police launch surrounded both Captain Quinn’s ketch and the Rotherhithe tannery.',
        'Inspector Donald Vance was discovered bound and gagged inside the abandoned tannery drying shed, alive and clutching his customs seal.',
        'Faced with the ledger entries, the unbroken rudder pin, and the chute grease matching the cellar key, Captain Quinn, Maggie Fletcher, and Silas Hobbs collapsed into mutual accusations.',
        'The forty crates of contraband were seized, the underground river gate was permanently sealed in concrete, and Vance returned to his post as Chief River Surveyor.',
      ],
      summary: 'All three conspirators were arrested, the contraband was impounded, and Inspector Vance was rescued alive before the tide turned.',
      criteriaReview: {
        theTruth: 'Captain Quinn directed the ambush, Maggie Fletcher provided the trapdoor exit, and Silas Hobbs ferried Vance to Rotherhithe.',
        yourDeduction: 'You correlated the watch timing, cargo papers, and skiff river-clay to expose the entire smuggling route.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Inspector Vance’s Smashed Pocket Watch',
          'Altered Dutch Cargo Manifest',
          'The Gilded Anchor Smuggler’s Chute',
          'River Mud Traces in Silas’s Skiff',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Brilliant maritime deduction. You unraveled both the physical route and the financial conspiracy.',
      },
    },
    'ending-partial': {
      id: 'ending-partial',
      title: 'The Waterman’s Sacrifice',
      tier: 'partial',
      badge: 'INCOMPLETE CONVICTION',
      narrative: [
        'Police arrested Silas Hobbs at daybreak based on his unbroken rudder pin and the mud in his boat.',
        'Hobbs panicked and confessed to transporting a tied captive, leading police to rescue Vance at the tannery.',
        'However, without connecting the cargo manifest to Quinn’s private ledger, Captain Quinn set sail for Rotterdam on the morning tide with his illegal contraband intact.',
      ],
      summary: 'Vance was saved and the ferryman arrested, but the mastermind Captain Quinn escaped unpunished with the contraband.',
      criteriaReview: {
        theTruth: 'Captain Quinn paid Hobbs and Fletcher to carry out the kidnapping.',
        yourDeduction: 'You focused on the transport mechanism while letting the primary smuggling architect escape.',
        accuracyRate: 65,
        keyDiscoveries: ['Inspector Vance’s Smashed Pocket Watch', 'Undamaged Brass Rudder Pin'],
        missedOpportunities: ['Captain Quinn’s Private Bribe Book', 'Altered Dutch Cargo Manifest'],
        reasoningCritique: 'You secured the hostage but failed to impound the contraband and arrest the ringleader.',
      },
    },
    'ending-wrong-conviction': {
      id: 'ending-wrong-conviction',
      title: 'The Landlady’s Ruin',
      tier: 'wrong_conviction',
      badge: 'JUDICIAL MISCARRIAGE',
      narrative: [
        'You accused Maggie Fletcher of single-handedly murdering the inspector and dumping him down her cellar chute.',
        'While Maggie was arrested in tears, no body could be found in the river basin.',
        'Two days later, Inspector Vance’s body was recovered miles downstream near Greenwich marshes—having been abandoned by Quinn after your false accusation alerted the ring.',
      ],
      summary: 'Maggie was arrested for murder while the real smugglers disposed of Vance to eliminate all living evidence.',
      criteriaReview: {
        theTruth: 'Vance was alive in Rotherhithe; arresting only Maggie caused the smugglers to panic and silence Vance permanently.',
        yourDeduction: 'You overlooked the skiff mud and assumed the cellar chute was an execution spot rather than a transport point.',
        accuracyRate: 35,
        keyDiscoveries: ['The Gilded Anchor Smuggler’s Chute', 'Maggie’s Heavy Brass River-Gate Key'],
        missedOpportunities: ['River Mud Traces in Silas’s Skiff', 'Annotated Thames Low-Tide Table'],
        reasoningCritique: 'Fatal investigative error. Overlooking the boat mud directly led to the hostage being executed.',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'The Murky River Cold Case',
      tier: 'compromised',
      badge: 'UNSOLVED TRAGEDY',
      narrative: [
        'Morning broke over the Pool of London with no clear suspect apprehended.',
        'Captain Quinn weighed anchor at 6:00 AM, the tavern opened as usual, and Inspector Vance vanished into the river lore of Wapping.',
      ],
      summary: 'No decisive deductions were presented. The smugglers dispersed and the inspector was never found.',
      criteriaReview: {
        theTruth: 'A three-way conspiracy operated by Quinn, Fletcher, and Hobbs kidnapped the inspector.',
        yourDeduction: 'You failed to synthesize the clues before the critical low-tide window closed.',
        accuracyRate: 15,
        keyDiscoveries: [],
        missedOpportunities: ['Inspector Vance’s Smashed Pocket Watch', 'Captain Quinn’s Private Bribe Book'],
        reasoningCritique: 'Insufficient evidence collection and paralysis during the low-tide window.',
      },
    },
  },

  scenarios: {
    'scene-pier-arrival': {
      id: 'scene-pier-arrival',
      title: 'The Lantern on Wapping Pier',
      location: 'Wapping Pier Steps, River Thames',
      narrative: [
        'A thick November mist clings to the river, carrying the smell of brine, wet timber, and coal smoke.',
        'At the foot of the slick granite steps, Inspector Donald Vance’s customs satchel lies tipped over. Beside it, wedged into a timber gap, glints his silver pocket watch.',
        'Moored just twenty yards down the quay is the Dutch ketch "Zeemeeuw", its rigging creaking in the river current. Across the cobblestone lane, the gas-lit sign of The Gilded Anchor Tavern casts a dull amber glow.',
      ],
      cluesDiscovered: ['clue-pocket-watch'],
      choices: [
        {
          id: 'choice-inspect-customs-office',
          text: 'Enter the Pier Customs Guardhouse to review Vance’s logged manifests.',
          destinationId: 'scene-guardhouse',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-board-zeemeeuw',
          text: 'Walk down the pontoon and board Captain Quinn’s cargo ketch.',
          destinationId: 'scene-ketch-deck',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-enter-tavern',
          text: 'Cross the cobblestones into The Gilded Anchor Tavern.',
          destinationId: 'scene-tavern-taproom',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-guardhouse': {
      id: 'scene-guardhouse',
      title: 'The Pier Master’s Desk',
      location: 'Wapping Pier Customs Guardhouse',
      narrative: [
        'The small iron stove is cold. On Inspector Vance’s desk, an oil lamp flickers over open ledgers and tide tables.',
        'Vance was examining a duplicate cargo manifest for the "Zeemeeuw". Red ink circles note that the ship’s declared ballast weight does not match its draft marks in the river.',
        'Pinned to the wall beside the clock is an official tidal chart with fresh pencil annotations tracking tonight’s low-tide mudflat window.',
      ],
      cluesDiscovered: ['clue-cargo-manifest', 'clue-tide-chart'],
      choices: [
        {
          id: 'choice-from-guardhouse-to-ketch',
          text: 'Confront Captain Quinn aboard the "Zeemeeuw" with the altered manifest.',
          destinationId: 'scene-ketch-deck',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-from-guardhouse-to-tavern',
          text: 'Head to The Gilded Anchor to question Maggie Fletcher about river movements.',
          destinationId: 'scene-tavern-taproom',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-inspect-waterman-stairs',
          text: 'Inspect the waterman skiffs tied near the tavern slipway.',
          destinationId: 'scene-waterman-stairs',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-ketch-deck': {
      id: 'scene-ketch-deck',
      title: 'Aboard the "Zeemeeuw"',
      location: 'Main Deck & Captain’s Cabin, Ketch Zeemeeuw',
      narrative: [
        'The Dutch vessel smells of tar and curing herring. Captain Malachi Quinn leans against the wheelhouse, puffing an aromatic clay pipe.',
        '"Looking for Vance, are you?" Quinn growls in accented English. "He inspected my forward hold at eleven. Signed off on my salt fish and walked down the pier. What happened to him ashore is the Thames’ business, not mine."',
      ],
      dialogue: [
        { speaker: 'Captain Quinn', text: 'My papers are in order, detective. We sail for Rotterdam on the morning flood tide.', mood: 'defiant' },
      ],
      choices: [
        {
          id: 'choice-search-cabin',
          text: 'Demand to search the captain’s sea chest for financial records.',
          destinationId: 'scene-quinn-cabin',
          consequencePreview: 'Risky',
          conditions: [{ type: 'hasClue', target: 'clue-cargo-manifest' }],
          lockReason: 'Requires discovering the altered cargo manifest in the guardhouse first.',
        },
        {
          id: 'choice-ketch-to-tavern',
          text: 'Leave the deck and investigate The Gilded Anchor Tavern.',
          destinationId: 'scene-tavern-taproom',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-quinn-cabin': {
      id: 'scene-quinn-cabin',
      title: 'The Smuggler’s Sea Chest',
      location: 'Captain’s Quarters, Zeemeeuw',
      narrative: [
        'Beneath Quinn’s maritime charts lies a heavy iron-bound sea chest. Inside, hidden under Dutch navigation charts, is a slim leather cash ledger.',
        'The entries confirm systematic bribery payments to "M.F." at the tavern and "S.H." the waterman, with a final entry marked: "Vance removal fee — £35 paid upon delivery to river warehouse."',
      ],
      cluesDiscovered: ['clue-quinn-ledger'],
      choices: [
        {
          id: 'choice-quinn-to-waterman',
          text: 'Track down the waterman "S.H." at the pier steps.',
          destinationId: 'scene-waterman-stairs',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-quinn-to-cellar',
          text: 'Raid The Gilded Anchor’s cellar to find "M.F."’s connection.',
          destinationId: 'scene-tavern-cellar',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-tavern-taproom': {
      id: 'scene-tavern-taproom',
      title: 'The Gilded Anchor Taproom',
      location: 'Main Taproom, The Gilded Anchor',
      narrative: [
        'The air is thick with pipe smoke and spilled stout. Maggie Fletcher wipes the zinc bar with a damp rag, eyeing your trench coat.',
        '"Vance was in here earlier asking about cargo skiffs," Maggie says with a tight smile. "Told him I pour beer, I don’t tally boats. He argued with Silas Hobbs on the steps, then marched off towards the dock."',
      ],
      dialogue: [
        { speaker: 'Maggie Fletcher', text: 'Dock life is rough, detective. Men fall in the dark water all the time.', mood: 'evasive' },
      ],
      choices: [
        {
          id: 'choice-inspect-behind-bar',
          text: 'Examine the key ring and doorway behind the bar counter.',
          destinationId: 'scene-tavern-cellar',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-find-silas-in-taproom',
          text: 'Confront Silas Hobbs, who is drinking nervously in the corner booth.',
          destinationId: 'scene-waterman-stairs',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-tavern-cellar': {
      id: 'scene-tavern-cellar',
      title: 'The Secret River Chute',
      location: 'Underground Cellar, The Gilded Anchor',
      narrative: [
        'Down the steep stone steps, stacked barrels of port conceal a recessed iron bulkhead door.',
        'On the bar above, Maggie left her heavy brass key. Unlocking the bulkhead reveals a greased wooden slide sloping directly through the river wall to the low-tide mudflats.',
        'Fresh scrape marks, a dropped customs badge, and rope fibers on the ramp prove Inspector Vance was forced down this chute within the hour.',
      ],
      cluesDiscovered: ['clue-cellar-key', 'clue-whispering-chute'],
      choices: [
        {
          id: 'choice-cellar-to-slipway',
          text: 'Follow the river chute exit to the waterman slipway outside.',
          destinationId: 'scene-waterman-stairs',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-waterman-stairs': {
      id: 'scene-waterman-stairs',
      title: 'The Waterman’s Slipway',
      location: 'Low-Tide Basin, Wapping',
      narrative: [
        'At the bottom of the algae-covered slipway, Silas Hobbs is furiously scrubbing the inside of his skiff by lantern light.',
        '"Can’t help nobody tonight," Silas mutters without looking up. "Rudder pin snapped at ten. Been stuck here high and dry all evening."',
        'Yet resting in the bilge of his rowboat are thick cakes of deep blue tannery clay, and his coat pocket bulges with an unbroken brass rudder pin.',
      ],
      cluesDiscovered: ['clue-rudder-pin', 'clue-muddy-skiff'],
      choices: [
        {
          id: 'choice-confront-silas',
          text: 'Confront Silas with his unbroken pin and the Rotherhithe tannery mud.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Deductive',
          conditions: [
            { type: 'hasClue', target: 'clue-rudder-pin' },
            { type: 'hasClue', target: 'clue-muddy-skiff' },
          ],
          lockReason: 'Requires examining Silas’s boat and discovering the intact rudder pin.',
        },
        {
          id: 'choice-return-to-pier',
          text: 'Return to the main pier to assemble all evidence.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-final-confrontation': {
      id: 'scene-final-confrontation',
      title: 'Confrontation on the Riverfront',
      location: 'Wapping Pier & River Steps',
      narrative: [
        'The water-police patrol boat has docked, its steam siren hissing softly in the midnight mist.',
        'Captain Quinn, Maggie Fletcher, and Silas Hobbs stand on the pier under the scrutiny of armed constables. The tide is beginning to turn.',
        'You have gathered the evidence chain: the stopped watch at 11:48 PM, the altered cargo manifest, the greased cellar chute, and the Rotherhithe mud in the skiff.',
        'It is time to consult your Evidence Notebook, formulate the true hypothesis, and issue the final indictment.',
      ],
      choices: [
        {
          id: 'choice-reach-ending-triumph',
          text: 'Accuse the smuggling ring: Quinn’s cargo, Maggie’s cellar chute, and Silas’s ferry to Rotherhithe.',
          destinationId: 'scene-ending-dispatch',
          consequencePreview: 'Deductive',
          conditions: [{ type: 'hasConnection', target: 'conn-conspiracy-bypass' }],
          effects: [{ type: 'triggerConsequence', target: 'ending-triumph' }],
        },
        {
          id: 'choice-reach-ending-partial',
          text: 'Arrest Silas Hobbs alone for abducting the inspector in his skiff.',
          destinationId: 'scene-ending-dispatch',
          consequencePreview: 'Direct',
          effects: [{ type: 'triggerConsequence', target: 'ending-partial' }],
        },
        {
          id: 'choice-reach-ending-wrong',
          text: 'Accuse Maggie Fletcher of single-handedly murdering Vance in her tavern cellar.',
          destinationId: 'scene-ending-dispatch',
          consequencePreview: 'Risky',
          effects: [{ type: 'triggerConsequence', target: 'ending-wrong-conviction' }],
        },
      ],
    },

    'scene-ending-dispatch': {
      id: 'scene-ending-dispatch',
      title: 'River Police Resolution',
      location: 'Wapping Police Station & Thames Wharves',
      isEnding: true,
      endingId: 'ending-triumph',
      narrative: [
        'The case dossier is stamped and signed as the morning sun cuts through the Thames fog.',
      ],
      choices: [],
    },
  },
};

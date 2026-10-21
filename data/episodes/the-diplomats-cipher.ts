import { Episode } from '@/features/episodes/types';

export const theDiplomatsCipherEpisode: Episode = {
  id: 'the-diplomats-cipher',
  version: '1.0.0',
  title: 'The Dover Night Express',
  subtitle: 'The Poisoning of Envoy Moretti & The Continental Treaty Conspiracy',
  synopsis:
    'On a luxury night train speeding through the snow towards London, Italian diplomat Count Lorenzo Moretti is found dead inside his locked train compartment. A strange poison smell, torn peace papers, and suspicious passenger movements point to a high-stakes spy mystery that must be solved before the train reaches Victoria Station.',
  estimatedMinutes: 25,
  difficulty: 'Master Sleuth',
  caseType: 'espionage',
  seriesId: 'continental-inquiries',
  seriesName: 'Continental Art & Antiquities Inquiries',
  seriesPart: 2,
  prerequisiteEpisodeId: 'the-galleria-forgery',
  timeSetting: 'Night, December 19, 1924',
  location: 'Sleeper Car "Europa", Dover-to-London Night Express',
  initialScenarioId: 'scene-sleeper-corridor',
  tags: ['Espionage', 'Locked Room', 'Train', 'Conspiracy', 'Poison'],

  suspects: {
    'suspect-valois': {
      id: 'suspect-valois',
      name: 'Madame Hélène Valois',
      role: 'French Cultural Officer & Secret Messenger',
      age: 36,
      initialDemeanor: 'Calm, stylish, wearing a warm black travelling cloak, speaking with polite diplomatic words.',
      motive: 'Stop the secret agreement between Italy and German steel mills that would harm French interests.',
      opportunity: 'Stayed in Berth #5 right next to Moretti’s room with a shared ventilation duct.',
      alibi: 'Claims she was reading poetry in her room with the door locked from 11:30 PM onwards.',
      weakness: 'Her silver makeup box has a hidden spray chamber matching the poison gas found in the vents.',
      associatedClueIds: ['clue-valois-compact', 'clue-ventilator-residue'],
      interrogationSummary: 'Valois claims she was travelling only for cultural work and denies knowing anything about Moretti’s secret papers.',
    },
    'suspect-kruger': {
      id: 'suspect-kruger',
      name: 'Herr Otto Kruger',
      role: 'German Industrialist & Steel Company Representative',
      age: 51,
      initialDemeanor: 'Stiff and serious, wearing an eyeglass, clutching an iron-locked leather briefcase tightly.',
      motive: 'Moretti was planning to back out of a steel deal in favor of British shipping companies.',
      opportunity: 'Was seen walking up and down the corridor outside Moretti’s room around midnight.',
      alibi: 'Claims he was in the dining car smoking cigars with the train conductor until midnight.',
      weakness: 'Received a secret telegram in Dover stating that "Moretti must not reach London alive."',
      associatedClueIds: ['clue-kruger-wire', 'clue-champagne-glass'],
      interrogationSummary: 'Kruger admits he argued with Moretti earlier in the evening about trade deals, but swears he left him completely unharmed.',
    },
    'suspect-carter': {
      id: 'suspect-carter',
      name: 'Arthur Carter',
      role: 'Head Sleeping Car Attendant',
      age: 42,
      initialDemeanor: 'Nervous and jumpy, constantly jingling a heavy ring of brass train keys.',
      motive: 'Took a large cash bribe of 500 gold coins to drug Moretti’s evening drink and leave master keys accessible.',
      opportunity: 'The only train worker with master keys to all passenger rooms and ventilation controls.',
      alibi: 'Claims he was arranging ice and fresh sheets in the kitchen when the scream was heard.',
      weakness: 'Carries a special bent-wire tool that can unlock room door latches through the vent.',
      associatedClueIds: ['clue-steward-passkey', 'clue-berth-deadbolt', 'clue-galley-codebook'],
      interrogationSummary: 'Carter swears he only served the champagne and had no idea anyone planned to kill the foreign diplomat.',
    },
  },

  clues: {
    'clue-ventilator-residue': {
      id: 'clue-ventilator-residue',
      title: 'Hydrocyanic Acid Residue in Ceiling Louver',
      category: 'physical',
      shortDescription: 'Chemical trace inside the brass ceiling ventilation duct between Berth 4 and 5.',
      detailedAnalysis:
        'Prussian blue chemical reagent confirms high concentrations of gaseous hydrogen cyanide. The poison was not ingested; it was vaporized and blown through the ceiling grille while Moretti slept.',
      locationFound: 'Berth #4 Ceiling Grille',
      tags: ['Physical', 'Chemical', 'Forensic'],
    },
    'clue-shredded-treaty': {
      id: 'clue-shredded-treaty',
      title: 'Reconstructed Tripartite Balkan Treaty',
      category: 'document',
      shortDescription: 'Pieced-together document fragments recovered from Moretti’s waste pouch.',
      detailedAnalysis:
        'Outlines a secret pact shifting Mediterranean naval refueling rights to French rivals. Clause 14 specifically names French intelligence as actively monitoring the diplomatic courier.',
      locationFound: 'Moretti’s Berth Waste Basket',
      tags: ['Document', 'Diplomatic', 'Treaty'],
    },
    'clue-valois-compact': {
      id: 'clue-valois-compact',
      title: 'Silver Powder Compact with Hollow Atomizer',
      category: 'physical',
      shortDescription: 'Cartier vanity compact found in Madame Valois’s travelling reticule.',
      detailedAnalysis:
        'The cosmetic base conceals a miniaturized glass bulb and hand-pump rubber atomizer. Micro-swab tests reveal crystalline potassium cyanide residue identical to the ventilation duct traces.',
      locationFound: 'Madame Valois’s Berth #5',
      tags: ['Physical', 'Chemical', 'Weapon'],
      contradictsSuspectId: 'suspect-valois',
      contradictionNote: 'Proves Madame Valois carried the specific cyanide aerosol weapon used in the murder.',
    },
    'clue-steward-passkey': {
      id: 'clue-steward-passkey',
      title: 'Compagnie Internationale Brass Master Passkey',
      category: 'physical',
      shortDescription: 'Heavy skeleton key permitting entry into all private sleeper berths.',
      detailedAnalysis:
        'Scratches on the key bit match fresh metal burrs on Moretti’s door mortise lock. Carter allowed an operative to unlock the berth door before the chemical attack.',
      locationFound: 'Carter’s Steward Apron Pocket',
      tags: ['Physical', 'Access', 'Railway'],
    },
    'clue-kruger-wire': {
      id: 'clue-kruger-wire',
      title: 'Encrypted Dover Telegram to Otto Kruger',
      category: 'document',
      shortDescription: 'Cabled dispatch stamped at Dover Marine Station at 9:45 PM.',
      detailedAnalysis:
        'Decoded text reads: "Moretti carrying unilateral French embargo papers. Intervention mandatory prior to Whitehall arrival. Steel consortium funds available."',
      locationFound: 'Kruger’s Overcoat Pocket',
      tags: ['Document', 'Telegraph', 'Espionage'],
    },
    'clue-champagne-glass': {
      id: 'clue-champagne-glass',
      title: 'Drugged Crystal Champagne Flute',
      category: 'physical',
      shortDescription: 'Half-empty champagne glass beside Moretti’s bedside carafe.',
      detailedAnalysis:
        'Contains heavy sediment of chloral hydrate (a potent sleeping narcotic). Moretti was incapacitated into a deep unconscious slumber, preventing him from smelling the bitter almond cyanide vapor.',
      locationFound: 'Berth #4 Nightstand',
      tags: ['Physical', 'Poison', 'Medical'],
    },
    'clue-berth-deadbolt': {
      id: 'clue-berth-deadbolt',
      title: 'Manipulated Interior Deadbolt & Piano Wire',
      category: 'physical',
      shortDescription: 'A looped flexible steel wire found dropped behind the hallway runner rug.',
      detailedAnalysis:
        'Used to hook the internal deadbolt lever through the louvered door shutter from the outside hallway, creating the illusion of a sealed locked room after the assassin exited.',
      locationFound: 'Corridor Outside Berth #4',
      tags: ['Physical', 'Mechanical', 'Deception'],
    },
    'clue-galley-codebook': {
      id: 'clue-galley-codebook',
      title: 'Diplomatic One-Time Cipher Pad',
      category: 'document',
      shortDescription: 'Miniaturized numerical cipher book hidden inside a tea tin in the galley.',
      detailedAnalysis:
        'Contains the cryptographic keys used in the Dover telegrams, linking the payment to Arthur Carter directly to a Swiss bank account operated by French intelligence.',
      locationFound: 'Dining Car Galley Locker',
      tags: ['Document', 'Cipher', 'Financial'],
    },
  },

  connections: [
    {
      id: 'conn-aerosol-assassination',
      clueA: 'clue-ventilator-residue',
      clueB: 'clue-valois-compact',
      deductionTitle: 'The Aerosol Assassination Mechanism',
      deductionText:
        'Madame Valois utilized her custom atomizer compact to pump hydrogen cyanide gas through the adjoining ventilation louver into Moretti’s berth while he slept, leaving the door locked from the outside.',
      unlockedFlag: 'knows_valois_assassin',
    },
    {
      id: 'conn-carter-complicity',
      clueA: 'clue-champagne-glass',
      clueB: 'clue-steward-passkey',
      deductionTitle: 'The Steward’s Inside Betrayal',
      deductionText:
        'Arthur Carter drugged Moretti’s champagne with chloral hydrate to ensure the envoy could not wake or cry for help, then unlocked the door with his master passkey.',
      unlockedFlag: 'knows_steward_bribe',
    },
    {
      id: 'conn-locked-room-trick',
      clueA: 'clue-berth-deadbolt',
      clueB: 'clue-steward-passkey',
      deductionTitle: 'The Illusion of the Bolted Berth',
      deductionText:
        'The murder was not an impossible locked-room enigma. The assassin exited into the hallway, pulled the door shut, and engaged the interior bolt with a hooked piano-wire looped through the door louvers.',
      unlockedFlag: 'knows_locked_door_trick',
    },
  ],

  hypotheses: {
    'hypo-valois-state-assassin': {
      id: 'hypo-valois-state-assassin',
      title: 'Madame Valois: French Intelligence State Assassination',
      accusedSuspectId: 'suspect-valois',
      motiveSummary: 'Prevent the ratification of the secret Balkan naval treaty that would cripple French Mediterranean power.',
      methodSummary: 'Coordinated with Carter to drug Moretti’s champagne; pumped cyanide aerosol through the shared ventilation duct using her cosmetic atomizer.',
      requiredClueIds: ['clue-ventilator-residue', 'clue-valois-compact', 'clue-champagne-glass', 'clue-berth-deadbolt'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
    'hypo-kruger-steel-sabotage': {
      id: 'hypo-kruger-steel-sabotage',
      title: 'Otto Kruger: Industrial Steel Cartel Execution',
      accusedSuspectId: 'suspect-kruger',
      motiveSummary: 'Execute Moretti for reneging on Ruhr steel supply quotas.',
      methodSummary: 'Confronted Moretti in his berth and forced him to drink cyanide-laced champagne.',
      requiredClueIds: ['clue-kruger-wire', 'clue-champagne-glass'],
      disqualifyingClueIds: ['clue-ventilator-residue'],
      isValidTruth: false,
      flawExplanation: 'Moretti was not poisoned by drinking champagne; cyanide gas was introduced through the ceiling ventilator by Madame Valois.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-partial',
    },
    'hypo-carter-robbery': {
      id: 'hypo-carter-robbery',
      title: 'Arthur Carter: Steward Poison Robbery',
      accusedSuspectId: 'suspect-carter',
      motiveSummary: 'Steal the envoy’s diplomatic gold sovereigns to settle railway gambling debts.',
      methodSummary: 'Drugged Moretti and suffocated him with a sleeper pillow.',
      requiredClueIds: ['clue-steward-passkey'],
      disqualifyingClueIds: ['clue-valois-compact'],
      isValidTruth: false,
      flawExplanation: 'Carter was merely the bribed accomplice; the lethal cyanide was supplied and deployed by Madame Valois.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-wrong-conviction',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'The Victoria Station Diplomatic Arrest',
      tier: 'triumph',
      badge: 'INTERNATIONAL ESPIONAGE TRIUMPH',
      narrative: [
        'As the Night Express ground to a halt under the iron roof of Victoria Station, Special Branch detectives cordoned off Sleeper Car "Europa".',
        'Before Madame Valois could claim diplomatic immunity, you demonstrated the potassium cyanide residue in her Cartier atomizer and the hooked deadbolt wire in the corridor.',
        'Steward Carter broke down and produced the diplomatic cipher pad linking the payoff to Quai d’Orsay secret funds.',
        'The shredded Balkan treaty was reconstructed for the Prime Minister, an international diplomatic crisis was averted, and the assassin was transferred to the Tower of London.',
      ],
      summary: 'Madame Valois and Steward Carter were arrested at Victoria Station. The aerosol assassination was exposed and the treaty preserved.',
      criteriaReview: {
        theTruth: 'Madame Valois deployed cyanide aerosol through the ventilator after Carter drugged Moretti and unlocked the berth.',
        yourDeduction: 'You deduced the aerosol method, exposed the hooked wire deadbolt trick, and identified the true state assassin.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Hydrocyanic Acid Residue in Ceiling Louver',
          'Silver Powder Compact with Hollow Atomizer',
          'Drugged Crystal Champagne Flute',
          'Manipulated Interior Deadbolt & Piano Wire',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Superb international espionage deduction. You solved the locked-room illusion and identified the state operative.',
      },
    },
    'ending-partial': {
      id: 'ending-partial',
      title: 'The Steel Barons Framed',
      tier: 'partial',
      badge: 'DIPLOMATIC BLUNDER',
      narrative: [
        'Police arrested Otto Kruger at the station based on his Dover telegram and presence in the corridor.',
        'However, French intelligence whisked Madame Valois away in an embassy motorcar under diplomatic immunity with her cipher pad intact.',
        'Subsequent autopsy reports proved Moretti died of vapor inhalation rather than drink, leaving Kruger acquitted and the true killer free.',
      ],
      summary: 'The German industrialist was wrongfully detained while the true state assassin escaped under diplomatic immunity.',
      criteriaReview: {
        theTruth: 'Madame Valois was the assassin; Kruger merely sent commercial intelligence cables.',
        yourDeduction: 'You confused commercial espionage motive with physical execution.',
        accuracyRate: 50,
        keyDiscoveries: ['Encrypted Dover Telegram to Otto Kruger'],
        missedOpportunities: ['Hydrocyanic Acid Residue in Ceiling Louver', 'Silver Powder Compact with Hollow Atomizer'],
        reasoningCritique: 'Failed to recognize the physical chemical delivery mechanism.',
      },
    },
    'ending-wrong-conviction': {
      id: 'ending-wrong-conviction',
      title: 'The Steward’s False Charge',
      tier: 'wrong_conviction',
      badge: 'GRAVE INVESTIGATIVE SCANDAL',
      narrative: [
        'You charged Steward Carter as the sole murderer, alleging a crude robbery.',
        'Carter went to the gallows for a murder planned in Paris, while Madame Valois returned to France to receive diplomatic commendation.',
      ],
      summary: 'The low-level bribed steward was executed for murder while the international conspirators achieved total victory.',
      criteriaReview: {
        theTruth: 'Carter only provided the drugged drink; Valois executed the poisoning.',
        yourDeduction: 'You targeted the working-class steward and failed to inspect the diplomatic passengers.',
        accuracyRate: 25,
        keyDiscoveries: ['Compagnie Internationale Brass Master Passkey'],
        missedOpportunities: ['Silver Powder Compact with Hollow Atomizer', 'Reconstructed Tripartite Balkan Treaty'],
        reasoningCritique: 'Catastrophic investigative failure. You ignored the diplomatic espionage motive entirely.',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'The Express Cold Case',
      tier: 'compromised',
      badge: 'UNSOLVED INTRIGUE',
      narrative: [
        'When the train arrived at Victoria Station, no definitive evidence was presented.',
        'All passengers dispersed into London, Moretti’s body was repatriated to Rome under an open verdict, and the secret treaty vanished forever.',
      ],
      summary: 'The train arrived with no charges filed; the espionage network successfully executed the assassination without consequence.',
      criteriaReview: {
        theTruth: 'Valois and Carter assassinated Moretti via aerosol cyanide in a locked-room scheme.',
        yourDeduction: 'You failed to uncover the ventilator traces before the train arrived in London.',
        accuracyRate: 10,
        keyDiscoveries: [],
        missedOpportunities: ['Hydrocyanic Acid Residue in Ceiling Louver', 'Manipulated Interior Deadbolt & Piano Wire'],
        reasoningCritique: 'Complete inability to reconstruct the murder within the train journey duration.',
      },
    },
  },

  scenarios: {
    'scene-sleeper-corridor': {
      id: 'scene-sleeper-corridor',
      title: 'The Locked Corridor of Sleeper "Europa"',
      location: 'First-Class Corridor, Dover Night Express',
      narrative: [
        'Outside the train windows, the snowy Kent landscape blurs past at fifty miles per hour. The steam heating hisses softly in the narrow mahogany corridor.',
        'Ten minutes ago, Steward Arthur Carter knocked on Berth #4 to announce the approach to Tonbridge Junction. Receiving no answer, he peered through the louvers to see Count Lorenzo Moretti slumped lifeless across the table.',
        'The heavy brass deadbolt on the door is thrown from the inside. Standing in the corridor in dressing robes are Madame Hélène Valois from Berth #5 and Herr Otto Kruger from Berth #3.',
      ],
      choices: [
        {
          id: 'choice-force-berth-entry',
          text: 'Have Steward Carter use his master key and jemmy to force open Berth #4.',
          destinationId: 'scene-berth-interior',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-interrogate-passengers-corridor',
          text: 'Question Madame Valois and Herr Kruger in the corridor regarding unusual sounds.',
          destinationId: 'scene-corridor-inquiry',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-inspect-dining-car',
          text: 'Walk forward to the dining car to inspect the evening service records.',
          destinationId: 'scene-dining-car',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-berth-interior': {
      id: 'scene-berth-interior',
      title: 'The Bolted Private Compartment',
      location: 'Berth #4, Sleeper "Europa"',
      narrative: [
        'The latch snaps open. Inside the velvet-upholstered berth, a faint, telltale scent of bitter almonds hangs in the warm air.',
        'Count Lorenzo Moretti sits motionless in his silk dressing gown. On the nightstand sits a crystal champagne flute with a milky white sediment at the bottom.',
        'Looking up, you notice the brass ceiling ventilator connecting directly to Madame Valois’s adjoining compartment #5. Swabbing the brass louvers with your chemical kit yields bright blue prussic acid residue!',
        'In the waste basket, you discover freshly torn fragments of a tripartite naval treaty.',
      ],
      cluesDiscovered: ['clue-ventilator-residue', 'clue-champagne-glass', 'clue-shredded-treaty'],
      choices: [
        {
          id: 'choice-inspect-door-lock-mechanism',
          text: 'Examine how the deadbolt was engaged if Moretti was already unconscious.',
          destinationId: 'scene-lock-inspection',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-search-valois-berth',
          text: 'Search Madame Valois’s adjoining Berth #5 for chemical delivery equipment.',
          destinationId: 'scene-search-valois',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-lock-inspection': {
      id: 'scene-lock-inspection',
      title: 'The Illusion of the Bolted Door',
      location: 'Berth #4 Doorway, Sleeper "Europa"',
      narrative: [
        'How could a poisoned man throw his own deadbolt? You drop to your knees in the corridor to inspect the brass door threshold.',
        'Tucked beneath the edge of the hallway runner rug is a thin, flexible looped piano-wire with a curved brass tip.',
        'A skilled operative could reach through the louvered door slats, snag the internal deadbolt lever, and flip it shut from the outside hallway!',
      ],
      cluesDiscovered: ['clue-berth-deadbolt'],
      choices: [
        {
          id: 'choice-confront-steward-keys',
          text: 'Demand that Steward Carter produce his master passkeys and explain the wire.',
          destinationId: 'scene-interrogate-steward',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-lock-to-dining',
          text: 'Head to the dining car galley to trace who ordered the drugged champagne.',
          destinationId: 'scene-dining-car',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-search-valois': {
      id: 'scene-search-valois',
      title: 'Madame Valois’s Private Compartment',
      location: 'Berth #5, Sleeper "Europa"',
      narrative: [
        'Madame Valois’s compartment is impeccably ordered, scented with French lavender. On the vanity table sits an ornate Cartier silver powder compact.',
        'Pressing the concealed hinge reveals a miniaturized glass bulb and rubber atomizer pump. Chemical test strips instantly turn deep scarlet—confirming potassium cyanide vapor residue!',
        'Beside it on the ceiling is the opposite side of the brass ventilation duct connecting straight into Moretti’s berth.',
      ],
      cluesDiscovered: ['clue-valois-compact'],
      choices: [
        {
          id: 'choice-valois-to-corridor',
          text: 'Confront Madame Valois with the lethal cosmetic compact.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-corridor-inquiry': {
      id: 'scene-corridor-inquiry',
      title: 'Hallway Interrogations',
      location: 'Sleeper Corridor, Night Express',
      narrative: [
        'Herr Kruger stands stiffly in his tailored coat, his monocle gleaming under the corridor gas sconces.',
        'In his breast pocket, you catch sight of a Western Union telegram form stamped at Dover Station just before departure: "Moretti carrying unilateral French embargo papers. Intervention mandatory prior to Whitehall arrival."',
        '"I am an industrialist, not an assassin," Kruger declares defensively. "Moretti was selling out German coal agreements to Paris."',
      ],
      dialogue: [
        { speaker: 'Otto Kruger', text: 'Ask the Frenchwoman in Berth Five. She was whispering with the steward in the galley before departure.', mood: 'defiant' },
      ],
      cluesDiscovered: ['clue-kruger-wire'],
      choices: [
        {
          id: 'choice-corridor-to-dining',
          text: 'Investigate the galley to follow up on Kruger’s lead about the steward.',
          destinationId: 'scene-dining-car',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-dining-car': {
      id: 'scene-dining-car',
      title: 'The Dining Car & Galley',
      location: 'Dining Car "Victoria", Dover Night Express',
      narrative: [
        'The dining car is deserted except for Steward Arthur Carter, who is furiously washing crystal glasses in the zinc sink.',
        'In his apron pocket, you discover the master passkey ring with fresh metal scrapings on the master skeleton bit.',
        'Hidden inside the galley ice chest beneath stacked caviar tins is a diplomatic numerical cipher pad linking Carter’s 500-sovereign bribe directly to French secret service accounts in Geneva.',
      ],
      cluesDiscovered: ['clue-steward-passkey', 'clue-galley-codebook'],
      choices: [
        {
          id: 'choice-galley-to-confrontation',
          text: 'Return to the first-class sleeper car to assemble all suspects.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-interrogate-steward': {
      id: 'scene-interrogate-steward',
      title: 'Steward Carter’s Interrogation',
      location: 'Sleeper Vestibule, Night Express',
      narrative: [
        'Cornered in the narrow vestibule, Carter begins to tremble.',
        '"They said it was just a sleeping draught to photograph his documents!" Carter cries. "I only poured the champagne and unlocked the outside latch with my passkey!"',
      ],
      dialogue: [
        { speaker: 'Arthur Carter', text: 'The French lady gave me three hundred sovereigns in Dover. She promised nobody would get hurt!', mood: 'grief' },
      ],
      choices: [
        {
          id: 'choice-steward-to-confrontation',
          text: 'Bring Carter to face Madame Valois and Herr Kruger in the salon.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-final-confrontation': {
      id: 'scene-final-confrontation',
      title: 'The Train Approaches London',
      location: 'First-Class Lounge, Sleeper "Europa"',
      narrative: [
        'The whistle shrieks in the dark. The train has passed Croydon and is twenty minutes from Victoria Station.',
        'Madame Valois, Herr Kruger, and Steward Carter sit under the watchful gaze of the train guard. The physical evidence is undeniable: the cyanide traces in the ceiling louver, the silver compact atomizer, the drugged champagne glass, and the hooked deadbolt wire.',
        'Open your Evidence Notebook, formulate your final accusation, and bring the conspiracy to justice before the train docks in London.',
      ],
      choices: [
        {
          id: 'choice-triumph-indict-valois',
          text: 'Indict Madame Valois for aerosol cyanide assassination, aided by Steward Carter’s drugged champagne and passkey access.',
          destinationId: 'scene-victoria-station-closure',
          consequencePreview: 'Deductive',
          conditions: [{ type: 'hasConnection', target: 'conn-aerosol-assassination' }],
          effects: [{ type: 'triggerConsequence', target: 'ending-triumph' }],
        },
        {
          id: 'choice-partial-indict-kruger',
          text: 'Accuse Herr Kruger based on his Dover telegram and steel consortium motive.',
          destinationId: 'scene-victoria-station-closure',
          consequencePreview: 'Direct',
          effects: [{ type: 'triggerConsequence', target: 'ending-partial' }],
        },
        {
          id: 'choice-wrong-indict-carter',
          text: 'Accuse Steward Carter of acting alone as a greedy robber.',
          destinationId: 'scene-victoria-station-closure',
          consequencePreview: 'Risky',
          effects: [{ type: 'triggerConsequence', target: 'ending-wrong-conviction' }],
        },
      ],
    },

    'scene-victoria-station-closure': {
      id: 'scene-victoria-station-closure',
      title: 'Victoria Station Special Branch Arrest',
      location: 'Platform 2, Victoria Station, London',
      isEnding: true,
      endingId: 'ending-triumph',
      narrative: [
        'The train screeches to a stop in London as armed Special Branch detectives board the carriage.',
      ],
      choices: [],
    },
  },
};

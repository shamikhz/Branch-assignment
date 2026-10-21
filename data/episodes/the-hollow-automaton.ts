import { Episode } from '@/features/episodes/types';

export const theHollowAutomatonEpisode: Episode = {
  id: 'the-hollow-automaton',
  version: '1.0.0',
  title: 'The Turk of St. Jude’s',
  subtitle: 'The Unsolved Chess Automaton Murder & The Vienna Cold Case',
  synopsis:
    'Ten years after chess master Victor Kozlov was found dead inside a mechanical chess-playing machine, a newly discovered scoresheet reopens the cold case. Hidden mirrors, secret wire mechanisms, and stolen machine designs reveal a carefully planned murder.',
  estimatedMinutes: 25,
  difficulty: 'Master Sleuth',
  caseType: 'cold_case',
  seriesId: 'vienna-mysteries',
  seriesName: 'Austro-Hungarian Imperial Archives',
  seriesPart: 1,
  timeSetting: 'Autumn, November 3, 1905',
  location: 'Imperial Exhibition Hall & Mechanics Guild, Vienna',
  initialScenarioId: 'scene-exhibition-hall',
  tags: ['Cold Case', 'Chess', 'Automaton', 'Vienna', 'Mechanical'],

  suspects: {
    'suspect-kempelen': {
      id: 'suspect-kempelen',
      name: 'Baron Wolfgang von Kempelen',
      role: 'Master Clockmaker & Chess Machine Creator',
      age: 61,
      initialDemeanor: 'Proud and dignified, leaning on a polished brass walking stick.',
      motive: 'Kozlov found out the machine was a fraud and threatened to expose Kempelen to the Emperor, which would ruin his reputation.',
      opportunity: 'Sole designer of the machine cabinet and only person with the keys to wind it.',
      alibi: 'Maintained for ten years that he was sitting in the royal box when Kozlov had a sudden medical emergency inside.',
      weakness: 'Registered Kozlov’s special gear design patents under his own name just two days after the funeral.',
      associatedClueIds: ['clue-pneumatic-lever', 'clue-patent-transfer', 'clue-guild-registry'],
      interrogationSummary: 'Kempelen dismisses reopening the case, saying the royal inquiry concluded everything ten years ago.',
    },
    'suspect-tarrasch': {
      id: 'suspect-tarrasch',
      name: 'Dr. Mikhail Tarrasch',
      role: 'Former Challenger & Chess Champion',
      age: 46,
      initialDemeanor: 'Quiet and serious, constantly turning a carved wooden knight piece in his hands.',
      motive: 'Strong rivalry; Kozlov had defeated him in sixteen straight tournament games.',
      opportunity: 'Was playing on stage against the machine when the fatal match ended.',
      alibi: 'Surrounded by over 400 tournament spectators and judges on the open exhibition stage.',
      weakness: 'Received the secret encoded scoresheet years ago but hid it from police.',
      associatedClueIds: ['clue-encoded-scoresheet', 'clue-alibi-chronograph'],
      interrogationSummary: 'Tarrasch insists he never knew Kozlov was hidden inside the cabinet until the machine arm froze.',
    },
    'suspect-greta': {
      id: 'suspect-greta',
      name: 'Greta Kozlov',
      role: 'Widow of the Chess Master',
      age: 42,
      initialDemeanor: 'Sad and watchful, holding a black-bordered handkerchief.',
      motive: 'Received a large life insurance payment of 30,000 gold crowns after Kozlov’s death.',
      opportunity: 'Managed her husband’s stage wardrobe and dressing room next to the stage.',
      alibi: 'Was sitting in the front row of the audience next to the ambassador’s wife.',
      weakness: 'Found the hidden scoresheet in Victor’s old travel trunk and brought it forward to reopen the case.',
      associatedClueIds: ['clue-encoded-scoresheet', 'clue-arsenic-snuff'],
      interrogationSummary: 'Greta swears her husband feared for his life in the weeks before the final exhibition match.',
    },
  },

  clues: {
    'clue-encoded-scoresheet': {
      id: 'clue-encoded-scoresheet',
      title: 'The Coded 1895 Tournament Scoresheet',
      category: 'document',
      shortDescription: 'Victor Kozlov’s final handwritten match notation.',
      detailedAnalysis:
        'The opening moves (Nf3, d5, c4, e6) deviate from standard master play. Using a Polybius square cipher, the move coordinates spell: "KEMPELEN TRAPPED ME — MECHANISM RIGGED."',
      locationFound: 'Kozlov’s Travel Chess Case',
      tags: ['Document', 'Cipher', 'Forensic'],
    },
    'clue-pneumatic-lever': {
      id: 'clue-pneumatic-lever',
      title: 'Concealed Pneumatic Cable Lock',
      category: 'physical',
      shortDescription: 'A hidden steel cable linkage discovered inside the automaton’s central brass column.',
      detailedAnalysis:
        'Connected to an external foot-pedal beneath the demonstrator’s stage podium. When depressed, it tightened a looped piano-wire collar inside the operator compartment while locking the exit hatch from the outside.',
      locationFound: 'Automaton Internal Torso',
      tags: ['Physical', 'Mechanical', 'Weapon'],
      contradictsSuspectId: 'suspect-kempelen',
      contradictionNote: 'Proves the automaton was built with an intentional lethal snare mechanism operated from Kempelen’s stage position.',
    },
    'clue-mirror-partition': {
      id: 'clue-mirror-partition',
      title: 'Two-Way False Mirror Slat',
      category: 'physical',
      shortDescription: 'Optical glass slat behind the brass escapement dials.',
      detailedAnalysis:
        'Allowed the outside operator on the stage to peer directly into the concealed compartment while projecting an illusion of empty clockwork gears to the audience.',
      locationFound: 'Cabinet False Backing',
      tags: ['Physical', 'Optical', 'Deception'],
    },
    'clue-arsenic-snuff': {
      id: 'clue-arsenic-snuff',
      title: 'Kozlov’s Monogrammed Silver Snuffbox',
      category: 'physical',
      shortDescription: 'Found wedged behind the bronze gear train in the lower drawer.',
      detailedAnalysis:
        'Chemical analysis of the remaining tobacco reveals zero poison. The imperial coroner’s 1895 verdict of "poisoning or natural heart seizure" was completely falsified to avoid an imperial scandal.',
      locationFound: 'Lower Gear Cabinet',
      tags: ['Physical', 'Forensic', 'Refutation'],
    },
    'clue-patent-transfer': {
      id: 'clue-patent-transfer',
      title: 'Antedated Imperial Patent Assignment',
      category: 'document',
      shortDescription: 'Imperial Patent Office registration #4489.',
      detailedAnalysis:
        'Transferred Kozlov’s planetary gear patents to Kempelen. The filing date is listed as October 1895, but the revenue stamp bears the 1896 watermark, proving the deed was fraudulent and executed after Kozlov was dead.',
      locationFound: 'Mechanics Guild Archive Safe',
      tags: ['Document', 'Financial', 'Forgery'],
    },
    'clue-alibi-chronograph': {
      id: 'clue-alibi-chronograph',
      title: 'Tarrasch’s Gold Pocket Chronometer',
      category: 'physical',
      shortDescription: 'Precision Swiss tournament timer with split-second recording.',
      detailedAnalysis:
        'The timer logs prove Tarrasch’s match clock was only started after the automaton was already wheeled out. Tarrasch was under constant public scrutiny and could not have reached the hidden floor lever.',
      locationFound: 'Tarrasch’s Presentation Case',
      tags: ['Physical', 'Time', 'Alibi'],
    },
    'clue-guild-registry': {
      id: 'clue-guild-registry',
      title: 'Vienna Mechanicians’ Guild Key Register',
      category: 'document',
      shortDescription: 'Master log of unique bronze cabinet keys issued in 1895.',
      detailedAnalysis:
        'Only one individual held the master security key for the automaton’s external service panel during the week of the murder: Baron Wolfgang von Kempelen.',
      locationFound: 'Guild Hall Master Vault',
      tags: ['Document', 'Access', 'Custody'],
    },
    'clue-stage-rope': {
      id: 'clue-stage-rope',
      title: 'Waxed Stage Rigging Cord',
      category: 'physical',
      shortDescription: 'Braided cord tied to the pneumatic stage release.',
      detailedAnalysis:
        'Traces of green theatrical chalk and pine rosin match the stage podium occupied exclusively by Kempelen during the match demonstration.',
      locationFound: 'Stage Trapdoor Under-floor',
      tags: ['Physical', 'Forensic', 'Location'],
    },
  },

  connections: [
    {
      id: 'conn-mechanical-execution',
      clueA: 'clue-encoded-scoresheet',
      clueB: 'clue-pneumatic-lever',
      deductionTitle: 'The Pre-Engineered Mechanical Assassination',
      deductionText:
        'Kozlov was not killed by poison or heart failure. When he attempted to transmit his cipher plea over the chessboard, Kempelen used the concealed pneumatic foot pedal to strangle him inside the locked cabinet.',
      unlockedFlag: 'knows_mechanical_murder',
    },
    {
      id: 'conn-kempelen-patent-theft',
      clueA: 'clue-patent-transfer',
      clueB: 'clue-guild-registry',
      deductionTitle: 'The Motive Behind the Automaton Murder',
      deductionText:
        'Kempelen murdered his grandmaster collaborator to usurp Kozlov’s planetary gear patents, antedating the assignment deed through his corrupt connections in the Mechanicians’ Guild.',
      unlockedFlag: 'knows_patent_theft',
    },
    {
      id: 'conn-tarrasch-cleared',
      clueA: 'clue-alibi-chronograph',
      clueB: 'clue-stage-rope',
      deductionTitle: 'Exoneration of the Rival Grandmaster',
      deductionText:
        'Tarrasch had neither the mechanical access nor the stage position required to operate the pneumatic trapdoor cord. The execution was entirely operated from Kempelen’s demonstration stand.',
      unlockedFlag: 'knows_tarrasch_innocent',
    },
  ],

  hypotheses: {
    'hypo-kempelen-executioner': {
      id: 'hypo-kempelen-executioner',
      title: 'Baron von Kempelen: Engineered Automaton Homicide & Patent Usurpation',
      accusedSuspectId: 'suspect-kempelen',
      motiveSummary: 'Silence Kozlov before he exposed the automaton as a fraud and seize his revolutionary horological gear patents.',
      methodSummary: 'Rigged the cabinet central column with a pneumatic choke wire; triggered the foot pedal from his stage podium when Kozlov coded a distress plea.',
      requiredClueIds: ['clue-encoded-scoresheet', 'clue-pneumatic-lever', 'clue-patent-transfer', 'clue-guild-registry'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
    'hypo-tarrasch-rival': {
      id: 'hypo-tarrasch-rival',
      title: 'Dr. Tarrasch: Tournament Poisoning & Grandmaster Rivalry',
      accusedSuspectId: 'suspect-tarrasch',
      motiveSummary: 'Secure the world chess title by eliminating his unbeatable rival.',
      methodSummary: 'Laced Kozlov’s silver snuff box with aconite prior to the match.',
      requiredClueIds: ['clue-arsenic-snuff'],
      disqualifyingClueIds: ['clue-pneumatic-lever'],
      isValidTruth: false,
      flawExplanation: 'Chemical analysis showed the snuff was completely untainted; Kozlov was mechanically strangled by the internal pneumatic wire.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-wrong-conviction',
    },
    'hypo-greta-insurance': {
      id: 'hypo-greta-insurance',
      title: 'Greta Kozlov: The Imperial Assurance Inheritance',
      accusedSuspectId: 'suspect-greta',
      motiveSummary: 'Claim 30,000 gold crowns in imperial life insurance.',
      methodSummary: 'Tampered with her husband’s wardrobe to trap him inside the cabinet.',
      requiredClueIds: ['clue-encoded-scoresheet'],
      disqualifyingClueIds: ['clue-guild-registry'],
      isValidTruth: false,
      flawExplanation: 'Greta had zero access to the Guild master keys or the internal pneumatic machinery; she preserved the scoresheet to expose Kempelen.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-partial',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'The Ghost in the Machine Vindicated',
      tier: 'triumph',
      badge: 'COLD CASE MASTER DEDUCTION',
      narrative: [
        'Before the assembled members of the Imperial Academy of Sciences and the Vienna Criminal Court, you dismantled the false mirrors of the Chess Automaton.',
        'When you depressed the hidden stage foot pedal, the internal piano-wire snare snapped shut with a hollow clatter inside the empty cabinet.',
        'Faced with the decoded chess plea, the antedated 1896 revenue stamp on his stolen patent, and the Guild key register, Baron von Kempelen’s aristocratic composure shattered.',
        'The cold case of 1895 was officially rewritten: Victor Kozlov’s name was restored to the imperial patent rolls as a martyred genius, while Kempelen was sentenced to life imprisonment in Graz Fortress.',
      ],
      summary: 'Baron von Kempelen was convicted of premeditated mechanical murder and patent theft. The ten-year cold case was triumphantly resolved.',
      criteriaReview: {
        theTruth: 'Kempelen designed the automaton with an internal snare and murdered Kozlov from the stage to steal his gear patents.',
        yourDeduction: 'You decrypted the tournament scoresheet and proved the mechanical snare was triggered from Kempelen’s stage position.',
        accuracyRate: 100,
        keyDiscoveries: [
          'The Coded 1895 Tournament Scoresheet',
          'Concealed Pneumatic Cable Lock',
          'Antedated Imperial Patent Assignment',
          'Vienna Mechanicians’ Guild Key Register',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Brilliant historical cold-case deduction. You exposed both the mechanical murder weapon and the economic motive.',
      },
    },
    'ending-partial': {
      id: 'ending-partial',
      title: 'The Widow’s Grief Exploited',
      tier: 'partial',
      badge: 'MISDIRECTED INQUIRY',
      narrative: [
        'You targeted Greta Kozlov’s insurance payout, causing the court to reopen the inquest under the assumption of domestic greed.',
        'Although Greta was cleared when the mechanical snare was pointed out, the delay allowed Kempelen to destroy his private blueprints and leave Vienna for Munich.',
      ],
      summary: 'The false suspicion on the widow allowed the true killer, Baron von Kempelen, to flee the country with the stolen patents.',
      criteriaReview: {
        theTruth: 'Greta was innocent and brought forward the scoresheet to bring Kempelen to justice.',
        yourDeduction: 'You fell for the financial red herring while ignoring the mechanical guild access records.',
        accuracyRate: 50,
        keyDiscoveries: ['The Coded 1895 Tournament Scoresheet'],
        missedOpportunities: ['Concealed Pneumatic Cable Lock', 'Vienna Mechanicians’ Guild Key Register'],
        reasoningCritique: 'Flawed prioritization of financial circumstantial evidence over physical mechanics.',
      },
    },
    'ending-wrong-conviction': {
      id: 'ending-wrong-conviction',
      title: 'The Grandmaster’s Disgrace',
      tier: 'wrong_conviction',
      badge: 'TRAGIC RIVALRY ERROR',
      narrative: [
        'You accused Dr. Mikhail Tarrasch of poisoning Kozlov’s snuff box out of tournament envy.',
        'Tarrasch’s reputation was destroyed in the European press, but forensic chemists soon proved the snuff was harmless tobacco.',
        'Kempelen remained hailed as an imperial genius, retaining his stolen patents until his natural death.',
      ],
      summary: 'An innocent champion was slandered on false poison theories while the true murderer was celebrated.',
      criteriaReview: {
        theTruth: 'Tarrasch was entirely innocent; Kozlov was mechanically strangled inside the machine.',
        yourDeduction: 'You failed to test the snuffbox chemically and ignored the mechanical pneumatic cable.',
        accuracyRate: 25,
        keyDiscoveries: ['Kozlov’s Monogrammed Silver Snuffbox'],
        missedOpportunities: ['Concealed Pneumatic Cable Lock', 'Antedated Imperial Patent Assignment'],
        reasoningCritique: 'Dangerous reliance on unverified poison theories.',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'The Enigma of the Imperial Hall',
      tier: 'compromised',
      badge: 'UNSOLVED HISTORICAL ARCHIVE',
      narrative: [
        'Unable to correlate the chess notation with the internal mechanical linkages, the court reaffirmed the 1895 verdict of accidental death.',
        'The automaton was wheeled into the museum basement, its lethal secret buried forever.',
      ],
      summary: 'The cold case remained cold. The mechanical secrets of the automaton remained unsolved.',
      criteriaReview: {
        theTruth: 'Kempelen engineered the automaton to murder Kozlov and conceal the crime behind false mirrors.',
        yourDeduction: 'You failed to decipher the coded scoresheet or inspect the central mechanical column.',
        accuracyRate: 10,
        keyDiscoveries: [],
        missedOpportunities: ['The Coded 1895 Tournament Scoresheet', 'Concealed Pneumatic Cable Lock'],
        reasoningCritique: 'Complete inability to reconstruct the mechanical operation.',
      },
    },
  },

  scenarios: {
    'scene-exhibition-hall': {
      id: 'scene-exhibition-hall',
      title: 'The Hall of Automata',
      location: 'Imperial Exhibition Hall, Vienna',
      narrative: [
        'Dust motes dance in the autumn sunlight slanting through the high arched windows of the Vienna Mechanicians’ Guild.',
        'In the center of the hall stands the legendary "Turk of St. Jude’s"—a life-sized carved Ottoman figure seated behind a large maplewood cabinet mounted with brass dials, gears, and a mother-of-pearl chessboard.',
        'A newly surfaced match scoresheet provided by Greta Kozlov has prompted the Imperial Court to reopen the unsolved death of Grandmaster Victor Kozlov from ten years ago.',
        'Baron Wolfgang von Kempelen leans on his cane beside the cabinet, while Dr. Mikhail Tarrasch studies the chessboard with folded arms.',
      ],
      choices: [
        {
          id: 'choice-inspect-scoresheet',
          text: 'Examine Victor Kozlov’s coded tournament scoresheet with cryptographic tables.',
          destinationId: 'scene-scoresheet-analysis',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-dismantle-automaton',
          text: 'Demand that Kempelen unlock the mechanical cabinet doors for forensic inspection.',
          destinationId: 'scene-automaton-interior',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-interview-greta',
          text: 'Question Greta Kozlov about her husband’s final hours before the 1895 match.',
          destinationId: 'scene-interview-greta',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-scoresheet-analysis': {
      id: 'scene-scoresheet-analysis',
      title: 'Deciphering the Grandmaster’s Notation',
      location: 'Exhibition Adjudicator Table, Vienna',
      narrative: [
        'You spread the brittle 1895 scoresheet under your magnifying glass. The moves listed for the white pieces appear bizarre for a grandmaster of Kozlov’s stature.',
        'Applying a classical Polybius 5x5 substitution cipher to the square coordinates, the letters fall into place with chilling clarity: "KEMPELEN TRAPPED ME — MECHANISM RIGGED."',
        'Kozlov knew he was being trapped inside the mechanical cabinet and used his final legal moves on the board to leave a permanent coded indictment!',
      ],
      cluesDiscovered: ['clue-encoded-scoresheet'],
      choices: [
        {
          id: 'choice-confront-kempelen-cipher',
          text: 'Confront Baron von Kempelen with the decrypted distress cipher.',
          destinationId: 'scene-automaton-interior',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-check-tarrasch-timer',
          text: 'Compare the scoresheet timeline against Dr. Tarrasch’s match chronometer.',
          destinationId: 'scene-tarrasch-chronometer',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-automaton-interior': {
      id: 'scene-automaton-interior',
      title: 'Inside the Clockwork Machine',
      location: 'Interior Cabinet, The Turk of St. Jude’s',
      narrative: [
        'Kempelen reluctantly turns his bronze master key, swinging open the front panels. The interior is a maze of brass gears, pendulums, and leather bellows.',
        'Behind a false two-way mirror partition lies the cramped compartment where Kozlov sat concealed during matches.',
        'Tracing the central brass pillar with your fingers, you feel a concealed steel cable. At the base, a pneumatic linkage connects through the floorboards to the demonstrator’s stage podium!',
      ],
      cluesDiscovered: ['clue-pneumatic-lever', 'clue-mirror-partition', 'clue-arsenic-snuff'],
      choices: [
        {
          id: 'choice-trace-trapdoor-linkage',
          text: 'Descend beneath the stage trapdoor to trace the pneumatic cable.',
          destinationId: 'scene-understage-linkage',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-check-guild-records',
          text: 'Visit the Mechanicians’ Guild Archives to inspect the master key register.',
          destinationId: 'scene-guild-archives',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-understage-linkage': {
      id: 'scene-understage-linkage',
      title: 'Beneath the Exhibition Stage',
      location: 'Under-Stage Mechanical Chamber, Vienna',
      narrative: [
        'Under the wooden floorboards, the pneumatic copper tube leads directly beneath the spot where Kempelen stood during the exhibition.',
        'Connected to the tube is a recessed foot pedal wrapped in waxed green hemp cord and pine rosin—the exact materials used in Kempelen’s stage podium.',
        'When the pedal was stepped on, it simultaneously slammed the cabinet escape hatch shut and tightened the piano-wire snare around the operator’s neck.',
      ],
      cluesDiscovered: ['clue-stage-rope'],
      choices: [
        {
          id: 'choice-understage-to-guild',
          text: 'Head to the Guild Archives to prove Kempelen’s financial motive.',
          destinationId: 'scene-guild-archives',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-guild-archives': {
      id: 'scene-guild-archives',
      title: 'The Mechanicians’ Guild Archives',
      location: 'Guild Safe Vault, Vienna',
      narrative: [
        'The Guild Archivist produces the certified 1895 security register. Only Baron Wolfgang von Kempelen possessed the master key to the automaton during tournament week.',
        'Examining the patent records for the revolutionary planetary gear system reveals an antedated deed. The revenue stamp bears an 1896 watermark, proving Kempelen forged the patent assignment after Kozlov was already in his grave!',
      ],
      cluesDiscovered: ['clue-guild-registry', 'clue-patent-transfer'],
      choices: [
        {
          id: 'choice-assemble-court',
          text: 'Return to the Grand Exhibition Hall for the final trial indictment.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-tarrasch-chronometer': {
      id: 'scene-tarrasch-chronometer',
      title: 'Tarrasch’s Chronometer Audit',
      location: 'Adjudicator Desk, Vienna',
      narrative: [
        'Dr. Tarrasch presents his Swiss split-second timer. The recorded timestamps show that Tarrasch was on stage under the eyes of the Emperor’s suite from the moment the hall opened.',
        '"I wanted to defeat Victor over the board, detective," Tarrasch says with quiet dignity. "I would never foul the noble game with murder."',
      ],
      dialogue: [
        { speaker: 'Dr. Tarrasch', text: 'Kempelen always treated Victor like a servant, never as the mathematical mind behind the machine.', mood: 'calm' },
      ],
      cluesDiscovered: ['clue-alibi-chronograph'],
      choices: [
        {
          id: 'choice-tarrasch-to-cabinet',
          text: 'Inspect the automaton cabinet where the body was found.',
          destinationId: 'scene-automaton-interior',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interview-greta': {
      id: 'scene-interview-greta',
      title: 'Greta Kozlov’s Testimony',
      location: 'Exhibition Hall Balcony, Vienna',
      narrative: [
        'Greta Kozlov clutches her husband’s leather travel case.',
        '"Victor told me three days before the match that he had caught Kempelen stealing his planetary gear schematics," Greta reveals.',
        '"He told me that if anything happened to him, his final match scoresheet would tell the world the truth."',
      ],
      dialogue: [
        { speaker: 'Greta Kozlov', text: 'They called his death a heart seizure. But Victor was thirty-two and healthy as an oak.', mood: 'grief' },
      ],
      choices: [
        {
          id: 'choice-greta-to-scoresheet',
          text: 'Analyze the scoresheet from Victor’s case.',
          destinationId: 'scene-scoresheet-analysis',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-final-confrontation': {
      id: 'scene-final-confrontation',
      title: 'The Trial of the Automaton',
      location: 'Imperial Exhibition Hall, Vienna',
      narrative: [
        'The imperial prosecutor and court magistrates have taken their seats in the grand hall. The brass cabinet of the Turk stands before them, its mechanical secrets laid bare.',
        'You have assembled the complete forensic proof: the Polybius cipher on the scoresheet, the concealed pneumatic choke linkage, the antedated 1896 patent assignment, and the Guild key custody.',
        'Consult your Evidence Notebook, formulate the true hypothesis, and deliver the final verdict.',
      ],
      choices: [
        {
          id: 'choice-kempelen-triumph',
          text: 'Indict Baron von Kempelen for premeditated mechanical murder via the stage foot pedal to steal Kozlov’s patents.',
          destinationId: 'scene-imperial-ruling',
          consequencePreview: 'Deductive',
          conditions: [{ type: 'hasConnection', target: 'conn-mechanical-execution' }],
          effects: [{ type: 'triggerConsequence', target: 'ending-triumph' }],
        },
        {
          id: 'choice-tarrasch-wrong',
          text: 'Accuse Dr. Tarrasch of tournament rivalry poisoning.',
          destinationId: 'scene-imperial-ruling',
          consequencePreview: 'Risky',
          effects: [{ type: 'triggerConsequence', target: 'ending-wrong-conviction' }],
        },
        {
          id: 'choice-greta-partial',
          text: 'Accuse Greta Kozlov of conspiring for the imperial life assurance payout.',
          destinationId: 'scene-imperial-ruling',
          consequencePreview: 'Direct',
          effects: [{ type: 'triggerConsequence', target: 'ending-partial' }],
        },
      ],
    },

    'scene-imperial-ruling': {
      id: 'scene-imperial-ruling',
      title: 'Imperial Judicial Decree',
      location: 'Imperial Ministry of Justice, Vienna',
      isEnding: true,
      endingId: 'ending-triumph',
      narrative: [
        'The ten-year cold case of the Imperial Chess Automaton is entered into the permanent Austrian judicial registers.',
      ],
      choices: [],
    },
  },
};

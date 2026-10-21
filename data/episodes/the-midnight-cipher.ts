import { Episode } from '@/features/episodes/types';

export const midnightCipherEpisode: Episode = {
  id: 'the-midnight-cipher',
  version: '1.0.0',
  title: 'The Midnight Cipher of Saint-Claire',
  subtitle: 'A locked study, an impossible theft, and a mechanical secret.',
  synopsis:
    'During the annual Autumn Solstice Gala at Saint-Claire Manor, master horologist Julian Vance is discovered unconscious in his sealed study. The 17th-century Celestial Automaton—a mechanical marvel holding lost astronomical ciphers—has vanished from its glass pedestal. In the rain-drenched estate, four suspects hold contradictory secrets. Only methodical evidence examination and razor-sharp deduction will reveal the truth before the morning express leaves.',
  estimatedMinutes: 25,
  difficulty: 'Detective',
  timeSetting: 'Autumn Solstice, 11:42 PM to Dawn',
  location: 'Saint-Claire Manor, Haute-Savoie',
  tags: ['Locked Room', 'Mechanical Burglary', 'Deduction', 'Atmospheric Noir'],
  initialScenarioId: 'scene-arrival',

  suspects: {
    'suspect-sterling': {
      id: 'suspect-sterling',
      name: 'Dr. Arthur Sterling',
      role: 'Visiting Horological Scholar & Fellow of the Antiquarian Society',
      age: 52,
      initialDemeanor: 'Haughty, intellectually patronizing, and impeccably composed.',
      motive: 'Desperate to claim authorship of the Celestial Automaton cipher to salvage his failing academic tenure.',
      opportunity: 'Was granted private access to the estate library adjacent to the central ventilation and acoustic risers.',
      alibi: 'Claims he spent the entire evening from 10:30 PM onward cataloguing rare treatises in the second-floor gallery.',
      weakness: 'Compulsive perfectionism regarding gear ratios and precision lockcraft.',
      associatedClueIds: ['clue-reversed-gear', 'clue-sterling-journal', 'clue-graphite-cloth', 'clue-trellis-footprint'],
      interrogationSummary:
        'Sterling dismisses modern locks as childish toys and speaks of the automaton with religious zeal. His fingers show nervous tremors, and he reflexively conceals his right sleeve.',
    },
    'suspect-elena': {
      id: 'suspect-elena',
      name: 'Elena Vance',
      role: 'Granddaughter, Estate Archivist & Art Conservator',
      age: 28,
      initialDemeanor: 'Feverish, defensive, and visibly exhausted.',
      motive: 'Buried in personal debt to a Geneva restoration consortium threatening to seize her independent studio.',
      opportunity: 'Possessed legitimate keys to the study outer ante-chamber and oversaw the gala wine selection.',
      alibi: 'Insists she was overseeing the catering staff on the north conservatory terrace throughout the gala.',
      weakness: 'Emotionally volatile when her uncle Julian’s legacy or financial fairness is challenged.',
      associatedClueIds: ['clue-forged-bill', 'clue-wine-glass', 'clue-elena-alibi'],
      interrogationSummary:
        'Elena admits arguing with Julian earlier in the evening about the sale of family assets, but vehemently denies harming him.',
    },
    'suspect-mireille': {
      id: 'suspect-mireille',
      name: 'Mireille Fontaine',
      role: 'Chief Conservator & Manor Security Administrator',
      age: 44,
      initialDemeanor: 'Crisp, clinical, and fiercely protective of protocol.',
      motive: 'Secretly bitter after Julian refused to endorse her museum directorship candidacy in Lyon.',
      opportunity: 'Has administrative override codes for the manor electrical grid and magnetic lock deadbolts.',
      alibi: 'Claims she was in the basement control substation rectifying a power surge when the study alarm tripped.',
      weakness: 'Rigid attachment to logbooks; panic emerges when timestamps fail to reconcile.',
      associatedClueIds: ['clue-breaker-log', 'clue-mireille-keycard'],
      interrogationSummary:
        'Mireille provides precise timestamps for all gallery doors but stammers when asked about the four-minute gap between breaker trips.',
    },
    'suspect-lukas': {
      id: 'suspect-lukas',
      name: 'Lukas Ward',
      role: 'Estate Chauffeur & Confidential Courier',
      age: 36,
      initialDemeanor: 'Guarded, quiet, and weary.',
      motive: 'Rumored to take illicit nighttime courier runs for private collectors across the border.',
      opportunity: 'Had his vehicle idling by the south service lane with gate clearance.',
      alibi: 'Claims he was loading winter luggage and waiting for Julian’s orders in the garage.',
      weakness: 'Deep loyalty to Julian’s health regimen; easily provoked by accusations of greed.',
      associatedClueIds: ['clue-lukas-manifest'],
      interrogationSummary:
        'Lukas refuses to disclose the contents of his courier lockbox without legal warrant, insisting it contains private family medical records.',
    },
  },

  clues: {
    'clue-speaking-tube': {
      id: 'clue-speaking-tube',
      title: 'Scratched Acoustic Speaking Tube',
      category: 'physical',
      shortDescription: 'The vintage Victorian brass speaking tube behind Julian’s desk has fresh pry-scratches and a faint sweet chemical smell.',
      detailedAnalysis:
        'A forensic swab of the brass trumpet reveals trace deposits of clinical-grade diethyl ether. The internal damper had been manually wired open with fine piano wire, allowing gas vapor to flow unimpeded into the study from the terminal below.',
      locationFound: 'Julian Vance’s Sealed Study',
      tags: ['Method', 'Physical', 'Forensic'],
      relatedClueIds: ['clue-acoustic-terminal'],
    },
    'clue-wine-glass': {
      id: 'clue-wine-glass',
      title: 'Spilled Solstice Wine Glass',
      category: 'physical',
      shortDescription: 'A crystal goblet lies shattered beside Julian’s leather armchair, wine soaked into the Persian rug.',
      detailedAnalysis:
        'Chemical analysis reveals the wine was spiked with a mild, over-the-counter valerian root tincture—enough to cause drowsiness over hours, but completely incapable of causing rapid collapse or respiratory paralysis.',
      locationFound: 'Julian Vance’s Sealed Study Carpet',
      tags: ['Toxin', 'Physical', 'Deception'],
      contradictsSuspectId: 'suspect-elena',
      contradictionNote: 'While Elena intended to sedate Julian to search for the ledger, this mild tincture did not cause the sudden collapse.',
      relatedClueIds: ['clue-forged-bill'],
    },
    'clue-reversed-gear': {
      id: 'clue-reversed-gear',
      title: 'Reversed Tooth Brass Cylinder',
      category: 'physical',
      shortDescription: 'A heavy brass cylinder with intricate micro-pins, discovered concealed inside the study fireplace flue.',
      detailedAnalysis:
        'A masterwork of counter-machining. Its gear teeth are cut at an inverted 14.5-degree angle. When inserted into Julian’s patented double-cam vault lock, it catches the interior spring-latch and prevents the door from deadlocking even when the external dials are spun shut.',
      locationFound: 'Fireplace Flue, Study',
      tags: ['Lockcraft', 'Burglary Tool', 'Mechanical'],
      contradictsSuspectId: 'suspect-sterling',
      contradictionNote: 'Only an expert horologist with intimate knowledge of Vance’s 1994 patent could design this inverted cylinder.',
      relatedClueIds: ['clue-sterling-journal'],
    },
    'clue-graphite-cloth': {
      id: 'clue-graphite-cloth',
      title: 'Sterling’s Graphite-Stained Handkerchief',
      category: 'physical',
      shortDescription: 'A monogrammed silk handkerchief retrieved from Dr. Sterling’s jacket pocket.',
      detailedAnalysis:
        'Stained with high-purity micro-fine colloidal graphite—the precise dry lubricant required to slide pin tumblers silently without leaving oily residue—along with microscopic bronze shaving flecks.',
      locationFound: 'Library Gallery / Dr. Sterling’s Pocket',
      tags: ['Forensic', 'Physical', 'Handwriting/Personal'],
      contradictsSuspectId: 'suspect-sterling',
      contradictionNote: 'Dr. Sterling claimed he had not touched any lock mechanisms or clockwork since arriving at the manor.',
      relatedClueIds: ['clue-trellis-footprint', 'clue-reversed-gear'],
    },
    'clue-trellis-footprint': {
      id: 'clue-trellis-footprint',
      title: 'North Trellis Mud Prints',
      category: 'physical',
      shortDescription: 'Fresh muddy shoe impressions pressed into the flowerbed beneath the north terrace rose trellis.',
      detailedAnalysis:
        'Size 43 European dress shoes with a distinctive diamond-pattern rubber heel tap. The impressions lead from the basement workshop egress up toward the first-floor balcony, showing deliberate climbing abrasions on the copper trellis rungs.',
      locationFound: 'North Flowerbed beneath Study Balcony',
      tags: ['Footprint', 'Physical', 'Access'],
      contradictsSuspectId: 'suspect-sterling',
      contradictionNote: 'Matches Dr. Sterling’s imported bespoke London oxfords perfectly, disproving his claim of remaining indoors.',
    },
    'clue-forged-bill': {
      id: 'clue-forged-bill',
      title: 'Pre-Drafted Bill of Sale',
      category: 'document',
      shortDescription: 'A typed sales agreement tucked inside Elena’s portfolio in the conservatory.',
      detailedAnalysis:
        'Specifies the private transfer of the Celestial Automaton to a Zurich antiquities dealer for 450,000 Swiss Francs. The signature line for Julian Vance is drafted in pencil tracing, ready for ink imitation.',
      locationFound: 'Conservatory Portfolio',
      tags: ['Motive', 'Document', 'Financial'],
      contradictsSuspectId: 'suspect-elena',
      contradictionNote: 'Proves Elena planned an unauthorized sale, though she claims she only wanted to appraise it.',
    },
    'clue-breaker-log': {
      id: 'clue-breaker-log',
      title: 'Auxiliary Breaker Timestamp Log',
      category: 'digital',
      shortDescription: 'The digital record printout from the manor’s automated circuit control box.',
      detailedAnalysis:
        'Auxiliary Loop 4 (which powers the study magnetic strike-plate and CCTV feed) was disabled from the basement master terminal at 11:38 PM and restored at 11:42 PM. The four-minute blind window matches the exact window of Julian’s incapacitation.',
      locationFound: 'Security Substation Terminal',
      tags: ['Digital', 'Timestamp', 'Security'],
      contradictsSuspectId: 'suspect-mireille',
      contradictionNote: 'Mireille claimed the outage was an automated transformer spike, but the log records a manual keystroke override.',
    },
    'clue-acoustic-terminal': {
      id: 'clue-acoustic-terminal',
      title: 'Basement Workshop Speaking Tube Valve',
      category: 'physical',
      shortDescription: 'The receiving end of the vintage speaking tube in the secluded basement clockmaker workshop.',
      detailedAnalysis:
        'Fitted with an improvised medical rubber bulb and threaded glass vial adapter. Traces of liquid ether match the chemical residues recovered from Julian’s study tube above. A pressure-pump clamp was left on the workbench.',
      locationFound: 'Clockmaker’s Basement Workshop',
      tags: ['Method', 'Physical', 'Crime Scene'],
      relatedClueIds: ['clue-speaking-tube'],
    },
    'clue-sterling-journal': {
      id: 'clue-sterling-journal',
      title: 'Sterling’s Cryptographic Notebook',
      category: 'document',
      shortDescription: 'A leather-bound field journal found concealed beneath the library encyclopedia shelf.',
      detailedAnalysis:
        'Contains hand-drawn cross-sections of Julian Vance’s Celestial Automaton gear train. Page 84 has a handwritten notation: "Acoustic line directly aligns with the desk chair. 150ml of diethyl vapor sufficient for 20-minute syncope without cardiac failure. Replaced cylinder will hold the latch." Signed with initials A.S.',
      locationFound: 'Second-Floor Library Hidden Shelf',
      tags: ['Premeditation', 'Document', 'Conclusive Proof'],
      contradictsSuspectId: 'suspect-sterling',
      contradictionNote: 'Irrefutable proof of planned remote incapacitation and mechanical bypass by Dr. Sterling.',
    },
    'clue-elena-alibi': {
      id: 'clue-elena-alibi',
      title: 'Catering Lead’s Sworn Statement',
      category: 'testimony',
      shortDescription: 'Written confirmation from Chef Henri, head of the gala catering team.',
      detailedAnalysis:
        'Chef Henri confirms Elena Vance was standing beside the main terrace buffet continuously from 11:35 PM to 11:45 PM, loudly demanding iced champagne buckets and arguing over table arrangements in full view of twelve gala guests.',
      locationFound: 'Catering Office / Terrace',
      tags: ['Alibi', 'Testimony'],
      contradictsSuspectId: 'suspect-elena',
      contradictionNote: 'Physically exonerates Elena from being in the study or workshop during the 11:38-11:42 PM window.',
    },
    'clue-lukas-manifest': {
      id: 'clue-lukas-manifest',
      title: 'Lukas’s Certified Medical Courier Manifest',
      category: 'document',
      shortDescription: 'A customs-stamped courier manifest for Julian’s refrigerated peptide medication.',
      detailedAnalysis:
        'Proves the lead-lined briefcase in Lukas’s trunk was an insulated pharmaceutical cooler containing specialized cardiac preservation medication for Julian, personally prescribed by a clinic in Lausanne.',
      locationFound: 'Garage Courier Vehicle',
      tags: ['Document', 'Exoneration', 'Alibi'],
      contradictsSuspectId: 'suspect-lukas',
      contradictionNote: 'Clears Lukas of transporting stolen art; his secretive behavior was strictly medical discretion.',
    },
    'clue-mireille-keycard': {
      id: 'clue-mireille-keycard',
      title: 'Mireille’s Security Keycard Audit',
      category: 'digital',
      shortDescription: 'The electronic badge audit trail from the manor entry portals.',
      detailedAnalysis:
        'Mireille used her badge at the Main Gallery door at 11:35 PM, but did not swipe into the basement workshop. However, her terminal password was left active on the common control computer where anyone could have executed the breaker command.',
      locationFound: 'Security Console Server',
      tags: ['Digital', 'Audit', 'Security'],
      relatedClueIds: ['clue-breaker-log'],
    },
  },

  connections: [
    {
      id: 'conn-remote-incapacitation',
      clueA: 'clue-speaking-tube',
      clueB: 'clue-acoustic-terminal',
      deductionTitle: 'Remote Aerosol Infiltration',
      deductionText:
        'Julian Vance was not poisoned by food or drink. The perpetrator utilized the manor’s antique brass speaking tube as an airtight aerosol duct from the basement workshop, flooding the study with diethyl ether while the door remained bolted from within.',
      unlockedFlag: 'knows_remote_gas_method',
    },
    {
      id: 'conn-sterling-burglary',
      clueA: 'clue-reversed-gear',
      clueB: 'clue-sterling-journal',
      deductionTitle: 'Premeditated Mechanical Bypass',
      deductionText:
        'Dr. Sterling used his intimate academic knowledge of Vance’s patents to manufacture a reverse-toothed cylinder. He used this dummy cylinder to prevent the study vault latch from engaging, allowing him seamless entry after gassing Julian.',
      unlockedFlag: 'knows_sterling_guilty_burglary',
    },
    {
      id: 'conn-elena-exoneration',
      clueA: 'clue-wine-glass',
      clueB: 'clue-elena-alibi',
      deductionTitle: 'Elena’s Decoy & Exoneration',
      deductionText:
        'Elena Vance did spike the wine with a harmless herbal sedative in an amateurish attempt to search her uncle’s desk for the ledger. But Julian never drank it, and Elena’s verified presence on the terrace proves she was not the perpetrator of the violent theft.',
      unlockedFlag: 'elena_exonerated_of_theft',
    },
    {
      id: 'conn-trellis-sterling',
      clueA: 'clue-trellis-footprint',
      clueB: 'clue-graphite-cloth',
      deductionTitle: 'Sterling’s Infiltration Route',
      deductionText:
        'The mud on the north trellis matches Dr. Sterling’s size 43 London brogues. After pumping the ether from the basement workshop, Sterling climbed the trellis directly to the study balcony, slipped inside with graphite lubricant, and extracted the Celestial Automaton.',
      unlockedFlag: 'knows_sterling_physical_route',
    },
  ],

  hypotheses: {
    'hypo-sterling-true': {
      id: 'hypo-sterling-true',
      title: 'Dr. Arthur Sterling: Premeditated Acoustic Theft',
      accusedSuspectId: 'suspect-sterling',
      motiveSummary: 'Stole the Celestial Automaton to decipher its lost astronomical gears and revive his dying academic career.',
      methodSummary: 'Incapacitated Julian via ether pumped through the speaking tube, then entered via the trellis using a reverse-tooth cylinder.',
      requiredClueIds: [
        'clue-speaking-tube',
        'clue-reversed-gear',
        'clue-acoustic-terminal',
        'clue-sterling-journal',
      ],
      disqualifyingClueIds: ['clue-forged-bill'],
      isValidTruth: true,
      flawExplanation: 'Your deduction lacks the physical proof connecting the basement aerosol delivery or the reverse-tooth cylinder to Sterling.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
    'hypo-elena-false': {
      id: 'hypo-elena-false',
      title: 'Elena Vance: Desperate Heir Syndicate Theft',
      accusedSuspectId: 'suspect-elena',
      motiveSummary: 'Attempted to sell the family treasure to pay off mounting Geneva debts by poisoning Julian’s wine.',
      methodSummary: 'Spiked the solstice wine, locked the study door, and forged the sales certificate.',
      requiredClueIds: ['clue-forged-bill', 'clue-wine-glass'],
      disqualifyingClueIds: ['clue-elena-alibi', 'clue-speaking-tube'],
      isValidTruth: false,
      flawExplanation:
        'Elena has a rock-solid alibi on the terrace during the critical 4-minute blackout, and chemical analysis proved the wine did not cause the sudden collapse.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-scapegoat-elena',
    },
    'hypo-mireille-false': {
      id: 'hypo-mireille-false',
      title: 'Mireille Fontaine: Internal Security Sabotage',
      accusedSuspectId: 'suspect-mireille',
      motiveSummary: 'Retaliated against Julian’s lack of professional endorsement by disabling manor security.',
      methodSummary: 'Cut the breaker loop to blind cameras and opened the magnetic door override.',
      requiredClueIds: ['clue-breaker-log', 'clue-mireille-keycard'],
      disqualifyingClueIds: ['clue-sterling-journal'],
      isValidTruth: false,
      flawExplanation:
        'Mireille left her terminal logged in, allowing another party to execute the breaker trip. She had no mechanical tools or cylinder to bypass the physical lock.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-security-scapegoat',
    },
    'hypo-lukas-false': {
      id: 'hypo-lukas-false',
      title: 'Lukas Ward: Black Market River Courier',
      accusedSuspectId: 'suspect-lukas',
      motiveSummary: 'Smuggled the heavy automaton off estate grounds inside his courier case for a foreign buyer.',
      methodSummary: 'Used his vehicle clearance to transport the automaton through the west river gate.',
      requiredClueIds: ['clue-lukas-manifest'],
      disqualifyingClueIds: ['clue-acoustic-terminal'],
      isValidTruth: false,
      flawExplanation:
        'Lukas’s briefcase contained certified cardiac peptide medicine for Julian Vance, not stolen antiquities.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'The Master Horologist’s Triumph',
      tier: 'triumph',
      badge: 'FLAWLESS DEDUCTION',
      narrative: [
        'Before the local gendarmerie arrived at dawn, you assembled the four suspects in Saint-Claire Manor’s grand library.',
        'With methodical precision, you laid the pieces upon the mahogany table: the chemical traces of ether in the speaking tube, the mud-caked oxford prints from the north trellis, the reversed-tooth cylinder, and Dr. Sterling’s own cryptographic notebook.',
        'Sterling’s scholarly arrogance dissolved into quiet terror. As you revealed the match between his handwritten gear schematics and the cylinder in the flue, he collapsed into his chair, confessing that he intended to publish the decipherment as his life’s magnum opus.',
        'The Celestial Automaton was recovered intact from Sterling’s velvet-lined travelling trunk in the carriage coach. Julian Vance regained consciousness in hospital under Lukas’s timely medical delivery.',
        'Elena Vance was held accountable for civil document tampering, but cleared of violent assault. Justice was served with surgical intellectual elegance.',
      ],
      summary: 'Dr. Arthur Sterling was arrested with irrefutable forensic and mechanical evidence. The automaton was saved intact, and Julian Vance survived.',
      criteriaReview: {
        theTruth: 'Dr. Arthur Sterling orchestrated the entire theft using the acoustic tube and specialized lock bypass.',
        yourDeduction: 'You proved motive, remote delivery method, physical route, and premeditation without prejudice.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Scratched Acoustic Speaking Tube',
          'Sterling’s Cryptographic Notebook',
          'Reversed Tooth Brass Cylinder',
          'Elena’s verified terrace alibi',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary detective work. You resisted obvious red herrings and followed the mechanical truth.',
      },
    },
    'ending-scapegoat-elena': {
      id: 'ending-scapegoat-elena',
      title: 'The Prejudiced Heir’s Scapegoat',
      tier: 'wrong_conviction',
      badge: 'MISCARRIAGE OF JUSTICE',
      narrative: [
        'Seduced by the forged bill of sale and the spilled wine goblet, you pointed your finger decisively at Elena Vance.',
        'Overwhelmed by debt, grief, and the weight of your accusation, Elena was taken into custody in handcuffs, sobbing into the rain while protesting her innocence.',
        'Meanwhile, Dr. Arthur Sterling quietly checked out of the estate at 6:15 AM, boarding the morning express train to Geneva with a heavy leather travel case.',
        'Two months later, an anonymous monograph deciphering the lost celestial equations was published in an obscure Viennese journal. The Celestial Automaton was never seen again, and Julian Vance woke to find his beloved niece wrongfully ruined.',
      ],
      summary: 'Elena Vance was wrongfully blamed based on surface motive and decoys, while Dr. Sterling escaped with the historic automaton.',
      criteriaReview: {
        theTruth: 'Elena only attempted an unauthorized appraisal and harmless sedative; Sterling committed the actual heist.',
        yourDeduction: 'You mistook circumstantial financial desperation for violent execution.',
        accuracyRate: 40,
        keyDiscoveries: ['Pre-Drafted Bill of Sale', 'Spilled Solstice Wine Glass'],
        missedOpportunities: [
          'Failed to interview Chef Henri on the terrace regarding Elena’s alibi.',
          'Overlooked the acoustic speaking tube and basement ether apparatus.',
          'Ignored Dr. Sterling’s graphite-stained hands.',
        ],
        reasoningCritique: 'Confirmation bias blinded you to timeline contradictions and forensic mismatches.',
      },
    },
    'ending-security-scapegoat': {
      id: 'ending-security-scapegoat',
      title: 'The Broken Circuit Scapegoat',
      tier: 'partial',
      badge: 'PARTIAL JUSTICE',
      narrative: [
        'You centered your conclusion on the 4-minute breaker outage, accusing Mireille Fontaine of internal administrative sabotage.',
        'While Mireille was suspended and disgraced for gross security negligence, she had no accomplice connection or physical means of retrieving the automaton.',
        'In the confusion of her dismissal, the real culprit quietly discarded the stolen piece in a remote drainage conduit along the river road.',
        'The automaton was recovered severely damaged by water corrosion, its delicate gearwork irreparably ruined. The true mastermind was never officially identified.',
      ],
      summary: 'Mireille took the fall for administrative oversight; the real thief vanished and the artifact was ruined.',
      criteriaReview: {
        theTruth: 'The breaker was exploited by an external opportunist using an unattended terminal.',
        yourDeduction: 'You focused solely on digital timestamps without verifying physical custody or capability.',
        accuracyRate: 50,
        keyDiscoveries: ['Auxiliary Breaker Timestamp Log'],
        missedOpportunities: [
          'Did not investigate the mechanical nature of the cylinder lock.',
          'Failed to inspect Dr. Sterling’s library papers.',
        ],
        reasoningCritique: 'You confused the opportunity vector with the perpetrator identity.',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'The Cold River Trail',
      tier: 'compromised',
      badge: 'UNSOLVED INQUIRY',
      narrative: [
        'Your questions sparked chaotic defensive reactions across the manor without establishing cohesive proof.',
        'Alarmed by hostile inquiries, Lukas Ward fled through the service gate and tossed his delivery cooler into the fast-moving river, destroying Julian’s vital heart medication.',
        'Dr. Sterling slipped away into the morning fog during the commotion. By dawn, the gendarmerie declared the scene too contaminated for formal prosecution.',
        'The mystery of Julian Vance’s locked study remains an unsolved legend among antiquarian collectors.',
      ],
      summary: 'The investigation collapsed under premature aggression and disorganized evidence gathering.',
      criteriaReview: {
        theTruth: 'Sterling executed the heist using precision acoustics and dummy cylinders.',
        yourDeduction: 'You failed to assemble sufficient connected deductions before issuing an accusation.',
        accuracyRate: 25,
        keyDiscoveries: [],
        missedOpportunities: [
          'Failed to synthesize deductions on the deduction board.',
          'Challenged suspects before establishing forensic foundation.',
        ],
        reasoningCritique: 'Rushed conclusions and lack of notebook synthesis led to an evidentiary deadlock.',
      },
    },
  },

  scenarios: {
    'scene-arrival': {
      id: 'scene-arrival',
      title: 'The Solstice Alarm',
      location: 'Grand Foyer, Saint-Claire Manor',
      narrative: [
        'A violent autumn squall batters the stained-glass lancets of Saint-Claire Manor. It is 11:45 PM.',
        'Moments ago, the estate’s mechanical bells chimed in frantic discord. Master horologist Julian Vance has been found slumped over his desk inside his locked study, unresponsive and pale.',
        'Worse, the glass display case that once cradled the 17th-century Celestial Automaton stands shattered, its velvet cushion vacant.',
        'You step across the wet marble foyer as gendarmerie sirens wail in the far valley. Four people are present in the manor: Elena Vance, Dr. Arthur Sterling, Mireille Fontaine, and Lukas Ward.',
      ],
      choices: [
        {
          id: 'choice-to-study',
          text: 'Proceed immediately to Julian Vance’s study to examine the crime scene.',
          destinationId: 'scene-study',
          consequencePreview: 'Forensic',
          flavor: 'Primary investigation scene.',
        },
        {
          id: 'choice-to-terrace',
          text: 'Inspect the north terrace and exterior perimeter before rain washes away tracks.',
          destinationId: 'scene-terrace',
          consequencePreview: 'Risky',
          flavor: 'Time-sensitive outdoor examination.',
        },
        {
          id: 'choice-to-foyer-suspects',
          text: 'Address the gathered suspects in the grand foyer to gauge initial reactions.',
          destinationId: 'scene-foyer-inquiry',
          consequencePreview: 'Inquisitive',
          flavor: 'Observational interrogation.',
        },
      ],
    },

    'scene-study': {
      id: 'scene-study',
      title: 'The Sealed Sanctum',
      location: 'Julian Vance’s Private Study',
      narrative: [
        'The study smells faintly of beeswax, old parchment, and an anomalous sweet, medicinal pungency that tickles your throat.',
        'Julian Vance is slumped in his high-backed leather chair, breathing shallowly. The heavy oak door was reportedly deadbolted from the inside when staff broke the top glass pane to reach the handle.',
        'Behind his desk, the ornate brass acoustic speaking tube trumpet catches the amber lamp light. Beside the chair lies a shattered wine goblet, and in the fireplace hearth, cold ashes look disturbed.',
      ],
      cluesDiscovered: ['clue-speaking-tube', 'clue-wine-glass'],
      choices: [
        {
          id: 'choice-examine-tube',
          text: 'Closely inspect the brass acoustic speaking tube behind the desk.',
          destinationId: 'scene-inspect-tube',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-examine-hearth',
          text: 'Rake through the cold ashes in the fireplace flue.',
          destinationId: 'scene-inspect-hearth',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-study-to-workshop',
          text: 'Trace the speaking tube downward toward the clockmaker’s basement workshop.',
          destinationId: 'scene-workshop',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-study-to-library',
          text: 'Head upstairs to the second-floor library where Dr. Sterling was reportedly reading.',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-inspect-tube': {
      id: 'scene-inspect-tube',
      title: 'The Brass Acoustic Conduit',
      location: 'Julian Vance’s Desk',
      narrative: [
        'You lean close to the brass horn. The sweet aroma is unmistakable: clinical diethyl ether.',
        'Magnifying your lens over the valve, you spot fresh scratches on the brass fitting. Someone wired open the safety shutter with high-tensile piano wire.',
        'The speaking tube runs vertically through the floorboards straight down into the estate’s subterranean workshop.',
      ],
      choices: [
        {
          id: 'choice-tube-back-study',
          text: 'Return to the center of the study.',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-tube-to-workshop',
          text: 'Follow the pipe route directly down into the clockmaker’s workshop.',
          destinationId: 'scene-workshop',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-inspect-hearth': {
      id: 'scene-inspect-hearth',
      title: 'The Concealed Cylinder',
      location: 'Study Fireplace Flue',
      narrative: [
        'Reaching up into the iron damper of the cold flue, your gloved fingers brush against cold, heavy metal.',
        'You pull free a gleaming brass cylinder, roughly the size of a chess rook. Its miniature gear teeth are freshly machined—and cut in reverse!',
        'This piece does not belong to any fireplace damper; it is a precision lockcraft bypass tool engineered to defeat Vance’s patented vault cam.',
      ],
      cluesDiscovered: ['clue-reversed-gear'],
      choices: [
        {
          id: 'choice-hearth-to-study',
          text: 'Pocket the reverse cylinder and continue examining the study.',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-hearth-to-interrogate-sterling',
          text: 'Take this cylinder directly to Dr. Sterling in the library to test his reaction.',
          destinationId: 'scene-interrogate-sterling',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-terrace': {
      id: 'scene-terrace',
      title: 'The North Rose Trellis',
      location: 'North Conservatory Terrace',
      narrative: [
        'Rain lashes your coat as you step onto the flagstone terrace. To the right, beneath the study’s second-floor balcony, a heavy wrought-iron rose trellis climbs the stone facade.',
        'In the saturated mulch of the flowerbed, two deep footprints are clearly visible before the downpour fills them.',
        'They belong to size 43 European dress shoes with a distinctive diamond-pattern rubber heel tap. Looking upward, fresh abrasions scar the green paint of the trellis rungs.',
      ],
      cluesDiscovered: ['clue-trellis-footprint'],
      choices: [
        {
          id: 'choice-terrace-to-catering',
          text: 'Walk over to the catering preparation station on the covered veranda.',
          destinationId: 'scene-catering-station',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-terrace-to-study',
          text: 'Re-enter the manor through the study french doors.',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-terrace-to-garage',
          text: 'Follow the exterior pathway down to the garage where the courier vehicle is parked.',
          destinationId: 'scene-garage',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-catering-station': {
      id: 'scene-catering-station',
      title: 'The Terrace Catering Veranda',
      location: 'North Veranda',
      narrative: [
        'Chef Henri is furiously drying silver serving trays while his staff whispers about the police.',
        'When asked about the gala timeline, Henri waves his dish towel emphatically: "Mademoiselle Elena? She was here, Detective! Right in front of this bar from twenty minutes before midnight until the bells started ringing, complaining about champagne chill temperatures!"',
        'He hands you his signed service log confirming the exact timeline.',
      ],
      cluesDiscovered: ['clue-elena-alibi'],
      choices: [
        {
          id: 'choice-catering-to-elena',
          text: 'Find Elena Vance in the conservatory drawing room.',
          destinationId: 'scene-interrogate-elena',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-catering-to-terrace',
          text: 'Step back onto the terrace.',
          destinationId: 'scene-terrace',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-foyer-inquiry': {
      id: 'scene-foyer-inquiry',
      title: 'The Foyer Encounter',
      location: 'Grand Foyer',
      narrative: [
        'The four suspects maintain anxious distance beneath the grand chandelier.',
        'Elena Vance clutches a damp handkerchief, her eyes darting toward the north wing. Dr. Sterling stands rigidly by the grandfather clock, rubbing his linen cuffs.',
        'Mireille Fontaine studies the security panel lights, tapping her pencil rhythmically against a clipboard. In the shadows near the front door, Lukas Ward stands in his soaked leather driving jacket.',
      ],
      choices: [
        {
          id: 'choice-talk-elena',
          text: 'Approach Elena Vance for questioning.',
          destinationId: 'scene-interrogate-elena',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-talk-sterling',
          text: 'Approach Dr. Arthur Sterling for questioning.',
          destinationId: 'scene-interrogate-sterling',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-talk-mireille',
          text: 'Approach Mireille Fontaine regarding the manor systems.',
          destinationId: 'scene-interrogate-mireille',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-talk-lukas',
          text: 'Question Lukas Ward about his courier vehicle.',
          destinationId: 'scene-interrogate-lukas',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-interrogate-elena': {
      id: 'scene-interrogate-elena',
      title: 'Interrogating Elena Vance',
      location: 'Conservatory Drawing Room',
      dialogue: [
        {
          speaker: 'Elena Vance',
          text: 'You have no right to look at me like that! Julian was my family. Everything I’ve done was to keep this estate solvent!',
          mood: 'defiant',
        },
      ],
      narrative: [
        'Elena sits with an open art portfolio on the table. Tucked inside is a typed draft agreement pledging the Celestial Automaton for 450,000 Swiss Francs.',
        'Her hands tremble slightly as she notices you observing the document.',
      ],
      cluesDiscovered: ['clue-forged-bill'],
      choices: [
        {
          id: 'choice-press-elena-forgery',
          text: 'Confront Elena with the forged bill of sale: "You planned to sell the automaton behind Julian’s back."',
          destinationId: 'scene-elena-confrontation',
          consequencePreview: 'Direct',
          effects: [
            {
              type: 'setFlag',
              target: 'elena_admitted_financial_strain',
              description: 'Elena broke down and admitted her syndicate debts.',
            },
          ],
        },
        {
          id: 'choice-press-elena-wine',
          text: 'Ask about the spilled solstice wine in the study.',
          destinationId: 'scene-elena-wine-confession',
          consequencePreview: 'Inquisitive',
          conditions: [
            {
              type: 'hasClue',
              target: 'clue-wine-glass',
            },
          ],
          lockReason: 'Requires discovering the spilled wine glass first.',
        },
        {
          id: 'choice-elena-leave',
          text: 'Conclude the interview for now and investigate other leads.',
          destinationId: 'scene-foyer-inquiry',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-elena-confrontation': {
      id: 'scene-elena-confrontation',
      title: 'Elena’s Debt Confession',
      location: 'Conservatory Drawing Room',
      dialogue: [
        {
          speaker: 'Elena Vance',
          text: 'Yes! Fine! The Geneva guild was going to liquidate my restoration workshop. I drafted the contract to show them a guarantee. But I could never harm my uncle! Ask the caterers—I never left the terrace!',
          mood: 'shaken',
        },
      ],
      narrative: [
        'Elena’s distress is raw and unfiltered. She admits she wanted Julian to sleep so she could copy the serial numbers from the automaton, but swears she never touched him.',
      ],
      choices: [
        {
          id: 'choice-elena-confession-done',
          text: 'Note her statement and check the library.',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-elena-confession-to-study',
          text: 'Return to the study.',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-elena-wine-confession': {
      id: 'scene-elena-wine-confession',
      title: 'The Tainted Goblet',
      location: 'Conservatory Drawing Room',
      dialogue: [
        {
          speaker: 'Elena Vance',
          text: 'The wine? I... I put four drops of valerian extract into his glass at 10:00 PM. Just enough to make him retire early! But when I went back to the terrace, he hadn’t even sipped it!',
          mood: 'evasive',
        },
      ],
      narrative: [
        'Her admission perfectly matches the forensic chemical analysis of the wine glass: valerian root, incapable of rapid anesthesia.',
      ],
      choices: [
        {
          id: 'choice-wine-confession-done',
          text: 'Proceed to question Dr. Sterling.',
          destinationId: 'scene-interrogate-sterling',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interrogate-sterling': {
      id: 'scene-interrogate-sterling',
      title: 'Interrogating Dr. Arthur Sterling',
      location: 'Second-Floor Library Gallery',
      dialogue: [
        {
          speaker: 'Dr. Arthur Sterling',
          text: 'A dreadful calamity, Detective. Julian was a gifted craftsman, though sadly protective of his mechanical ciphers. I was up here the entire evening, engrossed in 17th-century horological treatises.',
          mood: 'calm',
        },
      ],
      narrative: [
        'Dr. Sterling dabs his forehead with a monogrammed handkerchief. As he folds it, you catch the silvery-black gleam of dry graphite powder and bronze dust on the cloth.',
        'His bespoke London oxfords are damp around the welts, resting on the parquet floor.',
      ],
      cluesDiscovered: ['clue-graphite-cloth'],
      choices: [
        {
          id: 'choice-sterling-press-graphite',
          text: 'Point to his handkerchief: "High-purity lock graphite on a scholar’s linen, Doctor?"',
          destinationId: 'scene-sterling-flustered',
          consequencePreview: 'Direct',
          effects: [
            {
              type: 'setFlag',
              target: 'sterling_pressured',
              description: 'Dr. Sterling became defensive over his lock lubricant.',
            },
          ],
        },
        {
          id: 'choice-sterling-show-cylinder',
          text: 'Display the reverse-toothed brass cylinder found in the study hearth.',
          destinationId: 'scene-sterling-cylinder-reaction',
          consequencePreview: 'Forensic',
          conditions: [
            {
              type: 'hasClue',
              target: 'clue-reversed-gear',
            },
          ],
          lockReason: 'Requires finding the reversed-tooth cylinder first.',
        },
        {
          id: 'choice-sterling-search-library',
          text: 'Excuse yourself and search the library bookshelves.',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-sterling-flustered': {
      id: 'scene-sterling-flustered',
      title: 'A Scholar’s Slip',
      location: 'Second-Floor Library Gallery',
      dialogue: [
        {
          speaker: 'Dr. Arthur Sterling',
          text: 'Graphite? An occupational hazard! I was examining an antique astrolabe earlier this afternoon. Are you suggesting an academic of my standing crawls about like a common housebreaker?',
          mood: 'nervous',
        },
      ],
      narrative: [
        'Sterling’s voice pitch rises noticeably. He slides his feet back beneath his chair, attempting to conceal his damp shoe welts.',
      ],
      choices: [
        {
          id: 'choice-flustered-to-search',
          text: 'Conduct a thorough search of his reading desk and surrounding shelves.',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-sterling-cylinder-reaction': {
      id: 'scene-sterling-cylinder-reaction',
      title: 'The Mechanical Match',
      location: 'Second-Floor Library Gallery',
      narrative: [
        'When you place the heavy brass cylinder on the table, Sterling’s eyes dilate with shock.',
        'For half a second, his fingers twitch as if to reach for it. "Where did you... That is an inverted escapement cam! Julian swore he melted down the prototype!"',
        'His slip is fatal. You never told him Julian owned a prototype.',
      ],
      choices: [
        {
          id: 'choice-cylinder-to-library-shelf',
          text: 'Search behind the encyclopedia set right next to his reading chair.',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-library-archive': {
      id: 'scene-library-archive',
      title: 'The Hidden Notebook',
      location: 'Library East Wing',
      narrative: [
        'You pull back the heavy leather volumes of the 1894 Encyclopedic Horology on the shelf closest to Dr. Sterling’s table.',
        'Concealed in the wall recess is a dark leather notebook. Opening to page 84, you discover hand-drawn blueprints of Julian Vance’s study and the exact calculations for aerosol ether displacement through the acoustic speaking tube!',
        'A notation in Sterling’s distinct cursive reads: "150ml of diethyl vapor sufficient for 20-minute syncope without cardiac failure. Replaced cylinder will hold the latch. Signed A.S."',
      ],
      cluesDiscovered: ['clue-sterling-journal'],
      choices: [
        {
          id: 'choice-library-to-workshop',
          text: 'Proceed to the basement clockmaker workshop to confirm the supply terminal.',
          destinationId: 'scene-workshop',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-library-to-security',
          text: 'Inspect the security room to check the circuit breaker logs.',
          destinationId: 'scene-interrogate-mireille',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-library-to-deductions',
          text: 'Open your case notebook to review evidence and connections.',
          destinationId: 'scene-deduction-chamber',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-workshop': {
      id: 'scene-workshop',
      title: 'The Subterranean Workshop',
      location: 'Clockmaker’s Basement Workshop',
      narrative: [
        'The basement workshop is silent save for the drip of condensation. Brass clock gears, lathes, and oil stones line the heavy workbenches.',
        'At the rear wall, the lower terminus of the brass speaking tube is attached to a vertical copper pipe.',
        'Affixed to the mouth of the tube is an improvised medical rubber bulb and threaded glass valve. An empty bottle of reagent diethyl ether rests in the waste bin.',
      ],
      cluesDiscovered: ['clue-acoustic-terminal'],
      choices: [
        {
          id: 'choice-workshop-to-security',
          text: 'Check the adjacent electrical substation where Mireille was stationed.',
          destinationId: 'scene-interrogate-mireille',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-workshop-to-garage',
          text: 'Head outside toward the service garage.',
          destinationId: 'scene-garage',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interrogate-mireille': {
      id: 'scene-interrogate-mireille',
      title: 'Interrogating Mireille Fontaine',
      location: 'Security Substation',
      dialogue: [
        {
          speaker: 'Mireille Fontaine',
          text: 'Every kilowatt in this house is logged, Detective. I run this security network like a chronometer. At 11:38, Loop 4 suffered an anomalous voltage drop.',
          mood: 'calm',
        },
      ],
      narrative: [
        'Mireille prints out the digital terminal log for you. Loop 4, which controls the study camera and magnetic strike-plate, was manually toggled off at 11:38 PM and re-engaged at 11:42 PM.',
        'However, her badge log shows she was swiping into the main gallery at 11:35 PM. Her workstation terminal was left completely unlocked and unattended.',
      ],
      cluesDiscovered: ['clue-breaker-log', 'clue-mireille-keycard'],
      choices: [
        {
          id: 'choice-mireille-press-terminal',
          text: 'Ask why her workstation was left logged in and unattended during the gala.',
          destinationId: 'scene-mireille-terminal-admission',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-mireille-to-garage',
          text: 'Inspect the estate service garage.',
          destinationId: 'scene-garage',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-mireille-terminal-admission': {
      id: 'scene-mireille-terminal-admission',
      title: 'The Unattended Console',
      location: 'Security Substation',
      dialogue: [
        {
          speaker: 'Mireille Fontaine',
          text: 'I... I stepped away to the pantry for coffee at 11:36. Any guest or scholar with access to the basement corridor could have reached over the counter and flipped the breaker switch!',
          mood: 'nervous',
        },
      ],
      narrative: [
        'Her admission confirms that the breaker trip was an opportunistic blackout executed by someone passing through the basement corridor toward the workshop.',
      ],
      choices: [
        {
          id: 'choice-terminal-to-deduction',
          text: 'Prepare your deduction in the case notebook.',
          destinationId: 'scene-deduction-chamber',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-garage': {
      id: 'scene-garage',
      title: 'The Service Garage',
      location: 'Estate Coach House & Garage',
      narrative: [
        'Lukas Ward stands beside the running estate saloon car, wiping mist from the windshield.',
        'In the rear trunk sits a heavy, lead-lined metallic case. Rain cascades from the gutter above.',
      ],
      choices: [
        {
          id: 'choice-confront-lukas-trunk',
          text: 'Demand that Lukas open the metallic case in his trunk.',
          destinationId: 'scene-interrogate-lukas',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-garage-to-foyer',
          text: 'Return to the main manor foyer.',
          destinationId: 'scene-foyer-inquiry',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interrogate-lukas': {
      id: 'scene-interrogate-lukas',
      title: 'Lukas’s Courier Lockbox',
      location: 'Estate Coach House',
      dialogue: [
        {
          speaker: 'Lukas Ward',
          text: 'Look, Detective, I don’t steal art. Julian pays me to keep his private affairs private. If you force me to open this, his medical situation becomes public knowledge.',
          mood: 'defiant',
        },
      ],
      narrative: [
        'You present your official detective badge. Reluctantly, Lukas enters his combination and flips the dual latches.',
        'Inside lies a refrigerated pharmaceutical tray of specialized cardiac peptide vials, labeled with Julian Vance’s name and tonight’s delivery timestamp.',
        'He hands you the certified courier customs manifest.',
      ],
      cluesDiscovered: ['clue-lukas-manifest'],
      choices: [
        {
          id: 'choice-lukas-cleared',
          text: 'Exonerate Lukas and instruct him to stand by for the emergency medical team.',
          destinationId: 'scene-deduction-chamber',
          consequencePreview: 'Deductive',
          effects: [
            {
              type: 'setFlag',
              target: 'lukas_cleared_by_evidence',
              description: 'Lukas Ward’s loyalty and innocence were verified.',
            },
          ],
        },
      ],
    },

    'scene-deduction-chamber': {
      id: 'scene-deduction-chamber',
      title: 'The Detective’s Synthesis',
      location: 'Manor Solarium / Case Headquarters',
      narrative: [
        'The rain is beginning to lighten outside the arched solarium windows. Dawn is barely an hour away.',
        'You have surveyed the study, tested the speaking tube, inspected the basement workshop, catalogued the chemical residues, and cross-examined every suspect.',
        'All the evidence is assembled in your notebook. It is time to formulate your formal hypothesis and summon the suspects to the grand library.',
      ],
      choices: [
        {
          id: 'choice-summon-sterling',
          text: 'Formulate formal accusation against Dr. Arthur Sterling.',
          destinationId: 'scene-confrontation-sterling',
          consequencePreview: 'Deductive',
          conditions: [
            {
              type: 'hasClue',
              target: 'clue-speaking-tube',
            },
            {
              type: 'hasClue',
              target: 'clue-reversed-gear',
            },
          ],
          lockReason: 'Requires physical proof of the acoustic tube and reversed gear cylinder.',
        },
        {
          id: 'choice-summon-elena',
          text: 'Formulate formal accusation against Elena Vance based on the forged bill and debts.',
          destinationId: 'scene-confrontation-elena',
          consequencePreview: 'Risky',
        },
        {
          id: 'choice-summon-mireille',
          text: 'Formulate formal accusation against Mireille Fontaine based on the breaker outage.',
          destinationId: 'scene-confrontation-mireille',
          consequencePreview: 'Risky',
        },
        {
          id: 'choice-summon-lukas',
          text: 'Accuse Lukas Ward of courier art theft.',
          destinationId: 'scene-confrontation-lukas',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-confrontation-sterling': {
      id: 'scene-confrontation-sterling',
      title: 'The Denouement: Sterling Accused',
      location: 'Grand Library',
      narrative: [
        'The four suspects take their seats around the long library table as the grandfather clock strikes 5:00 AM.',
        'You present the timeline: the breaker blackout at 11:38 PM, the ether vapor pumped through the acoustic tube, the trellis climb, and the reversed cylinder that prevented the study vault from latching.',
        'You turn to Dr. Arthur Sterling and place his leather journal and graphite-dusted handkerchief on the wood.',
      ],
      choices: [
        {
          id: 'choice-sterling-slam-proof',
          text: 'Present the notebook blueprint and cylinder: "The crime was premeditated by you, Dr. Sterling."',
          destinationId: 'scene-ending-triumph',
          consequencePreview: 'Direct',
          conditions: [
            {
              type: 'hasClue',
              target: 'clue-sterling-journal',
            },
            {
              type: 'hasClue',
              target: 'clue-acoustic-terminal',
            },
          ],
          lockReason: 'Requires Sterling’s notebook and the basement acoustic terminal proof.',
        },
        {
          id: 'choice-sterling-incomplete-proof',
          text: 'Accuse Sterling without showing the cryptographic notebook or terminal proof.',
          destinationId: 'scene-ending-compromised',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-confrontation-elena': {
      id: 'scene-confrontation-elena',
      title: 'The Denouement: Elena Accused',
      location: 'Grand Library',
      narrative: [
        'You point your finger at Elena Vance, citing her financial desperation and the pre-drafted bill of sale found in her portfolio.',
        'Elena weeps in protest as gendarmerie officers arrive to escort her into custody.',
      ],
      choices: [
        {
          id: 'choice-elena-arrest-confirm',
          text: 'Sign the arrest warrant for Elena Vance.',
          destinationId: 'scene-ending-elena',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-confrontation-mireille': {
      id: 'scene-confrontation-mireille',
      title: 'The Denouement: Mireille Accused',
      location: 'Grand Library',
      narrative: [
        'You accuse Mireille Fontaine of internal sabotage, relying on the four-minute breaker log.',
        'Mireille stands in bitter silence as the estate board strips her of credentials.',
      ],
      choices: [
        {
          id: 'choice-mireille-arrest-confirm',
          text: 'Close the file on Mireille Fontaine.',
          destinationId: 'scene-ending-mireille',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-confrontation-lukas': {
      id: 'scene-confrontation-lukas',
      title: 'The Denouement: Lukas Accused',
      location: 'Grand Library',
      narrative: [
        'You accuse Lukas Ward of courier smuggling. Furious and betrayed, Lukas refuses further cooperation.',
      ],
      choices: [
        {
          id: 'choice-lukas-arrest-confirm',
          text: 'Order the vehicle impounded.',
          destinationId: 'scene-ending-compromised',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-ending-triumph': {
      id: 'scene-ending-triumph',
      title: 'Case Closed: The Master Horologist',
      location: 'Grand Library',
      narrative: [
        'Dr. Sterling breaks down beneath the weight of irrefutable forensic and mechanical evidence.',
        'He confesses to hiding the Celestial Automaton inside his velvet travel trunk before the dawn train.',
        'The automaton is safely recovered and returned to Julian Vance, who wakes in hospital surrounded by his grateful family.',
      ],
      isEnding: true,
      endingId: 'ending-triumph',
      choices: [],
    },

    'scene-ending-elena': {
      id: 'scene-ending-elena',
      title: 'Case Closed: The Scapegoat Heir',
      location: 'Police Van',
      narrative: [
        'Elena Vance is driven away in handcuffs into the grey dawn.',
        'Meanwhile, Dr. Sterling boards the morning express with his heavy luggage, escaping with the greatest prize in antique horology.',
      ],
      isEnding: true,
      endingId: 'ending-scapegoat-elena',
      choices: [],
    },

    'scene-ending-mireille': {
      id: 'scene-ending-mireille',
      title: 'Case Closed: The Broken Circuit',
      location: 'Security Office',
      narrative: [
        'Mireille Fontaine is dismissed in disgrace, while the true thief dumps the stolen automaton into the river during his escape.',
      ],
      isEnding: true,
      endingId: 'ending-security-scapegoat',
      choices: [],
    },

    'scene-ending-compromised': {
      id: 'scene-ending-compromised',
      title: 'Case Closed: The Cold Trail',
      location: 'Saint-Claire Manor Gates',
      narrative: [
        'Without unified evidence or clear proof, the suspects scatter and the gendarmerie seals the estate.',
        'The mystery of the Celestial Automaton fades into unproven legend.',
      ],
      isEnding: true,
      endingId: 'ending-compromised',
      choices: [],
    },
  },
};

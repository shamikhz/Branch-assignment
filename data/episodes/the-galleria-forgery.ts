import { Episode } from '@/features/episodes/types';

export const theGalleriaForgeryEpisode: Episode = {
  id: 'the-galleria-forgery',
  version: '1.0.0',
  title: 'The Phantom of the Renaissance',
  subtitle: 'The Theft of the Bella Donna & The Florence Museum Heist',
  synopsis:
    'Under the vaulted arches of a Florence gallery, the priceless 15th-century portrait "La Bella Donna" was swapped during a ninety-second electrical blackout. While the copy in the frame fools the naked eye, UV fluorescence and chemical pigment analysis reveal synthetic titanium white, photographic transfer pinpricks, and an international art syndicate smuggling route to Zurich.',
  estimatedMinutes: 25,
  difficulty: 'Detective',
  caseType: 'art_theft',
  seriesId: 'continental-inquiries',
  seriesName: 'Continental Art & Antiquities Inquiries',
  seriesPart: 1,
  timeSetting: 'Midnight, May 18, 1931',
  location: 'Galleria dell’Accademia Private Salon, Florence',
  initialScenarioId: 'scene-gallery-blackout',
  tags: ['Art Theft', 'Forgery', 'Florence', 'Pigments', 'Heist'],

  suspects: {
    'suspect-bellini': {
      id: 'suspect-bellini',
      name: 'Maestro Carlo Bellini',
      role: 'Chief Art Conservator & Master Copyist',
      age: 52,
      initialDemeanor: 'Intellectual, melancholic, dusting his velvet lapels with chalky turpentine hands.',
      motive: 'Desperate to finance his failing restoration studio and outshine modern avant-garde critics with his flawless Renaissance mastery.',
      opportunity: 'Possessed round-the-clock unescorted key access to the restoration atelier and display frame mount.',
      alibi: 'Claims he was dining at Ristorante Sabatini until 11:00 PM.',
      weakness: 'Recently ordered experimental German titanium white pigments and photographic projection lenses.',
      associatedClueIds: ['clue-titanium-pigment', 'clue-projection-grid', 'clue-varnish-receipt'],
      interrogationSummary: 'Bellini professes horror at the theft, claiming only a barbarian could duplicate the master’s sfumato.',
    },
    'suspect-delacroix': {
      id: 'suspect-delacroix',
      name: 'Baroness Vivienne Delacroix',
      role: 'Private Collector & Parisian Art Patron',
      age: 44,
      initialDemeanor: 'Sophisticated, icy, draped in silver fox furs, smoking through an ivory holder.',
      motive: 'Offered £25,000 by a private Swiss pharmaceutical magnate to acquire the painting off the books.',
      opportunity: 'Attended the private evening viewing and had her chauffeur-driven Daimler waiting outside the courtyard.',
      alibi: 'Claims she was conversing with the museum director in the reception courtyard all evening.',
      weakness: 'Her luggage in the Daimler contains a custom-padded climate-controlled art transport box.',
      associatedClueIds: ['clue-swiss-crate', 'clue-guard-bribe'],
      interrogationSummary: 'The Baroness scoffs at accusations, claiming she buys art openly at Sotheby’s, not in dark alleys.',
    },
    'suspect-rossi': {
      id: 'suspect-rossi',
      name: 'Officer Matteo Rossi',
      role: 'Senior Night Gallery Guard',
      age: 38,
      initialDemeanor: 'Fidgety, repeatedly checking his watch, wiping sweat from his forehead.',
      motive: 'Heavy gambling debts from the Florence velodrome dog races.',
      opportunity: 'Stationed directly beside the basement electrical fuse box when the blackout struck.',
      alibi: 'Claims he was patrolling the north statuary hall when the circuit tripped on an overload.',
      weakness: 'Locker contains a scorched copper jumper wire and a thick envelope of Swiss francs.',
      associatedClueIds: ['clue-circuit-jumper', 'clue-guard-bribe'],
      interrogationSummary: 'Rossi stammers when asked why the emergency gas lights also failed to ignite during the blackout.',
    },
  },

  clues: {
    'clue-titanium-pigment': {
      id: 'clue-titanium-pigment',
      title: 'UV Fluorescence: Synthetic Titanium White',
      category: 'physical',
      shortDescription: 'Ultraviolet lamp fluorescence test on the canvas highlights.',
      detailedAnalysis:
        'The collar highlights on the framed portrait glow deep violet under Wood’s glass UV inspection. This confirms the presence of Titanium Dioxide pigment—commercially patented in 1921! Leonardo and his workshop could only have used lead white.',
      locationFound: 'Framed Portrait in Gallery Salon',
      tags: ['Physical', 'Chemical', 'Forensic'],
    },
    'clue-projection-grid': {
      id: 'clue-projection-grid',
      title: 'Microscopic Camera Obscura Pinpricks',
      category: 'physical',
      shortDescription: 'Microscope analysis of the canvas outer borders.',
      detailedAnalysis:
        'Along the tacking margins of the painted panel are tiny geometric pinpricks spaced at exactly 5mm intervals. These reveal the forger used an epidiascope photographic projector to trace the master’s exact proportions.',
      locationFound: 'Panel Frame Margin',
      tags: ['Physical', 'Technical', 'Forgery'],
      contradictsSuspectId: 'suspect-bellini',
      contradictionNote: 'Proves the forger used modern photographic projection equipment found in Bellini’s darkroom.',
    },
    'clue-circuit-jumper': {
      id: 'clue-circuit-jumper',
      title: 'Scorched Copper Fuse Jumper',
      category: 'physical',
      shortDescription: 'A calibrated copper wire shunt pulled from the main fuse box.',
      detailedAnalysis:
        'The wire was designed to short-circuit when the salon gallery spotlights drew peak amperage at 10:15 PM, giving the thief an artificial 90-second window of pitch darkness.',
      locationFound: 'Basement Fuse Terminal',
      tags: ['Physical', 'Electrical', 'Sabotage'],
    },
    'clue-varnish-receipt': {
      id: 'clue-varnish-receipt',
      title: 'Pigment Invoice from Ditta Poggi, Florence',
      category: 'document',
      shortDescription: 'Supplier receipt billed to Maestro Carlo Bellini.',
      detailedAnalysis:
        'Lists recent purchases of synthetic alkyd resin, pulverized lapis lazuli, and four tubes of titanium white paste delivered to Bellini’s private restoration studio behind the gallery.',
      locationFound: 'Conservator’s Desk Wastebasket',
      tags: ['Document', 'Financial', 'Chemical'],
    },
    'clue-swiss-crate': {
      id: 'clue-swiss-crate',
      title: 'Custom-Lined Velvet Transport Crate',
      category: 'physical',
      shortDescription: 'Cedar shipping box inside the boot of Baroness Delacroix’s Daimler.',
      detailedAnalysis:
        'The interior padding is molded to the exact 62cm x 48cm dimensions of "La Bella Donna", and is stenciled with Swiss customs transit stamps for Geneva.',
      locationFound: 'Daimler Motorcar in Courtyard',
      tags: ['Physical', 'Contraband', 'Transport'],
    },
    'clue-guard-bribe': {
      id: 'clue-guard-bribe',
      title: 'Stash of 1,000 Swiss Franc Banknotes',
      category: 'document',
      shortDescription: 'Uncirculated Zurich banknotes hidden inside a hollowed guard boot.',
      detailedAnalysis:
        'The serial numbers run sequentially, and match withdrawal slips from the Banque de Paris account belonging to Baroness Vivienne Delacroix.',
      locationFound: 'Guard Locker #14',
      tags: ['Document', 'Financial', 'Bribery'],
    },
    'clue-sketchbook': {
      id: 'clue-sketchbook',
      title: 'Bellini’s Sfumato Aging Formulae',
      category: 'document',
      shortDescription: 'Notebook of recipes for artificial craquelure and varnish baking.',
      detailedAnalysis:
        'Contains handwritten notes on baking fresh oil paint under infrared lamps to produce antique crack patterns in 48 hours without blistering the wood.',
      locationFound: 'Restoration Atelier Drying Oven',
      tags: ['Document', 'Technical', 'Confession'],
    },
    'clue-canvas-warp': {
      id: 'clue-canvas-warp',
      title: 'Genuine 15th-Century Poplar Backing Panel',
      category: 'physical',
      shortDescription: 'The wooden panel supporting the forged painting.',
      detailedAnalysis:
        'The wood itself is genuinely 450 years old—taken from a worthless devotional panel of the same era and scraped clean down to the bare timber to defeat tactile wood inspection.',
      locationFound: 'Back of Contested Picture Frame',
      tags: ['Physical', 'Wood', 'Forensic'],
    },
  },

  connections: [
    {
      id: 'conn-modern-forgery-proof',
      clueA: 'clue-titanium-pigment',
      clueB: 'clue-projection-grid',
      deductionTitle: 'The Modern High-Tech Counterfeit',
      deductionText:
        'The painting currently in the frame is a modern counterfeit executed with 1921 titanium white and optical photographic projection. The genuine masterpiece was removed during the blackout.',
      unlockedFlag: 'knows_painting_is_fake',
    },
    {
      id: 'conn-syndicate-heist-link',
      clueA: 'clue-swiss-crate',
      clueB: 'clue-guard-bribe',
      deductionTitle: 'The Smuggling Conduit to Switzerland',
      deductionText:
        'Baroness Delacroix financed the operation, bribing Guard Rossi with Swiss francs to trigger the power outage while her waiting motorcar was prepared to spirit the genuine canvas to Zurich.',
      unlockedFlag: 'knows_delacroix_conduit',
    },
    {
      id: 'conn-bellini-fabricator',
      clueA: 'clue-varnish-receipt',
      clueB: 'clue-sketchbook',
      deductionTitle: 'The Mastermind Forger Identified',
      deductionText:
        'Maestro Carlo Bellini spent months painting the replica in his private atelier, using infrared ovens and synthetic pigments to produce the optical twin used in the blackout switch.',
      unlockedFlag: 'knows_bellini_forger',
    },
  ],

  hypotheses: {
    'hypo-trio-syndicate': {
      id: 'hypo-trio-syndicate',
      title: 'Bellini, Delacroix & Rossi: Coordinated Blackout Art Heist',
      accusedSuspectId: 'suspect-bellini',
      motiveSummary: 'Bellini sought prestige and financial salvation; Delacroix sought the ultimate private trophy for a Swiss buyer.',
      methodSummary: 'Bellini painted the replica using titanium white and projection; Rossi blew the fuses; Delacroix stored the genuine masterpiece in her car crate.',
      requiredClueIds: ['clue-titanium-pigment', 'clue-projection-grid', 'clue-swiss-crate', 'clue-guard-bribe'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
    'hypo-rossi-thief': {
      id: 'hypo-rossi-thief',
      title: 'Matteo Rossi: Amateur Night Guard Burglary',
      accusedSuspectId: 'suspect-rossi',
      motiveSummary: 'Settle velodrome racing debts by stealing the gallery’s most famous picture.',
      methodSummary: 'Blew the fuse box and ran out of the building with the painting.',
      requiredClueIds: ['clue-circuit-jumper', 'clue-guard-bribe'],
      disqualifyingClueIds: ['clue-titanium-pigment'],
      isValidTruth: false,
      flawExplanation: 'Rossi has no artistic capability to paint a Leonardo-level replica; he was merely paid to flip the circuit breaker.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-partial',
    },
    'hypo-delacroix-solo': {
      id: 'hypo-delacroix-solo',
      title: 'Baroness Delacroix: Direct Theft Without Forgery',
      accusedSuspectId: 'suspect-delacroix',
      motiveSummary: 'Smuggle the masterpiece directly out through her diplomatic transport.',
      methodSummary: 'Cut the canvas from the frame with a pocket razor during the tour.',
      requiredClueIds: ['clue-swiss-crate'],
      disqualifyingClueIds: ['clue-varnish-receipt'],
      isValidTruth: false,
      flawExplanation: 'The canvas was never cut; an exact duplicate panel was swapped into the gilded frame by Bellini prior to the blackout.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-wrong-conviction',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'The Masterpiece Restored to Florence',
      tier: 'triumph',
      badge: 'ART FORENSICS TRIUMPH',
      narrative: [
        'Before Baroness Delacroix’s Daimler could reach the Florence city gates, Carabinieri officers blocked the road on your urgent dispatch.',
        'Hidden beneath false floorboards in the luggage crate, officers recovered the genuine 15th-century "La Bella Donna" undamaged.',
        'Back at the Accademia, UV analysis and Poggi pigment invoices dismantled Maestro Bellini’s aristocratic façade. Confronted with his photographic projection notes, Bellini wept and confessed.',
        'The genuine treasure was rehung on its velvet gallery wall, while Bellini, Delacroix, and Rossi were transferred to Le Murate prison.',
      ],
      summary: 'The genuine Renaissance masterpiece was intercepted, the forgery exposed via UV chemical analysis, and all three conspirators were convicted.',
      criteriaReview: {
        theTruth: 'Bellini forged the painting, Rossi triggered the blackout, and Delacroix attempted to smuggle the genuine panel to Switzerland.',
        yourDeduction: 'You correlated UV chemical fluorescence, circuit tampering, and cross-border currency serials to solve the heist.',
        accuracyRate: 100,
        keyDiscoveries: [
          'UV Fluorescence: Synthetic Titanium White',
          'Microscopic Camera Obscura Pinpricks',
          'Custom-Lined Velvet Transport Crate',
          'Stash of 1,000 Swiss Franc Banknotes',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Exemplary art forensics deduction. You saw beyond the visual illusion of the painting into its chemical truth.',
      },
    },
    'ending-partial': {
      id: 'ending-partial',
      title: 'The Guard Takes the Fall',
      tier: 'partial',
      badge: 'CORRUPT APPREHENSION',
      narrative: [
        'Police arrested Guard Matteo Rossi after finding the jumper wire and Swiss cash in his locker.',
        'However, without seizing Delacroix’s car in time, the Baroness crossed the Swiss frontier at Chiasso at 3:00 AM with the genuine Leonardo portrait.',
        'Bellini remained as conservator, secretly mocking the police who thought the counterfeit in the frame was the restored original.',
      ],
      summary: 'The guard was arrested, but the masterpiece was smuggled to Switzerland and the forger went undetected.',
      criteriaReview: {
        theTruth: 'The genuine painting was inside Delacroix’s car, while the painting in the gallery was Bellini’s forgery.',
        yourDeduction: 'You caught the guard for the blackout but failed to test the chemical pigment of the canvas in the frame.',
        accuracyRate: 50,
        keyDiscoveries: ['Scorched Copper Fuse Jumper', 'Stash of 1,000 Swiss Franc Banknotes'],
        missedOpportunities: ['UV Fluorescence: Synthetic Titanium White', 'Custom-Lined Velvet Transport Crate'],
        reasoningCritique: 'You stopped at the electrical sabotage and failed to examine the physical artwork.',
      },
    },
    'ending-wrong-conviction': {
      id: 'ending-wrong-conviction',
      title: 'The Director’s Disgrace',
      tier: 'wrong_conviction',
      badge: 'CULTURAL SCANDAL',
      narrative: [
        'You accused Baroness Delacroix of slashing the canvas, but could present no proof of how the frame remained intact.',
        'Her high-powered international embassy lawyers forced an immediate diplomatic apology and release.',
        'By the time the museum realized the painting left in the room was a fake, the conspirators had dispersed across Europe.',
      ],
      summary: 'Diplomatic fallout derailed the investigation, allowing the syndicate to escape with the masterpiece.',
      criteriaReview: {
        theTruth: 'Bellini had manufactured an identical substitute panel; the canvas was never slashed.',
        yourDeduction: 'You misunderstood the methodology of the swap and failed to inspect Bellini’s atelier.',
        accuracyRate: 30,
        keyDiscoveries: ['Custom-Lined Velvet Transport Crate'],
        missedOpportunities: ['UV Fluorescence: Synthetic Titanium White', 'Pigment Invoice from Ditta Poggi, Florence'],
        reasoningCritique: 'Careless assumption regarding physical evidence.',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'The Silent Gallery Mystery',
      tier: 'compromised',
      badge: 'PERMANENT LOSS',
      narrative: [
        'Unable to determine whether a theft had even occurred, authorities closed the salon as a minor electrical malfunction.',
        'Years later, an auction in New York proved the framed painting was a counterfeit, but the original was lost forever to private Swiss vaults.',
      ],
      summary: 'The theft went unnoticed until it was too late; the real masterpiece was lost to history.',
      criteriaReview: {
        theTruth: 'A brazen blackout swap replaced the Leonardo with a 1921 synthetic duplicate.',
        yourDeduction: 'You failed to apply scientific UV analysis to verify the painting authenticity.',
        accuracyRate: 15,
        keyDiscoveries: [],
        missedOpportunities: ['UV Fluorescence: Synthetic Titanium White', 'Microscopic Camera Obscura Pinpricks'],
        reasoningCritique: 'Complete neglect of forensic chemical examination.',
      },
    },
  },

  scenarios: {
    'scene-gallery-blackout': {
      id: 'scene-gallery-blackout',
      title: 'The Dimmed Accademia Salon',
      location: 'Private Salon, Galleria dell’Accademia, Florence',
      narrative: [
        'Emergency paraffin sconces flicker against ancient frescoes. Fifteen minutes ago, a sharp pop echoed from the basement, plunging the salon into ninety seconds of pitch blackness.',
        'When the lights surged back on, the gold-framed "La Bella Donna" still hung on its velvet wall bracket. But something about the smile, the sheen of the varnish, looks subtly foreign in the gaslight.',
        'Standing in the salon are Maestro Carlo Bellini, the gallery’s chief conservator; Baroness Vivienne Delacroix, in her silver fox furs; and Guard Matteo Rossi, who is still nervously clutching his flashlight.',
      ],
      choices: [
        {
          id: 'choice-inspect-portrait-uv',
          text: 'Inspect the framed portrait using your ultraviolet field lamp and magnifying glass.',
          destinationId: 'scene-uv-inspection',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-examine-fusebox',
          text: 'Head to the basement to inspect the tripped electrical fuse box.',
          destinationId: 'scene-basement-fusebox',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-search-courtyard-motorcar',
          text: 'Go into the museum courtyard to examine Baroness Delacroix’s waiting Daimler.',
          destinationId: 'scene-courtyard-daimler',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-uv-inspection': {
      id: 'scene-uv-inspection',
      title: 'The Ultraviolet Revelation',
      location: 'Picture Rail, Accademia Salon',
      narrative: [
        'You click on your portable Wood’s glass UV lamp. The gallery lights are doused.',
        'Under the ultraviolet rays, the portrait’s collar and facial highlights ignite into a brilliant, chemical violet glare. This is synthetic Titanium White—a chemical compound that did not exist before 1921!',
        'Examining the outer margin under raking light reveals a row of microscopic pinpricks spaced at 5mm intervals—the unmistakable signature of an epidiascope photographic projection grid!',
      ],
      cluesDiscovered: ['clue-titanium-pigment', 'clue-projection-grid', 'clue-canvas-warp'],
      choices: [
        {
          id: 'choice-search-atelier',
          text: 'Raid Maestro Bellini’s restoration atelier across the inner courtyard.',
          destinationId: 'scene-bellini-atelier',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-uv-to-fusebox',
          text: 'Check the basement fusebox to see who arranged the ninety-second blackout.',
          destinationId: 'scene-basement-fusebox',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-basement-fusebox': {
      id: 'scene-basement-fusebox',
      title: 'The Basement Power Terminal',
      location: 'Sub-level Electrical Vault, Accademia',
      narrative: [
        'The air here smells of ozone and damp limestone. Inside the heavy iron fusebox, one porcelain fuse block is black with soot.',
        'Bridging the terminals is a calculated copper shunt wire, charred from an intentional overload. Beside the breaker box, Guard Matteo Rossi’s locker door is slightly ajar.',
        'Inside his locker, stashed deep inside an old boot, you find an envelope containing forty crisp, uncirculated 1,000 Swiss Franc banknotes.',
      ],
      cluesDiscovered: ['clue-circuit-jumper', 'clue-guard-bribe'],
      choices: [
        {
          id: 'choice-interrogate-rossi',
          text: 'Confront Guard Rossi with the Swiss cash and the copper jumper.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-fusebox-to-daimler',
          text: 'Follow the Swiss currency trail out to Baroness Delacroix’s limousine.',
          destinationId: 'scene-courtyard-daimler',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-courtyard-daimler': {
      id: 'scene-courtyard-daimler',
      title: 'The Courtyard Motorcar',
      location: 'Palazzo Courtyard, Florence',
      narrative: [
        'Rain begins to fall on the cobblestones. The Baroness’s long black Daimler sits with its engine idling quietly.',
        'Inspecting the open luggage trunk with your torch, you discover a custom-built cedar transport crate lined with green velvet. The velvet interior is pre-molded to the exact contours of "La Bella Donna".',
        'Stenciled on the brass latch are customs clearance seals for the Swiss border post at Chiasso.',
      ],
      cluesDiscovered: ['clue-swiss-crate'],
      choices: [
        {
          id: 'choice-confront-baroness',
          text: 'Confront Baroness Delacroix in the salon with her transport crate.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-daimler-to-atelier',
          text: 'Enter Bellini’s restoration studio to find where the duplicate was prepared.',
          destinationId: 'scene-bellini-atelier',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-bellini-atelier': {
      id: 'scene-bellini-atelier',
      title: 'The Conservator’s Darkroom & Atelier',
      location: 'Atelier Bellini, Palazzo Annexe',
      narrative: [
        'The atelier smells of linseed oil, clove essence, and bitter varnish. On the work table sits an infrared baking oven used to induce artificial craquelure in fresh paint.',
        'In the wastebasket, you recover an invoice from Ditta Poggi listing four tubes of titanium white paste and alkyd dryers billed directly to Bellini.',
        'Hidden beneath a canvas cover is a secret notebook detailing the exact formulas used to bake the counterfeit panel over two grueling weeks.',
      ],
      cluesDiscovered: ['clue-varnish-receipt', 'clue-sketchbook'],
      choices: [
        {
          id: 'choice-atelier-to-confrontation',
          text: 'Return to the main salon with the forensic receipts and UV proof.',
          destinationId: 'scene-final-confrontation',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-final-confrontation': {
      id: 'scene-final-confrontation',
      title: 'The Confrontation in the Salon',
      location: 'Private Salon, Galleria dell’Accademia, Florence',
      narrative: [
        'The Carabinieri have sealed the heavy iron gates of the palazzo. Maestro Bellini, Baroness Delacroix, and Guard Rossi stand together under the harsh glare of the restored salon lights.',
        'You have compiled the forensic chain: the synthetic 1921 titanium white on the framed canvas, the photographic projection pinpricks, the deliberate circuit short-circuit, and the Swiss transport crate.',
        'Open your Evidence Notebook, synthesize the true deduction, and deliver the final indictment.',
      ],
      choices: [
        {
          id: 'choice-trio-triumph',
          text: 'Indict the conspiracy: Bellini forged the duplicate, Rossi caused the blackout, and Delacroix attempted the Swiss smuggling run.',
          destinationId: 'scene-tribunal-resolution',
          consequencePreview: 'Deductive',
          conditions: [{ type: 'hasConnection', target: 'conn-modern-forgery-proof' }],
          effects: [{ type: 'triggerConsequence', target: 'ending-triumph' }],
        },
        {
          id: 'choice-rossi-partial',
          text: 'Arrest Guard Rossi alone for the blackout sabotage and taking bribes.',
          destinationId: 'scene-tribunal-resolution',
          consequencePreview: 'Direct',
          effects: [{ type: 'triggerConsequence', target: 'ending-partial' }],
        },
        {
          id: 'choice-delacroix-wrong',
          text: 'Accuse Baroness Delacroix of cutting the canvas with a razor during the tour.',
          destinationId: 'scene-tribunal-resolution',
          consequencePreview: 'Risky',
          effects: [{ type: 'triggerConsequence', target: 'ending-wrong-conviction' }],
        },
      ],
    },

    'scene-tribunal-resolution': {
      id: 'scene-tribunal-resolution',
      title: 'The Italian Tribunal Registry',
      location: 'Palazzo di Giustizia, Florence',
      isEnding: true,
      endingId: 'ending-triumph',
      narrative: [
        'The official judicial report is registered in the Italian State Art Security archives.',
      ],
      choices: [],
    },
  },
};

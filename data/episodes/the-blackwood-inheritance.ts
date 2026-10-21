import { Episode } from '@/features/episodes/types';

export const theBlackwoodInheritanceEpisode: Episode = {
  id: 'the-blackwood-inheritance',
  version: '1.0.0',
  title: 'The Blackwood Deed Conspiracy',
  subtitle: 'The Forged Wills of Alistair Blackwood & The Old Town Vault',
  synopsis:
    'In a gas-lit Edinburgh townhouse, antiquarian scholar Alistair Blackwood passed away leaving behind three conflicting testamentary wills. When chemical ink testing reveals microscopic razor erasures and an anachronistic paper watermark, a conspiracy to disinherit his daughter and bulldoze historic Royal Mile tenements comes to light.',
  estimatedMinutes: 25,
  difficulty: 'Detective',
  caseType: 'disputed_will',
  seriesId: 'edinburgh-inquiries',
  seriesName: 'Scottish Crown Legal Inquiries',
  seriesPart: 1,
  timeSetting: 'Evening, October 12, 1912',
  location: 'Blackwood Antiquarian House, Royal Mile, Edinburgh',
  initialScenarioId: 'scene-study-arrival',
  tags: ['Disputed Will', 'Forgery', 'Edinburgh', 'Forensic', 'Historical'],

  suspects: {
    'suspect-cuthbert': {
      id: 'suspect-cuthbert',
      name: 'Cuthbert Vance, W.S.',
      role: 'Estate Solicitor & Senior Writer to the Signet',
      age: 56,
      initialDemeanor: 'Pompous, legalistic, clutching an embossed leather notary portfolio.',
      motive: 'Secret syndicate kickback of £10,000 to transfer the land deed to the North British Railway Syndicate.',
      opportunity: 'Sole custody of Alistair Blackwood’s private safe combination and notary seal.',
      alibi: 'Claims he drafted the 1908 will strictly in Alistair’s presence without alteration.',
      weakness: 'Owns the specific aniline blue-black inkwell used to forge the final signature line.',
      associatedClueIds: ['clue-synthetic-ink', 'clue-solicitor-stamp', 'clue-vault-schematic'],
      interrogationSummary: 'Cuthbert threatens legal action against any detective questioning the authenticity of his notary wax seal.',
    },
    'suspect-beatrice': {
      id: 'suspect-beatrice',
      name: 'Beatrice Blackwood',
      role: 'Alistair’s Disowned Daughter & Social Reformer',
      age: 28,
      initialDemeanor: 'Grieving, resolute, clutching her father’s personal letters.',
      motive: 'Reclaim her rightful family inheritance and preserve the Old Town tenements for public housing.',
      opportunity: 'Visited her father’s study two nights before his death for an unannounced reconciliation.',
      alibi: 'At an Edinburgh civic reform meeting in Canongate Hall on the night the third will was purportedly signed.',
      weakness: 'Admitted searching through her father’s desk drawers during their final conversation.',
      associatedClueIds: ['clue-secret-codicil', 'clue-alibi-telegraph'],
      interrogationSummary: 'Beatrice insists her father gave her his true handwritten codicil promising the estate to her foundation.',
    },
    'suspect-gordon': {
      id: 'suspect-gordon',
      name: 'Gordon MacIntyre',
      role: 'Blackwood’s Spendthrift Nephew',
      age: 33,
      initialDemeanor: 'Smug, nervously checking a silver fob watch, reeking of expensive tobacco and brandy.',
      motive: 'Faces financial ruin from mounting gambling debts to Glasgow turf bookmakers.',
      opportunity: 'Lived in the townhouse guest suite and had access to the study desk after Alistair collapsed.',
      alibi: 'Claims he was playing billiards at the New Club until 2:00 AM.',
      weakness: 'Signed multiple promissory notes promising to repay Glasgow creditors within forty-eight hours of probate.',
      associatedClueIds: ['clue-macintyre-promissory', 'clue-scraped-parchment'],
      interrogationSummary: 'Gordon claims Alistair always intended to leave the land to him to continue the family name.',
    },
  },

  clues: {
    'clue-synthetic-ink': {
      id: 'clue-synthetic-ink',
      title: 'Chemical Reagent Test: Aniline Ink',
      category: 'physical',
      shortDescription: 'Laboratory chemical spot test on the contested 1908 will signature.',
      detailedAnalysis:
        'Alistair Blackwood exclusively used iron-gall ink. The signature on the contested will turned bright cyan under hypochlorite reagent, proving it was executed with modern German coal-tar aniline ink invented in 1911.',
      locationFound: 'Study Writing Desk',
      tags: ['Physical', 'Chemical', 'Forensic'],
    },
    'clue-watermark-dating': {
      id: 'clue-watermark-dating',
      title: 'Anachronistic 1912 Papermill Watermark',
      category: 'document',
      shortDescription: 'Backlit inspection of the will dated October 4, 1908.',
      detailedAnalysis:
        'Holding the vellum document against an oil lamp reveals the watermark "Balgarno Mills — MCMXII" (1912). A document supposedly drawn up four years ago was physically manufactured this year!',
      locationFound: 'Notary Document Folder',
      tags: ['Document', 'Watermark', 'Forgery'],
      contradictsSuspectId: 'suspect-cuthbert',
      contradictionNote: 'Proves Cuthbert drafted the document this year, not four years ago as sworn under oath.',
    },
    'clue-scraped-parchment': {
      id: 'clue-scraped-parchment',
      title: 'Microscopic Vellum Razor Erasure',
      category: 'physical',
      shortDescription: 'Magnifying loupe analysis of the bequest clause.',
      detailedAnalysis:
        'The name "Beatrice" was meticulously shaved off the vellum with a surgical steel penknife, and "Gordon MacIntyre" was written over the abraded fibers in matching brownish wash.',
      locationFound: 'The Contested Will Parchment',
      tags: ['Physical', 'Forensic', 'Forgery'],
    },
    'clue-solicitor-stamp': {
      id: 'clue-solicitor-stamp',
      title: 'Notary Wax Seal with Chipped Lion Flaw',
      category: 'physical',
      shortDescription: 'Red sealing wax impression on the forged deed envelope.',
      detailedAnalysis:
        'The signet lion’s left paw has a minute triangular fracture. This microscopic flaw is identical to the brass seal ring worn on Cuthbert Vance’s right index finger.',
      locationFound: 'Iron Safe Document Box',
      tags: ['Physical', 'Seal', 'Toolmark'],
    },
    'clue-secret-codicil': {
      id: 'clue-secret-codicil',
      title: 'Hollowed Jurisprudence Folio & True Codicil',
      category: 'document',
      shortDescription: 'A handwritten holographic will hidden inside Stair’s Institutions of Scotland.',
      detailedAnalysis:
        'Written entirely in Alistair Blackwood’s authenticated iron-gall script, dated three days before his death, leaving the entire Royal Mile estate to Beatrice for historical preservation.',
      locationFound: 'Bookcase Secret Shelf',
      tags: ['Document', 'Codicil', 'Truth'],
    },
    'clue-macintyre-promissory': {
      id: 'clue-macintyre-promissory',
      title: 'Gordon’s Glasgow Bookmaker Notes',
      category: 'document',
      shortDescription: 'Demand notices for £4,200 from Glasgow sporting cartels.',
      detailedAnalysis:
        'Gordon faced immediate debtor imprisonment unless Alistair’s estate was settled in his favor by the end of the week, providing intense motive for collusion with the solicitor.',
      locationFound: 'Gordon’s Guest Suite Nightstand',
      tags: ['Document', 'Financial', 'Motive'],
    },
    'clue-alibi-telegraph': {
      id: 'clue-alibi-telegraph',
      title: 'Certified Canongate Meeting Minutes & Telegram',
      category: 'document',
      shortDescription: 'Notarized public assembly record signed by Edinburgh magistrates.',
      detailedAnalysis:
        'Confirms Beatrice was addressing 300 citizens in Canongate Hall at the exact hour the solicitor claimed she was coercing her father in the study.',
      locationFound: 'Beatrice’s Portfolio',
      tags: ['Document', 'Alibi', 'Testimony'],
    },
    'clue-vault-schematic': {
      id: 'clue-vault-schematic',
      title: 'Milner Patent Safe Key Chart',
      category: 'document',
      shortDescription: 'Technical blueprint of the wall safe’s dual-tumbler mechanism.',
      detailedAnalysis:
        'Proves that opening the safe required both Alistair’s key and Cuthbert’s registered solicitor key. Gordon could never have accessed the strongbox without Cuthbert’s active participation.',
      locationFound: 'Solicitor Office Drawer',
      tags: ['Document', 'Technical', 'Access'],
    },
  },

  connections: [
    {
      id: 'conn-forged-vellum',
      clueA: 'clue-synthetic-ink',
      clueB: 'clue-watermark-dating',
      deductionTitle: 'The Anachronistic 1912 Forgery',
      deductionText:
        'The purported 1908 will is a brazen contemporary forgery. The paper was manufactured in 1912 and the signature was penned with German synthetic dye unavailable four years ago.',
      unlockedFlag: 'knows_will_is_forged',
    },
    {
      id: 'conn-cuthbert-syndicate',
      clueA: 'clue-solicitor-stamp',
      clueB: 'clue-vault-schematic',
      deductionTitle: 'The Solicitor’s Masterminded Tamper',
      deductionText:
        'Only Cuthbert possessed the dual-safe key and the chipped lion notary seal. He used his position as trusted family lawyer to swap the genuine codicil for a forged deed transferring the land to the railway syndicate.',
      unlockedFlag: 'knows_cuthbert_forger',
    },
    {
      id: 'conn-gordon-collusion',
      clueA: 'clue-scraped-parchment',
      clueB: 'clue-macintyre-promissory',
      deductionTitle: 'The Desperate Nephew’s Collusion',
      deductionText:
        'Gordon agreed to front the forged will in exchange for Cuthbert wiping out his £4,200 Glasgow gambling debt with railway syndicate payoff money.',
      unlockedFlag: 'knows_nephew_collusion',
    },
  ],

  hypotheses: {
    'hypo-cuthbert-mastermind': {
      id: 'hypo-cuthbert-mastermind',
      title: 'Cuthbert Vance: Fraudulent Will Fabrication & Syndicate Conspiracy',
      accusedSuspectId: 'suspect-cuthbert',
      motiveSummary: 'Secure a £10,000 secret payoff from the railway syndicate by disinheriting Beatrice and privatizing the Royal Mile property.',
      methodSummary: 'Manufactured a fraudulent 1908 will on 1912 Balgarno paper with synthetic aniline ink and his fractured notary seal, while hiding the true codicil.',
      requiredClueIds: ['clue-synthetic-ink', 'clue-watermark-dating', 'clue-solicitor-stamp', 'clue-secret-codicil'],
      disqualifyingClueIds: [],
      isValidTruth: true,
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
    'hypo-gordon-solo': {
      id: 'hypo-gordon-solo',
      title: 'Gordon MacIntyre: Desperate Nephew Amateur Forgery',
      accusedSuspectId: 'suspect-gordon',
      motiveSummary: 'Avoid debtor prison by fabricating a will in his own name.',
      methodSummary: 'Sneaked into the study, scraped Beatrice’s name off the vellum, and inserted his own name.',
      requiredClueIds: ['clue-scraped-parchment', 'clue-macintyre-promissory'],
      disqualifyingClueIds: ['clue-solicitor-stamp', 'clue-watermark-dating'],
      isValidTruth: false,
      flawExplanation: 'Gordon had no access to the dual-key Milner safe or the notary seal. Cuthbert Vance planned and executed the entire legal fraud.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-partial',
    },
    'hypo-beatrice-codicil-fraud': {
      id: 'hypo-beatrice-codicil-fraud',
      title: 'Beatrice Blackwood: Coerced Holographic Codicil',
      accusedSuspectId: 'suspect-beatrice',
      motiveSummary: 'Seize the family wealth under the guise of public housing philanthropy.',
      methodSummary: 'Coerced her dying father into penning the hidden codicil.',
      requiredClueIds: ['clue-secret-codicil'],
      disqualifyingClueIds: ['clue-alibi-telegraph'],
      isValidTruth: false,
      flawExplanation: 'Alistair wrote the codicil of his own free will; certified Canongate meeting minutes prove Beatrice was miles away when it was deposited.',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-wrong-conviction',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'Justice for the Royal Mile',
      tier: 'triumph',
      badge: 'FORENSIC DOCUMENT MASTERY',
      narrative: [
        'Before the High Court of Justiciary in Parliament House, you presented the illuminated Balgarno 1912 watermark and the cyan aniline chemical reagent reaction.',
        'When confronted with his chipped lion wax seal and the secret codicil recovered from Stair’s Institutions, Cuthbert Vance broke down and surrendered his solicitor license.',
        'Gordon MacIntyre was arrested for criminal conspiracy, the railway syndicate’s fraudulent claim was annulled, and Beatrice Blackwood was legally awarded the historic estate.',
      ],
      summary: 'Cuthbert Vance and Gordon MacIntyre were convicted of high forgery. Beatrice’s genuine codicil was validated, preserving the Royal Mile.',
      criteriaReview: {
        theTruth: 'Cuthbert Vance forged the 1908 will using 1912 paper to privatize the estate for a railway syndicate kickback.',
        yourDeduction: 'You scientifically disproved the forged will via paper dating and chemical reagents while recovering the true codicil.',
        accuracyRate: 100,
        keyDiscoveries: [
          'Chemical Reagent Test: Aniline Ink',
          'Anachronistic 1912 Papermill Watermark',
          'Notary Wax Seal with Chipped Lion Flaw',
          'Hollowed Jurisprudence Folio & True Codicil',
        ],
        missedOpportunities: [],
        reasoningCritique: 'Flawless forensic document analysis. You exposed both the chemical anomaly and the physical watermark anachronism.',
      },
    },
    'ending-partial': {
      id: 'ending-partial',
      title: 'The Nephew’s Scapegoat Fall',
      tier: 'partial',
      badge: 'SUPERFICIAL INDICTMENT',
      narrative: [
        'Gordon MacIntyre was arrested after you focused exclusively on his scratched parchment and gambling debts.',
        'Gordon went to prison, but Cuthbert Vance smoothly produced alternative legal affidavits, keeping control of the estate and executing the sale to the railway syndicate.',
      ],
      summary: 'The nephew was jailed, but the corrupt solicitor escaped justice and the historic tenements were bulldozed.',
      criteriaReview: {
        theTruth: 'Solicitor Cuthbert Vance was the mastermind behind the forged paper and syndicate contract.',
        yourDeduction: 'You caught the amateur co-conspirator but allowed the legal architect to profit from the scheme.',
        accuracyRate: 60,
        keyDiscoveries: ['Microscopic Vellum Razor Erasure', 'Gordon’s Glasgow Bookmaker Notes'],
        missedOpportunities: ['Anachronistic 1912 Papermill Watermark', 'Notary Wax Seal with Chipped Lion Flaw'],
        reasoningCritique: 'Incomplete investigation. You stopped at the obvious debtor rather than auditing the solicitor.',
      },
    },
    'ending-wrong-conviction': {
      id: 'ending-wrong-conviction',
      title: 'The Philanthropist Disinherited',
      tier: 'wrong_conviction',
      badge: 'MISCARRIAGE OF SCOTTISH LAW',
      narrative: [
        'You accused Beatrice Blackwood of fabricating the hidden codicil to steal her father’s wealth.',
        'Discredited and cast out, Beatrice withdrew into poverty while Cuthbert Vance and Gordon MacIntyre celebrated their successful privatization of the Royal Mile.',
      ],
      summary: 'The rightful heir was falsely accused, and the corrupt conspirators gained total control of the estate.',
      criteriaReview: {
        theTruth: 'Beatrice’s codicil was 100% genuine and Alistair’s true final wish.',
        yourDeduction: 'You dismissed the genuine iron-gall document and fell victim to Cuthbert’s manufactured slander.',
        accuracyRate: 30,
        keyDiscoveries: ['Hollowed Jurisprudence Folio & True Codicil'],
        missedOpportunities: ['Certified Canongate Meeting Minutes & Telegram', 'Anachronistic 1912 Papermill Watermark'],
        reasoningCritique: 'Grave deduction failure. You overlooked Beatrice’s verified public alibi.',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'The Tangled Legal Labyrinth',
      tier: 'compromised',
      badge: 'CHANCERY DEADLOCK',
      narrative: [
        'Unable to substantiate the chemical or watermark discrepancies, the estate entered perpetual litigation in the Court of Session.',
        'Decades of legal fees consumed the estate value, and the true history of Alistair Blackwood was lost to bureaucratic dust.',
      ],
      summary: 'No decisive proof was established; the estate was consumed by legal fees in prolonged court deadlock.',
      criteriaReview: {
        theTruth: 'Cuthbert Vance perpetrated a blatant chemical and watermark forgery.',
        yourDeduction: 'You failed to apply forensic chemical tests to the contested signature.',
        accuracyRate: 15,
        keyDiscoveries: [],
        missedOpportunities: ['Chemical Reagent Test: Aniline Ink', 'Anachronistic 1912 Papermill Watermark'],
        reasoningCritique: 'Complete failure to examine the physical document properties.',
      },
    },
  },

  scenarios: {
    'scene-study-arrival': {
      id: 'scene-study-arrival',
      title: 'The Antiquarian’s Study',
      location: 'Alistair Blackwood’s Library, Edinburgh',
      narrative: [
        'Rain patters against leaded glass overlooking the Royal Mile. The mahogany study smells of dried leather, beeswax, and pipe tobacco.',
        'On the green baize table lie three distinct legal wills, each sealed with red wax, each declaring a completely different heir to the historic Blackwood estate.',
        'Standing by the hearth is Cuthbert Vance, Esq., clutching his solicitor portfolio. Gordon MacIntyre sips whiskey nervously by the window, while Beatrice Blackwood sits quietly by her father’s desk.',
      ],
      choices: [
        {
          id: 'choice-examine-desk-wills',
          text: 'Examine the contested wills with your forensic field magnifying loupe and chemical kit.',
          destinationId: 'scene-desk-examination',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-interrogate-solicitor',
          text: 'Question Solicitor Cuthbert Vance about his notary seal and the 1908 document.',
          destinationId: 'scene-question-cuthbert',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-inspect-bookshelves',
          text: 'Search Alistair’s legal folios on the oak library shelves.',
          destinationId: 'scene-library-shelves',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-desk-examination': {
      id: 'scene-desk-examination',
      title: 'Forensic Document Analysis',
      location: 'Study Writing Desk, Edinburgh',
      narrative: [
        'You apply a tiny drop of chemical reagent to the signature on the 1908 will. It immediately blooms into an intense cyan blue—the hallmark of synthetic aniline ink, invented in Germany in 1911!',
        'Holding the vellum up against the gas lamp, your eyes catch the watermark embedded inside the pulp: "Balgarno Mills — MCMXII" (1912).',
        'Examining the third bequest with your loupe reveals that the vellum surface was scraped raw with a razor penknife where Beatrice’s name once stood.',
      ],
      cluesDiscovered: ['clue-synthetic-ink', 'clue-watermark-dating', 'clue-scraped-parchment'],
      choices: [
        {
          id: 'choice-confront-cuthbert-desk',
          text: 'Confront Cuthbert with the 1912 watermark on his supposed 1908 will.',
          destinationId: 'scene-question-cuthbert',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-search-gordon-quarters',
          text: 'Search Gordon MacIntyre’s guest quarters for financial motives.',
          destinationId: 'scene-gordon-quarters',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-question-cuthbert': {
      id: 'scene-question-cuthbert',
      title: 'Interrogating the Solicitor',
      location: 'Study Hearth, Edinburgh',
      narrative: [
        'Cuthbert Vance adjusts his gold pince-nez, resting his hand firmly on the table. Glinting on his right index finger is a heavy brass notary signet ring.',
        'You inspect the red wax seals on the wills: under magnification, the lion’s left paw shows a distinct triangular chip identical to Cuthbert’s signet ring.',
        '"I am an officer of the Scottish court," Cuthbert asserts coldly. "Alistair signed that document in my chambers. Any suggestion of irregularity is actionable slander."',
      ],
      dialogue: [
        { speaker: 'Cuthbert Vance', text: 'Mr. Blackwood wanted the estate preserved in masculine lineage. He knew Gordon had the business acumen.', mood: 'defiant' },
      ],
      cluesDiscovered: ['clue-solicitor-stamp'],
      choices: [
        {
          id: 'choice-inspect-milner-safe',
          text: 'Inspect the wall safe and ask Cuthbert to produce the registered lock schematics.',
          destinationId: 'scene-milner-safe',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-interview-beatrice',
          text: 'Interview Beatrice Blackwood regarding her father’s true intentions.',
          destinationId: 'scene-interview-beatrice',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-library-shelves': {
      id: 'scene-library-shelves',
      title: 'The Hidden Stair Jurisprudence',
      location: 'North Bookcase, Library',
      narrative: [
        'Alistair Blackwood was an antiquarian scholar who loved concealed compartments. Among his leather-bound volumes of Scottish jurisprudence, a massive folio of Stair’s Institutions sits slightly proud of the shelf.',
        'Sliding the book out reveals that the central pages were hollowed out. Inside rests a sealed manuscript penned in Alistair’s unmistakable iron-gall hand, dated three days before his death.',
        'It is a holographic codicil leaving the entire estate to Beatrice Blackwood for the establishment of a civic housing trust.',
      ],
      cluesDiscovered: ['clue-secret-codicil'],
      choices: [
        {
          id: 'choice-compare-codicil-to-wills',
          text: 'Take the true codicil to the desk to compare against the forged wills.',
          destinationId: 'scene-desk-examination',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-from-shelves-to-beatrice',
          text: 'Speak with Beatrice regarding her father’s secret codicil.',
          destinationId: 'scene-interview-beatrice',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-gordon-quarters': {
      id: 'scene-gordon-quarters',
      title: 'Gordon’s Guest Suite',
      location: 'Townhouse Guest Suite, Edinburgh',
      narrative: [
        'The room is strewn with racing forms and empty brandy flasks. In the bedside drawer, you discover a stack of urgent telegraph demands from Glasgow bookmakers.',
        'Gordon owes £4,200 payable within 48 hours. Scrawled across the back of an envelope is a note from Cuthbert Vance: "Hold your tongue during probate; the syndicate fund clears your slate."',
      ],
      cluesDiscovered: ['clue-macintyre-promissory'],
      choices: [
        {
          id: 'choice-confront-gordon',
          text: 'Confront Gordon with his debt notes and the syndicate payoff.',
          destinationId: 'scene-court-confrontation',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interview-beatrice': {
      id: 'scene-interview-beatrice',
      title: 'Beatrice’s Testimony',
      location: 'Window Bay, Library',
      narrative: [
        'Beatrice produces her personal correspondence and a certified telegraph from Canongate Hall.',
        '"Father told me on Sunday that Cuthbert was pressuring him to sell to the railway syndicates," Beatrice explains quietly. "He promised me he would conceal the true deed where only a fellow scholar would look."',
        'Her Canongate minutes, certified by two Edinburgh bailies, confirm she was giving a lecture at the exact moment Cuthbert claimed she was threatening Alistair.',
      ],
      dialogue: [
        { speaker: 'Beatrice Blackwood', text: 'Father loved the Old Town stone. He would never let Cuthbert tear it down for railway tracks.', mood: 'calm' },
      ],
      cluesDiscovered: ['clue-alibi-telegraph'],
      choices: [
        {
          id: 'choice-beatrice-to-safe',
          text: 'Inspect the study Milner safe where Cuthbert claims the 1908 will was stored.',
          destinationId: 'scene-milner-safe',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-milner-safe': {
      id: 'scene-milner-safe',
      title: 'The Dual-Tumbler Safe',
      location: 'Study Wall Safe, Edinburgh',
      narrative: [
        'Recessed into the stone wall behind an oil portrait is a heavy Milner safe. Inside Cuthbert’s desk portfolio is the registered technical schematic.',
        'The lock required two distinct keys turned simultaneously: Alistair’s personal key and the solicitor’s registered key. Only Cuthbert had access to both keys after Alistair’s collapse.',
      ],
      cluesDiscovered: ['clue-vault-schematic'],
      choices: [
        {
          id: 'choice-safe-to-confrontation',
          text: 'Assemble all parties in the library for the final verdict.',
          destinationId: 'scene-court-confrontation',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-court-confrontation': {
      id: 'scene-court-confrontation',
      title: 'The Verdict in the Library',
      location: 'Alistair Blackwood’s Library, Edinburgh',
      narrative: [
        'The clock on the mantel strikes ten. Cuthbert Vance, Gordon MacIntyre, and Beatrice Blackwood stand before you around the mahogany table.',
        'The physical evidence is complete: the Balgarno 1912 watermark on a supposed 1908 document, the German aniline ink test, the chipped lion signet flaw, and the secret holographic codicil.',
        'You open your Evidence Notebook to make the formal accusation.',
      ],
      choices: [
        {
          id: 'choice-reach-cuthbert-triumph',
          text: 'Accuse Solicitor Cuthbert Vance of masterminding the forged 1908 will using 1912 paper.',
          destinationId: 'scene-case-closed',
          consequencePreview: 'Deductive',
          conditions: [{ type: 'hasConnection', target: 'conn-forged-vellum' }],
          effects: [{ type: 'triggerConsequence', target: 'ending-triumph' }],
        },
        {
          id: 'choice-reach-gordon-partial',
          text: 'Accuse Gordon MacIntyre alone based on his gambling debts and the razor scraping.',
          destinationId: 'scene-case-closed',
          consequencePreview: 'Direct',
          effects: [{ type: 'triggerConsequence', target: 'ending-partial' }],
        },
        {
          id: 'choice-reach-beatrice-wrong',
          text: 'Accuse Beatrice Blackwood of fabricating the secret codicil in the hollowed folio.',
          destinationId: 'scene-case-closed',
          consequencePreview: 'Risky',
          effects: [{ type: 'triggerConsequence', target: 'ending-wrong-conviction' }],
        },
      ],
    },

    'scene-case-closed': {
      id: 'scene-case-closed',
      title: 'The High Court Ruling',
      location: 'Parliament House, Edinburgh',
      isEnding: true,
      endingId: 'ending-triumph',
      narrative: [
        'The official judicial report is registered in the Scottish Crown archives.',
      ],
      choices: [],
    },
  },
};

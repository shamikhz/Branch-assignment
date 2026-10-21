export type SupportedLanguage = 'en' | 'hi';

export interface TranslationDictionary {
  // Navigation & Header
  appTitle: string;
  appSubtitle: string;
  library: string;
  caseEditor: string;
  settings: string;
  returnToMenu: string;
  evidenceNotebook: string;
  deductions: string;
  languageToggle: string;

  // Catalog / Library
  activeInquiry: string;
  estMinutes: string;
  offlineReady: string;
  onlineFirst: string;
  beginInvestigation: string;
  resumeInvestigation: string;
  restartCase: string;
  compareRuns: string;
  caseOverview: string;
  suspectsRoster: string;
  saveOffline: string;
  removeOffline: string;
  downloading: string;
  caseDetails: string;
  difficulty: string;
  timeSetting: string;
  location: string;
  totalClues: string;
  totalEndings: string;
  archivedRunsTitle: string;
  noCompletedRuns: string;
  completedAt: string;
  accuracyRate: string;

  // Investigation View
  scenarioNotFound: string;
  returnToLibrary: string;
  discoveredCluesBadge: string;
  actionableLeads: string;
  lockedReason: string;
  dialogueSpeaker: string;
  examineScene: string;
  caseFileNumber: string;

  // Notebook
  notebookTitle: string;
  tabClues: string;
  tabConnections: string;
  tabSuspects: string;
  tabHypothesis: string;
  filterAll: string;
  filterPhysical: string;
  filterDocument: string;
  filterTestimony: string;
  filterDigital: string;
  filterAlibi: string;
  forensicAnalysis: string;
  locationFound: string;
  connectPrompt: string;
  connectButton: string;
  slotA: string;
  slotB: string;
  selectAccused: string;
  supportingEvidence: string;
  submitHypothesis: string;
  noCluesYet: string;
  noConnectionsYet: string;
  connectedBadge: string;

  // Ending
  caseClosed: string;
  truthSummary: string;
  deductionSummary: string;
  keyDiscoveries: string;
  closeDossier: string;

  // Settings
  settingsTitle: string;
  soundLabel: string;
  soundDesc: string;
  languageLabel: string;
  languageDesc: string;
  fontScaleLabel: string;
  compact: string;
  normal: string;
  relaxed: string;
  themeLabel: string;
  themeSepia: string;
  themeNoir: string;
  storageLabel: string;
  clearCache: string;
  resetProgress: string;
  close: string;

  // Footer
  footerMotto: string;
  footerOnlineStatus: string;
  footerColAbout: string;
  footerColHowItWorks: string;
  footerColCategories: string;
  footerColLegal: string;
  footerAboutUs: string;
  footerHowStoriesWork: string;
  footerFAQ: string;
  footerContact: string;
  footerHowToPlay: string;
  footerCluesEvidence: string;
  footerConnectingClues: string;
  footerSuspectInterviews: string;
  footerStoryEndings: string;
  footerAllCategories: string;
  footerMysteryCat: string;
  footerAdventureCat: string;
  footerFantasyCat: string;
  footerTermsOfService: string;
  footerPrivacyPolicy: string;
  footerDataStorage: string;
  footerOnlineRequirements: string;
  footerBackToTop: string;
  footerAllRights: string;
  footerStorageNotice: string;

  // Legacy compatibility keys
  footerColCases?: string;
  footerColManual?: string;
  footerColTools?: string;
  footerColBureau?: string;
  footerActiveCase?: string;
  footerCaseDossier?: string;
  footerSuspects?: string;
  footerArchives?: string;
  footerCompare?: string;
  footerForensicAnalysis?: string;
  footerDeductionBoard?: string;
  footerEndingTiers?: string;
  footerInterrogationRules?: string;
  footerCaseEditor?: string;
  footerSchemaValidator?: string;
  footerScenarioGraph?: string;
  footerEngineSpecs?: string;
  footerAbout?: string;
  footerPrivacy?: string;
  footerStoragePolicy?: string;
  footerOnlineIntegrity?: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    appTitle: 'STORY VAULT',
    appSubtitle: 'Interactive Stories, Detective Mysteries & Life Choices',
    library: 'Stories & Cases',
    caseEditor: 'Story Editor',
    settings: 'Settings',
    returnToMenu: 'Back to Menu',
    evidenceNotebook: 'Clues & Notebook',
    deductions: 'Connect Clues',
    languageToggle: 'Language / भाषा',

    activeInquiry: 'CURRENT STORY • CHAPTER 1',
    estMinutes: '{n} MINS',
    offlineReady: 'Works without Internet (~180 KB)',
    onlineFirst: 'Needs Internet',
    beginInvestigation: 'Start Story',
    resumeInvestigation: 'Continue Story',
    restartCase: 'Start Over',
    compareRuns: 'Compare Choices',
    caseOverview: 'Story Details & Clues',
    suspectsRoster: 'Characters in this Story',
    saveOffline: 'Save for Offline (Read without Internet)',
    removeOffline: 'Remove Saved Story',
    downloading: 'Saving story...',
    caseDetails: 'Story Information',
    difficulty: 'Difficulty Level',
    timeSetting: 'Time / Period',
    location: 'Place / Location',
    totalClues: 'Clues to Find',
    totalEndings: 'Different Endings',
    archivedRunsTitle: 'Your Past Stories & Endings',
    noCompletedRuns: 'You have not completed this story yet. Finish it once to see your choices and endings here!',
    completedAt: 'Finished on',
    accuracyRate: 'Accuracy Score',

    scenarioNotFound: 'Sorry! This scene could not be found.',
    returnToLibrary: 'Back to Stories',
    discoveredCluesBadge: 'Found',
    actionableLeads: 'What do you want to do next?',
    lockedReason: 'LOCKED (Needs Clues)',
    dialogueSpeaker: 'Conversation',
    examineScene: 'Examine the scene closely',
    caseFileNumber: 'Story Case',

    notebookTitle: 'Clues, Evidence & Suspect Notes',
    tabClues: 'Clues & Proof',
    tabConnections: 'Connect Clues',
    tabSuspects: 'Characters Involved',
    tabHypothesis: 'Solve Mystery & Accuse',
    filterAll: 'All Clues',
    filterPhysical: 'Physical Items',
    filterDocument: 'Letters & Papers',
    filterTestimony: 'What People Said',
    filterDigital: 'Messages & Phone',
    filterAlibi: 'Alibi & Whereabouts',
    forensicAnalysis: 'Detailed Clue Notes',
    locationFound: 'Where it was found',
    connectPrompt: 'Select any two clues from your notebook to find the hidden connection:',
    connectButton: 'Check Connection Between Clues',
    slotA: 'First Clue',
    slotB: 'Second Clue',
    selectAccused: 'Who do you think is responsible? (Main Suspect)',
    supportingEvidence: 'Choose your proof (select up to 5 clues):',
    submitHypothesis: 'Submit Your Final Accusation',
    noCluesYet: 'No clues collected yet. Look around the room and talk to people to collect proof!',
    noConnectionsYet: 'No connections made yet. Try putting two clues together to see what they reveal!',
    connectedBadge: 'NEW CLUE FOUND!',

    caseClosed: 'Case Closed: Final Result & Review',
    truthSummary: 'The Complete Truth',
    deductionSummary: 'How You Solved It',
    keyDiscoveries: 'Key Clues & Proof Found',
    closeDossier: 'Close Case & Back to Menu',

    settingsTitle: 'Game Settings & Audio',
    soundLabel: 'Sound Effects & Atmosphere',
    soundDesc: 'Typewriter clicks, stamps, and page turns',
    languageLabel: 'Language / भाषा',
    languageDesc: 'Switch stories and menus between English and Hindi',
    fontScaleLabel: 'Text Size',
    compact: 'Small',
    normal: 'Medium',
    relaxed: 'Large',
    themeLabel: 'Color Theme',
    themeSepia: 'Warm Paper (Sepia)',
    themeNoir: 'Dark Mode (Noir)',
    storageLabel: 'Saved Progress & Offline Data',
    clearCache: 'Clear Temporary Cache',
    resetProgress: 'Reset All Game Progress',
    close: 'Close',

    // Footer
    footerMotto: 'Interactive stories where every decision matters. Search for clues, question people, and discover the real truth.',
    footerOnlineStatus: 'Connected & Ready',
    footerColAbout: 'About Story Vault',
    footerColHowItWorks: 'How It Works',
    footerColCategories: 'Explore Categories',
    footerColLegal: 'Terms & Privacy',
    footerAboutUs: 'About the Platform',
    footerHowStoriesWork: 'How Interactive Stories Work',
    footerFAQ: 'Frequently Asked Questions (FAQ)',
    footerContact: 'Contact & Feedback',
    footerHowToPlay: 'How to Play Guide',
    footerCluesEvidence: 'Finding Clues & Proof',
    footerConnectingClues: 'Connecting Evidence Together',
    footerSuspectInterviews: 'Questioning Suspects',
    footerStoryEndings: 'Story Outcomes & Endings',
    footerAllCategories: 'All 9 Story Categories',
    footerMysteryCat: 'Mystery & Investigation',
    footerAdventureCat: 'Career & Life Skills',
    footerFantasyCat: 'Relationships & Social Life',
    footerTermsOfService: 'Terms of Service',
    footerPrivacyPolicy: 'Privacy Policy',
    footerDataStorage: 'Saved Games & Browser Data',
    footerOnlineRequirements: 'Internet Connection Info',
    footerBackToTop: 'Back to Top',
    footerAllRights: 'All stories and scenarios are original interactive works.',
    footerStorageNotice: 'Your progress and notes are safely stored right in your browser.',

    // Legacy compatibility keys
    footerColCases: 'Case Files & Archives',
    footerColManual: 'How to Play Guide',
    footerColTools: 'Story Tools & Engine',
    footerColBureau: 'Platform & Privacy',
    footerActiveCase: 'Episode 01: The Midnight Cipher',
    footerCaseDossier: 'Case Details & Clues',
    footerSuspects: 'Suspects & Interviews',
    footerArchives: 'Completed Case History',
    footerCompare: 'Compare Story Paths Side-by-Side',
    footerForensicAnalysis: 'Finding Clues & Proof',
    footerDeductionBoard: 'Connecting Evidence Together',
    footerEndingTiers: 'Story Outcomes & Endings',
    footerInterrogationRules: 'Questioning Suspects',
    footerCaseEditor: 'Story Authoring Sandbox',
    footerSchemaValidator: 'Schema Validator',
    footerScenarioGraph: 'Branching Decision Graph',
    footerEngineSpecs: 'Game Engine Details',
    footerAbout: 'About the Platform',
    footerPrivacy: '100% Client-Side Privacy',
    footerStoragePolicy: 'Saved Games & Browser Data',
    footerOnlineIntegrity: 'Internet Connection Info',
  },
  hi: {
    appTitle: 'जासूस केस अभिलेखागार',
    appSubtitle: 'क्रिप्टोग्राफिक एवं फोरेंसिक जांच ब्यूरो',
    library: 'केस सूची',
    caseEditor: 'केस संपादक',
    settings: 'सेटिंग्स व डेटा',
    returnToMenu: 'मुख्य फ़ाइल पर लौटें',
    evidenceNotebook: 'सबूत डायरी',
    deductions: 'निष्कर्ष',
    languageToggle: 'भाषा / Language',

    activeInquiry: 'एपिसोड 01 • सक्रिय जांच',
    estMinutes: 'लगभग {n} मिनट',
    offlineReady: 'ऑफ़लाइन तैयार (~180 KB)',
    onlineFirst: 'ऑनलाइन-फ़र्स्ट',
    beginInvestigation: 'तफ्तीश शुरू करें',
    resumeInvestigation: 'जांच जारी रखें',
    restartCase: 'केस पुनः आरंभ करें',
    compareRuns: 'जांच तुलना',
    caseOverview: 'केस विवरण व साक्ष्य सारांश',
    suspectsRoster: 'संदिग्ध व्यक्तियों की सूची',
    saveOffline: 'ऑफ़लाइन के लिए सहेजें',
    removeOffline: 'ऑफ़लाइन पैक हटाएं',
    downloading: 'फ़ाइल डाउनलोड हो रही है...',
    caseDetails: 'केस विवरण एवं विनिर्देश',
    difficulty: 'कठिनाई स्तर',
    timeSetting: 'घटना समय',
    location: 'घटना स्थल',
    totalClues: 'कुल सुराग',
    totalEndings: 'संभावित अंत',
    archivedRunsTitle: 'बंद किए गए पिछले केस रिकॉर्ड',
    noCompletedRuns: 'अभी तक कोई बंद केस दर्ज नहीं है। अपनी पहली जांच पूरी करके नया बेंचमार्क स्थापित करें।',
    completedAt: 'समापन तिथि',
    accuracyRate: 'सटीकता दर',

    scenarioNotFound: 'घटना स्थल का विवरण अनुपलब्ध या विकृत है',
    returnToLibrary: 'लाइब्रेरी पर लौटें',
    discoveredCluesBadge: 'प्राप्त सुराग',
    actionableLeads: 'जांच की दिशाएं और उपलब्ध विकल्प',
    lockedReason: 'अवरुद्ध',
    dialogueSpeaker: 'सीधा बयान',
    examineScene: 'घटना स्थल की बारीकी से जांच',
    caseFileNumber: 'केस फ़ाइल',

    notebookTitle: 'फील्ड साक्ष्य डायरी एवं संदिग्ध फ़ाइल',
    tabClues: 'सुराग व फोरेंसिक',
    tabConnections: 'निष्कर्ष जोड़ें',
    tabSuspects: 'संदिग्ध व्यक्ति',
    tabHypothesis: 'अंतिम परिकल्पना व आरोप',
    filterAll: 'सभी सबूत',
    filterPhysical: 'भौतिक साक्ष्य',
    filterDocument: 'दस्तावेज',
    filterTestimony: 'गवाह बयान',
    filterDigital: 'डिजिटल / सिस्टम',
    filterAlibi: 'अलिबाई / उपस्थिति',
    forensicAnalysis: 'फोरेंसिक लैब विश्लेषण',
    locationFound: 'प्राप्ति स्थल',
    connectPrompt: 'तार्किक निष्कर्ष निकालने के लिए अपने संग्रह से किन्हीं दो सुरागों का चयन करें:',
    connectButton: 'निष्कर्ष जोड़ें',
    slotA: 'प्राथमिक सुराग',
    slotB: 'समर्थक सुराग',
    selectAccused: 'मुख्य आरोपी संदिग्ध का चयन करें:',
    supportingEvidence: 'समर्थक सबूत चुनें (अधिकतम 5 साक्ष्य):',
    submitHypothesis: 'औपचारिक आरोप दर्ज करें',
    noCluesYet: 'अभी तक कोई सुराग एकत्र नहीं हुआ है। अपराध स्थल की खोजबीन करें और गवाहों से पूछताछ करें।',
    noConnectionsYet: 'अभी तक कोई निष्कर्ष संश्लेषित नहीं किया गया है। सुरागों में विरोधाभास खोजने के लिए उनकी तुलना करें।',
    connectedBadge: 'निष्कर्ष खुला',

    caseClosed: 'जांच परिणाम एवं आधिकारिक समीक्षा',
    truthSummary: 'वास्तविक सच्चाई',
    deductionSummary: 'आपकी जासूसी परिकल्पना',
    keyDiscoveries: 'प्रमुख खोजें एवं निर्णायक सुराग',
    closeDossier: 'केस फ़ाइल बंद करें और लौटें',

    settingsTitle: 'जांच उपकरण एवं केस संग्रह सेटिंग्स',
    soundLabel: 'ऑडियो माहौल व साउंड इफेक्ट्स',
    soundDesc: 'टाइपराइटर की खटखट, लाख की मुहर और पन्नों की फड़फड़ाहट',
    languageLabel: 'केस और इंटरफ़ेस की भाषा',
    languageDesc: 'केस की पूरी कहानी, सुराग, संदिग्ध और इंटरफ़ेस को हिंदी या अंग्रेज़ी में बदलें',
    fontScaleLabel: 'फ़ॉन्ट आकार',
    compact: 'संक्षिप्त (Compact)',
    normal: 'मानक (Standard)',
    relaxed: 'बड़ा (Relaxed)',
    themeLabel: 'विज़ुअल थीम',
    themeSepia: 'पुरातन पत्र (सेपिया)',
    themeNoir: 'मिडनाइट नोयर (चारकोल)',
    storageLabel: 'लोकल स्टोरेज व ऑफ़लाइन केस डेटा',
    clearCache: 'अस्थायी कैश साफ़ करें',
    resetProgress: 'जांच प्रगति रीसेट करें',
    close: 'बंद करें',

    // Footer
    footerMotto: 'रोमांचक इंटरैक्टिव कहानियां और जांच। सुराग खोजें, पूछताछ करें और सच्चाई तक पहुंचें।',
    footerOnlineStatus: 'ऑनलाइन कनेक्टेड व तैयार',
    footerColAbout: 'परिचय (About)',
    footerColHowItWorks: 'यह कैसे काम करता है (How It Works)',
    footerColCategories: 'श्रेणियां (Categories)',
    footerColLegal: 'नियम व गोपनीयता (Terms & Privacy)',
    footerAboutUs: 'प्लेटफॉर्म के बारे में',
    footerHowStoriesWork: 'इंटरैक्टिव कहानियां कैसे काम करती हैं',
    footerFAQ: 'अक्सर पूछे जाने वाले सवाल (FAQ)',
    footerContact: 'संपर्क व सुझाव',
    footerHowToPlay: 'खेलने का तरीका',
    footerCluesEvidence: 'सुराग व साक्ष्य खोजना',
    footerConnectingClues: 'कड़ियों को जोड़ना व निष्कर्ष',
    footerSuspectInterviews: 'संदिग्धों से पूछताछ',
    footerStoryEndings: 'कहानी के अंत व स्कोर',
    footerAllCategories: 'सभी १० श्रेणियां देखें',
    footerMysteryCat: 'रहस्य व जांच (Mystery)',
    footerAdventureCat: 'साहस व अन्वेषण',
    footerFantasyCat: 'काल्पनिक व पौराणिक दुनिया',
    footerTermsOfService: 'सेवा की शर्तें (Terms of Service)',
    footerPrivacyPolicy: 'गोपनीयता नीति (Privacy Policy)',
    footerDataStorage: 'लोकल डेटा व सेव प्रोग्रेस',
    footerOnlineRequirements: 'ऑनलाइन कनेक्शन जानकारी',
    footerBackToTop: 'शीर्ष पर लौटें',
    footerAllRights: 'सभी कहानियां और खेल परिदृश्य मूल इंटरैक्टिव रचनाएं हैं।',
    footerStorageNotice: 'आपकी प्रगति, सुराग और नोट्स सीधे आपके ब्राउज़र में सुरक्षित रहते हैं।',

    // Legacy compatibility keys
    footerColCases: 'केस फ़ाइलें व अभिलेखागार',
    footerColManual: 'जासूस फील्ड गाइड',
    footerColTools: 'लेखन एवं तकनीकी तंत्र',
    footerColBureau: 'ब्यूरो एवं गोपनीयता',
    footerActiveCase: 'एपिसोड 01: द मिडनाइट सिफर',
    footerCaseDossier: 'केस सारांश व साक्ष्य सूची',
    footerSuspects: 'संदिग्ध पूछताछ सूची',
    footerArchives: 'पूर्ण केस अभिलेख',
    footerCompare: 'जांच तुलना व शाखाएं',
    footerForensicAnalysis: 'सुराग व साक्ष्य खोजना',
    footerDeductionBoard: 'कड़ियों को जोड़ना व निष्कर्ष',
    footerEndingTiers: 'कहानी के अंत व स्कोर',
    footerInterrogationRules: 'संदिग्धों से पूछताछ',
    footerCaseEditor: 'केस निर्माण सैंडबॉक्स',
    footerSchemaValidator: 'स्कीमा वैलिडेटर',
    footerScenarioGraph: 'निर्णय शाखा ग्राफ',
    footerEngineSpecs: 'गेम इंजन विनिर्देश',
    footerAbout: 'प्लेटफॉर्म के बारे में',
    footerPrivacy: '100% क्लाइंट-साइड गोपनीयता',
    footerStoragePolicy: 'लोकल डेटा व सेव प्रोग्रेस',
    footerOnlineIntegrity: 'ऑनलाइन कनेक्शन जानकारी',
  },
};

export function getTranslation(lang: SupportedLanguage = 'en'): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}

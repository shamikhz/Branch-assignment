export interface CategoryItem {
  id: string;
  categoryNo: number; // 1 to 9
  phaseNumbers?: number[]; // [1, 2] for mystery
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  badge: {
    en: string;
    hi: string;
  };
  status: 'active' | 'coming_soon';
  caseCount: number;
  iconName: string;
  themeColor: string;
  accentBg: string;
  tags: string[];
  cardHeaderImage?: string;
  cardHeaderBadge?: {
    en: string;
    hi: string;
  };
  buttonText?: {
    en: string;
    hi: string;
  };
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'mystery-investigation',
    categoryNo: 1,
    phaseNumbers: [1, 2],
    title: {
      en: 'Mystery & Investigation',
      hi: 'रहस्य एवं जासूसी जांच',
    },
    subtitle: {
      en: 'Detective Cases & Crime Scene Mysteries • 6 Playable Cases',
      hi: 'फोरेंसिक सुराग एवं बंद कमरा पहेलियां • 6 सक्रिय केस',
    },
    description: {
      en: 'Become a detective! Search crime scenes for proof, question suspects to catch their lies, connect clues in your notebook, and solve 6 exciting mystery cases.',
      hi: 'फ्लैगशिप जांच प्लेटफॉर्म। फोरेंसिक साक्ष्य जुटाएं, संदिग्धों से पूछताछ करें, निष्कर्ष बोर्ड पर कड़ियां जोड़ें और 6 नोयर केसों में रहस्यों को उजागर करें।',
    },
    badge: {
      en: '6 Playable Cases',
      hi: '6 सक्रिय केस',
    },
    status: 'active',
    caseCount: 6,
    iconName: 'Compass',
    themeColor: 'var(--brass-accent, #d4a359)',
    accentBg: 'rgba(212, 163, 89, 0.1)',
    tags: ['Locked Room', 'Forensics', 'Noir', 'Deductions', 'Espionage'],
    cardHeaderImage: '/images/backgrounds/the-midnight-cipher.webp',
    cardHeaderBadge: {
      en: '★ MYSTERY & DETECTIVE STORIES',
      hi: '★ फ्लैगशिप रहस्य संग्रह',
    },
    buttonText: {
      en: 'Play Mystery Cases (6 Stories)',
      hi: 'जांच केंद्र में प्रवेश करें (६ केस)',
    },
  },
  {
    id: 'career-skills-personal-development',
    categoryNo: 2,
    phaseNumbers: [3],
    title: {
      en: 'Career, Skills & Personal Development',
      hi: 'करियर, कौशल एवं व्यक्तिगत विकास',
    },
    subtitle: {
      en: 'Real-Life Career Choices, Work Situations & Skills • 12 Interactive Stories',
      hi: 'इंटरैक्टिव सिमुलेशन एवं जीवन कौशल प्लेटफॉर्म • 12 सिमुलेशन',
    },
    description: {
      en: 'Learn to handle real workplace situations with confidence. Explore career paths, climb skill trees, practice salary negotiations, and mentor teammates through everyday challenges.',
      hi: '3 प्रमुख स्तंभों में व्यावहारिक निर्णय: करियर अन्वेषण, तकनीकी व व्यावसायिक कौशल, और व्यक्तिगत विकास। करियर पथों का अन्वेषण करें, कौशल वृक्ष पर आगे बढ़ें, बातचीत में महारत हासिल करें और मेंटरशिप का अभ्यास करें।',
    },
    badge: {
      en: '12 Interactive Stories',
      hi: '12 सक्रिय सिमुलेशन',
    },
    status: 'active',
    caseCount: 12,
    iconName: 'Award',
    themeColor: '#38bdf8',
    accentBg: 'rgba(56, 189, 248, 0.1)',
    tags: ['Career Paths', 'Skill Trees', 'Negotiation', 'Mentorship'],
    cardHeaderImage: '/images/career/career-hub-hero.webp',
    cardHeaderBadge: {
      en: '★ CAREER & SKILLS STORIES',
      hi: '★ करियर एवं कौशल सिमुलेशन',
    },
    buttonText: {
      en: 'Open Career Hub (12 Stories)',
      hi: 'करियर एवं कौशल हब में प्रवेश करें (१२ सिमुलेशन)',
    },
  },
  {
    id: 'relationships-social-life',
    categoryNo: 3,
    phaseNumbers: [4],
    title: {
      en: 'Relationships & Social Life',
      hi: 'रिश्ते एवं सामाजिक जीवन',
    },
    subtitle: {
      en: 'Friendship, Dating, Family & Everyday Social Choices • 12 Interactive Stories',
      hi: 'पारस्परिक रिश्ते एवं सामाजिक निर्णय',
    },
    description: {
      en: 'Handle everyday relationships with empathy and wisdom. Resolve family misunderstandings, make smart dating choices, support close friends, and set healthy personal boundaries.',
      hi: 'पारस्परिक संबंधों की जटिलताओं, पारिवारिक विरासत, दोस्ती की परीक्षाओं और रिश्तों को आकार देने वाले भावनात्मक निर्णयों का अन्वेषण करें।',
    },
    badge: {
      en: '12 Interactive Stories',
      hi: '12 सक्रिय परिदृश्य',
    },
    status: 'active',
    caseCount: 12,
    iconName: 'User',
    themeColor: '#ec4899',
    accentBg: 'rgba(236, 72, 153, 0.12)',
    tags: ['Empathy', 'Communication', 'Boundaries', 'Family', 'Social Circles', 'Trust'],
    cardHeaderImage: '/images/relationships/relationships-hub-hero.webp',
    cardHeaderBadge: {
      en: '★ RELATIONSHIPS & SOCIAL LIFE',
      hi: '★ रिश्ते एवं सामाजिक जीवन',
    },
    buttonText: {
      en: 'Open Relationships Hub (12 Stories)',
      hi: 'रिश्ते एवं सामाजिक जीवन में प्रवेश करें (१२ परिदृश्य)',
    },
  },
  {
    id: 'money-business-entrepreneurship',
    categoryNo: 4,
    phaseNumbers: [5],
    title: {
      en: 'Money, Business & Entrepreneurship',
      hi: 'धन, व्यापार एवं उद्यमिता',
    },
    subtitle: {
      en: 'Startups, Smart Investing & Money Management',
      hi: 'वेंचर कैपिटल, बाजार रणनीतियां एवं संपत्ति निर्माण',
    },
    description: {
      en: 'Learn how to start a business, pitch to investors, manage savings, invest smartly, and make sound financial decisions that build long-term wealth.',
      hi: 'वित्तीय बाजारों, स्टार्टअप वेंचर फंडिंग, संपत्ति सुरक्षा और तेजी से बढ़ते व्यापारिक परिदृश्यों में रणनीतिक नेतृत्व का अनुभव करें।',
    },
    badge: {
      en: 'Coming Soon',
      hi: 'जल्द आ रहा है',
    },
    status: 'coming_soon',
    caseCount: 0,
    iconName: 'Percent',
    themeColor: '#10b981',
    accentBg: 'rgba(168, 185, 129, 0.08)',
    tags: ['Startups', 'Venture Capital', 'Markets', 'Fiscal Strategy'],
  },
  {
    id: 'leadership-management',
    categoryNo: 5,
    phaseNumbers: [6],
    title: {
      en: 'Leadership & Management',
      hi: 'नेतृत्व एवं प्रबंधन',
    },
    subtitle: {
      en: 'Team Leadership, Crisis Management & Smart Decisions',
      hi: 'रणनीतिक नेतृत्व एवं टीम प्रबंधन',
    },
    description: {
      en: 'Take charge as a team leader. Learn how to resolve disputes between coworkers, motivate your team, stay calm during crises, and achieve shared goals.',
      hi: 'संस्थागत परिवर्तनों का नेतृत्व करें, गंभीर आंतरिक मतभेदों को सुलझाएं, टीमों को प्रेरित करें और संकट के दौर में दिशा दें।',
    },
    badge: {
      en: 'Coming Soon',
      hi: 'जल्द आ रहा है',
    },
    status: 'coming_soon',
    caseCount: 0,
    iconName: 'Shield',
    themeColor: '#f59e0b',
    accentBg: 'rgba(245, 158, 11, 0.08)',
    tags: ['Crisis Leadership', 'Team Culture', 'Executive Decisions', 'Governance'],
  },
  {
    id: 'adventure-exploration',
    categoryNo: 6,
    phaseNumbers: [7],
    title: {
      en: 'Adventure & Exploration',
      hi: 'रोमांच एवं खोज यात्राएं',
    },
    subtitle: {
      en: 'Exciting Expeditions, Ancient Ruins & Hidden Secrets',
      hi: 'अज्ञात सीमाएं एवं प्राचीन अभियान',
    },
    description: {
      en: 'Go on thrilling journeys into uncharted places! Explore deep jungles, discover forgotten ruins, decode secret maps, and survive exciting expeditions.',
      hi: 'अज्ञात जंगलों, बंजर रेगिस्तानों और प्राचीन गुफाओं में साहसिक अभियानों का नेतृत्व करें और भूली-बिसरी सीमाओं को मैप करें।',
    },
    badge: {
      en: 'Coming Soon',
      hi: 'जल्द आ रहा है',
    },
    status: 'coming_soon',
    caseCount: 0,
    iconName: 'MapPin',
    themeColor: '#06b6d4',
    accentBg: 'rgba(6, 182, 212, 0.08)',
    tags: ['Expeditions', 'Cartography', 'Uncharted Terrains', 'Discovery'],
  },
  {
    id: 'survival-crisis-scenarios',
    categoryNo: 7,
    phaseNumbers: [8],
    title: {
      en: 'Survival & Crisis Scenarios',
      hi: 'उत्तरजीविता एवं संकट परिदृश्य',
    },
    subtitle: {
      en: 'Natural Disasters, Emergency Calls & Staying Safe',
      hi: 'आपातकालीन प्रतिक्रिया एवं कठिन चुनौतियां',
    },
    description: {
      en: 'Face sudden emergency situations. Survive natural disasters, manage limited food and water, think fast on your feet, and keep your people safe.',
      hi: 'प्राकृतिक आपदाओं, एकांत जंगलों और अभूतपूर्व आपात स्थितियों में अस्तित्व बचाने और जीवन-रक्षक फैसले लेने की चुनौती का सामना करें।',
    },
    badge: {
      en: 'Coming Soon',
      hi: 'जल्द आ रहा है',
    },
    status: 'coming_soon',
    caseCount: 0,
    iconName: 'AlertTriangle',
    themeColor: '#ef4444',
    accentBg: 'rgba(239, 68, 68, 0.08)',
    tags: ['Disaster Response', 'Resource Scarcity', 'Survival', 'High-Stakes'],
  },
  {
    id: 'fantasy-mythical-worlds',
    categoryNo: 8,
    phaseNumbers: [9],
    title: {
      en: 'Fantasy & Mythical Worlds',
      hi: 'काल्पनिक एवं पौराणिक दुनिया',
    },
    subtitle: {
      en: 'Magical Kingdoms, Ancient Myths & Heroic Quests',
      hi: 'जादुई राज्य, प्राचीन अवशेष एवं महागाथाएं',
    },
    description: {
      en: 'Enter magical lands filled with ancient legends. Solve riddles of wise sages, discover secret spells, speak with mythical creatures, and save kingdoms.',
      hi: 'जादू और पौराणिक गाथाओं के साम्राज्यों में प्रवेश करें। प्राचीन भविष्यवाणियों को सुलझाएं और जादुई दुनिया की नियति तय करें।',
    },
    badge: {
      en: 'Coming Soon',
      hi: 'जल्द आ रहा है',
    },
    status: 'coming_soon',
    caseCount: 0,
    iconName: 'Sparkles',
    themeColor: '#a855f7',
    accentBg: 'rgba(168, 85, 247, 0.08)',
    tags: ['Arcane', 'Mythology', 'Kingdoms', 'Prophecy'],
  },
  {
    id: 'advanced-simulations-connected-universes',
    categoryNo: 9,
    phaseNumbers: [10],
    title: {
      en: 'Advanced Simulations & Connected Worlds',
      hi: 'उन्नत सिमुलेशन एवं परस्पर जुड़ी दुनिया',
    },
    subtitle: {
      en: 'Sci-Fi Realities, Ripple Effects & Branching Timelines',
      hi: 'मल्टी-एजेंट सिस्टम एवं क्वांटम लूप',
    },
    description: {
      en: 'Experience futuristic sci-fi worlds where every decision you make triggers chain reactions and shapes what happens in the future.',
      hi: 'परस्पर जुड़े ब्रह्मांडों में कदम रखें जहां आपका हर फैसला समानांतर टाइमलाइनों और मल्टी-एजेंट सिमुलेशन में दूरगामी प्रभाव पैदा करता है।',
    },
    badge: {
      en: 'Coming Soon',
      hi: 'जल्द आ रहा है',
    },
    status: 'coming_soon',
    caseCount: 0,
    iconName: 'RotateCcw',
    themeColor: '#14b8a6',
    accentBg: 'rgba(20, 184, 166, 0.08)',
    tags: ['Connected Universes', 'Quantum Branches', 'Domino Effects', 'Emergent AI'],
  },
];

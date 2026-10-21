import { Episode, EpisodeMetadata } from '@/features/episodes/types';
import { SupportedLanguage } from './translations';

/**
 * Hindi Translation Overlay for Episode: The Midnight Cipher of Saint-Claire
 */
export const THE_MIDNIGHT_CIPHER_HI: Partial<Episode> = {
  title: 'सेंट-क्लेयर का मध्यरात्रि सिफर',
  subtitle: 'एक बंद कमरा, एक असंभव चोरी, और एक यांत्रिक रहस्य।',
  synopsis:
    'सेंट-क्लेयर मनोर में वार्षिक शरद संक्रांति समारोह के दौरान, प्रख्यात घड़ीसाज़ जूलियन वेंस अपने बंद अध्ययन कक्ष में अचेत पाए जाते हैं। 17वीं सदी का सेलेस्टियल ऑटोमेटन—एक यांत्रिक चमत्कार जिसमें लुप्त खगोलीय सिफर छिपे थे—अपने कांच के चबूतरे से गायब हो चुका है। बारिश से भीगे इस मनोर में चार संदिग्धों के विरोधाभासी रहस्य हैं। केवल सुरागों की तार्किक जांच और गहरी पड़ताल ही सुबह की एक्सप्रेस ट्रेन छूटने से पहले सच्चाई सामने ला सकती है।',
  timeSetting: 'शरद संक्रांति, रात 11:42 से भोर तक',
  location: 'सेंट-क्लेयर मनोर, हाउट-सावोई',
  tags: ['बंद कमरा', 'यांत्रिक चोरी', 'तार्किक निष्कर्ष', 'क्लासिक नोयर'],

  suspects: {
    'suspect-sterling': {
      id: 'suspect-sterling',
      name: 'डॉ. आर्थर स्टर्लिंग',
      role: 'भ्रमणकारी होरोलॉजिकल विद्वान व एंटिक्वारियन सोसाइटी के फेलो',
      age: 52,
      initialDemeanor: 'अहंकारी, बौद्धिक रूप से हावी होने वाला और पूरी तरह शांत।',
      motive: 'अपने गिरते अकादमिक करियर को बचाने के लिए सेलेस्टियल ऑटोमेटन के सिफर की रचना का झूठा श्रेय लेने को बेताब।',
      opportunity: 'सेंट्रल वेंटिलेशन और ध्वनिक नलों से सटी मनोर लाइब्रेरी में निजी प्रवेश की अनुमति थी।',
      alibi: 'दावा करता है कि रात 10:30 बजे से दूसरी मंजिल की गैलरी में दुर्लभ पांडुलिपियों की सूची बना रहा था।',
      weakness: 'गियर अनुपात और ताला-निर्माण में अनिवार्य पूर्णतावाद की सनक।',
      associatedClueIds: ['clue-reversed-gear', 'clue-sterling-journal', 'clue-graphite-cloth', 'clue-trellis-footprint'],
      interrogationSummary:
        'स्टर्लिंग आधुनिक तालों को बच्चों का खिलौना बताता है और ऑटोमेटन की बात धार्मिक श्रद्धा से करता है। उसकी उंगलियों में घबराहट की कंपकंपी है और वह बार-बार अपनी दाहिनी आस्तीन छुपाता है।',
    },
    'suspect-elena': {
      id: 'suspect-elena',
      name: 'एलेना वेंस',
      role: 'पोती, मनोर अभिलेखागार प्रमुख व कला संरक्षक',
      age: 28,
      initialDemeanor: 'उत्तेजित, रक्षात्मक और अत्यधिक थकी हुई।',
      motive: 'जिनेवा बहाली संघ के भारी कर्ज में दबी, जो उसका स्वतंत्र स्टूडियो जब्त करने की धमकी दे रहे थे।',
      opportunity: 'अध्ययन कक्ष के बाहरी कमरे की वैध चाबियां थीं और उसने समारोह की वाइन व्यवस्था संभाली थी।',
      alibi: 'दावा करती है कि वह पूरे समारोह के दौरान उत्तरी कंजर्वेटरी छत पर खानपान कर्मचारियों की देखरेख कर रही थी।',
      weakness: 'जब उसके चाचा जूलियन की विरासत या वित्तीय निष्पक्षता पर सवाल उठाया जाए तो भावुक हो जाना।',
      associatedClueIds: ['clue-forged-bill', 'clue-wine-glass', 'clue-elena-alibi'],
      interrogationSummary:
        'एलेना शाम को परिवार की संपत्ति बेचने को लेकर जूलियन से बहस करने की बात स्वीकार करती है, लेकिन उन्हें नुकसान पहुंचाने से साफ इंकार करती है।',
    },
    'suspect-mireille': {
      id: 'suspect-mireille',
      name: 'मिरेइल फॉन्टेन',
      role: 'मुख्य संरक्षक व मनोर सुरक्षा प्रशासक',
      age: 44,
      initialDemeanor: 'सटीक, गंभीर और नियमों के प्रति अत्यधिक संवेदनशील।',
      motive: 'ल्योन में संग्रहालय निदेशक पद के लिए जूलियन द्वारा समर्थन देने से इंकार करने पर गुप्त रूप से नाराज।',
      opportunity: 'मनोर के बिजली ग्रिड और चुंबकीय तालों के प्रशासनिक ओवरराइड कोड थे।',
      alibi: 'दावा करती है कि जब अध्ययन कक्ष का अलार्म बजा, तब वह बेसमेंट सबस्टेशन में वोल्टेज सर्ज ठीक कर रही थी।',
      weakness: 'लॉगबुक के प्रति अत्यधिक कठोर; जब टाइमस्टैम्प मेल नहीं खाते तो घबराहट साफ दिखती है।',
      associatedClueIds: ['clue-breaker-log', 'clue-mireille-keycard'],
      interrogationSummary:
        'मिरेइल सभी गैलरी दरवाजों के सटीक समय बताती है, लेकिन ब्रेकर ट्रिप के बीच 4 मिनट के अंतर पर हकलाने लगती है।',
    },
    'suspect-lukas': {
      id: 'suspect-lukas',
      name: 'लुकास वार्ड',
      role: 'मनोर चालक व गोपनीय कूरियर',
      age: 36,
      initialDemeanor: 'सतर्क, शांत और थका हुआ।',
      motive: 'सीमा पार निजी संग्राहकों के लिए गुप्त रात की कूरियर सेवाएं चलाने की अफवाहें।',
      opportunity: 'उसका वाहन गेट क्लीयरेंस के साथ दक्षिण सर्विस लेन में चालू खड़ा था।',
      alibi: 'दावा करता है कि वह गैरेज में सर्दियों का सामान लाद रहा था और जूलियन के आदेशों की प्रतीक्षा कर रहा था।',
      weakness: 'जूलियन के स्वास्थ्य के प्रति गहरी वफादारी; लालच के आरोपों पर तुरंत भड़क जाना।',
      associatedClueIds: ['clue-lukas-manifest'],
      interrogationSummary:
        'लुकास कानूनी वारंट के बिना अपने लॉकबॉक्स की सामग्री खोलने से मना करता है, और दावा करता है कि इसमें परिवार के गोपनीय मेडिकल रिकॉर्ड हैं।',
    },
  },

  clues: {
    'clue-speaking-tube': {
      id: 'clue-speaking-tube',
      title: 'खरोंचा हुआ पीतल का स्पीकिंग ट्यूब',
      category: 'physical',
      shortDescription: 'जूलियन की मेज के पीछे लगे विक्टोरियन पीतल के स्पीकिंग ट्यूब पर ताज़ा खरोंचें हैं और हल्की मीठी रासायनिक गंध आ रही है।',
      detailedAnalysis:
        'पीतल के ट्रम्पेट की फोरेंसिक जांच में क्लिनिकल-ग्रेड डाइएथिल ईथर के अंश मिले हैं। आंतरिक डैम्पर को पतले पियानो तार से खुला बांधा गया था, जिससे नीचे बेसमेंट से गैस सीधे अध्ययन कक्ष में भर सके।',
      locationFound: 'जूलियन वेंस का बंद अध्ययन कक्ष',
      tags: ['तरीका', 'भौतिक', 'फोरेंसिक'],
      relatedClueIds: ['clue-acoustic-terminal'],
    },
    'clue-wine-glass': {
      id: 'clue-wine-glass',
      title: 'छलका हुआ संक्रांति वाइन ग्लास',
      category: 'physical',
      shortDescription: 'जूलियन की चमड़े की कुर्सी के पास एक टूटा हुआ कांच का प्याला पड़ा है, वाइन ईरानी कालीन में सोख चुकी है।',
      detailedAnalysis:
        'रासायनिक विश्लेषण से पता चलता है कि वाइन में वेलेरियन रूट टिंचर मिलाया गया था—जो घंटों में हल्की उनींदापन ला सकता है, लेकिन अचानक बेहोशी या सांस रुकने के लिए पूरी तरह असमर्थ है।',
      locationFound: 'जूलियन वेंस के अध्ययन कक्ष का कालीन',
      tags: ['विष', 'भौतिक', 'छल'],
      contradictsSuspectId: 'suspect-elena',
      contradictionNote: 'यद्यपि एलेना ने जूलियन को सुलाने की कोशिश की थी, इस मामूली टिंचर से अचानक बेहोशी नहीं हो सकती थी।',
      relatedClueIds: ['clue-forged-bill'],
    },
    'clue-reversed-gear': {
      id: 'clue-reversed-gear',
      title: 'उल्टे दांतों वाला पीतल का सिलेंडर',
      category: 'physical',
      shortDescription: 'अध्ययन कक्ष की चिमनी के डैम्पर में छिपा हुआ ताज़ा गढ़ा गया पीतल का लॉकिंग सिलेंडर।',
      detailedAnalysis:
        'यह टुकड़ा वेंस के पेटेंट किए गए वॉल्ट कैम को निष्क्रिय करने के लिए विपरीत दिशा में काटे गए दांतों से सुसज्जित है। इसे लगाने से अध्ययन कक्ष का ताला बाहर से बिना चाबी के खोला जा सकता था।',
      locationFound: 'अध्ययन कक्ष की चिमनी का डैम्पर',
      tags: ['यांत्रिकी', 'हथियार', 'बायपास'],
      relatedClueIds: ['clue-sterling-journal'],
    },
    'clue-sterling-journal': {
      id: 'clue-sterling-journal',
      title: 'स्टर्लिंग की क्रिप्टोग्राफिक डायरी',
      category: 'document',
      shortDescription: 'लाइब्रेरी के शेल्फ में छिपी एक चमड़े की डायरी, जिसमें अध्ययन कक्ष के ब्लूप्रिंट और ईथर गैस की गणनाएं हैं।',
      detailedAnalysis:
        'पृष्ठ 84 पर हाथ से लिखा नोट: "ध्वनिक ट्यूब से 150ml ईथर की वाष्प 20 मिनट की बेहोशी के लिए पर्याप्त है। बदला गया सिलेंडर लैच को रोके रखेगा। हस्ताक्षर: ए.एस."',
      locationFound: 'लाइब्रेरी का गुप्त कोना',
      tags: ['दस्तावेज', 'साजिश', 'योजना'],
      relatedClueIds: ['clue-reversed-gear', 'clue-speaking-tube'],
    },
    'clue-acoustic-terminal': {
      id: 'clue-acoustic-terminal',
      title: 'बेसमेंट स्पीकिंग ट्यूब टर्मिनल',
      category: 'physical',
      shortDescription: 'घड़ीसाज़ के बेसमेंट वर्कशॉप में स्पीकिंग ट्यूब के मुंह पर लगा रबर बल्ब और ईथर की खाली शीशी।',
      detailedAnalysis:
        'यह उपकरण पुष्टि करता है कि अध्ययन कक्ष में गैस ऊपर से नहीं, बल्कि इसी वर्कशॉप से गुप्त रूप से पंप की गई थी।',
      locationFound: 'घड़ीसाज़ का बेसमेंट वर्कशॉप',
      tags: ['भौतिक', 'अपराध स्थल', 'गैस'],
      relatedClueIds: ['clue-speaking-tube'],
    },
    'clue-forged-bill': {
      id: 'clue-forged-bill',
      title: 'ऑटोमेटन का पूर्व-तैयार बिक्री अनुबंध',
      category: 'document',
      shortDescription: 'एलेना के पोर्टफोलियो में 450,000 स्विस फ्रैंक में ऑटोमेटन बेचने का अनधिकृत ड्राफ्ट समझौता।',
      detailedAnalysis:
        'यह एलेना के वित्तीय संकट को साबित करता है, लेकिन इसमें किसी हिंसक हमले का प्रमाण नहीं है।',
      locationFound: 'कंजर्वेटरी ड्राइंग रूम',
      tags: ['दस्तावेज', 'उद्देश्य', 'वित्तीय'],
      contradictsSuspectId: 'suspect-elena',
      contradictionNote: 'एलेना सिर्फ कानूनी तौर पर कर्ज चुकाना चाहती थी, उसने हिंसा की योजना नहीं बनाई थी।',
    },
    'clue-trellis-footprint': {
      id: 'clue-trellis-footprint',
      title: 'उत्तरी ट्रेलिस पर जूतों के निशान',
      category: 'physical',
      shortDescription: 'अध्ययन कक्ष की बालकनी की ओर चढ़ने वाले लोहे के ट्रेलिस के नीचे 43 नंबर के जूतों के गहरे निशान।',
      detailedAnalysis:
        'जूते की छाप लंदन के लक्ज़री ब्रोग्स से मेल खाती है, जिसमें डायमंड-पैटर्न रबर हील है। ट्रेलिस पर ताज़ा खरोंचों से साफ है कि कोई इस पर चढ़ा था।',
      locationFound: 'उत्तरी कंजर्वेटरी छत',
      tags: ['पदचिह्न', 'भौतिक', 'रास्ता'],
      relatedClueIds: ['clue-graphite-cloth'],
    },
    'clue-graphite-cloth': {
      id: 'clue-graphite-cloth',
      title: 'ग्रेफाइट और कांस्य धूल लगा रूमाल',
      category: 'physical',
      shortDescription: 'डॉ. स्टर्लिंग की जेब में मिला रूमाल, जिस पर उच्च-शुद्धता वाले ताले के ग्रेफाइट लुब्रिकेंट के निशान हैं।',
      detailedAnalysis:
        'ग्रेफाइट का रासायनिक संघटन अध्ययन कक्ष के उल्टे सिलेंडर पर पाए गए लुब्रिकेंट से 100% मेल खाता है।',
      locationFound: 'डॉ. स्टर्लिंग का व्यक्तिगत रूमाल',
      tags: ['फोरेंसिक', 'भौतिक', 'संबंध'],
      contradictsSuspectId: 'suspect-sterling',
      contradictionNote: 'स्टर्लिंग का दावा है कि वह केवल किताबें पढ़ रहा था, लेकिन यह लुब्रिकेंट ताले तोड़ने का सीधा सबूत है।',
    },
    'clue-elena-alibi': {
      id: 'clue-elena-alibi',
      title: 'कैटरिंग सेवा का सत्यापित लॉग',
      category: 'alibi',
      shortDescription: 'शेफ हेनरी द्वारा हस्ताक्षरित सेवा लॉग, जो साबित करता है कि एलेना पूरे समय छत पर मौजूद थी।',
      detailedAnalysis:
        'एलेना रात 11:40 से 11:46 के बीच कैटरिंग बार के सामने थी, जिससे अध्ययन कक्ष में उसकी शारीरिक अनुपस्थिति सिद्ध होती है।',
      locationFound: 'उत्तरी बरामदा कैटरिंग स्टेशन',
      tags: ['अलिबाई', 'दस्तावेज', 'निर्दोषिता'],
      contradictsSuspectId: 'suspect-elena',
      contradictionNote: 'एलेना उस समय छत पर थी जब अंदर चोरी और हमला हुआ।',
    },
    'clue-breaker-log': {
      id: 'clue-breaker-log',
      title: 'सर्किट ब्रेकर टाइमस्टैम्प ऑडिट',
      category: 'digital',
      shortDescription: 'सुरक्षा कंसोल लॉग, जिसमें रात 11:38 से 11:42 के बीच 4 मिनट का ब्लैकआउट दर्ज है।',
      detailedAnalysis:
        'लूप 4 को बेसमेंट कंसोल से मैन्युअल रूप से बंद किया गया था, ताकि अध्ययन कक्ष के कैमरे और चुंबकीय लॉक निष्क्रिय हो सकें।',
      locationFound: 'सुरक्षा सबस्टेशन',
      tags: ['डिजिटल', 'सुरक्षा', 'ब्लैकआउट'],
      relatedClueIds: ['clue-mireille-keycard'],
    },
    'clue-lukas-manifest': {
      id: 'clue-lukas-manifest',
      title: 'लुकास का प्रमाणित मेडिकल कूरियर मैनिफेस्ट',
      category: 'document',
      shortDescription: 'जूलियन की रेफ्रिजरेटेड हृदय दवा के लिए सीमा शुल्क-मुहरबंद कूरियर मैनिफेस्ट।',
      detailedAnalysis:
        'यह साबित करता है कि लुकास के ट्रंक में मौजूद ब्रीफकेस जूलियन की जीवन रक्षक पेप्टाइड दवाइयों के लिए था, न कि चुराई गई कलाकृतियों के लिए।',
      locationFound: 'गैरेज कूरियर वाहन',
      tags: ['दस्तावेज', 'निर्दोषिता', 'अलिबाई'],
      contradictsSuspectId: 'suspect-lukas',
      contradictionNote: 'लुकास की गुप्त गतिविधि केवल दवा लाने के लिए थी, चोरी के लिए नहीं।',
    },
    'clue-mireille-keycard': {
      id: 'clue-mireille-keycard',
      title: 'मिरेइल का सुरक्षा कीकार्ड ऑडिट',
      category: 'digital',
      shortDescription: 'मनोर के दरवाजों का इलेक्ट्रॉनिक बैज ऑडिट रिकॉर्ड।',
      detailedAnalysis:
        'मिरेइल रात 11:35 बजे मुख्य गैलरी में थी। उसका वर्कस्टेशन बिना लॉक के खुला छूटा था, जहां से कोई भी ब्रेकर दबा सकता था।',
      locationFound: 'सुरक्षा कंसोल सर्वर',
      tags: ['डिजिटल', 'ऑडिट', 'सुरक्षा'],
      relatedClueIds: ['clue-breaker-log'],
    },
  },

  connections: [
    {
      id: 'conn-remote-incapacitation',
      clueA: 'clue-speaking-tube',
      clueB: 'clue-acoustic-terminal',
      deductionTitle: 'रिमोट एयरोसोल हमला',
      deductionText:
        'जूलियन वेंस को खाने या पीने में जहर नहीं दिया गया था। अपराधी ने पुराने पीतल के स्पीकिंग ट्यूब को एक एयरटाइट डक्ट की तरह इस्तेमाल किया और बेसमेंट वर्कशॉप से अध्ययन कक्ष में ईथर गैस पंप कर दी।',
      unlockedFlag: 'knows_remote_gas_method',
    },
    {
      id: 'conn-sterling-burglary',
      clueA: 'clue-reversed-gear',
      clueB: 'clue-sterling-journal',
      deductionTitle: 'पूर्व-नियोजित यांत्रिक बायपास',
      deductionText:
        'डॉ. स्टर्लिंग ने वेंस के पेटेंट का गहरा अध्ययन करके उल्टे दांतों वाला सिलेंडर तैयार किया था। उसने इस सिलेंडर से वॉल्ट के लैच को रोके रखा, जिससे जूलियन को बेहोश करने के बाद वह आसानी से अंदर घुस सका।',
      unlockedFlag: 'knows_sterling_guilty_burglary',
    },
    {
      id: 'conn-elena-exoneration',
      clueA: 'clue-wine-glass',
      clueB: 'clue-elena-alibi',
      deductionTitle: 'एलेना की निर्दोषिता',
      deductionText:
        'एलेना वेंस ने वाइन में हल्का हर्बल सिडेटिव जरूर मिलाया था, लेकिन जूलियन ने उसे पिया ही नहीं था। कैटरिंग लॉग से प्रमाणित है कि मुख्य चोरी के समय एलेना पूरे समय छत पर मौजूद थी।',
      unlockedFlag: 'elena_exonerated_of_theft',
    },
    {
      id: 'conn-trellis-sterling',
      clueA: 'clue-trellis-footprint',
      clueB: 'clue-graphite-cloth',
      deductionTitle: 'स्टर्लिंग का घुसपैठ मार्ग',
      deductionText:
        'उत्तरी ट्रेलिस पर मिले कीचड़ के निशान डॉ. स्टर्लिंग के 43 नंबर के लंदन जूतों से मेल खाते हैं। बेसमेंट से ईथर पंप करने के बाद, स्टर्लिंग सीधे ट्रेलिस पर चढ़कर अध्ययन कक्ष की बालकनी में दाखिल हुआ था।',
      unlockedFlag: 'knows_sterling_physical_route',
    },
  ],

  hypotheses: {
    'hypo-sterling-true': {
      id: 'hypo-sterling-true',
      title: 'डॉ. आर्थर स्टर्लिंग: पूर्व-नियोजित ध्वनिक चोरी',
      accusedSuspectId: 'suspect-sterling',
      motiveSummary: 'ऑटोमेटन के खगोलीय गियरों के रहस्य को सुलझाकर अपने मरते हुए अकादमिक करियर को पुनर्जीवित करने के लिए चोरी की।',
      methodSummary: 'स्पीकिंग ट्यूब के माध्यम से ईथर पंप करके जूलियन को बेहोश किया, फिर ट्रेलिस पर चढ़कर उल्टे दांतों वाले सिलेंडर से कमरा खोला।',
      requiredClueIds: ['clue-speaking-tube', 'clue-reversed-gear', 'clue-acoustic-terminal', 'clue-sterling-journal'],
      disqualifyingClueIds: ['clue-forged-bill'],
      isValidTruth: true,
      flawExplanation: 'आपके निष्कर्ष में बेसमेंट गैस आपूर्ति या उल्टे सिलेंडर को स्टर्लिंग से जोड़ने वाले भौतिक साक्ष्य की कमी है।',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
    'hypo-elena-false': {
      id: 'hypo-elena-false',
      title: 'एलेना वेंस: कर्ज चुकाने के लिए चोरी',
      accusedSuspectId: 'suspect-elena',
      motiveSummary: 'जिनेवा के कर्ज चुकाने के लिए जूलियन की वाइन में जहर देकर खानदानी खजाना चुराने की कोशिश की।',
      methodSummary: 'संक्रांति वाइन में जहर मिलाया, अध्ययन कक्ष बंद किया और नकली बिक्री समझौता तैयार किया।',
      requiredClueIds: ['clue-forged-bill', 'clue-wine-glass'],
      disqualifyingClueIds: ['clue-elena-alibi', 'clue-speaking-tube'],
      isValidTruth: false,
      flawExplanation: 'ब्लैकआउट के समय एलेना के पास छत पर रहने का पुख्ता अलिबाई है, और वाइन की जांच से साबित हुआ कि उससे बेहोशी नहीं हो सकती थी।',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-scapegoat-elena',
    },
    'hypo-mireille-false': {
      id: 'hypo-mireille-false',
      title: 'मिरेइल फॉन्टेन: आंतरिक सुरक्षा तोड़फोड़',
      accusedSuspectId: 'suspect-mireille',
      motiveSummary: 'जूलियन द्वारा सिफारिश न किए जाने के प्रतिशोध में मनोर सुरक्षा प्रणाली को पंगु बना दिया।',
      methodSummary: 'कैमरे बंद करने के लिए ब्रेकर ट्रिप किया और चुंबकीय दरवाजों का ओवरराइड खोला।',
      requiredClueIds: ['clue-breaker-log', 'clue-mireille-keycard'],
      disqualifyingClueIds: ['clue-sterling-journal'],
      isValidTruth: false,
      flawExplanation: 'मिरेइल का टर्मिनल खुला छूटा था, जिससे किसी अन्य ने ब्रेकर दबाया। उसके पास ताला बायपास करने का कोई औजार नहीं था।',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-security-scapegoat',
    },
    'hypo-lukas-false': {
      id: 'hypo-lukas-false',
      title: 'लुकास वार्ड: काला बाजार कूरियर तस्करी',
      accusedSuspectId: 'suspect-lukas',
      motiveSummary: 'विदेशी खरीदार के लिए ऑटोमेटन को अपने कूरियर केस में छिपाकर मनोर से बाहर निकाला।',
      methodSummary: 'पश्चिमी गेट से ऑटोमेटन ले जाने के लिए अपनी वाहन अनुमति का दुरुपयोग किया।',
      requiredClueIds: ['clue-lukas-manifest'],
      disqualifyingClueIds: ['clue-acoustic-terminal'],
      isValidTruth: false,
      flawExplanation: 'लुकास के ब्रीफकेस में जूलियन वेंस के लिए प्रमाणित हृदय पेप्टाइड दवाइयां थीं, चुराई गई कलाकृतियां नहीं।',
      successEndingId: 'ending-triumph',
      failureEndingId: 'ending-compromised',
    },
  },

  endings: {
    'ending-triumph': {
      id: 'ending-triumph',
      title: 'मास्टर घड़ीसाज़ की विजय',
      tier: 'triumph',
      badge: 'त्रुटिहीन तार्किक निष्कर्ष',
      narrative: [
        'भोर में स्थानीय पुलिस के पहुंचने से पहले, आपने सेंट-क्लेयर मनोर की भव्य लाइब्रेरी में चारों संदिग्धों को एकत्र किया।',
        'अत्यंत व्यवस्थित सटीकता के साथ, आपने सबूतों को महोगनी की मेज पर सजाया: स्पीकिंग ट्यूब में ईथर के अंश, उत्तरी ट्रेलिस पर जूतों के निशान, उल्टे दांतों वाला सिलेंडर और डॉ. स्टर्लिंग की हस्तलिखित डायरी।',
        'स्टर्लिंग का बौद्धिक अहंकार शांत आतंक में बदल गया। जब आपने अध्ययन कक्ष की चिमनी में मिले सिलेंडर से उसकी डायरी के गियर डिजाइनों का मिलान दिखाया, तो वह कुर्सी पर ढह गया और उसने अपना जुर्म कबूल कर लिया।',
        'सेलेस्टियल ऑटोमेटन को स्टर्लिंग के मखमली यात्रा ट्रंक से सुरक्षित बरामद कर लिया गया। जूलियन वेंस को अस्पताल में होश आ गया। न्याय पूरी बौद्धिक भव्यता के साथ संपन्न हुआ।',
      ],
      summary: 'डॉ. आर्थर स्टर्लिंग को अकाट्य फोरेंसिक व यांत्रिक सबूतों के साथ गिरफ्तार किया गया। ऑटोमेटन सुरक्षित मिला और जूलियन वेंस की जान बच गई।',
      criteriaReview: {
        theTruth: 'डॉ. आर्थर स्टर्लिंग ने ध्वनिक ट्यूब और विशेष ताला बायपास का उपयोग करके पूरी चोरी रची थी।',
        yourDeduction: 'आपने बिना किसी पूर्वाग्रह के उद्देश्य, रिमोट डिलीवरी विधि, भौतिक मार्ग और पूर्व-नियोजन को सिद्ध किया।',
        accuracyRate: 100,
        keyDiscoveries: [
          'खरोंचा हुआ पीतल का स्पीकिंग ट्यूब',
          'स्टर्लिंग की क्रिप्टोग्राफिक डायरी',
          'उल्टे दांतों वाला पीतल का सिलेंडर',
          'एलेना का सत्यापित छत अलिबाई',
        ],
        missedOpportunities: [],
        reasoningCritique: 'उत्कृष्ट जासूसी कार्य! आपने सतही भटकावों का विरोध किया और विशुद्ध यांत्रिक सच्चाई का अनुसरण किया।',
      },
    },
    'ending-scapegoat-elena': {
      id: 'ending-scapegoat-elena',
      title: 'कर्जदार वारिस की गलत सजा',
      tier: 'wrong_conviction',
      badge: 'न्याय का हनन',
      narrative: [
        'बिक्री के नकली ड्रॉफ्ट और छलके हुए वाइन ग्लास के प्रभाव में आकर आपने एलेना वेंस की ओर निर्णायक उंगली उठा दी।',
        'कर्ज, दुख और आपके आरोप के बोझ तले दबी एलेना बेगुनाही की दुहाई देती हुई हथकड़ियों में रो पड़ी।',
        'इस बीच, डॉ. आर्थर स्टर्लिंग सुबह 6:15 बजे अपने भारी चमड़े के बैग के साथ चुपचाप जिनेवा जाने वाली पहली ट्रेन में सवार हो गया। ऑटोमेटन कभी वापस नहीं मिला।',
      ],
      summary: 'एलेना वेंस को सतही सुरागों के आधार पर गलत फंसाया गया, जबकि असली चोर डॉ. स्टर्लिंग ऐतिहासिक ऑटोमेटन लेकर फरार हो गया।',
      criteriaReview: {
        theTruth: 'एलेना ने सिर्फ कर्ज के लिए कागज तैयार किए थे; वास्तविक हमला और चोरी स्टर्लिंग ने की थी।',
        yourDeduction: 'आपने वित्तीय हताशा को हिंसक चोरी समझ लिया।',
        accuracyRate: 40,
        keyDiscoveries: ['ऑटोमेटन का पूर्व-तैयार बिक्री अनुबंध', 'छलका हुआ संक्रांति वाइन ग्लास'],
        missedOpportunities: ['स्टर्लिंग की गुप्त डायरी', 'उत्तरी ट्रेलिस के पदचिह्न'],
        reasoningCritique: 'गंभीर चूक। आपने मुख्य यांत्रिक और रासायनिक सुरागों की अनदेखी की।',
      },
    },
    'ending-security-scapegoat': {
      id: 'ending-security-scapegoat',
      title: 'सुरक्षा प्रशासक पर झूठा संदेह',
      tier: 'partial',
      badge: 'अधूरी जांच',
      narrative: [
        'आपने केवल 4 मिनट के सर्किट ब्लैकआउट पर भरोसा करके मिरेइल फॉन्टेन पर आंतरिक तोड़फोड़ का आरोप लगाया।',
        'मिरेइल को पद से हटा दिया गया, लेकिन वास्तविक चोर ऑटोमेटन लेकर भागने में सफल रहा।',
      ],
      summary: 'मिरेइल पर लापरवाही का दोष था, लेकिन चोरी का नहीं। असली अपराधी बच निकला।',
      criteriaReview: {
        theTruth: 'मिरेइल का कंप्यूटर खुला छूटा था जिसे स्टर्लिंग ने इस्तेमाल किया था।',
        yourDeduction: 'आपने सिस्टम लॉग को देखा लेकिन शारीरिक ताला तोड़ने वाले औजारों की जांच नहीं की।',
        accuracyRate: 50,
        keyDiscoveries: ['सर्किट ब्रेकर टाइमस्टैम्प ऑडिट'],
        missedOpportunities: ['उल्टे दांतों वाला पीतल का सिलेंडर', 'स्टर्लिंग की क्रिप्टोग्राफिक डायरी'],
        reasoningCritique: 'जांच अधूरी रही।',
      },
    },
    'ending-compromised': {
      id: 'ending-compromised',
      title: 'ठंडा पड़ता सुराग',
      tier: 'compromised',
      badge: 'अनुत्तरित रहस्य',
      narrative: [
        'बिना ठोस सबूत और स्पष्ट कड़ियों के, सभी संदिग्ध एक-एक करके चले गए।',
        'सेलेस्टियल ऑटोमेटन का रहस्य इतिहास के पन्नों में अनसुलझा रह गया।',
      ],
      summary: 'पर्याप्त साक्ष्य प्रस्तुत न करने के कारण कोई भी आरोपी सिद्ध नहीं हो सका।',
      criteriaReview: {
        theTruth: 'डॉ. स्टर्लिंग ही वास्तविक अपराधी था।',
        yourDeduction: 'आप निर्णायक सबूतों को आपस में जोड़ने में विफल रहे।',
        accuracyRate: 20,
        keyDiscoveries: [],
        missedOpportunities: ['स्टर्लिंग की डायरी', 'स्पीकिंग ट्यूब टर्मिनल', 'उल्टे दांतों वाला सिलेंडर'],
        reasoningCritique: 'कमजोर विश्लेषण।',
      },
    },
  },

  scenarios: {
    'scene-arrival': {
      id: 'scene-arrival',
      title: 'संक्रांति का खतरे का अलार्म',
      location: 'मुख्य फ़ोयर, सेंट-क्लेयर मनोर',
      narrative: [
        'शरद ऋतु का भयानक तूफान सेंट-क्लेयर मनोर की रंगीन खिड़कियों पर बरस रहा है। रात के ठीक 11:45 बजे हैं।',
        'कुछ क्षण पहले, मनोर की यांत्रिक घंटियां बेतरतीब ढंग से बज उठीं। मास्टर घड़ीसाज़ जूलियन वेंस अपने बंद अध्ययन कक्ष में बेसुध और पीले पड़े पाए गए हैं।',
        'उससे भी बुरा, कांच का वह शानदार डिस्प्ले केस shattered पड़ा है जिसमें 17वीं सदी का सेलेस्टियल ऑटोमेटन रखा था—उसकी मखमली गद्दी खाली है।',
        'जैसे ही आप संगमरमर के फ़ोयर में कदम रखते हैं, दूर घाटी से पुलिस की सायरन गूंजती सुनाई देती है। मनोर में चार लोग मौजूद हैं: एलेना वेंस, डॉ. आर्थर स्टर्लिंग, मिरेइल फॉन्टेन, और लुकास वार्ड।',
      ],
      choices: [
        {
          id: 'choice-to-study',
          text: 'अपराध स्थल की जांच करने के लिए तुरंत जूलियन वेंस के अध्ययन कक्ष में जाएं।',
          destinationId: 'scene-study',
          consequencePreview: 'Forensic',
          flavor: 'प्राथमिक जांच दृश्य।',
        },
        {
          id: 'choice-to-terrace',
          text: 'बारिश से निशान धुलने से पहले उत्तरी छत और बाहरी घेरे का मुआयना करें।',
          destinationId: 'scene-terrace',
          consequencePreview: 'Risky',
          flavor: 'समय-संवेदनशील बाहरी जांच।',
        },
        {
          id: 'choice-to-foyer-suspects',
          text: 'प्रारंभिक प्रतिक्रियाएं देखने के लिए फ़ोयर में जमा संदिग्धों से बात करें।',
          destinationId: 'scene-foyer-inquiry',
          consequencePreview: 'Inquisitive',
          flavor: 'निरीक्षणात्मक पूछताछ।',
        },
      ],
    },

    'scene-study': {
      id: 'scene-study',
      title: 'बंद अध्ययन कक्ष (Sanctum)',
      location: 'जूलियन वेंस का निजी अध्ययन कक्ष',
      narrative: [
        'कमरे में मोम, पुराने चर्मपत्र और एक अजीब सी मीठी औषधीय गंध आ रही है जो गले में खराश पैदा करती है।',
        'जूलियन वेंस अपनी ऊंची पीठ वाली चमड़े की कुर्सी पर लुढ़के पड़े हैं और उनकी सांसें धीमी हैं। भारी ओक का दरवाजा अंदर से बंद था जब कर्मचारियों ने शीशा तोड़कर हैंडल खोला।',
        'उनकी मेज के पीछे, अलंकृत पीतल का स्पीकिंग ट्यूब पीले लैंप की रोशनी में चमक रहा है। कुर्सी के पास टूटा हुआ वाइन का गिलास पड़ा है और चिमनी की राख बिखरी हुई दिखती है।',
      ],
      cluesDiscovered: ['clue-speaking-tube', 'clue-wine-glass'],
      choices: [
        {
          id: 'choice-examine-tube',
          text: 'मेज के पीछे लगे पीतल के स्पीकिंग ट्यूब की बारीकी से जांच करें।',
          destinationId: 'scene-inspect-tube',
          consequencePreview: 'Forensic',
        },
        {
          id: 'choice-examine-hearth',
          text: 'चिमनी के फ्लू में ठंडी राख की पड़ताल करें।',
          destinationId: 'scene-inspect-hearth',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-study-to-workshop',
          text: 'स्पीकिंग ट्यूब का पीछा करते हुए नीचे बेसमेंट वर्कशॉप की ओर जाएं।',
          destinationId: 'scene-workshop',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-study-to-library',
          text: 'ऊपर दूसरी मंजिल की लाइब्रेरी में जाएं जहां डॉ. स्टर्लिंग पढ़ रहे थे।',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-inspect-tube': {
      id: 'scene-inspect-tube',
      title: 'पीतल का ध्वनिक नल',
      location: 'जूलियन वेंस की मेज',
      narrative: [
        'आप पीतल के हॉर्न के करीब झुकते हैं। मीठी गंध साफ पहचान में आती है: क्लिनिकल डाइएथिल ईथर।',
        'लेंस से देखने पर पीतल के वाल्व पर ताज़ा खरोंचें दिखाई देती हैं। किसी ने सुरक्षा शटर को पतले पियानो तार से खुला बांधा था।',
        'यह ट्यूब फर्श के तख्तों से होती हुई सीधे नीचे बेसमेंट वर्कशॉप में जाती है।',
      ],
      choices: [
        {
          id: 'choice-tube-back-study',
          text: 'अध्ययन कक्ष के केंद्र में वापस आएं।',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-tube-to-workshop',
          text: 'पाइप के रास्ते सीधे घड़ीसाज़ के वर्कशॉप में जाएं।',
          destinationId: 'scene-workshop',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-inspect-hearth': {
      id: 'scene-inspect-hearth',
      title: 'छिपा हुआ पीतल का सिलेंडर',
      location: 'अध्ययन कक्ष की चिमनी का फ्लू',
      narrative: [
        'ठंडी चिमनी के लोहे के डैम्पर में हाथ डालने पर आपकी उंगलियां भारी ठंडी धातु को छूती हैं।',
        'आप शतरंज के हाथी (rook) के आकार का एक चमकीला पीतल का सिलेंडर बाहर निकालते हैं। इसके बारीक गियर दांत ताज़ा तराशे गए हैं—और विपरीत दिशा में कटे हुए हैं!',
        'यह चिमनी का हिस्सा नहीं है; यह वेंस के पेटेंट किए गए वॉल्ट कैम को बाहर से खोलने वाला विशेष बाईपास उपकरण है।',
      ],
      cluesDiscovered: ['clue-reversed-gear'],
      choices: [
        {
          id: 'choice-hearth-to-study',
          text: 'सिलेंडर को जेब में रखें और कमरे की जांच जारी रखें।',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-hearth-to-interrogate-sterling',
          text: 'इस सिलेंडर को लाइब्रेरी में ले जाकर डॉ. स्टर्लिंग की प्रतिक्रिया देखें।',
          destinationId: 'scene-interrogate-sterling',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-terrace': {
      id: 'scene-terrace',
      title: 'उत्तरी गुलाब ट्रेलिस',
      location: 'उत्तरी कंजर्वेटरी छत',
      narrative: [
        'छत पर कदम रखते ही बारिश आपके कोट को भिगो देती है। अध्ययन कक्ष की बालकनी के नीचे, लोहे का भारी गुलाब ट्रेलिस दीवार से लगा हुआ है।',
        'फूलों की गीली क्यारी में बारिश से धुलने से पहले 43 नंबर के जूतों के दो गहरे निशान साफ दिख रहे हैं।',
        'ट्रेलिस के हरे रंग पर ताज़ा खरोंचों के निशान हैं, जो बताते हैं कि कोई इस पर चढ़ा था।',
      ],
      cluesDiscovered: ['clue-trellis-footprint'],
      choices: [
        {
          id: 'choice-terrace-to-catering',
          text: 'ढके हुए बरामदे पर कैटरिंग स्टेशन की ओर जाएं।',
          destinationId: 'scene-catering-station',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-terrace-to-study',
          text: 'बालकनी के दरवाजों से वापस अध्ययन कक्ष में आएं।',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-terrace-to-garage',
          text: 'बाहरी रास्ते से गैरेज की ओर जाएं जहां कूरियर वाहन खड़ा है।',
          destinationId: 'scene-garage',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-catering-station': {
      id: 'scene-catering-station',
      title: 'छत का कैटरिंग बरामदा',
      location: 'उत्तरी बरामदा',
      narrative: [
        'शेफ हेनरी चांदी की ट्रे सुखा रहे हैं जबकि उनके कर्मचारी पुलिस के बारे में फुसफुसा रहे हैं।',
        'जब एलेना के बारे में पूछा गया, तो हेनरी हाथ हिलाते हुए बोले: "मैडमोजेल एलेना? वह यहीं थीं! आधी रात से 20 मिनट पहले से लेकर घंटियां बजने तक वे यहीं शैम्पेन के तापमान की शिकायत कर रही थीं!"',
        'वे आपको अपना हस्ताक्षरित सेवा लॉग सौंपते हैं जो इस समय की पुष्टि करता है।',
      ],
      cluesDiscovered: ['clue-elena-alibi'],
      choices: [
        {
          id: 'choice-catering-to-elena',
          text: 'ड्राइंग रूम में जाकर एलेना वेंस से पूछताछ करें।',
          destinationId: 'scene-interrogate-elena',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-catering-to-terrace',
          text: 'वापस छत पर कदम रखें।',
          destinationId: 'scene-terrace',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-foyer-inquiry': {
      id: 'scene-foyer-inquiry',
      title: 'फ़ोयर में आमना-सामना',
      location: 'भव्य फ़ोयर',
      narrative: [
        'चारों संदिग्ध बड़े झूमर के नीचे घबराहट में एक-दूसरे से दूरी बनाए खड़े हैं।',
        'एलेना भीगा रूमाल थामे हैं, डॉ. स्टर्लिंग दादाजी की घड़ी के पास खड़े अपने कफ मसल रहे हैं।',
        'मिरेइल फॉन्टेन सुरक्षा लाइटों को देख रही हैं और लुकास वार्ड अपने भीगे चमड़े के जैकेट में छाया में खड़ा है।',
      ],
      choices: [
        {
          id: 'choice-talk-elena',
          text: 'पूछताछ के लिए एलेना वेंस के पास जाएं।',
          destinationId: 'scene-interrogate-elena',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-talk-sterling',
          text: 'पूछताछ के लिए डॉ. आर्थर स्टर्लिंग के पास जाएं।',
          destinationId: 'scene-interrogate-sterling',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-talk-mireille',
          text: 'सुरक्षा प्रणालियों के बारे में मिरेइल फॉन्टेन से बात करें।',
          destinationId: 'scene-interrogate-mireille',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-talk-lukas',
          text: 'कूरियर वाहन के बारे में लुकास वार्ड से पूछताछ करें।',
          destinationId: 'scene-interrogate-lukas',
          consequencePreview: 'Inquisitive',
        },
      ],
    },

    'scene-interrogate-elena': {
      id: 'scene-interrogate-elena',
      title: 'एलेना वेंस से पूछताछ',
      location: 'कंजर्वेटरी ड्राइंग रूम',
      dialogue: [
        {
          speaker: 'एलेना वेंस',
          text: 'आपको मुझे इस तरह देखने का कोई हक नहीं है! जूलियन मेरे परिवार थे। मैंने जो कुछ किया इस मनोर को बचाने के लिए किया!',
          mood: 'defiant',
        },
      ],
      narrative: [
        'एलेना मेज पर खुला आर्ट पोर्टफोलियो लिए बैठी है। अंदर ऑटोमेटन को 450,000 स्विस फ्रैंक में गिरवी रखने का ड्राफ्ट अनुबंध रखा है।',
      ],
      cluesDiscovered: ['clue-forged-bill'],
      choices: [
        {
          id: 'choice-press-elena-forgery',
          text: 'एलेना से अनुबंध के बारे में सवाल करें: "आप जूलियन की पीठ पीछे ऑटोमेटन बेचना चाहती थीं।"',
          destinationId: 'scene-elena-confrontation',
          consequencePreview: 'Direct',
          effects: [
            {
              type: 'setFlag',
              target: 'elena_admitted_financial_strain',
              description: 'एलेना ने कर्ज का दबाव स्वीकार किया।',
            },
          ],
        },
        {
          id: 'choice-press-elena-wine',
          text: 'अध्ययन कक्ष में छलके हुए वाइन गिलास के बारे में पूछें।',
          destinationId: 'scene-elena-wine-confession',
          consequencePreview: 'Inquisitive',
          conditions: [
            {
              type: 'hasClue',
              target: 'clue-wine-glass',
            },
          ],
          lockReason: 'पहले छलका हुआ वाइन ग्लास खोजना आवश्यक है।',
        },
        {
          id: 'choice-elena-leave',
          text: 'अभी के लिए पूछताछ समाप्त करें और अन्य सुराग देखें।',
          destinationId: 'scene-foyer-inquiry',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-elena-confrontation': {
      id: 'scene-elena-confrontation',
      title: 'एलेना का कर्ज कबूलनामा',
      location: 'कंजर्वेटरी ड्राइंग रूम',
      dialogue: [
        {
          speaker: 'एलेना वेंस',
          text: 'हां! ठीक है! जिनेवा गिल्ड मेरी वर्कशॉप जब्त करने वाली थी। मैंने उन्हें गारंटी दिखाने के लिए अनुबंध बनाया था। लेकिन मैं अपने चाचा को कभी नुकसान नहीं पहुंचा सकती! कैटरर्स से पूछिए—मैं छत से कभी नहीं हटी!',
          mood: 'shaken',
        },
      ],
      narrative: [
        'एलेना की व्यथा वास्तविक लगती है। वह स्वीकार करती है कि वह जूलियन को सुलाना चाहती थी ताकि सीरियल नंबर नोट कर सके, लेकिन कसम खाती है कि उसने उन्हें छुआ तक नहीं।',
      ],
      choices: [
        {
          id: 'choice-elena-confession-done',
          text: 'उसका बयान दर्ज करें और लाइब्रेरी की जांच करें।',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Deductive',
        },
        {
          id: 'choice-elena-confession-to-study',
          text: 'अध्ययन कक्ष में लौटें।',
          destinationId: 'scene-study',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-elena-wine-confession': {
      id: 'scene-elena-wine-confession',
      title: 'वाइन का सच',
      location: 'कंजर्वेटरी ड्राइंग रूम',
      dialogue: [
        {
          speaker: 'एलेना वेंस',
          text: 'वाइन? मैंने... मैंने रात 10 बजे उनके गिलास में वेलेरियन की 4 बूंदें डाली थीं। केवल इसलिए ताकि वे जल्दी सो जाएं! लेकिन जब मैं छत पर गई, उन्होंने उसे छुआ तक नहीं था!',
          mood: 'evasive',
        },
      ],
      narrative: [
        'उसका बयान वाइन ग्लास के रासायनिक विश्लेषण से पूरी तरह मेल खाता है: वेलेरियन रूट, जो अचानक बेहोशी पैदा नहीं कर सकता।',
      ],
      choices: [
        {
          id: 'choice-wine-confession-done',
          text: 'डॉ. स्टर्लिंग से पूछताछ के लिए आगे बढ़ें।',
          destinationId: 'scene-interrogate-sterling',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interrogate-sterling': {
      id: 'scene-interrogate-sterling',
      title: 'डॉ. आर्थर स्टर्लिंग से पूछताछ',
      location: 'दूसरी मंजिल लाइब्रेरी गैलरी',
      dialogue: [
        {
          speaker: 'डॉ. आर्थर स्टर्लिंग',
          text: 'बड़ा भयानक हादसा, डिटेक्टिव। जूलियन एक कुशल शिल्पकार थे, हालांकि अपने सिफर के प्रति अत्यधिक संकीर्ण। मैं पूरी शाम यहां 17वीं सदी की किताबें पढ़ रहा था।',
          mood: 'calm',
        },
      ],
      narrative: [
        'डॉ. स्टर्लिंग रूमाल से माथा पोंछते हैं। रूमाल मोड़ते समय आपको उस पर सूखे ग्रेफाइट पाउडर और कांस्य की चमक दिखाई देती है।',
        'उनके जूते गीले हैं।',
      ],
      cluesDiscovered: ['clue-graphite-cloth'],
      choices: [
        {
          id: 'choice-sterling-press-graphite',
          text: 'उनके रूमाल की ओर इशारा करें: "एक विद्वान के रूमाल पर ताले का ग्रेफाइट, डॉक्टर?"',
          destinationId: 'scene-sterling-flustered',
          consequencePreview: 'Direct',
          effects: [
            {
              type: 'setFlag',
              target: 'sterling_pressured',
              description: 'डॉ. स्टर्लिंग ग्रेफाइट पर असहज हो गए।',
            },
          ],
        },
        {
          id: 'choice-sterling-show-cylinder',
          text: 'अध्ययन कक्ष की चिमनी में मिला उल्टे दांतों वाला पीतल का सिलेंडर दिखाएं।',
          destinationId: 'scene-sterling-cylinder-reaction',
          consequencePreview: 'Forensic',
          conditions: [
            {
              type: 'hasClue',
              target: 'clue-reversed-gear',
            },
          ],
          lockReason: 'पहले उल्टे दांतों वाला सिलेंडर खोजना आवश्यक है।',
        },
        {
          id: 'choice-sterling-search-library',
          text: 'लाइब्रेरी की अलमारियों की तलाशी लें।',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Subtle',
        },
      ],
    },

    'scene-sterling-flustered': {
      id: 'scene-sterling-flustered',
      title: 'विद्वान की घबराहट',
      location: 'दूसरी मंजिल लाइब्रेरी गैलरी',
      dialogue: [
        {
          speaker: 'डॉ. आर्थर स्टर्लिंग',
          text: 'ग्रेफाइट? यह तो स्वाभाविक है! मैं दोपहर में एक पुराना एस्ट्रोलेब देख रहा था। क्या आप यह कह रहे हैं कि मेरे जैसा प्रतिष्ठित विद्वान किसी चोर की तरह रेंगता फिरेगा?',
          mood: 'nervous',
        },
      ],
      narrative: [
        'स्टर्लिंग की आवाज़ की पिच तेज हो जाती है। वे कुर्सी के नीचे अपने गीले जूते छुपाने की कोशिश करते हैं।',
      ],
      choices: [
        {
          id: 'choice-flustered-to-search',
          text: 'उनकी मेज और आसपास की अलमारियों की गहन तलाशी लें।',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-sterling-cylinder-reaction': {
      id: 'scene-sterling-cylinder-reaction',
      title: 'यांत्रिक सुराग का प्रभाव',
      location: 'दूसरी मंजिल लाइब्रेरी गैलरी',
      narrative: [
        'जब आप पीतल का सिलेंडर मेज पर रखते हैं, तो स्टर्लिंग की आंखें फटी रह जाती हैं।',
        '"यह आपको कहां से मिला... यह तो इनवर्टेड एस्केपमेंट कैम है! जूलियन ने कसम खाई थी कि उसने प्रोटोटाइप पिघला दिया था!"',
        'उनकी जबान फिसल गई। आपने उन्हें कभी नहीं बताया था कि जूलियन के पास ऐसा प्रोटोटाइप था।',
      ],
      choices: [
        {
          id: 'choice-cylinder-to-library-shelf',
          text: 'उनकी कुर्सी के ठीक बगल वाली अलमारी में खोजें।',
          destinationId: 'scene-library-archive',
          consequencePreview: 'Forensic',
        },
      ],
    },

    'scene-library-archive': {
      id: 'scene-library-archive',
      title: 'गुप्त डायरी की बरामदगी',
      location: 'लाइब्रेरी का पूर्वी हिस्सा',
      narrative: [
        'अलमारी में इनसाइक्लोपीडिया होरोलॉजी की जिल्दों के पीछे दीवार के आले में एक काली डायरी छिपी मिलती है।',
        'पृष्ठ 84 खोलने पर जूलियन वेंस के अध्ययन कक्ष के नक्शे और स्पीकिंग ट्यूब से ईथर गैस पंप करने की पूरी गणनाएं मिलती हैं!',
        'स्टर्लिंग के हस्ताक्षर वाला नोट: "150ml ईथर वाष्प 20 मिनट की बेहोशी के लिए पर्याप्त है। बदला गया सिलेंडर लैच को रोके रखेगा।"',
      ],
      cluesDiscovered: ['clue-sterling-journal'],
      choices: [
        {
          id: 'choice-library-to-workshop',
          text: 'गैस आपूर्ति टर्मिनल की पुष्टि करने बेसमेंट वर्कशॉप जाएं।',
          destinationId: 'scene-workshop',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-library-to-security',
          text: 'सर्किट ब्रेकर लॉग देखने सुरक्षा कक्ष जाएं।',
          destinationId: 'scene-interrogate-mireille',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-library-to-deductions',
          text: 'सबूतों और कड़ियों की समीक्षा करने के लिए अपनी डायरी खोलें।',
          destinationId: 'scene-deduction-chamber',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-workshop': {
      id: 'scene-workshop',
      title: 'तहखाने का गुप्त वर्कशॉप',
      location: 'घड़ीसाज़ का बेसमेंट वर्कशॉप',
      narrative: [
        'बेसमेंट वर्कशॉप में केवल पानी की बूंदों की आवाज़ आ रही है। काम की मेजों पर पीतल के गियर और खराद रखे हैं।',
        'पीछे की दीवार पर, पीतल के स्पीकिंग ट्यूब का निचला सिरा एक तांबे के पाइप से जुड़ा है।',
        'ट्यूब के मुंह पर एक रबर का बल्ब और वाल्व लगा है। कूड़ेदान में डाइएथिल ईथर की खाली बोतल पड़ी है।',
      ],
      cluesDiscovered: ['clue-acoustic-terminal'],
      choices: [
        {
          id: 'choice-workshop-to-security',
          text: 'पास के इलेक्ट्रिकल सबस्टेशन की जांच करें जहां मिरेइल तैनात थीं।',
          destinationId: 'scene-interrogate-mireille',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-workshop-to-garage',
          text: 'बाहर सर्विस गैरेज की ओर जाएं।',
          destinationId: 'scene-garage',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interrogate-mireille': {
      id: 'scene-interrogate-mireille',
      title: 'मिरेइल फॉन्टेन से पूछताछ',
      location: 'सुरक्षा सबस्टेशन',
      dialogue: [
        {
          speaker: 'मिरेइल फॉन्टेन',
          text: 'इस घर का हर किलोवाट रिकॉर्ड होता है, डिटेक्टिव। रात 11:38 पर लूप 4 में असामान्य वोल्टेज ड्रॉप हुआ था।',
          mood: 'calm',
        },
      ],
      narrative: [
        'मिरेइल आपको कंप्यूटर टर्मिनल लॉग देती हैं। लूप 4, जो अध्ययन कक्ष के कैमरे और चुंबकीय लॉक को नियंत्रित करता है, 11:38 पर बंद हुआ और 11:42 पर चालू हुआ।',
        'परंतु उनका बैज लॉग दिखाता है कि वे 11:35 पर मेन गैलरी में थीं। उनका कंप्यूटर टर्मिनल बिना लॉक के खुला छूटा था।',
      ],
      cluesDiscovered: ['clue-breaker-log', 'clue-mireille-keycard'],
      choices: [
        {
          id: 'choice-mireille-press-terminal',
          text: 'पूछें कि उनका टर्मिनल समारोह के दौरान खुला क्यों छोड़ा गया था।',
          destinationId: 'scene-mireille-terminal-admission',
          consequencePreview: 'Inquisitive',
        },
        {
          id: 'choice-mireille-to-garage',
          text: 'गैरेज का मुआयना करें।',
          destinationId: 'scene-garage',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-mireille-terminal-admission': {
      id: 'scene-mireille-terminal-admission',
      title: 'खुला छूटा सुरक्षा कंसोल',
      location: 'सुरक्षा सबस्टेशन',
      dialogue: [
        {
          speaker: 'मिरेइल फॉन्टेन',
          text: 'मैं... मैं 11:36 पर कॉफी लेने पैंट्री में गई थी। गलियारे से वर्कशॉप जाने वाला कोई भी व्यक्ति काउंटर के ऊपर से हाथ बढ़ाकर स्विच दबा सकता था!',
          mood: 'nervous',
        },
      ],
      narrative: [
        'उनकी बात से पुष्टि होती है कि ब्रेकर ट्रिप वर्कशॉप की ओर जाने वाले व्यक्ति द्वारा किया गया एक अवसरवादी ब्लैकआउट था।',
      ],
      choices: [
        {
          id: 'choice-terminal-to-deduction',
          text: 'सबूत डायरी में निष्कर्ष तैयार करें।',
          destinationId: 'scene-deduction-chamber',
          consequencePreview: 'Deductive',
        },
      ],
    },

    'scene-garage': {
      id: 'scene-garage',
      title: 'सर्विस गैरेज',
      location: 'कोच हाउस व गैरेज',
      narrative: [
        'लुकास वार्ड चालू कार के पास खड़ा विंडशील्ड से कोहरा पोंछ रहा है।',
        'पीछे के ट्रंक में सीसे की परत वाला भारी धातु का केस रखा है।',
      ],
      choices: [
        {
          id: 'choice-confront-lukas-trunk',
          text: 'लुकास से कहें कि वह ट्रंक में रखा केस खोले।',
          destinationId: 'scene-interrogate-lukas',
          consequencePreview: 'Direct',
        },
        {
          id: 'choice-garage-to-foyer',
          text: 'मुख्य फ़ोयर में वापस लौटें।',
          destinationId: 'scene-foyer-inquiry',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-interrogate-lukas': {
      id: 'scene-interrogate-lukas',
      title: 'लुकास का कूरियर बॉक्स',
      location: 'कोच हाउस',
      dialogue: [
        {
          speaker: 'लुकास वार्ड',
          text: 'डिटेक्टिव, मैं कला की चोरी नहीं करता। जूलियन मुझे अपने निजी मामलों को गुप्त रखने के पैसे देते हैं। अगर आप इसे खुलवाएंगे, तो उनकी बीमारी की बात सार्वजनिक हो जाएगी।',
          mood: 'defiant',
        },
      ],
      narrative: [
        'आप अपना आधिकारिक बैज दिखाते हैं। अनिच्छा से लुकास लॉक खोलता है।',
        'अंदर जूलियन वेंस के नाम की रेफ्रिजरेटेड हृदय पेप्टाइड दवाइयों की शीशियां रखी हैं। वह आपको सीमा शुल्क मैनिफेस्ट भी दिखाता है।',
      ],
      cluesDiscovered: ['clue-lukas-manifest'],
      choices: [
        {
          id: 'choice-lukas-cleared',
          text: 'लुकास को दोषमुक्त करें और उसे मेडिकल टीम की प्रतीक्षा करने को कहें।',
          destinationId: 'scene-deduction-chamber',
          consequencePreview: 'Deductive',
          effects: [
            {
              type: 'setFlag',
              target: 'lukas_cleared_by_evidence',
              description: 'लुकास वार्ड की निर्दोषिता सिद्ध हुई।',
            },
          ],
        },
      ],
    },

    'scene-deduction-chamber': {
      id: 'scene-deduction-chamber',
      title: 'डिटेक्टिव का अंतिम संश्लेषण',
      location: 'मनोर सोलेरियम / केस मुख्यालय',
      narrative: [
        'खिड़कियों के बाहर बारिश हल्की हो रही है। भोर होने में केवल एक घंटा बचा है।',
        'आपने अध्ययन कक्ष, स्पीकिंग ट्यूब, बेसमेंट वर्कशॉप और रासायनिक अवशेषों की जांच कर ली है और सभी संदिग्धों से पूछताछ पूरी कर ली है।',
        'सभी साक्ष्य आपकी डायरी में दर्ज हैं। अब अपनी औपचारिक परिकल्पना तैयार करने और संदिग्धों को ग्रैंड लाइब्रेरी में बुलाने का समय आ गया है।',
      ],
      choices: [
        {
          id: 'choice-summon-sterling',
          text: 'डॉ. आर्थर स्टर्लिंग के खिलाफ औपचारिक आरोप तय करें।',
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
          lockReason: 'स्पीकिंग ट्यूब और उल्टे गियर सिलेंडर के भौतिक साक्ष्य आवश्यक हैं।',
        },
        {
          id: 'choice-summon-elena',
          text: 'फर्जी अनुबंध और कर्ज के आधार पर एलेना वेंस पर आरोप तय करें।',
          destinationId: 'scene-confrontation-elena',
          consequencePreview: 'Risky',
        },
        {
          id: 'choice-summon-mireille',
          text: 'ब्लैकआउट के आधार पर मिरेइल फॉन्टेन पर आरोप तय करें।',
          destinationId: 'scene-confrontation-mireille',
          consequencePreview: 'Risky',
        },
        {
          id: 'choice-summon-lukas',
          text: 'लुकास वार्ड पर तस्करी का आरोप लगाएं।',
          destinationId: 'scene-confrontation-lukas',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-confrontation-sterling': {
      id: 'scene-confrontation-sterling',
      title: 'फैसला: स्टर्लिंग पर आरोप',
      location: 'भव्य लाइब्रेरी',
      narrative: [
        'सुबह 5:00 बजते ही चारों संदिग्ध लाइब्रेरी की मेज के चारों ओर बैठते हैं।',
        'आप घटनाक्रम प्रस्तुत करते हैं: 11:38 पर ब्लैकआउट, स्पीकिंग ट्यूब से ईथर का छिड़काव, ट्रेलिस पर चढ़ना और उल्टे सिलेंडर से ताला खोलना।',
        'आप डॉ. स्टर्लिंग की ओर मुड़ते हैं और उनकी डायरी तथा ग्रेफाइट लगा रूमाल मेज पर रखते हैं।',
      ],
      choices: [
        {
          id: 'choice-sterling-slam-proof',
          text: 'डायरी और सिलेंडर सामने रखें: "यह अपराध पूर्व-नियोजित था, डॉ. स्टर्लिंग।"',
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
          lockReason: 'स्टर्लिंग की डायरी और बेसमेंट टर्मिनल के साक्ष्य आवश्यक हैं।',
        },
        {
          id: 'choice-sterling-incomplete-proof',
          text: 'पर्याप्त साक्ष्यों के बिना स्टर्लिंग पर आरोप लगाएं।',
          destinationId: 'scene-ending-compromised',
          consequencePreview: 'Risky',
        },
      ],
    },

    'scene-confrontation-elena': {
      id: 'scene-confrontation-elena',
      title: 'फैसला: एलेना पर आरोप',
      location: 'भव्य लाइब्रेरी',
      narrative: [
        'आप वित्तीय हताशा और पोर्टफोलियो में मिले बिक्री अनुबंध का हवाला देकर एलेना पर आरोप लगाते हैं।',
        'एलेना रोते हुए अपनी बेगुनाही की गुहार लगाती है जब पुलिस उसे हिरासत में लेती है।',
      ],
      choices: [
        {
          id: 'choice-elena-arrest-confirm',
          text: 'एलेना वेंस के गिरफ्तारी वारंट पर हस्ताक्षर करें।',
          destinationId: 'scene-ending-elena',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-confrontation-mireille': {
      id: 'scene-confrontation-mireille',
      title: 'फैसला: मिरेइल पर आरोप',
      location: 'भव्य लाइब्रेरी',
      narrative: [
        'आप चार मिनट के ब्रेकर लॉग पर भरोसा करते हुए मिरेइल फॉन्टेन पर आंतरिक तोड़फोड़ का आरोप लगाते हैं।',
        'मिरेइल कड़वे मौन में खड़ी रहती हैं जबकि मनोर बोर्ड उनके अधिकार छीन लेता है।',
      ],
      choices: [
        {
          id: 'choice-mireille-arrest-confirm',
          text: 'मिरेइल फॉन्टेन की फाइल बंद करें।',
          destinationId: 'scene-ending-mireille',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-confrontation-lukas': {
      id: 'scene-confrontation-lukas',
      title: 'फैसला: लुकास पर आरोप',
      location: 'भव्य लाइब्रेरी',
      narrative: [
        'आप लुकास वार्ड पर कला तस्करी का आरोप लगाते हैं। आहत और क्रोधित होकर लुकास सहयोग करने से इंकार कर देता है।',
      ],
      choices: [
        {
          id: 'choice-lukas-arrest-confirm',
          text: 'वाहन जब्त करने का आदेश दें।',
          destinationId: 'scene-ending-compromised',
          consequencePreview: 'Direct',
        },
      ],
    },

    'scene-ending-triumph': {
      id: 'scene-ending-triumph',
      title: 'केस समाप्त: मास्टर घड़ीसाज़ की विजय',
      location: 'भव्य लाइब्रेरी',
      narrative: [
        'डॉ. स्टर्लिंग अकाट्य फोरेंसिक और यांत्रिक साक्ष्यों के दबाव में टूट जाते हैं।',
        'वे कबूल करते हैं कि उन्होंने सुबह की ट्रेन से पहले ऑटोमेटन को अपने यात्रा ट्रंक में छिपाया था।',
        'ऑटोमेटन सुरक्षित बरामद कर लिया जाता है और जूलियन वेंस को अस्पताल में होश आ जाता है।',
      ],
      isEnding: true,
      endingId: 'ending-triumph',
      choices: [],
    },

    'scene-ending-elena': {
      id: 'scene-ending-elena',
      title: 'केस समाप्त: निर्दोष वारिस की सजा',
      location: 'पुलिस वैन',
      narrative: [
        'एलेना वेंस को हथकड़ियों में सुबह की धुंध में ले जाया जाता है।',
        'इस बीच, डॉ. स्टर्लिंग अपने भारी बैग के साथ सुबह की ट्रेन से फरार हो जाता है।',
      ],
      isEnding: true,
      endingId: 'ending-scapegoat-elena',
      choices: [],
    },

    'scene-ending-mireille': {
      id: 'scene-ending-mireille',
      title: 'केस समाप्त: टूटा हुआ सर्किट',
      location: 'सुरक्षा कार्यालय',
      narrative: [
        'मिरेइल फॉन्टेन को नौकरी से बर्खास्त कर दिया जाता है, जबकि असली चोर भागते हुए नदी में ऑटोमेटन गिरा देता है।',
      ],
      isEnding: true,
      endingId: 'ending-security-scapegoat',
      choices: [],
    },

    'scene-ending-compromised': {
      id: 'scene-ending-compromised',
      title: 'केस समाप्त: अनसुलझा रहस्य',
      location: 'सेंट-क्लेयर मनोर फाटक',
      narrative: [
        'बिना स्पष्ट सुरागों के सभी संदिग्ध अलग-अलग हो जाते हैं और पुलिस मनोर को सील कर देती है।',
        'सेलेस्टियल ऑटोमेटन का रहस्य अनसुलझा रह जाता है।',
      ],
      isEnding: true,
      endingId: 'ending-compromised',
      choices: [],
    },
  },
};

/**
 * Returns the localized version of an Episode.
 * In English, returns the original episode untouched.
 * In Hindi, deep merges the translated text strings while preserving all IDs, logic conditions, and effects.
 */
export function getLocalizedEpisode(episode: Episode, lang: SupportedLanguage): Episode {
  if (lang === 'en' || !episode) {
    return episode;
  }

  // If the episode is 'the-midnight-cipher', apply the complete Hindi translation
  if (episode.id === 'the-midnight-cipher') {
    const hi = THE_MIDNIGHT_CIPHER_HI;

    // Merge suspects
    const mergedSuspects: Record<string, any> = { ...episode.suspects };
    if (hi.suspects) {
      for (const [key, suspect] of Object.entries(hi.suspects)) {
        if (mergedSuspects[key] && suspect) {
          mergedSuspects[key] = {
            ...mergedSuspects[key],
            ...suspect,
          };
        }
      }
    }

    // Merge clues
    const mergedClues: Record<string, any> = { ...episode.clues };
    if (hi.clues) {
      for (const [key, clue] of Object.entries(hi.clues)) {
        if (mergedClues[key] && clue) {
          mergedClues[key] = {
            ...mergedClues[key],
            ...clue,
          };
        }
      }
    }

    // Merge connections
    const mergedConnections = episode.connections.map((conn) => {
      const match = hi.connections?.find((c) => c.id === conn.id);
      if (match) {
        return {
          ...conn,
          deductionTitle: match.deductionTitle || conn.deductionTitle,
          deductionText: match.deductionText || conn.deductionText,
        };
      }
      return conn;
    });

    // Merge hypotheses
    const mergedHypotheses: Record<string, any> = { ...episode.hypotheses };
    if (hi.hypotheses) {
      for (const [key, hypo] of Object.entries(hi.hypotheses)) {
        if (mergedHypotheses[key] && hypo) {
          mergedHypotheses[key] = {
            ...mergedHypotheses[key],
            ...hypo,
          };
        }
      }
    }

    // Merge endings
    const mergedEndings: Record<string, any> = { ...episode.endings };
    if (hi.endings) {
      for (const [key, ending] of Object.entries(hi.endings)) {
        if (mergedEndings[key] && ending) {
          mergedEndings[key] = {
            ...mergedEndings[key],
            ...ending,
          };
        }
      }
    }

    // Merge scenarios
    const mergedScenarios: Record<string, any> = { ...episode.scenarios };
    if (hi.scenarios) {
      for (const [key, scenario] of Object.entries(hi.scenarios)) {
        if (mergedScenarios[key] && scenario) {
          // Merge choices carefully
          const originalChoices = mergedScenarios[key].choices || [];
          const hiChoices = scenario.choices || [];
          const mergedChoices = originalChoices.map((origChoice: any) => {
            const hiChoice = hiChoices.find((c: any) => c.id === origChoice.id);
            if (hiChoice) {
              return {
                ...origChoice,
                text: hiChoice.text || origChoice.text,
                flavor: hiChoice.flavor !== undefined ? hiChoice.flavor : origChoice.flavor,
                lockReason: hiChoice.lockReason || origChoice.lockReason,
              };
            }
            return origChoice;
          });

          mergedScenarios[key] = {
            ...mergedScenarios[key],
            title: scenario.title || mergedScenarios[key].title,
            location: scenario.location || mergedScenarios[key].location,
            narrative: scenario.narrative || mergedScenarios[key].narrative,
            dialogue: scenario.dialogue || mergedScenarios[key].dialogue,
            choices: mergedChoices,
          };
        }
      }
    }

    return {
      ...episode,
      title: hi.title || episode.title,
      subtitle: hi.subtitle || episode.subtitle,
      synopsis: hi.synopsis || episode.synopsis,
      timeSetting: hi.timeSetting || episode.timeSetting,
      location: hi.location || episode.location,
      tags: hi.tags || episode.tags,
      suspects: mergedSuspects,
      clues: mergedClues,
      connections: mergedConnections,
      hypotheses: mergedHypotheses,
      endings: mergedEndings,
      scenarios: mergedScenarios,
    };
  }

  return episode;
}

/**
 * Returns localized episode metadata for catalog display.
 */
export function getLocalizedMetadata(metadata: EpisodeMetadata, lang: SupportedLanguage): EpisodeMetadata {
  if (lang === 'en' || !metadata) return metadata;

  if (metadata.id === 'the-midnight-cipher') {
    return {
      ...metadata,
      title: 'सेंट-क्लेयर का मध्यरात्रि सिफर',
      subtitle: 'डॉ. आर्थर स्टर्लिंग का संदेह एवं क्लॉकवर्क तहखाना',
      synopsis:
        'सेंट-क्लेयर एस्टेट के कोहरे से घिरे कंजर्वेटरी में, प्रख्यात घड़ीसाज़ जूलियन वेंस एक टूटे हुए पीतल के बक्से के पास अचेत पाए गए हैं। तीन संदिग्धों के पास मकसद, अवसर और विरोधाभासी अलिबाई हैं। भोर होने से पहले सुराग खोजें, सिफर सुलझाएं और असली अपराधी को बेनकाब करें।',
      timeSetting: 'मध्यरात्रि, 24 अक्टूबर 1928',
      location: 'सेंट-क्लेयर एस्टेट का कंजर्वेटरी, लंदन',
      tags: ['नोयर', 'बंद कमरा', 'घड़ीसाजी', 'रहस्य', 'रोमांचक'],
    };
  }

  if (metadata.id === 'the-thames-alibi') {
    return {
      ...metadata,
      title: 'वैपिंग के फुसफुसाते घाट',
      subtitle: 'इंस्पेक्टर वेंस का रहस्यमयी लापता होना एवं टेम्स के तस्कर',
      synopsis:
        'लंदन के घाटों पर एक बर्फीली रात में कस्टम इंस्पेक्टर डोनाल्ड वेंस वैपिंग पियर से अचानक गायब हो गए। खून से सनी पॉकेट घड़ी, बदली हुई कार्गो सूची और नाव वालों के परस्पर विरोधी बयान एक गुप्त तस्करी गिरोह की ओर इशारा करते हैं।',
      timeSetting: 'रात, 14 नवंबर 1894',
      location: 'वैपिंग घाट एवं गिल्डेड एंकर मधुशाला, लंदन',
      tags: ['लापता व्यक्ति', 'तस्करी', 'नोयर', 'टेम्स नदी', 'धोखाधड़ी'],
    };
  }

  if (metadata.id === 'the-blackwood-inheritance') {
    return {
      ...metadata,
      title: 'ब्लैकवुड वसीयत षड्यंत्र',
      subtitle: 'एलिस्टर ब्लैकवुड की जाली वसीयतें एवं पुराना तहखाना',
      synopsis:
        'एडिनबर्ग के एक पुराने घर में प्राचीन वस्तुओं के विद्वान एलिस्टर ब्लैकवुड के निधन के बाद तीन परस्पर विरोधी वसीयतें सामने आईं। स्याही और वॉटरमार्क की फोरेंसिक जांच से उनकी बेटी को बेदखल करने की गहरी साजिश उजागर होती है।',
      timeSetting: 'शाम, 12 अक्टूबर 1912',
      location: 'ब्लैकवुड एंटिक्वारियन हाउस, रॉयल माइल, एडिनबर्ग',
      tags: ['विवादित वसीयत', 'जालसाजी', 'एडिनबर्ग', 'फोरेंसिक', 'ऐतिहासिक'],
    };
  }

  if (metadata.id === 'the-galleria-forgery') {
    return {
      ...metadata,
      title: 'पुनर्जागरण का मायावी रूप',
      subtitle: 'ला बेला डोना की चोरी एवं फ्लोरेंस संग्रहालय का रहस्य',
      synopsis:
        'फ्लोरेंस की एक प्रसिद्ध गैलरी में नब्बे सेकंड के ब्लैकआउट के दौरान पंद्रहवीं सदी का अमूल्य चित्र "ला बेला डोना" बदल दिया गया। पराबैंगनी प्रकाश और रासायनिक रंगों के विश्लेषण से आधुनिक टाइटेनियम सफेद रंग की मौजूदगी उजागर हुई।',
      timeSetting: 'मध्यरात्रि, 18 मई 1931',
      location: 'गैलेरिया डेल’एकाडेमिया प्राइवेट सैलून, फ्लोरेंस',
      tags: ['कला चोरी', 'जालसाजी', 'फ्लोरेंस', 'रंगद्रव्य', 'डकैती'],
    };
  }

  if (metadata.id === 'the-hollow-automaton') {
    return {
      ...metadata,
      title: 'सेंट जूड्स का यांत्रिक शतरंजबाज',
      subtitle: 'शतरंज ऑटोमेटन की अनसुलझी हत्या एवं विएना का पुराना केस',
      synopsis:
        'दस साल पहले शतरंज ग्रैंडमास्टर विक्टर कोज़लोव इंपीरियल चेस ऑटोमेटन के गियरों से भरे कैबिनेट में मृत पाए गए थे। एक नए मिले स्कोरशीट से केस दोबारा खुला है। छिपे हुए ऑप्टिकल शीशों और न्यूमेटिक तारों की जांच से गणितीय सटीकता से रची गई हत्या का पर्दाफाश होता है।',
      timeSetting: 'शरद ऋतु, 3 नवंबर 1905',
      location: 'इंपीरियल प्रदर्शनी हॉल एवं मैकेनिक्स गिल्ड, विएना',
      tags: ['अनसुलझा केस', 'शतरंज', 'ऑटोमेटन', 'विएना', 'यांत्रिक'],
    };
  }

  if (metadata.id === 'the-diplomats-cipher') {
    return {
      ...metadata,
      title: 'डोवर नाइट एक्सप्रेस का षड्यंत्र',
      subtitle: 'राजदूत मोरेटी का विषपान एवं महाद्वीपीय संधि षड्यंत्र',
      synopsis:
        'बर्फ से ढके केंट के रास्तों से लंदन की ओर दौड़ती लग्जरी स्लीपर एक्सप्रेस में इतालवी दूत काउंट लोरेंजो मोरेटी अपने बंद डिब्बे में मृत पाए गए। कड़वे बादाम की गंध, फटी हुई शांति संधि और यात्रियों की संदिग्ध आवाजाही से एक अंतरराष्ट्रीय जासूसी का पर्दाफाश होता है।',
      timeSetting: 'रात, 19 दिसंबर 1924',
      location: 'स्लीपर कार "यूरोपा", डोवर-टू-लंदन नाइट एक्सप्रेस',
      tags: ['जासूसी', 'बंद डिब्बा', 'ट्रेन', 'षड्यंत्र', 'विष'],
    };
  }

  return metadata;
}

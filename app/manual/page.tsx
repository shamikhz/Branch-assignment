'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowLeft,
  BookOpen,
  Fingerprint,
  Scale,
  Sparkles,
  Clock,
  CheckCircle,
  FileText,
  AlertTriangle,
} from '@/components/ui/Icons';
import { Footer } from '@/components/ui/Footer';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SupportedLanguage } from '@/features/localization/translations';
import { SaveService } from '@/features/persistence/save-service';

export default function FieldManualPage() {
  const [lang, setLang] = useState<SupportedLanguage>('en');

  useEffect(() => {
    async function loadSettings() {
      const s = await SaveService.getSettings();
      if (s?.language) {
        setLang(s.language);
      }
    }
    loadSettings();
  }, []);

  const handleLangChange = async (newLang: SupportedLanguage) => {
    setLang(newLang);
    const s = await SaveService.getSettings();
    if (s) {
      await SaveService.saveSettings({ ...s, language: newLang });
    }
  };

  const isHindi = lang === 'hi';

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--paper-cream)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Navigation Bar */}
      <header
        style={{
          borderBottom: '1px solid var(--border-noir)',
          backgroundColor: 'var(--bg-surface)',
          padding: '16px 24px',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--brass-accent)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={16} />
            <span>{isHindi ? 'केस डॉसियर पर लौटें' : 'Return to Stories & Cases'}</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ink-muted)',
                letterSpacing: '0.1em',
              }}
            >
              HOW TO PLAY & INVESTIGATE
            </span>
            <LanguageSwitcher currentLanguage={lang} onLanguageChange={handleLangChange} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '48px 24px 64px 24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Title Badge Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <span className="stamp-badge stamp-brass" style={{ fontSize: '0.75rem' }}>
            {isHindi ? 'लंदन मेट्रोपॉलिटन जासूस नियमावली' : 'INVESTIGATION & PLAY GUIDE'}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              margin: 0,
              color: 'var(--paper-cream)',
            }}
          >
            {isHindi ? 'जासूस फील्ड मैनुअल एवं अन्वेषण नियमावली' : 'Detective Guide & How to Play'}
          </h1>
          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1rem',
              color: 'var(--ink-muted)',
              lineHeight: 1.6,
            }}
          >
            {isHindi
              ? 'अपराध स्थल की फोरेंसिक जांच, गवाहों से पूछताछ, साक्ष्यों के तार्किक संयोजन तथा निर्णायक आरोप प्रस्तुत करने की अधिकृत प्रक्रिया।'
              : 'How to check crime scenes, question suspects, connect clues in your notebook, and find the real culprit.'}
          </p>
        </div>

        {/* Section 1: Forensic Evidence */}
        <section
          id="forensics"
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Fingerprint size={22} color="var(--crimson-seal)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '१. फोरेंसिक साक्ष्य के पांच वर्ग' : '1. The Four Types of Clues'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.6, margin: 0 }}>
            {isHindi
              ? 'जांच के दौरान आप जिन सुरागों को प्राप्त करते हैं, वे पांच विशिष्ट श्रेणियों में वर्गीकृत होते हैं। हर श्रेणी एक अलग सच्चाई उजागर करती है:'
              : 'Every clue you collect during your story belongs to a specific category. Each gives you a different angle on the truth:'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '8px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                {isHindi ? '• भौतिक साक्ष्य (Physical)' : '• Physical Objects & Items'}
              </strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'घटना स्थल पर मिले हथियार, टूटे हुए गियर, सिफर बॉक्स, और फोरेंसिक निशान।'
                  : 'Items found at the scene, such as keys, broken clock parts, fingerprints, and strange marks.'}
              </span>
            </div>

            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                {isHindi ? '• दस्तावेज (Documents)' : '• Letters & Written Documents'}
              </strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'बैंक ड्राफ्ट, वसीयत के मसौदे, ब्लैकवेल के गुप्त पत्र, और सोसाइटी का रजिस्टर।'
                  : 'Account books, will drafts, letters, secret notes, telegrams, and receipts.'}
              </span>
            </div>

            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                {isHindi ? '• गवाह बयान (Testimony)' : '• Statements & Talks with Suspects'}
              </strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'संदिग्धों के औपचारिक बयान, सुने गए संवाद, और नौकरों की गवाहियां।'
                  : 'Things suspects said during questioning, overheard arguments, and staff statements.'}
              </span>
            </div>

            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                {isHindi ? '• घड़ी व तकनीकी साक्ष्य (Digital / Horological)' : '• Clocks & Technical Proof'}
              </strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'घड़ी के डायल पर रुका हुआ समय, यांत्रिक तंत्र, और तिजोरी की लॉकिंग प्रणाली।'
                  : 'Stopped clock times, tampered locks, safe settings, and mechanical puzzles.'}
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Deduction Board */}
        <section
          id="deductions"
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={22} color="var(--brass-accent)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '२. साक्ष्य निष्कर्ष बोर्ड (Deduction Board)' : '2. Connecting Clues in Your Notebook'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.6, margin: 0 }}>
            {isHindi
              ? 'केवल सुराग इकट्ठा करना काफी नहीं है; आपको उन्हें एक दूसरे से जोड़कर विरोधाभास या गुप्त संबंध खोजने होंगे। अपनी सबूत डायरी (Notebook) में दो सुराग चुनें और "निष्कर्ष जोड़ें" बटन दबाएं।'
              : 'Just finding clues is not enough. You have to connect them to catch lies and uncover hidden motives. In your Clues Notebook, select two clues and tap "Connect Clues" to discover the truth.'}
          </p>
          <div
            style={{
              padding: '16px 20px',
              backgroundColor: 'rgba(201, 151, 56, 0.12)',
              borderLeft: '4px solid var(--brass-accent)',
              borderRadius: '4px',
              fontSize: '0.9rem',
              color: 'var(--ink-charcoal)',
              fontStyle: 'italic',
            }}
          >
            {isHindi
              ? 'उदाहरणास्वरूप: जब आप "रुकी हुई घड़ी (11:42 PM)" को "संदिग्ध का अलिबाई (11:30–12:00 पुस्तकालय)" से जोड़ते हैं, तो अलिबाई का खोखलापन प्रमाणित हो जाता है!'
              : 'For example: Connecting "Stopped Clock at 11:42 PM" with "Arthur\'s Safe Key Log" proves that the safe was opened before the crime happened!'}
          </div>
        </section>

        {/* Section 3: Interrogations */}
        <section
          id="interrogations"
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={22} color="var(--navy-lead)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '३. संदिग्ध पूछताछ एवं समय की पाबंदी' : '3. Questioning Suspects & Managing Time'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.6, margin: 0 }}>
            {isHindi
              ? 'हर निर्णय और पूछताछ में समय व्यतीत होता है। यदि आप व्यर्थ रास्तों पर भटकेंगे, तो गुनहगार साक्ष्य मिटा सकता है या लंदन से भागने की तैयारी कर सकता है।'
              : 'Every choice and question takes time. If you wander down false leads, the guilty person may destroy proof or escape.'}
          </p>
        </section>

        {/* Section 4: Endings & Accusations */}
        <section
          id="endings"
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Scale size={22} color="var(--emerald-verified)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '४. औपचारिक आरोप एवं परिणाम श्रेणियां' : '4. Naming the Culprit & How Endings Work'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.6, margin: 0 }}>
            {isHindi
              ? 'जब आप आश्वस्त हों, तो सबूत डायरी के "अंतिम परिकल्पना व आरोप" टैब में मुख्य आरोपी और अधिकतम ५ समर्थक साक्ष्य चुनकर केस बंद करें:'
              : 'When you are sure who did it, open the "Final Accusation" tab in your notebook, pick the main suspect, and attach up to 5 supporting clues:'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            <div style={{ padding: '14px', border: '1px solid #48bb78', backgroundColor: 'rgba(72, 187, 120, 0.1)', borderRadius: '6px' }}>
              <span className="stamp-badge stamp-triumph" style={{ fontSize: '0.65rem' }}>EXCELLENT SOLVE (80%+)</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-charcoal)', margin: '8px 0 0 0' }}>
                {isHindi ? 'असली दोषी को अकाट्य साक्ष्यों के साथ गिरफ्तार कराया गया।' : 'You caught the real culprit with solid proof and motive.'}
              </p>
            </div>
            <div style={{ padding: '14px', border: '1px solid #ecc94b', backgroundColor: 'rgba(236, 201, 75, 0.1)', borderRadius: '6px' }}>
              <span className="stamp-badge stamp-brass" style={{ fontSize: '0.65rem' }}>PARTIALLY SOLVED (50-79%)</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-charcoal)', margin: '8px 0 0 0' }}>
                {isHindi ? 'दोषी पकड़ा गया, पर पर्याप्त सबूतों के अभाव में षड्यंत्रकारी बच निकले।' : 'You identified the suspect, but missed crucial proof or key accomplices.'}
              </p>
            </div>
            <div style={{ padding: '14px', border: '1px solid #e53e3e', backgroundColor: 'rgba(229, 62, 62, 0.1)', borderRadius: '6px' }}>
              <span className="stamp-badge stamp-alert" style={{ fontSize: '0.65rem' }}>WRONG ACCUSATION (&lt;50%)</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-charcoal)', margin: '8px 0 0 0' }}>
                {isHindi ? 'निर्दोष व्यक्ति पर आरोप लगा, और वास्तविक षड्यंत्रकारी लंदन छोड़ गया।' : 'An innocent person was blamed while the real culprit got away.'}
              </p>
            </div>
          </div>
        </section>

        {/* Back button */}
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--brass-accent)',
              color: '#1a1a1a',
              padding: '12px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 700,
              boxShadow: '0 4px 16px var(--brass-glow)',
            }}
          >
            <Compass size={18} />
            <span>{isHindi ? 'केस डॉसियर खोलें' : 'Open Story Library & Begin'}</span>
          </Link>
        </div>
      </main>

      {/* Persistent Footer */}
      <Footer currentLanguage={lang} onLanguageChange={handleLangChange} />
    </div>
  );
}

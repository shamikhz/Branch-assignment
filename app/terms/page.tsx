'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  ArrowLeft,
  Shield,
  CheckCircle,
  HelpCircle,
  Compass,
} from '@/components/ui/Icons';
import { Footer } from '@/components/ui/Footer';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SupportedLanguage } from '@/features/localization/translations';
import { SaveService } from '@/features/persistence/save-service';

export default function TermsPage() {
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
      {/* Top Header */}
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
            <span>{isHindi ? 'मुख्य पृष्ठ पर लौटें' : 'Return to Stories & Cases'}</span>
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
              TERMS & CONDITIONS
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
          gap: '32px',
        }}
      >
        {/* Title Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <span className="stamp-badge stamp-brass" style={{ fontSize: '0.75rem' }}>
            {isHindi ? 'सेवा की शर्तें' : 'TERMS OF SERVICE'}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              margin: 0,
              color: 'var(--paper-cream)',
            }}
          >
            {isHindi ? 'नियम और सेवा की शर्तें' : 'Terms of Service'}
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
              ? 'हमारे इंटरैक्टिव कहानी प्लेटफॉर्म का उपयोग करने के सरल और पारदर्शी नियम।'
              : 'Simple and clear guidelines for reading and playing interactive stories on Story Vault.'}
          </p>
        </div>

        {/* Section 1: Welcome & Overview */}
        <section
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={22} color="var(--brass-accent)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '१. स्वागत एवं स्वीकृति' : '1. Welcome & Acceptance'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'इस वेबसाइट का उपयोग करके, आप इन सरल नियमों से सहमत होते हैं। हमारा उद्देश्य आपको रहस्य, रोमांच और शाखाबद्ध निर्णयों से भरी बेहतरीन इंटरैक्टिव कहानियां प्रदान करना है।'
              : 'By using this website and playing stories, you agree to these simple terms. Our aim is to provide enjoyable interactive stories where your choices shape the ending.'}
          </p>
        </section>

        {/* Section 2: How Stories & Progress Work */}
        <section
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle size={22} color="var(--emerald-verified)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '२. खेल और आपकी प्रगति' : '2. How Gameplay & Saves Work'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'सभी कहानियां खेलने के लिए स्वतंत्र हैं। आपके द्वारा खोजे गए सुराग, लिए गए निर्णय और सहेजे गए केस सीधे आपके अपने ब्राउज़र (IndexedDB) में सुरक्षित रहते हैं। हम आपका कोई भी निजी डेटा किसी सर्वर पर स्टोर नहीं करते।'
              : 'All stories are free to read and play. Your progress, clues, and choices stay directly inside your own web browser. You can reset your progress anytime from Settings.'}
          </p>
        </section>

        {/* Section 3: Intellectual Property */}
        <section
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={22} color="var(--brass-accent)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '३. बौद्धिक संपदा और कॉपीराइट' : '3. Original Stories & Content'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'सभी जासूसी कहानियां, पात्र, संवाद और परिदृश्य मूल रचनाएं हैं। आप व्यक्तिगत मनोरंजन के लिए इन्हें खेल सकते हैं और दोस्तों के साथ साझा कर सकते हैं।'
              : 'All story episodes, characters, dialogues, and clues are original creations. You are welcome to play and share your experience with friends.'}
          </p>
        </section>

        {/* Section 4: Online Requirements */}
        <section
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Compass size={22} color="var(--brass-accent)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '४. ऑनलाइन कनेक्शन' : '4. Online Connection Requirements'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'नए केस और एपिसोड शुरू करने के लिए एक सक्रिय इंटरनेट कनेक्शन आवश्यक है ताकि नवीनतम कहानी पैकेज लोड हो सके।'
              : 'An active internet connection is needed to open new stories so all chapters and choices load properly.'}
          </p>
        </section>

        {/* Section 5: Questions & Feedback */}
        <section
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HelpCircle size={22} color="var(--brass-accent)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '५. प्रश्न एवं संपर्क' : '5. Questions & Feedback'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'यदि आपके पास इन शर्तों या कहानियों के संबंध में कोई प्रश्न या प्रतिक्रिया है, तो कृपया बेझिझक संपर्क करें।'
              : 'If you have any feedback or questions, feel free to reach out through our About page or Settings.'}
          </p>
        </section>
      </main>

      <Footer
        currentLanguage={lang}
        onLanguageChange={handleLangChange}
      />
    </div>
  );
}

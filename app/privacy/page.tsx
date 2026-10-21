'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  ArrowLeft,
  Lock,
  HardDrive,
  Eye,
  CheckCircle,
  Compass,
} from '@/components/ui/Icons';
import { Footer } from '@/components/ui/Footer';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SupportedLanguage } from '@/features/localization/translations';
import { SaveService } from '@/features/persistence/save-service';

export default function PrivacyPage() {
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
      {/* Header */}
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
              PRIVACY & DATA SECURITY
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
          <span className="stamp-badge stamp-triumph" style={{ fontSize: '0.75rem' }}>
            {isHindi ? '१००% क्लाइंट-साइड गोपनीयता गारंटी' : '100% PRIVATE • SAVED ON YOUR DEVICE'}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              margin: 0,
              color: 'var(--paper-cream)',
            }}
          >
            {isHindi ? 'गोपनीयता नीति एवं डेटा सुरक्षा' : 'Privacy Policy & Data Security'}
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
              ? 'आपकी जासूसी जांच, लिए गए निर्णय और परिकल्पनाएं पूरी तरह आपकी अपनी हैं। हम कोई व्यक्तिगत डेटा या व्यवहार ट्रैक नहीं करते।'
              : 'Your story choices, clues, and conclusions belong entirely to you. We do not track you or collect any personal details.'}
          </p>
        </div>

        {/* Section 1: Zero Telemetry */}
        <section
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={22} color="var(--emerald-verified)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '१. शून्य टेलीमेट्री एवं ट्रैकिंग' : '1. Zero Tracking & No Ads'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'द मिडनाइट सिफर किसी भी प्रकार के विश्लेषणात्मक ट्रैकर, विज्ञापन कुकी या गुप्त टेलीमेट्री का उपयोग नहीं करता है। खेल के दौरान आप जो भी निर्णय लेते हैं या जो भी सुराग खोजते हैं, वह कभी भी किसी बाहरी सर्वर पर नहीं भेजा जाता।'
              : 'Story Vault does not use any tracking cookies, ad pixels, or surveillance scripts. Every clue you find, choice you make, and connection you create stays only on your device.'}
          </p>
        </section>

        {/* Section 2: Storage Disclosures */}
        <section
          id="storage"
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HardDrive size={22} color="var(--navy-lead)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '२. लोकल स्टोरेज एवं IndexedDB सुरक्षा' : '2. Saved Data on Your Device'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'आपकी सक्रिय जांच और पूर्ण केस इतिहास आपके डिवाइस के ब्राउज़र के भीतर सुरक्षित IndexedDB और localStorage में संग्रहीत होते हैं:'
              : 'Your active game, notebook clues, and completed stories are stored safely in your web browser:'}
          </p>

          <ul style={{ color: 'var(--ink-body)', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
            <li>
              <strong>Active Story Progress:</strong>{' '}
              {isHindi ? 'वर्तमान परिदृश्य, खोजे गए सुराग और समय स्थिति।' : 'Current scene, notebook clues, and remaining time.'}
            </li>
            <li>
              <strong>Completed Stories:</strong>{' '}
              {isHindi ? 'समाप्त हुई जांचों का सारांश ताकि आप परिणामों की तुलना कर सकें।' : 'Your final score, endings unlocked, and choices made.'}
            </li>
            <li>
              <strong>Your Preferences:</strong>{' '}
              {isHindi ? 'ध्वनि प्रभाव, दृश्य थीम (सेपिया/चारकोल), फ़ॉन्ट आकार और भाषा प्राथमिकता।' : 'Sound settings, visual theme, text size, and language selection.'}
            </li>
          </ul>

          <p style={{ color: 'var(--ink-muted)', fontSize: '0.88rem', margin: 0, fontStyle: 'italic' }}>
            {isHindi
              ? 'आप सेटिंग्स मोडल में "डेटा रीसेट करें" बटन दबाकर किसी भी समय अपने सभी स्थानीय डेटा को तुरंत मिटा सकते हैं।'
              : 'You can clear all your saved stories and progress at any time from Settings → Reset Progress.'}
          </p>
        </section>

        {/* Section 3: Online-First Architecture */}
        <section
          id="online"
          className="parchment-sheet"
          style={{
            padding: '32px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Lock size={22} color="var(--brass-accent)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? '३. ऑनलाइन सत्यापन एवं साक्ष्य अखंडता' : '3. Story Content Integrity'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'केस की सभी फाइलें और फोरेंसिक स्कीमा लाइव ऑनलाइन सत्यापन के माध्यम से लोड होती हैं। यह सुनिश्चित करता है कि केस की पहेलियां और सुराग किसी स्थानीय छेड़छाड़ के बिना मूल रूप में प्रस्तुत किए जाएं।'
              : 'All story chapters, suspect files, and clues are verified to ensure you get the complete, official storyline without missing scenes or bugs.'}
          </p>
        </section>

        {/* Action Button */}
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
            <span>{isHindi ? 'केस डॉसियर पर लौटें' : 'Return to Stories & Cases'}</span>
          </Link>
        </div>
      </main>

      <Footer currentLanguage={lang} onLanguageChange={handleLangChange} />
    </div>
  );
}

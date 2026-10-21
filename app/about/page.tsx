'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowLeft,
  BookOpen,
  FileCode,
  Shield,
  Sparkles,
  Layers,
  HardDrive,
  Award,
} from '@/components/ui/Icons';
import { Footer } from '@/components/ui/Footer';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SupportedLanguage } from '@/features/localization/translations';
import { SaveService } from '@/features/persistence/save-service';

export default function AboutPage() {
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
              ABOUT STORY VAULT
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
            {isHindi ? 'सेंट-क्लेयर होरोलॉजिकल सोसाइटी' : 'THE ST. CLAIR MYSTERY SOCIETY'}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              margin: 0,
              color: 'var(--paper-cream)',
            }}
          >
            {isHindi ? 'द मिडनाइट सिफर के बारे में' : 'About The Midnight Cipher & Story Vault'}
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
              ? 'लंदन, अक्टूबर १९२८ — रहस्य, शाखाबद्ध निर्णय और यांत्रिक पहेलियों पर आधारित एक इंटरएक्टिव जासूसी अन्वेषण।'
              : 'London, October 1928 — An interactive detective story where your choices, clues, and deductions decide how the mystery ends.'}
          </p>
        </div>

        {/* Narrative & Setting */}
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
            <Compass size={22} color="var(--brass-accent)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? 'ऐतिहासिक पृष्ठभूमि एवं कथा सारांश' : 'Story Background & Setting'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'अक्टूबर १९२८ की एक नम शरद ऋतु की रात, सेंट-क्लेयर होरोलॉजिकल सोसाइटी के प्रतिष्ठित संस्थापक लॉर्ड हेरिंगटन अपनी निजी लाइब्रेरी में मृत पाए गए। उनके हाथ में एक जटिल सिफर बॉक्स था, जिसका यांत्रिक डायल ठीक ११:४२ पर रुका हुआ था। सोसाइटी के चार विशिष्ट सदस्य उस रात उपस्थित थे — और प्रत्येक के पास एक ठोस कारण, विरोधाभासी बयान, और छुपाने के लिए एक रहस्य है।'
              : 'On a foggy October midnight in 1928, Lord Alistair Harrington, founder of the famous St. Clair Clock Society, was found dead in his private library. In his hands was a mysterious puzzle box, its clockwork stopped at exactly 11:42 PM. Four key society members were in the house that night — each with different stories, missing account books, and secrets to hide.'}
          </p>
        </section>

        {/* Engine Specs */}
        <section
          id="engine"
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
            <FileCode size={22} color="var(--navy-lead)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: 0, color: 'var(--ink-charcoal)' }}>
              {isHindi ? 'तकनीकी वास्तुकला एवं गेम इंजन' : 'How the Interactive Engine Works'}
            </h2>
          </div>
          <p style={{ color: 'var(--ink-body)', lineHeight: 1.7, margin: 0 }}>
            {isHindi
              ? 'यह गेम एक पूर्णतः डिटरमिनिस्टिक स्टेट मशीन पर काम करता है। आपके द्वारा लिया गया प्रत्येक निर्णय, अनलॉक किया गया सुराग, और संश्लेषित निष्कर्ष सीधे आगे की जांच की दिशा को प्रभावित करता है:'
              : 'Every choice you make, clue you discover, and connection you create directly changes how the story moves forward and unlocks different endings:'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '8px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                Next.js App Router & TypeScript
              </strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'आधुनिक और तीव्र निष्पादन, पूरी तरह टाइप-सेफ आर्किटेक्चर।'
                  : 'Fast page loading and smooth story navigation on both mobile and desktop.'}
              </span>
            </div>

            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                Story Logic & Branch Checking
              </strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'केस फाइलों के सभी नोड्स, शर्तों, और प्रभावों का कड़ा सत्यापन।'
                  : 'Strict checks ensure every story path, choice, and ending works properly without broken links.'}
              </span>
            </div>

            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                Offline & Local Storage (No Tracking)
              </strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'शून्य ट्रैकिंग; आपकी जांच प्रगति पूरी तरह आपके ब्राउज़र में सुरक्षित रहती है।'
                  : '100% private. Your saved games, clues, and choices stay entirely on your phone or computer.'}
              </span>
            </div>

            <div style={{ padding: '16px', backgroundColor: 'var(--paper-aged)', borderRadius: '6px', border: '1px solid var(--paper-border)' }}>
              <strong style={{ color: 'var(--ink-charcoal)', display: 'block', marginBottom: '6px' }}>
                Built-in Sound Effects
              </strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-body)' }}>
                {isHindi
                  ? 'टाइपराइटर की खटखट, लाख की मुहर और पन्नों की आवाज़ बिना भारी ऑडियो फाइलों के उत्पन्न होती है।'
                  : 'Lightweight sounds like typewriter clicks and paper turns play smoothly without heavy downloads.'}
              </span>
            </div>
          </div>
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
            <span>{isHindi ? 'केस में प्रवेश करें' : 'Start Playing'}</span>
          </Link>
        </div>
      </main>

      <Footer currentLanguage={lang} onLanguageChange={handleLangChange} />
    </div>
  );
}

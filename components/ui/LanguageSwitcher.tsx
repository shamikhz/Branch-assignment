'use client';

import React from 'react';
import { SupportedLanguage } from '@/features/localization/translations';
import { soundEffects } from '@/components/ui/AudioPlayer';
import { triggerGoogleTranslate } from '@/features/localization/google-translate';

interface LanguageSwitcherProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (newLang: SupportedLanguage) => void;
  variant?: 'pill' | 'button' | 'settings';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  variant = 'pill',
}) => {
  const handleToggle = (lang: SupportedLanguage) => {
    soundEffects.playTypewriterClick();
    onLanguageChange(lang);
    triggerGoogleTranslate(lang);
  };

  if (variant === 'settings') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            onClick={() => handleToggle('en')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '6px',
              border: currentLanguage === 'en' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
              backgroundColor: currentLanguage === 'en' ? 'var(--brass-glow)' : 'transparent',
              color: currentLanguage === 'en' ? 'var(--brass-accent)' : 'var(--ink-muted)',
              fontWeight: currentLanguage === 'en' ? 700 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              transition: 'var(--transition-smooth)',
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>🇬🇧</span>
            <span>English</span>
            {currentLanguage === 'en' && <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>✓</span>}
          </button>

          <button
            type="button"
            onClick={() => handleToggle('hi')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '6px',
              border: currentLanguage === 'hi' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
              backgroundColor: currentLanguage === 'hi' ? 'var(--brass-glow)' : 'transparent',
              color: currentLanguage === 'hi' ? 'var(--brass-accent)' : 'var(--ink-muted)',
              fontWeight: currentLanguage === 'hi' ? 700 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              transition: 'var(--transition-smooth)',
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
            <span>हिन्दी (Hindi)</span>
            {currentLanguage === 'hi' && <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>✓</span>}
          </button>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>🌐</span>
          <span>Google Translate Engine: Automatically translates all text across the webapp when toggled.</span>
        </div>
      </div>
    );
  }

  // Header / Pill Variant
  return (
    <div
      role="group"
      aria-label="Language Selector with Google Translate"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 4px',
        borderRadius: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        border: '1px solid var(--border-noir)',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)',
        gap: '2px',
      }}
    >
      <button
        type="button"
        onClick={() => handleToggle('en')}
        title="Switch to English (Powered by Google Translate)"
        style={{
          padding: '4px 10px',
          borderRadius: '16px',
          border: 'none',
          backgroundColor: currentLanguage === 'en' ? 'var(--brass-accent)' : 'transparent',
          color: currentLanguage === 'en' ? '#141414' : 'var(--paper-cream)',
          fontWeight: currentLanguage === 'en' ? 700 : 500,
          fontSize: '0.78rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          transition: 'all 0.15s ease',
        }}
      >
        <span>EN</span>
      </button>

      <button
        type="button"
        onClick={() => handleToggle('hi')}
        title="गूगल अनुवाद: हिन्दी में बदलें (Switch to Hindi via Google Translate)"
        style={{
          padding: '4px 10px',
          borderRadius: '16px',
          border: 'none',
          backgroundColor: currentLanguage === 'hi' ? 'var(--brass-accent)' : 'transparent',
          color: currentLanguage === 'hi' ? '#141414' : 'var(--paper-cream)',
          fontWeight: currentLanguage === 'hi' ? 700 : 500,
          fontSize: '0.78rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          transition: 'all 0.15s ease',
        }}
      >
        <span>हिन्दी</span>
      </button>

      {/* Google Translate Badge */}
      <div
        title="Google Translate Active"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 8px 2px 6px',
          marginLeft: '2px',
          fontSize: '0.68rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--brass-accent)',
          borderLeft: '1px solid var(--border-noir)',
          userSelect: 'none',
        }}
      >
        <span style={{ fontSize: '0.72rem' }}>🌐</span>
        <span style={{ letterSpacing: '0.04em', fontWeight: 600 }}>Google</span>
      </div>
    </div>
  );
};

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowLeft,
  Settings as SettingsIcon,
  Award,
  BookOpen,
  GitCompare,
  Menu,
  X,
  FileCode,
  Sparkles,
  Shield,
  Layers,
  User,
} from '@/components/ui/Icons';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SupportedLanguage, getTranslation } from '@/features/localization/translations';
import { soundEffects } from '@/components/ui/AudioPlayer';

export interface AppHeaderProps {
  currentView: 'home' | 'library' | 'career_hub' | 'relationships_hub' | 'compare' | 'ending';
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenSettings: () => void;
  onNavigate: (view: 'home' | 'library' | 'career_hub' | 'compare') => void;
  completedRunsCount?: number;
  onCompareRuns?: () => void;
  titleOverride?: string;
  subtitleOverride?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentView,
  currentLanguage,
  onLanguageChange,
  onOpenSettings,
  onNavigate,
  completedRunsCount = 0,
  onCompareRuns,
  titleOverride,
  subtitleOverride,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const t = getTranslation(currentLanguage);
  const isHindi = currentLanguage === 'hi';

  // Close mobile menu on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Lock background scroll when mobile menu is open on small viewports
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    soundEffects.playTypewriterClick();
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (view: 'home' | 'library' | 'career_hub' | 'compare') => {
    soundEffects.playPageTurn();
    setIsMobileMenuOpen(false);
    onNavigate(view);
  };

  // Determine Titles based on current view
  let departmentTitle = t.appTitle;
  let departmentSubtitle = t.appSubtitle;
  let iconComponent = <Compass size={22} color="var(--brass-accent)" />;

  if (currentView === 'library') {
    departmentTitle = isHindi ? 'रहस्य एवं जासूसी विभाग' : 'Mystery & Investigation';
    departmentSubtitle = isHindi ? 'केंद्रीय अन्वेषण संग्रह • 6 केस' : 'Detective Mysteries & Clues • 6 Cases';
    iconComponent = <Compass size={22} color="var(--brass-accent)" />;
  } else if (currentView === 'career_hub') {
    departmentTitle = isHindi ? 'करियर एवं कौशल विकास' : 'Career & Life Skills';
    departmentSubtitle = isHindi ? 'व्यावहारिक सिमुलेशन एवं निर्णय मंच' : 'Real-Life Career Choices & Workplace Skills • 12 Stories';
    iconComponent = <Award size={22} color="#38bdf8" />;
  } else if (currentView === 'relationships_hub') {
    departmentTitle = isHindi ? 'रिश्ते एवं सामाजिक जीवन' : 'Relationships & Social Life';
    departmentSubtitle = isHindi ? 'दोस्ती, परिवार और सामाजिक निर्णय' : 'Friendship, Dating, Family & Social Choices • 12 Stories';
    iconComponent = <User size={22} color="#ec4899" />;
  } else if (currentView === 'compare') {
    departmentTitle = isHindi ? 'केस तुलना संग्रह' : 'Compare Story Choices';
    departmentSubtitle = isHindi ? 'अन्वेषण शाखाओं का सीधा विश्लेषण' : 'Compare Your Choices Side-by-Side';
    iconComponent = <GitCompare size={22} color="var(--brass-accent)" />;
  }

  if (titleOverride) departmentTitle = titleOverride;
  if (subtitleOverride) departmentSubtitle = subtitleOverride;

  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(20, 22, 28, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-noir)',
        width: '100%',
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Left Side: Brand & Department Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          {currentView !== 'home' ? (
            <button
              onClick={() => handleNavClick('home')}
              title={isHindi ? 'सभी श्रेणियों पर लौटें' : 'Back to All Categories'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'var(--bg-surface-elevated)',
                color: 'var(--brass-accent)',
                border: '1px solid var(--border-noir)',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brass-accent)';
                e.currentTarget.style.boxShadow = '0 0 8px var(--brass-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-noir)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ArrowLeft size={15} />
              <span className="back-btn-text">{isHindi ? 'श्रेणियां' : 'All Categories'}</span>
            </button>
          ) : null}

          <div
            onClick={() => {
              if (currentView !== 'home') handleNavClick('home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: currentView !== 'home' ? 'pointer' : 'default',
              minWidth: 0,
            }}
          >
            <div style={{ flexShrink: 0 }}>{iconComponent}</div>
            <div style={{ minWidth: 0 }}>
              <h1
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--paper-cream)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {departmentTitle}
              </h1>
              <div
                className="header-subtitle-desktop"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--ink-muted)',
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {departmentSubtitle}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Desktop Actions */}
        <div className="header-desktop-actions">
          {/* Language Switcher */}
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            variant="pill"
          />

          {/* Settings Button */}
          <button
            onClick={() => {
              soundEffects.playTypewriterClick();
              onOpenSettings();
            }}
            title={t.settings}
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-noir)',
              color: 'var(--ink-muted)',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--brass-accent)';
              e.currentTarget.style.borderColor = 'var(--brass-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--ink-muted)';
              e.currentTarget.style.borderColor = 'var(--border-noir)';
            }}
          >
            <SettingsIcon size={18} />
          </button>
        </div>

        {/* Right Side: Mobile Hamburger Button */}
        <div className="header-mobile-toggle">
          <button
            ref={toggleBtnRef}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-dropdown"
            style={{
              width: '42px',
              height: '42px',
              minWidth: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isMobileMenuOpen ? 'var(--brass-accent)' : 'var(--bg-surface-elevated)',
              color: isMobileMenuOpen ? '#121316' : 'var(--brass-accent)',
              border: isMobileMenuOpen ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: isMobileMenuOpen ? '0 0 12px var(--brass-glow)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Dropdown Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 49,
            }}
          />

          {/* Dropdown Container */}
          <div
            id="mobile-navigation-dropdown"
            ref={menuRef}
            className="animate-fade-in"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(16, 18, 24, 0.98)',
              borderBottom: '2px solid var(--border-noir)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85)',
              maxHeight: 'calc(100vh - 70px)',
              overflowY: 'auto',
              padding: '16px 20px 28px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              zIndex: 50,
            }}
          >
            {/* Header in Dropdown */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border-noir)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={18} color="var(--brass-accent)" />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--paper-cream)',
                  }}
                >
                  {isHindi ? 'नेविगेशन और फ़ीचर्स' : 'Navigation & Features'}
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--brass-accent)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                v3.2 Active
              </span>
            </div>

            {/* Solved Cases / Run Comparison if available */}
            {completedRunsCount > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const el = document.getElementById('completed-archives-home') || document.getElementById('completed-archives');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      handleNavClick('home');
                      setTimeout(() => {
                        document.getElementById('completed-archives-home')?.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-noir)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--paper-cream)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(39, 174, 96, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#27ae60',
                      }}
                    >
                      🏆
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>
                        {isHindi ? 'सुलझे हुए केस अभिलेखागार' : 'Completed Stories'}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--ink-muted)' }}>
                        {completedRunsCount} {isHindi ? 'सफल अन्वेषण रिकॉर्ड' : 'Saved story playthroughs'}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#27ae60',
                    }}
                  >
                    #{completedRunsCount}
                  </span>
                </button>

                {completedRunsCount >= 2 && onCompareRuns && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onCompareRuns();
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-noir)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--paper-cream)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(201, 151, 56, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--brass-accent)',
                        }}
                      >
                        ⚖️
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>
                          {isHindi ? 'केस तुलना विश्लेषण' : 'Compare Story Choices'}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--ink-muted)' }}>
                          {isHindi ? 'अलग-अलग निर्णयों की तुलना करें' : 'See how your choices changed each story outcome'}
                        </div>
                      </div>
                    </div>
                    <span style={{ color: 'var(--brass-accent)', fontSize: '0.85rem' }}>→</span>
                  </button>
                )}
              </div>
            )}

            {/* Language Selector in Dropdown */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-noir)',
                borderRadius: '8px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--ink-muted)',
                    letterSpacing: '0.06em',
                  }}
                >
                  🌐 {isHindi ? 'भाषा चयन (Language)' : 'Language Selection'}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--brass-accent)' }}>Google Translate</span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('en');
                  }}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '6px',
                    border: currentLanguage === 'en' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                    backgroundColor: currentLanguage === 'en' ? 'rgba(201, 151, 56, 0.18)' : 'transparent',
                    color: currentLanguage === 'en' ? 'var(--brass-accent)' : 'var(--ink-muted)',
                    fontWeight: currentLanguage === 'en' ? 700 : 500,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <span>🇬🇧</span>
                  <span>English</span>
                  {currentLanguage === 'en' && <span>✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('hi');
                  }}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '6px',
                    border: currentLanguage === 'hi' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                    backgroundColor: currentLanguage === 'hi' ? 'rgba(201, 151, 56, 0.18)' : 'transparent',
                    color: currentLanguage === 'hi' ? 'var(--brass-accent)' : 'var(--ink-muted)',
                    fontWeight: currentLanguage === 'hi' ? 700 : 500,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <span>🇮🇳</span>
                  <span>हिन्दी</span>
                  {currentLanguage === 'hi' && <span>✓</span>}
                </button>
              </div>
            </div>

            {/* Audio & Preferences in Dropdown */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                soundEffects.playTypewriterClick();
                onOpenSettings();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border-noir)',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--paper-cream)',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--paper-cream)',
                  }}
                >
                  <SettingsIcon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>
                    {isHindi ? 'ऑडियो एवं दृश्य सेटिंग्स' : 'Sound & Display Settings'}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--ink-muted)' }}>
                    {isHindi ? 'टाइपराइटर ध्वनि, फॉन्ट आकार एवं थीम' : 'Sound effects, font size & dark mode'}
                  </div>
                </div>
              </div>
              <span style={{ color: 'var(--ink-muted)', fontSize: '0.85rem' }}>⚙️</span>
            </button>

            {/* Quick System Links */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
                paddingTop: '6px',
              }}
            >
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-noir)',
                  color: 'var(--ink-muted)',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                <span>ℹ️</span>
                <span>{isHindi ? 'मंच विवरण' : 'About'}</span>
              </Link>

              <Link
                href="/manual"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-noir)',
                  color: 'var(--ink-muted)',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                <span>📖</span>
                <span>{isHindi ? 'फ़ील्ड मैनुअल' : 'How to Play'}</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  BookOpen,
  Shield,
  ArrowUp,
  GitCompare,
  Settings as SettingsIcon,
  Sparkles,
  Layers,
  FileText,
  HelpCircle,
} from '@/components/ui/Icons';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { getTranslation, SupportedLanguage } from '@/features/localization/translations';

export interface FooterProps {
  currentLanguage?: SupportedLanguage;
  onLanguageChange?: (lang: SupportedLanguage) => void;
  onOpenSettings?: () => void;
  onCompareRuns?: () => void;
}

export function Footer({
  currentLanguage = 'en',
  onLanguageChange,
  onOpenSettings,
  onCompareRuns,
}: FooterProps) {
  const t = getTranslation(currentLanguage);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        marginTop: 'auto',
        borderTop: '2px solid var(--border-noir)',
        backgroundColor: 'var(--bg-surface)',
        position: 'relative',
        zIndex: 10,
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.35)',
      }}
    >
      {/* Decorative top brass accent line */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, var(--brass-accent) 50%, transparent 100%)',
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '44px 24px 28px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        {/* Header Ribbon of Footer: App Brand & Status */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border-noir)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(201, 151, 56, 0.12)',
                border: '1px solid var(--brass-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px var(--brass-glow)',
              }}
            >
              <Compass size={22} color="var(--brass-accent)" />
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--paper-cream)',
                }}
              >
                {t.appTitle}
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--ink-muted)',
                  marginTop: '2px',
                }}
              >
                {t.footerMotto}
              </div>
            </div>
          </div>

          {/* Controls: Online Badge, Language Switcher, Settings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            {/* Live Online Badge in simple English */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: 'rgba(39, 103, 73, 0.15)',
                border: '1px solid var(--emerald-verified)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#68d391',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#48bb78',
                  boxShadow: '0 0 8px #48bb78',
                  display: 'inline-block',
                }}
              />
              <span>{t.footerOnlineStatus}</span>
            </div>

            {/* Language Switcher */}
            {onLanguageChange && (
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
              />
            )}

            {/* Settings Trigger */}
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                aria-label={t.settings}
                title={t.settings}
                style={{
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-noir)',
                  color: 'var(--paper-cream)',
                  borderRadius: '6px',
                  padding: '7px 12px',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'border-color 0.2s',
                }}
              >
                <SettingsIcon size={14} color="var(--brass-accent)" />
                <span>{t.settings}</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Clean Columns: About, How It Works, Categories, Terms & Privacy */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Column 1: About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--brass-accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <HelpCircle size={16} />
              <span>{t.footerColAbout}</span>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link
                  href="/about"
                  style={{
                    color: 'var(--paper-cream)',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ color: 'var(--brass-accent)' }}>•</span>
                  <span>{t.footerAboutUs}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manual"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerHowStoriesWork}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#faq"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerFAQ}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#contact"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerContact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: How It Works */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--brass-accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <BookOpen size={16} />
              <span>{t.footerColHowItWorks}</span>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link
                  href="/manual"
                  style={{
                    color: 'var(--paper-cream)',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ color: 'var(--brass-accent)' }}>•</span>
                  <span>{t.footerHowToPlay}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manual#forensics"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerCluesEvidence}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manual#deductions"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerConnectingClues}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manual#interrogations"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerSuspectInterviews}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manual#endings"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerStoryEndings}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--brass-accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Layers size={16} />
              <span>{t.footerColCategories}</span>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link
                  href="/"
                  style={{
                    color: 'var(--paper-cream)',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ color: 'var(--brass-accent)' }}>•</span>
                  <span>{t.footerAllCategories}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerMysteryCat}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerAdventureCat}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerFantasyCat}</span>
                </Link>
              </li>
              {onCompareRuns && (
                <li>
                  <button
                    onClick={onCompareRuns}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--brass-accent)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textAlign: 'left',
                    }}
                    className="footer-nav-link"
                  >
                    <GitCompare size={14} />
                    <span>{t.compareRuns}</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Terms & Privacy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--brass-accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Shield size={16} />
              <span>{t.footerColLegal}</span>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link
                  href="/terms"
                  style={{
                    color: 'var(--paper-cream)',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ color: 'var(--brass-accent)' }}>•</span>
                  <span>{t.footerTermsOfService}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerPrivacyPolicy}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#storage"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerDataStorage}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#online"
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  <span style={{ opacity: 0.5 }}>—</span>
                  <span>{t.footerOnlineRequirements}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Storage Note & Scroll-to-Top */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid var(--border-noir)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.78rem',
            color: 'var(--ink-muted)',
          }}
        >
          <div>
            <div>© 2026 {t.appTitle}. {t.footerAllRights}</div>
            <div style={{ marginTop: '3px', fontSize: '0.74rem', opacity: 0.85 }}>
              {t.footerStorageNotice}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
              Built with Next.js & React
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-noir)',
                color: 'var(--paper-cream)',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
              aria-label={t.footerBackToTop}
            >
              <span>{t.footerBackToTop}</span>
              <ArrowUp size={13} color="var(--brass-accent)" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

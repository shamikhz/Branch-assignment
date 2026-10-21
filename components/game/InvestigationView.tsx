'use client';

import React, { useState } from 'react';
import {
  Episode,
  GameState,
  Scenario,
  Choice,
} from '@/features/episodes/types';
import { canMakeChoice } from '@/features/game-engine/engine';
import { soundEffects } from '@/components/ui/AudioPlayer';
import {
  MapPin,
  Clock,
  BookOpen,
  Lock,
  Compass,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  Eye,
  Settings as SettingsIcon,
  Home,
  Menu,
  X,
  RotateCcw,
} from '@/components/ui/Icons';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { getTranslation, SupportedLanguage } from '@/features/localization/translations';
import { getEpisodeBackgroundImage } from '@/features/episodes/backgrounds';

interface InvestigationViewProps {
  episode: Episode;
  gameState: GameState;
  onMakeChoice: (choiceId: string) => void;
  onOpenNotebook: (initialTab?: 'clues' | 'connections' | 'suspects' | 'hypothesis') => void;
  onOpenSettings: () => void;
  onReturnToMenu: () => void;
  lastEvents: string[];
  currentLanguage?: SupportedLanguage;
  onLanguageChange?: (lang: SupportedLanguage) => void;
}

export const InvestigationView: React.FC<InvestigationViewProps> = ({
  episode,
  gameState,
  onMakeChoice,
  onOpenNotebook,
  onOpenSettings,
  onReturnToMenu,
  lastEvents,
  currentLanguage = 'en',
  onLanguageChange,
}) => {
  const t = getTranslation(currentLanguage);
  const [hoveredChoice, setHoveredChoice] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const currentScenario: Scenario | undefined = episode.scenarios[gameState.currentScenarioId];

  if (!currentScenario) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Scenario not found: {gameState.currentScenarioId}</h2>
        <button
          onClick={onReturnToMenu}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            minHeight: 'var(--touch-target-min, 44px)',
            background: 'var(--brass-accent)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          Return to Library
        </button>
      </div>
    );
  }

  const handleChoiceClick = (choice: Choice) => {
    if (isTransitioning) return;
    const check = canMakeChoice(choice, gameState, episode);
    if (!check.allowed) {
      soundEffects.playStampThud();
      return;
    }
    setIsTransitioning(true);
    soundEffects.playTypewriterClick();
    onMakeChoice(choice.id);
    setTimeout(() => setIsTransitioning(false), 250);
  };

  const getPreviewBadgeStyle = (preview?: Choice['consequencePreview']) => {
    switch (preview) {
      case 'Forensic':
        return { color: '#c99738', bg: 'rgba(201, 151, 56, 0.15)', border: 'rgba(201, 151, 56, 0.4)' };
      case 'Inquisitive':
        return { color: '#4a90e2', bg: 'rgba(74, 144, 226, 0.15)', border: 'rgba(74, 144, 226, 0.4)' };
      case 'Deductive':
        return { color: '#27ae60', bg: 'rgba(39, 174, 96, 0.15)', border: 'rgba(39, 174, 96, 0.4)' };
      case 'Risky':
        return { color: '#e74c3c', bg: 'rgba(231, 76, 60, 0.15)', border: 'rgba(231, 76, 60, 0.4)' };
      case 'Direct':
      default:
        return { color: '#bdc3c7', bg: 'rgba(189, 195, 199, 0.15)', border: 'rgba(189, 195, 199, 0.4)' };
    }
  };

  const totalClues = Object.keys(episode.clues).length;
  const discoveredCluesCount = gameState.discoveredClueIds.length;
  const totalConnections = episode.connections?.length || 0;
  const connectionsCount = gameState.formedConnectionIds.length;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(12, 14, 18, 0.86), rgba(12, 14, 18, 0.94)), url(${getEpisodeBackgroundImage(episode.id)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--paper-cream)',
      }}
    >
      {/* Top Detective Header Bar */}
      <header
        style={{
          borderBottom: '1px solid var(--border-noir)',
          backgroundColor: 'rgba(20, 22, 28, 0.92)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onReturnToMenu();
            }}
            title="Return to Menu"
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-noir)',
              color: 'var(--ink-muted)',
              padding: '6px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              flexShrink: 0,
            }}
          >
            <Home size={15} />
            <span className="back-btn-text">{t.library}</span>
          </button>

          <div style={{ minWidth: 0 }}>
            <span
              className="header-subtitle-desktop"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--brass-accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              {t.caseFileNumber} #{episode.id.slice(0, 14)}
            </span>
            <h2
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--paper-cream)',
                margin: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {episode.title}
            </h2>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="header-desktop-actions">
          {onLanguageChange && (
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              variant="pill"
            />
          )}

          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onOpenNotebook('clues');
            }}
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--brass-accent)',
              color: 'var(--brass-accent)',
              padding: '7px 14px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              boxShadow: '0 2px 8px var(--brass-glow)',
              transition: 'var(--transition-smooth)',
            }}
          >
            <BookOpen size={16} />
            <span>{t.evidenceNotebook}</span>
            <span
              style={{
                background: 'var(--brass-accent)',
                color: '#1a1a1a',
                padding: '1px 6px',
                borderRadius: '10px',
                fontSize: '0.72rem',
                fontWeight: 700,
              }}
            >
              {discoveredCluesCount}/{totalClues}
            </span>
          </button>

          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onOpenNotebook('connections');
            }}
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-noir)',
              color: 'var(--paper-cream)',
              padding: '7px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
            }}
          >
            <Sparkles size={14} color="#27ae60" />
            <span>{t.deductions} ({connectionsCount}/{totalConnections})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playTypewriterClick();
              onOpenSettings();
            }}
            title="Settings"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-noir)',
              color: 'var(--ink-muted)',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SettingsIcon size={18} />
          </button>
        </div>

        {/* Mobile Header Right: Primary Notebook Action + Hamburger */}
        <div style={{ display: 'none' }} className="header-mobile-toggle">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Primary Action Button always accessible */}
            <button
              onClick={() => {
                soundEffects.playPageTurn();
                onOpenNotebook('clues');
              }}
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--brass-accent)',
                color: 'var(--brass-accent)',
                padding: '6px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                boxShadow: '0 2px 6px var(--brass-glow)',
              }}
            >
              <BookOpen size={15} />
              <span>{discoveredCluesCount}/{totalClues}</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => {
                soundEffects.playTypewriterClick();
                setIsMobileMenuOpen((prev) => !prev);
              }}
              aria-label={isMobileMenuOpen ? 'Close case menu' : 'Open case menu'}
              aria-expanded={isMobileMenuOpen}
              style={{
                width: '40px',
                height: '40px',
                minWidth: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isMobileMenuOpen ? 'var(--brass-accent)' : 'var(--bg-surface-elevated)',
                color: isMobileMenuOpen ? '#121316' : 'var(--brass-accent)',
                border: isMobileMenuOpen ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Dropdown Menu for Investigation View */}
        {isMobileMenuOpen && (
          <>
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: '56px',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(4px)',
                zIndex: 49,
              }}
            />
            <div
              className="animate-fade-in"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'rgba(16, 18, 24, 0.98)',
                borderBottom: '2px solid var(--border-noir)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85)',
                padding: '16px 20px 24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                zIndex: 50,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--border-noir)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--brass-accent)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {t.caseFileNumber} #{episode.id.slice(0, 14)}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                  Scene: {currentScenario.id}
                </span>
              </div>

              {/* Deductions & Connections */}
              <button
                onClick={() => {
                  soundEffects.playPageTurn();
                  setIsMobileMenuOpen(false);
                  onOpenNotebook('connections');
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
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={16} color="#27ae60" />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{t.deductions}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                      Form forensic theories & links
                    </div>
                  </div>
                </div>
                <span style={{ color: '#27ae60', fontSize: '0.8rem', fontWeight: 700 }}>
                  {connectionsCount}/{totalConnections}
                </span>
              </button>

              {/* Language Selector */}
              {onLanguageChange && (
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-noir)',
                    backgroundColor: 'var(--bg-surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', fontWeight: 600 }}>
                    LANGUAGE / भाषा
                  </span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange('en');
                        setIsMobileMenuOpen(false);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '6px',
                        border: currentLanguage === 'en' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                        backgroundColor: currentLanguage === 'en' ? 'rgba(201, 151, 56, 0.2)' : 'transparent',
                        color: currentLanguage === 'en' ? 'var(--brass-accent)' : 'var(--ink-muted)',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                      }}
                    >
                      🇬🇧 English {currentLanguage === 'en' && '✓'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange('hi');
                        setIsMobileMenuOpen(false);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '6px',
                        border: currentLanguage === 'hi' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                        backgroundColor: currentLanguage === 'hi' ? 'rgba(201, 151, 56, 0.2)' : 'transparent',
                        color: currentLanguage === 'hi' ? 'var(--brass-accent)' : 'var(--ink-muted)',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                      }}
                    >
                      🇮🇳 हिन्दी {currentLanguage === 'hi' && '✓'}
                    </button>
                  </div>
                </div>
              )}

              {/* Audio & Settings */}
              <button
                onClick={() => {
                  soundEffects.playTypewriterClick();
                  setIsMobileMenuOpen(false);
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
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SettingsIcon size={16} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Preferences</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                      Sound effects, volume & themes
                    </div>
                  </div>
                </div>
                <span>⚙️</span>
              </button>

              <div style={{ height: '1px', backgroundColor: 'var(--border-noir)', margin: '4px 0' }} />

              {/* Return to Library */}
              <button
                onClick={() => {
                  soundEffects.playPageTurn();
                  setIsMobileMenuOpen(false);
                  onReturnToMenu();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-noir)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  color: 'var(--brass-accent)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Home size={16} />
                <span>Back to Stories</span>
              </button>
            </div>
          </>
        )}
      </header>

      {/* Main Narrative Investigation Container */}
      <main
        style={{
          flex: 1,
          maxWidth: '860px',
          width: '100%',
          margin: '0 auto',
          padding: '36px 20px 60px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        {/* Location & Time Stamp Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-noir)',
            paddingBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="var(--brass-accent)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--brass-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 600,
              }}
            >
              {currentScenario.location}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--ink-muted)', fontSize: '0.85rem' }}>
            <Clock size={15} />
            <span>{episode.timeSetting}</span>
          </div>
        </div>

        {/* Events notification toast (if newly triggered consequence or flag) */}
        {lastEvents && lastEvents.length > 0 && (
          <div
            style={{
              padding: '12px 18px',
              backgroundColor: 'rgba(201, 151, 56, 0.12)',
              borderLeft: '4px solid var(--brass-accent)',
              borderRadius: '4px',
              fontSize: '0.9rem',
              color: 'var(--paper-cream)',
            }}
          >
            {lastEvents.map((event, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={14} color="var(--brass-accent)" />
                <span>{event}</span>
              </div>
            ))}
          </div>
        )}

        {/* Narrative Parchment Reading Section */}
        <article
          className="parchment-sheet animate-fade-in"
          style={{
            padding: '36px 36px 40px 36px',
            borderRadius: '6px',
          }}
        >
          <header style={{ marginBottom: '24px' }}>
            <h1
              style={{
                fontSize: '2rem',
                color: 'var(--ink-paper-dark)',
                marginBottom: '8px',
                lineHeight: 1.25,
              }}
            >
              {currentScenario.title}
            </h1>
            <div
              style={{
                width: '60px',
                height: '3px',
                backgroundColor: 'var(--brass-accent)',
                borderRadius: '2px',
              }}
            />
          </header>

          {/* Narrative Paragraphs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              fontSize: 'var(--narrative-font-size, 1.15rem)',
              lineHeight: 'var(--narrative-line-height, 1.8)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--ink-charcoal)',
            }}
          >
            {(Array.isArray(currentScenario.narrative) ? currentScenario.narrative : [currentScenario.narrative]).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Character Dialogue Block (if any) */}
          {currentScenario.dialogue && currentScenario.dialogue.length > 0 && (
            <section
              style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px dashed var(--paper-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {currentScenario.dialogue.map((line, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--paper-aged)',
                    borderLeft: '4px solid var(--navy-lead)',
                    padding: '14px 18px',
                    borderRadius: '0 6px 6px 0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        color: 'var(--navy-lead)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {line.speaker}
                    </span>
                    {line.mood && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontStyle: 'italic',
                          color: 'var(--ink-muted)',
                          padding: '1px 6px',
                          backgroundColor: 'rgba(0,0,0,0.06)',
                          borderRadius: '3px',
                        }}
                      >
                        [{line.mood}]
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--ink-charcoal)',
                      margin: 0,
                    }}
                  >
                    &ldquo;{line.text}&rdquo;
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Clues Discovered in this Scenario Callout */}
          {currentScenario.cluesDiscovered && currentScenario.cluesDiscovered.length > 0 && (
            <div
              style={{
                marginTop: '28px',
                padding: '16px 20px',
                backgroundColor: 'rgba(39, 103, 73, 0.08)',
                border: '1px solid var(--emerald-verified)',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="stamp-badge stamp-triumph">Clue Found</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--emerald-verified)', fontWeight: 600 }}>
                  Saved in your notebook
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {currentScenario.cluesDiscovered.map((clueId) => {
                  const clue = episode.clues[clueId];
                  return (
                    <button
                      key={clueId}
                      onClick={() => {
                        soundEffects.playPageTurn();
                        onOpenNotebook('clues');
                      }}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#fff',
                        border: '1px solid var(--paper-border)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--ink-charcoal)',
                      }}
                    >
                      <Eye size={14} color="var(--emerald-verified)" />
                      <span>{clue ? clue.title : clueId}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </article>

        {/* Branching Detective Choices Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--brass-accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              {t.actionableLeads}
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-noir)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {currentScenario.choices.map((choice) => {
              const check = canMakeChoice(choice, gameState, episode);
              const isLocked = !check.allowed;
              const badge = getPreviewBadgeStyle(choice.consequencePreview);
              const isHovered = hoveredChoice === choice.id;

              return (
                <button
                  key={choice.id}
                  type="button"
                  disabled={isLocked || isTransitioning}
                  aria-disabled={isLocked}
                  onMouseEnter={() => {
                    setHoveredChoice(choice.id);
                    if (!isLocked) soundEffects.playTypewriterClick();
                  }}
                  onMouseLeave={() => setHoveredChoice(null)}
                  onClick={() => !isLocked && handleChoiceClick(choice)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    minHeight: 'var(--touch-target-min, 44px)',
                    backgroundColor: isLocked
                      ? 'rgba(26, 28, 34, 0.4)'
                      : isHovered
                      ? 'var(--bg-surface-elevated)'
                      : 'var(--bg-surface)',
                    border: isLocked
                      ? '1px dashed #3a3f4d'
                      : isHovered
                      ? `1px solid var(--brass-accent)`
                      : '1px solid var(--border-noir)',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    transition: 'var(--transition-smooth)',
                    opacity: isLocked ? 0.65 : 1,
                    boxShadow: isHovered && !isLocked ? '0 4px 16px rgba(0,0,0,0.4)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      {isLocked ? (
                        <Lock size={16} color="#8e2b2b" style={{ flexShrink: 0 }} />
                      ) : (
                        <ChevronRight
                          size={16}
                          color={isHovered ? 'var(--brass-accent)' : 'var(--ink-muted)'}
                          style={{
                            flexShrink: 0,
                            transform: isHovered ? 'translateX(3px)' : 'none',
                            transition: 'var(--transition-smooth)',
                          }}
                        />
                      )}
                      <span
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 500,
                          color: isLocked ? '#8e94a0' : 'var(--paper-cream)',
                          lineHeight: 1.4,
                        }}
                      >
                        {choice.text}
                      </span>
                    </div>

                    {/* Consequence Preview Tag */}
                    {choice.consequencePreview && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          color: badge.color,
                          backgroundColor: badge.bg,
                          border: `1px solid ${badge.border}`,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          flexShrink: 0,
                        }}
                      >
                        {choice.consequencePreview}
                      </span>
                    )}
                  </div>

                  {/* Contextual Flavor Text */}
                  {choice.flavor && !isLocked && (
                    <div
                      style={{
                        paddingLeft: '26px',
                        fontSize: '0.85rem',
                        color: 'var(--ink-muted)',
                        fontStyle: 'italic',
                      }}
                    >
                      {choice.flavor}
                    </div>
                  )}

                  {/* Lock Reason Explanation */}
                  {isLocked && check.reason && (
                    <div
                      style={{
                        paddingLeft: '26px',
                        fontSize: '0.82rem',
                        color: '#d96c6c',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <AlertTriangle size={13} />
                      <span>{check.reason}</span>
                    </div>
                  )}

                  {/* Missable Lead Warning */}
                  {choice.isMissableLead && !isLocked && (
                    <div
                      style={{
                        paddingLeft: '26px',
                        fontSize: '0.8rem',
                        color: 'var(--brass-accent)',
                      }}
                    >
                      * Choosing this path may close off other options.
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  CareerPillar,
  CareerSimulationMetadata,
  CareerPathwayInfo,
  SkillTreeNode,
} from '@/features/career/types';
import {
  CAREER_SIMULATIONS_METADATA,
  CAREER_PATHWAYS,
  SKILL_TREE_NODES,
} from '@/data/career-simulations/catalog';
import {
  Compass,
  ArrowLeft,
  Award,
  Play,
  RotateCcw,
  Check,
  Clock,
  Sparkles,
  Menu,
  X,
} from '@/components/ui/Icons';
import { CompletedRunSummary, GameState } from '@/features/episodes/types';
import { soundEffects } from '@/components/ui/AudioPlayer';
import { Footer } from '@/components/ui/Footer';
import { SupportedLanguage } from '@/features/localization/translations';

interface CareerHubProps {
  onBackToHome: () => void;
  onLaunchSimulation: (simulationId: string) => void;
  activeRunsByEpisode: Record<string, GameState>;
  completedRuns: CompletedRunSummary[];
  language?: SupportedLanguage;
}

type TabMode = 'simulations' | 'pathways' | 'skill_trees';

export const CareerHub: React.FC<CareerHubProps> = ({
  onBackToHome,
  onLaunchSimulation,
  activeRunsByEpisode,
  completedRuns,
  language = 'en',
}) => {
  const [activeTab, setActiveTab] = useState<TabMode>('simulations');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<CareerPillar | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Selected pathway for deep-dive modal
  const [inspectingPathway, setInspectingPathway] = useState<CareerPathwayInfo | null>(null);
  // Selected skill node for deep-dive
  const [inspectingSkill, setInspectingSkill] = useState<SkillTreeNode | null>(null);

  // Set of completed simulation IDs
  const completedSimulationIds = useMemo(() => {
    return new Set(completedRuns.map((r) => r.episodeId));
  }, [completedRuns]);

  // Filtered simulations
  const filteredSimulations = useMemo(() => {
    return CAREER_SIMULATIONS_METADATA.filter((sim) => {
      // Pillar filter
      if (selectedPillar !== 'all' && sim.pillar !== selectedPillar) return false;

      // Tag filter
      if (selectedTag !== 'all' && !sim.tags.includes(selectedTag)) return false;

      // Difficulty filter
      if (selectedDifficulty !== 'all' && sim.difficulty !== selectedDifficulty) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = sim.title.toLowerCase().includes(query);
        const matchesSubtitle = sim.subtitle.toLowerCase().includes(query);
        const matchesCategory = sim.category.toLowerCase().includes(query);
        const matchesTags = sim.tags.some((t) => t.toLowerCase().includes(query));
        const matchesTakeaway = sim.practicalTakeaway.title.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSubtitle && !matchesCategory && !matchesTags && !matchesTakeaway) {
          return false;
        }
      }

      return true;
    });
  }, [selectedPillar, selectedTag, selectedDifficulty, searchQuery]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    CAREER_SIMULATIONS_METADATA.forEach((sim) => {
      sim.tags.forEach((tag) => set.add(tag));
    });
    return Array.from(set);
  }, []);

  const handleLaunch = (simId: string) => {
    soundEffects.playPageTurn();
    onLaunchSimulation(simId);
  };

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
      {/* ─── TOP NAVIGATION BAR ─── */}
      <header
        style={{
          padding: '12px 20px',
          borderBottom: '1px solid var(--border-noir)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(20, 22, 28, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onBackToHome();
            }}
            title={language === 'hi' ? 'सभी श्रेणियों पर लौटें' : 'Return to All Categories'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-noir)',
              borderRadius: '6px',
              color: 'var(--brass-accent)',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 600,
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            <ArrowLeft size={15} />
            <span className="back-btn-text">{language === 'hi' ? 'श्रेणियां' : 'Categories'}</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8',
                flexShrink: 0,
              }}
            >
              <Award size={18} color="#38bdf8" />
            </div>
            <div style={{ minWidth: 0 }}>
              <h1
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--paper-cream)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {language === 'hi' ? 'करियर एवं कौशल विकास' : 'Career & Life Skills'}
              </h1>
              <span
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
                {language === 'hi' ? 'व्यावहारिक सिमुलेशन एवं निर्णय मंच' : 'Real-Life Career Choices & Workplace Skills • 12 Stories'}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Mode Switcher Tabs */}
        <div
          className="header-desktop-actions"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            padding: '3px 4px',
            borderRadius: '8px',
            border: '1px solid var(--border-noir)',
            gap: '4px',
          }}
        >
          <button
            onClick={() => {
              soundEffects.playTypewriterClick();
              setActiveTab('simulations');
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'simulations' ? 'var(--brass-accent)' : 'transparent',
              color: activeTab === 'simulations' ? '#0d0f14' : 'var(--paper-cream)',
              fontWeight: 600,
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>{language === 'hi' ? 'सिमुलेशन' : 'Simulations'}</span>
            <span
              style={{
                fontSize: '0.7rem',
                padding: '1px 5px',
                borderRadius: '8px',
                backgroundColor: activeTab === 'simulations' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.12)',
              }}
            >
              12
            </span>
          </button>

          <button
            onClick={() => {
              soundEffects.playTypewriterClick();
              setActiveTab('pathways');
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'pathways' ? 'var(--brass-accent)' : 'transparent',
              color: activeTab === 'pathways' ? '#0d0f14' : 'var(--paper-cream)',
              fontWeight: 600,
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>🧭 {language === 'hi' ? 'करियर पथ' : 'Career Paths'}</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playTypewriterClick();
              setActiveTab('skill_trees');
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'skill_trees' ? 'var(--brass-accent)' : 'transparent',
              color: activeTab === 'skill_trees' ? '#0d0f14' : 'var(--paper-cream)',
              fontWeight: 600,
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>🌳 {language === 'hi' ? 'स्किल ट्री' : 'Skill Trees'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="header-mobile-toggle">
          <button
            onClick={() => {
              soundEffects.playTypewriterClick();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            aria-label={isMobileMenuOpen ? 'Close career menu' : 'Open career menu'}
            aria-expanded={isMobileMenuOpen}
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
              transition: 'all 0.2s',
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel for CareerHub */}
        {isMobileMenuOpen && (
          <>
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: '60px',
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
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                  letterSpacing: '0.06em',
                }}
              >
                {language === 'hi' ? 'करियर मोड चयन' : 'Career Hub Modes'}
              </div>

              {/* Mode Tabs in Mobile Menu */}
              <button
                onClick={() => {
                  soundEffects.playTypewriterClick();
                  setActiveTab('simulations');
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: activeTab === 'simulations' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                  backgroundColor: activeTab === 'simulations' ? 'rgba(201, 151, 56, 0.15)' : 'var(--bg-surface)',
                  color: 'var(--paper-cream)',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>🎮</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      {language === 'hi' ? 'इंटरैक्टिव सिमुलेशन' : 'Practical Simulations'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                      12 {language === 'hi' ? 'व्यावहारिक परिदृश्य' : 'Real-world workplace scenarios'}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '2px 6px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(201, 151, 56, 0.25)',
                    color: 'var(--brass-accent)',
                    fontWeight: 700,
                  }}
                >
                  12
                </span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playTypewriterClick();
                  setActiveTab('pathways');
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: activeTab === 'pathways' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                  backgroundColor: activeTab === 'pathways' ? 'rgba(201, 151, 56, 0.15)' : 'var(--bg-surface)',
                  color: 'var(--paper-cream)',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>🧭</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      {language === 'hi' ? 'करियर पथ (Pathways)' : 'Career Pathways'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                      {language === 'hi' ? 'इंजीनियरिंग, प्रोडक्ट, एनालिटिक्स व सेल्स' : 'Tech, Product, Analytics & Sales progression'}
                    </div>
                  </div>
                </div>
                {activeTab === 'pathways' && <span style={{ color: 'var(--brass-accent)' }}>✓</span>}
              </button>

              <button
                onClick={() => {
                  soundEffects.playTypewriterClick();
                  setActiveTab('skill_trees');
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: activeTab === 'skill_trees' ? '1px solid var(--brass-accent)' : '1px solid var(--border-noir)',
                  backgroundColor: activeTab === 'skill_trees' ? 'rgba(201, 151, 56, 0.15)' : 'var(--bg-surface)',
                  color: 'var(--paper-cream)',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>🌳</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      {language === 'hi' ? 'इंटरैक्टिव स्किल ट्री' : 'Interactive Skill Trees'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                      {language === 'hi' ? 'क्षमता मैप व आवश्यक कौशल' : 'Core competencies & prerequisites'}
                    </div>
                  </div>
                </div>
                {activeTab === 'skill_trees' && <span style={{ color: 'var(--brass-accent)' }}>✓</span>}
              </button>

              <div style={{ height: '1px', backgroundColor: 'var(--border-noir)', margin: '4px 0' }} />

              {/* Navigation Back Button */}
              <button
                onClick={() => {
                  soundEffects.playPageTurn();
                  setIsMobileMenuOpen(false);
                  onBackToHome();
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
                <ArrowLeft size={16} />
                <span>{language === 'hi' ? 'सभी श्रेणियों पर लौटें' : 'Back to All Categories'}</span>
              </button>
            </div>
          </>
        )}
      </header>

      {/* ─── HERO HEADER BANNER ─── */}
      <div
        style={{
          position: 'relative',
          padding: '44px 32px 36px 32px',
          backgroundImage:
            'linear-gradient(to right, rgba(13, 15, 20, 0.94) 30%, rgba(13, 15, 20, 0.72) 75%, rgba(13, 15, 20, 0.88)), url(/images/career/career-hub-hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          borderBottom: '1px solid var(--border-noir)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '2.1rem', margin: '0 0 10px 0', color: 'var(--paper-cream)', letterSpacing: '0.02em', fontWeight: 700 }}>
            Make Real-Life Career Decisions & Build Practical Skills
          </h2>
          <p style={{ maxWidth: '820px', margin: '0 0 24px 0', fontSize: '0.98rem', lineHeight: '1.6', color: 'rgba(235, 230, 219, 0.85)' }}>
            Step into real workplace dilemmas. Tackle data puzzles, balance engineering trade-offs, negotiate key contracts, and mentor team members through tough conversations. Every choice you make brings realistic outcomes, clear feedback, and practical takeaways you can use in your own career.
          </p>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              padding: '16px 20px',
              backgroundColor: 'rgba(18, 21, 28, 0.75)',
              borderRadius: '10px',
              border: '1px solid rgba(212, 163, 89, 0.25)',
              backdropFilter: 'blur(8px)',
              width: 'fit-content',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🎯</span>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brass-accent)' }}>12 Scenarios</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Across 3 Key Areas</div>
              </div>
            </div>

            <div style={{ width: '1px', backgroundColor: 'var(--border-noir)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🧭</span>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>5 Career Pathways</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Roles, Skills & Projects</div>
              </div>
            </div>

            <div style={{ width: '1px', backgroundColor: 'var(--border-noir)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🌳</span>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34d399' }}>13 Skill Trees</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Tech to People Skills</div>
              </div>
            </div>

            <div style={{ width: '1px', backgroundColor: 'var(--border-noir)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🏆</span>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fbbf24' }}>
                  {completedSimulationIds.size} Completed
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Stories Finished</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── TAB CONTENT 1: SIMULATIONS LIBRARY ─── */}
      {activeTab === 'simulations' && (
        <main style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '32px 24px 80px 24px' }}>
          {/* Pillar Filters Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-noir)',
            }}
          >
            <button
              onClick={() => setSelectedPillar('all')}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: selectedPillar === 'all' ? 'var(--brass-accent)' : 'var(--border-noir)',
                backgroundColor: selectedPillar === 'all' ? 'rgba(212, 163, 89, 0.15)' : 'var(--bg-surface)',
                color: selectedPillar === 'all' ? 'var(--brass-accent)' : 'var(--paper-cream)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              All Pillars (12)
            </button>

            <button
              onClick={() => setSelectedPillar('career_exploration')}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: selectedPillar === 'career_exploration' ? '#38bdf8' : 'var(--border-noir)',
                backgroundColor: selectedPillar === 'career_exploration' ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-surface)',
                color: selectedPillar === 'career_exploration' ? '#7dd3fc' : 'var(--paper-cream)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Pillar A: Career Exploration (4)
            </button>

            <button
              onClick={() => setSelectedPillar('professional_skills')}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: selectedPillar === 'professional_skills' ? '#34d399' : 'var(--border-noir)',
                backgroundColor: selectedPillar === 'professional_skills' ? 'rgba(52, 211, 153, 0.15)' : 'var(--bg-surface)',
                color: selectedPillar === 'professional_skills' ? '#6ee7b7' : 'var(--paper-cream)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Pillar B: Technical & Professional Skills (5)
            </button>

            <button
              onClick={() => setSelectedPillar('personal_development')}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: selectedPillar === 'personal_development' ? '#f472b6' : 'var(--border-noir)',
                backgroundColor: selectedPillar === 'personal_development' ? 'rgba(244, 114, 182, 0.15)' : 'var(--bg-surface)',
                color: selectedPillar === 'personal_development' ? '#f9a8d4' : 'var(--paper-cream)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Pillar C: Personal Development (3)
            </button>
          </div>

          {/* Search & Tag Filter Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '28px',
            }}
          >
            {/* Search Input */}
            <div style={{ flex: '1 1 320px', maxWidth: '440px' }}>
              <input
                type="text"
                placeholder="Search simulations, skills, takeaways, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-noir)',
                  color: 'var(--paper-cream)',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Quick Tag Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>Focus Tags:</span>
              <button
                onClick={() => setSelectedTag('all')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '12px',
                  border: '1px solid',
                  borderColor: selectedTag === 'all' ? 'var(--brass-accent)' : 'var(--border-noir)',
                  backgroundColor: selectedTag === 'all' ? 'rgba(212, 163, 89, 0.2)' : 'transparent',
                  color: selectedTag === 'all' ? 'var(--brass-accent)' : 'var(--paper-cream)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                }}
              >
                All
              </button>
              {['#Career Paths', '#Skill Trees', '#Negotiation', '#Mentorship', 'AI Engineering', 'SQL'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? 'all' : tag)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: selectedTag === tag ? '#38bdf8' : 'var(--border-noir)',
                    backgroundColor: selectedTag === tag ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedTag === tag ? '#7dd3fc' : 'var(--paper-cream)',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    fontWeight: tag.startsWith('#') ? 600 : 400,
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Simulations Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredSimulations.map((sim) => {
              const isSolved = completedSimulationIds.has(sim.id);
              const isActive = activeRunsByEpisode[sim.id] && !activeRunsByEpisode[sim.id].isCompleted;

              const pillarColor =
                sim.pillar === 'career_exploration'
                  ? '#38bdf8'
                  : sim.pillar === 'professional_skills'
                  ? '#34d399'
                  : '#f472b6';

              return (
                <article
                  key={sim.id}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-noir)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    position: 'relative',
                  }}
                >
                  {/* Card Thumbnail / Header Image */}
                  <div
                    style={{
                      height: '140px',
                      position: 'relative',
                      backgroundColor: '#161922',
                      borderBottom: '1px solid var(--border-noir)',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={sim.thumbnailImage || sim.heroImage}
                      alt={sim.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(18, 21, 28, 0.92) 0%, rgba(18, 21, 28, 0.3) 100%)',
                      }}
                    />

                    {/* Pillar Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(12, 14, 18, 0.85)',
                        border: `1px solid ${pillarColor}`,
                        color: pillarColor,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {sim.pillar === 'career_exploration'
                        ? 'Pillar A • Exploration'
                        : sim.pillar === 'professional_skills'
                        ? 'Pillar B • Technical'
                        : 'Pillar C • Personal'}
                    </div>

                    {/* Completion Status Badge */}
                    {isSolved && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          backgroundColor: 'rgba(34, 197, 94, 0.9)',
                          color: '#ffffff',
                          padding: '3px 8px',
                          borderRadius: '12px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <Check size={12} />
                        <span>Solved</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--brass-accent)', fontWeight: 600 }}>
                        {sim.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
                        <Clock size={12} />
                        <span>{sim.estimatedMinutes} min</span>
                        <span>•</span>
                        <span>{sim.difficulty}</span>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', margin: '0 0 6px 0', color: 'var(--paper-cream)', fontWeight: 600 }}>
                      {sim.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(235, 230, 219, 0.8)', margin: '0 0 14px 0', lineHeight: '1.45' }}>
                      {sim.subtitle}
                    </p>

                    {/* Practical Takeaway Pill */}
                    <div
                      style={{
                        padding: '8px 12px',
                        backgroundColor: 'rgba(212, 163, 89, 0.08)',
                        borderRadius: '6px',
                        borderLeft: '3px solid var(--brass-accent)',
                        marginBottom: '14px',
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: 'var(--brass-accent)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                        Practical Output: {sim.practicalTakeaway.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
                        {sim.practicalTakeaway.description}
                      </div>
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px', marginTop: 'auto' }}>
                      {sim.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: '0.72rem',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            backgroundColor: t.startsWith('#') ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                            color: t.startsWith('#') ? '#7dd3fc' : 'var(--ink-muted)',
                            fontWeight: t.startsWith('#') ? 600 : 400,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Launch Action Button */}
                    <button
                      onClick={() => handleLaunch(sim.id)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: isActive
                          ? 'var(--brass-accent)'
                          : isSolved
                          ? 'rgba(212, 163, 89, 0.2)'
                          : 'var(--brass-accent)',
                        color: isActive || !isSolved ? '#0d0f14' : 'var(--paper-cream)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      {isActive ? (
                        <>
                          <RotateCcw size={16} />
                          <span>Resume Active Run</span>
                        </>
                      ) : isSolved ? (
                        <>
                          <RotateCcw size={16} />
                          <span>Replay Scenario</span>
                        </>
                      ) : (
                        <>
                          <Play size={16} />
                          <span>Launch Simulation</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </main>
      )}

      {/* ─── TAB CONTENT 2: #CAREER PATHS EXPLORER ─── */}
      {activeTab === 'pathways' && (
        <main style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '32px 24px 80px 24px' }}>
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--paper-cream)', margin: '0 0 8px 0' }}>
              🧭 #Career Paths Explorer
            </h3>
            <p style={{ color: 'var(--ink-muted)', margin: 0, maxWidth: '780px', lineHeight: '1.5' }}>
              Investigate modern professional roles through practical responsibilities, real entry pathways, verified toolsets, and portfolio blueprints. No hype or empty salary promises—just empirical realities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
            {CAREER_PATHWAYS.map((path) => (
              <div
                key={path.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-noir)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '2rem' }}>{path.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--paper-cream)' }}>{path.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>Career Pathway Profile</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'rgba(235, 230, 219, 0.85)', lineHeight: '1.5', marginBottom: '16px' }}>
                  {path.shortDescription}
                </p>

                {/* Foundational Skills */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--brass-accent)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
                    Core Foundational Competencies
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {path.foundationalSkills.map((s) => (
                      <span key={s} style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Tools */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--brass-accent)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
                    Industry Toolsets & Standards
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {path.recommendedTools.map((tool) => (
                      <span key={tool} style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(56, 189, 248, 0.12)', color: '#7dd3fc' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Market Reality Quote */}
                <div style={{ padding: '10px 14px', backgroundColor: 'rgba(0, 0, 0, 0.25)', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--ink-muted)', fontStyle: 'italic', marginBottom: '18px', borderLeft: '3px solid #38bdf8' }}>
                  &ldquo;{path.marketRealities}&rdquo;
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  <button
                    onClick={() => setInspectingPathway(path)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(212, 163, 89, 0.15)',
                      border: '1px solid var(--border-noir)',
                      color: 'var(--paper-cream)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    View Responsibilities
                  </button>

                  {path.linkedSimulationIds.length > 0 && (
                    <button
                      onClick={() => handleLaunch(path.linkedSimulationIds[0])}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--brass-accent)',
                        border: 'none',
                        color: '#0d0f14',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Play size={14} />
                      <span>Simulate</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ─── TAB CONTENT 3: #SKILL TREES VISUAL PROGRESSION ─── */}
      {activeTab === 'skill_trees' && (
        <main style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '32px 24px 80px 24px' }}>
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--paper-cream)', margin: '0 0 8px 0' }}>
              🌳 #Skill Trees Visual Progression
            </h3>
            <p style={{ color: 'var(--ink-muted)', margin: 0, maxWidth: '780px', lineHeight: '1.5' }}>
              Track your demonstrated capabilities across five practical branches. Complete scenario challenges to unlock higher-tier mastery nodes.
            </p>
          </div>

          {/* 5 Branches Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { branch: 'analytical', name: '📉 Analytical & Diagnostic Branch', color: '#38bdf8' },
              { branch: 'technical', name: '⚡ Technical & Systems Architecture Branch', color: '#34d399' },
              { branch: 'strategic', name: '⚖️ Strategic Prioritization & Growth Branch', color: '#fbbf24' },
              { branch: 'interpersonal', name: '🤝 Interpersonal & Negotiation Branch (#Negotiation #Mentorship)', color: '#f472b6' },
              { branch: 'self_management', name: '🧘 Self-Management & Personal Mastery Branch', color: '#a78bfa' },
            ].map((section) => {
              const nodes = SKILL_TREE_NODES.filter((n) => n.branch === section.branch);

              return (
                <div
                  key={section.branch}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-noir)',
                    padding: '24px',
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', color: section.color, margin: '0 0 16px 0', fontWeight: 600 }}>
                    {section.name}
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                    {nodes.map((node) => {
                      const isMastered = node.linkedSimulationIds.some((id) => completedSimulationIds.has(id));

                      return (
                        <div
                          key={node.id}
                          onClick={() => setInspectingSkill(node)}
                          style={{
                            padding: '16px',
                            borderRadius: '8px',
                            backgroundColor: isMastered ? 'rgba(34, 197, 94, 0.1)' : 'rgba(0, 0, 0, 0.25)',
                            border: `1px solid ${isMastered ? '#22c55e' : 'var(--border-noir)'}`,
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            transition: 'border-color 0.2s',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.4rem' }}>{node.icon}</span>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <span style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'var(--ink-muted)' }}>
                                Tier {node.tier}
                              </span>
                              {isMastered && (
                                <span style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', backgroundColor: '#22c55e', color: '#0d0f14', fontWeight: 700 }}>
                                  Mastered
                                </span>
                              )}
                            </div>
                          </div>

                          <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--paper-cream)' }}>
                            {node.title}
                          </div>

                          <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', lineHeight: '1.4' }}>
                            {node.description}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}

      {/* ─── MODAL: CAREER PATHWAY DETAILS ─── */}
      {inspectingPathway && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '24px',
          }}
          onClick={() => setInspectingPathway(null)}
        >
          <div
            style={{
              maxWidth: '680px',
              width: '100%',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '12px',
              border: '1px solid var(--border-noir)',
              padding: '32px',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <span style={{ fontSize: '2.5rem' }}>{inspectingPathway.icon}</span>
              <div>
                <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--paper-cream)' }}>
                  {inspectingPathway.title}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--brass-accent)' }}>
                  Comprehensive Role Blueprint
                </span>
              </div>
            </div>

            <h4 style={{ fontSize: '0.85rem', color: 'var(--brass-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Daily Operational Responsibilities
            </h4>
            <ul style={{ margin: '0 0 20px 0', paddingLeft: '20px', color: 'rgba(235, 230, 219, 0.85)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              {inspectingPathway.typicalResponsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>

            <h4 style={{ fontSize: '0.85rem', color: 'var(--brass-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Common Entry Pathways & Transitions
            </h4>
            <ul style={{ margin: '0 0 20px 0', paddingLeft: '20px', color: 'rgba(235, 230, 219, 0.85)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              {inspectingPathway.entryPathways.map((entry, i) => (
                <li key={i}>{entry}</li>
              ))}
            </ul>

            <h4 style={{ fontSize: '0.85rem', color: 'var(--brass-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Recommended Portfolio Project Ideas
            </h4>
            <ul style={{ margin: '0 0 24px 0', paddingLeft: '20px', color: 'rgba(235, 230, 219, 0.85)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              {inspectingPathway.portfolioProjectIdeas.map((proj, i) => (
                <li key={i}>{proj}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => setInspectingPathway(null)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  color: 'var(--paper-cream)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: SKILL NODE DETAILS ─── */}
      {inspectingSkill && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '24px',
          }}
          onClick={() => setInspectingSkill(null)}
        >
          <div
            style={{
              maxWidth: '540px',
              width: '100%',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '12px',
              border: '1px solid var(--border-noir)',
              padding: '28px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '2.2rem' }}>{inspectingSkill.icon}</span>
              <div>
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--paper-cream)' }}>
                  {inspectingSkill.title}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--brass-accent)' }}>
                  Tier {inspectingSkill.tier} • {inspectingSkill.branch.toUpperCase()}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'rgba(235, 230, 219, 0.85)', lineHeight: '1.5', marginBottom: '18px' }}>
              {inspectingSkill.description}
            </p>

            <h4 style={{ fontSize: '0.8rem', color: 'var(--brass-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Demonstrated Mastery Benefits
            </h4>
            <ul style={{ margin: '0 0 24px 0', paddingLeft: '20px', color: 'rgba(235, 230, 219, 0.85)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              {inspectingSkill.masteryBenefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => setInspectingSkill(null)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  color: 'var(--paper-cream)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Close
              </button>
              {inspectingSkill.linkedSimulationIds.length > 0 && (
                <button
                  onClick={() => {
                    const simId = inspectingSkill.linkedSimulationIds[0];
                    setInspectingSkill(null);
                    handleLaunch(simId);
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--brass-accent)',
                    border: 'none',
                    color: '#0d0f14',
                    cursor: 'pointer',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Play size={14} />
                  <span>Practice Node in Simulation</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {/* ─── PERSISTENT FOOTER ─── */}
      <Footer currentLanguage={language} />
    </div>
  );
};

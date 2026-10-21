'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  RelationshipPillar,
  RelationshipScenarioMetadata,
  CharacterProfile,
} from '@/features/relationships/types';
import {
  RELATIONSHIPS_SCENARIOS_METADATA,
  getRelationshipMetadataById,
} from '@/data/relationships/catalog';
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
  User,
  Search,
  Filter,
} from '@/components/ui/Icons';
import { CompletedRunSummary, GameState } from '@/features/episodes/types';
import { soundEffects } from '@/components/ui/AudioPlayer';
import { Footer } from '@/components/ui/Footer';
import { SupportedLanguage } from '@/features/localization/translations';

interface RelationshipsHubProps {
  onBackToHome: () => void;
  onLaunchScenario: (scenarioId: string) => void;
  activeRunsByEpisode: Record<string, GameState>;
  completedRuns: CompletedRunSummary[];
  language?: SupportedLanguage;
}

export const RelationshipsHub: React.FC<RelationshipsHubProps> = ({
  onBackToHome,
  onLaunchScenario,
  activeRunsByEpisode,
  completedRuns,
  language = 'en',
}) => {
  const [selectedPillar, setSelectedPillar] = useState<RelationshipPillar | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectingScenario, setInspectingScenario] = useState<RelationshipScenarioMetadata | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHindi = language === 'hi';

  const completedScenarioIds = useMemo(() => {
    return new Set(completedRuns.map((r) => r.episodeId));
  }, [completedRuns]);

  const bestScoresByScenario = useMemo(() => {
    const map: Record<string, number> = {};
    for (const run of completedRuns) {
      if (!map[run.episodeId] || run.accuracyScore > map[run.episodeId]) {
        map[run.episodeId] = run.accuracyScore;
      }
    }
    return map;
  }, [completedRuns]);

  const filteredScenarios = useMemo(() => {
    return RELATIONSHIPS_SCENARIOS_METADATA.filter((scenario) => {
      if (selectedPillar !== 'all' && scenario.pillar !== selectedPillar) return false;
      if (selectedDifficulty !== 'all' && scenario.difficulty !== selectedDifficulty) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = scenario.title.toLowerCase().includes(query);
        const matchesSubtitle = scenario.subtitle.toLowerCase().includes(query);
        const matchesCategory = scenario.category.toLowerCase().includes(query);
        const matchesTags = scenario.tags.some((t) => t.toLowerCase().includes(query));
        const matchesCharacters = scenario.characters.some((c) =>
          c.name.toLowerCase().includes(query) || c.role.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesSubtitle && !matchesCategory && !matchesTags && !matchesCharacters) {
          return false;
        }
      }
      return true;
    });
  }, [selectedPillar, selectedDifficulty, searchQuery]);

  const pillarCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: RELATIONSHIPS_SCENARIOS_METADATA.length,
      friendship: 0,
      romance: 0,
      family: 0,
      communication: 0,
      boundaries: 0,
    };
    RELATIONSHIPS_SCENARIOS_METADATA.forEach((s) => {
      counts[s.pillar] = (counts[s.pillar] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f1117',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Header */}
      <header
        style={{
          borderBottom: '1px solid rgba(236, 72, 153, 0.25)',
          backgroundColor: 'rgba(15, 17, 23, 0.95)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 40,
          padding: '12px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => {
                soundEffects.playPageTurn();
                onBackToHome();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                backgroundColor: 'rgba(236, 72, 153, 0.1)',
                color: '#ec4899',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 72, 153, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
              }}
            >
              <ArrowLeft size={16} />
              <span>{isHindi ? 'मुख्य द्वार' : 'Back to Categories'}</span>
            </button>

            <div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ec4899',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                }}
              >
                INTERACTIVE STORIES
              </span>
              <h1
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  margin: 0,
                  color: '#fff',
                }}
              >
                {isHindi ? 'रिश्ते एवं सामाजिक जीवन' : 'Relationships & Social Life'}
              </h1>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: '#94a3b8',
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                padding: '6px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Award size={14} color="#ec4899" />
              <span>
                {completedScenarioIds.size}/12 {isHindi ? 'पूर्ण' : 'Completed'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '24px' }}>
        {/* Hero Banner with Generated Atmospheric Artwork */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '32px',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            minHeight: '260px',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(to top, rgba(15, 17, 23, 0.95) 0%, rgba(15, 17, 23, 0.6) 60%, rgba(15, 17, 23, 0.3) 100%), url('/images/relationships/relationships-hub-hero.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 10,
              padding: '32px',
              maxWidth: '820px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span
                style={{
                  backgroundColor: 'rgba(236, 72, 153, 0.2)',
                  color: '#f472b6',
                  border: '1px solid #ec4899',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                }}
              >
                ★ INTERACTIVE STORIES
              </span>
              <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>• 12 Interactive Stories</span>
            </div>

            <h2
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#fff',
                margin: '0 0 10px 0',
                lineHeight: 1.2,
              }}
            >
              {isHindi ? 'रिश्ते, विश्वास और कठिन सामाजिक निर्णय' : 'Relationships, Friendships & Tough Life Choices'}
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {isHindi
                ? 'वास्तविक मानवीय परिस्थितियों में कदम रखें। संवाद के जरिए सीमाएं तय करें, टूटे विश्वास को संभालें, सूक्ष्म बहिष्कार का सामना करें और अपने निर्णयों के परिणाम देखें।'
                : "Step into real-life social situations. Make tough calls with friends, family, and partners where there's no easy right or wrong answer, and see how your choices shape your connections."}
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            backgroundColor: '#161922',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Pillar Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '4px',
            }}
          >
            {[
              { id: 'all', label: isHindi ? 'सभी परिदृश्य' : 'All Scenarios', count: pillarCounts.all },
              { id: 'friendship', label: isHindi ? 'मित्रता व समूह' : 'Friendship', count: pillarCounts.friendship },
              { id: 'romance', label: isHindi ? 'प्रेम संबंध' : 'Romance', count: pillarCounts.romance },
              { id: 'family', label: isHindi ? 'पारिवारिक रिश्ते' : 'Family', count: pillarCounts.family },
              { id: 'communication', label: isHindi ? 'संवाद व मतभेद' : 'Communication', count: pillarCounts.communication },
              { id: 'boundaries', label: isHindi ? 'सीमाएं व दबाव' : 'Boundaries & Pressure', count: pillarCounts.boundaries },
            ].map((tab) => {
              const isSelected = selectedPillar === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundEffects.playPageTurn();
                    setSelectedPillar(tab.id as any);
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: isSelected ? '1px solid #ec4899' : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: isSelected ? 'rgba(236, 72, 153, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    color: isSelected ? '#f472b6' : '#94a3b8',
                    fontSize: '0.85rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      padding: '1px 6px',
                      borderRadius: '10px',
                      backgroundColor: isSelected ? '#ec4899' : 'rgba(255, 255, 255, 0.1)',
                      color: isSelected ? '#fff' : '#cbd5e1',
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Controls: Search & Difficulty */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#0f1117',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '6px 14px',
                flex: '1 1 280px',
                maxWidth: '450px',
              }}
            >
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder={isHindi ? 'शीर्षक, चरित्र या विषय खोजें...' : 'Search scenarios, characters, or themes...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontSize: '0.88rem',
                  width: '100%',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Difficulty Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                {isHindi ? 'कठिनाई:' : 'Difficulty:'}
              </span>
              {['all', 'Novice', 'Intermediate', 'Advanced'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    border: selectedDifficulty === diff ? '1px solid #ec4899' : '1px solid transparent',
                    backgroundColor: selectedDifficulty === diff ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedDifficulty === diff ? '#f472b6' : '#94a3b8',
                    cursor: 'pointer',
                  }}
                >
                  {diff === 'all' ? (isHindi ? 'सभी' : 'All') : diff}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 12 Scenario Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {filteredScenarios.map((scenario) => {
            const isCompleted = completedScenarioIds.has(scenario.id);
            const activeRun = activeRunsByEpisode[scenario.id];
            const isInProgress = activeRun && !activeRun.isCompleted;
            const bestScore = bestScoresByScenario[scenario.id];

            return (
              <div
                key={scenario.id}
                style={{
                  backgroundColor: '#161922',
                  border: isCompleted
                    ? '1px solid rgba(16, 185, 129, 0.4)'
                    : isInProgress
                    ? '1px solid rgba(236, 72, 153, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(236, 72, 153, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Card Header with SVG Thumbnail and Metadata */}
                <div
                  style={{
                    backgroundColor: '#1a1e2a',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      backgroundColor: '#0f1117',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={scenario.thumbnailImage}
                      alt={scenario.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#f472b6',
                          backgroundColor: 'rgba(236, 72, 153, 0.12)',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                        }}
                      >
                        {scenario.category}
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: '#94a3b8',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <Clock size={12} /> {scenario.estimatedMinutes}m
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#fff',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {scenario.title}
                    </h3>
                  </div>

                  {isCompleted && (
                    <div
                      title={`Completed (Score: ${bestScore}%)`}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid #10b981',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#10b981',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={16} />
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {scenario.subtitle}
                  </p>

                  {/* Character Previews */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: '#64748b',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700,
                      }}
                    >
                      {isHindi ? 'प्रमुख चरित्र' : 'Featured Characters'}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {scenario.characters.map((char) => (
                        <span
                          key={char.id}
                          style={{
                            fontSize: '0.75rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            color: '#cbd5e1',
                          }}
                        >
                          <strong>{char.name}</strong> ({char.role.split('&')[0].trim()})
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {scenario.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#f472b6',
                          opacity: 0.85,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div
                  style={{
                    padding: '14px 20px',
                    backgroundColor: 'rgba(15, 17, 23, 0.6)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                  }}
                >
                  <button
                    onClick={() => {
                      soundEffects.playTypewriterClick();
                      setInspectingScenario(scenario);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      padding: '4px',
                    }}
                  >
                    {isHindi ? 'विवरण देखें' : 'Inspect Dilemma'}
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    {isInProgress ? (
                      <button
                        onClick={() => {
                          soundEffects.playStampThud();
                          onLaunchScenario(scenario.id);
                        }}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '6px',
                          border: 'none',
                          backgroundColor: '#ec4899',
                          color: '#fff',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(236, 72, 153, 0.4)',
                        }}
                      >
                        <Play size={14} />
                        <span>{isHindi ? 'जारी रखें' : 'Resume'}</span>
                      </button>
                    ) : isCompleted ? (
                      <button
                        onClick={() => {
                          soundEffects.playStampThud();
                          onLaunchScenario(scenario.id);
                        }}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '6px',
                          border: '1px solid rgba(16, 185, 129, 0.5)',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          color: '#10b981',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <RotateCcw size={14} />
                        <span>{isHindi ? 'पुनः खेलें' : 'Replay'}</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          soundEffects.playStampThud();
                          onLaunchScenario(scenario.id);
                        }}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '6px',
                          border: 'none',
                          backgroundColor: '#ec4899',
                          color: '#fff',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(236, 72, 153, 0.4)',
                        }}
                      >
                        <Play size={14} />
                        <span>{isHindi ? 'शुरू करें' : 'Start'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredScenarios.length === 0 && (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: '#161922',
              borderRadius: '12px',
              border: '1px dashed rgba(255, 255, 255, 0.12)',
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', margin: 0 }}>
              {isHindi ? 'कोई परिदृश्य नहीं मिला।' : 'No scenarios match your search filters.'}
            </p>
            <button
              onClick={() => {
                setSelectedPillar('all');
                setSelectedDifficulty('all');
                setSearchQuery('');
              }}
              style={{
                marginTop: '16px',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid #ec4899',
                backgroundColor: 'rgba(236, 72, 153, 0.15)',
                color: '#f472b6',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Inspect Scenario Modal */}
      {inspectingScenario && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setInspectingScenario(null)}
        >
          <div
            style={{
              backgroundColor: '#161922',
              border: '1px solid rgba(236, 72, 153, 0.4)',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
              padding: '28px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#f472b6',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {inspectingScenario.category} • {inspectingScenario.difficulty} ({inspectingScenario.estimatedMinutes}m)
                </span>
                <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: '4px 0 0 0' }}>
                  {inspectingScenario.title}
                </h2>
              </div>
              <button
                onClick={() => setInspectingScenario(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: '#ec4899', textTransform: 'uppercase', margin: '0 0 6px 0' }}>
                  Central Tension & Stakes
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                  {inspectingScenario.coreTension}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', color: '#ec4899', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                  Character Motivations & Biases
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {inspectingScenario.characters.map((c) => (
                    <div
                      key={c.id}
                      style={{
                        backgroundColor: '#1f2430',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>{c.name}</span>
                        <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{c.role}</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0 0 4px 0' }}>
                        <strong>Tendency:</strong> {c.communicationTendency}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: '#f472b6', margin: 0 }}>
                        <strong>Core Need/Fear:</strong> {c.coreNeedOrFear}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', color: '#ec4899', textTransform: 'uppercase', margin: '0 0 6px 0' }}>
                  Key Learning Insights
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {inspectingScenario.learningInsights.map((insight, idx) => (
                    <li key={idx}>{insight}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button
                  onClick={() => setInspectingScenario(null)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: 'transparent',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = inspectingScenario.id;
                    setInspectingScenario(null);
                    soundEffects.playStampThud();
                    onLaunchScenario(id);
                  }}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#ec4899',
                    color: '#fff',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(236, 72, 153, 0.4)',
                  }}
                >
                  <Play size={16} />
                  <span>Launch Scenario</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Footer */}
      <Footer currentLanguage={language} />
    </div>
  );
};

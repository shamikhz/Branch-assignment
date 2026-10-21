'use client';

import React, { useState, useMemo } from 'react';
import { EpisodeMetadata, GameState, CompletedRunSummary } from '@/features/episodes/types';
import {
  Compass,
  Search,
  Filter,
  MapPin,
  Clock,
  Award,
  Play,
  RotateCcw,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Lock,
  Layers,
  X,
  Shield,
} from '@/components/ui/Icons';
import { SupportedLanguage } from '@/features/localization/translations';
import { getLocalizedMetadata } from '@/features/localization/case-translations';
import { getEpisodeBackgroundImage } from '@/features/episodes/backgrounds';

export interface MysteryLibraryProps {
  episodes: EpisodeMetadata[];
  activeRunsByEpisode: Record<string, GameState>;
  completedRuns: CompletedRunSummary[];
  currentLanguage: SupportedLanguage;
  isLoadingEpisode: boolean;
  onSelectAndStart: (episodeId: string) => void;
  onSelectAndResume: (episodeId: string) => void;
  onSelectAndRestart: (episodeId: string) => void;
}

type FilterCaseType = 'all' | 'locked_room' | 'missing_person' | 'disputed_will' | 'art_theft' | 'cold_case' | 'espionage';
type FilterDifficulty = 'all' | 'Novice' | 'Detective' | 'Master Sleuth';

export const MysteryLibrary: React.FC<MysteryLibraryProps> = ({
  episodes,
  activeRunsByEpisode,
  completedRuns,
  currentLanguage,
  isLoadingEpisode,
  onSelectAndStart,
  onSelectAndResume,
  onSelectAndRestart,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCaseType, setSelectedCaseType] = useState<FilterCaseType>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<FilterDifficulty>('all');
  const [viewMode, setViewMode] = useState<'all' | 'series'>('series');
  const [featuredEpisodeId, setFeaturedEpisodeId] = useState<string>(episodes[0]?.id || 'the-midnight-cipher');

  const isHindi = currentLanguage === 'hi';
  const featuredEpisode = episodes.find((e) => e.id === featuredEpisodeId) || episodes[0];

  // Case Type Labels
  const caseTypeLabels: Record<FilterCaseType, { en: string; hi: string }> = {
    all: { en: 'All Case Types', hi: 'सभी केस प्रकार' },
    locked_room: { en: 'Locked Room', hi: 'बंद कमरा' },
    missing_person: { en: 'Missing Person', hi: 'लापता व्यक्ति' },
    disputed_will: { en: 'Disputed Will', hi: 'विवादित वसीयत' },
    art_theft: { en: 'Art Theft', hi: 'कला चोरी' },
    cold_case: { en: 'Cold Case', hi: 'अनसुलझा पुराना केस' },
    espionage: { en: 'Espionage', hi: 'जासूसी व षड्यंत्र' },
  };

  // Difficulty Labels
  const difficultyLabels: Record<FilterDifficulty, { en: string; hi: string }> = {
    all: { en: 'All Difficulties', hi: 'सभी कठिनाई स्तर' },
    Novice: { en: 'Novice', hi: 'नौसिखिया' },
    Detective: { en: 'Detective', hi: 'जासूस' },
    'Master Sleuth': { en: 'Master Sleuth', hi: 'महारथी जासूस' },
  };

  // Pre-calculate best score per episode
  const bestScoresByEpisode = useMemo(() => {
    const map: Record<string, number> = {};
    for (const run of completedRuns) {
      if (!map[run.episodeId] || run.accuracyScore > map[run.episodeId]) {
        map[run.episodeId] = run.accuracyScore;
      }
    }
    return map;
  }, [completedRuns]);

  // Solved episode IDs set
  const solvedEpisodeIds = useMemo(() => {
    return new Set(completedRuns.map((r) => r.episodeId));
  }, [completedRuns]);

  // Filtered episodes
  const filteredEpisodes = useMemo(() => {
    return episodes.filter((ep) => {
      // Localized check for search
      const loc = getLocalizedMetadata(ep, currentLanguage);
      const matchesType = selectedCaseType === 'all' || ep.caseType === selectedCaseType;
      const matchesDifficulty = selectedDifficulty === 'all' || ep.difficulty === selectedDifficulty;

      if (!matchesType || !matchesDifficulty) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        loc.title.toLowerCase().includes(q) ||
        loc.subtitle.toLowerCase().includes(q) ||
        loc.synopsis.toLowerCase().includes(q) ||
        loc.location.toLowerCase().includes(q) ||
        (loc.seriesName && loc.seriesName.toLowerCase().includes(q)) ||
        loc.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [episodes, selectedCaseType, selectedDifficulty, searchQuery, currentLanguage]);

  // Group by series if series view mode is active
  const seriesGroups = useMemo(() => {
    const groups: { seriesId: string; seriesName: string; episodes: EpisodeMetadata[] }[] = [];
    const groupMap = new Map<string, { seriesId: string; seriesName: string; episodes: EpisodeMetadata[] }>();

    for (const ep of filteredEpisodes) {
      const sId = ep.seriesId || 'standalone';
      const sName = ep.seriesName || (isHindi ? 'स्वतंत्र अन्वेषण' : 'Standalone Inquiries');
      if (!groupMap.has(sId)) {
        const item = { seriesId: sId, seriesName: sName, episodes: [] };
        groupMap.set(sId, item);
        groups.push(item);
      }
      groupMap.get(sId)!.episodes.push(ep);
    }
    return groups;
  }, [filteredEpisodes, isHindi]);

  // Overall Stats
  const totalCasesCount = episodes.length;
  const inProgressCount = Object.keys(activeRunsByEpisode).filter(
    (k) => !activeRunsByEpisode[k].isCompleted
  ).length;
  const solvedCount = solvedEpisodeIds.size;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      {/* Bureau Dossier Library Header Banner */}
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          borderRadius: '8px',
          padding: '32px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
          borderLeft: '5px solid var(--brass-accent)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="stamp-badge" style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}>
                {isHindi ? 'केंद्रीय गुप्तचर संग्रह' : 'MYSTERY & DETECTIVE STORIES'}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--emerald-verified)',
                  backgroundColor: 'var(--emerald-bg)',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  border: '1px solid var(--emerald-verified)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--emerald-verified)' }} />
                {isHindi ? 'लाइव केस लाइब्रेरी' : '6 PLAYABLE CASES'}
              </span>
            </div>
            <h2
              style={{
                fontSize: '2.2rem',
                color: 'var(--ink-paper-dark)',
                margin: 0,
                lineHeight: 1.2,
                fontFamily: 'var(--font-serif)',
              }}
            >
              {isHindi ? 'जासूसी मामलों का संग्रह' : 'Mystery Case Library'}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--ink-muted)',
                fontFamily: 'var(--font-serif)',
                margin: '6px 0 0 0',
              }}
            >
              {isHindi
                ? 'मूल रहस्यों, फोरेंसिक साक्ष्यों और बहु-शाखा परिणामों से सुसज्जित जांच फाइलें।'
                : 'Pick a case to investigate. Search the crime scene, question suspects, piece together clues, and solve the mystery.'}
            </p>
          </div>

          {/* Bureau Summary Stats Box */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              backgroundColor: 'var(--paper-dark)',
              padding: '12px 20px',
              borderRadius: '6px',
              border: '1px solid var(--paper-border)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink-paper-dark)', fontFamily: 'var(--font-mono)' }}>
                {totalCasesCount}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isHindi ? 'कुल केस' : 'Total Cases'}
              </div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--paper-border)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brass-accent)', fontFamily: 'var(--font-mono)' }}>
                {inProgressCount}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isHindi ? 'चालू' : 'In Progress'}
              </div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--paper-border)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--emerald-verified)', fontFamily: 'var(--font-mono)' }}>
                {solvedCount}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isHindi ? 'सुलझे हुए' : 'Solved'}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Case Spotlight Banner: Displays one of the 5 atmospheric case backgrounds */}
        {featuredEpisode && (
          <div
            className="animate-fade-in"
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '2px solid var(--brass-accent)',
              boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
              backgroundImage: `linear-gradient(to right, rgba(14, 16, 22, 0.95) 0%, rgba(14, 16, 22, 0.85) 55%, rgba(14, 16, 22, 0.4) 100%), url(${getEpisodeBackgroundImage(featuredEpisode.id)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--brass-accent)',
                    backgroundColor: 'rgba(212, 163, 89, 0.2)',
                    border: '1px solid var(--brass-accent)',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  ★ {isHindi ? 'विशेष केस अन्वेषण' : 'FEATURED CASE'}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--paper-cream)',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    padding: '3px 8px',
                    borderRadius: '10px',
                  }}
                >
                  {(featuredEpisode.caseType || 'locked_room').replace('_', ' ').toUpperCase()}
                </span>
              </div>

              {/* Case Picker: Switch between the 5 case background images */}
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'rgba(244, 237, 216, 0.8)', marginRight: '4px' }}>
                  {isHindi ? 'केस दृश्य बदलें:' : 'Pick a case scene:'}
                </span>
                {episodes.slice(0, 5).map((ep, idx) => (
                  <button
                    key={ep.id}
                    onClick={() => setFeaturedEpisodeId(ep.id)}
                    title={ep.title}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: ep.id === featuredEpisode.id ? '2px solid var(--brass-accent)' : '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: ep.id === featuredEpisode.id ? 'var(--brass-accent)' : 'rgba(0,0,0,0.6)',
                      color: ep.id === featuredEpisode.id ? '#1a1a1a' : 'var(--paper-cream)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ maxWidth: '680px' }}>
              <h3
                style={{
                  fontSize: '1.75rem',
                  color: 'var(--paper-cream)',
                  margin: '0 0 6px 0',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1.2,
                }}
              >
                {getLocalizedMetadata(featuredEpisode, currentLanguage).title}
              </h3>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--brass-accent)',
                  fontStyle: 'italic',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {getLocalizedMetadata(featuredEpisode, currentLanguage).subtitle}
              </div>
              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'rgba(244, 237, 216, 0.85)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.5,
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {getLocalizedMetadata(featuredEpisode, currentLanguage).synopsis}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'rgba(244, 237, 216, 0.75)' }}>
                  <MapPin size={13} color="var(--brass-accent)" />
                  <span>{featuredEpisode.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'rgba(244, 237, 216, 0.75)' }}>
                  <Clock size={13} color="var(--brass-accent)" />
                  <span>{featuredEpisode.timeSetting}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const hasActive = activeRunsByEpisode[featuredEpisode.id] && !activeRunsByEpisode[featuredEpisode.id].isCompleted;
                  if (hasActive) {
                    onSelectAndResume(featuredEpisode.id);
                  } else {
                    onSelectAndStart(featuredEpisode.id);
                  }
                }}
                disabled={isLoadingEpisode}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--brass-accent)',
                  color: '#1a1a1a',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 22px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: isLoadingEpisode ? 'wait' : 'pointer',
                  boxShadow: '0 4px 14px var(--brass-glow)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Play size={15} />
                <span>
                  {activeRunsByEpisode[featuredEpisode.id] && !activeRunsByEpisode[featuredEpisode.id].isCompleted
                    ? (isHindi ? 'जांच जारी रखें' : 'Resume Investigation')
                    : (isHindi ? 'केस शुरू करें' : 'Begin Investigation')}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            paddingTop: '16px',
            borderTop: '1px dashed var(--paper-border)',
          }}
        >
          {/* Keyword Search Input & View Toggle */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                flex: '1 1 260px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                size={16}
                color="var(--ink-muted)"
                style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isHindi
                    ? 'केस शीर्षक, स्थान या सुराग टैग खोजें...'
                    : 'Search cases by title, location, tags, or synopsis...'
                }
                style={{
                  width: '100%',
                  padding: '10px 36px 10px 36px',
                  borderRadius: '6px',
                  border: '1px solid var(--paper-border)',
                  backgroundColor: 'var(--paper-aged)',
                  color: 'var(--ink-body)',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--ink-muted)',
                    cursor: 'pointer',
                    padding: '4px',
                  }}
                  title="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'var(--paper-dark)',
                borderRadius: '6px',
                padding: '3px',
                border: '1px solid var(--paper-border)',
              }}
            >
              <button
                onClick={() => setViewMode('series')}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: viewMode === 'series' ? 'var(--brass-accent)' : 'transparent',
                  color: viewMode === 'series' ? '#1a1a1a' : 'var(--ink-charcoal)',
                }}
              >
                <Layers size={14} />
                <span>{isHindi ? 'श्रृंखला समूह' : 'By Series'}</span>
              </button>
              <button
                onClick={() => setViewMode('all')}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: viewMode === 'all' ? 'var(--brass-accent)' : 'transparent',
                  color: viewMode === 'all' ? '#1a1a1a' : 'var(--ink-charcoal)',
                }}
              >
                <BookOpen size={14} />
                <span>{isHindi ? 'सभी केस सूची' : 'All Cases'}</span>
              </button>
            </div>
          </div>

          {/* Case Type Pills Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={13} />
              {isHindi ? 'प्रकार:' : 'Type:'}
            </span>
            {(Object.keys(caseTypeLabels) as FilterCaseType[]).map((typeKey) => {
              const active = selectedCaseType === typeKey;
              return (
                <button
                  key={typeKey}
                  onClick={() => setSelectedCaseType(typeKey)}
                  style={{
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    border: active ? '1px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                    backgroundColor: active ? 'var(--brass-accent)' : 'var(--paper-aged)',
                    color: active ? '#1a1a1a' : 'var(--ink-charcoal)',
                    fontWeight: active ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {caseTypeLabels[typeKey][currentLanguage]}
                </button>
              );
            })}
          </div>

          {/* Difficulty Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Shield size={13} />
              {isHindi ? 'कठिनाई:' : 'Difficulty:'}
            </span>
            {(Object.keys(difficultyLabels) as FilterDifficulty[]).map((diffKey) => {
              const active = selectedDifficulty === diffKey;
              return (
                <button
                  key={diffKey}
                  onClick={() => setSelectedDifficulty(diffKey)}
                  style={{
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    border: active ? '1px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                    backgroundColor: active ? 'var(--brass-accent)' : 'var(--paper-aged)',
                    color: active ? '#1a1a1a' : 'var(--ink-charcoal)',
                    fontWeight: active ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {difficultyLabels[diffKey][currentLanguage]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Zero Cases Match Feedback */}
      {filteredEpisodes.length === 0 && (
        <div
          className="parchment-sheet"
          style={{
            padding: '40px',
            borderRadius: '8px',
            textAlign: 'center',
            color: 'var(--ink-muted)',
          }}
        >
          <Compass size={36} color="var(--ink-muted)" style={{ margin: '0 auto 12px auto' }} />
          <h3 style={{ color: 'var(--ink-paper-dark)', margin: '0 0 8px 0' }}>
            {isHindi ? 'कोई केस मेल नहीं खाया' : 'No matching cases found'}
          </h3>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            {isHindi
              ? 'कृपया अपनी खोज या फ़िल्टर मानदंड को रीसेट करें।'
              : 'Try searching with different keywords or clear the filters to see all cases.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCaseType('all');
              setSelectedDifficulty('all');
            }}
            style={{
              marginTop: '16px',
              backgroundColor: 'var(--paper-aged)',
              border: '1px solid var(--paper-border)',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {isHindi ? 'फ़िल्टर साफ़ करें' : 'Reset Filters'}
          </button>
        </div>
      )}

      {/* Rendering Grouped By Series or Flat Grid */}
      {viewMode === 'series' && filteredEpisodes.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {seriesGroups.map((group) => (
            <div key={group.seriesId} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '2px solid var(--border-noir)',
                  paddingBottom: '8px',
                }}
              >
                <Layers size={20} color="var(--brass-accent)" />
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--paper-cream)',
                    margin: 0,
                    letterSpacing: '0.04em',
                  }}
                >
                  {group.seriesName}
                </h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--ink-muted)',
                    marginLeft: 'auto',
                  }}
                >
                  {group.episodes.length} {group.episodes.length === 1 ? 'Case' : 'Cases'}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '20px',
                }}
              >
                {group.episodes.map((ep) => (
                  <CaseCard
                    key={ep.id}
                    metadata={ep}
                    activeRun={activeRunsByEpisode[ep.id]}
                    bestScore={bestScoresByEpisode[ep.id]}
                    isSolved={solvedEpisodeIds.has(ep.id)}
                    currentLanguage={currentLanguage}
                    isLoadingEpisode={isLoadingEpisode}
                    onStart={onSelectAndStart}
                    onResume={onSelectAndResume}
                    onRestart={onSelectAndRestart}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredEpisodes.map((ep) => (
            <CaseCard
              key={ep.id}
              metadata={ep}
              activeRun={activeRunsByEpisode[ep.id]}
              bestScore={bestScoresByEpisode[ep.id]}
              isSolved={solvedEpisodeIds.has(ep.id)}
              currentLanguage={currentLanguage}
              isLoadingEpisode={isLoadingEpisode}
              onStart={onSelectAndStart}
              onResume={onSelectAndResume}
              onRestart={onSelectAndRestart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface CaseCardProps {
  metadata: EpisodeMetadata;
  activeRun?: GameState;
  bestScore?: number;
  isSolved: boolean;
  currentLanguage: SupportedLanguage;
  isLoadingEpisode: boolean;
  onStart: (id: string) => void;
  onResume: (id: string) => void;
  onRestart: (id: string) => void;
}

const CaseCard: React.FC<CaseCardProps> = ({
  metadata,
  activeRun,
  bestScore,
  isSolved,
  currentLanguage,
  isLoadingEpisode,
  onStart,
  onResume,
  onRestart,
}) => {
  const isHindi = currentLanguage === 'hi';
  const loc = getLocalizedMetadata(metadata, currentLanguage);
  const hasActiveRun = Boolean(activeRun && !activeRun.isCompleted);

  // Difficulty seal styling
  const difficultyBadgeStyle =
    metadata.difficulty === 'Novice'
      ? { color: '#2e7d32', bg: 'rgba(46, 125, 50, 0.12)', border: '#2e7d32' }
      : metadata.difficulty === 'Master Sleuth'
      ? { color: '#c62828', bg: 'rgba(198, 40, 40, 0.12)', border: '#c62828' }
      : { color: 'var(--brass-dark, #8b6508)', bg: 'rgba(184, 134, 11, 0.12)', border: '#b8860b' };

  return (
    <div
      className="parchment-sheet animate-fade-in"
      style={{
        borderRadius: '8px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        border: hasActiveRun ? '2px solid var(--brass-accent)' : '1px solid var(--paper-border)',
        position: 'relative',
        minHeight: '440px',
      }}
    >
      {/* Top Background Image Banner */}
      <div
        style={{
          height: '145px',
          margin: '-24px -24px 16px -24px',
          borderRadius: '7px 7px 0 0',
          backgroundImage: `linear-gradient(to bottom, rgba(12, 14, 18, 0.25) 0%, rgba(18, 20, 26, 0.75) 70%, rgba(26, 24, 20, 0.95) 100%), url(${getEpisodeBackgroundImage(metadata.id)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            className="stamp-badge"
            style={{
              fontSize: '0.64rem',
              padding: '2px 8px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              backgroundColor: 'rgba(20, 22, 28, 0.85)',
              backdropFilter: 'blur(4px)',
            }}
          >
            {(metadata.caseType || 'inquiry').replace('_', ' ')}
          </span>
        </div>

        {/* Status Badge */}
        {hasActiveRun ? (
          <span
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--brass-accent)',
              backgroundColor: 'rgba(20, 22, 28, 0.9)',
              border: '1px solid var(--brass-accent)',
              padding: '3px 8px',
              borderRadius: '10px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brass-accent)' }} />
            {isHindi ? 'चालू जांच' : 'IN PROGRESS'}
          </span>
        ) : isSolved ? (
          <span
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--emerald-verified)',
              backgroundColor: 'rgba(20, 22, 28, 0.9)',
              border: '1px solid var(--emerald-verified)',
              padding: '3px 8px',
              borderRadius: '10px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              backdropFilter: 'blur(4px)',
            }}
          >
            <CheckCircle2 size={12} />
            {isHindi ? `सुलझा (${bestScore}%)` : `SOLVED (${bestScore}%)`}
          </span>
        ) : (
          <span
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--paper-cream)',
              backgroundColor: 'rgba(20, 22, 28, 0.8)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '3px 8px',
              borderRadius: '10px',
              fontWeight: 600,
              backdropFilter: 'blur(4px)',
            }}
          >
            {isHindi ? 'नया केस' : 'NEW CASE'}
          </span>
        )}
      </div>

      <div>

        {/* Title & Subtitle */}
        <h4
          style={{
            fontSize: '1.35rem',
            color: 'var(--ink-paper-dark)',
            margin: '0 0 4px 0',
            lineHeight: 1.25,
            fontFamily: 'var(--font-serif)',
          }}
        >
          {loc.title}
        </h4>
        <p
          style={{
            fontSize: '0.88rem',
            fontStyle: 'italic',
            color: 'var(--ink-muted)',
            margin: '0 0 14px 0',
            fontFamily: 'var(--font-serif)',
          }}
        >
          {loc.subtitle}
        </p>

        {/* Meta Strip: Difficulty, Time, Location */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '14px',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              padding: '2px 8px',
              borderRadius: '4px',
              border: `1px solid ${difficultyBadgeStyle.border}`,
              backgroundColor: difficultyBadgeStyle.bg,
              color: difficultyBadgeStyle.color,
              fontWeight: 700,
            }}
          >
            {metadata.difficulty.toUpperCase()}
          </span>

          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--ink-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Clock size={12} />
            {metadata.estimatedMinutes}m
          </span>

          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--ink-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <MapPin size={12} />
            <span style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {metadata.location.split(',')[0]}
            </span>
          </span>
        </div>

        {/* Synopsis excerpt */}
        <p
          style={{
            fontSize: '0.88rem',
            lineHeight: 1.55,
            color: 'var(--ink-body)',
            fontFamily: 'var(--font-serif)',
            margin: '0 0 14px 0',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {loc.synopsis}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {metadata.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '8px',
                backgroundColor: 'var(--paper-aged)',
                border: '1px solid var(--paper-border)',
                color: 'var(--ink-charcoal)',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div
        style={{
          borderTop: '1px dashed var(--paper-border)',
          paddingTop: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {hasActiveRun ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onResume(metadata.id)}
              disabled={isLoadingEpisode}
              style={{
                flex: 1,
                backgroundColor: 'var(--brass-accent)',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 16px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px var(--brass-glow)',
                minHeight: '40px',
              }}
            >
              <Play size={16} />
              <span>{isHindi ? 'जारी रखें' : 'Continue'}</span>
            </button>
            <button
              onClick={() => {
                if (
                  window.confirm(
                    isHindi
                      ? 'क्या आप इस केस को शुरू से दोबारा शुरू करना चाहते हैं? आपकी वर्तमान जांच रीसेट हो जाएगी।'
                      : 'Restart this case from the beginning? Your current progress will be reset.'
                  )
                ) {
                  onRestart(metadata.id);
                }
              }}
              disabled={isLoadingEpisode}
              title={isHindi ? 'केस रीस्टार्ट करें' : 'Restart Case'}
              style={{
                backgroundColor: 'var(--paper-aged)',
                color: 'var(--ink-charcoal)',
                border: '1px solid var(--paper-border)',
                borderRadius: '6px',
                padding: '10px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '40px',
              }}
            >
              <RotateCcw size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onStart(metadata.id)}
            disabled={isLoadingEpisode}
            style={{
              width: '100%',
              backgroundColor: isSolved ? 'var(--paper-aged)' : 'var(--brass-accent)',
              color: isSolved ? 'var(--ink-charcoal)' : '#1a1a1a',
              border: isSolved ? '1px solid var(--paper-border)' : 'none',
              borderRadius: '6px',
              padding: '10px 16px',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: isSolved ? 'none' : '0 2px 8px var(--brass-glow)',
              minHeight: '40px',
            }}
          >
            <Play size={16} />
            <span>
              {isSolved
                ? isHindi
                  ? 'पुनः जांच करें'
                  : 'Play Again'
                : isHindi
                ? 'केस शुरू करें'
                : 'Start Case'}
            </span>
          </button>
        )}

        {/* Clues / Ending count info line */}
        <div
          style={{
            fontSize: '0.72rem',
            color: 'var(--ink-muted)',
            fontFamily: 'var(--font-mono)',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>
            {metadata.totalCluesCount} {isHindi ? 'सुराग' : 'Clues'}
          </span>
          <span>
            {metadata.totalEndingsCount} {isHindi ? 'संभावित अंत' : 'Endings'}
          </span>
        </div>
      </div>
    </div>
  );
};

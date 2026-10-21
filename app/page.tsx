'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { EPISODE_CATALOG_METADATA, getEpisodeMetadataById } from '@/data/episodes/catalog';
import { HOME_BACKGROUND_IMAGE, EPISODE_BACKGROUND_IMAGES } from '@/features/episodes/backgrounds';
import { triggerGoogleTranslate } from '@/features/localization/google-translate';
import {
  CompletedRunSummary,
  Episode,
  EpisodeMetadata,
  GameState,
} from '@/features/episodes/types';
import { MysteryLibrary } from '@/components/library/MysteryLibrary';
import {
  createInitialGameState,
  finalizeRun,
  transitionScenario,
} from '@/features/game-engine/engine';
import {
  DEFAULT_SETTINGS,
  GameSettings,
  SaveService,
} from '@/features/persistence/save-service';
import {
  downloadEpisodeForOffline,
  loadEpisode,
  removeEpisodeFromOffline,
} from '@/features/episodes/episode-loader';
import { soundEffects } from '@/components/ui/AudioPlayer';
import {
  ArrowLeft,
  BookOpen,
  Play,
  RotateCcw,
  GitCompare,
  Settings as SettingsIcon,
  ShieldAlert,
  Clock,
  Compass,
  FileCode,
  Award,
  Sparkles,
  Download,
  Check,
  Trash2,
} from '@/components/ui/Icons';
import { CategoryPortal } from '@/components/home/CategoryPortal';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { AppHeader } from '@/components/ui/AppHeader';
import { OnlineGuard } from '@/components/ui/OnlineGuard';
import { Footer } from '@/components/ui/Footer';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { getTranslation, SupportedLanguage } from '@/features/localization/translations';
import { getLocalizedEpisode, getLocalizedMetadata } from '@/features/localization/case-translations';

// Code-split heavy interactive modals and views
const InvestigationView = dynamic(
  () => import('@/components/game/InvestigationView').then((mod) => mod.InvestigationView),
  {
    loading: () => <CaseLoadingPlaceholder />,
  }
);

const EvidenceNotebook = dynamic(
  () => import('@/components/game/EvidenceNotebook').then((mod) => mod.EvidenceNotebook)
);

const EndingReflectionView = dynamic(
  () => import('@/components/game/EndingReflectionView').then((mod) => mod.EndingReflectionView)
);

const RunComparisonView = dynamic(
  () => import('@/components/game/RunComparisonView').then((mod) => mod.RunComparisonView)
);

const SettingsModal = dynamic(
  () => import('@/components/game/SettingsModal').then((mod) => mod.SettingsModal)
);

const CareerHub = dynamic(
  () => import('@/components/career/CareerHub').then((mod) => mod.CareerHub)
);

const RelationshipsHub = dynamic(
  () => import('@/components/relationships/RelationshipsHub').then((mod) => mod.RelationshipsHub)
);

function CaseLoadingPlaceholder() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          padding: '36px 48px',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '460px',
        }}
      >
        <span className="stamp-badge stamp-brass" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>
          OPENING STORY
        </span>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--ink-paper-dark)', margin: '12px 0 8px 0' }}>
          Loading Story & Evidence...
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', fontStyle: 'italic', margin: 0 }}>
          Getting scenes and clues ready for you...
        </p>
      </div>
    </div>
  );
}

export default function MysteryGameApp() {
  // Online-First: Active episode is loaded on demand, NOT statically bundled
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const [selectedMetadata, setSelectedMetadata] = useState<EpisodeMetadata>(EPISODE_CATALOG_METADATA[0]);
  const [isLoadingEpisode, setIsLoadingEpisode] = useState<boolean>(false);
  const [episodeLoadError, setEpisodeLoadError] = useState<string | null>(null);
  const [downloadedEpisodeIds, setDownloadedEpisodeIds] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const [gameState, setGameState] = useState<GameState | null>(null);
  const [activeRunsByEpisode, setActiveRunsByEpisode] = useState<Record<string, GameState>>({});
  const [completedRuns, setCompletedRuns] = useState<CompletedRunSummary[]>([]);
  const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS);
  const [currentView, setCurrentView] = useState<'home' | 'library' | 'investigation' | 'ending' | 'compare' | 'career_hub' | 'relationships_hub'>('home');
  const [isNotebookOpen, setIsNotebookOpen] = useState<boolean>(false);
  const [notebookInitialTab, setNotebookInitialTab] = useState<'clues' | 'connections' | 'suspects' | 'hypothesis'>('clues');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [lastEvents, setLastEvents] = useState<string[]>([]);
  const [latestFinishedRun, setLatestFinishedRun] = useState<CompletedRunSummary | null>(null);

  const currentLang: SupportedLanguage = settings.language || 'en';
  const t = getTranslation(currentLang);
  const localizedMetadata = getLocalizedMetadata(selectedMetadata, currentLang);
  const localizedActiveEpisode = activeEpisode ? getLocalizedEpisode(activeEpisode, currentLang) : null;

  const handleLanguageChange = async (newLang: SupportedLanguage) => {
    const updated = { ...settings, language: newLang };
    setSettings(updated);
    await SaveService.saveSettings(updated);
    triggerGoogleTranslate(newLang);
  };

  // Initialize persistence & load saves
  useEffect(() => {
    async function initStorage() {
      const [allActiveRuns, runs, userSettings, downloadedIds] = await Promise.all([
        SaveService.getAllActiveRuns(),
        SaveService.getCompletedRuns(),
        SaveService.getSettings(),
        SaveService.listOfflineDownloadedEpisodeIds(),
      ]);

      if (userSettings) {
        setSettings(userSettings);
        soundEffects.setMuted(!userSettings.soundEnabled);
        document.documentElement.setAttribute('data-theme', userSettings.theme);
        document.documentElement.setAttribute('data-font-size', userSettings.fontSize);
      }

      setCompletedRuns(runs);
      setDownloadedEpisodeIds(downloadedIds);

      const activeMap: Record<string, GameState> = {};
      for (const run of allActiveRuns) {
        if (!run.isCompleted) {
          activeMap[run.episodeId] = run;
        }
      }
      setActiveRunsByEpisode(activeMap);

      if (activeMap[selectedMetadata.id]) {
        setGameState(activeMap[selectedMetadata.id]);
      }
    }

    initStorage();
  }, []);

  // Ensure full episode is loaded into memory before playing
  const ensureEpisodeLoaded = async (episodeId?: string): Promise<Episode> => {
    const targetId = episodeId || selectedMetadata.id;
    if (activeEpisode && activeEpisode.id === targetId) return activeEpisode;
    setIsLoadingEpisode(true);
    setEpisodeLoadError(null);
    try {
      const ep = await loadEpisode(targetId);
      setActiveEpisode(ep);
      setIsLoadingEpisode(false);
      return ep;
    } catch (err: any) {
      setIsLoadingEpisode(false);
      setEpisodeLoadError(err.message || 'Failed to load case');
      throw err;
    }
  };

  // Handle Starting a Fresh Investigation for any case
  const handleSelectAndStart = async (episodeId: string) => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      alert(
        currentLang === 'hi'
          ? 'इस केस को चलाने के लिए सक्रिय इंटरनेट कनेक्शन आवश्यक है। आप वर्तमान में ऑफ़लाइन हैं।'
          : 'An internet connection is required to play this story. You are currently offline.'
      );
      return;
    }
    const meta = getEpisodeMetadataById(episodeId) || EPISODE_CATALOG_METADATA.find((e) => e.id === episodeId);
    if (meta) setSelectedMetadata(meta);

    soundEffects.playStampThud();
    try {
      const ep = await ensureEpisodeLoaded(episodeId);
      const freshState = createInitialGameState(ep);
      setGameState(freshState);
      setActiveRunsByEpisode((prev) => ({ ...prev, [episodeId]: freshState }));
      setLastEvents([]);
      await SaveService.saveActiveRun(freshState);
      setCurrentView('investigation');
    } catch (e) {
      // Error handled in ensureEpisodeLoaded
    }
  };

  // Handle Continuing Existing Run for any case
  const handleSelectAndResume = async (episodeId: string) => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      alert(
        currentLang === 'hi'
          ? 'इस केस को चलाने के लिए सक्रिय इंटरनेट कनेक्शन आवश्यक है। आप वर्तमान में ऑफ़लाइन हैं।'
          : 'An internet connection is required to play this story. You are currently offline.'
      );
      return;
    }
    const meta = getEpisodeMetadataById(episodeId) || EPISODE_CATALOG_METADATA.find((e) => e.id === episodeId);
    if (meta) setSelectedMetadata(meta);

    soundEffects.playPageTurn();
    try {
      const ep = await ensureEpisodeLoaded(episodeId);
      const savedRun = await SaveService.getActiveRun(episodeId);
      if (savedRun && !savedRun.isCompleted) {
        setGameState(savedRun);
        setActiveRunsByEpisode((prev) => ({ ...prev, [episodeId]: savedRun }));
      } else {
        const freshState = createInitialGameState(ep);
        setGameState(freshState);
        setActiveRunsByEpisode((prev) => ({ ...prev, [episodeId]: freshState }));
        await SaveService.saveActiveRun(freshState);
      }
      setCurrentView('investigation');
    } catch (e) {
      // Error handled in ensureEpisodeLoaded
    }
  };

  // Handle Restarting a Case
  const handleSelectAndRestart = async (episodeId: string) => {
    soundEffects.playStampThud();
    await SaveService.clearActiveRun(episodeId);
    setActiveRunsByEpisode((prev) => {
      const next = { ...prev };
      delete next[episodeId];
      return next;
    });
    await handleSelectAndStart(episodeId);
  };

  // Fallbacks for modals
  const handleStartNewGame = async () => {
    if (selectedMetadata) {
      await handleSelectAndStart(selectedMetadata.id);
    }
  };

  const handleContinueGame = async () => {
    if (selectedMetadata) {
      await handleSelectAndResume(selectedMetadata.id);
    }
  };

  // User-Initiated Offline Download Action
  const handleToggleOfflineDownload = async () => {
    const isDownloaded = downloadedEpisodeIds.includes(selectedMetadata.id);
    if (isDownloaded) {
      if (window.confirm('Remove this offline download (~180 KB)? You can download it again anytime when online. Your saved progress will remain safe.')) {
        soundEffects.playStampThud();
        await removeEpisodeFromOffline(selectedMetadata.id);
        const updated = await SaveService.listOfflineDownloadedEpisodeIds();
        setDownloadedEpisodeIds(updated);
      }
    } else {
      setIsDownloading(true);
      soundEffects.playTypewriterClick();
      const result = await downloadEpisodeForOffline(selectedMetadata.id);
      setIsDownloading(false);
      if (result.success) {
        soundEffects.playStampThud();
        const updated = await SaveService.listOfflineDownloadedEpisodeIds();
        setDownloadedEpisodeIds(updated);
      } else {
        alert(result.message);
      }
    }
  };

  const isProcessingChoiceRef = useRef<boolean>(false);

  // Handle Choice Selection in Game Engine with concurrency locking
  const handleMakeChoice = async (choiceId: string) => {
    if (!gameState || !activeEpisode || isProcessingChoiceRef.current) return;
    isProcessingChoiceRef.current = true;

    try {
      const { nextState, newlyDiscoveredClues, events } = transitionScenario(
        choiceId,
        gameState,
        activeEpisode
      );

      setLastEvents(events);

      if (newlyDiscoveredClues.length > 0) {
        soundEffects.playClueFound();
      }

      if (nextState.isCompleted && nextState.endingId) {
        soundEffects.playStampThud();
        const finishedRun = finalizeRun(nextState, activeEpisode);
        await SaveService.recordCompletedRun(finishedRun);
        await SaveService.clearActiveRun(activeEpisode.id);

        const updatedRuns = await SaveService.getCompletedRuns();
        setCompletedRuns(updatedRuns);
        setLatestFinishedRun(finishedRun);
        setGameState(nextState);
        setActiveRunsByEpisode((prev) => {
          const next = { ...prev };
          delete next[activeEpisode.id];
          return next;
        });
        setCurrentView('ending');
      } else {
        setGameState(nextState);
        await SaveService.saveActiveRun(nextState);
        setActiveRunsByEpisode((prev) => ({ ...prev, [activeEpisode.id]: nextState }));
      }
    } catch (err: any) {
      console.error('Choice error', err);
    } finally {
      isProcessingChoiceRef.current = false;
    }
  };

  // Handle Reaching Ending via Hypothesis Submission
  const handleReachEnding = async (endingId: string) => {
    if (!gameState || !activeEpisode) return;

    const stateWithEnding = {
      ...gameState,
      isCompleted: true,
      endingId,
    };

    const finishedRun = finalizeRun(stateWithEnding, activeEpisode);
    await SaveService.recordCompletedRun(finishedRun);
    await SaveService.clearActiveRun(activeEpisode.id);

    const updatedRuns = await SaveService.getCompletedRuns();
    setCompletedRuns(updatedRuns);
    setLatestFinishedRun(finishedRun);
    setGameState(stateWithEnding);
    setActiveRunsByEpisode((prev) => {
      const next = { ...prev };
      delete next[activeEpisode.id];
      return next;
    });
    setIsNotebookOpen(false);
    setCurrentView('ending');
  };

  // Open Notebook Drawer
  const handleOpenNotebook = (initialTab: 'clues' | 'connections' | 'suspects' | 'hypothesis' = 'clues') => {
    setNotebookInitialTab(initialTab);
    setIsNotebookOpen(true);
  };

  const isEpisodeDownloaded = downloadedEpisodeIds.includes(selectedMetadata.id);

  return (
    <>
      {/* STRICT ONLINE GUARD: Blocks gameplay if offline */}
      <OnlineGuard language={currentLang} />

      {/* VIEW: HOMEPAGE / CATEGORY PORTAL */}
      {currentView === 'home' && (
        <div
          style={{
            minHeight: '100vh',
            backgroundImage: `linear-gradient(rgba(12, 14, 18, 0.82), rgba(12, 14, 18, 0.90)), url(${HOME_BACKGROUND_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--paper-cream)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top Home Navigation Bar */}
          <AppHeader
            currentView="home"
            currentLanguage={currentLang}
            onLanguageChange={handleLanguageChange}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onNavigate={(view) => setCurrentView(view)}
            completedRunsCount={completedRuns.length}
            onCompareRuns={completedRuns.length >= 2 ? () => setCurrentView('compare') : undefined}
          />

          <main style={{ flex: 1, width: '100%', overflowX: 'hidden' }}>
            <ErrorBoundary fallbackTitle="Category Portal Interrupted">
              <CategoryPortal
                currentLanguage={currentLang}
                onSelectCategory={(catId) => {
                  if (catId === 'mystery-investigation') {
                    soundEffects.playPageTurn();
                    setCurrentView('library');
                  } else if (catId === 'career-skills-personal-development') {
                    soundEffects.playPageTurn();
                    setCurrentView('career_hub');
                  } else if (catId === 'relationships-social-life') {
                    soundEffects.playPageTurn();
                    setCurrentView('relationships_hub');
                  }
                }}
                activeRunCount={
                  Object.keys(activeRunsByEpisode).filter((k) => !activeRunsByEpisode[k].isCompleted).length
                }
                solvedRunCount={new Set(completedRuns.map((r) => r.episodeId)).size}
              />
            </ErrorBoundary>

            {/* Case Archives Section on Home */}
            {completedRuns.length > 0 && (
              <div className="home-archives-container">
                <section id="completed-archives-home" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={18} color="var(--brass-accent)" />
                      <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--paper-cream)' }}>
                        {currentLang === 'hi'
                          ? `सुलझे हुए केस अभिलेखागार (${completedRuns.length})`
                          : `Completed Stories & Cases (${completedRuns.length})`}
                      </h3>
                    </div>

                    {completedRuns.length >= 2 && (
                      <button
                        onClick={() => setCurrentView('compare')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--brass-accent)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        {currentLang === 'hi' ? 'केस तुलना देखें →' : 'Compare Story Choices Side-by-Side →'}
                      </button>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                    {completedRuns.map((run, idx) => (
                      <div
                        key={run.runId}
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-noir)',
                          borderRadius: '6px',
                          padding: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
                            Run #{completedRuns.length - idx}
                          </span>
                          <span
                            className={`stamp-badge ${run.endingTier === 'triumph' ? 'stamp-triumph' : 'stamp-alert'}`}
                            style={{ fontSize: '0.65rem' }}
                          >
                            {run.accuracyScore}%
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--paper-cream)', margin: 0 }}>
                          {run.endingTitle}
                        </h4>
                        <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                          {new Date(run.completedAt).toLocaleDateString()} • {run.cluesDiscoveredCount} clues • {run.decisionsCount} choices
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </main>

          <Footer
            currentLanguage={currentLang}
            onLanguageChange={handleLanguageChange}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onCompareRuns={completedRuns.length >= 2 ? () => setCurrentView('compare') : undefined}
          />
        </div>
      )}

      {/* VIEW: MAIN CASE LIBRARY / DESK (MYSTERY & INVESTIGATION DEPARTMENT) */}
      {currentView === 'library' && (
        <div
          style={{
            minHeight: '100vh',
            backgroundImage: `linear-gradient(rgba(13, 15, 20, 0.88), rgba(13, 15, 20, 0.94)), url(${EPISODE_BACKGROUND_IMAGES['the-midnight-cipher']})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--paper-cream)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top Library Navigation Bar with Responsive Hamburger Dropdown */}
          <AppHeader
            currentView="library"
            currentLanguage={currentLang}
            onLanguageChange={handleLanguageChange}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onNavigate={(view) => setCurrentView(view)}
            completedRunsCount={completedRuns.length}
            onCompareRuns={completedRuns.length >= 2 ? () => setCurrentView('compare') : undefined}
          />

          {/* Hero Mystery Banner & Case File */}
          <main
            style={{
              flex: 1,
              maxWidth: '1100px',
              width: '100%',
              margin: '0 auto',
              padding: '36px 24px 80px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            {/* Error Message if Network/Access failure */}
            {episodeLoadError && (
              <div
                style={{
                  backgroundColor: 'var(--crimson-bg)',
                  border: '1px solid var(--crimson-seal)',
                  color: 'var(--crimson-seal)',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                }}
              >
                <strong>Story Loading Error:</strong> {episodeLoadError}
              </div>
            )}

            {/* Mystery Case Library Grid & Series Collections */}
            <ErrorBoundary fallbackTitle="Story Library Interrupted" onReset={() => setCurrentView('home')}>
              <MysteryLibrary
                episodes={EPISODE_CATALOG_METADATA}
                activeRunsByEpisode={activeRunsByEpisode}
                completedRuns={completedRuns}
                currentLanguage={currentLang}
                isLoadingEpisode={isLoadingEpisode}
                onSelectAndStart={handleSelectAndStart}
                onSelectAndResume={handleSelectAndResume}
                onSelectAndRestart={handleSelectAndRestart}
              />
            </ErrorBoundary>

            {/* Case Archives Section */}
            {completedRuns.length > 0 && (
              <section id="completed-archives" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={18} color="var(--brass-accent)" />
                    <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--paper-cream)' }}>
                      Completed Stories & Cases ({completedRuns.length})
                    </h3>
                  </div>

                  {completedRuns.length >= 2 && (
                    <button
                      onClick={() => setCurrentView('compare')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--brass-accent)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Compare Story Choices Side-by-Side →
                    </button>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                  {completedRuns.map((run, idx) => (
                    <div
                      key={run.runId}
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-noir)',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
                          Run #{completedRuns.length - idx}
                        </span>
                        <span
                          className={`stamp-badge ${run.endingTier === 'triumph' ? 'stamp-triumph' : 'stamp-alert'}`}
                          style={{ fontSize: '0.65rem' }}
                        >
                          {run.accuracyScore}%
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--paper-cream)', margin: 0 }}>
                        {run.endingTitle}
                      </h4>
                      <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                        {new Date(run.completedAt).toLocaleDateString()} • {run.cluesDiscoveredCount} clues • {run.decisionsCount} choices
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Persistent Footer with All Relevant Pages */}
          <Footer
            currentLanguage={currentLang}
            onLanguageChange={handleLanguageChange}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onCompareRuns={completedRuns.length >= 2 ? () => setCurrentView('compare') : undefined}
          />
        </div>
      )}

      {/* VIEW: CAREER, SKILLS & PERSONAL DEVELOPMENT HUB (PHASE 3) */}
      {currentView === 'career_hub' && (
        <ErrorBoundary fallbackTitle="Career Hub Interrupted" onReset={() => setCurrentView('home')}>
          <CareerHub
            onBackToHome={() => {
              soundEffects.playPageTurn();
              setCurrentView('home');
            }}
            onLaunchSimulation={async (simId) => {
              if (activeRunsByEpisode[simId] && !activeRunsByEpisode[simId].isCompleted) {
                await handleSelectAndResume(simId);
              } else {
                await handleSelectAndStart(simId);
              }
            }}
            activeRunsByEpisode={activeRunsByEpisode}
            completedRuns={completedRuns}
            language={currentLang}
          />
        </ErrorBoundary>
      )}

      {/* VIEW: RELATIONSHIPS & SOCIAL LIFE HUB (PHASE 4) */}
      {currentView === 'relationships_hub' && (
        <ErrorBoundary fallbackTitle="Relationships Hub Interrupted" onReset={() => setCurrentView('home')}>
          <RelationshipsHub
            onBackToHome={() => {
              soundEffects.playPageTurn();
              setCurrentView('home');
            }}
            onLaunchScenario={async (scenarioId) => {
              if (activeRunsByEpisode[scenarioId] && !activeRunsByEpisode[scenarioId].isCompleted) {
                await handleSelectAndResume(scenarioId);
              } else {
                await handleSelectAndStart(scenarioId);
              }
            }}
            activeRunsByEpisode={activeRunsByEpisode}
            completedRuns={completedRuns}
            language={currentLang}
          />
        </ErrorBoundary>
      )}

      {/* VIEW: ACTIVE INVESTIGATION SCENE */}
      {currentView === 'investigation' && gameState && (localizedActiveEpisode || activeEpisode) && (
        <ErrorBoundary
          fallbackTitle="Investigation View Interrupted"
          onReset={() => {
            const isRel = activeEpisode && activeEpisode.id.startsWith('rel-');
            const isCareer = activeEpisode && (activeEpisode.id.startsWith('career-') || activeEpisode.id.startsWith('skills-') || activeEpisode.id.startsWith('personal-'));
            setCurrentView(isRel ? 'relationships_hub' : isCareer ? 'career_hub' : 'library');
          }}
        >
          <InvestigationView
            episode={localizedActiveEpisode || activeEpisode!}
            gameState={gameState}
            onMakeChoice={handleMakeChoice}
            onOpenNotebook={handleOpenNotebook}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onReturnToMenu={() => {
              const isRel = activeEpisode && activeEpisode.id.startsWith('rel-');
              const isCareer = activeEpisode && (activeEpisode.id.startsWith('career-') || activeEpisode.id.startsWith('skills-') || activeEpisode.id.startsWith('personal-'));
              setCurrentView(isRel ? 'relationships_hub' : isCareer ? 'career_hub' : 'library');
            }}
            lastEvents={lastEvents}
            currentLanguage={currentLang}
            onLanguageChange={handleLanguageChange}
          />
        </ErrorBoundary>
      )}

      {/* VIEW: ENDING REFLECTION */}
      {currentView === 'ending' && gameState && gameState.endingId && (localizedActiveEpisode || activeEpisode) && (
        <ErrorBoundary
          fallbackTitle="Ending Summary Interrupted"
          onReset={() => {
            const isRel = activeEpisode && activeEpisode.id.startsWith('rel-');
            const isCareer = activeEpisode && (activeEpisode.id.startsWith('career-') || activeEpisode.id.startsWith('skills-') || activeEpisode.id.startsWith('personal-'));
            setCurrentView(isRel ? 'relationships_hub' : isCareer ? 'career_hub' : 'library');
          }}
        >
          <EndingReflectionView
            episode={localizedActiveEpisode || activeEpisode!}
            ending={(localizedActiveEpisode || activeEpisode!).endings[gameState.endingId] || Object.values((localizedActiveEpisode || activeEpisode!).endings)[0]}
            completedRun={latestFinishedRun || finalizeRun(gameState, localizedActiveEpisode || activeEpisode!)}
            onReplay={handleStartNewGame}
            onCompareRuns={() => setCurrentView('compare')}
            onReturnToMenu={() => {
              const isRel = activeEpisode && activeEpisode.id.startsWith('rel-');
              const isCareer = activeEpisode && (activeEpisode.id.startsWith('career-') || activeEpisode.id.startsWith('skills-') || activeEpisode.id.startsWith('personal-'));
              setCurrentView(isRel ? 'relationships_hub' : isCareer ? 'career_hub' : 'library');
            }}
          />
        </ErrorBoundary>
      )}


      {/* VIEW: RUN COMPARISON */}
      {currentView === 'compare' && (
        <ErrorBoundary fallbackTitle="Comparison View Interrupted" onReset={() => setCurrentView('library')}>
          <RunComparisonView
            episode={localizedActiveEpisode || activeEpisode || undefined}
            completedRuns={completedRuns}
            onBack={() => setCurrentView('library')}
          />
        </ErrorBoundary>
      )}

      {/* NOTEBOOK MODAL OVERLAY */}
      {isNotebookOpen && gameState && (localizedActiveEpisode || activeEpisode) && (
        <ErrorBoundary fallbackTitle="Evidence Notebook Interrupted" onReset={() => setIsNotebookOpen(false)}>
          <EvidenceNotebook
            episode={localizedActiveEpisode || activeEpisode!}
            gameState={gameState}
            initialTab={notebookInitialTab}
            onClose={() => setIsNotebookOpen(false)}
            onUpdateState={(nextState) => {
              setGameState(nextState);
              SaveService.saveActiveRun(nextState);
            }}
            onReachEnding={handleReachEnding}
            currentLanguage={currentLang}
          />
        </ErrorBoundary>
      )}

      {/* SETTINGS MODAL */}
      {isSettingsOpen && (
        <SettingsModal
          settings={settings}
          onUpdateSettings={(newSettings) => {
            setSettings(newSettings);
            SaveService.saveSettings(newSettings);
          }}
          onRestartCase={handleStartNewGame}
          onResetProgress={() => {
            setGameState(null);
            setActiveRunsByEpisode({});
            setCompletedRuns([]);
            setCurrentView('home');
          }}
          onClose={() => setIsSettingsOpen(false)}
          hasActiveRun={Boolean(gameState && !gameState.isCompleted)}
        />
      )}
    </>
  );
}

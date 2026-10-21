'use client';

import React, { useEffect, useState } from 'react';
import {
  Clue,
  ClueCategory,
  Episode,
  GameState,
  Hypothesis,
  Suspect,
} from '@/features/episodes/types';
import { attemptClueConnection, evaluateHypothesis, examineClue } from '@/features/game-engine/engine';
import { soundEffects } from '@/components/ui/AudioPlayer';
import {
  X,
  BookOpen,
  Sparkles,
  User,
  Scale,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  Fingerprint,
  Link as LinkIcon,
  HelpCircle,
  ArrowRight,
} from '@/components/ui/Icons';
import { getTranslation, SupportedLanguage } from '@/features/localization/translations';

interface EvidenceNotebookProps {
  episode: Episode;
  gameState: GameState;
  initialTab?: 'clues' | 'connections' | 'suspects' | 'hypothesis';
  onClose: () => void;
  onUpdateState: (nextState: GameState) => void;
  onReachEnding: (endingId: string) => void;
  currentLanguage?: SupportedLanguage;
}

export const EvidenceNotebook: React.FC<EvidenceNotebookProps> = ({
  episode,
  gameState,
  initialTab = 'clues',
  onClose,
  onUpdateState,
  onReachEnding,
  currentLanguage = 'en',
}) => {
  const t = getTranslation(currentLanguage);
  const [activeTab, setActiveTab] = useState<'clues' | 'connections' | 'suspects' | 'hypothesis'>(initialTab);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedClueDetail, setSelectedClueDetail] = useState<Clue | null>(null);

  // Connection Board State
  const [connectionSlotA, setConnectionSlotA] = useState<string | null>(null);
  const [connectionSlotB, setConnectionSlotB] = useState<string | null>(null);
  const [connectionMessage, setConnectionMessage] = useState<{ text: string; success: boolean } | null>(null);

  // Hypothesis State
  const [selectedHypothesisId, setSelectedHypothesisId] = useState<string>(
    Object.keys(episode.hypotheses)[0] || ''
  );
  const [selectedEvidenceForHypo, setSelectedEvidenceForHypo] = useState<string[]>([]);
  const [hypothesisError, setHypothesisError] = useState<string | null>(null);

  const discoveredClues = gameState.discoveredClueIds
    .map((id) => episode.clues[id])
    .filter(Boolean) as Clue[];

  const filteredClues = discoveredClues.filter((clue) => {
    if (categoryFilter === 'all') return true;
    return clue.category === categoryFilter;
  });

  const handleSelectClueForDetail = (clue: Clue) => {
    soundEffects.playPageTurn();
    setSelectedClueDetail(clue);
    const updated = examineClue(clue.id, gameState);
    onUpdateState(updated);
  };

  const handleConnectClues = () => {
    if (!connectionSlotA || !connectionSlotB) {
      setConnectionMessage({ text: 'Please select two different clues to connect them.', success: false });
      return;
    }

    const res = attemptClueConnection(connectionSlotA, connectionSlotB, gameState, episode);
    if (res.success) {
      soundEffects.playStampThud();
      setConnectionMessage({ text: res.message, success: true });
      onUpdateState(res.nextState);
      setConnectionSlotA(null);
      setConnectionSlotB(null);
    } else {
      soundEffects.playTypewriterClick();
      setConnectionMessage({ text: res.message, success: false });
    }
  };

  const handleToggleHypothesisEvidence = (clueId: string) => {
    soundEffects.playTypewriterClick();
    if (selectedEvidenceForHypo.includes(clueId)) {
      setSelectedEvidenceForHypo(selectedEvidenceForHypo.filter((id) => id !== clueId));
    } else {
      if (selectedEvidenceForHypo.length >= 5) {
        setHypothesisError('You can select a maximum of 5 clues only.');
        return;
      }
      setSelectedEvidenceForHypo([...selectedEvidenceForHypo, clueId]);
      setHypothesisError(null);
    }
  };

  const handleSubmitHypothesis = () => {
    if (!selectedHypothesisId) return;
    if (selectedEvidenceForHypo.length === 0) {
      setHypothesisError('Please select at least 1 clue from your notebook as proof.');
      return;
    }

    soundEffects.playStampThud();
    const result = evaluateHypothesis(selectedHypothesisId, selectedEvidenceForHypo, gameState, episode);
    onUpdateState(result.nextState);
    onReachEnding(result.endingId);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="notebook-modal-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 11, 14, 0.85)',
        backdropFilter: 'blur(6px)',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '1020px',
          height: '90vh',
          maxHeight: '840px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Notebook Top Leather Spine & Header */}
        <div
          style={{
            backgroundColor: '#2b231d',
            color: '#f5efe0',
            padding: '14px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '3px solid var(--brass-accent)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen size={20} color="var(--brass-accent)" />
            <div>
              <h2 style={{ fontSize: '1.15rem', margin: 0, letterSpacing: '0.04em' }}>
                {t.notebookTitle.toUpperCase()}
              </h2>
              <span style={{ fontSize: '0.75rem', color: '#c9bca9', fontFamily: 'var(--font-mono)' }}>
                CONFIDENTIAL • CASE #{episode.id.toUpperCase()}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onClose();
            }}
            title="Close Notebook (Esc)"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#f5efe0',
              padding: '6px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Notebook Tabs Bar */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            backgroundColor: 'var(--paper-dark)',
            padding: '8px 16px 0 16px',
            borderBottom: '1px solid var(--paper-border)',
          }}
        >
          <button
            onClick={() => {
              soundEffects.playPageTurn();
              setActiveTab('clues');
            }}
            className="folder-tab"
            style={{
              backgroundColor: activeTab === 'clues' ? 'var(--paper-cream)' : 'transparent',
              color: activeTab === 'clues' ? 'var(--ink-charcoal)' : 'var(--ink-muted)',
              fontWeight: activeTab === 'clues' ? 700 : 500,
              border: 'none',
              borderBottom: activeTab === 'clues' ? '2px solid var(--brass-accent)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Fingerprint size={15} />
            <span>{t.tabClues} ({discoveredClues.length})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playPageTurn();
              setActiveTab('connections');
            }}
            className="folder-tab"
            style={{
              backgroundColor: activeTab === 'connections' ? 'var(--paper-cream)' : 'transparent',
              color: activeTab === 'connections' ? 'var(--ink-charcoal)' : 'var(--ink-muted)',
              fontWeight: activeTab === 'connections' ? 700 : 500,
              border: 'none',
              borderBottom: activeTab === 'connections' ? '2px solid var(--brass-accent)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={15} color="#27ae60" />
            <span>{t.tabConnections} ({gameState.formedConnectionIds.length})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playPageTurn();
              setActiveTab('suspects');
            }}
            className="folder-tab"
            style={{
              backgroundColor: activeTab === 'suspects' ? 'var(--paper-cream)' : 'transparent',
              color: activeTab === 'suspects' ? 'var(--ink-charcoal)' : 'var(--ink-muted)',
              fontWeight: activeTab === 'suspects' ? 700 : 500,
              border: 'none',
              borderBottom: activeTab === 'suspects' ? '2px solid var(--brass-accent)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <User size={15} />
            <span>{t.tabSuspects} ({Object.keys(episode.suspects).length})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playPageTurn();
              setActiveTab('hypothesis');
            }}
            className="folder-tab"
            style={{
              backgroundColor: activeTab === 'hypothesis' ? 'var(--paper-cream)' : 'transparent',
              color: activeTab === 'hypothesis' ? 'var(--ink-charcoal)' : 'var(--ink-muted)',
              fontWeight: activeTab === 'hypothesis' ? 700 : 500,
              border: 'none',
              borderBottom: activeTab === 'hypothesis' ? '2px solid var(--brass-accent)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Scale size={15} color="#8e2b2b" />
            <span>{t.tabHypothesis}</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* TAB 1: CLUES & EVIDENCE */}
          {activeTab === 'clues' && (
            <div style={{ display: 'flex', gap: '24px', height: '100%' }}>
              {/* Left Column: Clue Catalog */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Category Filters */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {([
                    { id: 'all', label: t.filterAll },
                    { id: 'physical', label: t.filterPhysical },
                    { id: 'document', label: t.filterDocument },
                    { id: 'testimony', label: t.filterTestimony },
                    { id: 'digital', label: t.filterDigital },
                    { id: 'alibi', label: t.filterAlibi },
                  ] as const).map(({ id: cat, label }) => (
                    <button
                      key={cat}
                      onClick={() => {
                        soundEffects.playTypewriterClick();
                        setCategoryFilter(cat);
                      }}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        border: categoryFilter === cat ? '1px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                        backgroundColor: categoryFilter === cat ? 'var(--brass-accent)' : 'var(--paper-aged)',
                        color: categoryFilter === cat ? '#1a1a1a' : 'var(--ink-paper-dark)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Clues List */}
                <div
                  style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    paddingRight: '6px',
                  }}
                >
                  {filteredClues.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--ink-muted)' }}>
                      <HelpCircle size={32} style={{ margin: '0 auto 10px auto', opacity: 0.5 }} />
                      <p>No clues discovered in this category yet.</p>
                      <span style={{ fontSize: '0.85rem' }}>Examine rooms and question witnesses to record leads.</span>
                    </div>
                  ) : (
                    filteredClues.map((clue) => {
                      const isSelected = selectedClueDetail?.id === clue.id;
                      return (
                        <div
                          key={clue.id}
                          onClick={() => handleSelectClueForDetail(clue)}
                          style={{
                            backgroundColor: isSelected ? 'var(--paper-dark)' : 'var(--paper-aged)',
                            border: isSelected ? '2px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'var(--transition-smooth)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span
                              style={{
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                color: 'var(--ink-charcoal)',
                              }}
                            >
                              {clue.title}
                            </span>
                            <span
                              style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                padding: '2px 6px',
                                backgroundColor: 'rgba(0,0,0,0.06)',
                                borderRadius: '3px',
                                fontFamily: 'var(--font-mono)',
                              }}
                            >
                              {clue.category}
                            </span>
                          </div>
                          <p
                            style={{
                              fontSize: '0.85rem',
                              color: 'var(--ink-body)',
                              lineHeight: 1.4,
                              margin: 0,
                            }}
                          >
                            {clue.shortDescription}
                          </p>
                          {clue.contradictsSuspectId && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <span className="stamp-badge stamp-alert" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                                CONTRADICTION
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Detailed Forensic Dossier of Selected Clue */}
              <div
                style={{
                  width: '360px',
                  backgroundColor: 'var(--paper-aged)',
                  border: '1px solid var(--paper-border)',
                  borderRadius: '6px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflowY: 'auto',
                }}
              >
                {selectedClueDetail ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ borderBottom: '1px solid var(--paper-border)', paddingBottom: '12px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--brass-accent)',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                        }}
                      >
                        FORENSIC ANALYSIS REPORT
                      </span>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--ink-charcoal)', marginTop: '4px' }}>
                        {selectedClueDetail.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
                        Found: {selectedClueDetail.locationFound}
                      </span>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '4px' }}>
                        Detailed Examination
                      </h4>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink-body)', fontFamily: 'var(--font-serif)' }}>
                        {selectedClueDetail.detailedAnalysis}
                      </p>
                    </div>

                    {selectedClueDetail.contradictionNote && (
                      <div
                        style={{
                          backgroundColor: 'var(--crimson-bg)',
                          borderLeft: '3px solid var(--crimson-seal)',
                          padding: '10px 12px',
                          borderRadius: '0 4px 4px 0',
                        }}
                      >
                        <span style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--crimson-seal)' }}>
                          CONTRADICTION ANALYSIS:
                        </span>
                        <p style={{ fontSize: '0.85rem', color: 'var(--crimson-seal)', margin: '4px 0 0 0' }}>
                          {selectedClueDetail.contradictionNote}
                        </p>
                      </div>
                    )}

                    <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--paper-border)' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {selectedClueDetail.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: '0.7rem',
                              padding: '2px 8px',
                              backgroundColor: 'var(--paper-cream)',
                              border: '1px solid var(--paper-border)',
                              borderRadius: '10px',
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: 'var(--ink-muted)',
                      gap: '8px',
                    }}
                  >
                    <Search size={32} style={{ opacity: 0.4 }} />
                    <p style={{ fontSize: '0.9rem' }}>Select any evidence card on the left to read full laboratory and ballistic reports.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: DEDUCTION BOARD (CLUE CONNECTIONS) */}
          {activeTab === 'connections' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
              {/* Connection Workbench */}
              <div
                style={{
                  backgroundColor: 'var(--paper-aged)',
                  border: '2px dashed var(--paper-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--ink-charcoal)' }}>Connect Clues Board</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--ink-body)' }}>
                    Combine two clues from your notebook to find how they connect together.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  {/* Slot A */}
                  <div
                    style={{
                      flex: 1,
                      minWidth: '220px',
                      backgroundColor: connectionSlotA ? 'var(--paper-cream)' : 'transparent',
                      border: connectionSlotA ? '2px solid var(--brass-accent)' : '1px dashed var(--paper-border)',
                      borderRadius: '6px',
                      padding: '12px 16px',
                      minHeight: '64px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {connectionSlotA ? (
                      <>
                        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                          {episode.clues[connectionSlotA]?.title || connectionSlotA}
                        </span>
                        <button
                          onClick={() => setConnectionSlotA(null)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <X size={14} />
                        </button>
                      </>
                    ) : (
                      <span style={{ color: 'var(--ink-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                        1. Select First Clue...
                      </span>
                    )}
                  </div>

                  <LinkIcon size={20} color="var(--brass-accent)" />

                  {/* Slot B */}
                  <div
                    style={{
                      flex: 1,
                      minWidth: '220px',
                      backgroundColor: connectionSlotB ? 'var(--paper-cream)' : 'transparent',
                      border: connectionSlotB ? '2px solid var(--brass-accent)' : '1px dashed var(--paper-border)',
                      borderRadius: '6px',
                      padding: '12px 16px',
                      minHeight: '64px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {connectionSlotB ? (
                      <>
                        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                          {episode.clues[connectionSlotB]?.title || connectionSlotB}
                        </span>
                        <button
                          onClick={() => setConnectionSlotB(null)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <X size={14} />
                        </button>
                      </>
                    ) : (
                      <span style={{ color: 'var(--ink-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                        2. Select Second Clue...
                      </span>
                    )}
                  </div>

                  <button
                    onClick={handleConnectClues}
                    disabled={!connectionSlotA || !connectionSlotB}
                    style={{
                      backgroundColor: connectionSlotA && connectionSlotB ? 'var(--brass-accent)' : 'var(--paper-dark)',
                      color: connectionSlotA && connectionSlotB ? '#1a1a1a' : 'var(--ink-muted)',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '12px 20px',
                      fontWeight: 700,
                      cursor: connectionSlotA && connectionSlotB ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.9rem',
                    }}
                  >
                    <Sparkles size={16} />
                    <span>Check Connection</span>
                  </button>
                </div>

                {connectionMessage && (
                  <div
                    style={{
                      padding: '10px 14px',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      backgroundColor: connectionMessage.success ? 'var(--emerald-bg)' : 'rgba(0,0,0,0.06)',
                      color: connectionMessage.success ? 'var(--emerald-verified)' : 'var(--ink-charcoal)',
                      borderLeft: `4px solid ${connectionMessage.success ? 'var(--emerald-verified)' : 'var(--ink-muted)'}`,
                    }}
                  >
                    {connectionMessage.text}
                  </div>
                )}
              </div>

              {/* Established Deductions List */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)', textTransform: 'uppercase' }}>
                  Discovered Connections ({gameState.formedConnectionIds.length}/{episode.connections.length})
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '12px' }}>
                  {episode.connections.map((conn) => {
                    const isFormed = gameState.formedConnectionIds.includes(conn.id);
                    if (!isFormed) return null;

                    return (
                      <div
                        key={conn.id}
                        style={{
                          backgroundColor: 'var(--paper-cream)',
                          border: '1px solid var(--emerald-verified)',
                          padding: '16px',
                          borderRadius: '6px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--emerald-verified)' }}>
                            {conn.deductionTitle}
                          </span>
                          <span className="stamp-badge stamp-triumph" style={{ fontSize: '0.65rem' }}>
                            VERIFIED
                          </span>
                        </div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--ink-charcoal)', lineHeight: 1.5, margin: 0 }}>
                          {conn.deductionText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Evidence Picker Drawer for Connection Slots */}
              <div style={{ borderTop: '1px solid var(--paper-border)', paddingTop: '12px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                  Select Clues to Place on Board:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {discoveredClues.map((clue) => (
                    <button
                      key={clue.id}
                      onClick={() => {
                        soundEffects.playTypewriterClick();
                        if (!connectionSlotA) setConnectionSlotA(clue.id);
                        else if (!connectionSlotB && connectionSlotA !== clue.id) setConnectionSlotB(clue.id);
                      }}
                      style={{
                        padding: '6px 12px',
                        backgroundColor:
                          connectionSlotA === clue.id || connectionSlotB === clue.id
                            ? 'var(--brass-accent)'
                            : 'var(--paper-aged)',
                        color:
                          connectionSlotA === clue.id || connectionSlotB === clue.id
                            ? '#1a1a1a'
                            : 'var(--ink-charcoal)',
                        border: '1px solid var(--paper-border)',
                        borderRadius: '4px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      {clue.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SUSPECT DOSSIERS */}
          {activeTab === 'suspects' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '16px' }}>
              {Object.values(episode.suspects).map((suspect) => {
                return (
                  <div
                    key={suspect.id}
                    style={{
                      backgroundColor: 'var(--paper-aged)',
                      border: '1px solid var(--paper-border)',
                      borderRadius: '8px',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ fontSize: '1.15rem', color: 'var(--ink-charcoal)', margin: 0 }}>
                          {suspect.name}
                        </h3>
                        <span style={{ fontSize: '0.82rem', color: 'var(--brass-accent)', fontWeight: 600 }}>
                          {suspect.role} ({suspect.age} yrs)
                        </span>
                      </div>
                      <span className="stamp-badge" style={{ fontSize: '0.65rem' }}>
                        SUSPECT
                      </span>
                    </div>

                    <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div>
                        <strong>Motive:</strong> <span style={{ color: 'var(--ink-body)' }}>{suspect.motive}</span>
                      </div>
                      <div>
                        <strong>Alibi:</strong> <span style={{ color: 'var(--ink-body)' }}>{suspect.alibi}</span>
                      </div>
                      <div>
                        <strong>Vulnerability:</strong> <span style={{ color: 'var(--crimson-seal)' }}>{suspect.weakness}</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px dashed var(--paper-border)' }}>
                      <p style={{ fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--ink-muted)', margin: 0 }}>
                        &ldquo;{suspect.interrogationSummary}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 4: HYPOTHESIS & ACCUSATION */}
          {activeTab === 'hypothesis' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
              <div
                style={{
                  backgroundColor: 'var(--paper-aged)',
                  padding: '16px 20px',
                  borderRadius: '6px',
                  borderLeft: '4px solid var(--crimson-seal)',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', color: 'var(--crimson-seal)' }}>Final Accusation & Solve Case</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-body)', margin: '4px 0 0 0' }}>
                  Select who you think committed the crime, verify their method, and choose up to 5 clues from your notebook as proof.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
                {/* Hypothesis Selection */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                    Select Who to Accuse:
                  </h4>
                  {Object.values(episode.hypotheses).map((hypo) => {
                    const isSelected = selectedHypothesisId === hypo.id;
                    const suspect = episode.suspects[hypo.accusedSuspectId];

                    return (
                      <div
                        key={hypo.id}
                        onClick={() => {
                          soundEffects.playTypewriterClick();
                          setSelectedHypothesisId(hypo.id);
                        }}
                        style={{
                          backgroundColor: isSelected ? 'var(--paper-cream)' : 'var(--paper-aged)',
                          border: isSelected ? '2px solid var(--crimson-seal)' : '1px solid var(--paper-border)',
                          padding: '14px 18px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink-charcoal)' }}>
                            {hypo.title}
                          </span>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--crimson-seal)' }}>
                            Accuse {suspect?.name || hypo.accusedSuspectId}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--ink-body)', margin: 0 }}>
                          <strong>Method:</strong> {hypo.methodSummary}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Evidence Checklist for Hypothesis */}
                <div
                  style={{
                    width: '380px',
                    backgroundColor: 'var(--paper-aged)',
                    border: '1px solid var(--paper-border)',
                    borderRadius: '6px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                    Choose Supporting Proof ({selectedEvidenceForHypo.length}/5):
                  </h4>

                  <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {discoveredClues.map((clue) => {
                      const isChecked = selectedEvidenceForHypo.includes(clue.id);
                      return (
                        <div
                          key={clue.id}
                          onClick={() => handleToggleHypothesisEvidence(clue.id)}
                          style={{
                            padding: '8px 12px',
                            backgroundColor: isChecked ? 'var(--paper-cream)' : 'transparent',
                            border: isChecked ? '1px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.85rem',
                          }}
                        >
                          <span style={{ color: 'var(--ink-charcoal)' }}>{clue.title}</span>
                          {isChecked ? <CheckCircle2 size={16} color="var(--brass-accent)" /> : <div style={{ width: 16 }} />}
                        </div>
                      );
                    })}
                  </div>

                  {hypothesisError && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--crimson-seal)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <AlertCircle size={14} />
                      <span>{hypothesisError}</span>
                    </div>
                  )}

                  <button
                    onClick={handleSubmitHypothesis}
                    style={{
                      backgroundColor: 'var(--crimson-seal)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '0.95rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>Submit Accusation & Close Case</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

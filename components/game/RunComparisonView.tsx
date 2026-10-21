'use client';

import React, { useState } from 'react';
import { CompletedRunSummary, Episode, RunComparisonDiff } from '@/features/episodes/types';
import { compareCompletedRuns } from '@/features/game-engine/engine';
import { soundEffects } from '@/components/ui/AudioPlayer';
import {
  GitCompare,
  ArrowRight,
  Split,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  Calendar,
} from '@/components/ui/Icons';

interface RunComparisonViewProps {
  episode?: Episode;
  completedRuns: CompletedRunSummary[];
  onBack: () => void;
}

export const RunComparisonView: React.FC<RunComparisonViewProps> = ({
  episode,
  completedRuns,
  onBack,
}) => {
  const [selectedRunAId, setSelectedRunAId] = useState<string>(
    completedRuns[0]?.runId || ''
  );
  const [selectedRunBId, setSelectedRunBId] = useState<string>(
    completedRuns[1]?.runId || completedRuns[0]?.runId || ''
  );

  const runA = completedRuns.find((r) => r.runId === selectedRunAId);
  const runB = completedRuns.find((r) => r.runId === selectedRunBId);

  const comparison: RunComparisonDiff | null =
    runA && runB ? compareCompletedRuns(runA, runB, episode) : null;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--paper-cream)',
        padding: '30px 20px 80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          maxWidth: '960px',
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Header Bar */}
        <header
          style={{
            backgroundColor: '#2b231d',
            color: '#f5efe0',
            padding: '20px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '3px solid var(--brass-accent)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => {
                soundEffects.playPageTurn();
                onBack();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#f5efe0',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <h1 style={{ fontSize: '1.4rem', margin: 0, letterSpacing: '0.03em' }}>
                COMPLETED RUNS COMPARISON
              </h1>
              <span style={{ fontSize: '0.78rem', color: '#c9bca9', fontFamily: 'var(--font-mono)' }}>
                CROSS-CASE REASONING & DECISION BRANCH AUDIT
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GitCompare size={20} color="var(--brass-accent)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--brass-accent)', fontWeight: 600 }}>
              {completedRuns.length} Total Archive(s)
            </span>
          </div>
        </header>

        {completedRuns.length < 2 ? (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--ink-muted)' }}>
            <HelpCircle size={48} style={{ margin: '0 auto 16px auto', opacity: 0.5 }} />
            <h3 style={{ color: 'var(--ink-charcoal)', marginBottom: '8px' }}>Need At Least Two Completed Runs</h3>
            <p style={{ maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Complete the investigation a second time taking different questioning paths, leads, and evidence combinations to unlock rich side-by-side branch comparison.
            </p>
            <button
              onClick={onBack}
              style={{
                marginTop: '24px',
                backgroundColor: 'var(--brass-accent)',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 24px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Return to Case
            </button>
          </div>
        ) : (
          <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Run Selectors Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: '20px',
                alignItems: 'center',
                backgroundColor: 'var(--paper-aged)',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid var(--paper-border)',
              }}
            >
              {/* Selector A */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                  Investigation Run A:
                </label>
                <select
                  value={selectedRunAId}
                  onChange={(e) => {
                    soundEffects.playTypewriterClick();
                    setSelectedRunAId(e.target.value);
                  }}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    border: '1px solid var(--paper-border)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--ink-charcoal)',
                  }}
                >
                  {completedRuns.map((r, idx) => (
                    <option key={r.runId} value={r.runId}>
                      Run #{idx + 1}: {r.endingTitle} ({r.accuracyScore}%) — {new Date(r.completedAt).toLocaleTimeString()}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ padding: '0 8px', color: 'var(--brass-accent)' }}>
                <GitCompare size={24} />
              </div>

              {/* Selector B */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                  Investigation Run B:
                </label>
                <select
                  value={selectedRunBId}
                  onChange={(e) => {
                    soundEffects.playTypewriterClick();
                    setSelectedRunBId(e.target.value);
                  }}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    border: '1px solid var(--paper-border)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--ink-charcoal)',
                  }}
                >
                  {completedRuns.map((r, idx) => (
                    <option key={r.runId} value={r.runId}>
                      Run #{idx + 1}: {r.endingTitle} ({r.accuracyScore}%) — {new Date(r.completedAt).toLocaleTimeString()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {comparison && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Outcomes Summary Comparison */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Run A Card */}
                  <div
                    style={{
                      backgroundColor: 'var(--paper-cream)',
                      border: '1px solid var(--paper-border)',
                      borderRadius: '8px',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                        RUN A VERDICT
                      </span>
                      <span className={`stamp-badge ${runA?.endingTier === 'triumph' ? 'stamp-triumph' : 'stamp-alert'}`}>
                        {runA?.accuracyScore}% ACCURACY
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--ink-charcoal)', margin: 0 }}>
                      {runA?.endingTitle}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--ink-body)' }}>
                      <div>Clues Discovered: <strong>{runA?.cluesDiscoveredCount}</strong> / {runA?.totalCluesCount}</div>
                      <div>Deductions Formed: <strong>{runA?.connectionsCount}</strong></div>
                      <div>Decisions Made: <strong>{runA?.decisionsCount}</strong></div>
                    </div>
                  </div>

                  {/* Run B Card */}
                  <div
                    style={{
                      backgroundColor: 'var(--paper-cream)',
                      border: '1px solid var(--paper-border)',
                      borderRadius: '8px',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                        RUN B VERDICT
                      </span>
                      <span className={`stamp-badge ${runB?.endingTier === 'triumph' ? 'stamp-triumph' : 'stamp-alert'}`}>
                        {runB?.accuracyScore}% ACCURACY
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--ink-charcoal)', margin: 0 }}>
                      {runB?.endingTitle}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--ink-body)' }}>
                      <div>Clues Discovered: <strong>{runB?.cluesDiscoveredCount}</strong> / {runB?.totalCluesCount}</div>
                      <div>Deductions Formed: <strong>{runB?.connectionsCount}</strong></div>
                      <div>Decisions Made: <strong>{runB?.decisionsCount}</strong></div>
                    </div>
                  </div>
                </div>

                {/* Branch Divergence Point Analysis */}
                <div
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Split size={18} color="var(--brass-accent)" />
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--ink-charcoal)', margin: 0 }}>
                      Narrative Divergence Point
                    </h3>
                  </div>

                  {comparison.divergencePoint ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <p style={{ fontSize: '0.9rem', color: 'var(--ink-body)', margin: 0 }}>
                        Both investigations proceeded identically for {comparison.sharedDecisionsCount} decision(s) until scenario{' '}
                        <strong>&ldquo;{episode?.scenarios[comparison.divergencePoint.scenarioId]?.title || comparison.divergencePoint.scenarioId}&rdquo;</strong>,
                        where your choices parted:
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '6px' }}>
                        <div
                          style={{
                            backgroundColor: '#fff',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            borderLeft: '4px solid var(--navy-lead)',
                            fontSize: '0.88rem',
                          }}
                        >
                          <span style={{ fontWeight: 700, color: 'var(--navy-lead)' }}>Run A Chose:</span>
                          <p style={{ margin: '4px 0 0 0', color: 'var(--ink-charcoal)' }}>
                            &ldquo;{comparison.divergencePoint.choiceA}&rdquo;
                          </p>
                        </div>

                        <div
                          style={{
                            backgroundColor: '#fff',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            borderLeft: '4px solid var(--brass-accent)',
                            fontSize: '0.88rem',
                          }}
                        >
                          <span style={{ fontWeight: 700, color: 'var(--brass-accent)' }}>Run B Chose:</span>
                          <p style={{ margin: '4px 0 0 0', color: 'var(--ink-charcoal)' }}>
                            &ldquo;{comparison.divergencePoint.choiceB}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-body)', margin: 0 }}>
                      Both runs followed identical decision routes or compared the exact same completed playthrough.
                    </p>
                  )}
                </div>

                {/* Evidence Differential Breakdown */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Clues Exclusive to A */}
                  <div
                    style={{
                      backgroundColor: 'var(--paper-cream)',
                      border: '1px solid var(--paper-border)',
                      borderRadius: '8px',
                      padding: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-lead)', textTransform: 'uppercase' }}>
                      Clues Found Only in Run A ({comparison.cluesExclusiveToA.length})
                    </span>
                    {comparison.cluesExclusiveToA.length > 0 ? (
                      <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--ink-charcoal)', lineHeight: 1.5 }}>
                        {comparison.cluesExclusiveToA.map((cId) => (
                          <li key={cId}>{episode?.clues[cId]?.title || cId}</li>
                        ))}
                      </ul>
                    ) : (
                      <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
                        No exclusive clues found.
                      </span>
                    )}
                  </div>

                  {/* Clues Exclusive to B */}
                  <div
                    style={{
                      backgroundColor: 'var(--paper-cream)',
                      border: '1px solid var(--paper-border)',
                      borderRadius: '8px',
                      padding: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brass-accent)', textTransform: 'uppercase' }}>
                      Clues Found Only in Run B ({comparison.cluesExclusiveToB.length})
                    </span>
                    {comparison.cluesExclusiveToB.length > 0 ? (
                      <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--ink-charcoal)', lineHeight: 1.5 }}>
                        {comparison.cluesExclusiveToB.map((cId) => (
                          <li key={cId}>{episode?.clues[cId]?.title || cId}</li>
                        ))}
                      </ul>
                    ) : (
                      <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
                        No exclusive clues found.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

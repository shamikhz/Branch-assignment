'use client';

import React from 'react';
import { CompletedRunSummary, Ending, Episode } from '@/features/episodes/types';
import { soundEffects } from '@/components/ui/AudioPlayer';
import {
  Award,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  GitCompare,
  Home,
  FileCheck,
  Percent,
} from '@/components/ui/Icons';
import { getEpisodeBackgroundImage } from '@/features/episodes/backgrounds';

interface EndingReflectionViewProps {
  episode: Episode;
  ending: Ending;
  completedRun: CompletedRunSummary;
  onReplay: () => void;
  onCompareRuns: () => void;
  onReturnToMenu: () => void;
}

export const EndingReflectionView: React.FC<EndingReflectionViewProps> = ({
  episode,
  ending,
  completedRun,
  onReplay,
  onCompareRuns,
  onReturnToMenu,
}) => {
  const getTierStyle = (tier: Ending['tier']) => {
    switch (tier) {
      case 'triumph':
        return {
          stampClass: 'stamp-badge stamp-triumph',
          borderColor: 'var(--emerald-verified)',
          bgHeader: 'rgba(39, 103, 73, 0.12)',
          badgeLabel: 'CASE SOLVED • EXCELLENT WORK',
        };
      case 'wrong_conviction':
        return {
          stampClass: 'stamp-badge stamp-alert',
          borderColor: 'var(--crimson-seal)',
          bgHeader: 'rgba(142, 43, 43, 0.12)',
          badgeLabel: 'WRONG SUSPECT ACCUSED • INNOCENT CONVICTED',
        };
      case 'partial':
        return {
          stampClass: 'stamp-badge stamp-brass',
          borderColor: 'var(--brass-accent)',
          bgHeader: 'rgba(201, 151, 56, 0.12)',
          badgeLabel: 'PARTIAL SUCCESS • MORE PROOF NEEDED',
        };
      case 'compromised':
      default:
        return {
          stampClass: 'stamp-badge stamp-alert',
          borderColor: '#6b2020',
          bgHeader: 'rgba(107, 32, 32, 0.12)',
          badgeLabel: 'CASE UNSOLVED • NEEDS REINVESTIGATION',
        };
    }
  };

  const tierStyle = getTierStyle(ending.tier);
  const accuracy = ending.criteriaReview.accuracyRate;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(12, 14, 18, 0.88), rgba(12, 14, 18, 0.95)), url(${getEpisodeBackgroundImage(episode.id)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--paper-cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px 80px 20px',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          maxWidth: '860px',
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Case Dossier Closure Header */}
        <header
          style={{
            backgroundColor: tierStyle.bgHeader,
            borderBottom: `2px solid ${tierStyle.borderColor}`,
            padding: '28px 36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--ink-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              FINAL INVESTIGATION REPORT • {episode.title}
            </span>
            <h1
              style={{
                fontSize: '1.85rem',
                color: 'var(--ink-charcoal)',
                marginTop: '4px',
                lineHeight: 1.2,
              }}
            >
              {ending.title}
            </h1>
          </div>

          <div className={tierStyle.stampClass} style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
            {ending.badge || tierStyle.badgeLabel}
          </div>
        </header>

        {/* Ending Narrative Content */}
        <section
          style={{
            padding: '36px',
            backgroundColor: 'var(--paper-cream)',
            borderBottom: '1px solid var(--paper-border)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'var(--ink-charcoal)',
            }}
          >
            {ending.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Reasoning Reflection & Truth Comparison */}
        <section
          style={{
            padding: '36px',
            backgroundColor: 'var(--paper-aged)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileCheck size={20} color="var(--brass-accent)" />
            <h2 style={{ fontSize: '1.25rem', color: 'var(--ink-charcoal)', margin: 0 }}>
              How You Solved It & The Complete Truth
            </h2>
          </div>

          {/* Accuracy Score Bar */}
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid var(--paper-border)',
              borderRadius: '6px',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: accuracy >= 80 ? 'var(--emerald-verified)' : accuracy >= 50 ? 'var(--brass-accent)' : 'var(--crimson-seal)',
                  lineHeight: 1,
                }}
              >
                {accuracy}%
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Investigation Score
              </span>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  width: '100%',
                  height: '10px',
                  backgroundColor: 'var(--paper-dark)',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${accuracy}%`,
                    height: '100%',
                    backgroundColor:
                      accuracy >= 80 ? 'var(--emerald-verified)' : accuracy >= 50 ? 'var(--brass-accent)' : 'var(--crimson-seal)',
                    transition: 'width 1s ease-in-out',
                  }}
                />
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-body)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;{ending.criteriaReview.reasoningCritique}&rdquo;
              </p>
            </div>
          </div>

          {/* Truth vs Deduction Side-by-Side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div
              style={{
                backgroundColor: 'var(--paper-cream)',
                border: '1px solid var(--paper-border)',
                borderRadius: '6px',
                padding: '16px',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-lead)', textTransform: 'uppercase' }}>
                The Real Truth
              </span>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)', marginTop: '8px', lineHeight: 1.5 }}>
                {ending.criteriaReview.theTruth}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--paper-cream)',
                border: '1px solid var(--paper-border)',
                borderRadius: '6px',
                padding: '16px',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brass-accent)', textTransform: 'uppercase' }}>
                Your Findings & Logic
              </span>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)', marginTop: '8px', lineHeight: 1.5 }}>
                {ending.criteriaReview.yourDeduction}
              </p>
            </div>
          </div>

          {/* Discoveries vs Missed Opportunities */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Key Discoveries */}
            <div
              style={{
                backgroundColor: 'rgba(39, 103, 73, 0.06)',
                border: '1px solid rgba(39, 103, 73, 0.3)',
                borderRadius: '6px',
                padding: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <CheckCircle size={16} color="var(--emerald-verified)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--emerald-verified)', textTransform: 'uppercase' }}>
                  Key Proof Found
                </span>
              </div>
              {ending.criteriaReview.keyDiscoveries.length > 0 ? (
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--ink-charcoal)', lineHeight: 1.5 }}>
                  {ending.criteriaReview.keyDiscoveries.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', fontStyle: 'italic', margin: 0 }}>
                  No decisive proof or connections were assembled.
                </p>
              )}
            </div>

            {/* Missed Opportunities */}
            <div
              style={{
                backgroundColor: 'rgba(142, 43, 43, 0.06)',
                border: '1px solid rgba(142, 43, 43, 0.3)',
                borderRadius: '6px',
                padding: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <AlertTriangle size={16} color="var(--crimson-seal)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--crimson-seal)', textTransform: 'uppercase' }}>
                  Missed Clues & Leads
                </span>
              </div>
              {ending.criteriaReview.missedOpportunities.length > 0 ? (
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--ink-charcoal)', lineHeight: 1.5 }}>
                  {ending.criteriaReview.missedOpportunities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: '0.85rem', color: 'var(--emerald-verified)', fontStyle: 'italic', margin: 0 }}>
                  None! You checked every single clue thoroughly.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <footer
          style={{
            padding: '24px 36px',
            backgroundColor: '#2b231d',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onReturnToMenu();
            }}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #4a3e35',
              color: '#d4cbb8',
              padding: '10px 18px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
            }}
          >
            <Home size={16} />
            <span>Back to Stories</span>
          </button>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => {
                soundEffects.playPageTurn();
                onCompareRuns();
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--brass-accent)',
                color: 'var(--brass-accent)',
                padding: '10px 18px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              <GitCompare size={16} />
              <span>Compare Choices Side-by-Side</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playTypewriterClick();
                onReplay();
              }}
              style={{
                backgroundColor: 'var(--brass-accent)',
                border: 'none',
                color: '#1a1a1a',
                padding: '10px 22px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem',
                fontWeight: 700,
              }}
            >
              <RotateCcw size={16} />
              <span>Play Story Again</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

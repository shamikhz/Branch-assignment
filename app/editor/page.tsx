'use client';

import React, { useState } from 'react';
import { midnightCipherEpisode } from '@/data/episodes/the-midnight-cipher';
import { Episode, Scenario } from '@/features/episodes/types';
import { validateEpisode, EpisodeValidationReport } from '@/features/validation/episode-validator';
import { soundEffects } from '@/components/ui/AudioPlayer';
import {
  FileEdit,
  CheckCircle,
  AlertTriangle,
  Download,
  Upload,
  Play,
  ArrowLeft,
  Plus,
  Trash2,
  Code,
  Layers,
  BookOpen,
} from '@/components/ui/Icons';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Footer } from '@/components/ui/Footer';
import { SupportedLanguage } from '@/features/localization/translations';
import { getLocalizedEpisode } from '@/features/localization/case-translations';

export default function EpisodeEditorPage() {
  const [editorLang, setEditorLang] = useState<SupportedLanguage>('en');
  const [episode, setEpisode] = useState<Episode>(midnightCipherEpisode);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    episode.initialScenarioId
  );
  const [activeEditorTab, setActiveEditorTab] = useState<'scenarios' | 'clues' | 'json' | 'validation'>('scenarios');
  const [jsonText, setJsonText] = useState<string>(
    JSON.stringify(midnightCipherEpisode, null, 2)
  );
  const [validationReport, setValidationReport] = useState<EpisodeValidationReport>(
    validateEpisode(midnightCipherEpisode)
  );

  const handleLanguageSwitchInEditor = (lang: SupportedLanguage) => {
    setEditorLang(lang);
    const localized = getLocalizedEpisode(midnightCipherEpisode, lang);
    setEpisode(localized);
    setJsonText(JSON.stringify(localized, null, 2));
    setValidationReport(validateEpisode(localized));
  };

  const handleRunValidation = () => {
    soundEffects.playStampThud();
    const report = validateEpisode(episode);
    setValidationReport(report);
    setActiveEditorTab('validation');
  };

  const handleExportJson = () => {
    soundEffects.playStampThud();
    const blob = new Blob([JSON.stringify(episode, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${episode.id}_v${episode.version}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleApplyJsonText = () => {
    try {
      const parsed = JSON.parse(jsonText);
      const report = validateEpisode(parsed);
      setValidationReport(report);
      if (report.isValid) {
        soundEffects.playStampThud();
        setEpisode(parsed);
        alert('Episode successfully parsed and updated in editor state!');
      } else {
        soundEffects.playTypewriterClick();
        alert(`Warning: JSON contains ${report.errors.length} validation error(s). See Validation tab.`);
        setEpisode(parsed);
      }
    } catch (err: any) {
      alert(`Invalid JSON: ${err.message}`);
    }
  };

  const currentScenario = episode.scenarios[selectedScenarioId];

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
      {/* Top Authoring Bar */}
      <header
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-noir)',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--ink-muted)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              padding: '6px 12px',
              border: '1px solid var(--border-noir)',
              borderRadius: '4px',
            }}
          >
            <ArrowLeft size={15} />
            <span>Game Library</span>
          </Link>

          <div>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--brass-accent)' }}>
              INTERNAL CASE AUTHORING TOOL
            </span>
            <h1 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--paper-cream)' }}>
              {episode.title} (v{episode.version})
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LanguageSwitcher
            currentLanguage={editorLang}
            onLanguageChange={handleLanguageSwitchInEditor}
            variant="pill"
          />

          <button
            onClick={handleRunValidation}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              backgroundColor: validationReport.isValid ? 'rgba(39, 103, 73, 0.2)' : 'rgba(142, 43, 43, 0.2)',
              border: `1px solid ${validationReport.isValid ? 'var(--emerald-verified)' : 'var(--crimson-seal)'}`,
              color: validationReport.isValid ? 'var(--emerald-verified)' : 'var(--crimson-seal)',
              fontWeight: 600,
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            {validationReport.isValid ? <CheckCircle size={15} /> : <AlertTriangle size={15} />}
            <span>Validate ({validationReport.errors.length} err / {validationReport.warnings.length} warn)</span>
          </button>

          <button
            onClick={handleExportJson}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-noir)',
              color: 'var(--paper-cream)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Download size={15} />
            <span>Export JSON</span>
          </button>

          <Link
            href="/"
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: 'var(--brass-accent)',
              border: 'none',
              color: '#1a1a1a',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
            }}
          >
            <Play size={15} />
            <span>Play Investigation</span>
          </Link>
        </div>
      </header>

      {/* Navigation Sub-Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          backgroundColor: 'var(--bg-surface-elevated)',
          padding: '8px 24px',
          borderBottom: '1px solid var(--border-noir)',
        }}
      >
        <button
          onClick={() => setActiveEditorTab('scenarios')}
          style={{
            padding: '6px 14px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: activeEditorTab === 'scenarios' ? 'var(--brass-accent)' : 'transparent',
            color: activeEditorTab === 'scenarios' ? '#1a1a1a' : 'var(--paper-cream)',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Layers size={14} />
          <span>Scenarios Graph ({Object.keys(episode.scenarios).length})</span>
        </button>

        <button
          onClick={() => setActiveEditorTab('clues')}
          style={{
            padding: '6px 14px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: activeEditorTab === 'clues' ? 'var(--brass-accent)' : 'transparent',
            color: activeEditorTab === 'clues' ? '#1a1a1a' : 'var(--paper-cream)',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <BookOpen size={14} />
          <span>Clues & Suspects ({Object.keys(episode.clues).length})</span>
        </button>

        <button
          onClick={() => {
            setJsonText(JSON.stringify(episode, null, 2));
            setActiveEditorTab('json');
          }}
          style={{
            padding: '6px 14px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: activeEditorTab === 'json' ? 'var(--brass-accent)' : 'transparent',
            color: activeEditorTab === 'json' ? '#1a1a1a' : 'var(--paper-cream)',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Code size={14} />
          <span>Raw JSON Editor</span>
        </button>

        <button
          onClick={() => setActiveEditorTab('validation')}
          style={{
            padding: '6px 14px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: activeEditorTab === 'validation' ? 'var(--brass-accent)' : 'transparent',
            color: activeEditorTab === 'validation' ? '#1a1a1a' : 'var(--paper-cream)',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <CheckCircle size={14} />
          <span>Graph & Integrity Audit</span>
        </button>
      </div>

      {/* Editor Body */}
      <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
        {/* TAB: SCENARIOS */}
        {activeEditorTab === 'scenarios' && (
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '24px', height: '100%' }}>
            {/* Scenarios Sidebar */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-noir)',
                borderRadius: '6px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                overflowY: 'auto',
                maxHeight: '75vh',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brass-accent)', textTransform: 'uppercase' }}>
                SCENARIOS LIST
              </span>
              {Object.values(episode.scenarios).map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedScenarioId(s.id)}
                  style={{
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    border: selectedScenarioId === s.id ? '1px solid var(--brass-accent)' : '1px solid transparent',
                    backgroundColor: selectedScenarioId === s.id ? 'var(--bg-surface-elevated)' : 'transparent',
                    color: selectedScenarioId === s.id ? 'var(--brass-accent)' : 'var(--paper-cream)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{s.title}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>{s.id}</div>
                </button>
              ))}
            </div>

            {/* Scenario Detail Editor */}
            {currentScenario && (
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-noir)',
                  borderRadius: '6px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--brass-accent)', fontFamily: 'var(--font-mono)' }}>
                    SCENARIO ID: {currentScenario.id}
                  </span>
                  <h2 style={{ fontSize: '1.4rem', color: 'var(--paper-cream)', marginTop: '4px' }}>
                    {currentScenario.title}
                  </h2>
                  <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                    Location: {currentScenario.location}
                  </span>
                </div>

                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                    Narrative Text
                  </strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                    {currentScenario.narrative.map((p, idx) => (
                      <p key={idx} style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: 1.6 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Choices in this scenario */}
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                    Branch Choices ({currentScenario.choices.length})
                  </strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    {currentScenario.choices.map((c) => (
                      <div
                        key={c.id}
                        style={{
                          backgroundColor: 'var(--bg-surface-elevated)',
                          border: '1px solid var(--border-noir)',
                          borderRadius: '6px',
                          padding: '12px 16px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{c.text}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--brass-accent)' }}>
                            → Destination: {c.destinationId} ({episode.scenarios[c.destinationId]?.title || 'Unknown'})
                          </div>
                        </div>
                        {c.consequencePreview && (
                          <span
                            style={{
                              fontSize: '0.72rem',
                              padding: '2px 8px',
                              borderRadius: '3px',
                              backgroundColor: 'rgba(255,255,255,0.08)',
                            }}
                          >
                            {c.consequencePreview}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB: CLUES & SUSPECTS */}
        {activeEditorTab === 'clues' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-noir)',
                borderRadius: '6px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--brass-accent)' }}>
                Clues Catalogue ({Object.keys(episode.clues).length})
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.values(episode.clues).map((clue) => (
                  <div
                    key={clue.id}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      borderRadius: '4px',
                      border: '1px solid var(--border-noir)',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{clue.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                      Category: {clue.category} • Location: {clue.locationFound}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-noir)',
                borderRadius: '6px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--brass-accent)' }}>
                Suspect Profiles ({Object.keys(episode.suspects).length})
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.values(episode.suspects).map((sus) => (
                  <div
                    key={sus.id}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      borderRadius: '4px',
                      border: '1px solid var(--border-noir)',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{sus.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                      Role: {sus.role} • Motive: {sus.motive.slice(0, 60)}...
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: RAW JSON */}
        {activeEditorTab === 'json' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                Edit episode JSON definition directly. Click Apply to test and validate.
              </span>
              <button
                onClick={handleApplyJsonText}
                style={{
                  padding: '8px 18px',
                  backgroundColor: 'var(--brass-accent)',
                  color: '#1a1a1a',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Apply JSON Changes
              </button>
            </div>
            <textarea
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              style={{
                flex: 1,
                minHeight: '65vh',
                backgroundColor: '#0d0e11',
                color: '#80d4ff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                padding: '16px',
                borderRadius: '6px',
                border: '1px solid var(--border-noir)',
                resize: 'none',
              }}
            />
          </div>
        )}

        {/* TAB: VALIDATION AUDIT */}
        {activeEditorTab === 'validation' && (
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-noir)',
              borderRadius: '8px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {validationReport.isValid ? (
                <CheckCircle size={28} color="var(--emerald-verified)" />
              ) : (
                <AlertTriangle size={28} color="var(--crimson-seal)" />
              )}
              <div>
                <h2 style={{ fontSize: '1.3rem', margin: 0 }}>
                  {validationReport.isValid ? 'Episode Schema & Graph Valid' : 'Validation Issues Detected'}
                </h2>
                <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                  {validationReport.stats.scenariosCount} Scenarios • {validationReport.stats.reachableScenariosCount} Reachable • {validationReport.stats.cluesCount} Clues • {validationReport.stats.reachableEndings.length} Reachable Endings
                </span>
              </div>
            </div>

            {/* Error List */}
            {validationReport.errors.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <strong style={{ color: 'var(--crimson-seal)', fontSize: '0.9rem' }}>
                  Errors ({validationReport.errors.length}):
                </strong>
                {validationReport.errors.map((err, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 12px',
                      backgroundColor: 'rgba(142, 43, 43, 0.15)',
                      borderLeft: '3px solid var(--crimson-seal)',
                      borderRadius: '3px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <strong>[{err.code}]</strong> {err.message}
                  </div>
                ))}
              </div>
            )}

            {/* Warning List */}
            {validationReport.warnings.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <strong style={{ color: 'var(--brass-accent)', fontSize: '0.9rem' }}>
                  Warnings ({validationReport.warnings.length}):
                </strong>
                {validationReport.warnings.map((warn, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 12px',
                      backgroundColor: 'rgba(201, 151, 56, 0.15)',
                      borderLeft: '3px solid var(--brass-accent)',
                      borderRadius: '3px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <strong>[{warn.code}]</strong> {warn.message}
                  </div>
                ))}
              </div>
            )}

            {/* Reachable Endings List */}
            <div style={{ borderTop: '1px solid var(--border-noir)', paddingTop: '16px' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                Reachable Endings:
              </strong>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px', flexWrap: 'wrap' }}>
                {validationReport.stats.reachableEndings.map((eId) => {
                  const ending = episode.endings[eId];
                  return (
                    <span
                      key={eId}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-noir)',
                        fontSize: '0.82rem',
                        color: ending?.tier === 'triumph' ? 'var(--emerald-verified)' : 'var(--paper-cream)',
                      }}
                    >
                      {ending ? ending.title : eId} ({ending?.tier})
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer
        currentLanguage={editorLang}
        onLanguageChange={handleLanguageSwitchInEditor}
      />
    </div>
  );
}

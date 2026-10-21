'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GameSettings, SaveService, StorageUsageSummary } from '@/features/persistence/save-service';
import { soundEffects } from '@/components/ui/AudioPlayer';
import {
  X,
  Volume2,
  VolumeX,
  Type,
  Palette,
  Download,
  Upload,
  RotateCcw,
  Trash2,
  Check,
  AlertTriangle,
  HardDrive,
  Languages,
} from '@/components/ui/Icons';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { getTranslation } from '@/features/localization/translations';

interface SettingsModalProps {
  settings: GameSettings;
  onUpdateSettings: (newSettings: GameSettings) => void;
  onRestartCase: () => void;
  onResetProgress?: () => void;
  onClose: () => void;
  hasActiveRun: boolean;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  settings,
  onUpdateSettings,
  onRestartCase,
  onResetProgress,
  onClose,
  hasActiveRun,
}) => {
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [storageSummary, setStorageSummary] = useState<StorageUsageSummary | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refreshStorage = async () => {
    try {
      const summary = await SaveService.getStorageUsageSummary();
      setStorageSummary(summary);
    } catch (e) {
      console.warn('Could not read storage estimate', e);
    }
  };

  useEffect(() => {
    refreshStorage();
  }, []);

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 KB';
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleClearCaches = async () => {
    soundEffects.playStampThud();
    await SaveService.clearNonessentialCaches();
    setImportStatus('Nonessential caches cleared. Saved investigations remain intact.');
    await refreshStorage();
  };

  const handleRemoveDownloadedEpisode = async (episodeId: string) => {
    soundEffects.playStampThud();
    await SaveService.removeOfflineDownloadedEpisode(episodeId);
    setImportStatus(`Removed offline pack for "${episodeId}".`);
    await refreshStorage();
  };

  const handleResetProgressOnly = async () => {
    if (
      window.confirm(
        'Are you sure you want to reset all game progress? All active games, completed stories, saved data, and settings will be completely cleared.'
      )
    ) {
      soundEffects.playStampThud();
      await SaveService.clearAllData();
      if (onResetProgress) {
        onResetProgress();
      }
      setImportStatus('All data has been completely reset and cleared.');
      await refreshStorage();
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }, 300);
    }
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

  const handleToggleSound = () => {
    const updated = { ...settings, soundEnabled: !settings.soundEnabled };
    soundEffects.setMuted(!updated.soundEnabled);
    if (updated.soundEnabled) soundEffects.playTypewriterClick();
    onUpdateSettings(updated);
  };

  const handleFontSizeChange = (fontSize: GameSettings['fontSize']) => {
    soundEffects.playTypewriterClick();
    const updated = { ...settings, fontSize };
    document.documentElement.setAttribute('data-font-size', fontSize);
    onUpdateSettings(updated);
  };

  const handleThemeChange = (theme: GameSettings['theme']) => {
    soundEffects.playTypewriterClick();
    const updated = { ...settings, theme };
    document.documentElement.setAttribute('data-theme', theme);
    onUpdateSettings(updated);
  };

  const handleExportSave = async () => {
    soundEffects.playStampThud();
    const data = await SaveService.exportFullSaveData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `detective_save_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        const res = await SaveService.importFullSaveData(json);
        if (res.success) {
          soundEffects.playStampThud();
          setImportStatus('Save data restored successfully! Reloading...');
          setTimeout(() => window.location.reload(), 1200);
        } else {
          setImportStatus(`Import error: ${res.message}`);
        }
      } catch (err: any) {
        setImportStatus('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  const handleClearAll = async () => {
    if (window.confirm('Are you sure you want to delete all saved runs, archives, and history? This cannot be undone.')) {
      soundEffects.playStampThud();
      await SaveService.resetPlayerProgress();
      if (onResetProgress) {
        onResetProgress();
      }
      if (typeof window !== 'undefined') {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
      }
    }
  };

  const isHindi = settings.language === 'hi';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundEffects.playPageTurn();
          onClose();
        }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 11, 14, 0.85)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        overflowY: 'auto',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '580px',
          maxHeight: 'min(90vh, 760px)',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 0 1px var(--border-noir)',
        }}
      >
        {/* Sticky Header */}
        <div
          style={{
            backgroundColor: '#231e1a',
            color: '#f5efe0',
            padding: '14px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid var(--brass-accent)',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--brass-accent)',
                boxShadow: '0 0 8px var(--brass-accent)',
                display: 'inline-block',
              }}
            />
            <h2 id="settings-modal-title" style={{ fontSize: '1.05rem', margin: 0, letterSpacing: '0.04em', fontWeight: 700 }}>
              {isHindi ? 'केस वरीयताएँ एवं सेटिंग्स' : 'CASE PREFERENCES & PERSISTENCE'}
            </h2>
          </div>
          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onClose();
            }}
            aria-label="Close settings"
            title="Close (Esc)"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#f5efe0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              transition: 'background-color 0.2s, border-color 0.2s',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            backgroundColor: 'var(--paper-cream)',
            overflowY: 'auto',
            flex: 1,
          }}
        >
          {/* Audio Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {settings.soundEnabled ? <Volume2 size={20} color="var(--brass-accent)" /> : <VolumeX size={20} color="var(--ink-muted)" />}
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)' }}>Detective Audio Feedback</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--ink-body)', margin: 0 }}>
                  Procedural mechanical typewriter clicks & stamp thuds
                </p>
              </div>
            </div>
            <button
              onClick={handleToggleSound}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: '1px solid var(--paper-border)',
                backgroundColor: settings.soundEnabled ? 'var(--brass-accent)' : 'var(--paper-aged)',
                color: settings.soundEnabled ? '#1a1a1a' : 'var(--ink-muted)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              {settings.soundEnabled ? 'Enabled' : 'Muted'}
            </button>
          </div>

          {/* Reading Font Size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Type size={18} color="var(--brass-accent)" />
              <strong style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)' }}>Reading Font Size</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {(['compact', 'normal', 'relaxed'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => handleFontSizeChange(size)}
                  style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: settings.fontSize === size ? '2px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                    backgroundColor: settings.fontSize === size ? 'var(--paper-dark)' : 'var(--paper-aged)',
                    color: 'var(--ink-charcoal)',
                    fontWeight: settings.fontSize === size ? 700 : 500,
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Atmosphere Theme */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Palette size={18} color="var(--brass-accent)" />
              <strong style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)' }}>Atmosphere Palette</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                onClick={() => handleThemeChange('paper-sepia')}
                style={{
                  padding: '10px',
                  borderRadius: '4px',
                  border: settings.theme === 'paper-sepia' ? '2px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                  backgroundColor: '#201e1b',
                  color: '#eee7d7',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                Autumn Sepia
              </button>
              <button
                onClick={() => handleThemeChange('noir-charcoal')}
                style={{
                  padding: '10px',
                  borderRadius: '4px',
                  border: settings.theme === 'noir-charcoal' ? '2px solid var(--brass-accent)' : '1px solid var(--paper-border)',
                  backgroundColor: '#14161b',
                  color: '#e5ded0',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                Midnight Charcoal
              </button>
            </div>
          </div>

          {/* Case & Interface Language */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Languages size={18} color="var(--brass-accent)" />
                <strong style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)' }}>
                  {getTranslation(settings.language || 'en').languageLabel}
                </strong>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
              {getTranslation(settings.language || 'en').languageDesc}
            </p>
            <LanguageSwitcher
              currentLanguage={settings.language || 'en'}
              onLanguageChange={(newLang) => {
                onUpdateSettings({ ...settings, language: newLang });
              }}
              variant="settings"
            />
          </div>

          {/* Storage & Offline Data Management */}
          <div
            style={{
              borderTop: '1px solid var(--paper-border)',
              paddingTop: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HardDrive size={18} color="var(--brass-accent)" />
                <strong style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)' }}>
                  Storage & Cache Management
                </strong>
              </div>
              {storageSummary?.isSupported && (
                <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                  {formatBytes(storageSummary.usageBytes)} / {formatBytes(storageSummary.quotaBytes)} ({storageSummary.usagePercent}%)
                </span>
              )}
            </div>

            {/* Storage Usage Breakdown Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '8px',
                fontSize: '0.78rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--paper-aged)',
                  padding: '8px 10px',
                  borderRadius: '4px',
                  border: '1px solid var(--paper-border)',
                }}
              >
                <div style={{ color: 'var(--ink-muted)' }}>Caches & Shell</div>
                <div style={{ fontWeight: 600, color: 'var(--ink-charcoal)', marginTop: '2px' }}>
                  {storageSummary ? formatBytes(storageSummary.cacheStorageBytes) : '~350 KB'}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--paper-aged)',
                  padding: '8px 10px',
                  borderRadius: '4px',
                  border: '1px solid var(--paper-border)',
                }}
              >
                <div style={{ color: 'var(--ink-muted)' }}>Connection Mode</div>
                <div style={{ fontWeight: 600, color: 'var(--emerald-verified)', marginTop: '2px' }}>
                  Live Online Only
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--paper-aged)',
                  padding: '8px 10px',
                  borderRadius: '4px',
                  border: '1px solid var(--paper-border)',
                }}
              >
                <div style={{ color: 'var(--ink-muted)' }}>Player Saves</div>
                <div style={{ fontWeight: 600, color: 'var(--ink-charcoal)', marginTop: '2px' }}>
                  {storageSummary
                    ? formatBytes(storageSummary.activeRunBytes + storageSummary.completedRunsBytes)
                    : '< 10 KB'}
                </div>
              </div>
            </div>

            {/* Storage Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                onClick={handleClearCaches}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'var(--paper-aged)',
                  border: '1px solid var(--paper-border)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--ink-charcoal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
                title="Clears disposable HTTP caches while keeping investigations completely safe"
              >
                <Trash2 size={14} />
                <span>Clear Caches</span>
              </button>

              <button
                onClick={handleResetProgressOnly}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'var(--crimson-bg)',
                  border: '1px solid var(--crimson-seal)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--crimson-seal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
                title="Completely resets and clears all game progress, completed stories, and saved data"
              >
                <RotateCcw size={14} />
                <span>Reset All Progress</span>
              </button>
            </div>

            <p style={{ fontSize: '0.73rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.4 }}>
              * Storage metrics are browser-reported estimates via Storage API. Cache cleanup does not affect player progress.
            </p>
          </div>

          {/* Save Management & Export / Import */}
          <div
            style={{
              borderTop: '1px solid var(--paper-border)',
              paddingTop: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <strong style={{ fontSize: '0.95rem', color: 'var(--ink-charcoal)' }}>
              Save File Archiving
            </strong>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button
                onClick={handleExportSave}
                style={{
                  padding: '10px 14px',
                  backgroundColor: 'var(--paper-aged)',
                  border: '1px solid var(--paper-border)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--ink-charcoal)',
                }}
              >
                <Download size={15} />
                <span>Export Save File</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  padding: '10px 14px',
                  backgroundColor: 'var(--paper-aged)',
                  border: '1px solid var(--paper-border)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--ink-charcoal)',
                }}
              >
                <Upload size={15} />
                <span>Import Save File</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                style={{ display: 'none' }}
                onChange={handleFileImport}
              />
            </div>

            {importStatus && (
              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  fontSize: '0.82rem',
                  backgroundColor: importStatus.includes('success') || importStatus.includes('restored') || importStatus.includes('cleared')
                    ? 'var(--emerald-bg)'
                    : 'var(--crimson-bg)',
                  color: importStatus.includes('success') || importStatus.includes('restored') || importStatus.includes('cleared')
                    ? 'var(--emerald-verified)'
                    : 'var(--crimson-seal)',
                }}
              >
                {importStatus}
              </div>
            )}

            {/* Restart Active Investigation */}
            {hasActiveRun && (
              <button
                onClick={() => {
                  if (window.confirm('Restart this investigation from the opening scene? Your completed case archives will be safely preserved.')) {
                    onRestartCase();
                    onClose();
                  }
                }}
                style={{
                  marginTop: '4px',
                  padding: '10px',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--brass-accent)',
                  color: 'var(--brass-accent)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <RotateCcw size={15} />
                <span>Restart Active Investigation</span>
              </button>
            )}

            <button
              onClick={handleClearAll}
              style={{
                marginTop: '2px',
                padding: '4px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'var(--crimson-seal)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                textDecoration: 'underline',
                textAlign: 'center',
              }}
            >
              Wipe All Data, Cache & Local Storage
            </button>
          </div>
        </div>

        {/* Sticky Bottom Footer Bar with Close Button */}
        <div
          style={{
            backgroundColor: '#231e1a',
            borderTop: '1px solid var(--border-noir)',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '0.78rem', color: '#a09d98', fontFamily: 'var(--font-mono)' }}>
            {isHindi ? 'प्रेस Esc बंद करने के लिए' : 'Press Esc or click outside to dismiss'}
          </span>
          <button
            onClick={() => {
              soundEffects.playPageTurn();
              onClose();
            }}
            style={{
              backgroundColor: 'var(--brass-accent)',
              color: '#1a1a1a',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 22px',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 10px var(--brass-glow)',
            }}
          >
            <Check size={16} />
            <span>{isHindi ? 'पूर्ण / बंद करें' : 'Done / Close'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

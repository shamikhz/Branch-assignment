'use client';

import React, { useEffect, useState } from 'react';
import { ShieldAlert, RotateCcw } from '@/components/ui/Icons';
import { soundEffects } from '@/components/ui/AudioPlayer';
import { SupportedLanguage } from '@/features/localization/translations';

interface OnlineGuardProps {
  language?: SupportedLanguage;
}

export const OnlineGuard: React.FC<OnlineGuardProps> = ({ language = 'en' }) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      soundEffects.playStampThud();
    };

    const handleOffline = () => {
      setIsOnline(false);
      soundEffects.playTypewriterClick();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    soundEffects.playTypewriterClick();
    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine);
    }
  };

  if (isOnline) {
    return null;
  }

  const isHindi = language === 'hi';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 11, 14, 0.92)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          maxWidth: '520px',
          width: '100%',
          padding: '36px',
          borderRadius: '8px',
          textAlign: 'center',
          border: '2px solid var(--crimson-seal)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--crimson-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--crimson-seal)',
          }}
        >
          <ShieldAlert size={32} />
        </div>

        <span
          className="stamp-badge stamp-alert"
          style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
        >
          {isHindi ? 'ऑनलाइन कनेक्शन आवश्यक' : 'LIVE ONLINE CONNECTION REQUIRED'}
        </span>

        <h3
          style={{
            fontSize: '1.45rem',
            color: 'var(--ink-paper-dark)',
            margin: 0,
            lineHeight: 1.25,
          }}
        >
          {isHindi
            ? 'केंद्रीय ब्यूरो से संपर्क टूट गया'
            : 'Central Bureau Connection Lost'}
        </h3>

        <p
          style={{
            fontSize: '0.98rem',
            color: 'var(--ink-body)',
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {isHindi
            ? 'यह जासूसी केस केवल ऑनलाइन चलाया जा सकता है। ऑफ़लाइन केस प्ले अक्षम है। कृपया जांच जारी रखने के लिए अपने इंटरनेट कनेक्शन की जांच करें।'
            : 'Detective mystery inquiries and case files are strictly online-only. Offline case execution is disabled. Please connect to the internet to resume your investigation.'}
        </p>

        <button
          onClick={handleRetry}
          style={{
            marginTop: '8px',
            backgroundColor: 'var(--brass-accent)',
            color: '#1a1a1a',
            border: 'none',
            borderRadius: '6px',
            padding: '12px 24px',
            fontSize: '0.95rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px var(--brass-glow)',
          }}
        >
          <RotateCcw size={16} />
          <span>{isHindi ? 'पुनः प्रयास करें' : 'Check Connection'}</span>
        </button>
      </div>
    </div>
  );
};

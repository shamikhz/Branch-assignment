'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Compass } from '@/components/ui/Icons';

export default function GlobalAppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected runtime crashes to console or monitoring service
    console.error('Next.js caught application error:', error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary, #12100e)',
        color: 'var(--paper-cream, #e8dfcf)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'var(--font-serif, serif)',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '40px 36px',
          borderRadius: '12px',
          borderLeft: '6px solid var(--ruby-red, #dc2626)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
          textAlign: 'center',
          backgroundColor: '#f5efe3',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(220, 38, 38, 0.12)',
            marginBottom: '18px',
          }}
        >
          <AlertTriangle size={32} color="var(--ruby-red, #dc2626)" />
        </div>

        <div>
          <span
            className="stamp-badge"
            style={{
              borderColor: 'var(--ruby-red, #dc2626)',
              color: 'var(--ruby-red, #dc2626)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              marginBottom: '12px',
              display: 'inline-block',
            }}
          >
            DISPATCH INTERRUPTED
          </span>
        </div>

        <h1
          style={{
            fontSize: '1.6rem',
            margin: '8px 0 12px 0',
            color: 'var(--ink-paper-dark, #2b221a)',
            fontWeight: 700,
          }}
        >
          Investigation Service Interrupted
        </h1>

        <p
          style={{
            fontSize: '0.96rem',
            lineHeight: 1.6,
            color: 'var(--ink-muted, #5a4f43)',
            margin: '0 0 20px 0',
          }}
        >
          The central archive encountered an unexpected state while loading this section.
          Your saved clues, deductions, and completed cases in local storage remain safely preserved.
        </p>

        {error.message && (
          <div
            style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono, monospace)',
              backgroundColor: 'rgba(0,0,0,0.06)',
              padding: '10px 14px',
              borderRadius: '6px',
              color: 'var(--ink-muted, #5a4f43)',
              marginBottom: '28px',
              textAlign: 'left',
              overflowX: 'auto',
              border: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <strong>Reference:</strong> {error.message}
            {error.digest && (
              <div style={{ marginTop: '4px', opacity: 0.7 }}>
                Digest: {error.digest}
              </div>
            )}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            onClick={() => reset()}
            className="btn-antique btn-antique-brass"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={16} />
            <span>Attempt Recovery</span>
          </button>

          <Link
            href="/"
            className="btn-antique"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              fontSize: '0.92rem',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Compass size={16} />
            <span>Return to Central Bureau</span>
          </Link>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-antique"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              fontSize: '0.92rem',
              cursor: 'pointer',
            }}
          >
            <span>Reload Platform</span>
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, BookOpen, ArrowLeft } from '@/components/ui/Icons';

export default function NotFoundPage() {
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
          maxWidth: '520px',
          width: '100%',
          padding: '44px 36px',
          borderRadius: '12px',
          borderLeft: '6px solid var(--brass-accent, #d4a359)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
          textAlign: 'center',
          backgroundColor: '#f5efe3',
        }}
      >
        <span
          className="stamp-badge stamp-brass"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            marginBottom: '16px',
            display: 'inline-block',
          }}
        >
          DOSSIER NOT FOUND • 404
        </span>

        <h1
          style={{
            fontSize: '1.8rem',
            margin: '8px 0 14px 0',
            color: 'var(--ink-paper-dark, #2b221a)',
            fontWeight: 700,
          }}
        >
          Unrecorded Case Record
        </h1>

        <p
          style={{
            fontSize: '0.96rem',
            lineHeight: 1.6,
            color: 'var(--ink-muted, #5a4f43)',
            margin: '0 0 28px 0',
          }}
        >
          The case file or section you are seeking does not exist in the Central Bureau archive.
          It may have been reclassified, expunged, or relocated to another branch.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            className="btn-antique btn-antique-brass"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              fontSize: '0.92rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <Compass size={16} />
            <span>Return to Categories</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') window.history.back();
            }}
            className="btn-antique"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              fontSize: '0.92rem',
              cursor: 'pointer',
            }}
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

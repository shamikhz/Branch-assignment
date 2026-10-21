import React from 'react';

export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary, #12100e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        className="parchment-sheet animate-fade-in"
        style={{
          padding: '36px 44px',
          borderRadius: '10px',
          textAlign: 'center',
          maxWidth: '440px',
          backgroundColor: '#f5efe3',
          borderLeft: '5px solid var(--brass-accent, #d4a359)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        }}
      >
        <div style={{ marginBottom: '14px' }}>
          <span
            className="stamp-badge stamp-brass"
            style={{ fontSize: '0.72rem', letterSpacing: '0.14em' }}
          >
            CENTRAL ARCHIVES
          </span>
        </div>
        <h3
          style={{
            fontSize: '1.25rem',
            color: 'var(--ink-paper-dark, #2b221a)',
            margin: '8px 0 8px 0',
            fontWeight: 700,
          }}
        >
          Accessing Dossier
        </h3>
        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--ink-muted, #5a4f43)',
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          Consulting central inquiry records and unsealing documentation...
        </p>
      </div>
    </div>
  );
}

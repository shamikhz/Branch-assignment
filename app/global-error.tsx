'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#12100e',
          color: '#e8dfcf',
          fontFamily: 'serif',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '540px',
            margin: '24px',
            padding: '36px',
            backgroundColor: '#f5efe3',
            color: '#2b221a',
            borderRadius: '10px',
            borderLeft: '6px solid #dc2626',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', margin: '0 0 12px 0' }}>
            Central Bureau Encountered a Critical Error
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#5a4f43', lineHeight: 1.6, margin: '0 0 24px 0' }}>
            A system-level interruption occurred. All encrypted player archives and saved case records remain secure.
          </p>
          {error.message && (
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                backgroundColor: 'rgba(0,0,0,0.06)',
                padding: '10px',
                borderRadius: '6px',
                marginBottom: '24px',
                textAlign: 'left',
              }}
            >
              Diagnostic: {error.message}
            </div>
          )}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => reset()}
              style={{
                padding: '10px 20px',
                backgroundColor: '#d4a359',
                color: '#1a140e',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Reset Session
            </button>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') window.location.href = '/';
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: 'transparent',
                color: '#2b221a',
                border: '1px solid #5a4f43',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Return Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

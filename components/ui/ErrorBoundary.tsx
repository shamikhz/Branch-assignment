'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw, AlertTriangle, Compass } from '@/components/ui/Icons';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
  onReset?: () => void;
  showHomeButton?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px 24px',
            backgroundColor: 'var(--bg-primary, #12100e)',
            color: 'var(--paper-cream, #e8dfcf)',
          }}
        >
          <div
            className="parchment-sheet animate-fade-in"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '36px 32px',
              borderRadius: '10px',
              borderLeft: '5px solid var(--ruby-red, #dc2626)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(220, 38, 38, 0.12)',
                marginBottom: '16px',
              }}
            >
              <AlertTriangle size={30} color="var(--ruby-red, #dc2626)" />
            </div>

            <span
              className="stamp-badge"
              style={{
                borderColor: 'var(--ruby-red, #dc2626)',
                color: 'var(--ruby-red, #dc2626)',
                fontSize: '0.72rem',
                display: 'inline-block',
                marginBottom: '12px',
              }}
            >
              INVESTIGATION DISRUPTION
            </span>

            <h2
              style={{
                fontSize: '1.4rem',
                margin: '0 0 10px 0',
                color: 'var(--ink-paper-dark, #2b221a)',
              }}
            >
              {this.props.fallbackTitle || 'Dossier Rendering Disrupted'}
            </h2>

            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.6,
                color: 'var(--ink-muted, #5a4f43)',
                margin: '0 0 24px 0',
              }}
            >
              {this.props.fallbackMessage ||
                'An unexpected narrative state occurred while rendering this dossier. Your saved progress in the bureau database remains intact.'}
            </p>

            {this.state.error?.message && (
              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  backgroundColor: 'rgba(0,0,0,0.06)',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  color: 'var(--ink-muted, #5a4f43)',
                  marginBottom: '24px',
                  textAlign: 'left',
                  overflowX: 'auto',
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <strong>Diagnostic:</strong> {this.state.error.message}
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
                onClick={this.handleReset}
                className="btn-antique btn-antique-brass"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  fontSize: '0.9rem',
                }}
              >
                <RotateCcw size={16} />
                <span>Recover Section</span>
              </button>

              <button
                type="button"
                onClick={this.handleReload}
                className="btn-antique"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  fontSize: '0.9rem',
                }}
              >
                <span>Reload Page</span>
              </button>

              {this.props.showHomeButton !== false && (
                <button
                  type="button"
                  onClick={this.handleGoHome}
                  className="btn-antique"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    fontSize: '0.9rem',
                  }}
                >
                  <Compass size={16} />
                  <span>Central Bureau</span>
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

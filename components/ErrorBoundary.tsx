'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="bg-[#0D1F3C] border border-red-500/30 rounded-xl p-8 text-center my-4">
          <div className="text-4xl mb-3" aria-hidden="true">⚠️</div>
          <h2 className="text-white font-bold text-lg mb-2">Etwas ist schiefgelaufen</h2>
          <p className="text-[#94A3B8] text-sm mb-4">Dieser Bereich konnte nicht geladen werden.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Erneut versuchen
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

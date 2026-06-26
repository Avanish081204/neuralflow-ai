'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type AuthMode = 'signin' | 'signup';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const router = useRouter();
  
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    router.push('/dashboard');
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .auth-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn var(--dur-micro) var(--ease-out);
        }
        .auth-modal {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          width: 100%;
          max-width: 420px;
          padding: 2.5rem;
          position: relative;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
          animation: slideUp var(--dur-micro) var(--ease-out);
        }
        .auth-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background var(--dur-micro), color var(--dur-micro);
        }
        .auth-close:hover {
          background: rgba(255,255,255,0.05);
          color: var(--color-text-primary);
        }
        .auth-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .auth-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .auth-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-muted);
        }
        .auth-input {
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          border-radius: 10px;
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color var(--dur-micro) var(--ease-out);
        }
        .auth-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .auth-submit {
          margin-top: 0.5rem;
          padding: 0.875rem;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, var(--color-primary), #ff8a00);
          color: white;
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform var(--dur-micro) var(--ease-out), box-shadow var(--dur-micro) var(--ease-out);
        }
        .auth-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 59, 143, 0.4);
        }
        .auth-switch {
          margin-top: 1.5rem;
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
        .auth-switch button {
          background: none;
          border: none;
          color: var(--color-primary);
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.3rem;
        }
        .auth-switch button:hover {
          text-decoration: underline;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      
      <div className="auth-overlay" onClick={onClose}>
        <div className="auth-modal" onClick={e => e.stopPropagation()}>
          <button className="auth-close" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <h2 className="auth-title">
            {mode === 'signin' ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="auth-desc">
            {mode === 'signin' 
              ? 'Enter your details to access your industrial dashboard.' 
              : 'Sign up to start optimizing your asset operations.'}
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className="auth-input-group">
                <label className="auth-label" htmlFor="name">Full Name</label>
                <input className="auth-input" type="text" id="name" placeholder="John Doe" required />
              </div>
            )}
            <div className="auth-input-group">
              <label className="auth-label" htmlFor="email">Work Email</label>
              <input className="auth-input" type="email" id="email" placeholder="john@company.com" required />
            </div>
            <div className="auth-input-group">
              <label className="auth-label" htmlFor="password">Password</label>
              <input className="auth-input" type="password" id="password" placeholder="••••••••" required />
            </div>
            
            <button type="submit" className="auth-submit">
              {mode === 'signin' ? 'Sign in to Dashboard' : 'Start Free Trial'}
            </button>
          </form>

          <div className="auth-switch">
            {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
            <button type="button" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
              {mode === 'signin' ? 'Start Free Trial' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

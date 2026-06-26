'use client';

import { useEffect, useRef, useState } from 'react';
import LogoSVG from './svgs/LogoSVG';
import AuthModal from './AuthModal';

const NAV_LINKS = [
  { label: 'Features',      href: '#features' },
  { label: 'Impact',        href: '#about'    },
  { label: 'Access Plans',  href: '#pricing'  },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.25rem clamp(1rem, 5vw, 2rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background var(--dur-layout) var(--ease-out),
                      border-color var(--dur-layout) var(--ease-out),
                      box-shadow var(--dur-layout) var(--ease-out);
          border-bottom: 1px solid transparent;
        }
        .nav--scrolled {
          background: rgba(5, 5, 5, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-color: var(--color-border);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4);
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }
        .nav-links a {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-muted);
          transition: color var(--dur-micro) var(--ease-out);
        }
        .nav-links a:hover { color: var(--color-text-primary); }

        .nav-cta-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .nav-signin {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: color var(--dur-micro) var(--ease-out);
          background: none;
          border: none;
        }
        .nav-signin:hover { color: var(--color-text-primary); }

        .nav-btn {
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, var(--color-primary), #ff8a00);
          color: #fff;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform var(--dur-micro) var(--ease-out),
                      box-shadow var(--dur-micro) var(--ease-out);
        }
        .nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.5);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-signin { display: none; }
        }
      `}</style>

      <header>
        <nav
          ref={navRef}
          className="nav-root"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a href="/" className="nav-logo" aria-label="NeuralFlow AI home">
            <LogoSVG width={32} height={32} />
            NeuralFlow<span style={{ color: 'var(--color-primary)' }}> AI</span>
          </a>

          {/* Nav links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA group */}
          <div className="nav-cta-group">
            <button 
              className="nav-signin" 
              type="button" 
              onClick={() => { setAuthMode('signin'); setIsAuthOpen(true); }}
            >
              Sign in
            </button>
            <button 
              className="nav-btn" 
              type="button"
              onClick={() => { setAuthMode('signup'); setIsAuthOpen(true); }}
            >
              Start Free Trial
            </button>
          </div>
        </nav>
      </header>
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialMode={authMode} 
      />
    </>
  );
}

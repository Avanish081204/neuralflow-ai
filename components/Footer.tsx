import LogoSVG from './svgs/LogoSVG';

const FOOTER_LINKS = {
  Platform: ['Unified Assets', 'Knowledge Search', 'Maintenance', 'Dashboard'],
  Solutions: ['Manufacturing', 'Energy', 'Aviation', 'IoT Integration', 'Digital Twins'],
  Company: ['About Us', 'Case Studies', 'Partners', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security'],
};

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: var(--color-surface);
          border-top: 1px solid var(--color-border);
          padding-block: clamp(3rem, 8vw, 5rem) 2rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }

        /* Brand col */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-primary);
          text-decoration: none;
        }
        .footer-brand-desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 26ch;
        }
        .footer-social {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }
        .footer-social-link {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          transition: color var(--dur-micro) var(--ease-out),
                      border-color var(--dur-micro) var(--ease-out),
                      background var(--dur-micro) var(--ease-out);
        }
        .footer-social-link:hover {
          color: var(--color-text-primary);
          border-color: var(--color-primary);
          background: rgba(108,99,255,0.1);
        }

        /* Link columns */
        .footer-col-title {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-primary);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-links a {
          position: relative;
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          transition: color var(--dur-micro) var(--ease-out),
                      transform var(--dur-micro) var(--ease-out);
        }
        .footer-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--color-primary), transparent);
          transition: width var(--dur-micro) var(--ease-out);
        }
        .footer-links a:hover { 
          color: var(--color-text-primary); 
          transform: translateX(4px);
        }
        .footer-links a:hover::after {
          width: 100%;
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
          gap: 1rem;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }
        .footer-bottom-links a {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--color-text-muted);
          transition: color var(--dur-micro) var(--ease-out);
        }
        .footer-bottom-links a:hover { color: var(--color-text-primary); }

        /* Status indicator */
        .status-dot {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--color-success);
        }
        .status-dot::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-success);
          animation: glowPulse 2s ease-in-out infinite;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: span 2;
          }
        }
        @media (max-width: 540px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .footer-bottom-links { flex-wrap: wrap; gap: 0.75rem; }
        }
      `}</style>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <a href="/" className="footer-logo" aria-label="NeuralFlow AI home">
                <LogoSVG width={28} height={28} />
                NeuralFlow<span style={{ color: 'var(--color-primary)' }}> AI</span>
              </a>
              <p className="footer-brand-desc">
                Intelligent data automation and knowledge retrieval for industries that build the future.
                <br /><br />
                <strong>Team NeuralFlow AI</strong><br />
                Avanish Shukla
              </p>
              <nav className="footer-social" aria-label="Social media links">
                <a href="https://github.com" className="footer-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                </a>
                <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
                <a href="https://linkedin.com" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
              </nav>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <nav key={category} aria-label={`${category} links`}>
                <h4 className="footer-col-title">{category}</h4>
                <ul className="footer-links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {year} NeuralFlow AI, Inc. All rights reserved.
            </p>

            <span className="status-dot" role="status" aria-label="All systems operational">
              All systems operational
            </span>

            <ul className="footer-bottom-links" aria-label="Legal links">
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

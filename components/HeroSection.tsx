'use client';

import { HeroAbstractSVG, ArrowRightIcon } from './svgs/Icons';

export default function HeroSection() {
  return (
    <>
      <style>{`
        /* ── Hero wrapper ── */
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 80px; /* navbar height */
        }

        /* ── Mesh background ── */
        .hero-mesh {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% -20%, rgba(var(--color-primary-rgb), 0.1), transparent 70%);
        }
        .hero-mesh::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -10%;
          width: 70%;
          height: 80%;
          background: radial-gradient(ellipse at center,
            rgba(var(--color-primary-rgb), 0.25) 0%,
            transparent 60%);
          animation: meshDrift 15s ease-in-out infinite alternate;
          will-change: transform;
          filter: blur(80px);
        }
        .hero-mesh::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 60%;
          height: 80%;
          background: radial-gradient(ellipse at center,
            rgba(var(--color-secondary-rgb), 0.2) 0%,
            transparent 60%);
          animation: meshDrift 12s ease-in-out infinite alternate-reverse;
          will-change: transform;
          filter: blur(80px);
        }

        /* ── Grid ── */
        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin-inline: auto;
          padding-inline: clamp(1rem, 5vw, 2rem);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 3rem;
          padding-block: 5rem 4rem;
        }

        /* ── Left content ── */
        .hero-content { display: flex; flex-direction: column; gap: 1.5rem; }

        /* Entry animations — staggered, total ≤ 500ms */
        .hero-badge  { opacity: 0; animation: fadeUp 0.35s var(--ease-out) 0ms    forwards; }
        .hero-h1     { opacity: 0; animation: fadeUp 0.4s  var(--ease-out) 80ms   forwards; }
        .hero-sub    { opacity: 0; animation: fadeUp 0.4s  var(--ease-out) 160ms  forwards; }
        .hero-ctas   { opacity: 0; animation: fadeUp 0.35s var(--ease-out) 240ms  forwards; }
        .hero-stats  { opacity: 0; animation: fadeUp 0.35s var(--ease-out) 320ms  forwards; }
        .hero-visual { opacity: 0; animation: fadeUp 0.4s  var(--ease-out) 100ms  forwards; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Badge ── */
        .hero-badge-inner {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 99px;
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text-primary);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .hero-badge-dot {
          width: 6px;
          height: 6px;
          background: var(--color-secondary);
          border-radius: 50%;
          animation: glowPulse 2s ease-in-out infinite;
        }

        /* ── Headline ── */
        .hero-h1-text {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--color-text-primary);
        }
        .hero-h1-line2 {
          display: block;
          background: linear-gradient(135deg, var(--color-primary) 0%, #ff8a00 50%, var(--color-secondary) 100%);
          background-size: 200% 200%;
          animation: aurora 8s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Subheading ── */
        .hero-sub-text {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          color: var(--color-text-muted);
          line-height: 1.7;
          max-width: 48ch;
        }

        /* ── CTAs ── */
        .hero-ctas-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* ── Stats bar ── */
        .hero-stats-group {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--color-border);
          flex-wrap: wrap;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .hero-stat-num {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }
        .hero-stat-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stat-sep {
          width: 1px;
          height: 2rem;
          background: var(--color-border);
        }

        /* ── Visual ── */
        .hero-visual-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-visual-glow {
          position: absolute;
          width: 70%;
          height: 70%;
          background: radial-gradient(ellipse,
            rgba(108,99,255,0.25) 0%,
            transparent 70%);
          pointer-events: none;
          animation: glowPulse 4s ease-in-out infinite;
        }
        .hero-svg-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 480px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            padding-block: 3rem 2rem;
          }
          .hero-badge  { justify-content: center; display: flex; }
          .hero-ctas-group { justify-content: center; }
          .hero-stats-group { justify-content: center; }
          .hero-sub-text { margin-inline: auto; }
          .hero-visual-wrap { order: -1; }
          .hero-svg-wrap { max-width: 280px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-badge, .hero-h1, .hero-sub, .hero-ctas, .hero-stats, .hero-visual {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      <section
        id="hero"
        className="hero"
        aria-label="Hero — NeuralFlow AI platform introduction"
      >
        {/* Ambient mesh background */}
        <div className="hero-mesh" aria-hidden="true" />

        <div className="hero-inner">
          {/* ── Left: Content ── */}
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-inner">
                <span className="hero-badge-dot" />
                Now in public beta — v2.0
              </span>
            </div>

            {/* H1 */}
            <h1 className="hero-h1 hero-h1-text">
              Orchestrate AI.<br />
              <span className="hero-h1-line2">At the speed of data.</span>
            </h1>

            {/* Subheading */}
            <p className="hero-sub hero-sub-text">
              NeuralFlow AI automates your most complex data workflows — merging
              200+ connectors, routing models intelligently, and deploying to any
              cloud in a single click. No code. No limits.
            </p>

            {/* CTAs */}
            <div className="hero-ctas hero-ctas-group">
              <button className="btn-primary" type="button">
                Start for free
                <ArrowRightIcon size={16} color="#fff" />
              </button>
              <button className="btn-ghost" type="button">
                Watch demo
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats hero-stats-group" aria-label="Platform statistics">
              <div className="hero-stat">
                <span className="hero-stat-num">10M+</span>
                <span className="hero-stat-label">Automations Run</span>
              </div>
              <div className="stat-sep" aria-hidden="true" />
              <div className="hero-stat">
                <span className="hero-stat-num">99.9%</span>
                <span className="hero-stat-label">Uptime SLA</span>
              </div>
              <div className="stat-sep" aria-hidden="true" />
              <div className="hero-stat">
                <span className="hero-stat-num">4.9★</span>
                <span className="hero-stat-label">Avg. Rating</span>
              </div>
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <div className="hero-visual hero-visual-wrap" aria-hidden="true">
            <div className="hero-visual-glow" />
            <div className="hero-svg-wrap">
              <HeroAbstractSVG />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

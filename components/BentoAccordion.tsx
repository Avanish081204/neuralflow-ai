'use client';

import { useEffect, useRef, useCallback } from 'react';
import {
  PipelineIcon, DataFusionIcon, ModelRoutingIcon,
  WebhookIcon, AuditIcon, DeployIcon,
} from './svgs/Icons';

/* ── Feature data ─────────────────────────────────────────── */
const FEATURES = [
  {
    id: 0,
    icon: PipelineIcon,
    title: 'Neural Pipeline Orchestration',
    description:
      'Automate multi-step AI workflows end-to-end with a visual drag-and-drop editor. Chain models, transformations, and APIs into a single declarative pipeline.',
    accent: '#6C63FF',
    size: 'large', // bento span
  },
  {
    id: 1,
    icon: DataFusionIcon,
    title: 'Real-Time Data Fusion',
    description:
      'Merge live data streams from 200+ connectors — databases, webhooks, APIs — with sub-second latency and zero data loss guarantees.',
    accent: '#00D4FF',
    size: 'small',
  },
  {
    id: 2,
    icon: ModelRoutingIcon,
    title: 'Adaptive Model Routing',
    description:
      'Automatically select the best-fit LLM per task based on cost, latency, and performance benchmarks. Switch models mid-flow without redeployment.',
    accent: '#8B84FF',
    size: 'small',
  },
  {
    id: 3,
    icon: WebhookIcon,
    title: 'Zero-Latency Webhooks',
    description:
      'Process webhook events in under 10ms at any scale. Guaranteed delivery with automatic retries, dead-letter queues, and real-time monitoring dashboards.',
    accent: '#00D4FF',
    size: 'small',
  },
  {
    id: 4,
    icon: AuditIcon,
    title: 'Audit & Compliance Engine',
    description:
      'SOC2 Type II and GDPR-ready logging, tracing, and access control — built directly into every pipeline step. Export reports in one click.',
    accent: '#22C55E',
    size: 'small',
  },
  {
    id: 5,
    icon: DeployIcon,
    title: 'One-Click Deployment',
    description:
      'Ship automations to AWS, GCP, Azure, or your own infra in a single action. Environment-aware config management handles the rest.',
    accent: '#6C63FF',
    size: 'large',
  },
] as const;

const MOBILE_BREAKPOINT = 768;

export default function BentoAccordion() {
  /* 
   * activeIndex stored in a ref — NOT useState — so changes to it
   * never trigger a React re-render of this component or its parent.
   * We manipulate the DOM directly for zero global reflow.
   */
  const activeIndexRef = useRef<number>(-1);
  const isMobileRef    = useRef<boolean>(false);

  /* ── DOM node refs ── */
  const bentoRef    = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  /* ── Sync active state to DOM ──────────────────────────────── */
  const applyBentoActive = useCallback((idx: number) => {
    if (!bentoRef.current) return;
    bentoRef.current.querySelectorAll<HTMLElement>('.bento-card').forEach((card, i) => {
      if (i === idx) {
        card.setAttribute('data-active', 'true');
      } else {
        card.removeAttribute('data-active');
      }
    });
  }, []);

  const applyAccordionActive = useCallback((idx: number) => {
    if (!accordionRef.current) return;
    accordionRef.current.querySelectorAll<HTMLElement>('.acc-item').forEach((item, i) => {
      const panel  = item.querySelector<HTMLElement>('.acc-panel');
      const arrow  = item.querySelector<HTMLElement>('.acc-arrow');
      const isOpen = i === idx;

      item.setAttribute('data-open', String(isOpen));

      if (panel) {
        if (isOpen) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.opacity   = '1';
        } else {
          panel.style.maxHeight = '0';
          panel.style.opacity   = '0';
        }
      }
      if (arrow) {
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }, []);

  /* ── Accordion toggle handler ──────────────────────────────── */
  const handleAccordionClick = useCallback((idx: number) => {
    const next = activeIndexRef.current === idx ? -1 : idx;
    activeIndexRef.current = next;
    applyAccordionActive(next);
  }, [applyAccordionActive]);

  /* ── Bento hover handlers ──────────────────────────────────── */
  const handleBentoEnter = useCallback((idx: number) => {
    activeIndexRef.current = idx;
    applyBentoActive(idx);
  }, [applyBentoActive]);

  const handleBentoLeave = useCallback(() => {
    activeIndexRef.current = -1;
    applyBentoActive(-1);
  }, [applyBentoActive]);

  /* ── ResizeObserver: context-lock transfer ────────────────── */
  useEffect(() => {
    const checkMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
    isMobileRef.current = checkMobile();

    let prev = isMobileRef.current;

    const observer = new ResizeObserver(() => {
      const now = checkMobile();
      if (now === prev) return; // no breakpoint crossing

      const crossedIdx = activeIndexRef.current;
      prev = now;
      isMobileRef.current = now;

      if (now) {
        /* Desktop → Mobile: transfer active bento index to accordion */
        applyBentoActive(-1);
        if (crossedIdx >= 0) {
          applyAccordionActive(crossedIdx);
        }
      } else {
        /* Mobile → Desktop: transfer open accordion index to bento */
        applyAccordionActive(-1);
        if (crossedIdx >= 0) {
          applyBentoActive(crossedIdx);
          /* reset after hover context is gone */
          setTimeout(() => {
            activeIndexRef.current = -1;
            applyBentoActive(-1);
          }, 600);
        }
      }
    });

    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, [applyBentoActive, applyAccordionActive]);

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════
           FEATURE SECTION WRAPPER
        ═══════════════════════════════════════════════════ */
        .features-section {
          padding-block: clamp(4rem, 10vw, 7rem);
        }
        .features-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }
        .features-header h2 {
          margin-bottom: 1rem;
        }
        .features-header p {
          max-width: 52ch;
          margin-inline: auto;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* ═══════════════════════════════════════════════════
           BENTO GRID — desktop
        ═══════════════════════════════════════════════════ */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 1rem;
        }

        /* Layout: card 0 spans 2 cols (large), cards 1-4 fill 2x2, card 5 spans 2 cols */
        .bento-card:nth-child(1) { grid-column: span 2; }
        .bento-card:nth-child(6) { grid-column: span 2; }

        .bento-card {
          position: relative;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.75rem;
          cursor: default;
          overflow: hidden;
          transition: border-color var(--dur-micro) var(--ease-out),
                      box-shadow   var(--dur-micro) var(--ease-out),
                      transform    var(--dur-micro) var(--ease-out);
          will-change: transform;
        }

        .bento-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(var(--card-accent-rgb), 0.08) 0%,
            transparent 60%);
          opacity: 0;
          transition: opacity var(--dur-micro) var(--ease-out);
          pointer-events: none;
        }

        .bento-card:hover,
        .bento-card[data-active="true"] {
          border-color: rgba(var(--card-accent-rgb), 0.5);
          box-shadow: 0 0 40px rgba(var(--card-accent-rgb), 0.15),
                      0 2px 16px rgba(0,0,0,0.4);
          transform: translateY(-3px);
        }

        .bento-card:hover::before,
        .bento-card[data-active="true"]::before { opacity: 1; }

        /* Icon container */
        .bento-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          background: rgba(var(--card-accent-rgb), 0.12);
          transition: background var(--dur-micro) var(--ease-out);
        }
        .bento-card:hover .bento-icon,
        .bento-card[data-active="true"] .bento-icon {
          background: rgba(var(--card-accent-rgb), 0.22);
        }

        .bento-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .bento-desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        /* ═══════════════════════════════════════════════════
           ACCORDION — mobile (hidden on desktop)
        ═══════════════════════════════════════════════════ */
        .accordion-list { display: none; }

        .acc-item {
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 0.5rem;
          transition: border-color var(--dur-micro) var(--ease-out);
        }

        .acc-item[data-open="true"] {
          border-color: rgba(var(--card-accent-rgb), 0.4);
        }

        .acc-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 1rem 1.25rem;
          background: var(--color-surface);
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .acc-trigger-title {
          flex: 1;
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .acc-arrow {
          flex-shrink: 0;
          transition: transform var(--dur-micro) var(--ease-out);
        }

        .acc-panel {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height var(--dur-layout) var(--ease-in-out),
                      opacity    var(--dur-layout) var(--ease-out);
        }

        .acc-panel-inner {
          padding: 0 1.25rem 1.25rem;
          background: var(--color-surface);
        }

        .acc-panel-inner p {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        /* ─── Breakpoint switch ────────────────────────────── */
        @media (max-width: 767px) {
          .bento-grid    { display: none; }
          .accordion-list { display: block; }
        }

        @media (max-width: 1024px) and (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-card:nth-child(1) { grid-column: span 2; }
          .bento-card:nth-child(6) { grid-column: span 2; }
        }
      `}</style>

      <section
        id="features"
        className="features-section"
        aria-labelledby="features-heading"
      >
        <div className="container">
          {/* Section header */}
          <header className="features-header reveal">
            <span className="section-eyebrow" aria-hidden="true">Core Features</span>
            <h2 id="features-heading">
              Everything your AI stack needs.<br />
              <span className="gradient-text">Nothing it doesn't.</span>
            </h2>
            <p>
              Six production-grade capabilities, built as a unified platform —
              not a patchwork of disconnected tools.
            </p>
          </header>

          {/* ── BENTO GRID (desktop) ── */}
          <div
            ref={bentoRef}
            className="bento-grid"
            role="list"
            aria-label="Feature list"
          >
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              // Convert hex to RGB for CSS variable
              const rgb = hexToRgb(feat.accent);
              return (
                <article
                  key={feat.id}
                  className="bento-card reveal scroll-3d"
                  role="listitem"
                  style={{ '--card-accent-rgb': rgb } as React.CSSProperties}
                  onMouseEnter={() => handleBentoEnter(feat.id)}
                  onMouseLeave={handleBentoLeave}
                  aria-label={feat.title}
                >
                  <div className="bento-icon" aria-hidden="true">
                    <Icon size={22} color={feat.accent} />
                  </div>
                  <h3 className="bento-title">{feat.title}</h3>
                  <p className="bento-desc">{feat.description}</p>
                </article>
              );
            })}
          </div>

          {/* ── ACCORDION (mobile) ── */}
          <div
            ref={accordionRef}
            className="accordion-list"
            role="list"
            aria-label="Feature list"
          >
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              const rgb  = hexToRgb(feat.accent);
              return (
                <div
                  key={feat.id}
                  className="acc-item"
                  role="listitem"
                  data-open="false"
                  style={{ '--card-accent-rgb': rgb } as React.CSSProperties}
                >
                  <button
                    className="acc-trigger"
                    type="button"
                    aria-expanded="false"
                    aria-controls={`acc-panel-${feat.id}`}
                    onClick={() => handleAccordionClick(feat.id)}
                  >
                    <span className="bento-icon" style={{ margin: 0 }} aria-hidden="true">
                      <Icon size={18} color={feat.accent} />
                    </span>
                    <span className="acc-trigger-title">{feat.title}</span>
                    <span className="acc-arrow" aria-hidden="true">
                      <ChevronSVG />
                    </span>
                  </button>
                  <div
                    id={`acc-panel-${feat.id}`}
                    className="acc-panel"
                    role="region"
                    aria-label={feat.title}
                  >
                    <div className="acc-panel-inner">
                      <p>{feat.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Helpers ── */
function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function ChevronSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

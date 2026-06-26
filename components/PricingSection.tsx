'use client';

import { useRef, useEffect, useCallback } from 'react';
import { CheckIcon } from './svgs/Icons';

/* ════════════════════════════════════════════════════════════════
   PRICING MATRIX — single source of truth, no hardcoded UI values
════════════════════════════════════════════════════════════════ */
const PRICING_MATRIX = {
  tiers: ['starter', 'pro', 'enterprise'] as const,

  baseRates: {
    starter:    29,
    pro:        79,
    enterprise: 199,
  },

  annualMultiplier: 0.80, // 20% annual discount

  currencyConfig: {
    USD: { symbol: '$',  tariff: 1.00,  code: 'USD' },
    INR: { symbol: '₹',  tariff: 83.5,  code: 'INR' },
    EUR: { symbol: '€',  tariff: 0.92,  code: 'EUR' },
  },
} as const;

type Tier     = typeof PRICING_MATRIX.tiers[number];
type Currency = keyof typeof PRICING_MATRIX.currencyConfig;
type Cycle    = 'monthly' | 'annual';

/* Compute final price — pure function, called on DOM mutation only */
function computePrice(tier: Tier, cycle: Cycle, currency: Currency): string {
  const base    = PRICING_MATRIX.baseRates[tier];
  const multi   = cycle === 'annual' ? PRICING_MATRIX.annualMultiplier : 1;
  const tariff  = PRICING_MATRIX.currencyConfig[currency].tariff;
  const symbol  = PRICING_MATRIX.currencyConfig[currency].symbol;
  const amount  = Math.round(base * multi * tariff);
  return `${symbol}${amount.toLocaleString()}`;
}

/* ── Tier content (non-price data — static, no mutations needed) ── */
const TIER_META = {
  starter: {
    label:    'Plant Operator',
    tagline:  'Essential knowledge access for floor operations.',
    features: [
      'Instant SOP retrieval',
      'Basic natural language search',
      'Mobile-optimized viewing',
      'Asset manual access',
      'Standard support',
    ],
    highlighted: false,
    ctaLabel: 'Get Operator Access',
  },
  pro: {
    label:    'Maintenance Engineer',
    tagline:  'Advanced predictive maintenance and real-time monitoring.',
    features: [
      'Intelligent maintenance alerts',
      'Failure prediction models',
      'Real-time asset health dashboard',
      'All Plant Operator features',
      'Priority technical support',
    ],
    highlighted: true,
    ctaLabel: 'Start Engineer Trial',
  },
  enterprise: {
    label:    'Enterprise / Manager',
    tagline:  'Complete control and integration for Operations Managers.',
    features: [
      'Unlimited asset integrations',
      'Custom ERP/MES connectors',
      'Digital Twin & IoT support',
      'Advanced RBAC & Audit logs',
      'Dedicated onboarding manager',
    ],
    highlighted: false,
    ctaLabel: 'Contact Sales',
  },
};

/* ── DOM node ref map ── */
type PriceRefs = {
  [K in Tier]: React.RefObject<HTMLSpanElement>;
};

export default function PricingSection() {
  /*
   * State refs — NEVER useState for currency/cycle.
   * Changes only mutate the price text nodes; no component re-render.
   */
  const cycleRef    = useRef<Cycle>('monthly');
  const currencyRef = useRef<Currency>('USD');

  /* One ref per price node */
  const priceRefs: PriceRefs = {
    starter:    useRef<HTMLSpanElement>(null),
    pro:        useRef<HTMLSpanElement>(null),
    enterprise: useRef<HTMLSpanElement>(null),
  };

  /* Period label refs (month / mo) */
  const periodRefs = {
    starter:    useRef<HTMLSpanElement>(null),
    pro:        useRef<HTMLSpanElement>(null),
    enterprise: useRef<HTMLSpanElement>(null),
  };

  /* Toggle button refs for aria-pressed */
  const monthlyBtnRef = useRef<HTMLButtonElement>(null);
  const annualBtnRef  = useRef<HTMLButtonElement>(null);

  /* ── Core update: mutate only price text nodes ── */
  const updatePrices = useCallback(() => {
    const cycle    = cycleRef.current;
    const currency = currencyRef.current;

    PRICING_MATRIX.tiers.forEach((tier) => {
      const node = priceRefs[tier].current;
      if (node) {
        node.textContent = computePrice(tier, cycle, currency);
      }
      const period = periodRefs[tier].current;
      if (period) {
        period.textContent = cycle === 'annual' ? 'mo, billed annually' : 'per month';
      }
    });
  }, []); // no deps — reads from refs directly

  /* ── Cycle toggle handler ── */
  const setCycle = useCallback((c: Cycle) => {
    if (cycleRef.current === c) return;
    cycleRef.current = c;

    /* Update toggle button styles via data attribute — zero re-render */
    if (monthlyBtnRef.current) {
      monthlyBtnRef.current.setAttribute('data-active', String(c === 'monthly'));
      monthlyBtnRef.current.setAttribute('aria-pressed', String(c === 'monthly'));
    }
    if (annualBtnRef.current) {
      annualBtnRef.current.setAttribute('data-active', String(c === 'annual'));
      annualBtnRef.current.setAttribute('aria-pressed', String(c === 'annual'));
    }
    updatePrices();
  }, [updatePrices]);

  /* ── Currency select handler ── */
  const setCurrency = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    currencyRef.current = e.target.value as Currency;
    updatePrices();
  }, [updatePrices]);

  /* Initial render pass */
  useEffect(() => {
    updatePrices();
  }, [updatePrices]);

  return (
    <>
      <style>{`
        .pricing-section {
          padding-block: clamp(4rem, 10vw, 7rem);
        }
        .pricing-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }
        .pricing-header h2 { margin-bottom: 1rem; }
        .pricing-header p {
          max-width: 48ch;
          margin-inline: auto;
          font-size: 1.05rem;
        }

        /* ── Controls row ── */
        .pricing-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        /* Billing toggle */
        .billing-toggle {
          display: flex;
          align-items: center;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          padding: 4px;
          gap: 4px;
        }
        .billing-btn {
          padding: 0.45rem 1rem;
          border: none;
          border-radius: 7px;
          background: transparent;
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background var(--dur-micro) var(--ease-out),
                      color    var(--dur-micro) var(--ease-out);
          position: relative;
        }
        .billing-btn[data-active="true"] {
          background: var(--color-primary);
          color: #fff;
        }
        .billing-badge {
          position: absolute;
          top: -10px;
          right: -6px;
          background: var(--color-success);
          color: #fff;
          font-size: 0.6rem;
          font-weight: 700;
          padding: 1px 5px;
          border-radius: 99px;
          letter-spacing: 0.04em;
          pointer-events: none;
        }

        /* Currency select */
        .currency-select {
          padding: 0.5rem 2.25rem 0.5rem 0.875rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5l3 3 3-3' stroke='%238888AA' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.7rem center;
          transition: border-color var(--dur-micro) var(--ease-out);
        }
        .currency-select:focus {
          border-color: var(--color-primary);
          outline: none;
        }

        /* ── Pricing grid ── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          align-items: start;
        }

        .pricing-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          transition: transform var(--dur-micro) var(--ease-out),
                      box-shadow var(--dur-micro) var(--ease-out);
        }

        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
        }

        .pricing-card[data-highlight="true"] {
          border-color: var(--color-primary);
          background: linear-gradient(160deg,
            rgba(108,99,255,0.08) 0%,
            var(--color-surface) 40%);
          box-shadow: 0 0 0 1px var(--color-primary),
                      0 16px 48px rgba(108,99,255,0.2);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--color-primary), #8B84FF);
          color: #fff;
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 99px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .tier-label {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-primary);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .tier-tagline {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        /* Price row */
        .price-row {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          margin-bottom: 0.35rem;
        }

        .price-amount {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          color: var(--color-text-primary);
          letter-spacing: -0.04em;
          /* Hardware-accelerated number transition */
          transition: opacity var(--dur-micro) var(--ease-out);
        }

        .price-period {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }

        .pricing-divider {
          width: 100%;
          height: 1px;
          background: var(--color-border);
          margin-bottom: 1.25rem;
        }

        /* Feature list */
        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.75rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
        .feature-check {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          background: rgba(34,197,94,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* CTA */
        .pricing-cta {
          width: 100%;
          padding: 0.75rem;
          border-radius: 10px;
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform var(--dur-micro) var(--ease-out),
                      box-shadow var(--dur-micro) var(--ease-out);
        }
        .pricing-cta-primary {
          background: linear-gradient(135deg, var(--color-primary), #8B84FF);
          color: #fff;
          border: none;
        }
        .pricing-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(108,99,255,0.4);
        }
        .pricing-cta-ghost {
          background: transparent;
          color: var(--color-text-primary);
          border: 1px solid var(--color-border);
        }
        .pricing-cta-ghost:hover {
          border-color: var(--color-primary);
          background: rgba(108,99,255,0.06);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin-inline: auto;
          }
        }
        @media (max-width: 480px) {
          .pricing-controls { gap: 0.75rem; }
        }
      `}</style>

      <section
        id="pricing"
        className="pricing-section"
        aria-labelledby="pricing-heading"
      >
        <div className="container">
          {/* Header */}
          <header className="pricing-header reveal">
            <span className="section-eyebrow" aria-hidden="true">Role-Based Access</span>
            <h2 id="pricing-heading">
              Intelligent plans for every role.
            </h2>
            <p>Empower your workforce with targeted access. Scale seamlessly as your industrial footprint grows.</p>
          </header>

          {/* Controls */}
          <div className="pricing-controls reveal reveal-delay-1" role="group" aria-label="Pricing controls">
            {/* Billing cycle toggle */}
            <div className="billing-toggle" role="group" aria-label="Billing cycle">
              <button
                ref={monthlyBtnRef}
                className="billing-btn"
                type="button"
                data-active="true"
                aria-pressed="true"
                onClick={() => setCycle('monthly')}
              >
                Monthly
              </button>
              <button
                ref={annualBtnRef}
                className="billing-btn"
                type="button"
                data-active="false"
                aria-pressed="false"
                onClick={() => setCycle('annual')}
              >
                Annual
                <span className="billing-badge" aria-label="Save 20 percent">-20%</span>
              </button>
            </div>

            {/* Currency switcher */}
            <label htmlFor="currency-select" className="sr-only">
              Select currency
            </label>
            <select
              id="currency-select"
              className="currency-select"
              onChange={setCurrency}
              defaultValue="USD"
              aria-label="Select pricing currency"
            >
              <option value="USD">USD ($)</option>
              <option value="INR">INR (₹)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          {/* Pricing grid */}
          <div className="pricing-grid" role="list">
            {PRICING_MATRIX.tiers.map((tier, i) => {
              const meta = TIER_META[tier];
              return (
                <article
                  key={tier}
                  className={`pricing-card reveal reveal-delay-${i + 1} scroll-3d`}
                  role="listitem"
                  data-highlight={String(meta.highlighted)}
                  aria-label={`${meta.label} plan`}
                >
                  {meta.highlighted && (
                    <div className="popular-badge" aria-label="Most popular plan">
                      Most Popular
                    </div>
                  )}

                  <div className="tier-label" aria-hidden="true">{meta.label}</div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                    {meta.label}
                  </h3>
                  <p className="tier-tagline">{meta.tagline}</p>

                  {/* Price — text node mutated directly, never re-rendered */}
                  <div className="price-row" aria-live="polite" aria-atomic="true">
                    <span
                      ref={priceRefs[tier]}
                      className="price-amount"
                      aria-label={`Price for ${meta.label} plan`}
                    >
                      —
                    </span>
                  </div>
                  <p className="price-period">
                    <span ref={periodRefs[tier]}>per month</span>
                  </p>

                  <div className="pricing-divider" aria-hidden="true" />

                  {/* Feature list */}
                  <ul className="feature-list" aria-label={`${meta.label} plan features`}>
                    {meta.features.map((feat) => (
                      <li key={feat} className="feature-item">
                        <span className="feature-check" aria-hidden="true">
                          <CheckIcon size={11} color="var(--color-success)" />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`pricing-cta ${meta.highlighted ? 'pricing-cta-primary' : 'pricing-cta-ghost'}`}
                    type="button"
                    aria-label={`${meta.ctaLabel} — ${meta.label} plan`}
                  >
                    {meta.ctaLabel}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screen-reader only utility */}
      <style>{`.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}`}</style>
    </>
  );
}

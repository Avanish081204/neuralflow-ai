import { StarIcon } from './svgs/Icons';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Agarwal',
    role: 'Operations Manager',
    company: 'Tata Steel',
    avatar: 'PA',
    avatarColor: '#ff3b8f',
    quote:
      'NeuralFlow completely transformed how our floor engineers access SOPs. What used to take 20 minutes of digging through manuals now takes seconds with natural language search.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Maintenance Engineer',
    company: 'Siemens Energy',
    avatar: 'MC',
    avatarColor: '#ff8a00',
    quote:
      'The intelligent maintenance recommendations accurately predicted a pump failure two weeks before it happened, saving us tens of thousands in unexpected downtime.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Léa Fontaine',
    role: 'Plant Administrator',
    company: 'Airbus',
    avatar: 'LF',
    avatarColor: '#00f0ff',
    quote:
      'Having a unified asset repository means we no longer lose crucial institutional knowledge when senior technicians retire. It is a game-changer for our workflow.',
    rating: 5,
  },
];

const LOGOS = [
  'Tata Steel', 'Siemens', 'Airbus', 'L&T', 'Reliance', 'Bosch', 'GE Aviation', 'Honeywell',
];

const STATS = [
  { value: '30%',   label: 'Reduction in Maintenance Costs'  },
  { value: '10x',  label: 'Faster Knowledge Retrieval'    },
  { value: '99%',   label: 'Asset Uptime & Utilization'      },
  { value: '0',  label: 'Data Silos Remaining' },
];

export default function SocialProof() {
  return (
    <>
      <style>{`
        .social-section {
          padding-block: clamp(4rem, 10vw, 7rem);
          overflow: hidden;
        }
        .social-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }
        .social-header h2 { margin-bottom: 0.75rem; }

        /* ── Stats bar ── */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: clamp(3rem, 6vw, 5rem);
        }
        .stat-cell {
          background: var(--color-surface);
          padding: 1.75rem 1.5rem;
          text-align: center;
        }
        .stat-cell-num {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-bottom: 0.25rem;
        }
        .stat-cell-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        /* ── Testimonials ── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: clamp(3rem, 6vw, 5rem);
        }
        .testimonial-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: border-color var(--dur-micro) var(--ease-out),
                      transform    var(--dur-micro) var(--ease-out);
        }
        .testimonial-card:hover {
          border-color: rgba(108,99,255,0.35);
          transform: translateY(-3px);
        }

        .stars {
          display: flex;
          gap: 3px;
        }

        .quote-text {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.7;
          flex: 1;
        }
        .quote-text::before { content: '"'; color: var(--color-primary); }
        .quote-text::after  { content: '"'; color: var(--color-primary); }

        .author-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .author-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .author-name {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .author-role {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        /* ── Logo strip ── */
        .logo-strip-label {
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--color-text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .logo-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem 2.5rem;
        }
        .logo-pill {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-text-muted);
          letter-spacing: -0.01em;
          opacity: 0.5;
          transition: opacity var(--dur-micro) var(--ease-out),
                      color    var(--dur-micro) var(--ease-out);
        }
        .logo-pill:hover {
          opacity: 1;
          color: var(--color-text-primary);
        }

        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr; max-width: 460px; margin-inline: auto; }
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .stats-bar { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section
        id="about"
        className="social-section"
        aria-labelledby="social-heading"
      >
        <div className="container">
          {/* Header */}
          <header className="social-header reveal">
            <span className="section-eyebrow" aria-hidden="true">Proven Impact</span>
            <h2 id="social-heading">
              Trusted by modern <span className="gradient-text">industries</span>.
            </h2>
          </header>

          {/* Stats bar */}
          <div className="stats-bar reveal reveal-delay-1" role="list" aria-label="Platform statistics">
            {STATS.map((s) => (
              <div key={s.value} className="stat-cell" role="listitem">
                <span className="stat-cell-num">{s.value}</span>
                <span className="stat-cell-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div
            className="testimonials-grid"
            role="list"
            aria-label="Customer testimonials"
          >
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.id}
                className={`testimonial-card reveal reveal-delay-${i + 1}`}
                role="listitem"
                aria-label={`Testimonial from ${t.name}, ${t.role} at ${t.company}`}
              >
                {/* Stars */}
                <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <StarIcon key={si} size={14} color="#F59E0B" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote>
                  <p className="quote-text">{t.quote}</p>
                </blockquote>

                {/* Author */}
                <figcaption className="author-row">
                  <div
                    className="author-avatar"
                    style={{ background: t.avatarColor }}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Logo strip */}
          <div className="reveal reveal-delay-2">
            <p className="logo-strip-label" aria-hidden="true">
              Powering teams at
            </p>
            <div className="logo-strip" role="list" aria-label="Companies using NeuralFlow AI">
              {LOGOS.map((name) => (
                <span key={name} className="logo-pill" role="listitem">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

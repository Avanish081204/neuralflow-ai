type IconProps = { size?: number; color?: string };

export function PipelineIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h12M3 18h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="19" cy="12" r="3" stroke={color} strokeWidth="2" />
      <circle cx="15" cy="18" r="3" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function DataFusionIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4" stroke={color} strokeWidth="2" />
      <circle cx="16" cy="16" r="4" stroke={color} strokeWidth="2" />
      <path d="M11.5 10.5 L13.5 13.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 4 v16" stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
    </svg>
  );
}

export function ModelRoutingIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L21 8v8l-9 5L3 16V8z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
      <path d="M12 9V3M12 21v-6M9 12H3M21 12h-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WebhookIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function AuditIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="2" />
      <path d="M7 8h10M7 12h6M7 16h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14l2 2 3-3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DeployIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ size = 16, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ size = 16, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color} aria-hidden="true">
      <path d="M8 1l1.796 3.634 4.011.583-2.903 2.829.686 3.997L8 10.135l-3.59 1.908.686-3.997L2.193 5.217l4.011-.583L8 1z" />
    </svg>
  );
}

export function HeroAbstractSVG() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: 'auto' }}>
      {/* Outer ring */}
      <circle cx="300" cy="250" r="200" stroke="url(#hero-ring)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
      <circle cx="300" cy="250" r="140" stroke="url(#hero-ring)" strokeWidth="1" strokeDasharray="2 6" opacity="0.3" />
      <circle cx="300" cy="250" r="80"  stroke="url(#hero-ring)" strokeWidth="1" opacity="0.5" />

      {/* Center node */}
      <circle cx="300" cy="250" r="28" fill="url(#hero-center)" />
      <circle cx="300" cy="250" r="28" fill="url(#hero-center)" opacity="0.4">
        <animate attributeName="r" values="28;40;28" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Orbiting nodes */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 300 + 140 * Math.cos(rad);
        const cy = 250 + 140 * Math.sin(rad);
        return (
          <g key={i}>
            <line x1="300" y1="250" x2={cx} y2={cy} stroke="url(#hero-ring)" strokeWidth="1" opacity="0.25" />
            <circle cx={cx} cy={cy} r="10" fill="url(#hero-node)" />
            <circle cx={cx} cy={cy} r="10" fill="url(#hero-node)" opacity="0.3">
              <animate attributeName="r" values="10;16;10" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* Outer nodes */}
      {[30, 150, 270].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 300 + 200 * Math.cos(rad);
        const cy = 250 + 200 * Math.sin(rad);
        return (
          <circle key={i} cx={cx} cy={cy} r="6" fill="url(#hero-outer)" opacity="0.6" />
        );
      })}

      <defs>
        <linearGradient id="hero-ring" x1="0" y1="0" x2="600" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff3b8f" />
          <stop offset="1" stopColor="#ff8a00" />
        </linearGradient>
        <radialGradient id="hero-center" cx="50%" cy="50%" r="50%">
          <stop stopColor="#ff3b8f" />
          <stop offset="1" stopColor="#ff8a00" />
        </radialGradient>
        <radialGradient id="hero-node" cx="50%" cy="50%" r="50%">
          <stop stopColor="#00f0ff" />
          <stop offset="1" stopColor="#ff3b8f" />
        </radialGradient>
        <radialGradient id="hero-outer" cx="50%" cy="50%" r="50%">
          <stop stopColor="#ff8a00" />
          <stop offset="1" stopColor="#00f0ff" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function LogoSVG({ width = 32, height = 32 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff3b8f" />
          <stop offset="1" stopColor="#ff8a00" />
        </linearGradient>
        <linearGradient id="logo-grad-2" x1="32" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00f0ff" />
          <stop offset="1" stopColor="#ff3b8f" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="10" fill="url(#logo-grad)" opacity="0.15" />
      <path d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 16C26 10.4772 21.5228 6 16 6" stroke="url(#logo-grad-2)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="16" r="4" fill="url(#logo-grad)" />
    </svg>
  );
}

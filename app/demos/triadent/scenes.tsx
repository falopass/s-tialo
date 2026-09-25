/**
 * app/demos/triadent/scenes.tsx
 *
 * Arte SVG del mockup (sin fotos externas): fondo clínico luminoso en
 * menta con curvas suaves y un motivo dental de línea. Decorativo.
 */

const C = {
  mint: '#DFF2EC',
  mintDeep: '#BFE3D9',
  teal: '#1D9E8E',
  ink: '#0F3B57',
  white: '#FFFFFF',
}

export function HeroBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="td-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0FAF7" />
          <stop offset="55%" stopColor={C.mint} />
          <stop offset="100%" stopColor="#D4EDE5" />
        </linearGradient>
        <radialGradient id="td-glow" cx="0.72" cy="0.3" r="0.55">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#td-sky)" />
      <rect width="1200" height="800" fill="url(#td-glow)" />
      {/* curvas suaves tipo ondas */}
      <path
        d="M0 560 C 260 480 430 640 700 570 C 940 508 1080 600 1200 540 L1200 800 L0 800 Z"
        fill={C.mintDeep}
        opacity="0.55"
      />
      <path
        d="M0 640 C 300 570 520 700 780 640 C 1000 590 1120 660 1200 620 L1200 800 L0 800 Z"
        fill={C.teal}
        opacity="0.12"
      />
      {/* diente de línea, marca de agua */}
      <g
        transform="translate(880 130) scale(9)"
        fill="none"
        stroke={C.ink}
        strokeOpacity="0.10"
        strokeWidth="1.2"
      >
        <path d="M8 4.5 C5.5 4.5 4 6.5 4 9.5 C4 14 5.5 20 7.5 20 C9 20 8.5 15.5 12 15.5 C15.5 15.5 15 20 16.5 20 C18.5 20 20 14 20 9.5 C20 6.5 18.5 4.5 16 4.5 C14 4.5 13.5 5.5 12 5.5 C10.5 5.5 10 4.5 8 4.5 Z" />
      </g>
      <g
        transform="translate(150 560) scale(4.5)"
        fill="none"
        stroke={C.teal}
        strokeOpacity="0.16"
        strokeWidth="1.4"
      >
        <path d="M8 4.5 C5.5 4.5 4 6.5 4 9.5 C4 14 5.5 20 7.5 20 C9 20 8.5 15.5 12 15.5 C15.5 15.5 15 20 16.5 20 C18.5 20 20 14 20 9.5 C20 6.5 18.5 4.5 16 4.5 C14 4.5 13.5 5.5 12 5.5 C10.5 5.5 10 4.5 8 4.5 Z" />
      </g>
      {/* cruz clínica sutil */}
      <g
        transform="translate(320 200)"
        fill="none"
        stroke={C.teal}
        strokeOpacity="0.18"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M0 -14 v28 M-14 0 h28" />
      </g>
    </svg>
  )
}

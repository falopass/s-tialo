/**
 * app/demos/one-health/scenes.tsx
 *
 * Arte SVG del mockup (sin fotos externas): paisaje suave en crema y
 * salvia con sol durazno, colinas y una huella. Decorativo.
 */

const C = {
  cream: '#FBF6EE',
  peach: '#F2B48C',
  peachDeep: '#E39A6A',
  sage: '#8CA98C',
  sageMid: '#74936F',
  sageDeep: '#4E6B50',
}

export function HeroScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="oh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDFAF3" />
          <stop offset="60%" stopColor={C.cream} />
          <stop offset="100%" stopColor="#F5EAD9" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#oh-sky)" />
      {/* sol durazno */}
      <circle cx="880" cy="200" r="110" fill={C.peach} opacity="0.85" />
      <circle cx="880" cy="200" r="150" fill={C.peach} opacity="0.22" />
      {/* nubes suaves */}
      <g fill="#FFFFFF" opacity="0.8">
        <ellipse cx="330" cy="170" rx="90" ry="26" />
        <ellipse cx="400" cy="155" rx="70" ry="22" />
        <ellipse cx="150" cy="290" rx="60" ry="16" />
      </g>
      {/* colinas salvia */}
      <path
        d="M0 560 C 220 480 420 620 640 550 C 840 488 1030 590 1200 530 L1200 800 L0 800 Z"
        fill={C.sage}
        opacity="0.6"
      />
      <path
        d="M0 650 C 260 580 480 700 740 640 C 960 592 1100 660 1200 620 L1200 800 L0 800 Z"
        fill={C.sageMid}
        opacity="0.75"
      />
      <path
        d="M0 730 C 300 680 560 760 820 715 C 1020 682 1130 730 1200 705 L1200 800 L0 800 Z"
        fill={C.sageDeep}
        opacity="0.9"
      />
      {/* huella decorativa */}
      <g transform="translate(150 150) scale(6)" fill={C.sageDeep} opacity="0.12">
        <ellipse cx="12" cy="15.5" rx="4.6" ry="3.6" />
        <circle cx="6.4" cy="9.6" r="1.7" />
        <circle cx="12" cy="7.4" r="1.7" />
        <circle cx="17.6" cy="9.6" r="1.7" />
      </g>
      <g transform="translate(1020 430) scale(3.4)" fill={C.peachDeep} opacity="0.25">
        <ellipse cx="12" cy="15.5" rx="4.6" ry="3.6" />
        <circle cx="6.4" cy="9.6" r="1.7" />
        <circle cx="12" cy="7.4" r="1.7" />
        <circle cx="17.6" cy="9.6" r="1.7" />
      </g>
      {/* árbol simple */}
      <g transform="translate(190 490)" opacity="0.7">
        <rect x="-6" y="0" width="12" height="90" rx="6" fill={C.sageDeep} />
        <circle cx="0" cy="-24" r="52" fill={C.sage} />
        <circle cx="-38" cy="4" r="32" fill={C.sage} />
        <circle cx="36" cy="2" r="34" fill={C.sageMid} />
      </g>
    </svg>
  )
}

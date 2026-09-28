/**
 * app/demos/constructora-valdes/scenes.tsx
 *
 * Arte SVG del mockup (sin fotos externas): retícula de plano y
 * silhoueta de obra con grúa y casas, en la paleta azul del logo.
 * Decorativo.
 */

const C = {
  navy: '#151452',
  navyDeep: '#0D0D33',
  navyMid: '#26266B',
  paper: '#F5F2EB',
  sand: '#E7DFCB',
  gold: '#D9A441',
  line: 'rgba(245,242,235,0.10)',
}

export function BlueprintGrid({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="cv-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0 H0 V60" fill="none" stroke={C.line} strokeWidth="1" />
        </pattern>
        <pattern id="cv-grid-sm" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M15 0 H0 V15" fill="none" stroke={C.line} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#cv-grid-sm)" />
      <rect width="1200" height="800" fill="url(#cv-grid)" />
      {/* marcas de cota tipo plano */}
      <g stroke={C.gold} strokeWidth="1.4" opacity="0.55" fill="none">
        <path d="M80 90 H340 M80 78 V102 M340 78 V102" />
        <path d="M90 60 L340 60" strokeDasharray="4 6" />
      </g>
      <g stroke={C.line} strokeWidth="1.4" fill="none">
        <circle cx="980" cy="150" r="70" />
        <path d="M980 60 V240 M890 150 H1070" />
      </g>
    </svg>
  )
}

export function ObraScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="1200" height="800" fill={C.navyDeep} />
      {/* sol/luna dorado */}
      <circle cx="880" cy="200" r="80" fill={C.gold} opacity="0.85" />
      <circle cx="880" cy="200" r="120" fill={C.gold} opacity="0.18" />
      {/* cerros del Maule */}
      <path
        d="M0 480 L180 360 L340 440 L520 330 L700 450 L880 370 L1060 460 L1200 400 L1200 800 L0 800 Z"
        fill={C.navyMid}
        opacity="0.7"
      />
      {/* grúa pluma */}
      <g stroke={C.paper} strokeWidth="7" fill="none" strokeLinecap="square" opacity="0.9">
        <path d="M300 620 V300" />
        <path d="M300 300 H640" />
        <path d="M300 300 L240 360" />
        <path d="M640 300 V380" />
        <path d="M300 340 H330 M300 390 H330 M300 440 H330 M300 490 H330 M300 540 H330" strokeWidth="4" />
      </g>
      {/* bloque colgando */}
      <rect x="616" y="380" width="48" height="34" fill={C.gold} />
      {/* casas en obra */}
      <g fill={C.paper} opacity="0.92">
        <path d="M700 620 V500 L770 448 L840 500 V620 Z" />
        <path d="M860 620 V520 L920 476 L980 520 V620 Z" opacity="0.8" />
      </g>
      <g fill={C.navyDeep}>
        <rect x="742" y="540" width="44" height="80" />
        <rect x="712" y="516" width="24" height="24" />
        <rect x="804" y="516" width="24" height="24" />
        <rect x="896" y="552" width="34" height="68" opacity="0.9" />
      </g>
      {/* pilares de encofrado */}
      <g stroke={C.sand} strokeWidth="5" opacity="0.75">
        <path d="M120 620 V470 M170 620 V470 M220 620 V470 M110 470 H232" />
        <path d="M1050 620 V490 M1105 620 V490 M1160 620 V490 M1040 490 H1172" />
      </g>
      {/* suelo */}
      <rect x="0" y="620" width="1200" height="180" fill={C.navy} />
      <path d="M0 620 H1200" stroke={C.gold} strokeWidth="2" opacity="0.5" />
      {/* huincha de seguridad */}
      <defs>
        <pattern id="cv-tape" width="56" height="12" patternUnits="userSpaceOnUse" patternTransform="skewX(-30)">
          <rect width="28" height="12" fill={C.gold} opacity="0.9" />
          <rect x="28" width="28" height="12" fill={C.paper} opacity="0.3" />
        </pattern>
      </defs>
      <rect x="0" y="648" width="1200" height="12" fill="url(#cv-tape)" />
    </svg>
  )
}

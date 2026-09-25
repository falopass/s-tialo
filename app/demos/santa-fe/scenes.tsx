/**
 * app/demos/santa-fe/scenes.tsx
 *
 * Arte SVG del mockup (sin fotos externas): fondo grafito con grilla
 * técnica, cotas de plano y acentos en naranjo de seguridad. Decorativo.
 */

const C = {
  deep: '#16191D',
  graphite: '#262B31',
  steel: '#3A4148',
  line: 'rgba(237,239,241,0.10)',
  orange: '#E8631A',
}

export function GridScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="1200" height="800" fill={C.deep} />
      {/* grilla técnica */}
      <g stroke={C.line} strokeWidth="1">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
        ))}
      </g>
      {/* estructura de vigas, esquema */}
      <g
        fill="none"
        stroke={C.steel}
        strokeWidth="5"
        strokeLinecap="square"
      >
        <path d="M120 640 L520 340 L920 640" />
        <path d="M520 340 V640" />
        <path d="M120 640 H1080" />
        <path d="M320 490 L520 640 L720 490" />
      </g>
      <g stroke={C.orange} strokeWidth="5" strokeLinecap="square">
        <path d="M920 640 H1080" />
      </g>
      {/* cotas de plano */}
      <g stroke={C.orange} strokeWidth="1.6">
        <line x1="120" y1="700" x2="1080" y2="700" />
        <line x1="120" y1="692" x2="120" y2="708" />
        <line x1="1080" y1="692" x2="1080" y2="708" />
      </g>
      {/* grúa esquemática */}
      <g
        fill="none"
        stroke={C.steel}
        strokeWidth="4"
        strokeLinecap="square"
      >
        <path d="M980 620 V180 H760" />
        <path d="M980 220 L900 180" />
        <path d="M800 180 v40" />
        <rect x="770" y="220" width="60" height="40" fill="none" />
      </g>
      <circle cx="980" cy="160" r="10" fill={C.orange} />
      {/* marca de nivel */}
      <g stroke={C.line} strokeWidth="1.4">
        <line x1="60" y1="120" x2="60" y2="620" />
        {Array.from({ length: 6 }, (_, i) => (
          <line key={i} x1="52" y1={120 + i * 100} x2="68" y2={120 + i * 100} />
        ))}
      </g>
    </svg>
  )
}

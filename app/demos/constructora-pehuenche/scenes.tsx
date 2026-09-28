/**
 * app/demos/constructora-pehuenche/scenes.tsx
 *
 * Motivo gráfico propio: el pehuén (araucaria) que da nombre a la
 * empresa — corona en paraguas sobre tronco, más cerros de la
 * precordillera maulina. Se repite en los bandejones del demo.
 * Escena de obra con casas en construcción para el hero. Decorativo.
 */

export function PehuenIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* corona en paraguas del pehuén */}
      <path d="M4 13 C4 8 7.5 4 12 4 C16.5 4 20 8 20 13" />
      <path d="M4 13 H20" />
      <path d="M7.5 13 V8.5 M12 13 V4.8 M16.5 13 V8.5" />
      {/* tronco */}
      <path d="M12 13 V22 M10 17 L12 15.5 L14 17" />
    </svg>
  )
}

/** Hilera de pehuenes sobre cerros — para bandejones oscuros. */
export function PehuenField({ className = '' }: { className?: string }) {
  const line = 'rgba(245,241,232,0.14)'
  const accent = 'rgba(232,164,83,0.55)'
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* cerros */}
      <g fill="none" stroke={line} strokeWidth="2">
        <path d="M-40 560 Q 200 400 420 520 T 860 540 T 1240 500" />
        <path d="M-40 640 Q 260 500 520 610 T 960 620 T 1240 580" />
        <path d="M-40 720 Q 300 610 640 700 T 1240 680" />
      </g>
      {/* sol / cota */}
      <circle cx="980" cy="150" r="54" fill="none" stroke={accent} strokeWidth="2.4" strokeDasharray="6 8" />
      {/* pehuenes */}
      {[
        { x: 170, y: 470, s: 1.5 },
        { x: 330, y: 505, s: 1.0 },
        { x: 770, y: 480, s: 1.3 },
        { x: 1040, y: 460, s: 1.1 },
      ].map((t, i) => (
        <g key={i} transform={`translate(${t.x},${t.y}) scale(${t.s})`} stroke={line} strokeWidth="2.6" fill="none" strokeLinecap="round">
          <path d="M0 46 C0 12 26 -16 62 -16 C98 -16 124 12 124 46" />
          <path d="M0 46 H124" />
          <path d="M31 46 V6 M62 46 V-14 M93 46 V6" />
          <path d="M62 46 V120 M52 76 L62 66 L72 76" />
        </g>
      ))}
      {/* línea de cota */}
      <g stroke={accent} strokeWidth="2" fill="none" opacity="0.7">
        <path d="M60 300 H240 M60 290 V310 M240 290 V310" />
        <path d="M90 272 H210" strokeDasharray="4 8" />
      </g>
    </svg>
  )
}

/** Escena de obra para el hero: casas en construcción + pehuén. */
export function ObraScene({ className = '' }: { className?: string }) {
  const green = '#1E3A2B'
  const greenSoft = '#2E5741'
  const ochre = '#C97B2D'
  const sky = '#E7E0D0'
  return (
    <svg
      viewBox="0 0 800 520"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* cielo */}
      <rect width="800" height="520" fill={sky} />
      {/* cerros lejanos */}
      <path d="M0 260 Q 160 190 320 240 T 640 230 T 800 250 V520 H0 Z" fill="#D8D0BC" />
      <path d="M0 320 Q 200 260 400 300 T 800 300 V520 H0 Z" fill="#CBBFA4" />
      {/* sol */}
      <circle cx="640" cy="120" r="42" fill="none" stroke={ochre} strokeWidth="3" strokeDasharray="7 9" />
      {/* pehuén grande a la izquierda */}
      <g transform="translate(58,120)" stroke={green} fill="none" strokeWidth="6" strokeLinecap="round">
        <path d="M0 92 C0 34 44 -14 96 -14 C148 -14 192 34 192 92" />
        <path d="M0 92 H192" />
        <path d="M48 92 V18 M96 92 V-10 M144 92 V18" />
        <path d="M96 92 V300 M80 148 L96 134 L112 148" strokeWidth="7" />
      </g>
      {/* casa en construcción */}
      <g>
        {/* muros */}
        <rect x="360" y="330" width="250" height="150" fill={greenSoft} />
        {/* techumbre a dos aguas (cerchas abiertas) */}
        <g stroke={green} strokeWidth="7" fill="none" strokeLinecap="square">
          <path d="M345 335 L485 235 L625 335" />
          <path d="M485 235 V335" />
          <path d="M415 285 L485 335 M555 285 L485 335" strokeWidth="5" />
          <path d="M385 335 V300 M585 335 V300" strokeWidth="4" />
        </g>
        {/* vanos */}
        <rect x="392" y="368" width="52" height="64" fill={sky} stroke={green} strokeWidth="4" />
        <rect x="520" y="368" width="58" height="112" fill={sky} stroke={green} strokeWidth="4" />
        {/* andamio a la derecha */}
        <g stroke={ochre} strokeWidth="5" fill="none" strokeLinecap="round">
          <path d="M648 480 V300 M716 480 V300" />
          <path d="M648 340 H716 M648 410 H716 M648 480 H716" />
          <path d="M648 480 L716 410 M648 410 L716 480 M648 410 L716 340 M648 340 L716 300" strokeWidth="3.4" />
        </g>
      </g>
      {/* suelo */}
      <path d="M0 480 H800 V520 H0 Z" fill={green} />
      <g stroke="#F5F1E8" strokeWidth="2" opacity="0.4">
        <path d="M30 496 H200 M420 500 H560 M640 492 H780" strokeDasharray="10 12" />
      </g>
      {/* pehuén chico a la derecha */}
      <g transform="translate(690,360)" stroke={greenSoft} fill="none" strokeWidth="4.6" strokeLinecap="round">
        <path d="M0 54 C0 22 26 -6 56 -6 C86 -6 112 22 112 54" />
        <path d="M0 54 H112" />
        <path d="M28 54 V14 M56 54 V-4 M84 54 V14" />
        <path d="M56 54 V130 M46 84 L56 74 L66 84" strokeWidth="5" />
      </g>
    </svg>
  )
}

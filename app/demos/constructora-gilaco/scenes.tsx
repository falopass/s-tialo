/**
 * app/demos/constructora-gilaco/scenes.tsx
 *
 * Motivo gráfico propio: celosía de acero — diagonales cruzadas en
 * perfil fino con planchas de anclaje y bulones, como una cercha
 * metálica. Se repite en los bandejones oscuros del demo. Decorativo.
 */

const C = {
  steel: 'rgba(240,238,234,0.13)',
  red: '#E8442E',
  redSoft: 'rgba(232,68,46,0.55)',
}

export function TrussIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="square" aria-hidden="true">
      <path d="M2 6 H22 M2 18 H22" />
      <path d="M4 6 L10 18 M10 6 L4 18 M12 6 L18 18 M18 6 L12 18 M20 6 L20 18" />
    </svg>
  )
}

export function TrussField({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="gilaco-truss" width="160" height="160" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={C.steel} strokeWidth="1.4">
            <rect x="0" y="0" width="160" height="160" />
            <path d="M0 0 L160 160 M160 0 L0 160" />
          </g>
          <circle cx="0" cy="0" r="2.6" fill={C.steel} />
          <circle cx="160" cy="0" r="2.6" fill={C.steel} />
          <circle cx="0" cy="160" r="2.6" fill={C.steel} />
          <circle cx="160" cy="160" r="2.6" fill={C.steel} />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#gilaco-truss)" />
      {/* línea de cota en rojo */}
      <g stroke={C.redSoft} strokeWidth="2" fill="none">
        <path d="M-20 640 H1240" strokeDasharray="14 10" />
        <path d="M60 620 V660 M1140 620 V660" />
      </g>
      {/* plancha de anclaje */}
      <g fill="none" stroke={C.red} strokeWidth="3" opacity="0.85">
        <rect x="150" y="88" width="120" height="16" />
        <circle cx="170" cy="96" r="3" fill={C.red} stroke="none" />
        <circle cx="250" cy="96" r="3" fill={C.red} stroke="none" />
        <path d="M210 104 V220" strokeWidth="5" strokeLinecap="square" />
      </g>
    </svg>
  )
}

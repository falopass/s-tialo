/**
 * app/demos/yp-construcciones/scenes.tsx
 *
 * Motivo gráfico propio: un tendido de cañería en línea fina — tubo
 * horizontal que baja en codo, con volante de llave de paso y marcas
 * de cota. Se repite en los bandejones oscuros del demo. Decorativo.
 */

const C = {
  pipe: 'rgba(250,245,238,0.14)',
  copper: '#E8703A',
  copperSoft: 'rgba(232,112,58,0.5)',
}

export function PipeIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 9 h10 a4 4 0 0 1 4 4 v8" />
      <path d="M3 15 h4" />
      <circle cx="9" cy="12" r="2.4" />
      <path d="M9 3.5 v3 M9 12 v0" />
    </svg>
  )
}

export function PipeField({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="yp-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0 H0 V48" fill="none" stroke={C.pipe} strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#yp-grid)" />
      <g fill="none" stroke={C.pipe} strokeWidth="7" strokeLinecap="round">
        <path d="M-40 180 H420 a60 60 0 0 1 60 60 V800" />
        <path d="M1240 420 H880 a60 60 0 0 0-60 60 V800" />
        <path d="M-40 560 H240 a50 50 0 0 1 50 50 V800" strokeWidth="5" />
      </g>
      <g fill="none" stroke={C.copperSoft} strokeWidth="7" strokeLinecap="round">
        <path d="M-40 180 H140" />
        <path d="M1240 420 H1060" />
      </g>
      {/* volante de llave de paso */}
      <g stroke={C.copper} strokeWidth="4" fill="none" opacity="0.8">
        <circle cx="980" cy="180" r="34" />
        <path d="M980 146 V214 M946 180 H1014 M956 156 L1004 204 M1004 156 L956 204" />
        <path d="M980 214 V300" stroke={C.pipe} strokeWidth="7" strokeLinecap="round" />
      </g>
      {/* marcas de cota */}
      <g stroke={C.copper} strokeWidth="1.6" opacity="0.6" fill="none">
        <path d="M120 690 H420 M120 678 V702 M420 678 V702" />
        <path d="M150 665 H390" strokeDasharray="5 7" />
      </g>
    </svg>
  )
}

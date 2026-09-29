/**
 * app/demos/cabanas-la-quebrada/scenes.tsx
 *
 * Ornamentos y bosquejos del demo. El motivo propio es «el pasaje»:
 * el sendero de ripio que se ve en las fotos reales baja por la
 * página como línea punteada con hojas de sauce, y las «paradas»
 * se marcan como en un croquis de terreno. Donde no existe foto
 * real (interior de dormitorio y baño), la escena va dibujada a
 * línea y marcada visiblemente como bosquejo.
 */

const C = {
  oliva: '#3C4A2E',
  olivaDeep: '#232B18',
  miel: '#D9A13C',
  papel: '#F1EBDC',
  line: 'rgba(60,74,46,0.22)',
}

// ── Hoja de sauce (motivo del predio) ────────────────────────

export function Hoja({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
      <path d="M12 2 v20" />
      <path d="M12 4 C9 6 7 8 6.5 11 M12 4 C15 6 17 8 17.5 11" />
      <path d="M12 9 C9.5 11 8 13 7.5 16 M12 9 C14.5 11 16 13 16.5 16" />
      <path d="M12 14 C10.5 15.5 9.5 17 9 19.5 M12 14 C13.5 15.5 14.5 17 15 19.5" />
    </svg>
  )
}

// ── Marcador de parada del croquis ───────────────────────────

export function Parada({ n }: { n: string }) {
  return (
    <span
      className="shrink-0 w-[52px] h-[52px] rounded-full border-2 border-dashed flex items-center justify-center font-mono text-xs font-bold"
      style={{ borderColor: C.miel, color: C.oliva, backgroundColor: C.papel }}
      aria-hidden="true"
    >
      {n}
    </span>
  )
}

// ── Bosquejos marcados (sin foto real disponible) ────────────

export function BosquejoBadge() {
  return (
    <span
      className="absolute top-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
      style={{ backgroundColor: C.miel, color: C.olivaDeep }}
    >
      Bosquejo · se reemplaza por tu foto real al activar
    </span>
  )
}

/** Línea interior sencilla: alzado de dormitorio en trazo. */
export function BosquejoDormitorio({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: '#EDE6D2' }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.oliva} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* tablas del muro */}
          {[60, 140, 220, 300, 380, 460, 540, 620, 700].map((x) => (
            <path key={x} d={`M${x} 40 V420`} strokeWidth="1.4" opacity="0.35" />
          ))}
          {/* ventana */}
          <rect x="500" y="90" width="170" height="140" />
          <path d="M500 160 h170 M585 90 v140" />
          {/* cama */}
          <rect x="90" y="270" width="330" height="150" />
          <path d="M90 270 v-60 M420 270 v-30" />
          <rect x="120" y="230" width="90" height="40" rx="10" />
          <path d="M90 320 h330" />
          {/* velador + lámpara */}
          <rect x="450" y="350" width="60" height="70" />
          <path d="M480 350 v-40 m-18 0 h36 l-6 -22 h-24 Z" />
          {/* alfombra */}
          <ellipse cx="255" cy="480" rx="160" ry="26" strokeDasharray="8 7" />
        </g>
      </svg>
      <p
        className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]"
        style={{ color: C.oliva }}
      >
        alzado 01 · dormitorio
      </p>
    </div>
  )
}

/** Línea interior sencilla: baño y estar, mismo trazo. */
export function BosquejoBano({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: '#EDE6D2' }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.oliva} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((x) => (
            <path key={x} d={`M${x} 40 V420`} strokeWidth="1.4" opacity="0.35" />
          ))}
          {/* tina/ducha */}
          <path d="M90 250 h260 v60 a110 110 0 0 1 -260 0 Z" />
          <path d="M120 400 v40 M320 400 v40" />
          <path d="M330 250 v-120 a18 18 0 0 1 36 0" />
          <circle cx="384" cy="138" r="10" />
          {/* lavatorio */}
          <path d="M480 300 h150 v26 h-150 Z" />
          <path d="M490 326 v84 M620 326 v84" />
          <ellipse cx="555" cy="292" rx="46" ry="14" />
          {/* espejo */}
          <rect x="510" y="90" width="90" height="120" />
          <path d="M510 150 l90 -30 M510 190 l90 -30" opacity="0.5" />
        </g>
      </svg>
      <p
        className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]"
        style={{ color: C.oliva }}
      >
        alzado 02 · baño
      </p>
    </div>
  )
}

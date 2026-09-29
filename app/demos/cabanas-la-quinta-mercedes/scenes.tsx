/**
 * app/demos/cabanas-la-quinta-mercedes/scenes.tsx
 *
 * Ornamentos y bosquejos del demo. El motivo propio es «el llavero»:
 * cada espacio de la quinta cuelga de una argolla como la etiqueta de
 * una llave de campo. Las escenas sin foto real van dibujadas a línea
 * y marcadas visiblemente como bosquejo.
 */

const C = {
  verde: '#3D5A35',
  verdeClaro: '#6B8C5E',
  papel: '#FAF7EE',
  crema: '#F0EADC',
  cielo: '#B8CFC4',
  piscina: '#5E9BA8',
}

// ── Llavero / etiqueta colgante ──────────────────────────────

export function Llavero({ n, label }: { n: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-0" aria-hidden="true">
      {/* argolla */}
      <span
        className="w-[26px] h-[26px] rounded-full border-[3px] -mr-[10px] relative z-10"
        style={{ borderColor: C.verde, backgroundColor: 'transparent' }}
      />
      {/* etiqueta */}
      <span
        className="inline-flex items-center gap-2 pl-5 pr-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] rounded-r-sm"
        style={{ backgroundColor: C.verde, color: C.papel }}
      >
        <span className="font-mono" style={{ color: '#D9E4CF' }}>{n}</span>
        {label}
      </span>
    </span>
  )
}

// ── Sello postal del rating ──────────────────────────────────

export function Sello({ texto }: { texto: string }) {
  return (
    <span
      className="inline-flex items-center justify-center w-[92px] h-[92px] rounded-full border-2 border-dashed text-center font-mono text-[10px] font-bold uppercase tracking-[0.14em] leading-tight p-3"
      style={{ borderColor: C.verde, color: C.verde, transform: 'rotate(-8deg)' }}
      aria-label={texto}
    >
      {texto}
    </span>
  )
}

// ── Badge de bosquejo ────────────────────────────────────────

export function BosquejoBadge() {
  return (
    <span
      className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
      style={{ backgroundColor: C.verde, color: C.papel }}
    >
      Bosquejo · se reemplaza por tu foto real al activar
    </span>
  )
}

/** Dormitorio con ventanal al jardín, trazo a línea. */
export function BosquejoDormitorio({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.crema }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.verde} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* ventanal con vista a la pradera */}
          <rect x="480" y="70" width="240" height="210" />
          <path d="M480 175 h240 M600 70 v210" strokeWidth="1.6" />
          <path d="M495 245 q30 -22 55 -8 q20 10 45 -6 q25 -14 55 4 q20 12 55 -2" strokeWidth="1.6" opacity="0.7" />
          {/* sauce afuera */}
          <path d="M530 120 q-6 60 -14 95 M530 120 q6 55 12 92 M530 120 q-20 50 -34 80" strokeWidth="1.3" opacity="0.6" />
          <path d="M505 250 a12 26 0 0 1 0 0 M505 245 l0 -18" strokeWidth="1" opacity="0" />
          {/* cama */}
          <rect x="80" y="280" width="330" height="150" rx="6" />
          <path d="M80 280 v-60 M410 280 v-34" />
          <rect x="112" y="238" width="96" height="42" rx="10" />
          <path d="M80 330 h330 M110 430 v22 M380 430 v22" />
          {/* velador */}
          <rect x="440" y="360" width="60" height="70" />
          <path d="M470 360 v-34 m-16 0 h32 l-5 -20 h-22 Z" />
          {/* alfombra */}
          <ellipse cx="260" cy="490" rx="160" ry="24" strokeDasharray="9 7" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.verde }}>
        croquis 01 · dormitorio
      </p>
    </div>
  )
}

/** Cocina-estar de la cabaña, trazo a línea. */
export function BosquejoCocina({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.crema }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.verde} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* mesa con sillas */}
          <rect x="330" y="250" width="200" height="18" rx="4" />
          <path d="M350 268 v110 M510 268 v110" />
          <path d="M370 268 h120" strokeWidth="1.4" opacity="0.5" />
          {/* sillas */}
          <path d="M270 300 v80 m0 -80 h30 v-30 M270 340 h30" />
          <path d="M600 300 v80 m0 -80 h-30 v-30 M600 340 h-30" />
          {/* mantel a cuadros sugerido */}
          <path d="M340 259 h180 M350 252 v14 M400 252 v14 M450 252 v14 M500 252 v14" strokeWidth="1.2" opacity="0.45" />
          {/* cocina atrás */}
          <path d="M80 200 h190 v160 h-190 Z" />
          <path d="M80 200 v-16 h190 v16" strokeWidth="1.8" />
          <circle cx="120" cy="280" r="14" />
          <circle cx="170" cy="280" r="14" />
          <path d="M120 308 h120" strokeWidth="1.4" />
          {/* repisa con tarros */}
          <path d="M90 120 h160" />
          <path d="M110 120 v-24 a10 6 0 0 1 20 0 v24 M160 120 v-20 a9 5 0 0 1 18 0 v20 M205 120 v-26 a10 6 0 0 1 20 0 v26" strokeWidth="1.5" />
          {/* lámpara colgante */}
          <path d="M430 40 v70 m-26 0 h52 l-10 -34 h-32 Z" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.verde }}>
        croquis 02 · cocina y estar
      </p>
    </div>
  )
}

/** Piscina en la pradera con los sauces, trazo a línea. */
export function BosquejoPiscina({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.crema }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* agua */}
        <rect x="90" y="270" width="620" height="180" fill={C.piscina} opacity="0.35" />
        <g fill="none" stroke={C.verde} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* borde piscina */}
          <path d="M90 270 h620 v180 h-620 Z" />
          <path d="M90 270 l40 -26 h540 l40 26" strokeWidth="1.8" />
          {/* olas */}
          <path d="M130 320 q20 -12 40 0 q20 12 40 0 M230 340 q20 -12 40 0 q20 12 40 0 M420 330 q20 -12 40 0 q20 12 40 0 M560 350 q20 -12 40 0 q20 12 40 0" strokeWidth="1.6" />
          {/* escalera */}
          <path d="M640 270 v90 m0 -90 h26 v90 M640 300 h26 M640 330 h26" strokeWidth="1.8" />
          {/* sauces detrás */}
          <path d="M150 240 q-8 -80 -4 -130 M150 240 q8 -75 16 -120 M150 240 q-24 -70 -40 -105" strokeWidth="1.6" />
          {[105, 130, 155, 180].map((y, i) => (
            <path key={y} d={`M${146 + i * 3} ${y} q-14 26 -20 50`} strokeWidth="1.1" opacity="0.6" />
          ))}
          <path d="M700 240 q6 -75 2 -120 M700 240 q-10 -70 -22 -110" strokeWidth="1.6" />
          {[120, 145, 170].map((y, i) => (
            <path key={y} d={`M${698 - i * 3} ${y} q14 24 20 46`} strokeWidth="1.1" opacity="0.6" />
          ))}
          {/* sombrilla */}
          <path d="M320 250 v-60 M255 190 a70 70 0 0 1 130 0 Z" />
          <path d="M320 190 v-28" strokeWidth="1.4" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.verde }}>
        croquis 03 · piscina y pradera
      </p>
    </div>
  )
}

/**
 * app/demos/ferreteria-mapani/scenes.tsx
 *
 * Ornamentos y bosquejos del demo. El motivo propio es «el pasillo»:
 * los rótulos colgantes de una ferretería de barrio marcan cada
 * sección y las escenas interiores van dibujadas a línea, marcadas
 * visiblemente como bosquejo porque la ficha pública solo tiene una
 * foto real (la fachada).
 */

const C = {
  rojo: '#A81E1E',
  carbon: '#1E1A16',
  amarillo: '#F2B90C',
  papel: '#F7F1E4',
  papelSombra: '#EDE3CE',
}

// ── Rótulo de pasillo (señalética colgante) ──────────────────

export function RotuloPasillo({ n, label }: { n: string; label: string }) {
  return (
    <span className="inline-flex items-stretch" aria-hidden="true">
      <span
        className="flex items-center justify-center px-3 font-mono text-[11px] font-bold tracking-widest"
        style={{ backgroundColor: C.amarillo, color: C.carbon }}
      >
        {n}
      </span>
      <span
        className="flex items-center px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em]"
        style={{ backgroundColor: C.carbon, color: C.papel }}
      >
        {label}
      </span>
    </span>
  )
}

// ── Badge de bosquejo ────────────────────────────────────────

export function BosquejoBadge() {
  return (
    <span
      className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1"
      style={{ backgroundColor: C.amarillo, color: C.carbon }}
    >
      Bosquejo · se reemplaza por tu foto real al activar
    </span>
  )
}

/** Pasillo con estanterías a ambos lados, perspectiva a línea. */
export function BosquejoPasillo({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.papelSombra }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.carbon} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* perspectiva del pasillo */}
          <path d="M0 80 L330 190 M0 520 L330 360 M800 80 L470 190 M800 520 L470 360" strokeWidth="1.6" opacity="0.5" />
          {/* estantería izquierda */}
          <path d="M40 110 L300 200 V420 L40 470 Z" />
          {[150, 200, 250, 300, 350].map((y) => (
            <path key={y} d={`M40 ${110 + (y - 110) * 0.86} L300 ${y * 0.9 + 20}`} strokeWidth="1.6" opacity="0.6" />
          ))}
          {/* cajas izquierda */}
          <rect x="70" y="140" width="40" height="26" />
          <rect x="125" y="155" width="34" height="22" />
          <rect x="80" y="230" width="44" height="28" />
          <rect x="150" y="250" width="36" height="24" />
          {/* estantería derecha */}
          <path d="M760 110 L500 200 V420 L760 470 Z" />
          {[150, 200, 250, 300, 350].map((y) => (
            <path key={y} d={`M760 ${110 + (y - 110) * 0.86} L500 ${y * 0.9 + 20}`} strokeWidth="1.6" opacity="0.6" />
          ))}
          {/* herramientas colgadas derecha */}
          <path d="M560 140 v30 m-10 -4 h20" />
          <path d="M600 150 v34 m-8 0 a8 8 0 0 0 16 0" />
          <rect x="640" y="140" width="14" height="40" rx="3" />
          {/* rótulo colgante central */}
          <path d="M400 60 v40 M370 100 h60 v34 h-60 Z" />
          <path d="M385 100 v-24 m30 24 v-24" strokeWidth="1.6" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.carbon }}>
        alzado 01 · pasillo de herramientas
      </p>
    </div>
  )
}

/** Mostrador con vitrina y estante atrás. */
export function BosquejoMostrador({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.papelSombra }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.carbon} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* repisas del fondo */}
          {[110, 170, 230].map((y) => (
            <path key={y} d={`M120 ${y} h560`} strokeWidth="1.8" opacity="0.6" />
          ))}
          {/* cajas en repisas */}
          <rect x="150" y="80" width="46" height="30" />
          <rect x="215" y="86" width="36" height="24" />
          <rect x="320" y="82" width="52" height="28" />
          <rect x="470" y="80" width="40" height="30" />
          <rect x="560" y="86" width="44" height="24" />
          <rect x="180" y="140" width="40" height="30" />
          <rect x="300" y="144" width="48" height="26" />
          <rect x="420" y="140" width="34" height="30" />
          <rect x="540" y="144" width="50" height="26" />
          {/* latas/tarros */}
          <ellipse cx="250" cy="205" rx="14" ry="5" />
          <path d="M236 205 v22 a14 5 0 0 0 28 0 v-22" />
          <ellipse cx="640" cy="205" rx="14" ry="5" />
          <path d="M626 205 v22 a14 5 0 0 0 28 0 v-22" />
          {/* mostrador */}
          <path d="M80 340 h640 v130 h-720 Z" />
          <path d="M80 340 l40 -34 h560 l40 34" strokeWidth="1.8" />
          {/* vitrina sobre el mostrador */}
          <path d="M140 300 h220 v40 h-220 Z" strokeWidth="1.8" opacity="0.7" />
          <path d="M140 300 l20 -20 h180 l20 20" strokeWidth="1.4" opacity="0.5" />
          {/* báscula/calculadora */}
          <rect x="560" y="288" width="70" height="52" rx="4" />
          <path d="M575 288 v-22 h40 v22" />
          {/* tabla en el frente */}
          <path d="M120 370 h560 M120 410 h560 M120 450 h560" strokeWidth="1.3" opacity="0.4" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.carbon }}>
        alzado 02 · el mostrador
      </p>
    </div>
  )
}

/** Rincones del local: tambor, carretilla y materiales apilados. */
export function BosquejoMateriales({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.papelSombra }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.carbon} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* sacos apilados */}
          <path d="M90 380 a60 26 0 0 1 120 0 v60 a60 26 0 0 1 -120 0 Z" />
          <path d="M120 320 a55 24 0 0 1 110 0 v60 a55 24 0 0 1 -110 0 Z" />
          <path d="M100 380 h110 M130 320 h90" strokeWidth="1.4" opacity="0.5" />
          {/* tambor */}
          <ellipse cx="330" cy="330" rx="52" ry="16" />
          <path d="M278 330 v110 a52 16 0 0 0 104 0 v-110" />
          <path d="M278 360 a52 16 0 0 0 104 0 M278 400 a52 16 0 0 0 104 0" strokeWidth="1.6" opacity="0.6" />
          {/* carretilla */}
          <path d="M480 300 l140 -30 v90 l-140 30 Z" />
          <circle cx="540" cy="430" r="34" />
          <circle cx="540" cy="430" r="10" strokeWidth="1.6" />
          <path d="M620 360 l60 -60 M500 330 l-40 -50 M-10 0" />
          <path d="M680 300 l30 -34" />
          {/* pala y escoba apoyadas */}
          <path d="M700 140 v220 m0 -220 a16 30 0 0 1 0 60 M700 200 v160" />
          <path d="M740 130 v230 m-14 0 h28 l-8 40 h-12 Z" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.carbon }}>
        alzado 03 · materiales y despacho
      </p>
    </div>
  )
}

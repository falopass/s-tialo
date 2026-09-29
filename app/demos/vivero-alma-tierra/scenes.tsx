/**
 * app/demos/vivero-alma-tierra/scenes.tsx
 *
 * Ornamentos y bosquejos del demo. El motivo propio es «la etiqueta
 * clavada»: cada sección se marca como esas tarjetas blancas sobre
 * palito que rotulan las hileras de un vivero. Las escenas sin foto
 * real van dibujadas a línea y marcadas visiblemente como bosquejo.
 */

const C = {
  verde: '#2F4A2E',
  verdeClaro: '#6E8F5F',
  terracota: '#AE4E26',
  papel: '#F6F1E3',
  crema: '#EDE5D2',
  tierra: '#4A3627',
}

// ── Etiqueta de vivero clavada (blanca sobre palito) ─────────

export function Etiqueta({ children, tilt = -2 }: { children: React.ReactNode; tilt?: number }) {
  return (
    <span className="inline-block" style={{ transform: `rotate(${tilt}deg)` }} aria-hidden="true">
      <span
        className="inline-block px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] shadow-sm"
        style={{ backgroundColor: '#FFFFFF', color: C.verde, border: `1.5px solid rgba(47,74,46,0.35)` }}
      >
        {children}
      </span>
      <span
        className="block mx-auto w-[3px] h-[14px]"
        style={{ backgroundColor: C.tierra }}
      />
    </span>
  )
}

// ── Badge de bosquejo ────────────────────────────────────────

export function BosquejoBadge() {
  return (
    <span
      className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1"
      style={{ backgroundColor: C.terracota, color: C.papel }}
    >
      Bosquejo · se reemplaza por tu foto real al activar
    </span>
  )
}

/** Hilera de maceteros de terracota con flores, trazo a línea. */
export function BosquejoGavillas({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.crema }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* maceteros terracota */}
        {[
          [120, 340], [280, 350], [440, 345], [600, 355],
          [200, 460], [380, 470], [560, 465],
        ].map(([x, y], i) => (
          <g key={i}>
            <path
              d={`M${x - 44} ${y} h88 l-10 64 h-68 Z`}
              fill={C.terracota}
              opacity="0.55"
            />
            <path d={`M${x - 48} ${y - 14} h96 v14 h-96 Z`} fill={C.terracota} opacity="0.7" />
          </g>
        ))}
        <g fill="none" stroke={C.verde} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* plantas sobre cada macetero */}
          {[
            [120, 326, 0], [280, 336, 1], [440, 331, 2], [600, 341, 1],
            [200, 446, 2], [380, 456, 0], [560, 451, 2],
          ].map(([x, y, v]) =>
            v === 0 ? (
              <g key={`${x}${y}`}>
                <path d={`M${x} ${y} q-16 -34 -30 -46 M${x} ${y} q4 -40 2 -56 M${x} ${y} q18 -30 32 -44`} />
                <circle cx={x - 32} cy={y - 50} r="9" />
                <circle cx={x + 2} cy={y - 60} r="9" />
                <circle cx={x + 34} cy={y - 48} r="9" />
              </g>
            ) : v === 1 ? (
              <g key={`${x}${y}`}>
                <path d={`M${x} ${y} v-58`} />
                <path d={`M${x} ${y - 20} q-24 -8 -34 -28 M${x} ${y - 34} q22 -6 32 -26`} />
              </g>
            ) : (
              <g key={`${x}${y}`}>
                <path d={`M${x} ${y} q-4 -30 -2 -48`} />
                <ellipse cx={x - 2} cy={y - 58} rx="16" ry="22" />
              </g>
            ),
          )}
          {/* suelo */}
          <path d="M60 520 h680" strokeWidth="1.6" opacity="0.5" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.verde }}>
        croquis 01 · hilera de temporada
      </p>
    </div>
  )
}

/** Mesa de trabajo del vivero: maceteros, herramienta y bolsas. */
export function BosquejoMesa({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.crema }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.verde} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* mesa */}
          <path d="M100 300 h600 v24 h-600 Z" />
          <path d="M130 324 v150 M670 324 v150 M130 400 h540" strokeWidth="1.8" />
          {/* macetero chico en la mesa */}
          <path d="M180 250 h70 l-8 50 h-54 Z" />
          <path d="M175 240 h80 v10 h-80 Z" />
          <path d="M215 240 q-12 -28 -26 -38 M215 240 q4 -34 0 -46 M215 240 q14 -24 28 -34" />
          {/* pala de mano */}
          <path d="M330 285 l50 -50 m0 0 l26 26 l-50 50 Z" />
          <path d="M380 235 l14 -30" />
          <ellipse cx="398" cy="198" rx="10" ry="14" transform="rotate(45 398 198)" />
          {/* regadera */}
          <path d="M470 250 h90 v50 h-90 Z" />
          <path d="M560 260 q50 -10 60 -40" />
          <path d="M470 265 q-34 -6 -44 -30" />
          <circle cx="620" cy="214" r="6" />
          <path d="M612 224 l-10 16 M620 226 l-2 18 M628 224 l6 16" strokeWidth="1.3" opacity="0.6" />
          {/* bolsa de sustrato bajo la mesa */}
          <path d="M240 430 a46 20 0 0 1 92 0 v44 a46 20 0 0 1 -92 0 Z" />
          <path d="M252 452 h68" strokeWidth="1.4" opacity="0.5" />
          {/* cajón de plantines */}
          <path d="M430 430 h160 v44 h-160 Z" />
          {[450, 485, 520, 555].map((x) => (
            <path key={x} d={`M${x} 430 v-14 a8 8 0 0 1 16 0 v14`} strokeWidth="1.4" opacity="0.6" />
          ))}
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.verde }}>
        croquis 02 · mesa de trasplante
      </p>
    </div>
  )
}

/** La parcela: portón de campo, antenas de árboles y el invernadero atrás. */
export function BosquejoParcela({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ backgroundColor: C.crema }} aria-hidden="true">
      <svg viewBox="0 0 800 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.verde} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
          {/* invernadero al fondo */}
          <path d="M420 300 v-90 a140 60 0 0 1 280 0 v90 Z" strokeWidth="1.8" opacity="0.7" />
          <path d="M440 300 v-84 a120 46 0 0 1 240 0 v84 M560 154 v146" strokeWidth="1.2" opacity="0.45" />
          {/* portón */}
          <path d="M80 320 h260" />
          <path d="M100 320 v-120 m60 120 v-120 m60 120 v-120 m60 120 v-120" strokeWidth="1.8" />
          <path d="M100 220 l240 100 M100 300 l240 -80" strokeWidth="1.4" opacity="0.6" />
          {/* poste del cartel */}
          <path d="M360 320 v-140" />
          <rect x="320" y="130" width="80" height="50" />
          {/* camino */}
          <path d="M210 330 q30 90 20 200 M330 330 q-10 90 -20 200" strokeWidth="1.4" opacity="0.5" strokeDasharray="10 8" />
          {/* árboles del fondo */}
          <path d="M60 300 q-6 -60 -2 -95 M60 300 q8 -55 16 -90" strokeWidth="1.5" opacity="0.6" />
          <path d="M740 300 q-4 -55 0 -90 M740 300 q10 -50 20 -84" strokeWidth="1.5" opacity="0.6" />
          {/* pasto */}
          <path d="M420 330 q8 -16 16 0 M460 335 q8 -14 16 0 M520 332 q8 -16 16 0 M580 336 q8 -14 16 0" strokeWidth="1.3" opacity="0.5" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: C.verde }}>
        croquis 03 · la parcela y el invernadero
      </p>
    </div>
  )
}

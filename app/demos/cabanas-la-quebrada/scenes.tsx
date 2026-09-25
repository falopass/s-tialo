/**
 * app/demos/cabanas-la-quebrada/scenes.tsx
 *
 * Arte SVG ilustrado para el mockup (sin fotos externas): escenas de
 * bosque, valle y cabañas en la paleta del demo (verde bosque, arena,
 * terracota, crema). Todo es decorativo (aria-hidden).
 */

const C = {
  bosque: '#173A2B',
  bosqueDeep: '#0E241B',
  bosqueInk: '#0A1B14',
  arena: '#E8DCC8',
  terracota: '#C4704B',
  crema: '#FAF7F0',
  sol: '#F2C488',
  luz: '#F4B860',
}

// ── Primitivas ───────────────────────────────────────────────

function Pines({
  xs,
  y,
  color,
  scale = 1,
}: {
  xs: number[]
  y: number
  color: string
  scale?: number
}) {
  return (
    <g fill={color}>
      {xs.map((x, i) => {
        const s = scale * (0.75 + ((i * 37) % 5) * 0.12)
        return (
          <path
            key={i}
            transform={`translate(${x} ${y}) scale(${s})`}
            d="M0 0 L16 0 L8 -26 Z M2.5 -14 L13.5 -14 L8 -38 Z M4.5 -26 L11.5 -26 L8 -46 Z M7 0 h2 v7 h-2 Z"
          />
        )
      })}
    </g>
  )
}

function Cabin({
  x,
  y,
  s = 1,
  lit = true,
  body = '#241A10',
}: {
  x: number
  y: number
  s?: number
  lit?: boolean
  body?: string
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="0" y="0" width="120" height="72" fill={body} />
      <path d="M-12 0 L60 -44 L132 0 Z" fill="#1A130C" />
      <rect x="88" y="-34" width="10" height="22" fill="#1A130C" />
      <rect x="14" y="18" width="26" height="54" fill="#171008" />
      {lit ? (
        <>
          <rect x="56" y="20" width="20" height="20" fill={C.luz} />
          <rect x="84" y="20" width="20" height="20" fill={C.luz} opacity="0.85" />
          <path d="M56 30 h20 M66 20 v20 M84 30 h20 M94 20 v20" stroke={body} strokeWidth="2" />
          <circle cx="80" cy="30" r="34" fill={C.luz} opacity="0.14" />
        </>
      ) : (
        <>
          <rect x="56" y="20" width="20" height="20" fill="#3A2E1E" />
          <rect x="84" y="20" width="20" height="20" fill="#3A2E1E" />
        </>
      )}
    </g>
  )
}

// ── Hero: quebrada al atardecer ──────────────────────────────

export function HeroScene({ className = '' }: { className?: string }) {
  const stars = [
    [120, 90, 1.4], [260, 150, 1], [420, 70, 1.6], [560, 130, 0.9],
    [700, 60, 1.2], [860, 110, 1], [1010, 70, 1.5], [1180, 140, 0.9],
    [1330, 80, 1.3], [1470, 150, 1], [180, 240, 0.9], [940, 210, 0.8],
    [50, 180, 1], [760, 180, 0.9], [1560, 220, 1.1],
  ]
  const pinesFar = [60, 190, 330, 470, 640, 790, 940, 1090, 1250, 1400, 1530]
  const pinesNear = [10, 140, 260, 420, 560, 720, 880, 1060, 1200, 1360, 1500, 1590]

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="lq-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#08170F" />
          <stop offset="0.42" stopColor={C.bosque} />
          <stop offset="0.72" stopColor="#4E6B4F" />
          <stop offset="0.9" stopColor="#C98A5E" />
          <stop offset="1" stopColor="#E8B077" />
        </linearGradient>
        <radialGradient id="lq-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={C.sol} stopOpacity="0.85" />
          <stop offset="1" stopColor={C.sol} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lq-fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.arena} stopOpacity="0" />
          <stop offset="1" stopColor={C.arena} stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#lq-sky)" />

      {stars.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={C.crema} opacity={0.25 + (i % 4) * 0.14} />
      ))}

      <ellipse cx="1150" cy="560" rx="460" ry="240" fill="url(#lq-glow)" />
      <circle cx="1150" cy="548" r="54" fill={C.sol} />
      <circle cx="1150" cy="548" r="54" fill="#E8B077" opacity="0.35" />

      {/* Cordillera lejana */}
      <path
        d="M0 560 L140 470 L280 545 L430 440 L580 540 L720 465 L900 555 L1080 470 L1260 560 L1420 500 L1600 565 L1600 900 L0 900 Z"
        fill="#2B5240"
        opacity="0.75"
      />
      {/* Cerros medios */}
      <path
        d="M0 640 L200 560 L380 635 L560 555 L780 650 L980 575 L1180 660 L1380 590 L1600 655 L1600 900 L0 900 Z"
        fill="#1B3D2C"
      />
      {/* Línea de bosque */}
      <Pines xs={pinesFar} y={700} color="#123024" scale={0.9} />
      <path d="M0 700 L1600 700 L1600 900 L0 900 Z" fill="#123024" />

      {/* Cabañas con luz cálida */}
      <Cabin x={520} y={700} s={1.1} />
      <Cabin x={1010} y={716} s={0.8} lit={false} />
      <Cabin x={240} y={728} s={0.65} lit={false} />

      {/* Primer plano */}
      <Pines xs={pinesNear} y={800} color={C.bosqueInk} scale={1.25} />
      <path d="M0 800 L1600 800 L1600 900 L0 900 Z" fill={C.bosqueInk} />
      <rect y="760" width="1600" height="140" fill="url(#lq-fog)" />
    </svg>
  )
}

// ── Tarjetas de cabañas ──────────────────────────────────────

type CabinVariant = 'parejas' | 'familiar' | 'grupo'

const CARD_SKY: Record<CabinVariant, [string, string, string]> = {
  parejas: ['#F7E4C8', '#EBC096', '#D08A5C'],
  familiar: ['#FDF5E6', '#E8DCC8', '#A9BC97'],
  grupo: ['#24453A', '#4E6B4F', '#D08A5C'],
}

export function CabinScene({
  variant,
  className = '',
}: {
  variant: CabinVariant
  className?: string
}) {
  const [top, mid, low] = CARD_SKY[variant]
  const id = `lq-card-${variant}`
  const night = variant === 'grupo'
  const ground = night ? '#0A1B14' : '#5C6B4A'
  const ridge = night ? '#16382A' : '#7E8F6B'
  const cabinBody = night ? '#241A10' : '#3A2A1A'

  return (
    <svg
      viewBox="0 0 800 520"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="0.6" stopColor={mid} />
          <stop offset="1" stopColor={low} />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill={`url(#${id})`} />

      {night ? (
        <>
          <circle cx="640" cy="110" r="34" fill={C.sol} opacity="0.9" />
          <circle cx="640" cy="110" r="60" fill={C.sol} opacity="0.15" />
          {[[120, 80], [300, 140], [480, 60], [560, 200], [180, 200]].map(
            ([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1.6" fill={C.crema} opacity="0.6" />
            ),
          )}
        </>
      ) : (
        <circle cx={variant === 'parejas' ? 600 : 170} cy={variant === 'parejas' ? 150 : 120} r="46" fill={C.sol} opacity="0.9" />
      )}

      <path
        d="M0 320 L150 240 L300 315 L470 235 L640 320 L800 260 L800 520 L0 520 Z"
        fill={ridge}
        opacity={night ? 1 : 0.8}
      />
      <Pines xs={[30, 130, 250, 560, 690, 770]} y={400} color={night ? '#0E241B' : '#46563A'} scale={0.9} />
      <path d="M0 400 L800 400 L800 520 L0 520 Z" fill={ground} />

      {variant === 'familiar' ? (
        <>
          <Cabin x={300} y={370} s={1.15} lit={false} body={cabinBody} />
          <Cabin x={520} y={392} s={0.8} lit={false} body={cabinBody} />
        </>
      ) : variant === 'grupo' ? (
        <>
          <Cabin x={260} y={360} s={1.1} />
          <Cabin x={470} y={372} s={0.95} />
        </>
      ) : (
        <Cabin x={330} y={368} s={1.05} body={cabinBody} />
      )}

      <rect y="430" width="800" height="90" fill={night ? '#0A1B14' : '#47563A'} />
    </svg>
  )
}

// ── Collage "El entorno" ─────────────────────────────────────

export function ForestPanel({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <rect width="400" height="520" fill={C.bosqueDeep} />
      <circle cx="200" cy="150" r="120" fill={C.sol} opacity="0.12" />
      {[40, 110, 190, 275, 350].map((x, i) => (
        <rect key={i} x={x} y={60 - i * 14} width={18 - (i % 3) * 4} height={520} fill={i % 2 ? '#123024' : '#0A1B14'} />
      ))}
      {[70, 160, 240, 330].map((x, i) => (
        <ellipse key={i} cx={x} cy={90 + (i % 2) * 30} rx={70} ry={44} fill="#1B3D2C" />
      ))}
      <path d="M0 470 Q200 430 400 470 L400 520 L0 520 Z" fill="#08170F" />
      <circle cx="300" cy="440" r="4" fill={C.luz} opacity="0.7" />
    </svg>
  )
}

export function RiverPanel({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="lq-river-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EBC096" />
          <stop offset="1" stopColor="#D08A5C" />
        </linearGradient>
      </defs>
      <rect width="400" height="520" fill="url(#lq-river-sky)" />
      <circle cx="310" cy="120" r="44" fill={C.sol} />
      <path d="M0 260 L110 190 L220 255 L330 200 L400 250 L400 520 L0 520 Z" fill="#2B5240" opacity="0.8" />
      <path d="M0 330 Q120 300 200 335 T400 320 L400 520 L0 520 Z" fill="#3E6E55" />
      {/* río */}
      <path d="M0 380 Q140 350 220 390 T400 375 L400 520 L0 520 Z" fill="#8FB6A4" />
      <path d="M0 415 Q140 390 230 420 T400 410" fill="none" stroke={C.crema} strokeWidth="5" opacity="0.6" />
      <path d="M40 455 Q160 435 260 460 T400 450" fill="none" stroke={C.crema} strokeWidth="4" opacity="0.4" />
      <path d="M0 490 Q200 470 400 495 L400 520 L0 520 Z" fill={C.arena} />
    </svg>
  )
}

export function ValleyPanel({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="lq-valley-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FDF5E6" />
          <stop offset="1" stopColor="#EBC89E" />
        </linearGradient>
      </defs>
      <rect width="400" height="520" fill="url(#lq-valley-sky)" />
      <circle cx="120" cy="110" r="40" fill={C.sol} />
      <path d="M0 240 L140 160 L260 235 L400 170 L400 520 L0 520 Z" fill="#4E6B4F" opacity="0.85" />
      <path d="M0 320 Q200 260 400 330 L400 520 L0 520 Z" fill="#7E8F6B" />
      {/* surcos del campo */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M-20 ${370 + i * 26} Q200 ${345 + i * 26} 420 ${375 + i * 26}`}
          fill="none"
          stroke={i % 2 ? '#5C6B4A' : '#8B6E4A'}
          strokeWidth="10"
          opacity="0.55"
        />
      ))}
      <Pines xs={[40, 330]} y={360} color="#46563A" scale={0.7} />
    </svg>
  )
}

// ── Franja CTA final ─────────────────────────────────────────

export function CtaScene({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="lq-cta-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#08170F" />
          <stop offset="0.55" stopColor={C.bosque} />
          <stop offset="1" stopColor="#C98A5E" />
        </linearGradient>
      </defs>
      <rect width="1600" height="700" fill="url(#lq-cta-sky)" />
      {[
        [150, 100, 1.5], [350, 160, 1], [560, 80, 1.3], [780, 150, 1],
        [1000, 90, 1.5], [1230, 140, 1], [1450, 100, 1.4],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={C.crema} opacity={0.35} />
      ))}
      <path d="M0 430 L260 330 L480 420 L700 320 L960 430 L1200 340 L1440 430 L1600 370 L1600 700 L0 700 Z" fill="#16382A" />
      <Pines xs={[80, 260, 450, 660, 880, 1080, 1280, 1480]} y={520} color={C.bosqueInk} scale={1.1} />
      <path d="M0 520 L1600 520 L1600 700 L0 700 Z" fill={C.bosqueInk} />
      <Cabin x={730} y={520} s={1.05} />
      <rect y="580" width="1600" height="120" fill={C.bosqueInk} opacity="0.85" />
    </svg>
  )
}

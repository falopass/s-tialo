import { motoParts, spokePath, VIEW, type MotoKind, type Tone } from './art'

/**
 * Silueta de moto de referencia (SVG inline). `gap` es el color del fondo sobre el
 * que se pinta: separa las piezas con un filete fino sin usar transparencias.
 */
export function Moto({
  kind,
  ink,
  accent,
  steel,
  gap,
  label,
  className = '',
}: {
  kind: MotoKind
  ink: string
  accent: string
  steel: string
  gap: string
  label: string
  className?: string
}) {
  const { wheels, fills, strokes } = motoParts(kind)
  const color: Record<Tone, string> = { ink, accent, steel }

  return (
    <svg viewBox={VIEW} role="img" aria-label={label} className={className} fill="none">
      {wheels.map((w) => (
        <g key={`${w.cx}-${w.cy}`}>
          <circle cx={w.cx} cy={w.cy} r={w.r - 5} stroke={ink} strokeWidth={10} />
          <circle cx={w.cx} cy={w.cy} r={w.r - 11} stroke={steel} strokeWidth={2} />
          <path d={spokePath(w)} stroke={steel} strokeWidth={1.4} />
          <circle cx={w.cx} cy={w.cy} r={w.r * 0.2} fill={ink} />
          <circle cx={w.cx} cy={w.cy} r={w.r * 0.08} fill={accent} />
        </g>
      ))}
      {fills.map((f, i) => (
        <path
          key={`f${i}`}
          d={f.d}
          fill={color[f.tone]}
          fillOpacity={f.opacity}
          stroke={gap}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      ))}
      {strokes.map((s, i) => (
        <path
          key={`s${i}`}
          d={s.d}
          stroke={color[s.tone]}
          strokeWidth={s.w}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

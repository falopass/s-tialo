import type { CSSProperties } from 'react'
import EagerImages from './eager-images'

/**
 * app/globals.css redefine la escala de espaciado (--spacing-5 = 24px, --spacing-10 = 128px,
 * --spacing-12 = 240px) para el sitio principal. Los demos están diseñados con la escala por
 * defecto de Tailwind (n × 4px): sin esto los botones quedan gigantes, los paddings enormes y
 * el layout desborda en móvil. Aquí se restaura la escala estándar para todo /demos/.
 */
const SPACING_DEFAULT = Object.fromEntries(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

/**
 * El aviso flotante de Sitiazo y la burbuja de WhatsApp van fijos abajo: sin este respiro
 * tapan el último texto de la página (footer). El padding deja libre la franja inferior.
 */
const WRAP: CSSProperties = { ...SPACING_DEFAULT, paddingBottom: '84px' }

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={WRAP}>
      <EagerImages />
      {children}
    </div>
  )
}

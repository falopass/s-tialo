import type { CSSProperties } from 'react'

/**
 * app/globals.css redefine la escala de espaciado (--spacing-5 = 24px, --spacing-10 = 128px,
 * --spacing-12 = 240px) para el sitio principal. Los demos están diseñados con la escala por
 * defecto de Tailwind (n × 4px): sin esto los botones quedan gigantes, los paddings enormes y
 * el layout desborda en móvil. Aquí se restaura la escala estándar (igual que en /demos/)
 * para el sitio de Rancho Itahue; el padding inferior deja libre la burbuja de WhatsApp.
 */
const SPACING_DEFAULT = Object.fromEntries(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export default function RanchoItahueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ ...SPACING_DEFAULT, paddingBottom: '84px' }}>
      {children}
    </div>
  )
}

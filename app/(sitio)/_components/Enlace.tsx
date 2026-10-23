import Link from 'next/link'

/**
 * Enlace interno del sitio. En la fase de movimiento se convierte en la navegación con
 * transición de vista; mientras tanto es un next/link normal.
 */
export function Enlace(props: React.ComponentProps<typeof Link>) {
  return <Link {...props} />
}

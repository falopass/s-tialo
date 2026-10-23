'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { navegarConTransicion } from '../_lib/transiciones'

const normalizar = (p: string) => p.replace(/\/+$/, '') || '/'

/**
 * Enlace interno del sitio con transición de vista. Los demos (/demos/*) no pasan por aquí:
 * se enlazan con <a> para que carguen en un documento limpio.
 */
export function Enlace({ href, onClick, ...props }: React.ComponentProps<typeof Link>) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        const destino = typeof href === 'string' ? href : (href.pathname ?? '')
        if (!destino.startsWith('/') || destino.startsWith('/demos')) return
        if (normalizar(destino) === normalizar(pathname)) return
        if (navegarConTransicion(() => router.push(destino))) e.preventDefault()
      }}
      {...props}
    />
  )
}

'use client'

/**
 * app/demos/turismo-las-brujas/chrome.tsx
 *
 * Piezas con estado del demo: nav sticky tematizado y FAB de WhatsApp,
 * sobre el kit compartido de blitz-kit.tsx. Re-exporta Reveal para que
 * page.tsx importe todo desde aquí.
 */

import { BlitzNav, WaFab, Reveal } from '../blitz-kit'
import { BIZ, WA_LINK } from './content'

const THEME = {
  over: 'dark' as const,
  bar: '#F7F3E8',
  ink: '#0F3530',
  line: 'rgba(15,53,48,0.15)',
  btnBg: '#0F766E',
  btnInk: '#FFFFFF',
}

const LINKS = [
  { label: 'El lugar', href: '#lugar' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

export function Nav({ fontClass = '' }: { fontClass?: string }) {
  return (
    <BlitzNav
      name={BIZ.name}
      links={LINKS}
      waLink={WA_LINK}
      theme={THEME}
      fontClass={fontClass}
    />
  )
}

export function WhatsAppFab() {
  return <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
}

export { Reveal }

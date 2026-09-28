'use client'

/**
 * app/demos/kid-mania/chrome.tsx
 *
 * Piezas con estado del demo: nav sticky tematizado y FAB de WhatsApp,
 * sobre el kit compartido de blitz-kit.tsx. Re-exporta Reveal para que
 * page.tsx importe todo desde aquí.
 */

import { BlitzNav, WaFab, Reveal } from '../blitz-kit'
import { BIZ, WA_LINK } from './content'

const THEME = {
  over: 'dark' as const,
  bar: '#FFF8EF',
  ink: '#38175E',
  line: 'rgba(56,23,94,0.15)',
  btnBg: '#6D28D9',
  btnInk: '#FFFFFF',
}

const LINKS = [
  { label: 'El lugar', href: '#lugar' },
  { label: 'Cumpleaños', href: '#cumpleanos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
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

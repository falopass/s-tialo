'use client'

import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { BIZ, C, WA_LINK } from './content'

export { Reveal }

export function Chrome({ fontClass }: { fontClass: string }) {
  return (
    <>
      <BlitzNav
        name={BIZ.short}
        links={[
          { label: 'Espacios', href: '#espacios' },
          { label: 'Eventos', href: '#eventos' },
          { label: 'Reservar', href: '#reservar' },
          { label: 'Ubicación', href: '#contacto' },
        ]}
        waLink={WA_LINK}
        fontClass={`${fontClass} font-semibold tracking-wide`}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(30,58,47,0.94)',
          ink: C.cream,
          line: C.lineOnDark,
          btnBg: C.gold,
          btnInk: C.ink,
        }}
      />
      <WaFab href={WA_LINK} label="Escribir a Villa Antillanca por WhatsApp" />
    </>
  )
}

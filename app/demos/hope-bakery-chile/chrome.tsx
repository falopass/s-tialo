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
          { label: 'El pan', href: '#pan' },
          { label: 'Encargos', href: '#encargos' },
          { label: 'Horario', href: '#horario' },
          { label: 'Contacto', href: '#contacto' },
        ]}
        waLink={WA_LINK}
        fontClass={`${fontClass} font-semibold tracking-tight`}
        ctaLabel="Encargar"
        logoSrc="/demos/hope-bakery-chile/logo.webp"
        theme={{
          over: 'dark',
          bar: 'rgba(59,35,23,0.94)',
          ink: C.flour,
          line: C.lineOnDark,
          btnBg: C.wheat,
          btnInk: C.ink,
        }}
      />
      <WaFab href={WA_LINK} label="Escribir a Hope Bakery por WhatsApp" />
    </>
  )
}

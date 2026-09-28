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
          { label: 'Áreas', href: '#areas' },
          { label: 'Síntomas', href: '#sintomas' },
          { label: 'Cómo funciona', href: '#pasos' },
          { label: 'Contacto', href: '#contacto' },
        ]}
        waLink={WA_LINK}
        fontClass={`${fontClass} font-semibold uppercase tracking-wide`}
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(14,27,46,0.94)',
          ink: C.steel,
          line: C.lineOnDark,
          btnBg: C.volt,
          btnInk: C.navy,
        }}
      />
      <WaFab href={WA_LINK} label="Escribir a Automotriz Tudela por WhatsApp" />
    </>
  )
}

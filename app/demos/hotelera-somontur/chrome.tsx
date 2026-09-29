'use client'

import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { BIZ, C, IMG, WA_LINK } from './content'

export { Reveal }

export function Chrome({ fontClass }: { fontClass: string }) {
  return (
    <>
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'Tarifas', href: '#tarifas' },
          { label: 'Habitaciones', href: '#habitaciones' },
          { label: 'Salones', href: '#salones' },
          { label: 'Ubicación', href: '#contacto' },
        ]}
        waLink={WA_LINK}
        fontClass={`${fontClass} tracking-wide`}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(34,28,21,0.94)',
          ink: C.cream,
          line: C.lineOnDark,
          btnBg: C.brassSoft,
          btnInk: C.ink,
        }}
      />
      <WaFab href={WA_LINK} label="Escribir al Gran Hotel Isabel Riquelme por WhatsApp" />
    </>
  )
}

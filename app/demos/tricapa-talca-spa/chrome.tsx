'use client'

import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { BIZ, C, WA_LINK } from './content'

export { Reveal }

export function Chrome({ fontClass }: { fontClass: string }) {
  return (
    <>
      <BlitzNav
        name={BIZ.displayName}
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Trabajo', href: '#trabajo' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Cotizar', href: '#cotizar' },
          { label: 'Contacto', href: '#contacto' },
        ]}
        waLink={WA_LINK}
        fontClass={`${fontClass} font-extrabold uppercase tracking-wide`}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(21,23,26,0.94)',
          ink: C.paper,
          line: C.lineOnDark,
          btnBg: C.red,
          btnInk: '#fff',
        }}
      />
      <WaFab href={WA_LINK} label="Escribir a Tricapa Talca por WhatsApp" />
    </>
  )
}

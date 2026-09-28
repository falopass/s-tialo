'use client'

import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { BIZ, C, WA_LINK } from './content'

export { Reveal }

export function Chrome({ fontClass }: { fontClass: string }) {
  return (
    <>
      <BlitzNav
        name={BIZ.name}
        links={[
          { label: 'El café', href: '#cafe' },
          { label: 'Métodos', href: '#metodos' },
          { label: 'Horario', href: '#horario' },
          { label: 'Visítanos', href: '#contacto' },
        ]}
        waLink={WA_LINK}
        fontClass={`${fontClass} font-bold tracking-tight`}
        ctaLabel="Escribir"
        theme={{
          over: 'dark',
          bar: 'rgba(30,74,60,0.94)',
          ink: C.paper,
          line: C.lineOnDark,
          btnBg: C.coral,
          btnInk: '#fff',
        }}
      />
      <WaFab href={WA_LINK} label="Escribir a Monky Coffee por WhatsApp" />
    </>
  )
}

import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK } from './content'

export function Chrome() {
  return (
    <>
      <BlitzNav
        name={BIZ.displayName}
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Proceso', href: '#proceso' },
          { label: 'Contacto', href: '#contacto' },
        ]}
        waLink={WA_LINK}
        fontClass="font-mono"
        theme={{
          over: 'dark',
          bar: '#17191B',
          ink: '#F5F2E9',
          line: 'rgba(245,242,233,0.15)',
          btnBg: '#F0B323',
          btnInk: '#17191B',
        }}
      />
      <WaFab href={WA_LINK} label="Escribir a Tricapa Talca por WhatsApp" />
    </>
  )
}

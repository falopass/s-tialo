import { BlitzNav } from '../blitz-kit'
import { BIZ } from './content'

export function Chrome() {
  return (
    <BlitzNav
      name={BIZ.short}
      links={[
        { label: 'Enfoque', href: '#enfoque' },
        { label: 'Atención', href: '#atencion' },
        { label: 'Ubicación', href: '#contacto' },
      ]}
      waLink={BIZ.instagramUrl}
      fontClass="font-serif"
      theme={{
        over: 'dark',
        bar: '#101A2B',
        ink: '#F7F3EA',
        line: 'rgba(247,243,234,0.18)',
        btnBg: '#D4A64A',
        btnInk: '#101A2B',
      }}
    />
  )
}

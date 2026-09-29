/**
 * app/demos/la-clinica-del-automovil/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: "La Clinica del Automovil", taller de
 *   reparación de automóviles en Molina; rating 4,6; teléfono fijo
 *   44 357 4791; la ficha muestra martes 9:00–18:30 y «se identifica
 *   como mujer empresaria». La ficha no publica calle (solo comuna).
 * - Dirección real, sacada de los afiches que ellos mismos publican en
 *   Instagram: Av. Luis Cruz Martínez 1740, Molina.
 * - Instagram @laclinicadelautomovil_molina: 145 seguidores, 129
 *   publicaciones; publican promos con horarios «continuados»
 *   (Lun–Jue 9:00–18:30 según su afiche) y fotos del taller.
 * - Servicios verificados en su propia fachada y afiches: cambio de
 *   aceite, lubricantes Total Quartz (servicio autorizado), alineación,
 *   balanceo, montaje de neumáticos, recarga de aire acondicionado,
 *   revisión de frenos gratis, baterías con instalación, repuestos y
 *   accesorios.
 * - Fotos: fachada real de la ficha de Maps + afiches y fotos del
 *   taller que ellos publicaron en Instagram. Logo: el avatar real de
 *   su Instagram.
 * - Sin WhatsApp publicado: el CTA es llamada al fijo + Instagram.
 */

export const BIZ = {
  name: 'La Clínica del Automóvil',
  short: 'La Clínica',
  rubro: 'Taller de reparación de automóviles',
  address: 'Av. Luis Cruz Martínez 1740',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '44 357 4791',
  phoneTel: '+56443574791',
  rating: '4,6',
  instagram: 'https://www.instagram.com/laclinicadelautomovil_molina/',
  instagramHandle: '@laclinicadelautomovil_molina',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Clinica del Automovil, Av. Luis Cruz Martínez 1740, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Clinica del Automovil, Av. Luis Cruz Martínez 1740, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/la-clinica-del-automovil'

export const SERVICIOS = [
  {
    n: 'Rx-01',
    name: 'Cambio de aceite y lubricantes',
    desc: 'Servicio autorizado Total Quartz — el logo lo llevan pintado en la fachada.',
    tag: 'mantención',
  },
  {
    n: 'Rx-02',
    name: 'Alineación y balanceo',
    desc: 'Letreros propios dentro del taller: el combo clásico para que no coma neumático.',
    tag: 'tren delantero',
  },
  {
    n: 'Rx-03',
    name: 'Montaje de neumáticos',
    desc: 'Montaje y revisión — la revisión de frenos la anuncian gratis en su propia ventana.',
    tag: 'frenos gratis',
  },
  {
    n: 'Rx-04',
    name: 'Recarga de aire acondicionado',
    desc: '«Dale aire nuevo a tu auto» — servicio de A/C que promocionan en su Instagram.',
    tag: 'A/C',
  },
  {
    n: 'Rx-05',
    name: 'Baterías con instalación',
    desc: 'Baterías nuevas 60, 70 y 90 Ah — «la instalamos por ti», dicen en su afiche.',
    tag: '60–90 Ah',
  },
  {
    n: 'Rx-06',
    name: 'Repuestos y accesorios',
    desc: 'Vitrina propia de repuestos: tapas de rueda, plumillas y accesorios a la vista.',
    tag: 'en el local',
  },
] as const

export const AFICHES = [
  {
    src: `${IMG}/afiche-aire.webp`,
    alt: 'Afiche real de La Clínica del Automóvil: recarga de aire acondicionado',
    cap: 'Promo de A/C publicada por ellos',
  },
  {
    src: `${IMG}/afiche-baterias.webp`,
    alt: 'Afiche real de La Clínica del Automóvil: baterías nuevas 60, 70 y 90 Ah con instalación',
    cap: 'Baterías, su afiche real',
  },
  {
    src: `${IMG}/letrero-repuestos.webp`,
    alt: 'Letrero de repuestos de La Clínica del Automóvil en Molina',
    cap: 'Su vitrina de repuestos',
  },
] as const

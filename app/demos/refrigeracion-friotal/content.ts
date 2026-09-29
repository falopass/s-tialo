// REFRIGERACION FRIOTAL E.I.R.L — verificado en Google Maps (feb 2026).
// Tres Nte. 1421, Talca · tel +56 71 221 2036 · 4.1★ · 37 reseñas.
// Sin redes sociales propias (infoisinfo: "No disponemos de las redes sociales");
// el contacto real del negocio es el teléfono fijo.

export const BIZ = {
  name: 'Refrigeración Friotal',
  short: 'Friotal',
  rubro: 'Servicio técnico de línea blanca',
  address: '3 Norte 1421',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 221 2036',
  phoneTel: '+56712212036',
  rating: 4.1,
  reviews: 37,
  hours: [
    { d: 'Lunes a viernes', h: '9:00 a 13:00 y 15:00 a 18:30' },
    { d: 'Sábado', h: '9:00 a 13:00' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'REFRIGERACION FRIOTAL E.I.R.L, 3 Norte 1421, Talca',
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'REFRIGERACION FRIOTAL E.I.R.L, 3 Norte 1421, Talca',
)}&output=embed`

export const IMG = '/demos/refrigeracion-friotal'

// Texto pintado en el muro del local (foto fachada) + reseñas de Google:
// "SERVICIO TECNICO REFRIGERADORES ASPIRADORAS ENCERADORAS LAVADORAS"
// + letrero "AIRE ACONDICIONADO VENTAS INSTALACIONES" y "FRIOTAL FERRETERIA".
export const SERVICIOS = [
  {
    ot: 'OT-01',
    t: 'Refrigeradores y freezers',
    d: 'Diagnóstico y reparación de neveras domésticas: el arreglo más pedido del taller, según sus reseñas.',
  },
  {
    ot: 'OT-02',
    t: 'Lavadoras y secadoras',
    d: 'Servicio técnico de lavado y secado, uno de los rubros pintados en el muro del local.',
  },
  {
    ot: 'OT-03',
    t: 'Cocinas y estufas',
    d: 'Arreglo de artefactos de cocina. "Buen servicio técnico de artefactos de casa", dicen en Google.',
  },
  {
    ot: 'OT-04',
    t: 'Aire acondicionado',
    d: 'Venta e instalación, como anuncia el letrero sobre la puerta del local.',
  },
  {
    ot: 'OT-05',
    t: 'Aspiradoras y enceradoras',
    d: 'También reparan aspiradoras y enceradoras, tal como dice el muro del taller.',
  },
  {
    ot: 'OT-06',
    t: 'Repuestos de línea blanca',
    d: 'Vitrina con repuestos para electrodomésticos y la ferretería Friotal al costado.',
  },
] as const

export const RESENAS = [
  {
    t: 'Excelente lugar, muy buena atención, excelentes precios y muy rápido servicio. Como familia, más de 20 años contratando sus servicios.',
    a: 'L.C.',
    s: 5,
  },
  {
    t: 'Buen servicio técnico de artefactos de casa: cocinas, refrigeradores, estufas, etc. Muy recomendable.',
    a: 'A.B.',
    s: 5,
  },
  {
    t: 'Surtido repuestos línea blanca. Taller técnico.',
    a: 'M.B.',
    s: 5,
  },
] as const

// Datos confirmados del Centro Tecnológico de Suelos y Cultivos (CTSyC), Talca.
//
// Fuentes:
// - Google Maps: "Centro Tecnológico de Suelos y Cultivos", Ruta 118 9765,
//   Talca (laboratorio de suelos) · tel +56 71 241 8842 · 4.7 (3 reseñas) ·
//   Lun a Vie 08:30-13:00 y Lun a Jue 14:00-17:00.
// - ctsyc.utalca.cl: es la unión de los laboratorios de suelos y de cultivos
//   de la Universidad de Talca; correo ctsyc@utalca.cl, WhatsApp +56 9 9638 5450
//   y resultados en línea vía sistema CTSyC-ROL. Áreas: análisis químicos de
//   suelos, tejidos vegetales, agua, sustratos y físico de suelos; parámetros
//   acreditados por el SAG.
// - Instagram @ctsyc.utalca (~850 seguidores) confirma el teléfono.
// - Fotos: laboratorios e invernadero del propio CTSyC; el edificio es Google
//   Street View de Av. Lircay (mayo 2019 y 2024), rotulado como tal.

export const BIZ = {
  name: 'Centro Tecnológico de Suelos y Cultivos',
  short: 'CTSyC',
  razonSocial: 'Centro Tecnológico de Suelos y Cultivos — Universidad de Talca',
  rubro: 'Laboratorio de suelos, agua y tejido vegetal',
  address: 'Ruta 118 N° 9765, campus Lircay',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 241 8842',
  phoneTel: 'tel:+56712418842',
  waNumber: '+56 9 9638 5450',
  waLink: 'https://wa.me/56996385450',
  mail: 'ctsyc@utalca.cl',
  site: 'ctsyc.utalca.cl',
  ig: '@ctsyc.utalca',
  hours: 'Lun a Vie 08:30 a 13:00 · Lun a Jue también 14:00 a 17:00',
  rating: 4.7,
  reviews: 3,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro Tecnológico de Suelos y Cultivos, Ruta 118 9765, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Tecnológico de Suelos y Cultivos, Ruta 118 9765, Talca',
)}&output=embed`

export const IMG = '/demos/centro-tecnologico-de-suelos-y-cultivos'

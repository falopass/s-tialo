// Datos confirmados de CONEQUIP (Constructora de Especialidades y Equipos
// SpA), Talca.
//
// Fuentes:
// - Google Maps: 4 Norte 1425, Talca (contratista general) · tel +56 71 221 8115
//   · 3.5 (2 reseñas) · Lun a Vie 08:00-17:30.
// - conequip.cl: Constructora de Especialidades y Equipos SpA, RUT 76.097.222-3,
//   empresa familiar desde 1988; teléfonos 71 222 0218 / 71 222 0379 y celular
//   +56 9 3413 4230; correo contacto@conequip.cl. Servicios: edificación,
//   obras civiles y viales, movimiento de tierra, tranques y canales, arriendo
//   de maquinaria y demoliciones.
// - El nombre comercial es CONEQUIP (logo propio, sitio conequip.cl); el slug
//   usa ese nombre en vez de la razón social completa.
// - Fotos: registro aéreo (drone) de sus propias obras, publicado en
//   conequip.cl; logo blanco desde el mismo sitio.

export const BIZ = {
  name: 'CONEQUIP',
  nameFull: 'Constructora de Especialidades y Equipos',
  razonSocial: 'Constructora de Especialidades y Equipos SpA',
  rut: '76.097.222-3',
  rubro: 'Contratista general',
  address: '4 Norte 1425',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 221 8115',
  phoneTel: 'tel:+56712218115',
  cellDisplay: '+56 9 3413 4230',
  waLink: 'https://wa.me/56934134230',
  mail: 'contacto@conequip.cl',
  site: 'conequip.cl',
  hours: 'Lun a Vie 08:00 a 17:30',
  rating: 3.5,
  reviews: 2,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Constructora de Especialidades y Equipos, 4 Norte 1425, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'CONEQUIP, 4 Norte 1425, Talca',
)}&output=embed`

export const IMG = '/demos/conequip'

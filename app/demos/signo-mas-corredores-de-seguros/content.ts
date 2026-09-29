// Datos confirmados de Signo Mas Corredores de Seguros, Talca.
//
// Fuentes:
// - Google Maps: 1 Oriente 1120, Of. 201, Talca · +56 71 222 6106
//   (categoría "Agencia de seguros"; sin fotos, reseñas ni horario publicados).
// - Comisión para el Mercado Financiero (CMF): SIGNO MAS CORREDORES DE
//   SEGUROS SPA, RUT 76.127.846-0, código de institución 7038, inscrita el
//   19-10-2011, registro vigente. Habilitada para intermediar seguros
//   generales y de vida.
// - Las fotos del lugar son Google Street View (marzo 2024) del edificio
//   y la cuadra de 1 Oriente frente a la Plaza de Armas, rotuladas como
//   tales; lo que no existe publicado se muestra marcado como bosquejo.

export const BIZ = {
  name: 'Signo Mas Corredores de Seguros',
  short: 'Signo Mas',
  razonSocial: 'Signo Mas Corredores de Seguros SpA',
  rut: '76.127.846-0',
  rubro: 'Corredora de seguros',
  address: '1 Oriente 1120, Of. 201',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 222 6106',
  phoneTel: 'tel:+56712226106',
  registro: 'CMF · código 7038 · vigente desde 2011',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Signo Mas Corredores de Seguros, 1 Oriente 1120, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Signo Mas Corredores de Seguros, 1 Oriente 1120, Talca',
)}&output=embed`

export const IMG = '/demos/signo-mas-corredores-de-seguros'

// Datos confirmados en Google Maps (ficha "El Fogón de Río Claro") y SERNATUR
// (hostería registrada, Los Maitenes parcela 15c, Río Claro).
export const BIZ = {
  name: 'El Fogón de Río Claro',
  short: 'El Fogón',
  rubro: 'Hospedaje · Restaurant · Cafetería',
  address: 'Los Maitenes, parcela 15c',
  sector: 'Sector Las Tablas',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9448 2297',
  phoneTel: '+56994482297',
  whatsapp: '56994482297',
  rating: '4,8',
  reviewsCount: 155,
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}, quiero consultar por disponibilidad de cabañas y hospedaje.`,
)}`
export const WA_LINK_TINAJA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}, quiero reservar la tinaja caliente y el sauna.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('El Fogón de Río Claro, Los Maitenes, Río Claro')
export const MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('El Fogón de Río Claro, Río Claro, Maule') +
  '&output=embed'

export const IMG = '/demos/el-fogon-de-rio-claro'

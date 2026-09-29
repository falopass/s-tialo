// Datos confirmados en Google Maps (fichas "Hostería Miramar" y
// "Restaurante Miramar", Llico) — teléfono, dirección y rating coinciden.
export const BIZ = {
  name: 'Hostería Miramar',
  short: 'Miramar',
  rubro: 'Hostería · Cabañas · Restaurant de mar',
  address: 'Av. Ignacio Carrera Pinto, Llico',
  city: 'Vichuquén',
  region: 'Región del Maule',
  coords: '34°45′S · 72°05′O',
  phoneDisplay: '+56 9 9073 3403',
  phoneTel: '+56990733403',
  whatsapp: '56990733403',
  rating: '4,3',
  reviewsCount: 583,
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}, quiero consultar por la hostería y el restaurant.`,
)}`
export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}, quiero reservar una mesa en el restaurant.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Hostería Miramar, Llico, Vichuquén')
export const MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Hostería Miramar, Llico, Vichuquén') +
  '&output=embed'

export const IMG = '/demos/restaurante-miramar'

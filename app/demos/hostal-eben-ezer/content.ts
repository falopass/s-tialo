// Datos confirmados en Google Maps (ficha "hostal eben - ezer", restaurante)
// y SERNATUR (Gral. Barboza Nº140, Empedrado).
export const BIZ = {
  name: 'Hostal Eben-Ezer',
  short: 'Eben-Ezer',
  rubro: 'Hostal · Comida casera',
  address: 'Gral. Barboza 140',
  city: 'Empedrado',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7575 1032',
  phoneTel: '+56975751032',
  whatsapp: '56975751032',
  rating: '4,3',
  reviewsCount: 55,
  hours: 'Todos los días · 10:00 a 21:00',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}, quiero consultar por el almuerzo y el hostal.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Hostal Eben-Ezer, Gral. Barboza 140, Empedrado')
export const MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Hostal Eben-Ezer, Empedrado, Maule') +
  '&output=embed'

export const IMG = '/demos/hostal-eben-ezer'

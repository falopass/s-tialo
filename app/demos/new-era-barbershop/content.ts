export const BIZ = {
  name: 'New Era Barbershop',
  short: 'New Era',
  rubro: 'Barbería',
  city: 'Talca, Región del Maule',
  address: 'Catorce Ote. 901, 3462396 Talca, Maule, Chile',
  phoneDisplay: '+56 9 3692 1987',
  whatsapp: '56936921987',
  rating: '4.4',
  reviews: '150',
  maps: 'https://www.google.com/maps/place/New+Era+Barbershop/@-35.4301718,-71.6456283,18z',
} as const

export const HOURS = [
  ['Domingo', '9:00–20:00'],
  ['Lunes', '9:00–20:00'],
  ['Martes', '9:00–20:00'],
  ['Miércoles', '9:00–20:00'],
  ['Jueves', '9:00–20:00'],
  ['Viernes', '9:00–20:00'],
  ['Sábado', '9:00–20:00'],
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent('Hola New Era Barbershop, quiero consultar por una hora')}`

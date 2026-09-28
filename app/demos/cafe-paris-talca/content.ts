export const BIZ = {
  name: 'Café París',
  short: 'Café París',
  rubro: 'Cafetería · Salón de té',
  address: '2 Poniente 966',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8733 7494',
  phoneTel: '+56987337494',
  whatsapp: '56987337494',
  rating: 4.5,
  reviews: 43,
  hours: 'Lun 10:00–21:00 · Mar a Sáb 8:00–21:00 · Dom cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Vi el demo que me prepararon — les mando fotos en mejor calidad 🟡',
)}`
export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.name}! Quiero reservar una mesa 🟡`,
)}`
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Par%C3%ADs+Talca'
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Café París Talca, 2 Poniente 966, Talca',
)}&output=embed`

export const IMG = '/demos/cafe-paris-talca'

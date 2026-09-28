/**
 * Datos confirmados en la ficha pública de Google Maps. No se encontró una
 * cuenta oficial de Instagram o Facebook atribuible a este local.
 */
export const BIZ = {
  name: 'Lubricentro y repuestos San Martín',
  shortName: 'San Martín',
  address: 'Teniente Ponce 1320',
  city: 'Molina',
  region: 'Región del Maule',
  whatsapp: '56985227854',
  hours: [
    { days: 'Lunes a viernes', time: '9:00–19:00' },
    { days: 'Sábado', time: '9:00–13:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi su página y quisiera consultar por cambio de aceite o repuestos.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Lubricentro+y+repuestos+San+Mart%C3%ADn/@-35.1196064,-71.282941,17z/data=!3m1!4b1!4m6!3m5!1s0x966454a63ff52fd3:0x7a3781506be8c1f3!8m2!3d-35.1196064!4d-71.282941!16s%2Fg%2F1pp2wysht'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}&output=embed`

export const SOURCES = {
  googleMaps: MAPS_URL,
  social: 'Búsquedas por nombre y ubicación en Instagram y Facebook; no se encontró una cuenta verificable.',
} as const

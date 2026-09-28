/**
 * app/demos/vivero-y-jardin-los-gomeros/content.ts
 *
 * Datos REALES verificados en Google Maps y Facebook (jardinlosgomeros):
 * nombre, dirección, teléfono, horario, rating y reseñas.
 */

export const BIZ = {
  name: 'Vivero y Jardín Los Gomeros',
  short: 'Los Gomeros',
  address: 'Buen Paz Kilómetro 13, Molina',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8750 8338',
  phoneTel: '+56987508338',
  whatsapp: '56987508338',
  facebook: 'jardinlosgomeros',
  rating: 4.6,
  ratingLabel: '4,6',
  reviews: 49,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Los Gomeros, quiero consultar por plantas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero y Jardín Los Gomeros, Buen Paz Kilómetro 13, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vivero y Jardín Los Gomeros, Buen Paz Kilómetro 13, Molina, Chile',
)}&output=embed`

export const HOURS = [
  { d: 'Lunes', h: '9:00 - 19:00' },
  { d: 'Martes', h: '9:00 - 17:00' },
  { d: 'Miércoles a sábado', h: '9:00 - 19:00' },
  { d: 'Domingo', h: '9:00 - 17:00' },
] as const

export const REVIEWS = [
  {
    name: 'Mercedes Cornejo',
    txt: 'Mucha variedad de plantas y muy hermosas.',
    when: 'Hace 5 meses',
  },
  {
    name: 'Pola Pardo Burgos',
    txt: 'Excelente atención y plantas muy lindas. 100% recomendable.',
    when: 'Hace 5 meses',
  },
  {
    name: 'Julio Torres',
    txt: 'Tiene mucha variedad de plantas y arbolitos, precios súper accesibles y son simpáticos al atender.',
    when: 'Hace un año',
  },
  {
    name: 'Lili Valenzuela',
    txt: 'Muy lindo lugar, atendido por sus dueños. Encuentras de toda variedad de plantas y es económico.',
    when: 'Hace 6 años',
  },
] as const

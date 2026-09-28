export const BIZ = {
  name: 'Veterinaria Francisco Loyola',
  short: 'Francisco Loyola',
  rubro: 'Veterinario',
  address: 'Libertad 1515',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9414 8110',
  phoneTel: '+56994148110',
  whatsapp: '56994148110',
  rating: '4,9',
  reviews: 81,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una hora en Veterinaria Francisco Loyola (Libertad 1515, Molina).',
)}`

export const WA_URGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia con mi mascota. ¿Están atendiendo ahora?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Veterinaria Francisco Loyola, Libertad 1515, Molina',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Veterinaria Francisco Loyola, Libertad 1515, Molina',
)}&output=embed`

export const IMG = '/demos/veterinaria-francisco-loyola'

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '11:30–13:00 y 15:30–19:00' },
  { dias: 'Sábado', horas: '15:30–18:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
]

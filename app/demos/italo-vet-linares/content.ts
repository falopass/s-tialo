/**
 * app/demos/italo-vet-linares/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * nombre, dirección, WhatsApp, cantidad de reseñas y seguidores. Todo lo
 * demás es contenido de ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Italo Vet Linares',
  address: 'Corporación 840, 3580000 Linares, Maule',
  street: 'Corporación 840',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4231 3549',
  whatsapp: '56942313549',
  reviews: 228,
  facebook: 'https://www.facebook.com/clinicavetnoe/',
  followers: '3.001',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Italo Vet Linares y quiero pedir una hora',
)}`

const QUERY = 'Italo Vet Linares, Corporación 840, Linares, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(QUERY)}&output=embed`

const IMG = '/demos/italo-vet-linares'

export const STEPS = [
  {
    n: '01',
    kicker: 'Llegas',
    title: 'Escribes y te esperamos en Corporación 840',
    desc: 'Nos cuentas por WhatsApp qué le pasa a tu mascota y te damos hora. Local a nivel de calle, fácil de encontrar y sin escaleras para el canasto.',
    img: `${IMG}/detalle1.webp`,
    alt: 'Fachada de una clínica veterinaria de un piso con vitrina a la calle',
  },
  {
    n: '02',
    kicker: 'Recepción',
    title: 'Te recibimos sin vueltas',
    desc: 'Registramos a tu mascota, revisamos su historial y pasas a consulta. Si viene en canasto, puede esperar tranquila hasta su turno.',
    img: `${IMG}/detalle3.webp`,
    alt: 'Mesón de recepción de madera con un canasto de transporte para mascotas',
  },
  {
    n: '03',
    kicker: 'Consulta',
    title: 'Revisión completa y explicación clara',
    desc: 'Examen físico, diagnóstico y tratamiento explicado en simple: qué tiene, qué hacer en casa y cuándo volver.',
    img: `${IMG}/detalle2.webp`,
    alt: 'Estetoscopio, otoscopio, termómetro e instrumental sobre mesa de acero',
  },
  {
    n: '04',
    kicker: 'Seguimiento',
    title: 'Vuelve a casa y seguimos en contacto',
    desc: 'Controles agendados y dudas por WhatsApp después de la consulta. El resultado que buscamos: tu mascota de vuelta a su ritmo.',
    img: `${IMG}/ambiente.webp`,
    alt: 'Perro descansando sobre una manta en una sala de recuperación luminosa',
  },
]

export const SERVICES = [
  {
    name: 'Consulta general',
    desc: 'Evaluación completa, diagnóstico y plan de tratamiento para perros y gatos.',
    img: `${IMG}/detalle2.webp`,
    alt: 'Instrumental de consulta veterinaria sobre mesa de acero',
  },
  {
    name: 'Vacunas y desparasitación',
    desc: 'Calendario al día según edad y estilo de vida, con recordatorio por WhatsApp.',
    img: `${IMG}/hero.webp`,
    alt: 'Box de atención veterinaria con mesa de acero y balanza',
  },
  {
    name: 'Controles y recuperación',
    desc: 'Seguimiento después de un tratamiento o cirugía, hasta el alta.',
    img: `${IMG}/ambiente.webp`,
    alt: 'Perro en reposo en sala de recuperación',
  },
]

export const PRICES = [
  'Consulta general',
  'Control post tratamiento',
  'Vacuna (según tipo)',
  'Desparasitación (según peso)',
]

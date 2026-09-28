/**
 * app/demos/nogal-consulta-veterinaria/content.ts
 *
 * Datos REALES verificados (2026-09-28):
 * - Ficha de Google Maps «Nogal consulta veterinaria»: Veterinario,
 *   Maipú 1702, Molina (Maule) · +56 9 9883 7389 · 4,5 de 5 en
 *   57 reseñas. La ficha no está reclamada: sin horario ni sitio web.
 * - La foto del local es la imagen real que muestra la ficha
 *   (registro de Street View de la cuadra de Maipú 1702).
 * - Las citas son reseñas reales de la ficha (nombre de pila).
 *   La ficha no publica fotos del interior: los espacios sin foto
 *   real van marcados como «bosquejo».
 */

export const BIZ = {
  name: 'Nogal consulta veterinaria',
  short: 'Nogal veterinaria',
  rubro: 'Veterinario',
  address: 'Maipú 1702',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9883 7389',
  whatsapp: '56998837389',
  rating: 4.5,
  ratingLabel: '4,5',
  reviews: 57,
} as const

/** Prestaciones vistas en la ficha y en las reseñas reales. */
export const SERVICIOS = [
  {
    n: '01',
    name: 'Consulta general',
    desc: 'Revisión completa de perros y gatos: la causa de la molestia se busca con calma, no a la rápida.',
  },
  {
    n: '02',
    name: 'Vacunación',
    desc: 'Vacunas con mano suave — los clientes repiten que sus mascotas «nunca se quejan cuando los vacuna».',
  },
  {
    n: '03',
    name: 'Esterilización',
    desc: 'Procedimientos programados con control posterior. También en especies menores, como cuyes.',
  },
  {
    n: '04',
    name: 'Pacientes pequeños y de compañía',
    desc: 'Atención a mascotas de casa sin importar el tamaño: desde una gatita recién notada rara hasta el cuy de la familia.',
  },
] as const

export const PASOS = [
  {
    n: 'Paso 1',
    title: 'Escriba por WhatsApp',
    desc: 'Cuente qué le pasa a su mascota y coordine la hora directamente al +56 9 9883 7389.',
  },
  {
    n: 'Paso 2',
    title: 'Revisión sin prisa',
    desc: 'En la consulta de Maipú 1702 se toma el tiempo de mirar, preguntar y pesar lo que corresponde.',
  },
  {
    n: 'Paso 3',
    title: 'Tratamiento explicado',
    desc: 'Qué tiene, qué se le hará y cuánto cuesta — claro antes de proceder.',
  },
  {
    n: 'Paso 4',
    title: 'Control y seguimiento',
    desc: 'Respuestas rápidas después de la atención; las reseñas destacan que responde a tiempo.',
  },
] as const

/** Reseñas reales de la ficha de Google (4,5 · 57 opiniones). */
export const RESENAS = [
  {
    text: 'El médico veterinario es un tipo con vocación; entregado a su trabajo, se ve que ama a los animales, y que es feliz haciendo su trabajo. Mi experiencia fue con la esterilización de unos cuyes, y solo puedo agradecerle.',
    author: 'Luis Pérez Arriaza',
    cuando: 'hace 4 años',
  },
  {
    text: 'Excelente profesional con gran vocación, vacuna muy suave, mis peluditos nunca se quejan cuando los vacuna.',
    author: 'la maison',
    cuando: 'hace un año',
  },
  {
    text: 'Excelente atención y gran profesional, respuestas rápidas y eficaces. Muy satisfecho y muy recomendado.',
    author: 'Juan Jara',
    cuando: 'hace 5 años',
  },
  {
    text: 'Nuestra gatita no se movía y estaba rara, la llevamos al veterinario — NOGAL VETERINARIA Y CONSULTAS — la revisó y nos atendió de inmediato.',
    author: 'Maria paz mancilla',
    cuando: 'hace un año',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una hora en Nogal consulta veterinaria para mi mascota',
)}`

const MAPS_QUERY = 'Nogal consulta veterinaria, Maipú 1702, Molina, Maule, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent('Maipú 1702, 3380701 Molina, Maule, Chile')}&output=embed`

export const IMG = '/demos/nogal-consulta-veterinaria'

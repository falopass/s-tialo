/**
 * app/demos/mao-dental-villarrica/content.ts
 *
 * Datos del demo. REALES (ficha de Google Maps, 16-11-2026): nombre
 * MAO DENTAL, lema "Odontología familiar" (logo), dirección Pedro
 * Montt 774, Villarrica, horario lun a vie 10:00 a 19:00 (sábado y
 * domingo cerrado), WhatsApp +56 9 4860 3194, rating 5,0 con 9
 * opiniones y las citas de reseñas, textuales y con su autor. Las
 * fotos son de la propia ficha del negocio. NO hay lista de
 * tratamientos, precios, profesionales, convenios ni redes: el sitio
 * no muestra ninguno. Los textos corridos parafrasean lo que dicen
 * las reseñas (niños y adultos, ambiente limpio y tranquilo, trato
 * cercano y profesional).
 */

export const BIZ = {
  name: 'MAO Dental',
  short: 'MAO Dental',
  lema: 'Odontología familiar',
  rubro: 'Clínica dental',
  address: 'Pedro Montt 774',
  city: 'Villarrica',
  region: 'La Araucanía',
  phoneDisplay: '+56 9 4860 3194',
  whatsapp: '56948603194',
  rating: '5,0',
  ratingValue: 5,
  reviews: 9,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola MAO Dental, quiero agendar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'MAO Dental, Pedro Montt 774, Villarrica',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'MAO Dental, Pedro Montt 774, Villarrica',
)}&output=embed`

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '10:00 a 19:00' },
  { dias: 'Sábado y domingo', horas: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    text: 'Muy buena experiencia, excelentes profesionales, trato cercano y amable. Sin duda seguiré atendiéndome aquí, ademas el lugar es lindo y tranquilo.',
    author: 'María Francisca Pradenas Rogazy',
  },
  {
    text: 'Excelente la atención! Muy buena la experiencia y además la clínica es hermosa, se nota que se preocupan de cada detalle.',
    author: 'Camila Garay Toledo',
  },
  {
    text: 'Excelente atención, trato profesional y amable. Preocupadas en todo el tratamiento de inicio a término. Sin duda lo mejor de la zona',
    author: 'Mauricio Gomez',
  },
] as const

/** Respalda el "niños y adultos" del hero y de la clínica. */
export const REVIEW_NINOS = {
  text: 'Una excelente atencion!!! Todas muy amables y profesionales!!! Excelente atencion tanto niños y adulto!!! Lo mejor un muy buen ambiente y limpieza!!!',
  author: 'Sole Carrasco',
} as const

export const IMG = '/demos/mao-dental-villarrica'

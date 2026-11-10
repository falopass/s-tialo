/**
 * app/demos/peluqueria-valentino-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, verificada el
 * 10-11-2026): nombre «Peluqueria Valentino», dirección Av. Alemania 400,
 * Valdivia, horario (lun-vie 10:00 a 18:30, sáb 10:00 a 13:30, domingo
 * cerrado), WhatsApp +56 9 7775 6822, nota 4,9 con 139 opiniones y las
 * citas textuales de clientes. Las fotos son de la ficha de Google Maps
 * del salón. Que atienden a hombres y mujeres sale de las reseñas de
 * ambos. Redes sociales: no confirmadas, no se muestran. Los textos de
 * apoyo (titulares y descripciones) son de muestra.
 */

export const BIZ = {
  name: 'Peluquería Valentino',
  short: 'Valentino',
  rubro: 'Peluquería',
  address: 'Av. Alemania 400',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 7775 6822',
  whatsapp: '56977756822',
  rating: '4,9',
  ratingValue: 4.9,
  reviews: 139,
} as const

export const WA_LINK =
  'https://wa.me/56977756822?text=Hola%20Peluquer%C3%ADa%20Valentino%2C%20quiero%20agendar%20una%20hora'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Peluqueria Valentino, Av. Alemania 400, Valdivia, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Peluqueria Valentino, Av. Alemania 400, Valdivia, Chile',
)}&output=embed`

export const HORARIO = [
  { days: 'Lunes a viernes', time: '10:00 a 18:30' },
  { days: 'Sábado', time: '10:00 a 13:30' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

/** Citas textuales de la ficha de Google, con nombre e inicial. */
export const RESENAS = {
  nataly: {
    texto:
      'Excelente servicio, muy profesionales y amables. Además de que el resultado cumplió todas mis expectativas, el ambiente es muy agradable y además utilizan muy buenos productos. 100% recomendable, quedé feliz con mi pelito ❤️',
    nombre: 'Nataly C.',
  },
  vicente: {
    texto:
      'Muy buen servicio, hace años que me atiendo y muy buena atención con los clientes.',
    nombre: 'Vicente R.',
  },
  joaquin: {
    texto:
      'Excelente servicio, muy buena la atención, ya llevo 1 año cortándome y siempre me dan un buen resultado.',
    nombre: 'Joaquín M.',
  },
  pablo: {
    texto: 'Buena experiencia, realizan trabajo minucioso, grato ambiente.',
    nombre: 'Pablo U.',
  },
} as const

export const IMG = '/demos/peluqueria-valentino-valdivia'

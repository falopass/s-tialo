/**
 * app/demos/clinica-advance-dental/content.ts
 *
 * Datos del mockup. REALES (verificados el 9-11-2026 en la ficha de
 * Google Maps «Clínica Advance Dental», Valdivia, en su Instagram
 * @advance_dental_valdivia y en su Facebook):
 * - Nombre «Clínica Advance Dental» y logo (dos círculos superpuestos,
 *   naranja degradado y azul, con un diente estilizado): su marca.
 * - Dirección Carampangue 455, oficinas 3 y 4, Valdivia: ficha de Maps
 *   y publicaciones del negocio.
 * - Atención de lunes a sábado: publicaciones del negocio. El horario
 *   exacto no está confirmado: no se muestra.
 * - WhatsApp +56 9 6200 5287: su canal de agenda publicado.
 * - 4,9 de promedio con 54 opiniones en Google; las citas de Lindy R.,
 *   Yohany R., Belén F. y Nicole S. son textuales de esa ficha.
 * - «Evaluación inicial sin costo», «Todas las especialidades en un
 *   solo lugar» y «Atención de lunes a sábado»: frases textuales de
 *   sus publicaciones.
 * - Especialidades: ortodoncia con brackets metálicos (limpieza previa
 *   y escáner intraoral, según su publicación), limpieza dental
 *   (diagnóstico, destartraje y profilaxis), blanqueamiento LED,
 *   implantes, prótesis, endodoncia y extracciones (reseñas),
 *   rehabilitación oral y estética dental (sus hashtags).
 * DE MUESTRA: titulares de sección, bajadas y textos de apoyo.
 * SIN PRECIOS: el negocio publica valores, pero no se muestran aquí.
 */

export const BIZ = {
  name: 'Clínica Advance Dental',
  short: 'Advance Dental',
  rubro: 'Clínica dental',
  address: 'Carampangue 455, oficinas 3 y 4',
  city: 'Valdivia',
  phoneDisplay: '+56 9 6200 5287',
  whatsapp: '56962005287',
  rating: '4,9',
  ratingValue: 4.9,
  reviews: 54,
  days: 'De lunes a sábado',
  instagram: 'https://www.instagram.com/advance_dental_valdivia/',
  igHandle: '@advance_dental_valdivia',
  facebook: 'https://www.facebook.com/advancedentalvaldivia/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Advance Dental, quiero agendar mi evaluación',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Advance Dental, Carampangue 455, Valdivia, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Carampangue 455, Valdivia, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-advance-dental'

/** Citas textuales de la ficha de Google. */
export const REVIEWS = {
  lindy: {
    text: 'Los recomiendo totalmente. Terminé mi tratamiento de ortodoncia y el resultado superó mis expectativas. Desde el primer día la atención fue impecable: recepción cordial, puntualidad en los controles y un seguimiento muy profesional. Si buscas ortodoncia en Valdivia este es el lugar.',
    author: 'Lindy R.',
    tag: 'Ortodoncia',
  },
  yohany: {
    text: 'Tratamiento endodoncia y extracción... Excelente trabajo! Un equipo muy completo y comprometido. Familia completa atendidos por sus profesionales.',
    author: 'Yohany R.',
    tag: 'Endodoncia y extracción',
  },
  belen: {
    text: 'Excelente clínica, ya llevo tiempo atendiéndome ahí, más de un año y medio, la atención ha sido grata y se han visto grandes cambios, muy agradecida y recomendada al 100%.',
    author: 'Belén F.',
    tag: 'Hace más de un año',
  },
  nicole: {
    text: 'Soy de las personas que de niña le tuvo pánico al dentista por una mala experiencia, pero con la doctora fue todo distinto desde la primera atención, se tomó el tiempo de explicar cada paso del tratamiento, escuchó mis dudas.',
    author: 'Nicole S.',
    tag: 'Primera atención',
  },
} as const

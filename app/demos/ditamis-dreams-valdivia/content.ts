/**
 * app/demos/ditamis-dreams-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps al 13-11-2026 e
 * Instagram @ditamisdreams):
 * - Nombre «Ditamis Dreams» (en Instagram «Ditamis Dreams Valdivia»).
 * - Recinto para eventos (Maps). Cumpleaños, paseos de curso y tardes
 *   entretenidas con juegos inflables, incluido un inflable acuático
 *   para eventos, en un salón techado con pasto sintético y
 *   decoración de globos (Instagram).
 * - Dirección: Camino a Paillao, Angachilla, Valdivia (Maps).
 * - WhatsApp +56 9 5872 7583 (mismo número en Maps y en la bio de
 *   Instagram). Instagram y Facebook: perfiles del negocio.
 * - Disponibilidad «noviembre, diciembre, enero y febrero» y la
 *   frase «Reserva tu evento con anticipación, pocos cupos»:
 *   publicación de Instagram de nov. 2026.
 * - 4,4 con 61 opiniones en Google; las citas de Catherine Riquelme y
 *   Vanesa Valderrama son textuales de esa ficha. Lo de «anfitriona»
 *   y la combustión a leña salen de la primera cita.
 * SIN DATOS PÚBLICOS: horario, precios, capacidad, número de juegos,
 * duración del arriendo y comida; no se muestran.
 * DE MUESTRA: titulares, bajadas y textos de apoyo.
 */

export const BIZ = {
  name: 'Ditamis Dreams',
  nameSocial: 'Ditamis Dreams Valdivia',
  rubro: 'Recinto para eventos infantiles',
  address: 'Camino a Paillao, Angachilla',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 5872 7583',
  whatsapp: '56958727583',
  instagram: 'https://www.instagram.com/ditamisdreams/',
  igHandle: '@ditamisdreams',
  facebook: 'https://www.facebook.com/ditamis.dreamsvaldivia',
  rating: '4,4',
  ratingValue: 4.4,
  reviews: 61,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Ditamis Dreams, quiero reservar un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ditamis Dreams, Camino a Paillao, Valdivia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ditamis Dreams, Camino a Paillao, Valdivia',
)}&output=embed`

export const IMG = '/demos/ditamis-dreams-valdivia'

/** Meses con cupos, textual de Instagram (nov. 2026). */
export const MESES = ['noviembre', 'diciembre', 'enero', 'febrero'] as const

/** Opiniones textuales de Google Maps. */
export const RESENAS = [
  {
    text: 'Excelente lugar, muy buena anfitriona, apoya en lo que se necesite dentro del lugar. Lugar cálido (combustión a leña), los juegos excelentes.',
    author: 'Catherine Riquelme',
  },
  {
    text: 'Buen local, cómodo, especial para todo tipo de cumpleaños, me encantó. 100 % recomendado.',
    author: 'Vanesa Valderrama',
  },
] as const

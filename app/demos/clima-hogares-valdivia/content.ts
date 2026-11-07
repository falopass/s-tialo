/**
 * app/demos/clima-hogares-valdivia/content.ts
 *
 * Datos del mockup. REALES (verificados el 7-11-2026):
 * - Nombre y rubro: ficha de Google Maps "Clima hogares ingeniería en
 *   climatización" y Facebook "Clima Hogares (mantenciones, instalaciones
 *   y reparaciones)". Su propia descripción: "Mantención, instalación,
 *   reparación, venta de equipos de estufas a pellet y aire
 *   acondicionado."
 * - Dueño: David T. T. (así aparece en su logo circular); él está a
 *   cargo del servicio técnico.
 * - Dirección: Los Traros 1857, Valdivia. Atienden a domicilio en
 *   Valdivia (en sus comentarios declaran no atender otras regiones).
 * - Horario de Maps: lunes a sábado 9:00-20:30, domingo 10:00-17:00.
 * - WhatsApp +56 9 3172 5165. Facebook e Instagram @clima_hogares.
 * - Google: 5,0 con 3 opiniones; las dos citas son textuales de su
 *   ficha (Felipe D. y Javier G.).
 * - Servicios publicados: venta, instalación (con su ducto/caño),
 *   mantención y reparación de estufas a pellet y aire acondicionado
 *   split. Además: reparación de caños de estufas (opinión de Javier G.)
 *   y recomendaciones de uso en cada visita (opinión de Felipe D.).
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, rótulos y la explicación de la
 * mantención (sin precios, marcas ni certificaciones, que el negocio
 * no publica).
 */

export const BIZ = {
  name: 'Clima Hogares',
  rubro: 'Ingeniería en climatización',
  servicios: 'Estufas a pellet y aire acondicionado',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  address: 'Los Traros 1857',
  phoneDisplay: '+56 9 3172 5165',
  phoneTel: '+56931725165',
  whatsapp: '56931725165',
  dueno: 'David',
  instagram: 'https://www.instagram.com/clima_hogares/',
  instagramUser: '@clima_hogares',
  facebook: 'https://www.facebook.com/share/1G9VPjDXgm/',
  rating: '5,0',
  ratingValue: 5,
  reviews: 3,
  horario: [
    { dias: 'Lunes a sábado', horas: '9:00 a 20:30' },
    { dias: 'Domingo', horas: '10:00 a 17:00' },
  ],
} as const

export const WA_LINK =
  'https://wa.me/56931725165?text=Hola%20Clima%20Hogares%2C%20quiero%20cotizar%20una%20mantenci%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clima Hogares, Los Traros 1857, Valdivia, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Traros 1857, Valdivia',
)}&output=embed`

export const IMG = '/demos/clima-hogares-valdivia'

/** Opiniones textuales de su ficha de Google (5,0 · 3 opiniones). */
export const REVIEWS = [
  {
    text: 'Técnico muy amable y cordial. Se nota amplio conocimiento en la mantención de estufas a pellets, ya que nos explicó claramente en qué consistía el proceso de mantención y nos proporcionó recomendaciones útiles sobre el uso de la estufa. Definitivamente, lo recomiendo.',
    author: 'Felipe D.',
  },
  {
    text: 'Muy buen servicio 100% recomendable. Mantención realizada con atención a los detalles, limpio y ordenado. Y además presta servicio de reparación de caños',
    author: 'Javier G.',
  },
] as const

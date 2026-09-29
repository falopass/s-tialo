/**
 * app/demos/thermocold/content.ts
 *
 * Datos REALES verificados el 2026-09-29 en la ficha de Google Maps
 * "Thermocold" (Av. Dos Sur 1791, Talca) y en sus fotos de fachada:
 * - Categoría en Maps: proveedor de sistemas de aire acondicionado.
 * - Su letrero real (foto de la fachada): "THERMOCOLD / SERVICIO TÉCNICO /
 *   AIRE ACONDICIONADO · REFRIGERACIÓN · LAVADORAS", fono 238540, número 1791.
 * - Marcas que anuncian en los pilares del local (foto real): Trotter, Winter,
 *   General Electric, Kenmore, Thomas, Sindelen, Mademsa, Somela, Phillips.
 * - Fono de la ficha: +56 71 223 8540 (red fija; no publican WhatsApp).
 * - Reseñas citadas: textos reales de la ficha (nombre + antigüedad).
 * - Fotos reales: fachada con letrero, collage de repuestos (ficha de Maps)
 *   y vista de calle. bosquejo-*.webp son imágenes de referencia generadas:
 *   van marcadas como bosquejo en la página.
 * Todo lo demás (formulación de servicios, pasos) es contenido de muestra.
 */

export const BIZ = {
  name: 'Thermocold',
  short: 'Thermocold',
  rubro: 'Servicio técnico y repuestos',
  tagline: 'Aire acondicionado · refrigeración · lavadoras',
  address: 'Av. Dos Sur 1791',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 223 8540',
  phoneTel: '+56712238540',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Thermocold, Av. Dos Sur 1791, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Thermocold, Av. Dos Sur 1791, Talca',
)}&output=embed`

export const IMG = '/demos/thermocold'

/** Las marcas que anuncian en los pilares del local (foto real de la fachada). */
export const MARCAS = [
  'Trotter',
  'Winter',
  'General Electric',
  'Kenmore',
  'Thomas',
  'Sindelen',
  'Mademsa',
  'Somela',
  'Phillips',
] as const

/** Lo que declara su propio letrero, como órdenes de trabajo. */
export const SERVICIOS = [
  {
    ot: 'OT-01',
    nombre: 'Aire acondicionado',
    detalle: 'Servicio técnico para equipos split y sistemas de climatización del hogar y el comercio.',
    img: 'bosquejo-servicio',
    bosquejo: true,
    alt: 'Bosquejo de referencia: unidad split abierta sobre el banco de trabajo con manómetros y multímetro',
  },
  {
    ot: 'OT-02',
    nombre: 'Refrigeración',
    detalle: 'Diagnóstico y reparación de refrigeradores y equipos de frío domésticos y comerciales.',
    img: 'bosquejo-taller',
    bosquejo: true,
    alt: 'Bosquejo de referencia: banco de trabajo del taller con una lavadora abierta y estantes de repuestos',
  },
  {
    ot: 'OT-03',
    nombre: 'Lavadoras',
    detalle: 'Reparación de lavadoras de las marcas que atienden hace años, con repuestos en el mismo local.',
    img: 'repuestos',
    bosquejo: false,
    alt: 'Repuestos reales del local: motores, bombas, mangueras, controles y refrigerante',
  },
] as const

/** Tipos de piezas visibles en su collage de repuestos (foto real). */
export const PARTES = [
  'motores y bombas',
  'mangueras y ductos',
  'controles y tableros',
  'refrigerante y gas',
  'presostatos y válvulas',
  'conexiones y fittings',
] as const

/** Reseñas reales de la ficha de Google (texto + nombre + antigüedad). */
export const RESENAS = [
  {
    texto:
      'Buen lugar, se encuentran repuestos que uno ni se imagina que podrían encontrar, tienen buenos precios y buena atención de los chiquillos que atienden.',
    autor: 'Esteban Chilenito_xd',
    detalle: 'hace 2 meses',
    estrellas: 5,
  },
  {
    texto: 'Lugar accesible, céntrico, buen trato. Atendido por sus propios dueños.',
    autor: 'Karolina Gonzalez',
    detalle: 'hace 7 años',
    estrellas: 4,
  },
] as const

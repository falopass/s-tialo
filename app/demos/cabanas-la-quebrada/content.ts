/**
 * app/demos/cabanas-la-quebrada/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono/WhatsApp, categoría ("Cottage"), rating y las
 * reseñas citadas abajo, con autor y estrellas tal como aparecen en la
 * ficha. El detalle "empresas alojan equipos hace años" sale de la
 * respuesta pública del dueño a una reseña. Las fotos de
 * public/demos/cabanas-la-quebrada/ son las de la propia ficha.
 */

export const BIZ = {
  name: 'Cabañas La Quebrada',
  categoria: 'Cabañas (cottage)',
  address: 'Cuatro Pte. 1197, Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6832 1729',
  phoneTel: '+56968321729',
  whatsapp: '56968321729',
  rating: '4,0',
  reviews: 17,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas La Quebrada y quiero consultar disponibilidad',
)}`

export const WA_LINK_EQUIPOS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, somos una empresa y buscamos alojar a nuestro equipo en Cabañas La Quebrada',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas La Quebrada, Cuatro Poniente 1197, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas La Quebrada, Cuatro Poniente 1197, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-la-quebrada'

/** Reseñas reales de la ficha de Google, en su idioma original. */
export const RESENAS = [
  {
    texto:
      'Excelente lugar tranquilo, dueños muy amables. Cabañas súper bien. Algún día volveremos nuevamente a la excelente ubicación.',
    autor: 'Antonio Díaz',
    estrellas: 5,
    fecha: 'hace 2 años',
  },
  {
    texto: 'La atención muy buena…',
    autor: 'Ana Moreno',
    estrellas: 3,
    fecha: 'hace 3 años',
  },
] as const

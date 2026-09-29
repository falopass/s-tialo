/**
 * app/demos/cabanas-del-pinar/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps y Facebook):
 * nombre, dirección (Abate Molina 16 C, Curepto), teléfono/WhatsApp
 * (+56 9 9991 8875), rating 4,8 con 16 reseñas, página de Facebook
 * (delpinarcurepto, 892 seguidores) y las reseñas citadas con nombre.
 * Las cinco cabañas salen del directorio de la Municipalidad de Curepto.
 * Las descripciones de cada registro son de muestra.
 */

export const BIZ = {
  name: 'Cabañas del Pinar',
  short: 'Del Pinar',
  rubro: 'Cabañas y hospedaje',
  address: 'Abate Molina 16 C',
  city: 'Curepto',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9991 8875',
  phoneTel: '+56999918875',
  whatsapp: '56999918875',
  rating: '4,8',
  reviews: 16,
  fbHandle: 'delpinarcurepto',
  fbFollowers: 892,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas del Pinar en Curepto y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Cabañas del Pinar, Curepto',
)}`

export const FB_URL = `https://www.facebook.com/${BIZ.fbHandle}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas del Pinar, Abate Molina 16 C, Curepto, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas del Pinar, Abate Molina 16 C, Curepto, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-del-pinar'

export const RESENAS = [
  {
    nombre: 'Rocio Droguett',
    stars: 5,
    fecha: 'hace 3 años',
    texto: 'Lindas, muy limpias, equipadas completas y excelente atención.',
  },
  {
    nombre: 'Gabriel Oyarzun',
    stars: 5,
    fecha: 'hace 3 años',
    texto:
      'Cabañas limpias, acogedoras, en Curepto buena opción para quedarse, recomendable.',
  },
  {
    nombre: 'Viviana Garcia Varas',
    stars: 5,
    fecha: 'hace 5 años',
    texto: 'Limpio, tranquilo, ordenado, 100% recomendable.',
  },
  {
    nombre: 'Verónica López Ramírez',
    stars: 5,
    fecha: 'hace 5 años',
    texto: 'Muy buen lugar. Tranquilo y acogedor.',
  },
] as const

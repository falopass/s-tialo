/**
 * app/demos/yp-construcciones/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre («Y.P Construcciones»), dirección (Pje. 22 Nte. C 3077,
 *   Talca), teléfono/WhatsApp (+56 9 4876 1922) y la ficha usa un link
 *   de WhatsApp como sitio web: ficha pública de Google Maps.
 * - Rubro en la ficha: «Building firm» (constructor de casas
 *   personalizadas); las fotos que subió el negocio muestran
 *   instalaciones de gas, calefonts, baños, cocinas y pisos flotantes.
 * - Reseñas: 5.0 estrellas con 11 reseñas en Google; los textos de la
 *   sección «Lo que dicen» son originales en español de la ficha.
 * - Post del dueño en la ficha: «Cotización de herramientas a pedido»
 *   (mayo 2026) — se refleja como servicio de cotización a pedido.
 * - La ficha no declara horario: no se muestra bloque de horarios.
 * - Fotos de public/demos/yp-construcciones: todas reales, de la ficha
 *   de Google Maps (balones de gas, calefonts, baño, lavaplatos,
 *   tuberías). La ficha no tiene logo: identidad = nombre + fotos.
 */

export const BIZ = {
  name: 'Y.P Construcciones',
  legal: 'Y P Construcciones SpA',
  short: 'Y.P',
  rubro: 'Construcción · Gasfitería',
  address: 'Pje. 22 Nte. C 3077',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4876 1922',
  phoneTel: '+56948761922',
  whatsapp: '56948761922',
  rating: 5.0,
  reviews: 11,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Y.P Construcciones y quiero cotizar un trabajo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Y.P Construcciones, Pje. 22 Nte. C 3077, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pje. 22 Nte. C 3077, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/yp-construcciones'

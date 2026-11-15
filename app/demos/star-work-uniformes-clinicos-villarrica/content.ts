/**
 * app/demos/star-work-uniformes-clinicos-villarrica/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, Instagram
 * @starworkuniforms y fotos de Maps, revisados 14-11-2026): nombre,
 * rubro (tienda de uniformes), dirección (General Urrutia 788,
 * Galería El Arrayán, Villarrica), horario, WhatsApp +56 9 6142 5939,
 * Instagram, la nota de 5,0 con 29 opiniones en Google y las dos
 * reseñas textuales citadas. La variedad de productos (tops,
 * pantalones, delantales y chaquetas; varias tallas, diseños y
 * colores; envíos a todo Chile) sale de su Instagram. No hay
 * precios, marcas, tallas exactas, correo ni sitio web públicos:
 * nada de eso se muestra. Textos descriptivos (párrafos, titulares
 * y rótulos) son de muestra.
 */

export const BIZ = {
  name: 'Star Work Uniformes Clínicos',
  short: 'Star Work',
  rubro: 'Uniformes clínicos',
  address: 'General Urrutia 788, Galería El Arrayán',
  city: 'Villarrica',
  region: 'La Araucanía',
  phoneDisplay: '+56 9 6142 5939',
  whatsapp: '56961425939',
  instagram: 'starworkuniforms',
  rating: '5,0',
  ratingValue: 5,
  reviews: 29,
  hours: [
    { d: 'Lunes a viernes', h: '10:00 a 19:00' },
    { d: 'Sábado', h: '10:00 a 14:00' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Star Work, quiero consultar por un uniforme',
)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/starworkuniforms/'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Star Work Uniformes, General Urrutia 788, Villarrica',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Star Work Uniformes, General Urrutia 788, Villarrica',
)}&output=embed`

export const IMG = '/demos/star-work-uniformes-clinicos-villarrica'

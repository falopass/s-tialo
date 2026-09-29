/**
 * app/demos/pasteleria-mi-cabana/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada
 * 2026-09-29): nombre "Pastelería mi cabaña", categoría Pastelería,
 * dirección 5 Poniente 28 y 31 Sur (Talca), teléfono, nota 4.6 con 172
 * reseñas y entrada accesible para sillas de ruedas. El horario
 * (lun–sáb 8:00–14:00 y 17:00–21:00, dom 10:00–14:00 y 17:00–21:00) y
 * las reseñas citadas vienen de la ficha espejada en chilopina.com.
 * Facebook confirmado desde la misma ficha: facebook.com/micabana.talca.
 * Las fotos y el logo son de la galería de Maps de la pastelería.
 * No se publican precios: solo los productos que los clientes nombran
 * en las reseñas (marraqueta, hallullas, pan francés, tres leches,
 * trasnochada, pie de limón, panqueque maracuyá, queques, roscas).
 */

export const BIZ = {
  name: 'Pastelería Mi Cabaña',
  rubro: 'Pastelería y panadería',
  address: '5 Poniente 28, esquina 31 Sur',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9947 1362',
  phoneTel: '+56999471362',
  whatsapp: '56999471362',
  rating: 4.6,
  reviews: '172',
  facebook: 'https://www.facebook.com/micabana.talca',
  mapPlace: 'Pastelería mi cabaña, 5 Poniente 28, Talca, Chile',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Mi Cabaña, vi su página y quiero encargar una torta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BIZ.mapPlace,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '5 Poniente 28, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/pasteleria-mi-cabana'

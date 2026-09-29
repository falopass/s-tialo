/**
 * app/demos/ferreteria-tres-esquinas/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre
 * "Ferretería Tres Esquinas", categoría ferretería, dirección
 * (Tres Esquinas, frente a la plazoleta, Molina), teléfono/WhatsApp
 * (+56 9 4994 8692), horario (Lun–Sáb 8:30–20:00, Dom 9:00–14:00),
 * rating 4.9 con 11 reseñas y los textos de esas reseñas, incluida
 * la respuesta del dueño "Usted pida lo que necesita y lo traemos".
 * Los rubros salen de su propio letrero (foto real de la fachada):
 * materiales de construcción, fijaciones, terminaciones y pinturas,
 * perfilería metálica y tabiquería, material eléctrico, material
 * hidráulico para riego y herramientas. Facebook público:
 * /ferreteriatresesquinas (impreso en el letrero). Lo demás es
 * contenido de muestra.
 */

export const BIZ = {
  name: 'Ferretería Tres Esquinas',
  short: 'Tres Esquinas',
  rubro: 'Ferretería y materiales',
  address: 'Tres Esquinas, frente a la plazoleta',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4994 8692',
  phoneTel: '+56949948692',
  whatsapp: '56949948692',
  rating: '4,9',
  reviews: 11,
  facebook: 'https://www.facebook.com/ferreteriatresesquinas',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Tres Esquinas, quiero consultar por un producto',
)}`

export const waRubro = (rubro: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Tres Esquinas, busco ${rubro}. ¿Lo tienen?`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería Tres Esquinas, Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '-35.1686371,-71.2141091',
)}&output=embed`

export const IMG = '/demos/ferreteria-tres-esquinas'

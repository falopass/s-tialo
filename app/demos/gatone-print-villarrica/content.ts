/**
 * app/demos/gatone-print-villarrica/content.ts
 *
 * Datos del mockup. REALES (verificados el 14-11-2026):
 * - Nombre: «Gatone Print», de su ficha de Google Maps y de su letrero
 *   pintado a mano (círculo de madera con lettering de colores).
 * - Oficio: taller de desabolladura y pintura (letrero y respuesta
 *   automática de WhatsApp). Maps lo clasifica como taller mecánico y
 *   las reseñas hablan también de reparación mecánica, cambio de aceite
 *   y orientación en repuestos.
 * - Cómo cotizan (su respuesta automática de WhatsApp, textual): "Si
 *   deseas cotizar tu servicio de desabolladura y pintura déjanos tu
 *   nombre junto a una foto del vehículo a reparar y nos contactaremos
 *   lo antes posible contigo".
 * - WhatsApp +56 9 9066 8452 (el número rotulado en su letrero).
 * - Horario: lunes a viernes 10:00 a 18:00; sábado y domingo cerrado
 *   (Google Maps).
 * - Google: 5,0 con 19 opiniones. Las tres citas del sitio son
 *   textuales, con el nombre que publica la ficha.
 * - Maps no publica calle ni número: solo el pin «Gatone Print,
 *   Villarrica» (MQQJ+XF). Por eso el sitio no muestra dirección.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, pasos y rótulos. Sin precios,
 * plazos, marcas ni años: el taller no los publica. Las fotos muestran
 * trabajos distintos y no se presentan como antes/después de un mismo
 * vehículo.
 */

export const BIZ = {
  name: 'Gatone Print',
  short: 'Gatone Print',
  rubro: 'Taller de desabolladura y pintura',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 9066 8452',
  whatsapp: '56990668452',
  rating: '5,0',
  ratingValue: 5,
  reviews: 19,
} as const

export const WA_LINK =
  'https://wa.me/56990668452?text=Hola%20Gatone%20Print%2C%20quiero%20cotizar%20una%20reparaci%C3%B3n'

export const WA_LINK_FOTO =
  'https://wa.me/56990668452?text=Hola%20Gatone%20Print%2C%20te%20mando%20la%20foto%20de%20mi%20veh%C3%ADculo'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Gatone Print, Villarrica, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Gatone Print, Villarrica, Chile',
)}&output=embed`

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '10:00 a 18:00' },
  { dias: 'Sábado y domingo', horas: 'Cerrado' },
] as const

/** Citas textuales de su ficha de Google. */
export const REVIEWS = [
  {
    text: 'Dejé mi auto chocado y quedó impecable. Buena atención, precio justo y pintura que ni se nota el arreglo. Súper recomendado',
    author: 'Carlos Tapia',
  },
  {
    text: 'Servicio de Calidad, fui por un cambio de aceite y no demoro nada, quedó excelente, atención y amabilidad 10 de 10, 100% recomendado.',
    author: 'Alexis Acuña',
  },
  {
    text: 'Es muy bueno para su trabajo y es muy transparente con el cliente',
    author: 'José Arriegada',
  },
] as const

export const IMG = '/demos/gatone-print-villarrica'

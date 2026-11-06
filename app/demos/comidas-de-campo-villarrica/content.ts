/**
 * app/demos/comidas-de-campo-villarrica/content.ts
 *
 * Datos del mockup. REALES (verificados el 6-11-2026 en la ficha de Google
 * Maps «Restaurant comidas de campo», Instagram @comidas_de_campo y Facebook
 * comidas.de.campo.2025): nombre, rubro, dirección (Camino Ñancul a
 * Pitrufquén km 1,5, Villarrica), WhatsApp +56 9 8395 4377, horario lunes a
 * sábado 10:00 a 18:00 (domingo se consulta por WhatsApp), rating 4,8 con
 * 132 opiniones, estacionamiento propio amplio y gratis, los platos
 * nombrados (salen de sus publicaciones y de lo que repiten los clientes)
 * y las tres citas textuales de Google. Las frases breves de ambientación
 * son texto de muestra; no hay precios ni carta completa.
 */

export const BIZ = {
  name: 'Comidas de Campo',
  rubro: 'Restaurante · comida casera',
  address: 'Camino Ñancul a Pitrufquén, km 1,5',
  city: 'Villarrica',
  region: 'La Araucanía',
  phone: '56983954377',
  phoneTel: '+56983954377',
  phoneDisplay: '+56 9 8395 4377',
  instagram: 'https://www.instagram.com/comidas_de_campo/',
  facebook: 'https://www.facebook.com/comidas.de.campo.2025/',
  igUser: '@comidas_de_campo',
  fbUser: 'comidas.de.campo.2025',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: 132,
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Comidas de Campo, quiero reservar una mesa',
)}`

export const WA_LINK_MASAS = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Comidas de Campo, quiero encargar masas de empanada para Fiestas Patrias',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Comidas de Campo, camino Ñancul a Pitrufquén km 1,5, Villarrica',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Comidas de Campo, camino Ñancul a Pitrufquén km 1,5, Villarrica',
)}&output=embed`

export const IMG = '/demos/comidas-de-campo-villarrica'

export const REVIEWS = [
  {
    name: 'Eduardo M.',
    text: 'Excelente comida, muy delicioso todo, atención increíble por parte de todo el personal y de sus dueños Sergio y Susana, recomiendo 100% para todo aquel que este en villarrica o cerca.',
  },
  {
    name: 'Francisca M.',
    text: 'Excelente servicio, buenisima atención y acogida de los chicos, tiene estacionamiento, comida exquisita 100% recomendado.',
  },
  {
    name: 'Danitza T.',
    text: 'Exquisita la comida y la atención es cálida y excelente. 100% recomendado',
  },
] as const

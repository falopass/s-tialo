/**
 * app/demos/el-bajito/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps + SERNATUR +
 * turismo.villalegre.cl): nombre (ficha "El Bajito Almuerzos"), dirección
 * (Serafín Gutiérrez 245, Villa Alegre), teléfono/WhatsApp (+56 9 9315 6646),
 * horario de almuerzo (Lun-Sáb 12:00-16:00), rating 4,7 con 14 reseñas,
 * los platos del letrero (cazuela, pollo con papas, carne con arroz,
 * curanto) y las 5 reseñas citadas (todas 5 estrellas, texto original).
 * La lista de platos del día varía; los precios de referencia salen de
 * una reseña real (~$6.000 por plato).
 */

export const BIZ = {
  name: 'El Bajito',
  nameFull: 'El Bajito Almuerzos',
  rubro: 'Almuerzos caseros',
  address: 'Serafín Gutiérrez 245',
  city: 'Villa Alegre',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9315 6646',
  phoneTel: '+56993156646',
  whatsapp: '56993156646',
  rating: 4.7,
  reviews: 14,
  hours: 'Lunes a sábado · 12:00 a 16:00',
  duenos: 'Don Juan y la señora Palmenia',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Bajito y quiero consultar por el almuerzo de hoy',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar almuerzo en El Bajito',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Bajito Almuerzos, Serafín Gutiérrez 245, Villa Alegre',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Bajito Almuerzos, Serafín Gutiérrez 245, Villa Alegre, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/el-bajito'

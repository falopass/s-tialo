/**
 * app/demos/mecanico-juan-vivar/content.ts
 *
 * Datos del mockup. REALES, verificados en la ficha pública de Google Maps
 * ("Mecánico Juan Vivar", Linares) y en su perfil público de Facebook,
 * donde figura como Juan Carlos Vivar Gómez "Don Scanner" y declara ser
 * Técnico Máster en Inyección Electrónica Automotriz (INACAP): nombre,
 * dirección, comuna, teléfono, horario (L–V 8:30–18:00, fin de semana
 * cerrado), rating (4,9 con 17 reseñas) y las reseñas citadas.
 * Sin fotos públicas reutilizables → escena CSS/SVG propia (osciloscopio).
 */
export const BIZ = {
  name: 'Mecánico Juan Vivar',
  short: 'Don Scanner',
  rubro: 'Taller mecánico · diagnóstico electrónico',
  city: 'Linares',
  region: 'Región del Maule',
  address: 'Los Pirineos 1492',
  phoneDisplay: '+56 9 3554 5451',
  whatsapp: '56935545451',
  rating: 4.9,
  reviews: 17,
  schedule: 'Lunes a viernes · 8:30 a 18:00 · sábado y domingo cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Juan, tengo una falla en mi vehículo y quiero agendar un diagnóstico',
)}`

export const WA_SCAN = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Juan, quiero agendar un escaneo y diagnóstico para mi vehículo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mecánico Juan Vivar, Los Pirineos 1492, Linares, Región del Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Pirineos 1492, Linares, Región del Maule, Chile',
)}&output=embed`

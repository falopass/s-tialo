/**
 * app/demos/espacio-aventura-valdivia/content.ts
 *
 * Datos del mockup. REALES (verificados 7-11-2026 en la ficha de Google Maps
 * "Espacio Aventura" y en su Instagram @espacioaventura.chile): nombre, lema
 * ("Celebra con nosotros"), dirección Las Mulatas 126 (Valdivia) con
 * estacionamiento privado, horario de Maps (mar, jue, vie, sáb y dom
 * 9:00-22:30; lun y mié cerrado), tardes de juego (mar a jue 15:00 a 20:00,
 * de su post), WhatsApp +56 9 5228 9773, Instagram con más de 3 mil
 * seguidores y rating 4,9 con 15 opiniones (citas textuales). La oferta
 * (cumpleaños infantiles, paseos de curso, eventos de empresa, eventos
 * 100 % privados, instalaciones, arriendo de juegos, carta de cóctel y
 * pastelería a pedido, alianzas de decoración y animación) sale de sus
 * propias publicaciones. Los textos de apoyo de la página son de muestra.
 */

export const BIZ = {
  name: 'Espacio Aventura',
  short: 'Espacio Aventura',
  rubro: 'Cumpleaños infantiles y juegos',
  address: 'Las Mulatas 126',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 5228 9773',
  phoneTel: '+56952289773',
  whatsapp: '56952289773',
  rating: '4,9',
  reviews: 15,
  igHandle: '@espacioaventura.chile',
  igFollowers: 'más de 3 mil',
} as const

export const WA_LINK =
  'https://wa.me/56952289773?text=Hola%20Espacio%20Aventura%2C%20quiero%20cotizar%20un%20cumplea%C3%B1os'

export const WA_LINK_TARDES = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Espacio Aventura, quiero consultar por las tardes de juego',
)}`

export const IG_URL = 'https://www.instagram.com/espacioaventura.chile/'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Espacio Aventura, Las Mulatas 126, Valdivia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Las Mulatas 126, Valdivia',
)}&output=embed`

export const IMG = '/demos/espacio-aventura-valdivia'

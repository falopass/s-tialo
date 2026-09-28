/**
 * Datos confirmados en fuentes públicas consultadas el 28-09-2026.
 * - Instagram: https://www.instagram.com/villa.antillanca/ (bio: hotel, centro de eventos, WhatsApp +56979582177)
 * - Google Maps: ficha «Villa Antillanca, Hotel & Centro de Eventos», 4,4★ (201 reseñas), mismo teléfono.
 * Las fotos de public/demos/<slug>/ provienen de esas dos fuentes; el logo es la foto de perfil de Instagram.
 */
export const BIZ = {
  name: 'Villa Antillanca, Hotel & Centro de Eventos',
  short: 'Villa Antillanca',
  rubro: 'Hotel y centro de eventos',
  address: 'Camino a San Clemente km 2,3',
  city: 'Talca',
  region: 'Región del Maule',
  whatsapp: '56979582177',
  phoneDisplay: '+56 9 7958 2177',
  hours: '24 horas',
  instagram: 'https://www.instagram.com/villa.antillanca/',
  rating: 4.4,
  reviews: 201,
} as const

export const IMG = '/demos/villa-antillanca-hotel-centro-eventos'

export const HABITACIONES = [
  { src: 'habitacion-1', alt: 'Habitación con dos camas individuales y velador de madera' },
  { src: 'habitacion-2', alt: 'Habitación doble con techo de vigas de madera' },
] as const

export const GALERIA_EVENTOS = [
  { src: 'salon-1', alt: 'Salón de eventos montado para una fiesta, con luces de colores y mesas vestidas' },
  { src: 'salon-2', alt: 'Matrimonio celebrándose en el salón de vigas de madera' },
  { src: 'boda', alt: 'Mesa de matrimonio decorada con camino de mesa rosado y flores secas' },
  { src: 'terraza-noche', alt: 'Quincho iluminado de noche junto a la piscina, con mesas para un evento' },
] as const

export const GALERIA_RECINTO = [
  { src: 'fachada', alt: 'Fachada del hotel, edificio amarillo con pérgola verde y jardín' },
  { src: 'jardin', alt: 'Jardín del hotel con senderos, abedules y la piscina al fondo' },
  { src: 'restaurante', alt: 'Comedor del restaurante con escalera caracol y mesas de madera' },
  { src: 'piscina', alt: 'Piscina con quincho de madera al fondo' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Villa Antillanca y quiero consultar disponibilidad o un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Villa Antillanca, Hotel & Centro de Eventos, Camino a San Clemente km 2,3, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Villa Antillanca, Hotel & Centro de Eventos, Camino a San Clemente km 2,3, Talca, Chile',
)}&output=embed`

/** Paleta del demo: verde bosque, crema, dorado y terracota de atardecer. */
export const C = {
  forest: '#1E3A2F',
  forest2: '#264A3B',
  cream: '#F7F2E7',
  cream2: '#EEE6D6',
  gold: '#B7892B',
  goldDeep: '#7F5B14',
  goldSoft: '#E3C577',
  terracotta: '#B85C38',
  ink: '#1C231F',
  muted: '#5B655E',
  mutedOnDark: '#C7D1C9',
  line: 'rgba(28,35,31,0.14)',
  lineOnDark: 'rgba(247,242,231,0.16)',
} as const

/** Espacios publicados en las fichas del hotel (VyMaps, Google Maps). */
export const ESPACIOS = [
  { n: '01', title: 'Hotel', desc: 'Habitaciones para descansar a minutos de Talca, camino a San Clemente.' },
  { n: '02', title: 'Centro de eventos', desc: 'Salón para matrimonios, celebraciones y reuniones de empresa.' },
  { n: '03', title: 'Bar y restaurante', desc: 'Para comer y compartir sin salir del recinto.' },
  { n: '04', title: 'Piscina', desc: 'Espacio exterior para las tardes de calor del Maule.' },
] as const

export const EVENTOS = ['Matrimonios', 'Cumpleaños', 'Reuniones de empresa', 'Celebraciones familiares'] as const

export const PASOS = [
  { title: 'Cuéntanos la fecha', desc: 'Por WhatsApp: qué tipo de evento o estadía y cuándo.' },
  { title: 'Revisamos disponibilidad', desc: 'Te confirmamos si el espacio está libre y qué incluye.' },
  { title: 'Reservas con calma', desc: 'Recibes el detalle y coordinas los siguientes pasos.' },
] as const

export const SOURCES = [
  'Google Maps, ficha pública de Villa Antillanca: nombre, dirección, horario y fotos de usuarios.',
  'SERNATUR, ficha Hotel Antillanca: Sector Santa Mónica parcela 13, camino a San Clemente, Talca; +56 71 226 0765.',
  'Moteless, ficha pública: Cam. a Mango’s 1022, Talca; contacto móvil +56 9 7958 2177.',
  'VyMaps, ficha pública: hotel, centro de eventos, bar/restaurante y piscina; horario 24 horas.',
  'Instagram y Facebook: búsquedas por nombre exacto sin perfil oficial inequívoco disponible para reutilizar fotos.',
] as const

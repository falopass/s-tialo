/**
 * app/demos/direcar-alineacion-balanceo-talca/content.ts
 *
 * Datos del demo. REALES (ficha pública de Google Maps, hl=es): nombre
 * "Direcar - Alineación y balanceo (yatagan)", rubro (taller de revisión
 * de automóviles), dirección en Calle 9 1/2 Ote. 1737 Talca, teléfono,
 * rating 4,8 sobre 140 reseñas, horario publicado y las 3 reseñas
 * citadas (textuales, en español). Las fotos son reales de la ficha
 * (autos en el elevador, el taller, neumáticos). No publica tarifas:
 * los valores se cotizan por WhatsApp.
 */

export const BIZ = {
  name: 'Direcar',
  sub: 'Alineación y balanceo · Yatagán',
  rubro: 'Taller de revisión de automóviles',
  address: 'Calle 9 1/2 Ote. 1737',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8341 7885',
  phoneTel: '+56983417885',
  whatsapp: '56983417885',
  reviews: 140,
  rating: '4,8',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Direcar y quiero pedir hora para mi auto',
)}`

export const WA_LINK_HORA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Direcar y quiero agendar una hora en el taller',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Direcar - Alineación y balanceo (yatagan), Calle 9 1/2 Ote. 1737, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Direcar - Alineación y balanceo (yatagan), Talca, Chile',
)}&output=embed`

export const IMG = '/demos/direcar-alineacion-balanceo-talca'

export const HORAS = [
  { d: 'Lunes a jueves', h: '8:30 a 18:00' },
  { d: 'Viernes', h: '8:30 a 17:30' },
  { d: 'Sábado y domingo', h: 'Cerrado' },
]

export const RESENAS = [
  {
    name: 'R-. González',
    stars: 5,
    text: 'Muy rápidos, lo llevé a otros 3 servicios sin ser capaces de solucionar mi problema y acá aparte de solucionarlo me detectaron concretamente la pieza errónea; no pierda plata y vaya a la segura.',
  },
  {
    name: 'José Miguel Toloza Morales',
    stars: 5,
    text: 'Muy buena atención, el cobro es acorde a lo que realizan y no vi que cobren de más, excelente lugar para asistir en caso de falla en el tren delantero. Hay que solicitar hora porque al parecer tienen hartos clientes.',
  },
  {
    name: 'Lucas Yañez',
    stars: 5,
    text: 'Excelente atención y excelente trabajo, cumplen los plazos y siempre informan lo que tiene el auto y lo que necesita antes de empezar, 100% recomendado.',
  },
]

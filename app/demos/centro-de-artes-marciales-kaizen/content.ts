/**
 * app/demos/centro-de-artes-marciales-kaizen/content.ts
 *
 * Datos del mockup. REALES, verificados el 2026-09-28:
 * - Google Maps (Centro de Artes Marciales Kaizen): nota 4,7 con 13
 *   reseñas, categoría "Club deportivo", Siete Nte. 1675, Talca,
 *   teléfono 9 8240 8661, web enlazada instagram.com y 9 fotos. Las
 *   citas de reseñas son textuales de la ficha.
 * - Smoothcomp (club 50834): "Kaizen Grappling Arts", Talca; a cargo
 *   Regner Elgueta; afiliación "Elemental Dojo / Ares JJ Chile"; el
 *   equipo compite en torneos de la plataforma.
 * - Instagram @kaizengrapplingarts: 4.318 seguidores, 481 publicaciones.
 * - Facebook (Kaizen Grappling Arts): horario publicado Lun–Vie
 *   13:00–14:00 y 20:00–21:30; flyers con seminarios y aniversario
 *   (7 años cumplidos en junio de 2025).
 * - Fachada (foto real de la ficha): el letrero lista Jiu Jitsu,
 *   Grappling, Boxeo y Muay Thai + el mismo WhatsApp.
 * No se publican precios: no aparecen en el perfil. Todo se consulta
 * por WhatsApp.
 */

export const BIZ = {
  name: 'Centro de Artes Marciales Kaizen',
  short: 'Kaizen',
  brand: 'Kaizen Grappling Arts',
  rubro: 'Academia de artes marciales',
  address: 'Siete Nte. 1675',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8240 8661',
  phoneTel: '+56982408661',
  whatsapp: '56982408661',
  instagram: 'https://www.instagram.com/kaizengrapplingarts/',
  igUser: '@kaizengrapplingarts',
  igFollowers: '4.318',
  rating: '4,7',
  reviews: 13,
  headCoach: 'Regner Elgueta',
  affiliation: 'Elemental Dojo / Ares JJ Chile',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Kaizen y quiero consultar por las clases',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Kaizen y quiero agendar una clase de prueba',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro de Artes Marciales Kaizen, Siete Nte. 1675, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro de Artes Marciales Kaizen, Siete Nte. 1675, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/centro-de-artes-marciales-kaizen'

export const HORARIO = [
  { days: 'Lunes a viernes', time: '13:00–14:00' },
  { days: 'Lunes a viernes', time: '20:00–21:30' },
  { days: 'Sábado y domingo', time: 'torneos y eventos' },
]

export const RESENAS = [
  {
    text: 'Excelente lugar, el mejor!',
    author: 'Pablo Muñoz Muñoz',
    when: 'hace 3 meses',
  },
  {
    text: 'Muy buenos profesores, se preocupan de que todos aprendan. Ambiente de respeto y ayuda mutua.',
    author: 'Diego Valenzuela',
    when: 'hace un año',
  },
  {
    text: 'Muy buen ambiente y acogida tanto por profesores, como por participantes.',
    author: 'Juan Puente Saavedra',
    when: 'hace 2 años',
  },
  {
    text: 'Kaisen, centro de artes marciales es lo mejor que pudo pasarle a Talca.',
    author: 'Ginger Salazar',
    when: 'hace 2 años',
  },
]

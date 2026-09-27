/**
 * app/demos/defensa-molina-abogados/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * rubro, dirección, comuna, WhatsApp, Instagram (876 seguidores) y el dato
 * de que la ficha de Google aún no acumula reseñas. Todo lo demás
 * (áreas de trabajo, precios, horarios y textos) es contenido de muestra
 * para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Defensa Molina Abogados',
  short: 'Defensa Molina',
  rubro: 'Abogado',
  address: 'Luis Cruz Martínez N°1471',
  postal: '3380680',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8722 6609',
  phoneTel: '+56987226609',
  whatsapp: '56987226609',
  instagram: 'defensa_molina',
  instagramFollowers: '876',
} as const

const wa = (text: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`

export const WA_LINK = wa(
  'Hola, vi la página de Defensa Molina Abogados y quiero hacer una consulta',
)

export const waArea = (area: string) =>
  wa(`Hola, vi la página de Defensa Molina Abogados y quiero consultar por ${area}`)

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Luis Cruz Martínez 1471, Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Luis Cruz Martínez 1471, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/defensa-molina-abogados'

// Horario de muestra: se reemplaza por el real al publicar.
export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '09:00 – 18:30' },
  { dia: 'Sábado', hora: 'Con hora agendada' },
  { dia: 'Domingo', hora: 'Cerrado' },
]

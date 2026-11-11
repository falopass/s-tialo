/**
 * app/demos/la-italiana-san-fernando/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps (11-11-2026): "La italiana importadora", tienda de
 *   ropa de segunda mano en San Fernando, teléfono, horario (lun a vie 9:00
 *   a 13:00 y 14:00 a 18:00, sáb 9:00 a 13:00, dom cerrado), rating 4,0 con
 *   6 opiniones y los textos citados. Foto de los fardos en bodega.
 * - Redes de la marca: Instagram @laitalianaropaeuropeareciclada ("vendemos
 *   al detalle, por kilos y en fardos") y Facebook LAITALIANAIMPORTADORA
 *   ("ropa sustentable"). Foto de la fachada: post "La Italiana San Fernando
 *   te espera" (2-12-2025).
 * PENDIENTE (TODO): la calle exacta. La marca publicó "Nueva ubicación" el
 * 27-10-2026 sin decir qué sucursal; el sitio usa el pin de Google Maps y no
 * muestra calle hasta confirmarla con el dueño. Sin precios: los del
 * Instagram son ofertas con fecha.
 */

export const BIZ = {
  name: 'La Italiana',
  full: 'La Italiana importadora',
  rubro: 'Ropa europea reciclada',
  city: 'San Fernando',
  region: "Región de O'Higgins",
  phoneDisplay: '+56 9 9102 4795',
  phoneTel: '+56991024795',
  whatsapp: '56991024795',
  instagram: 'https://www.instagram.com/laitalianaropaeuropeareciclada/',
  facebook: 'https://www.facebook.com/LAITALIANAIMPORTADORA',
} as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 a 13:00 · 14:00 a 18:00' },
  { dia: 'Sábado', hora: '9:00 a 13:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

export const FORMAS = [
  {
    n: '01',
    titulo: 'Al detalle',
    texto: 'Eliges prenda por prenda y te llevas solo lo que te guste.',
  },
  {
    n: '02',
    titulo: 'Por kilo',
    texto: 'Eliges tus prendas y pagas por lo que pesan. Ideal para llenar el clóset de la familia.',
  },
  {
    n: '03',
    titulo: 'En fardos',
    texto: 'Fardos de ropa europea por tipo de prenda y temporada. Pregunta por WhatsApp qué llegó.',
  },
] as const

export const OPINIONES = [
  { autor: 'David Venegas', texto: 'Buena ropa, calidad y buen precio.' },
  { autor: 'Aquiles Acevedo', texto: 'Ropa de calidad a bajo precio.' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Italiana San Fernando y quiero hacer una consulta',
)}`

export const WA_FARDOS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Italiana San Fernando y quiero saber qué fardos tienen disponibles',
)}`

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/La+italiana+importadora/@-34.6038091,-70.9869169,17z/data=!4m6!3m5!1s0x9664911487223141:0xbe66498c4c8485b9!8m2!3d-34.6038091!4d-70.9869169'

export const MAPS_EMBED = 'https://www.google.com/maps?q=-34.6038091,-70.9869169&z=16&output=embed'

export const IMG = '/demos/la-italiana-san-fernando'

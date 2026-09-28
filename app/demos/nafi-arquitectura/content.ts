/**
 * app/demos/nafi-arquitectura/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, perfil público de
 * Instagram y LinkedIn): nombre, rubro, dirección, oficina, teléfono/WhatsApp,
 * correo, horario, las 6 reseñas 5.0, los 657 seguidores, los nombres de las
 * socias y los nombres de proyecto. Los textos descriptivos son de muestra.
 */

export const BIZ = {
  name: 'NAFI Arquitectura',
  legal: 'NAFI Arquitectura Ltda.',
  rubro: 'Estudio de arquitectura',
  address: 'Patio Rugendas, oficina 5 · 1 Oriente 1262',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8776 4207',
  whatsapp: '56987764207',
  email: 'arquitectura@nafi.cl',
  instagram: 'https://www.instagram.com/nafi_arquitectura/',
  followers: '657',
  reviews: 6,
  rating: '5.0',
  team: 'Camila Figueroa + Javiera Navarrete',
  hours: 'Lun a Vie · 9:00 a 18:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de NAFI Arquitectura y quiero conversar un proyecto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'NAFI Arquitectura Ltda., 1 Oriente 1262, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '1 Oriente 1262, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/nafi-arquitectura'

/** Proyectos reales del portafolio público de Instagram (@nafi_arquitectura). */
export const PROJECTS = [
  {
    n: '01',
    title: 'Casa Prisma',
    year: '2023',
    desc: 'Vivienda en obra: paneles de madera, estructura vista y render de fachada nocturna. Documentada de anteproyecto a terreno.',
    img: 'render-exterior.webp',
    alt: 'Render exterior de Casa Prisma, vivienda de un piso sobre pradera, proyecto de NAFI Arquitectura',
  },
  {
    n: '02',
    title: 'Casa Nido',
    year: '2023',
    desc: 'Proyecto en Lomas de Rauquén, abierto hacia los cerros y plantíos del entorno. Materialidades: acero y madera.',
    img: 'hero.webp',
    alt: 'Render nocturno de Casa Nido, fachada iluminada de madera y acero',
  },
  {
    n: '03',
    title: 'Casa Campo',
    year: '—',
    desc: 'Vivienda rural en el Maule. Del plano de planta a la visita de obra con el equipo completo.',
    img: 'obra-panoramica.webp',
    alt: 'Obra de Casa Campo en terreno, paneles de madera en montaje',
  },
  {
    n: '04',
    title: 'Interiorismo',
    year: '—',
    desc: 'Diseño de interiores con láminas de ambientación: baños, cocinas y mobiliario a medida.',
    img: 'interiorismo-1.webp',
    alt: 'Lámina de interiorismo de baño para Casa Prisma, dibujo axonométrico',
  },
] as const

/** Servicios visibles en el perfil (destacadas de Instagram: valorización, interiorismo). */
export const SERVICES = [
  {
    title: 'Proyecto de arquitectura',
    desc: 'Anteproyecto, planimetría y expediente para permiso de edificación. Casas, ampliaciones y proyectos en terreno.',
  },
  {
    title: 'Interiorismo',
    desc: 'Diseño de interiores y materialidades: láminas de ambientación, mobiliario y detalle de terminaciones.',
  },
  {
    title: 'Valorización de terrenos',
    desc: 'Estudio de factibilidad y subdivisiones para sacarle el máximo partido a un sitio o parcela.',
  },
  {
    title: 'Dirección de obra',
    desc: 'Acompañamiento en terreno: visita de obra, control de partidas y coordinación con el constructor.',
  },
] as const

export const REVIEWS = [
  {
    text: 'Arquitectas muy eficientes, atención personalizada para cada cliente.',
    author: 'Reseña de Google',
  },
  {
    text: 'Excelentes profesionales en arquitectura y diseño, muy grata atención.',
    author: 'Reseña de Google',
  },
] as const

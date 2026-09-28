/**
 * app/demos/ventanas-y-aluminios-inverlum/content.ts
 *
 * Datos REALES verificados (2026-09-28):
 * - Ficha de Google Maps "Ventanas Y Aluminios INVERLUM": dirección,
 *   horario, teléfono, nota 3.8 y 18 opiniones.
 * - Sitio propio inverlum.cl: catálogo de productos (ventanas PVC y
 *   aluminio, termopaneles, muros cortina, shower door, mamparas),
 *   "más de 18 años de experiencia" y las fotos de public/demos/… que
 *   salen de su propia galería.
 * No hay precios ni plazos de fabricación.
 */

export const BIZ = {
  name: 'Ventanas y Aluminios INVERLUM',
  short: 'INVERLUM',
  address: '6 Oriente N° 068, entre 18 y 21 Sur',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5786 5260',
  whatsapp: '56957865260',
  rating: 3.8,
  ratingLabel: '3,8',
  reviews: 18,
  yearsLabel: 'más de 18 años',
  hours: [
    { days: 'Lunes a viernes', time: '8:00–13:00 y 15:00–19:00' },
    { days: 'Sábado y domingo', time: 'Cerrado' },
  ],
} as const

export const IMG = '/demos/ventanas-y-aluminios-inverlum'

/** Catálogo real publicado en inverlum.cl. */
export const SISTEMAS = [
  { n: 'Ventanas de aluminio', desc: 'Correderas, fijas, oscilobatientes, guillotina, proyectantes y pivotantes, fabricadas a medida.' },
  { n: 'Ventanas PVC', desc: 'Perfil PVC con termopanel: aislación térmica y acústica para casas y oficinas.' },
  { n: 'Termopaneles', desc: 'Vidrios dobles herméticos para reponer o mejorar ventanas existentes.' },
  { n: 'Muros cortina', desc: 'Fachadas vidriadas de piso a cielo para locales, oficinas y frontis comerciales.' },
  { n: 'Puertas', desc: 'Puertas de aluminio y vidrio templado para accesos de alto tránsito.' },
  { n: 'Shower door y mamparas', desc: 'Mamparas de baño y divisiones de oficina en vidrio templado.' },
] as const

/** Fotos de la galería propia del negocio (inverlum.cl/galeria). */
export const FOTOS = [
  { src: `${IMG}/hero.webp`, alt: 'Fachada del local INVERLUM en Talca: muro cortina de vidrio y letrero con el nombre', tag: 'Local 6 Oriente' },
  { src: `${IMG}/showroom.webp`, alt: 'Interior del showroom de INVERLUM con ventanales de aluminio negro de piso a cielo', tag: 'Showroom' },
  { src: `${IMG}/cnc.webp`, alt: 'Operario de INVERLUM cortando perfiles de aluminio en sierra CNC dentro del taller', tag: 'Fabricación' },
  { src: `${IMG}/corte.webp`, alt: 'Trabajador cortando un perfil de aluminio en sierra ingletadora en el taller de INVERLUM', tag: 'Taller' },
  { src: `${IMG}/perfiles.webp`, alt: 'Racks con perfiles de aluminio rotulados en la planta de INVERLUM', tag: 'Perfiles' },
  { src: `${IMG}/termopaneles.webp`, alt: 'Termopaneles embalados en madera esperando despacho en la bodega de INVERLUM', tag: 'Termopaneles' },
  { src: `${IMG}/taller.webp`, alt: 'Vista general de la planta de INVERLUM con paños de vidrio y maquinaria de corte', tag: 'Planta' },
  { src: `${IMG}/bodega.webp`, alt: 'Bodega de INVERLUM con vidrios y termopaneles ordenados en cajones de despacho', tag: 'Bodega' },
  { src: `${IMG}/fachada-camion.webp`, alt: 'Fachada de INVERLUM con el letrero del nombre y camión de reparto estacionado', tag: 'Despacho' },
] as const

/** Reseñas públicas de la ficha de Google Maps (nombre de pila). */
export const REVIEWS = [
  { text: 'Muy buena atención de Adrianita, buenos precios de los materiales y buen despacho.', author: 'Orlando' },
  { text: 'Tanto el dueño como el personal, muy atentos y preocupados de sus clientes.', author: 'Viviana' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de INVERLUM y quiero cotizar ventanas o termopaneles',
)}`

const MAPS_QUERY = 'Ventanas Y Aluminios INVERLUM, 6 Oriente 068, Talca, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`

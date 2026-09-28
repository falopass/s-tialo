/**
 * app/demos/delicias-limenas-san-clemente/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + el flyer oficial del
 * restaurante + Instagram @rest_aurantedelicias): nombre, dirección
 * (Clodomiro Silva 24 esquina Huamachuco, frente al mercado de San
 * Clemente), teléfonos, horario publicado en el flyer, rating 4,5
 * (23 opiniones), los platos de su carta del flyer (ceviche de reineta,
 * lomo saltado, piqueo marino, leche de tigre, ají de gallina, risotto
 * de lomo saltado, pisco sour y suspiro limeño), las fotos de
 * public/demos/delicias-limenas-san-clemente/ (su ficha y sus redes,
 * incluido el mural "sabor que te traslada a Perú") y su logo del
 * flyer. Todo lo demás es contenido de muestra.
 */

export const BIZ = {
  name: 'Delicias Limeñas',
  full: 'Restaurante Delicias Limeñas',
  rubro: 'Comida peruana',
  city: 'San Clemente',
  region: 'Región del Maule',
  address: 'Clodomiro Silva 24, esq. Av. Huamachuco — frente al mercado',
  phoneDisplay: '+56 9 4564 6371',
  phoneTel: '+56945646371',
  phoneAlt: '+56 9 2020 9424',
  whatsapp: '56945646371',
  instagram: 'rest_aurantedelicias',
  tiktok: 'dl_restaurante',
  facebook: 'Delicias limeñas gastronomía peruana',
  rating: '4,5',
  reviewCount: '23',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Delicias Limeñas y quiero reservar en San Clemente',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Delicias Limeñas, Clodomiro Silva 24, San Clemente, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clodomiro Silva 24, San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/delicias-limenas-san-clemente'

export const CARTA = [
  { nombre: 'Ceviche de reineta', foto: 'ceviche-vino', alt: 'Ceviche de reineta con camote y choclo' },
  { nombre: 'Lomo saltado', foto: 'lomo-saltado', alt: 'Lomo saltado con papas fritas' },
  { nombre: 'Piqueo marino', foto: 'piqueo-marino', alt: 'Piqueo marino con chilcano' },
  { nombre: 'Tallarín saltado', foto: 'tallarin-saltado', alt: 'Tallarín saltado con carne y verduras' },
] as const

export const MAS_PLATOS = [
  'Leche de tigre',
  'Ají de gallina',
  'Risotto de lomo saltado',
  'Pisco sour',
  'Suspiro limeño',
] as const

export const REVIEWS = [
  {
    nombre: 'Marianela Briones',
    texto:
      'Buen restaurante peruano en San Clemente: comida sabrosa y variada, con precios razonables.',
  },
  {
    nombre: 'Diego Cid',
    texto:
      'Comida muy buena, platos bien preparados y buena atención. Vale la pena conocerlo.',
  },
  {
    nombre: 'Wilfrido Sandoval',
    texto:
      'Muy rico todo, buenas porciones y un lindo lugar para comer en familia.',
  },
] as const

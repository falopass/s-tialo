/**
 * app/demos/que-barato-lf/content.ts
 *
 * Datos del mockup. REALES: nombre, dirección (34 Ote. 3404, Talca),
 * los dos WhatsApp del letrero del local, las 133 reseñas y el 4.9★ de
 * Google Maps, el horario (lun–dom 10:00–21:00 continuo) y la descripción
 * «insumos médicos, artículos de aseo y varios» del Instagram
 * @que_baratolf, los pasos de «¿Cómo comprar?» del flyer del local y el
 * catálogo con precios, incluido el precio «mayor» por 3 unidades.
 * Las fotos son las reales publicadas por la tienda en Google Maps.
 */

export const BIZ = {
  name: 'QUE BARATO LF',
  rubro: 'Insumos médicos · aseo · varios',
  address: '34 Ote. 3404',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8445 2626',
  phoneTel: '+56984452626',
  whatsapp: '56984452626',
  phone2Display: '+56 9 3412 8754',
  phone2Tel: '+56934128754',
  whatsapp2: '56934128754',
  reviews: '133',
  rating: '4.9',
  instagram: '@que_baratolf',
  instagramUrl: 'https://www.instagram.com/que_baratolf/',
} as const

// Paleta tomada del letrero y el logo reales: azul del rótulo,
// rojo del logo «QUE BARATO LF» y papel de etiqueta de precio.
export const C = {
  azul: '#1C4E9C',
  azulDeep: '#102E63',
  rojo: '#D52B1E',
  rojoDeep: '#9E1F14',
  papel: '#F7F3EA',
  blanco: '#FFFFFF',
  tinta: '#17212B',
  gris: '#5A6472',
  green: '#25D366',
  greenInk: '#0B3B24',
  line: '#E0D8C8',
  lineOnDark: 'rgba(255,255,255,0.18)',
} as const

export const waLink = (text: string, phone: string = BIZ.whatsapp) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

export const WA_LINK = waLink(
  'Hola QUE BARATO LF! Vi su sitio y quiero cotizar',
)

export const WA_LINK2 = waLink(
  'Hola QUE BARATO LF! Vi su sitio y quiero cotizar',
  BIZ.whatsapp2,
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'QUE BARATO LF, 34 Ote. 3404, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '34 Ote. 3404, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/que-barato-lf'

// Horario real publicado en el Instagram del local (@que_baratolf).
export const HOURS = [
  { days: 'Lunes a domingo', time: '10:00–21:00 hrs · horario continuo' },
] as const

export type CatKey = 'medicos' | 'aseo' | 'varios'

export const CATEGORIES: {
  key: CatKey
  label: string
  desc: string
  img: string
  pos: string
  alt: string
}[] = [
  {
    key: 'medicos',
    label: 'Insumos médicos',
    desc: 'Guantes, vendas, gasas, jeringas y todo para el botiquín.',
    img: 'guantes',
    pos: '50% 40%',
    alt: 'Cajas de guantes desechables por talla sobre el mesón del local',
  },
  {
    key: 'aseo',
    label: 'Artículos de aseo',
    desc: 'Paños, microfibra, papel y productos de limpieza.',
    img: 'aseo',
    pos: '50% 45%',
    alt: 'Repisas del local con botellas y artículos de aseo de colores',
  },
  {
    key: 'varios',
    label: 'Escolar y varios',
    desc: 'Útiles escolares, manualidades y de todo un poco.',
    img: 'pasillo',
    pos: '50% 35%',
    alt: 'Pasillo del local con estanterías llenas de productos y papel',
  },
]

export const CAT_LABEL: Record<CatKey, string> = {
  medicos: 'Insumos médicos',
  aseo: 'Artículos de aseo',
  varios: 'Escolar y varios',
}

/**
 * Catálogo real del local. `price` es el precio unitario y `mayor` el
 * precio por unidad llevando 3 o más del mismo producto. `price: null`
 * significa que la captura del catálogo no mostraba precio.
 */
export const PRODUCTS: {
  cat: CatKey
  name: string
  price: string | null
  mayor?: string
}[] = [
  // Insumos médicos — primero los del catálogo real que mandó la tienda (27-09)
  { cat: 'medicos', name: 'Tegaderm film 1624W', price: '$600' },
  { cat: 'medicos', name: 'Tegaderm film 3M 1626W', price: '$700', mayor: '$500' },
  { cat: 'medicos', name: 'Coban 10 cm marca 3M', price: '$2.500' },
  { cat: 'medicos', name: 'Jeringa 5 ml Venotek (100 un.)', price: '$6.500', mayor: '$5.500' },
  { cat: 'medicos', name: 'Manguillas blancas (100 un.)', price: '$2.500', mayor: '$2.000' },
  { cat: 'medicos', name: 'Plantilla talón', price: null, mayor: '$1.200' },
  { cat: 'medicos', name: 'Cotonito 500 unidades', price: '$1.650', mayor: '$1.000' },
  { cat: 'medicos', name: 'Toma presión de niños', price: '$3.000', mayor: '$2.500' },
  { cat: 'medicos', name: 'Jeringa 3 cc Venotek (100 un.)', price: '$6.200', mayor: '$5.900' },
  { cat: 'medicos', name: 'Elastomull 6 cm x 20 un.', price: '$8.000', mayor: '$7.000' },
  { cat: 'medicos', name: 'Apósito corriente 11 cm', price: '$100' },
  { cat: 'medicos', name: 'Venda elasticada blanca', price: '$300' },
  { cat: 'medicos', name: 'Paño amarillo cocina', price: '$200', mayor: '$150' },
  { cat: 'medicos', name: 'Toallitas antisépticas', price: '$1.600', mayor: '$1.400' },
  { cat: 'medicos', name: 'Bajalenguas de madera', price: '$1.800', mayor: '$1.600' },
  { cat: 'medicos', name: 'Recolector de orina', price: '$2.000' },
  { cat: 'medicos', name: 'Cinta microporosa 2,5 cm', price: '$1.000' },
  { cat: 'medicos', name: 'Micropore beige 3M 1,25 cm', price: '$1.000' },
  { cat: 'medicos', name: 'Transpore 3M 2,5 cm', price: '$1.000' },
  { cat: 'medicos', name: 'Coban 5 cm marca 3M', price: '$1.500' },
  { cat: 'medicos', name: 'Coban 7,5 cm marca 3M', price: '$2.000' },
  { cat: 'medicos', name: 'Leukoplast blanca 5 cm', price: '$17.000', mayor: '$15.000' },
  { cat: 'medicos', name: 'Tegaderm film 1622W', price: '$200' },
  { cat: 'medicos', name: 'Gasa no tejida 5x5 LBF', price: '$3.500', mayor: '$3.000' },
  { cat: 'medicos', name: 'Algodón hidrófilo Cranberry', price: '$1.800', mayor: '$1.600' },
  { cat: 'medicos', name: 'Algodón hidrófilo 1 kg Trebol', price: '$9.500', mayor: '$9.300' },
  { cat: 'medicos', name: 'Cutimed spray 28 ml', price: '$6.000', mayor: '$5.000' },
  { cat: 'medicos', name: 'Cinta kinesiológica', price: '$2.000', mayor: '$1.200' },
  { cat: 'medicos', name: 'Pechera desechable', price: '$200', mayor: '$170' },
  { cat: 'medicos', name: 'Caja guantes estéril 8.0', price: null },
  // Escolar y varios
  { cat: 'varios', name: 'Block Liceo 60, 20 hojas', price: '$900', mayor: '$700' },
  { cat: 'varios', name: 'Pegamento en barra Giotto', price: '$1.000', mayor: '$800' },
  { cat: 'varios', name: 'Pegamento en barra Artel', price: '$800', mayor: '$600' },
  { cat: 'varios', name: 'Cartulina española 10 pliegos', price: '$2.000', mayor: '$1.800' },
  { cat: 'varios', name: 'Block médium 99 1/8 hojas', price: '$1.500', mayor: '$1.300' },
  { cat: 'varios', name: 'Pegamento en barra', price: '$1.000' },
  { cat: 'varios', name: 'Marcadores 12 unidades', price: '$1.800', mayor: '$1.500' },
  { cat: 'varios', name: 'Silicona líquida 100 gr', price: '$1.300', mayor: '$1.000' },
  { cat: 'varios', name: 'Palos de helado medianos', price: '$900', mayor: '$700' },
  // Aseo y hogar
  { cat: 'aseo', name: 'Pistola silicona 20W', price: '$2.100', mayor: '$1.600' },
  { cat: 'aseo', name: 'Paño microfibra 38 cm', price: '$500', mayor: '$300' },
  { cat: 'aseo', name: 'Toalla interfoliada', price: '$1.500', mayor: '$1.300' },
]

// Reseñas reales publicadas en Google Maps (nombres y fecha relativa).
export const REVIEWS = [
  {
    name: 'Constanza Chuhuaicura',
    when: 'hace 7 meses',
    text: 'Es un super completo y organizado local; ¡siempre encuentro todo rápido! Y los precios mejor. Lo recomiendo ♡',
  },
  {
    name: 'Andrea Mora',
    when: 'hace 2 meses',
    text: 'Aparte de los precios excelentes, la atención es maravillosa.',
  },
  {
    name: 'Javier ignacio Barrios sazo',
    when: 'hace 4 meses',
    text: 'Lugar con buenos precios y buena atención, 100% recomendado.',
  },
] as const

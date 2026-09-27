/**
 * app/demos/que-barato-lf/content.ts
 *
 * Datos del mockup. REALES: nombre, dirección (34 Ote. 3404, Talca),
 * los dos WhatsApp del flyer, las 133 reseñas de Google Maps, los pasos
 * de «¿Cómo comprar?» y el catálogo con precios, incluido el precio
 * «mayor» por 3 unidades. Los horarios son de referencia y las fotos,
 * referenciales.
 */

export const BIZ = {
  name: 'QUE BARATO LF',
  rubro: 'De todo un poco',
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
} as const

export const C = {
  navy: '#0E3A5C',
  navyDeep: '#092A45',
  sky: '#7FC6E8',
  paper: '#F5F8FA',
  white: '#FFFFFF',
  steel: '#5C6C80',
  green: '#2FBF71',
  greenInk: '#0B3B24',
  line: '#D8E2EA',
  lineOnDark: 'rgba(255,255,255,0.16)',
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

// Horario de referencia para el mockup.
export const HOURS = [
  { days: 'Lun–Vie', time: '9:00–19:00' },
  { days: 'Sábado', time: '10:00–14:00' },
] as const

export type CatKey = 'botiquin' | 'escolar' | 'hogar'

export const CATEGORIES: {
  key: CatKey
  label: string
  desc: string
  /** null = la tarjeta usa fondo de color (no hay foto que calce) */
  img: string | null
  pos: string
  alt: string
}[] = [
  {
    key: 'botiquin',
    label: 'Curas y botiquín',
    desc: 'Vendas, gasas, cintas y todo para el botiquín.',
    img: 'detalle1',
    pos: '50% 50%',
    alt: 'Vendas, cinta adhesiva, parches y gasa estéril sobre un mesón',
  },
  {
    key: 'escolar',
    label: 'Escolares y manualidades',
    desc: 'Útiles, cartulinas, pegamento y materiales de manualidades.',
    img: null,
    pos: '',
    alt: '',
  },
  {
    key: 'hogar',
    label: 'Hogar y varios',
    desc: 'Paños, microfibra, toallas y varios para la casa.',
    img: 'ambiente',
    pos: '50% 50%',
    alt: 'Pasillo del local con estanterías llenas de productos',
  },
]

export const CAT_LABEL: Record<CatKey, string> = {
  botiquin: 'Curas y botiquín',
  escolar: 'Escolares y manualidades',
  hogar: 'Hogar y varios',
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
  // Curas y botiquín — primero los del catálogo real que mandó la tienda (27-09)
  { cat: 'botiquin', name: 'Tegaderm film 1624W', price: '$600' },
  { cat: 'botiquin', name: 'Tegaderm film 3M 1626W', price: '$700', mayor: '$500' },
  { cat: 'botiquin', name: 'Coban 10 cm marca 3M', price: '$2.500' },
  { cat: 'botiquin', name: 'Jeringa 5 ml Venotek (100 un.)', price: '$6.500', mayor: '$5.500' },
  { cat: 'botiquin', name: 'Manguillas blancas (100 un.)', price: '$2.500', mayor: '$2.000' },
  { cat: 'botiquin', name: 'Plantilla talón', price: null, mayor: '$1.200' },
  { cat: 'botiquin', name: 'Cotonito 500 unidades', price: '$1.650', mayor: '$1.000' },
  { cat: 'botiquin', name: 'Toma presión de niños', price: '$3.000', mayor: '$2.500' },
  { cat: 'botiquin', name: 'Jeringa 3 cc Venotek (100 un.)', price: '$6.200', mayor: '$5.900' },
  { cat: 'botiquin', name: 'Elastomull 6 cm x 20 un.', price: '$8.000', mayor: '$7.000' },
  // Curas y botiquín
  { cat: 'botiquin', name: 'Apósito corriente 11 cm', price: '$100' },
  { cat: 'botiquin', name: 'Venda elasticada blanca', price: '$300' },
  { cat: 'botiquin', name: 'Paño amarillo cocina', price: '$200', mayor: '$150' },
  { cat: 'botiquin', name: 'Toallitas antisépticas', price: '$1.600', mayor: '$1.400' },
  { cat: 'botiquin', name: 'Bajalenguas de madera', price: '$1.800', mayor: '$1.600' },
  { cat: 'botiquin', name: 'Recolector de orina', price: '$2.000' },
  { cat: 'botiquin', name: 'Cinta microporosa 2,5 cm', price: '$1.000' },
  { cat: 'botiquin', name: 'Micropore beige 3M 1,25 cm', price: '$1.000' },
  { cat: 'botiquin', name: 'Transpore 3M 2,5 cm', price: '$1.000' },
  { cat: 'botiquin', name: 'Coban 5 cm marca 3M', price: '$1.500' },
  { cat: 'botiquin', name: 'Coban 7,5 cm marca 3M', price: '$2.000' },
  { cat: 'botiquin', name: 'Leukoplast blanca 5 cm', price: '$17.000', mayor: '$15.000' },
  { cat: 'botiquin', name: 'Tegaderm film 1622W', price: '$200' },
  { cat: 'botiquin', name: 'Gasa no tejida 5x5 LBF', price: '$3.500', mayor: '$3.000' },
  { cat: 'botiquin', name: 'Algodón hidrófilo Cranberry', price: '$1.800', mayor: '$1.600' },
  { cat: 'botiquin', name: 'Algodón hidrófilo 1 kg Trebol', price: '$9.500', mayor: '$9.300' },
  { cat: 'botiquin', name: 'Cutimed spray 28 ml', price: '$6.000', mayor: '$5.000' },
  { cat: 'botiquin', name: 'Cinta kinesiológica', price: '$2.000', mayor: '$1.200' },
  { cat: 'botiquin', name: 'Pechera desechable', price: '$200', mayor: '$170' },
  { cat: 'botiquin', name: 'Caja guantes estéril 8.0', price: null },
  // Escolares y manualidades
  { cat: 'escolar', name: 'Block Liceo 60, 20 hojas', price: '$900', mayor: '$700' },
  { cat: 'escolar', name: 'Pegamento en barra Giotto', price: '$1.000', mayor: '$800' },
  { cat: 'escolar', name: 'Pegamento en barra Artel', price: '$800', mayor: '$600' },
  { cat: 'escolar', name: 'Cartulina española 10 pliegos', price: '$2.000', mayor: '$1.800' },
  { cat: 'escolar', name: 'Block médium 99 1/8 hojas', price: '$1.500', mayor: '$1.300' },
  { cat: 'escolar', name: 'Pegamento en barra', price: '$1.000' },
  { cat: 'escolar', name: 'Marcadores 12 unidades', price: '$1.800', mayor: '$1.500' },
  { cat: 'escolar', name: 'Silicona líquida 100 gr', price: '$1.300', mayor: '$1.000' },
  { cat: 'escolar', name: 'Palos de helado medianos', price: '$900', mayor: '$700' },
  // Hogar y varios
  { cat: 'hogar', name: 'Pistola silicona 20W', price: '$2.100', mayor: '$1.600' },
  { cat: 'hogar', name: 'Paño microfibra 38 cm', price: '$500', mayor: '$300' },
  { cat: 'hogar', name: 'Toalla interfoliada', price: '$1.500', mayor: '$1.300' },
]

/**
 * app/demos/que-barato-lf/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre, rubro,
 * dirección (34 Ote. 3404, Talca), WhatsApp y las 133 reseñas. Todo lo
 * demás —categorías, tabla de precios «desde», textos y horarios— es
 * contenido de muestra; las fotos son referenciales.
 */

export const BIZ = {
  name: 'QUE BARATO LF',
  rubro: 'Distribuidora de insumos médicos',
  address: '34 Ote. 3404',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8445 2626',
  phoneTel: '+56984452626',
  whatsapp: '56984452626',
  reviews: '133',
} as const

export const C = {
  navy: '#0E3A5C',
  navyDeep: '#092A45',
  sky: '#7FC6E8',
  paper: '#F5F8FA',
  white: '#FFFFFF',
  steel: '#64748B',
  green: '#2FBF71',
  greenInk: '#0B3B24',
  line: '#D8E2EA',
  lineOnDark: 'rgba(255,255,255,0.16)',
} as const

export const waLink = (text: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`

export const WA_LINK = waLink(
  'Hola QUE BARATO LF! Vi su sitio y quiero cotizar insumos',
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

export type CatKey =
  | 'guantes'
  | 'jeringas'
  | 'gasas'
  | 'mascarillas'
  | 'curaciones'
  | 'equipos'

export const CATEGORIES: {
  key: CatKey
  label: string
  desc: string
  img: string
  pos: string
  alt: string
}[] = [
  {
    key: 'guantes',
    label: 'Guantes',
    desc: 'Nitrilo y látex, por caja o por bulto.',
    img: 'hero',
    pos: '15% 50%',
    alt: 'Guantes de nitrilo azules sobre un mesón de acero en una distribuidora de insumos',
  },
  {
    key: 'jeringas',
    label: 'Jeringas',
    desc: 'Desechables, insulina y agujas por caja.',
    img: 'ambiente',
    pos: '50% 50%',
    alt: 'Pasillo de una distribuidora con estanterías llenas de insumos médicos empaquetados',
  },
  {
    key: 'gasas',
    label: 'Gasas',
    desc: 'Estériles, parafinadas e hisopos.',
    img: 'detalle2',
    pos: '30% 50%',
    alt: 'Paquetes de gasa estéril, vendas y algodón ordenados sobre una mesa',
  },
  {
    key: 'mascarillas',
    label: 'Mascarillas',
    desc: 'Quirúrgicas 3 pliegues y KN95.',
    img: 'hero',
    pos: '80% 50%',
    alt: 'Mascarillas quirúrgicas celestes empaquetadas junto a cajas de insumos',
  },
  {
    key: 'curaciones',
    label: 'Curaciones',
    desc: 'Vendas, cintas, parches y antisepsia.',
    img: 'detalle1',
    pos: '50% 50%',
    alt: 'Vendas, cinta adhesiva, parches y gasa estéril sobre un mesón',
  },
  {
    key: 'equipos',
    label: 'Equipos',
    desc: 'Baumanómetros, oxímetros y termómetros.',
    img: 'detalle3',
    pos: '50% 50%',
    alt: 'Baumanómetro, oxímetro de pulso y termómetro digital sobre una mesa',
  },
]

export const CAT_LABEL: Record<CatKey, string> = {
  guantes: 'Guantes',
  jeringas: 'Jeringas',
  gasas: 'Gasas',
  mascarillas: 'Mascarillas',
  curaciones: 'Curaciones',
  equipos: 'Equipos',
}

// Precios «desde» de muestra: el negocio confirma el valor real al cotizar.
export const PRODUCTS: {
  cat: CatKey
  name: string
  format: string
  price: string
}[] = [
  { cat: 'guantes', name: 'Guantes de nitrilo', format: 'caja × 100', price: 'desde $4.990' },
  { cat: 'guantes', name: 'Guantes de látex', format: 'caja × 100', price: 'desde $3.990' },
  { cat: 'jeringas', name: 'Jeringa desechable 3 ml', format: 'caja × 100', price: 'desde $6.990' },
  { cat: 'jeringas', name: 'Jeringa de insulina 1 ml', format: 'caja × 100', price: 'desde $8.990' },
  { cat: 'gasas', name: 'Gasa estéril 10×10', format: 'sobre × 100', price: 'desde $3.490' },
  { cat: 'gasas', name: 'Alcohol gel 1 litro', format: 'unidad', price: 'desde $2.990' },
  { cat: 'mascarillas', name: 'Mascarilla quirúrgica 3 pliegues', format: 'caja × 50', price: 'desde $2.490' },
  { cat: 'mascarillas', name: 'Mascarilla KN95', format: 'unidad', price: 'desde $390' },
  { cat: 'curaciones', name: 'Venda elástica 10 cm', format: 'unidad', price: 'desde $890' },
  { cat: 'curaciones', name: 'Parches curitas surtidos', format: 'caja × 100', price: 'desde $1.990' },
  { cat: 'equipos', name: 'Termómetro digital', format: 'unidad', price: 'desde $3.490' },
  { cat: 'equipos', name: 'Baumanómetro aneroide', format: 'unidad', price: 'desde $19.990' },
]

/**
 * app/demos/alcatorce/content.ts
 *
 * Datos REALES verificados en Google Maps (sept 2026): nombre, dirección
 * (O'Higgins 241, piso 14, Concepción), teléfono fijo, horario
 * (lun-vie 13:00-01:00, sábado y domingo cerrado), rating 4,6 con
 * 1.125 reseñas. Precios leídos de la carta física fotografiada en el
 * local. Las reseñas citadas son reales de su ficha de Google.
 */

export const BIZ = {
  name: 'Alcatorce Restaurant',
  short: 'Alcatorce',
  brand: 'G14',
  rubro: 'Restaurante panorámico',
  tag: 'Fusión gastronómica',
  address: "Libertador Gral. Bernardo O'Higgins 241, piso 14",
  addressShort: "O'Higgins 241 · Piso 14",
  city: 'Concepción',
  region: 'Región del Bío Bío',
  phoneDisplay: '+56 41 269 9486',
  phoneTel: '+56412699486',
  rating: 4.6,
  ratingDisplay: '4,6',
  reviews: '1.125',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Alcatorce Restaurant, O’Higgins 241, Concepción, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Alcatorce Restaurant, O’Higgins 241, Concepción, Chile',
)}&output=embed`

export const IMG = '/demos/alcatorce'

/** Horario real según su ficha de Google: solo entre semana. */
export const HOURS = [
  { d: 'Lunes a viernes', h: '13:00 a 01:00' },
  { d: 'Sábado', h: 'Cerrado' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/** Precios reales, leídos de la carta física del local (foto en su ficha). */
export const MENU = {
  carnes: [
    { name: 'Lomo liso a la plancha', price: '$14.990' },
    { name: 'Lomo liso a lo pobre', price: '$16.990' },
    { name: 'Lomo liso Quijote (crema, cebolla, tocino)', price: '$16.500' },
    { name: 'Mini lomo liso Dulcinea (demiglace, risotto)', price: '$13.990' },
    { name: 'Lomo vetado a la plancha', price: '$16.150' },
    { name: 'Filete a lo pobre', price: '$17.990' },
    { name: 'Filete light (lechuga, palta, tomate, choclo)', price: '$18.990' },
  ],
  milanesas: [
    { name: 'Milanesa de lomo con agregado', price: '$11.500' },
    { name: 'Milanesa a lo pobre', price: '$13.250' },
    { name: 'Milanesa Gringa (bbq, cheddar, tocino)', price: '$13.750' },
    { name: 'Milanesa Napolitana', price: '$14.990' },
  ],
  postres: [
    { name: 'Dulce Patria (chocolate y merquén)', price: '$3.900' },
    { name: 'Noche de San Juan (parfait de yerba mate)', price: '$3.900' },
    { name: 'Nido Dorado (crema de whisky, maracuyá)', price: '$3.900' },
    { name: 'Pajaritos en Carménère', price: '$3.900' },
    { name: 'Magdalena Toronja', price: '$3.900' },
    { name: 'Tiramisú del Bío Bío', price: '$3.900' },
    { name: 'Copa de helado', price: '$3.200' },
  ],
} as const

/** Citas textuales de su ficha de Google (reseñas reales). */
export const REVIEWS = [
  {
    text: 'Me gustó tanto que volví al día siguiente. La comida super rica, buenos precios y vinos. La vista a Concepción es preciosa. Recomendado 100%',
    name: 'Danyla Carrasco',
  },
  {
    text: 'Hermoso lugar y precios accesibles, ideal para celebrar fechas importantes con buena comida. Gran vista a Concepción de la terraza en piso 14.',
    name: 'Esteban R. Valdebenito Kelly',
  },
  {
    text: 'Una linda vista. Los platos bien preparados, los sabores equilibrados. La decoración bastante buena. Atención amable.',
    name: 'Katherine M. O.',
  },
] as const

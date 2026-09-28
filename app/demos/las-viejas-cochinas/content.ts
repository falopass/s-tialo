/**
 * app/demos/las-viejas-cochinas/content.ts
 *
 * Datos verificados en la ficha pública del restaurante:
 * - Google Maps: nombre, dirección en Rivera poniente - Av. Río Claro,
 *   teléfono fijo (71) 222 1749 (solo llamadas; no publican WhatsApp),
 *   4,1 estrellas con 5.687 reseñas, "$10.000–15.000 por persona"
 *   (206 personas), horario 12:00–19:30, comer allí / para llevar.
 * - Listado de precios: foto del papelón publicada por el restaurante
 *   en su ficha de Google (abril 2024); puede variar.
 * - Reseñas: citas textuales de la ficha de Google (en español).
 * - Historia y premio: prensa regional (Cabaña El Turismo 1975,
 *   "Chelita del Río"; chancho en piedra n.º 1 de TasteAtlas 2023).
 */

export const BIZ = {
  name: 'Las Viejas Cochinas',
  rubro: 'Picá chilena',
  address: 'Rivera poniente - Av. Río Claro s/n',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 222 1749',
  phoneTel: '+56712221749',
  rating: 4.1,
  reviews: 5687,
  fundado: 1975,
  porPersona: '$10.000 a $15.000 por persona',
  horario: 'Todos los días de 12:00 a 19:30',
  facebook: 'https://www.facebook.com/pages/category/Restaurant/Las-viejas-cochinas-105557124423869/',
} as const

// El restaurante solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Las Viejas Cochinas, Av. Río Claro, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Las Viejas Cochinas, Rivera poniente Av. Río Claro, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/las-viejas-cochinas'

/** Papelón de precios publicado por el restaurante (abril 2024). */
export const CARTA: { grupo: string; nota?: string; items: { n: string; p: string }[] }[] = [
  {
    grupo: 'Pollos c/agregado',
    nota: 'Medio pollo: mariscal $10.000, los demás $9.000',
    items: [
      { n: 'Pollo mariscal', p: '$20.000' },
      { n: 'Pollo al jugo', p: '$18.000' },
      { n: 'Pollo al coñac', p: '$18.000' },
      { n: 'Pollo arvejado', p: '$18.000' },
      { n: 'Pollo asado', p: '$18.000' },
      { n: 'Pollo frito', p: '$18.000' },
    ],
  },
  {
    grupo: 'Carnes',
    items: [
      { n: 'Filete a lo pobre', p: '$16.000' },
      { n: 'Lomo a lo pobre', p: '$11.000' },
      { n: 'Plateada a lo pobre', p: '$9.000' },
      { n: 'Bistec a lo pobre', p: '$6.000' },
      { n: 'Chuleta a lo pobre', p: '$6.000' },
      { n: 'Churrasco al plato a lo pobre', p: '$4.500' },
    ],
  },
  {
    grupo: 'Para la mesa',
    nota: 'Pichanga: palta, tomate, aceituna, cilantro, huevo, plateada, cecina y queso',
    items: [
      { n: 'Pichanga chica', p: '$3.000' },
      { n: 'Pichanga mediana', p: '$6.000' },
      { n: 'Pichanga grande', p: '$12.000' },
      { n: 'Consomé de pollo', p: '$1.000' },
      { n: 'Sopaipilla', p: '$400' },
      { n: 'Empanada de queso camarón', p: '$1.000' },
    ],
  },
  {
    grupo: 'Pescados y pechugas',
    nota: 'Pechugas c/agregado: a lo pobre o mariscal $7.000, otras $6.000',
    items: [
      { n: 'Caldillo de congrio', p: '$10.000' },
      { n: 'Pechuga a lo pobre', p: '$7.000' },
      { n: 'Pechuga mariscal', p: '$7.000' },
      { n: 'Pechuga a la plancha', p: '$6.000' },
    ],
  },
  {
    grupo: 'Niños y sandwiches',
    items: [
      { n: 'Menú niños', p: '$3.000 a $3.500' },
      { n: 'Salchipapas chica', p: '$2.000' },
      { n: 'Salchipapas grande', p: '$6.000' },
      { n: 'Sandwiches', p: '$3.300 a $4.500' },
      { n: 'Sandwich plateada italiana', p: '$7.000' },
    ],
  },
]

/** Los platos que más nombra la gente en las reseñas de Google. */
export const MAS_PEDIDOS = [
  { n: 'Chancho en piedra', p: 'para la mesa', d: '159 menciones en reseñas' },
  { n: 'Sopaipillas', p: '$400', d: '118 menciones en reseñas' },
  { n: 'Pollo mariscal entero', p: '$20.000', d: '103 menciones en reseñas' },
]

export const RESENAS = [
  {
    nombre: 'Rubén Sothers Malebrán',
    cuando: 'hace 3 meses',
    texto:
      'Un lugar sencillo y acogedor, con lo mejor de la comida chilena: pruebe la deliciosa plateada al jugo y el chancho en piedra servido en el mismísimo mortero de piedra. Los precios son accesibles y la atención es cordial y amable.',
  },
  {
    nombre: 'Daniella Villanueva',
    cuando: 'hace 3 meses',
    texto:
      'Todo rico, abundante y fresco. La atención excelente y muy rápida a pesar de que el local estaba con mucha gente. Pedimos salmón con papas fritas y pollo mariscal con sus ricas sopaipillas y chancho en piedra.',
  },
  {
    nombre: 'Felipe Castillo San Martin',
    cuando: 'hace 6 meses',
    texto:
      'Las viejas cochinas son simplemente EL lugar de Talca para comer verdadera comida chilena. Es muy común ver mesas pidiendo una cazuela familiar, una coca cola grande, sopaipillas y chancho en piedra para la mesa.',
  },
]

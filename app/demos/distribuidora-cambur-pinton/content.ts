/**
 * app/demos/distribuidora-cambur-pinton/content.ts
 *
 * Datos del mockup. REALES (verificados el 9-11-2026 en la ficha de
 * Google Maps del negocio, su logo y su local):
 * - Nombre: Distribuidora Cambur Pintón, tienda y distribuidora de
 *   productos venezolanos en Puerto Montt.
 * - Dirección principal: Arquen 5091, Puerto Montt (57 opiniones en
 *   Maps). Maps muestra otro punto en Copiapó 40 con el mismo
 *   teléfono; se menciona sin horario porque no tiene uno publicado.
 * - Horario de Arquen 5091 (Maps): lunes a viernes 13:00 a 20:00,
 *   sábado 11:00 a 17:00, domingo cerrado.
 * - WhatsApp +56 9 3006 3048. Google: 4,8 con 57 opiniones; las tres
 *   citas son textuales (Araceli S., Ocias A., Carlos A.).
 * - La frase "No te rindas, sé constante..." está escrita a mano en
 *   la pizarra de su entrada.
 * - Productos que aparecen en sus fotos: harina PAN y productos para
 *   arepas, quesos llaneros, nata y suero, dulces (Samba, Pirulín,
 *   Toronto), malta y bebidas, Diablitos y enlatados.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, nombres de categorías y textos
 * de apoyo. Sin precios ni envíos: el negocio no los publica.
 */

export const BIZ = {
  name: 'Distribuidora Cambur Pintón',
  short: 'Cambur Pintón',
  rubro: 'Tienda de productos venezolanos',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  address: 'Arquen 5091',
  address2: 'Copiapó 40',
  phoneDisplay: '+56 9 3006 3048',
  whatsapp: '56930063048',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: 57,
  horario: [
    { dias: 'Lunes a viernes', horas: '13:00 a 20:00' },
    { dias: 'Sábado', horas: '11:00 a 17:00' },
    { dias: 'Domingo', horas: 'Cerrado' },
  ],
} as const

export const WA_LINK =
  'https://wa.me/56930063048?text=Hola%20Cambur%20Pint%C3%B3n%2C%20quiero%20consultar%20por%20productos'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Distribuidora Cambur Pintón, Arquen 5091, Puerto Montt, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Arquen 5091, Puerto Montt',
)}&output=embed`

export const IMG = '/demos/distribuidora-cambur-pinton'

/** Opiniones textuales de su ficha de Google (4,8 · 57 opiniones). */
export const REVIEWS = [
  {
    text: 'Tienen un montón de productos venezolanos y de verdad que hay muchísima variedad. Además, están súper céntricos, así que es fácil llegar.',
    author: 'Araceli S.',
  },
  {
    text: 'Muy buena atención, panas y atentos. Te traen al sur un gran pedacito de los sabores de Venezuela.',
    author: 'Ocias A.',
  },
  {
    text: 'Es el mejor lugar en el sur de Chile para conseguir los más ricos sabores del paladar venezolano... son lo mejor, 100% recomendados.',
    author: 'Carlos A.',
  },
] as const

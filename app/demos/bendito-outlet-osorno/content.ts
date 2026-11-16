/**
 * app/demos/bendito-outlet-osorno/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps e Instagram del negocio,
 * 16-11-2026): nombre "Bendito Outlet", dirección El Alba 1450, Osorno
 * (según su propia bio; Maps dice 1451 y se usa la de la bio), WhatsApp
 * +56 9 9248 4396, las banderas de su bio entendidas como el origen de las
 * prendas ("Moda de Italia, China, España y Chile") y las tres citas de
 * opiniones de Google, textuales. Sin horario: Maps e Instagram no
 * coinciden, así que se invita a consultarlo por WhatsApp. Sin rating ni
 * estrellas. Los nombres de las prendas describen lo que se ve en cada
 * foto. No hay precios, tallas ni medios de pago públicos: no se muestran.
 */

export const BIZ = {
  name: 'Bendito Outlet',
  rubro: 'Tienda de ropa de mujer',
  address: 'El Alba 1450',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 9248 4396',
  whatsapp: '56992484396',
} as const

const wa = (texto: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(texto)}`

export const WA_LINK = wa('Hola Bendito Outlet, quiero consultar por una prenda')

/** Pedido de una prenda del catálogo: el mensaje llega con su nombre. */
export const waPrenda = (nombre: string) =>
  wa(`Hola Bendito Outlet, vi la prenda "${nombre}" en su página y quiero consultar`)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Bendito Outlet, El Alba, Osorno',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Bendito Outlet, El Alba, Osorno',
)}&output=embed`

export const IMG = '/demos/bendito-outlet-osorno'

export interface Prenda {
  img: string
  name: string
  alt: string
}

export const PRENDAS: Prenda[] = [
  {
    img: 'chaqueta-azul',
    name: 'Blazer azul eléctrico',
    alt: 'Blazer azul eléctrico con top rosado y pantalón a juego, colgado en el perchero de Bendito Outlet',
  },
  {
    img: 'azul-marino',
    name: 'Conjunto azul marino',
    alt: 'Blazer azul marino con top rosado y pantalón azul marino con cordón',
  },
  {
    img: 'camel',
    name: 'Conjunto camel',
    alt: 'Blazer camel con top blanco y pantalón camel con cinturón',
  },
  {
    img: 'naranja',
    name: 'Conjunto naranja',
    alt: 'Blazer naranja con pantalón estampado camuflado en tonos naranja',
  },
  {
    img: 'rojo-corazones',
    name: 'Polera roja de corazones',
    alt: 'Polera roja tejida con corazones y pantalón rojo',
  },
  {
    img: 'verde-salvia',
    name: 'Conjunto verde salvia',
    alt: 'Blazer verde salvia con top amarillo y pantalón verde',
  },
  {
    img: 'negro-amarillo',
    name: 'Conjunto negro y amarillo',
    alt: 'Blazer negro con top amarillo y pantalón negro',
  },
  {
    img: 'blusa-rosa',
    name: 'Blusa fucsia',
    alt: 'Blusa fucsia abotonada con pantalón rojo en el perchero',
  },
  {
    img: 'pantalon-blanco',
    name: 'Pantalón blanco',
    alt: 'Pantalón blanco con cordón y parche de leopardo',
  },
  {
    img: 'chaquetas',
    name: 'Chaquetas con capucha',
    alt: 'Tres chaquetas con capucha colgadas: una beige estampada, una verde y una rosada',
  },
]

export const REVIEWS = [
  {
    name: 'Marcela Andrea Aedo Soto',
    text: 'Hermosa ropa. Atención de primer nivel. Ubicado en un sector tranquilo y seguro.',
  },
  {
    name: 'Alicia Gonzalez',
    text: 'Muy bello y encuentras ropita de Primera siempre hay ofertas muy muy recomendable',
  },
  {
    name: 'Irene Cordero',
    text: 'Genial, te atienden de maravilla, y te vas feliz!',
  },
] as const

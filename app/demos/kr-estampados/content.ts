/**
 * app/demos/kr-estampados/content.ts
 *
 * Datos del mockup. REALES: ficha de Google Maps ("KR Estampados",
 * servicio de estampado en relieve, 5 Oriente 457, Talca; teléfono
 * +56 9 8582 0059; rating 4,8 con 32 opiniones; abre 9:00) y su
 * Instagram @estampados.talca ("KR ESTAMPADOS · compromiso y calidad",
 * venta y estampado de poleras, polerones, gorros, tazas, chapitas y
 * banderas; trabajo para clubes, pymes y ferias). Las reseñas citadas
 * son textos reales de Google.
 */

export const BIZ = {
  name: 'KR Estampados',
  rubro: 'Estampado personalizado',
  slogan: 'Compromiso y calidad',
  address: '5 Oriente 457',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8582 0059',
  phoneTel: '+56985820059',
  whatsapp: '56985820059',
  rating: 4.8,
  ratingLabel: '4,8',
  reviews: 32,
  instagram: 'https://www.instagram.com/estampados.talca/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola KR, quiero cotizar un estampado',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'KR Estampados, 5 Oriente 457, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'KR Estampados, 5 Oriente 457, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/kr-estampados'

/** Catálogo confirmado por sus publicaciones reales */
export const CATALOGO = [
  {
    sku: 'KR-01',
    nombre: 'Poleras',
    detalle: 'Tu diseño o tu logo, desde una unidad. Colores y tallas a elección.',
    src: `${IMG}/p12.webp`,
    alt: 'Poleras blanca y negra estampadas con "Tu diseño" y "Tu logo"',
  },
  {
    sku: 'KR-02',
    nombre: 'Polerones',
    detalle: 'Con capucha o sin ella, para ti, tu equipo o tu marca.',
    src: `${IMG}/p13.webp`,
    alt: 'Polerones negros personalizados con diseño propio',
  },
  {
    sku: 'KR-03',
    nombre: 'Gorros y gorras',
    detalle: 'Trucker, snapback y jockey. El favorito de clubes y bandas.',
    src: `${IMG}/p11.webp`,
    alt: 'Gorras trucker de varios colores estampadas',
  },
  {
    sku: 'KR-04',
    nombre: 'Banderas',
    detalle: 'Banderas impresas para eventos, hinchadas y cicleadas.',
    src: `${IMG}/p17.webp`,
    alt: 'Banderas impresas para un evento ciclista de Talca',
  },
  {
    sku: 'KR-05',
    nombre: 'Chapitas y más',
    detalle: 'Chapitas por docena o por cientos, tazas, lápices y stickers.',
    src: `${IMG}/p15.webp`,
    alt: 'Gorras estampadas de varios colores sobre la mesa de trabajo',
  },
] as const

/** Trabajos reales publicados por ellos */
export const TRABAJOS = [
  {
    src: `${IMG}/p16.webp`,
    alt: 'Gorras del sello Voces del Barrio estampadas por KR',
    cliente: 'Voces del Barrio',
    que: 'Gorras por serie',
  },
  {
    src: `${IMG}/p20.webp`,
    alt: 'Gorra y polera estampadas para Alcadron Agro con tarjeta de KR Estampados',
    cliente: 'Alcadron Agro',
    que: 'Kit empresa',
  },
  {
    src: `${IMG}/p19.webp`,
    alt: 'Polera roja con escudo institucional estampado',
    cliente: 'Clubes y colegios',
    que: 'Insignias',
  },
  {
    src: `${IMG}/p22.webp`,
    alt: 'Gorra blanca y verde con logo de Robotic Thunder',
    cliente: 'Robotic Thunder',
    que: 'Merch de equipo',
  },
] as const

export const PROCESO = [
  {
    paso: '01',
    nombre: 'Mandas tu idea',
    detalle: 'Un logo, una frase o un boceto por WhatsApp. Te asesoran con la mejor opción para tu diseño.',
  },
  {
    paso: '02',
    nombre: 'Cotizas al tiro',
    detalle: 'Precio claro según prenda, cantidad y técnica. Desde una unidad o por cientos.',
  },
  {
    paso: '03',
    nombre: 'Listo en dos días',
    detalle: 'Clientes cuentan que sus encargos quedaron listos en dos días. Retiras en 5 Oriente o coordinas.',
  },
] as const

/** Reseñas reales de Google */
export const RESENAS = [
  {
    nombre: 'Gissela Ríos',
    texto:
      'Encargué una polera estampada y la relación precio/calidad está muy buena; además brindan una buena atención y el trabajo estuvo listo en dos días.',
    hace: 'hace 2 años',
    estrellas: 5,
  },
  {
    nombre: 'Victoria Villagrán',
    texto:
      'La atención rápida y eficiente. El resultado de mi pedido fue genial, trabajan con materiales de calidad, el estampado es excelente y los precios son accesibles.',
    hace: 'hace 5 años',
    estrellas: 5,
  },
  {
    nombre: 'Aquiles Cereceda',
    texto:
      'Excelente servicio y calidad. Muy buenos precios para las pymes como yo que nos cuesta partir; se valora el trato personalizado.',
    hace: 'hace 3 años',
    estrellas: 5,
  },
  {
    nombre: 'Koral Castro',
    texto:
      'Realmente agradecida por su servicio y calidad, mi polerón quedó espectacular y de muy buena calidad. Muy buena atención y asesoría, recomendables 100%.',
    hace: 'hace 7 años',
    estrellas: 5,
  },
] as const

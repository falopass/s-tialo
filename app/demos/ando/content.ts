/**
 * app/demos/ando/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: "Andö", restaurante en Av. España 109,
 *   Curicó; rating 4,5; teléfono fijo (75) 226 0804; la ficha ofrece
 *   «Pedir en línea». El encargo llegó como «Ando»: es esta ficha.
 * - Facebook @ando.nikkeichifa («Andö Curicó»): 6.574 seguidores,
 *   «Restaurante de Comida Fusión» — la misma dirección y teléfono.
 * - Cocina nikkei/chifa (fusión peruano-japonesa): lo dicen su pizarra
 *   mural («nikkei o el arte de hacer más con menos»), sus afiches de
 *   buffet de comida peruana y el directorio Ruta del Vino de Curicó.
 * - Carta QR real publicada por ellos: ando-nikkei.qrfour.com
 *   (Tiradito Nikkei, Korokkes Nikkei, Causa Nikkei, ceviches, tablas).
 * - Precios verificados en sus propios afiches de Facebook: buffet de
 *   comida peruana $25.000 adulto y «palitos libres» $18.000 miércoles.
 *   Fechas/promos son las publicadas por la casa, no vigencia garantizada.
 * - Direcciones antiguas (Francisco Moreno 470, Manso de Velasco 462)
 *   aparecen en directorios viejos con el mismo teléfono: el local se
 *   mudó a Av. España 109.
 * - Fotos: interior y platos de su ficha de Maps + afiches y platos de
 *   su Facebook. Logo: el isotipo redondo y el wordmark «andö nikkei +
 *   chifa» que ellos publican.
 * - Sin WhatsApp publicado: el CTA es llamada + carta QR.
 */

export const BIZ = {
  name: 'Andö',
  short: 'Andö',
  rubro: 'Restaurante nikkei + chifa',
  address: 'Av. España 109',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '(75) 226 0804',
  phoneTel: '+56752260804',
  rating: '4,5',
  facebook: 'https://www.facebook.com/ando.nikkeichifa/',
  cartaQr: 'https://ando-nikkei.qrfour.com/app/menu/MTYw/NDI2',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Andö, Av. España 109, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Andö, Av. España 109, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/ando'

export const CARTA = [
  {
    n: '01',
    name: 'Tiradito nikkei',
    desc: 'Finas láminas de pescado blanco en salsa nikkei — el plato que abre su carta QR.',
    tag: 'de la carta',
  },
  {
    n: '02',
    name: 'Ceviche clásico estilo Andö',
    desc: 'El ceviche que nombran en las reseñas, con el pulso peruano de la casa.',
    tag: 'de la carta',
  },
  {
    n: '03',
    name: 'Sushi y tablas estilo Andö',
    desc: 'Barra de sushi y tablas para compartir — la mitad japonesa del lema «nikkei + chifa».',
    tag: 'de la carta',
  },
  {
    n: '04',
    name: 'Buffet de comida peruana',
    desc: 'Promo publicada por ellos: $25.000 adulto. Fechas y vigencia las confirma la casa.',
    tag: '$25.000 · afiche real',
  },
] as const

export const AFICHES = [
  {
    src: `${IMG}/afiche-apertura.webp`,
    alt: 'Afiche real de apertura de Andö con sushi y ceviche nikkei',
    cap: 'Su afiche de apertura',
  },
  {
    src: `${IMG}/afiche-palitos.webp`,
    alt: 'Afiche real de Andö: palitos libres de sushi los miércoles a $18.000',
    cap: 'Palitos libres $18.000',
  },
  {
    src: `${IMG}/afiche-buffet.webp`,
    alt: 'Afiche real de Andö: buffet de comida peruana a $25.000 por adulto',
    cap: 'Buffet peruano $25.000',
  },
] as const

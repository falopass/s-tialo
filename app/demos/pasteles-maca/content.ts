/**
 * app/demos/pasteles-maca/content.ts
 *
 * Datos REALES verificados:
 * - Sitio oficial: https://www.pastelesmaca.cl — "Pasteles Maca", repostería
 *   y servicio de eventos de Macarena Araya (firma del sitio: "Macarena Araya,
 *   2022"). Atiende por pedido en Talca, Maule y Colín, Región del Maule.
 * - Contacto publicado en el sitio: WhatsApp +56 9 9700 2029
 *   (wa.me/56997002029), Instagram @pasteles.maca, correo protegido.
 * - Carta, precios y condiciones tomados textualmente de su sitio:
 *   tortas con 4 días de anticipación, otros productos 3 días, eventos
 *   mínimo 2 semanas. Reparto $3.000 dentro de Talca, Maule y Colín;
 *   gratis sobre $15.000.
 * - Fotos y logo: descargados del propio sitio pastelesmaca.cl
 *   (img/full e img/fix) — fotos reales de sus productos y montajes de
 *   eventos. Logo acuarela "Catering & Bakery · Maca Araya · Talca-Chile".
 * - Sin ficha propia en Google Maps (negocio por pedidos, sin local al
 *   público): el mapa muestra la zona de reparto declarada por ellos.
 */

export const BIZ = {
  name: 'Pasteles Maca',
  lema: 'Catering & Bakery',
  duena: 'Macarena Araya',
  rubro: 'Repostería y servicio de eventos por pedido',
  zona: ['Talca', 'Maule', 'Colín'],
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9700 2029',
  whatsapp: '56997002029',
  instagram: 'pasteles.maca',
  instagramUrl: 'https://instagram.com/pasteles.maca',
  sitio: 'pastelesmaca.cl',
  sitioUrl: 'https://www.pastelesmaca.cl/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Maca, vi tu página y quiero hacer un pedido',
)}`

export const WA_LINK_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Maca, quiero cotizar un evento (recepción, bautizo, matrimonio o cumpleaños)',
)}`

// Mapa de la zona de reparto declarada por el negocio (no tiene local al
// público — trabaja por pedido con entrega a domicilio).
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Talca Región del Maule Chile',
)}&output=embed`

export const IMG = '/demos/pasteles-maca'

// Precios publicados textualmente en pastelesmaca.cl ("Dulces tentaciones").
export const PRECIOS = [
  { item: 'Caja de bombones rellenos · 6 unidades', precio: '$ 2.500' },
  { item: 'Caja de bombones rellenos · 12 unidades', precio: '$ 4.500' },
  { item: 'Caja mixta · 30 unidades', precio: '$ 15.000' },
  { item: 'Caja mixta · 60 unidades', precio: '$ 30.000' },
  { item: 'Torta bizcocho manjar nuez · 15 personas', precio: '$ 15.000' },
  { item: 'Torta panqueque chocolate · 15 personas', precio: '$ 18.000' },
] as const

// Carta real del sitio, resumida por categorías tal como la publica.
export const CARTA = [
  {
    titulo: 'Tortas y pasteles',
    items: [
      'Panqueque naranja, chocolate o manjar nuez',
      'Selva negra · Trasnochada · Arcoiris',
      'Merengue frambuesa o frutilla',
      'Bizcocho con relleno a elección',
      'Mil hojas · De yogurt',
      'Cheesecake de frambuesa',
      'Strudel de manzana',
    ],
  },
  {
    titulo: 'Dulces chilenos',
    items: [
      'Repollitos con crema pastelera o manjar',
      'Merenguitos rellenos de manjar y coco',
      'Empolvados · Calzones rotos',
      'Berlines con crema pastelera o manjar',
      'Alfajores de hojas rellenos de manjar',
    ],
  },
  {
    titulo: 'Vasitos',
    items: [
      'Suspiro limeño · Tiramizú',
      'Arroz con leche · Leche asada · Sémola con leche',
      'Mousse de frambuesa, maracuyá, manjar y chocolate',
      'Creme brulee · Tres leches · Flan',
      'Cremoso de chocolate y menta o frutos de bosque',
    ],
  },
  {
    titulo: 'Otros dulces',
    items: [
      'Macarrones · Brownie con ganache',
      'Mini tartaletas de pie de limón o manzana caramelizada',
      'Alfajores de chocolate o de maicena',
      'Kuchen de manzana o de piña',
      'Bombones, cocadas, marroc y turrón de chocolate',
    ],
  },
] as const

// Qué puede incluir un evento — lista textual del sitio.
export const EVENTO_INCLUYE = [
  'Garzones',
  'Cocina',
  'Mantelería',
  'Vajilla',
  'Sillas y mesones',
  'Decoración',
  'Menú a elección',
] as const

// Condiciones de pedido publicadas en el sitio.
export const CONDICIONES = [
  { k: 'Tortas', v: 'Pedir con 4 días de anticipación' },
  { k: 'Otros productos', v: 'Pedir con 3 días de anticipación' },
  { k: 'Eventos', v: 'Cotizar con mínimo 2 semanas' },
  { k: 'Reparto', v: '$ 3.000 en Talca, Maule y Colín' },
  { k: 'Sobre $ 15.000', v: 'Despacho sin costo en esas comunas' },
] as const

/**
 * content.ts — Taller de Muñecas de Origen Rural (Laura Ramos, Pepona del Maule)
 *
 * Datos verificados (2026-09-28):
 * - Ficha de Google Maps "Taller de Muñecas de Origen Rural", categoría Casa rural:
 *   Itahue, Molina, Maule — tel. +56 9 6581 0243 — plus code VJ8V+P2.
 *   Sin reseñas ni rating público en la ficha.
 * - INDAP (03-08-2015): "Pepona del Maule es el primer juguete acreditado con sello
 *   Manos Campesinas" — Laura Ramos, diseñadora y artesana de Itahue (Molina);
 *   muñeca en telar con lana de oveja; diseño (UTEM), ex-display Falabella;
 *   4–8 muñecas semanales; lana que le regalan vecinos ganaderos; la lava, peina
 *   y tiñe con colores vegetales y carmín de cochinilla; ropa cambiable y lavable;
 *   versión masculina ("la parejita"); ovejas, burros, vacas y caballos para
 *   pesebres; venta en local de artesanías de Talca, ferias y pedido telefónico
 *   6581 0243 (calza con Maps). Sin sitio web ni redes sociales.
 * - Ministerio de las Culturas (2012): "Muñeca de origen rural" obtuvo el
 *   Reconocimiento de Excelencia UNESCO Mercosur en Uruguay.
 * - Atentos.cl (02-07-2019): catálogo ampliado — muñecas y muñecos, ovejas,
 *   conejos, ratones, zorro, pudú y puma, títeres y marionetas; teñidos
 *   naturales, productos biodegradables.
 * - Fotos: ficha de Maps + INDAP + Atentos.cl (prensa oficial del negocio).
 *   La pyme no tiene logo ni redes; marca = Pepona del Maule.
 */

export const BIZ = {
  name: 'Taller de Muñecas de Origen Rural',
  short: 'Muñecas de Origen Rural',
  artesana: 'Laura Ramos',
  producto: 'Pepona del Maule',
  rubro: 'Artesanía en telar',
  city: 'Itahue, Molina',
  region: 'Región del Maule',
  address: 'Itahue, Molina, Maule',
  phone: '+56 9 6581 0243',
  phoneIntl: '56965810243',
}

export const MAPS_URL =
  'https://www.google.com/maps/place/Taller+de+Mu%C3%B1ecas+de+Origen+Rural/@-35.133139,-71.3574688,15z/data=!4m6!3m5!1s0x966452c80da5cc31:0x31a233a59edae7fb!8m2!3d-35.133139!4d-71.3574688'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Taller+de+Mu%C3%B1ecas+de+Origen+Rural,+Itahue,+Molina&z=14&output=embed'

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.phoneIntl}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola Laura, vi el sitio del Taller de Muñecas de Origen Rural y quiero encargar una pepona.',
)

export const IMG = '/demos/taller-de-munecas-de-origen-rural'

/** Catálogo confirmado por INDAP (2015) y Atentos (2019). */
export const CATALOGO = [
  {
    title: 'La Pepona',
    desc: 'La original: muñeca tejida en telar con lana de oveja, de trazos simples como los dibujos de los niños. Ropa intercambiable y lavable.',
    tag: 'La insignia',
  },
  {
    title: 'La parejita',
    desc: 'La versión masculina para quien quiera el par: el muñeco a juego, mismo telar y misma lana.',
    tag: 'El compañero',
  },
  {
    title: 'Animales del pesebre',
    desc: 'Ovejas, burros, vacas y caballos tejidos para los nacimientos de Navidad.',
    tag: 'Navidad',
  },
  {
    title: 'Fauna chilena',
    desc: 'Zorro, pudú, puma, conejo y ratón de campo, más el loro tricahue de la precordillera maulina.',
    tag: 'Del territorio',
  },
  {
    title: 'Títeres y marionetas',
    desc: 'Personajes para el teatro de mano, parte del catálogo renovado del taller.',
    tag: 'Para contar cuentos',
  },
] as const

/** Proceso descrito por Laura Ramos a INDAP. */
export const PROCESO = [
  {
    t: 'La lana llega de los vecinos',
    d: 'Pequeños ganaderos de Itahue y alrededores le regalan la lana de sus ovejas. Es la materia prima del taller.',
  },
  {
    t: 'Lavada, peinada y teñida',
    d: 'Ella misma lava y peina el vellón y lo tiñe con colores vegetales y carmín de cochinilla, colorante natural de la zona.',
  },
  {
    t: 'Al telar',
    d: 'Teje cada pieza combinando técnicas para variar las texturas: un cuerpo, una cabeza redonda, dos puntos de ojos y una sonrisa.',
  },
  {
    t: 'De a cuatro a ocho por semana',
    d: 'Cuando el trabajo apura, la ayudan su hermana y su mamá. Cada muñeca sale distinta: ninguna se repite.',
  },
] as const

export const SELLOS = [
  {
    titulo: 'Reconocimiento de Excelencia UNESCO',
    detalle: 'Por la "Muñeca de origen rural", premiada en Uruguay para los productos artesanales del Mercosur.',
    anio: '2012',
  },
  {
    titulo: 'Sello de Excelencia Artesanía Chile',
    detalle: 'Consejo de la Cultura y UNESCO: calidad, identidad, innovación y respeto por el medioambiente.',
    anio: '2012',
  },
  {
    titulo: 'Primer juguete Manos Campesinas',
    detalle: 'La Pepona del Maule fue el primer juguete rural acreditado con el sello de INDAP.',
    anio: '2015',
  },
] as const

export const COMPRA = [
  'Por pedido telefónico o WhatsApp, directo al taller',
  'En el local de artesanías que la representa en Talca',
  'En las ferias y muestras de artesanía a las que la invitan',
] as const

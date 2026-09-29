/**
 * app/demos/gacitua-producciones-eventos-y-arrie/content.ts
 *
 * Datos REALES verificados el 2026-09-28:
 * - Ficha de Google Maps "Gacitua Producciones Eventos y arriendo de
 *   vajilla": WhatsApp +56 9 5908 8421, dirección Pje. 7 Pte. 01190
 *   (sector 5 Norte), Talca; nota 5,0 con 28 opiniones; categoría
 *   "party planner".
 * - Artículo de Talca Digital (may-2025, campaña Prefiero el Maule):
 *   empresa de banquetería de Maule Norte que renace con el legado de
 *   Don Juan Gacitúa; la manejan Gabriela y Francisco (mencionados en
 *   reseñas); Instagram @gacituaproduccionesyeventos ("Entre Platos &
 *   Momentos").
 * - Reseñas citadas: textos reales de la ficha (nombre + antigüedad).
 * - Fotos: bajadas de la ficha de Maps (gps-cs) e Instagram
 *   @gacituaproduccionesyeventos. Logo: avatar oficial de la ficha
 *   (monograma G/Z con "GACITUA PRODUCCIONES & EVENTOS").
 * - La ficha no publica horario ni tarifas: el demo invita a cotizar
 *   por WhatsApp.
 */

export const BIZ = {
  name: 'Gacitúa Producciones y Eventos',
  short: 'Gacitúa',
  rubro: 'Banquetería, producción de eventos y arriendo de vajilla',
  address: 'Pasaje 7 Poniente 01190',
  addressExtra: 'sector 5 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5908 8421',
  whatsapp: '56959088421',
  instagram: 'gacituaproduccionesyeventos',
  igName: 'Entre Platos & Momentos',
  rating: '5,0',
  reviews: 28,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Gacitúa Producciones y quiero cotizar mi evento',
)}`

export const IG_LINK = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Gacitua Producciones Eventos y arriendo de vajilla, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Gacitua Producciones Eventos y arriendo de vajilla, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/gacitua-producciones-eventos-y-arrie'

/** El programa de un evento, tal como corre la mesa. */
export const PROGRAMA = [
  {
    paso: 'El montaje',
    texto:
      'Mesas vestidas, vajilla propia y decoración lista antes de que llegue el primer invitado. La puesta en escena también la hacen ellos.',
    foto: 'mesa-interior',
    alt: 'Mesa de evento montada por Gacitúa con loza dorada, copas y centro floral',
  },
  {
    paso: 'El cóctel',
    texto:
      'Canapés y bocaditos que circulan desde el comienzo: presentación cuidada y abundancia, lo que más agradecen los invitados.',
    foto: 'canapes',
    alt: 'Tabla de canapés y bocaditos de la banquetería Gacitúa',
  },
  {
    paso: 'El banquete',
    texto:
      'Platos servidos a la mesa o buffet con cocineros dedicados — materia prima de calidad, buen sabor y porciones contundentes.',
    foto: 'plato',
    alt: 'Plato de fondo servido en un evento de Gacitúa Producciones',
  },
  {
    paso: 'La mesa dulce',
    texto:
      'Mesa de postres y dulces montada como parte del decorado: el cierre que más se fotografía.',
    foto: 'mesa-dulce',
    alt: 'Mesa dulce con postres y decoración de Gacitúa',
  },
  {
    paso: 'La barra',
    texto:
      'Estación de tragos y barra montada para la fiesta, con luces y mobiliario propio.',
    foto: 'bar-noche',
    alt: 'Barra de tragos iluminada en la noche de un evento de Gacitúa',
  },
] as const

/** Lo que se arrienda y se produce, según su ficha y sus fotos. */
export const SERVICIOS = [
  'Banquetería completa para matrimonios y eventos',
  'Arriendo de vajilla, loza y cristalería',
  'Arriendo de mesas, sillas y mantelería',
  'Montaje y decoración del lugar',
  'Barra y estación de cócteles',
  'Buffet, cóctel y coffee break',
] as const

/** Reseñas reales de la ficha de Google (nombre + antigüedad). */
export const RESENAS = [
  {
    texto:
      'Banquetera 1000% recomendada. Atentos a cada detalle para que salga todo a la perfección y para el disfrute de cada comensal; siempre trabajando con materia prima de la mejor calidad y con cocineros dedicados. Y los dueños, siempre siendo los mejores anfitriones.',
    autor: 'Rodrigo Carreño Morales',
    detalle: 'hace 8 meses',
  },
  {
    texto:
      '1000% recomendable: agradezco el compromiso con mi matrimonio, su puntualidad, muy rica la comida y en gran cantidad. Francisco y Gabriela son un amor. Sin duda si vuelvo a realizar otro evento los contrataré nuevamente.',
    autor: 'Priscilla Rojas',
    detalle: 'hace 7 meses',
  },
  {
    texto:
      'Un servicio excelente, profesionalismo, oficio y cariño… y se nota. Se ve que les gusta lo que entregan, recomendable un 100%, nuestro almuerzo de fin de año fue maravilloso.',
    autor: 'Humberto Aguirre',
    detalle: 'hace 8 meses',
  },
  {
    texto:
      'Me encantó el servicio: desde el día uno muy confiables y cumplen con la necesidad dependiendo de lo que uno solicite, muy puntuales y amables.',
    autor: 'Javi Castillo Pedrero',
    detalle: 'hace 5 meses',
  },
] as const

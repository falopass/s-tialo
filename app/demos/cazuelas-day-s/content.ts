/**
 * app/demos/cazuelas-day-s/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Cazuelas Day's. (Orilla de Carretera dirección
 *   Sur-Norte)", categoría Restaurante, Ruta 5 Km 328, 3630000 Retiro, Maule.
 *   Rating 4,6 en la ficha en vivo.
 * - Teléfono +56 9 8298 8900 (restaurantess.cl y chilopina.com, ambos lo citan).
 * - Horario: chilopina publica lun–vie 12:00–23:00, sáb 12:00–18:00, dom
 *   cerrado; la ficha de Maps en vivo muestra apertura a las 12:30. Se
 *   presenta como referencial y se pide confirmar por WhatsApp.
 * - Reseñas citadas tal como aparecen públicas en Google (iniciales del autor
 *   según la plataforma que las indexa): I. O., t. j., B. O. R. y S. F.
 * - Fotos: todas reales, publicadas en su ficha de Google Maps
 *   (letrero rojo "DAY'S Cazuelas Km. 328", fachada, interior de madera,
 *   cazuelas, salmón con palta, sándwiches, el dueño atendiendo).
 */

export const BIZ = {
  name: "Cazuelas Day's",
  sign: 'DAY’S Cazuelas · Km 328',
  rubro: 'Restaurante · cocina chilena de carretera',
  address: 'Ruta 5, km 328',
  city: 'Retiro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8298 8900',
  whatsapp: '56982988900',
  rating: '4,6',
  reviews: '130+',
  km: '328',
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Cazuelas+Day%27s/@-36.0483186,-71.7660644,17z/data=!3m1!4b1!4m6!3m5!1s0x966f512ed0ba44dd:0xcaa0e1b1b67ff662!8m2!3d-36.0483186!4d-71.7660644!16s%2Fg%2F11g0lhqrdh',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola, vi la página de Cazuelas Day's y quiero consultar",
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola, voy de paso por la Ruta 5 y quiero avisar que llego a almorzar",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Cazuelas Day's Ruta 5 Km 328 Retiro Maule Chile",
)}&output=embed`

export const IMG = '/demos/cazuelas-day-s'

// Platos visibles en sus fotos reales y nombrados en reseñas de Google.
export const COCINA = [
  {
    img: 'cazuela',
    alt: 'Cazuela servida con zapallo, papa, arroz y arvejas en plato de loza',
    plato: 'La cazuela de la casa',
    detalle: 'El plato que da nombre al local: zapallo, papa y caldo casero.',
  },
  {
    img: 'salmon',
    alt: 'Trozo de salmón con palta en plato de loza artesanal',
    plato: 'Salmón con palta',
    detalle: 'Pescado del día servido simple, como en la casa.',
  },
  {
    img: 'plato',
    alt: 'Bistec con huevo frito y puré junto a un jugo natural',
    plato: 'Almuerzos contundentes',
    detalle: 'El plato completo de la carretera: huevo, carne y puré.',
  },
  {
    img: 'sandwich',
    alt: 'Sándwich casero con carne y palta al medio de la mesa',
    plato: 'Sándwiches',
    detalle: '“El sándwich más rico y fresco”, según una reseña de Google.',
  },
] as const

export const HORARIO = [
  { d: 'Lunes a viernes', h: 'Desde el mediodía' },
  { d: 'Sábado', h: 'Hasta las 18:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

// Citas textuales de reseñas públicas de Google.
export const RESENAS = [
  {
    autor: 'I. O.',
    estrellas: 5,
    texto:
      'Excelente lugar. Las cazuelas son una de las mejores que he probado, buena atención, precios accesibles a camioneros y público en general. Totalmente recomendable.',
  },
  {
    autor: 't. j.',
    estrellas: 5,
    texto:
      'Veniamos desde Temuco y realmente excelente, la cazuela muy rica, lo recomiendo 100%. Y la ensalada, lo mejor.',
  },
  {
    autor: 'B. O. R.',
    estrellas: 5,
    texto: 'Excelente comida, y atendido por su dueño. Se agradece tan buena atención.',
  },
] as const

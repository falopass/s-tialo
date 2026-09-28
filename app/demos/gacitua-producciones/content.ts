/**
 * app/demos/gacitua-producciones/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, 2026-09-28):
 * nombre, dirección, teléfono/WhatsApp, nota y reseñas. Las fotos de
 * /public/demos/gacitua-producciones son las publicadas en la misma ficha.
 * Horario: Maps solo indica que abre a las 9:00; no se publica el detalle.
 * Servicios: los que nombran la ficha ("Eventos y arriendo de vajilla") y
 * sus reseñas (banquetería, matrimonios, almuerzos de empresa).
 */

export const BIZ = {
  name: 'Gacitúa Producciones',
  fullName: 'Gacitúa Producciones · Eventos y arriendo de vajilla',
  short: 'Gacitúa',
  address: 'Pasaje 7 Poniente 01190, Villa Colín Sur',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5908 8421',
  whatsapp: '56959088421',
  rating: 5,
  ratingLabel: '5,0',
  reviews: 28,
} as const

export const IMG = '/demos/gacitua-producciones'

/** Fotos publicadas por el negocio en su ficha de Google Maps. */
export const PHOTOS = {
  hero: { src: `${IMG}/hero.webp`, alt: 'Mesa de madera montada al aire libre con vajilla blanca, copas y centro de flores' },
  cocktail: { src: `${IMG}/mesa-cocktail.webp`, alt: 'Mesa de cóctel con sándwiches, tablas de picoteo y arreglo floral en un evento de campo' },
  salon: { src: `${IMG}/mesa-salon.webp`, alt: 'Mesa de salón con platos de borde dorado, copas de color y camino de mesa verde' },
  pergola: { src: `${IMG}/pergola.webp`, alt: 'Pérgola decorada con telas y flores, sillas transparentes y mesa de ceremonia' },
} as const

export const SERVICES = [
  { name: 'Banquetería', desc: 'Cóctel, almuerzos y cenas para matrimonios, celebraciones familiares y empresas.' },
  { name: 'Arriendo de vajilla', desc: 'Platos, copas, cubiertos y cristalería para montar la mesa completa.' },
  { name: 'Mobiliario y montaje', desc: 'Mesas, sillas y mantelería, con el montaje del espacio incluido.' },
  { name: 'Producción de eventos', desc: 'Coordinación del evento de principio a fin, atentos a cada detalle.' },
] as const

/** Reseñas públicas de la ficha de Google Maps (nombre de pila). */
export const REVIEWS = [
  { text: 'Banquetera 1000% recomendada. Atentos a cada detalle para que salga todo a la perfección y para el disfrute de cada comensal.', author: 'Rodrigo' },
  { text: 'Muy comprometidos en lo que realizan; agradezco el compromiso con mi matrimonio, su puntualidad, muy rica la comida y en gran cantidad.', author: 'Priscilla' },
  { text: 'Un servicio excelente, profesionalismo, oficio y cariño… y se nota. Nuestro almuerzo de fin de año fue maravilloso.', author: 'Humberto' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Gacitúa Producciones y quiero cotizar un evento',
)}`

const MAPS_QUERY = 'Gacitua Producciones Eventos y arriendo de vajilla, Pasaje 7 Poniente 01190, Talca, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`

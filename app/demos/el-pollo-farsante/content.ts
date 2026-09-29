/**
 * app/demos/el-pollo-farsante/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «El Pollo Farsante» (restaurante): Ruta K-31 km 7,5,
 *   Río Claro, Maule (camino a Cumpeo); teléfono +56 9 9795 7024;
 *   nota 4,2 con 130 opiniones.
 * - Instagram @elpollofarsanteoficial (974 seguidores, activo hasta ago-2026)
 *   y Facebook /elpollo.farsante — el restaurante sigue operando.
 * - Historia: el local nació ~2010 cuando el alcalde Claudio Guajardo propuso
 *   convertir Cumpeo en el pueblo temático de Condorito («Ruta de Condorito»,
 *   apoyada por FOSIS/GORE). Dueño: Andrés Silva. El plato insignia es el
 *   «pollo farsante»: pollo asado en horno de barro con mariscos, arroz y
 *   ensaladas (El Amaule, restaurantess.cl, clubderestaurantescmr).
 * - Carta: transcrita de la pizarra impresa del local (foto real de la
 *   ficha): platos a $5.000–$7.700 servir / $5.200–$7.700 llevar; la pizarra
 *   de entrada anuncia «pollo al horno de barro c/agregado + ensalada +
 *   bebida $10.000». Agregados: arroz, puré, papas fritas, tallarines.
 * - Reseñas: texto real de la ficha de Google (autor, fecha y nota).
 * - Fotos: descargadas de la ficha de Maps del negocio; el logo es el
 *   sello circular del pollo recortado de la pizarra real.
 *   Sin imágenes generadas en este demo.
 */

export const BIZ = {
  name: 'El Pollo Farsante',
  short: 'Pollo Farsante',
  rubro: 'Restaurante',
  address: 'Ruta K-31, km 7,5',
  city: 'Cumpeo, Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9795 7024',
  phoneTel: '+56997957024',
  whatsapp: '56997957024',
  instagram: 'https://www.instagram.com/elpollofarsanteoficial/',
  igUser: '@elpollofarsanteoficial',
  rating: 4.2,
  reviews: 130,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Pollo Farsante y quiero consultar por el almuerzo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Pollo Farsante, Ruta K-31 km 7.5, Río Claro, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Pollo Farsante, Ruta K-31, Río Claro, Maule',
)}&output=embed`

export const IMG = '/demos/el-pollo-farsante'

/**
 * app/demos/cabanas-conquil-villarrica/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps «Cabañas Conquil» (verificada el 12-11-2026):
 *   nombre y dirección (Camino Conquil km 1, Villarrica, Araucanía).
 * - Instagram @cabanas_conquil_villarrica (posts del 11-09 y 17-10-2026):
 *   WhatsApp +56 9 9183 8939, «disponibles 24/7», cabaña con tinaja
 *   privada techada (se cobra aparte), capacidad 6 personas, totalmente
 *   equipada, rodeada de bosque nativo, parrilla, amplia terraza,
 *   estacionamiento privado y seguro, fácil acceso por camino
 *   pavimentado, a 12 minutos del centro de Villarrica, cerca de termas,
 *   lagos y actividades al aire libre; ideal para descanso y
 *   desconexión. Además vivienda totalmente equipada de 2 habitaciones
 *   (hasta 9 plazas), 2 baños, con ropa de cama y toallas incluidas.
 *   También están en Airbnb (según su bio).
 * - Google: 5,0 con 1 opinión sin texto; por eso no se muestra nota
 *   ni estrellas.
 * - Fotos: todas del negocio, en public/demos/cabanas-conquil-villarrica/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin precios;
 * la tinaja «se reserva aparte» y todo se confirma por WhatsApp.
 */

export const BIZ = {
  name: 'Cabañas Conquil',
  short: 'Conquil',
  rubro: 'Cabañas con tinaja',
  address: 'Camino Conquil, km 1',
  city: 'Villarrica',
  region: 'Araucanía',
  phoneDisplay: '+56 9 9183 8939',
  whatsapp: '56991838939',
  instagram: 'cabanas_conquil_villarrica',
} as const

export const WA_LINK =
  'https://wa.me/56991838939?text=Hola%20Caba%C3%B1as%20Conquil%2C%20quiero%20consultar%20disponibilidad'

export const IG_URL = 'https://www.instagram.com/cabanas_conquil_villarrica/'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Conquil, Camino Conquil km 1, Villarrica',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Conquil, Camino Conquil km 1, Villarrica',
)}&output=embed`

export const IMG = '/demos/cabanas-conquil-villarrica'

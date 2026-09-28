/**
 * app/demos/constructora-gilaco/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre («Constructora Gilaco Spa»), dirección (Pasaje 20 oriente
 *   548, Talca), teléfono (+56 9 3096 7494), Instagram oficial
 *   (constructora.gilaco) enlazado desde su propia ficha de Google
 *   Maps, categoría «Building firm» y atención 24 horas según la
 *   ficha. Verificado sep. 2026.
 * - Bio de Instagram (texto real): «Remodelaciones y construcciones
 *   · Emergencias eléctricas y sanitarias 24/7 · Quinchos ·
 *   Techumbres · Ampliaciones» — es la base de la lista de servicios.
 * - Reseñas: 5.0 estrellas con 1 reseña en Google (sin texto
 *   público) — se muestra el rating como dato, no se inventan citas.
 * - Fotos de public/demos/constructora-gilaco: obras reales de la
 *   empresa (grúa en montaje, estructuras metálicas, techumbre,
 *   steel frame, galpón, nivelación con láser), tomadas de su ficha
 *   de Google Maps / Instagram confirmado.
 */

export const BIZ = {
  name: 'Constructora Gilaco',
  legal: 'Constructora Gilaco SpA',
  short: 'Gilaco',
  rubro: 'Constructora',
  address: 'Pasaje 20 oriente 548',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3096 7494',
  phoneTel: '+56930967494',
  whatsapp: '56930967494',
  instagram: 'constructora.gilaco',
  instagramUrl: 'https://www.instagram.com/constructora.gilaco/',
  rating: 5.0,
  reviews: 1,
  hours: 'Atención 24 horas',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Constructora Gilaco y quiero cotizar un trabajo',
)}`

export const WA_EMERGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una emergencia eléctrica o sanitaria en Talca y necesito ayuda',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Constructora Gilaco Spa, Pasaje 20 oriente 548, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pasaje 20 oriente 548, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/constructora-gilaco'

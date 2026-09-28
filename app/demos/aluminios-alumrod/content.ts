/**
 * app/demos/aluminios-alumrod/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre, dirección (Diez Oriente 1712, esq. 6 Norte, Talca),
 *   teléfono/WhatsApp, horario (Lun–Vie 9:00–19:00), nota 4,6★ y
 *   10 reseñas: ficha pública de Google Maps.
 * - Rubro y líneas de trabajo (ventanas, puertas, vitrinas,
 *   termopaneles): cartel del taller en la fachada del galpón,
 *   fotografiado en su ficha de Google.
 * - Reseñas citadas: textos originales en español de su ficha de Google.
 * - Fotos en /demos/aluminios-alumrod: subidas por el negocio a su ficha
 *   de Google (taller, furgón, instalaciones, puertas y ventanas).
 * - Instagram: instagram.com/alumrodaluminios (el número de su bio
 *   coincide con el WhatsApp de la ficha).
 * Textos de secciones (descripciones de servicios) son de muestra,
 * basados en lo que muestran sus fotos y su cartel.
 */

export const BIZ = {
  name: 'Aluminios Alumrod',
  short: 'Alumrod',
  rubro: 'Aluminios y vidrios',
  address: 'Diez Oriente 1712, esq. 6 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9537 4432',
  phoneTel: '+56995374432',
  whatsapp: '56995374432',
  rating: '4,6',
  reviews: 10,
  instagram: 'https://www.instagram.com/alumrodaluminios/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Aluminios Alumrod y quiero cotizar con medidas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Aluminios alumrod, Diez Oriente 1712, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Diez Oriente 1712, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/aluminios-alumrod'

/**
 * app/demos/basics-salon-masculino/content.ts
 *
 * Datos REALES verificados (29-09-2026):
 * - Ficha de Google Maps: "Basics Salon Masculino", categoría Barbería,
 *   Luis Cruz Martínez 1873, Molina; teléfono +56 9 5484 3683;
 *   rating 4,4.
 * - Su AgendaPro (basics.site.agendapro.com) está caído: el dominio
 *   redirige al home de AgendaPro.
 * - Sin Instagram ni Facebook encontrados (probados 5 handles y
 *   búsqueda de páginas FB).
 * - Fotos: la ficha solo publica una imagen con marca de agua de otra
 *   barbería ("Barbería Punto Cuarenta") — NO se usa. No hay foto real
 *   verificable del local; el demo va con identidad tipográfica, sin
 *   fotos inventadas.
 */

export const BIZ = {
  name: 'Basics Salon Masculino',
  rubro: 'Barbería',
  slogan: 'Cortes para hombre, sin vueltas',
  address: 'Luis Cruz Martínez 1873',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5484 3683',
  phoneTel: '+56954843683',
  whatsapp: '56954843683',
  rating: 4.4,
  ratingLabel: '4,4',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una hora en Basics Salon Masculino',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Basics Salon Masculino, Luis Cruz Martínez 1873, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Basics Salon Masculino, Luis Cruz Martínez 1873, Molina, Chile',
)}&output=embed`

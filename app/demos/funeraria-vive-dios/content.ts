/**
 * app/demos/funeraria-vive-dios/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + página de
 * Facebook del negocio @vive.dis.2025): nombre, dirección, teléfono,
 * horario 24 h, rating y las fotos usadas. Las opiniones de Maps no
 * tienen texto, solo calificación — por eso no se citan reseñas.
 */

export const BIZ = {
  name: 'Funeraria Vive Dios',
  tagline: 'Servicios funerarios',
  address: '2 Norte 3135, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3330 2013',
  phoneTel: '+56933302013',
  whatsapp: '56933302013',
  hours: 'Abierto las 24 horas',
  rating: 5.0,
  reviews: 5,
  lat: -35.4298057,
  lng: -71.632415,
  facebook: 'https://www.facebook.com/profile.php?id=61569042186141',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, necesito orientación de Funeraria Vive Dios',
)}`

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Funeraria Vive Dios 2 Norte 3135 Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${BIZ.lat},${BIZ.lng}&output=embed`

export const IMG = '/demos/funeraria-vive-dios'

/** Fotos reales de la página de Facebook y la ficha de Maps. */
export const FOTOS = [
  {
    src: 'flota.webp',
    alt: 'Dos carrozas funebres blancas de Funeraria Vive Dios frente a la capilla del cementerio',
    cap: 'Flota propia',
  },
  {
    src: 'capilla.webp',
    alt: 'Carroza fúnebre blanca estacionada en la entrada de una capilla con cruz',
    cap: 'En la capilla',
  },
  {
    src: 'cortejo.webp',
    alt: 'Carroza fúnebre blanca vista desde atrás durante un servicio',
    cap: 'Traslados',
  },
  {
    src: 'misa.webp',
    alt: 'Interior de iglesia durante una misa de funeral con arreglos florales blancos',
    cap: 'Ceremonia religiosa',
  },
  {
    src: 'carroza.webp',
    alt: 'Carroza fúnebre Hyundai blanca frente a la capilla del cementerio',
    cap: 'Carroza',
  },
  {
    src: 'honores.webp',
    alt: 'Iglesia con banderas chilenas durante una ceremonia fúnebre con honores',
    cap: 'Servicios con honores',
  },
] as const

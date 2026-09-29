/**
 * app/demos/automotriz-mario-salinas/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada):
 * nombre, dirección (5 Nte. 1481, Talca), teléfono fijo, horario
 * publicado (lun–vie 9:00–13:30 y 15:00–19:30, sáb–dom cerrado),
 * 4,8 estrellas en 25 reseñas y citas textuales de Google en la página.
 * Las fotos son reales de la ficha de Maps (fachada, box, elevador y
 * trabajo en suspensión). Sin logo ni redes públicas del taller:
 * el nombre y las fotos mandan. El taller no publica WhatsApp:
 * el contacto del mockup es por llamada al fijo.
 */

export const BIZ = {
  name: 'Automotriz Mario Salinas',
  short: 'Mario Salinas',
  rubro: 'Taller de reparación de automóviles',
  address: '5 Nte. 1481',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 268 6294',
  phoneTel: '+56712686294',
  reviews: 25,
  rating: '4,8',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Automotriz Mario Salinas, 5 Norte 1481, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Automotriz Mario Salinas, 5 Norte 1481, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/automotriz-mario-salinas'

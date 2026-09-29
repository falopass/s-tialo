/**
 * app/demos/cabanas-mar-y-luz/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps e Instagram):
 * nombre, sector Mariscadero (Pelluhue), teléfono/WhatsApp
 * (+56 9 5896 6626, publicado en sus propios afiches y VivePelluhue),
 * rating 4,7 con 7 reseñas en Google, Instagram @cabanasmaryluz
 * (211 seguidores, 18 publicaciones) y Facebook cabanasmary.luz.pelluhue.
 * Capacidad y equipamiento salen de sus afiches de Instagram: cabañas
 * para hasta 5 y hasta 8 personas, parrilla a carbón, estacionamiento
 * interior cerrado, equipadas completas excepto sábanas y toallas.
 */

export const BIZ = {
  name: 'Cabañas Mar y Luz',
  short: 'Mar y Luz',
  rubro: 'Cabañas y hospedaje',
  address: 'Sector Mariscadero',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5896 6626',
  phoneTel: '+56958966626',
  whatsapp: '56958966626',
  rating: '4,7',
  reviews: 7,
  igHandle: '@cabanasmaryluz',
  igFollowers: 211,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Mar y Luz en Pelluhue y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Cabañas Mar y Luz, sector Mariscadero, Pelluhue',
)}`

export const IG_URL = 'https://instagram.com/cabanasmaryluz'
export const FB_URL = 'https://www.facebook.com/cabanasmary.luz.pelluhue/'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Mar y Luz, Mariscadero, Pelluhue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Mar y Luz, Mariscadero, Pelluhue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-mar-y-luz'

export const RESENAS = [
  {
    nombre: 'Nicole Pereira Caro',
    stars: 5,
    texto:
      'Cabañas muy cerca de la playa, sector Mariscadero, a unas 4 cuadras aprox. y a un precio razonable. El lugar es amplio, acogedor, con mobiliario adecuado para recibir 5 personas.',
  },
  {
    nombre: 'Mauricio Antúnez',
    stars: 4,
    texto:
      'Cabañas bastante amplias, ideal para venir en familia. Estacionamiento cómodo para ingresar y salir. Está cerca de la playa, ideal para ir y volver caminando.',
  },
  {
    nombre: 'Juan Esparza',
    stars: 5,
    texto:
      'Muy buen lugar para descansar. Cerca de carretera y playa. Comercio cercano, muy limpio y acogedor, recomendable 100%.',
  },
  {
    nombre: 'Rodrigo Prado',
    stars: 5,
    texto:
      'Dueños muy acogedores, cabaña muy hermosa en un entorno tranquilo y bello. Cerca del mar y del campo.',
  },
] as const

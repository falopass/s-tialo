/**
 * app/demos/barberia-status/content.ts
 *
 * Datos REALES verificados (29-09-2026):
 * - Ficha de Google Maps: "Barbería Status", categoría Peluquería,
 *   Calle 30 Oriente 1546, Ofi 708 (piso 7), Talca; teléfono
 *   +56 9 8762 6657; rating 4,9.
 * - Su sitio de agenda AgendaPro (barberiastatusspa.site.agendapro.com):
 *   "Barbería STATUS SPA", 48 reseñas con nota 5, profesional
 *   Johan Sandoval, misma dirección y teléfono; carta de servicios con
 *   precios reales publicados abajo.
 * - Instagram @barberia.status (627 seguidores, "Lunes a Domingo",
 *   enlaza a la misma agenda). Sin Facebook propio.
 * - Fotos: el salón en blanco y negro (su página de agenda), el logo
 *   dorado BS y un afiche de aviso de su IG. La ficha de Maps no
 *   publica fotos del local.
 */

export const BIZ = {
  name: 'Barbería Status',
  legal: 'Barbería STATUS SPA',
  rubro: 'Barbería',
  slogan: 'Servicios integrales de barbería enfocados en el hombre de hoy',
  address: '30 Oriente 1546, piso 7, of. 708',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8762 6657',
  phoneTel: '+56987626657',
  whatsapp: '56987626657',
  rating: 4.9,
  ratingLabel: '4,9',
  agendaRating: '5,0',
  agendaReviews: 48,
  barbero: 'Johan Sandoval',
  horario: 'Lunes a domingo',
  instagram: 'https://www.instagram.com/barberia.status/',
  agenda: 'https://barberiastatusspa.site.agendapro.com/cl/sucursal/61184',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una hora en Barbería Status',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Barbería Status, 30 Oriente 1546, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Barbería Status, 30 Oriente 1546, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/barberia-status'

/** Carta publicada en su AgendaPro (precios reales, CLP) */
export const CARTA = [
  {
    nombre: 'Corte de Cabello VIP',
    precio: '$19.000',
    tiempo: '1 h',
    detalle: 'Corte según preferencias, asesoría de look, cejas, tónicos, lavado, peinado y ceras.',
  },
  {
    nombre: 'Ritual de Barba',
    precio: '$16.000',
    tiempo: '45 min',
    detalle: 'Toallas calientes, vapor ozono, perfiles y aftershave con aceites esenciales.',
  },
  {
    nombre: 'Corte VIP Niños (hasta 12 años)',
    precio: '$15.000',
    tiempo: '1 h',
    detalle: 'Tijeras, máquina o mixto, con dedicación según cada niño y su tipo de cabello.',
  },
  {
    nombre: 'Limpieza Facial VIP',
    precio: '$20.000',
    tiempo: '45 min',
    detalle: 'Exfoliación con toallas calientes y ozono, black mask, masaje e hidratantes.',
  },
  {
    nombre: 'Corte a Domicilio',
    precio: '$40.000',
    tiempo: '2 h',
    detalle: 'El servicio en tu casa, por comodidad o movilidad reducida. Valor base Talca.',
  },
] as const

/** Packs publicados en su AgendaPro */
export const PACKS = [
  { nombre: 'Platinum', precio: '$36.000', tiempo: '1 h 45 min', detalle: 'Corte + ritual de barba + limpieza facial.' },
  { nombre: 'Diamond', precio: '$40.000', tiempo: '2 h', detalle: 'Corte + ritual de barba + limpieza facial VIP.' },
  { nombre: 'Five Stars', precio: '$47.000', tiempo: '2 h', detalle: 'Corte VIP + ritual + facial VIP + masaje de nutrición capilar.' },
] as const

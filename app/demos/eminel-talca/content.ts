/**
 * app/demos/eminel-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + su propio
 * sitio eminel.cl + LinkedIn de la empresa, sep 2026):
 * "Empresa de Ingenieria Electrica Talca" — oficina en Calle
 * 2 Oriente 1625, Talca, teléfono +56 71 222 3172, 5.0★ con 1
 * opinión ("Clean and safe"). La marca comercial real es
 * INGETECK — Ingeniería y Montajes — y el dominio eminel.cl
 * corresponde a la misma empresa (misma dirección y contacto en
 * su perfil de LinkedIn "empresa de ingenieria electrica talca
 * limitada"). Razón social publicada en su sitio: Ingeteck Ltda.,
 * RUT 76.620.493-7, trabajando desde 2015.
 * Servicios reales publicados en su sitio: tableros eléctricos,
 * paneles solares fotovoltaicos, termos solares, aire
 * acondicionado, ductos y aislación térmica, montajes.
 * Clientes publicados en su sitio: Megaconstrucciones,
 * Mitsubishi Motors, Consur Constructora.
 * Fotos de public/demos/eminel-talca/: el portafolio (tablero,
 * termos solares, estanque, cañería aislada, ductos) y los logos
 * de clientes son descargados de su propio sitio eminel.cl;
 * logo-ingeteck.webp es su logo real; las calles son Google
 * Street View del barrio de la oficina.
 */

export const BIZ = {
  name: 'Ingeteck',
  nameFull: 'Ingeteck — Ingeniería y Montajes',
  rubro: 'Ingeniería eléctrica',
  legalName: 'Ingeteck Ltda. · Empresa de Ingeniería Eléctrica Talca',
  rut: '76.620.493-7',
  address: 'Calle 2 Oriente 1625',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 222 3172',
  phoneTel: '+56712223172',
  rating: 5.0,
  reviews: 1,
  desde: 2015,
  web: 'eminel.cl',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Empresa de Ingenieria Electrica Talca, Calle 2 Oriente 1625, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 2 Oriente 1625, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/eminel-talca'

export const RESENA = {
  texto: 'Clean and safe',
  nombre: 'Cristian Mauricio F.',
  hace: 'hace unos años',
} as const

/**
 * Servicios y Construcciones Fernando Lazcano Ltda — empresa constructora
 * de Calle 4 Oriente, Talca. Opera también como Baños Químicos Lazcano
 * y Limpia Fosas Chile (nombres comerciales de la misma razón social).
 *
 * Datos confirmados en su ficha de Google Maps (nombre, rubro de empresa
 * constructora, dirección, teléfono, horario lun-vie 8:00-17:30, 3.7
 * estrellas) y en su propio material publicado (lazcanoltda.cl vía
 * archivo web y página de Facebook): la fachada es una captura real de
 * Google Street View (mar 2024) de su portón de arriendo de maquinaria;
 * las fotos de camiones, compresor, baño portátil, Fernando y las obras
 * vienen de su sitio publicado.
 */

export const IMG = '/demos/servicios-y-construcciones-fernando-lazcano'

export const BIZ = {
  name: 'Servicios y Construcciones Fernando Lazcano',
  short: 'Lazcano Ltda.',
  legal: 'Servicios y Construcciones Fernando Lazcano Ltda.',
  rubro: 'Empresa constructora',
  address: 'Calle 4 Oriente 1632',
  city: 'Talca',
  phoneDisplay: '71 222 6567',
  phoneTel: '+56 71 222 6567',
  rating: 3.7,
  reviews: 3,
}

export const TEL_LINK = `tel:${BIZ.phoneTel.replace(/\s/g, '')}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Servicios y Construcciones Fernando Lazcano, Calle 4 Oriente 1632, Talca'
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 4 Oriente 1632, Talca'
)}&z=17&output=embed`

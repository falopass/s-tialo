/**
 * Servicios y Construcciones Fernando Lazcano Ltda — conocidos como
 * Baños Químicos Lazcano (su nombre comercial) y Limpia Fosas Chile.
 *
 * Datos confirmados en Google Maps (nombre, rubro de empresa
 * constructora, dirección, teléfono, horario, 3.7 estrellas) y en su
 * propio material público (sitio lazcanoltda.cl y página de Facebook):
 * las tres líneas de servicio — arriendo de baños químicos portátiles,
 * limpieza de fosas sépticas con urgencias 24 h y arriendo de
 * maquinaria/construcción. Todas las fotos son de su material publicado.
 */

export const IMG = '/demos/banos-quimicos-lazcano'

export const BIZ = {
  name: 'Baños Químicos Lazcano',
  legal: 'Servicios y Construcciones Fernando Lazcano Ltda.',
  rubro: 'Baños químicos y limpieza de fosas',
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

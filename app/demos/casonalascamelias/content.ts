/**
 * app/demos/casonalascamelias/content.ts
 *
 * Datos del mockup. REALES, verificados en el sitio oficial de la
 * Municipalidad de Curepto (curepto.cl → turismo → dónde dormir):
 * «Casona Las Camelias», O'Higgins #25, capacidad 10 personas,
 * alojamiento (+ alimentación según el servicio contratado) y
 * «reservas solo por teléfono» al +56 9 9817 5933. Su ficha de Google
 * Maps existe (homestay, O'Higgins, Curepto) pero sin reseñas ni
 * fotos publicadas: la foto de la calle es de Google Street View
 * (feb. 2019) y las escenas interiores son bosquejos marcados que se
 * reemplazan por fotos reales al activar el sitio. El Festival de la
 * Camelia es la fiesta veraniega de la comuna (curepto.cl).
 * Ojo con los homónimos: existe un «Hostal Las Camelias» y una
 * «Casona Las Catalinas» en la zona — no son este negocio.
 */

export const BIZ = {
  name: 'Casona Las Camelias',
  short: 'Las Camelias',
  rubro: 'Casona · alojamiento',
  address: "O'Higgins #25",
  city: 'Curepto',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9817 5933',
  phoneTel: '+56998175933',
  whatsapp: '56998175933',
  capacity: '10 personas',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Casona Las Camelias, vi su página y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar en Casona Las Camelias, Curepto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Casona Las Camelias, O'Higgins, Curepto, Maule, Chile",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Casona Las Camelias, O'Higgins 25, Curepto, Maule, Chile",
)}&output=embed`

export const IMG = '/demos/casonalascamelias'

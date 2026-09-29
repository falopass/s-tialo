/**
 * Datos verificados en la ficha pública de Google Maps (29-09-2026):
 * "Espacio Unihue", categoría Bodega, en Ruta 120 Chacarillas Talca,
 * 3530000 Maule; teléfono +56 9 7648 0523; nota 5,0 con 90 opiniones.
 * Horario según la ficha: lunes a viernes 9-19, sábado 9-17, domingo
 * cerrado. El negocio comparte terreno con Unihue Sport (club
 * deportivo del cruce Unihue, Ruta 5 sur km 260), lo que se ve en la
 * vista aérea y en la foto de la casa club.
 * Las fotos del demo son de la misma ficha: el patio de contenedores
 * D1-D15, los módulos verdes, la vista aérea del terreno y el plano
 * oficial de bodegas con sus superficies (150, 300, 450 y 1050 m²).
 * No publica precios ni lista de servicios en la ficha.
 */
export const BIZ = {
  name: 'Espacio Unihue',
  category: 'Arriendo de bodegas y contenedores',
  city: 'Talca',
  address: 'Ruta 120 Chacarillas, cruce Unihue, km 260 Ruta 5 Sur',
  comuna: 'Maule',
  phone: '56976480523',
  phoneDisplay: '+56 9 7648 0523',
  rating: '5,0',
  reviews: 90,
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Espacio Unihue, vi su página y quiero consultar por el arriendo de una bodega o contenedor.',
)}`

// Coordenadas exactas de la ficha, cruce Unihue.
export const MAPS_EMBED = 'https://www.google.com/maps?q=-35.484503,-71.6623622&z=16&output=embed'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Espacio Unihue, Ruta 120 Chacarillas, Talca',
)}`

export const IMG = '/demos/espacio-unihue'

export const HORARIO = [
  { days: 'Lunes a viernes', time: '9:00 – 19:00' },
  { days: 'Sábado', time: '9:00 – 17:00' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

/**
 * Bodegas según el plano oficial que publica la ficha de Google
 * ("Bodegas con diferentes opciones de áreas"). Las letras y los m²
 * son los del plano; el plano también muestra futuras oficinas y
 * baños-camarines junto a la bodega E.
 */
export const BODEGAS = [
  { id: 'A1', m2: 150, nota: 'entrada norte, junto a A2' },
  { id: 'B1', m2: 150, nota: 'entrada norte, junto a B2' },
  { id: 'A2', m2: 300, nota: 'doble ancho del bloque A' },
  { id: 'B2', m2: 300, nota: 'doble ancho del bloque B' },
  { id: 'C', m2: 450, nota: 'alas centrales del galpón' },
  { id: 'D', m2: 450, nota: 'alas centrales del galpón' },
  { id: 'F', m2: 450, nota: 'acceso por el costado F' },
  { id: 'G', m2: 450, nota: 'acceso por el costado H' },
  { id: 'H', m2: 450, nota: 'acceso por el costado H' },
  { id: 'I', m2: 450, nota: 'acceso por el costado I' },
  { id: 'E', m2: 1050, nota: 'la nave mayor, con baños y camarines' },
] as const

/** Contenedores marítimos numerados que se ven en el patio. */
export const CONTENEDORES = { desde: 'D1', hasta: 'D15', total: 15 } as const

/**
 * Datos del demo Cabañas El Alto (El Colorado, San Clemente, Maule).
 *
 * REAL — verificado en su ficha de Google Maps y su Instagram @cabanas_el_alto:
 * nombre "Cabañas El Alto", cabaña de montaña en El Colorado, San Clemente
 * (sector Vilches Alto, camino al Lago Colbún); +56 9 6594 2194; 4.6 estrellas
 * en 27 reseñas; parking y piscina al aire libre según su ficha.
 * De sus flyers de IG (reglas de la casa publicadas por ellos): Cabaña 1 para
 * 6 personas y Cabaña 2 para 5, ambas de 3 dormitorios; check-in 15:00,
 * check-out 13:00; reserva con abono previo de $10.000 enviando el voucher;
 * el huésped lleva sábanas y toallas; cada persona adicional se cancela.
 * Amenidades confirmadas por reseñas reales: quincho, columpios para niños,
 * tina caliente interior, ducha con agua caliente, cercanía al Lago Colbún.
 * Reseñas citadas: Miguel Angel Recabal, Daniel Herreros y Soledad Gallegos
 * (textos publicados originalmente en español en su ficha de Google).
 *
 * MUESTRA — titulares y textos de apoyo propios; distancias aproximadas
 * ("a pasos del Lago Colbún") por lo que señalan sus propias reseñas.
 */

export const BIZ = {
  name: 'Cabañas El Alto',
  category: 'Cabañas de montaña',
  sector: 'El Colorado',
  city: 'San Clemente',
  region: 'Región del Maule',
  whatsapp: '56965942194',
  phoneDisplay: '+56 9 6594 2194',
  rating: 4.6,
  reviews: 27,
  ig: '@cabanas_el_alto',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Cabañas El Alto, quiero consultar disponibilidad para un fin de semana.',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña. ¿Les llegó mi voucher del abono?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.sector}, ${BIZ.city}`,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.sector}, ${BIZ.city}`,
)}&output=embed`

export const CABANAS = [
  {
    nombre: 'Cabaña 1',
    capacidad: '6 personas',
    dormitorios: '3 dormitorios',
    foto: 'cabana-fachada.webp',
    alt: 'Cabañas de madera color naranjo de Cabañas El Alto con techo a dos aguas y portalón',
  },
  {
    nombre: 'Cabaña 2',
    capacidad: '5 personas',
    dormitorios: '3 dormitorios',
    foto: 'cabana-jardin.webp',
    alt: 'Cabañas El Alto desde el jardín: dos cabañas de madera sobre pradera verde con árboles',
  },
]

/** Reglas de la casa — publicadas por ellos en Instagram. */
export const REGLAS = [
  { t: 'Reserva con abono de $10.000', d: 'Se agenda con un abono previo; envía el voucher por WhatsApp y queda confirmada tu fecha.' },
  { t: 'Check-in 15:00 · check-out 13:00', d: 'Entrada desde las 15:00 y salida hasta las 13:00 del día siguiente.' },
  { t: 'Trae sábanas y toallas', d: 'Las cabañas van equipadas, pero ropa de cama y toallas las lleva cada familia.' },
  { t: 'Persona adicional se cancela', d: 'Si van más huéspedes de la capacidad, cada adicional se cobra aparte.' },
]

export const RESENAS = [
  {
    nombre: 'Miguel Angel Recabal',
    estrellas: 5,
    texto:
      'Limpio, tranquilo, hermosa vista panorámica: el paisaje de día y las estrellas de noche. Atención amable del dueño, 100% recomendable.',
  },
  {
    nombre: 'Daniel Herreros',
    estrellas: 5,
    texto:
      'Todo muy limpio y ordenado, la ducha con agua caliente y la piscina muy rica. Queda cerca del Lago Colbún, hay columpios para los niños y quincho. Recomendado.',
  },
  {
    nombre: 'Soledad Gallegos',
    estrellas: 5,
    texto:
      'Un lugar acogedor y la privacidad es excepcional. Tiene piscina y una tina caliente interior muy cómoda.',
  },
]

/**
 * Datos del demo Cetty Soccer Padel Club (Molina, Maule).
 *
 * REAL — verificado en su ficha de Google Maps y su Instagram @cettypadel_club:
 * nombre "Cetty Soccer Padel Club", complejo deportivo en Camino Agua Fría,
 * Molina; +56 9 5225 4594; 4.5 estrellas en 42 reseñas; horario Lun–Vie
 * 8:00–21:00, sábado 24 horas, domingo cerrado. Su IG confirma "3 canchas
 * techadas de nivel profesional" y el logo (figura de jugadores sobre
 * pincelada blanca) se extrajo de un flyer publicado por ellos.
 * Reseñas citadas en el demo: Benjamín Cabrera, Julian Canto y Alejandra
 * Gamboa (textos originales en español vistos en la ficha de Google; aquí
 * se transcriben fieles al sentido publicado).
 *
 * MUESTRA — texto de apoyo propio (titulares, descripciones de sección):
 * no hay precios ni lista de servicios publicada, por eso el demo dirige
 * todas las consultas a WhatsApp en vez de inventar tarifas.
 */

export const BIZ = {
  name: 'Cetty Soccer Padel Club',
  short: 'Cetty Pádel',
  category: 'Complejo deportivo',
  address: 'Camino Agua Fría',
  city: 'Molina',
  region: 'Región del Maule',
  whatsapp: '56952254594',
  phoneDisplay: '+56 9 5225 4594',
  rating: 4.5,
  reviews: 42,
  ig: '@cettypadel_club',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Cetty, quiero reservar una cancha de pádel. ¿Qué horas tienen disponibles?',
)}`

export const WA_LINK_VALORES = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Cetty, ¿me pueden contar los valores de las canchas?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.city}`,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, Camino Agua Fría, ${BIZ.city}`,
)}&output=embed`

/** Horario publicado en su ficha de Google. */
export const HORARIO: [string, string][] = [
  ['Lunes a viernes', '8:00 – 21:00'],
  ['Sábado', 'abierto 24 hrs'],
  ['Domingo', 'cerrado'],
]

export const RESENAS = [
  {
    nombre: 'Julian Canto',
    estrellas: 5,
    texto:
      'La atención de Cristián y de Francisco, el dueño, es excelente: siempre muy atentos y dispuestos a ayudar.',
  },
  {
    nombre: 'Benjamín Cabrera',
    estrellas: 5,
    texto:
      'Un lugar muy acogedor: siempre tiene buen equipamiento y las canchas se mantienen bien.',
  },
  {
    nombre: 'Alejandra Gamboa',
    estrellas: 4,
    texto: 'Canchas de pasto sintético, muy bien mantenidas.',
  },
]

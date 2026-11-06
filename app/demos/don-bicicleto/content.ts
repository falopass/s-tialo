/**
 * app/demos/don-bicicleto/content.ts
 *
 * Datos del mockup. REALES (verificados el 5-11-2026):
 * - Nombre y rubro: ficha de Google Maps "Tienda Don Bicicleto San
 *   Fernando", categoría "Tienda de bicicletas".
 * - Bio de Instagram @tienda_don_bicicleto: "Somos Tienda de
 *   Bicicletas y Servicio Técnico Especializado". El lema "¡Otra que
 *   se va pedaleando!" es el que usan en cada foto de entrega.
 * - San Fernando: Av. Manuel Rodríguez 1015, con horario de Maps
 *   (lunes a viernes 10:00-19:00, sábado 10:00-17:00, domingo
 *   cerrado). Chimbarongo: Pisagua 108, horario no confirmado.
 * - WhatsApp +56 9 5844 9683, Instagram, rating 5,0 con 24 opiniones
 *   en Google y las dos citas textuales (Matias D. y Jose F.).
 * - "En vitrina": modelos y especificaciones publicados en su
 *   Instagram. Sin precios ni stock público: siempre "consulta
 *   disponibilidad" por WhatsApp.
 * - Marcas: publicadas en tienda y en su logo (Fox, Shimano, Maxxis).
 */

export const BIZ = {
  name: 'Don Bicicleto',
  full: 'Tienda Don Bicicleto San Fernando',
  rubro: 'Tienda de bicicletas y servicio técnico especializado',
  city: 'San Fernando',
  region: "Región de O'Higgins",
  address: 'Av. Manuel Rodríguez 1015',
  city2: 'Chimbarongo',
  address2: 'Pisagua 108',
  phoneDisplay: '+56 9 5844 9683',
  phoneTel: '+56958449683',
  whatsapp: '56958449683',
  instagram: 'https://www.instagram.com/tienda_don_bicicleto/',
  lema: '¡Otra que se va pedaleando!',
  rating: '5,0',
  ratingValue: 5,
  reviews: 24,
  horario: [
    { dias: 'Lunes a viernes', horas: '10:00 a 19:00' },
    { dias: 'Sábado', horas: '10:00 a 17:00' },
    { dias: 'Domingo', horas: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Don Bicicleto, vi su página y quiero cotizar',
)}`

/** Cada modelo de la vitrina abre WhatsApp con el nombre ya escrito. */
export const waModelo = (modelo: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Don Bicicleto, vi su página y quiero consultar por la ${modelo}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Tienda Don Bicicleto, Av. Manuel Rodríguez 1015, San Fernando, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Manuel Rodríguez 1015, San Fernando',
)}&output=embed`

export const IMG = '/demos/don-bicicleto'

/** Bicicletas que han publicado en Instagram (sin precio ni stock). */
export const MODELOS: { n: string; name: string; spec?: string }[] = [
  { n: '01', name: 'Scott Scale 920', spec: 'MTB · Carbono · Shimano Deore 1x12' },
  { n: '02', name: 'Scott Scale 940', spec: 'MTB' },
  { n: '03', name: 'Scott Addict 40', spec: 'Ruta · Carbono · Shimano 105 electrónica 12v' },
  { n: '04', name: 'Scott Contrail 10' },
  { n: '05', name: 'Orbea Orca M30', spec: 'Ruta · Carbono · Shimano 105 12v' },
  { n: '06', name: 'Polygon Strattos 7', spec: 'Ruta · Carbono · Shimano 105 Di2 12v' },
  { n: '07', name: 'Giant Talon 3', spec: 'MTB' },
]

export const MARCAS = ['Scott', 'Orbea', 'Giant', 'Polygon', 'Shimano', 'Maxxis', 'Fox'] as const

export const REVIEWS = [
  { text: 'Excelente atención. Muy amigables', author: 'Matias D.' },
  { text: 'Muy buena atención', author: 'Jose F.' },
] as const

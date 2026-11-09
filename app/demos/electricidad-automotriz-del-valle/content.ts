/**
 * app/demos/electricidad-automotriz-del-valle/content.ts
 *
 * Datos del mockup. REALES (verificados el 9-11-2026 en su ficha de
 * Google Maps y su mensaje automático de WhatsApp):
 * - Nombre: "Taller de Electricidad automotriz DEL VALLE" en Maps;
 *   se muestra como Electricidad Automotriz Del Valle.
 * - Dirección: Pasaje Entre Lagos 770, Villarrica.
 * - Horario de Maps: abierto las 24 horas, todos los días.
 * - WhatsApp +56 9 8278 5720: su mensaje automático pide cuatro datos
 *   (vehículo, falla, dirección y nombre); el WA_LINK lleva ese mismo
 *   formato prellenado.
 * - Rating: 4,9 con 29 opiniones en Google. Las cuatro citas de
 *   REVIEWS son textuales de su ficha (Jimena W., Salvador L.,
 *   Karina M., Marc F.); solo en la de Salvador aparece el nombre
 *   del dueño ("Nahuel").
 * - Lo que hacen (de sus fotos y reseñas): diagnóstico y reparación
 *   eléctrica de autos y camionetas, cableado y arneses dañados o
 *   quemados, alternadores y sistema de carga, módulos y placas
 *   electrónicas, instalación de radios y pantallas multimedia, e
 *   iluminación LED ("mejora de iluminación", decía su publicación).
 * - Sin redes confirmadas: no se muestran Instagram ni Facebook.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, descripciones de servicios y
 * rótulos gráficos. Sin precios, sin tiempos de llegada, sin
 * prometer atención a domicilio (no está confirmado) y sin marcas
 * ni años de experiencia.
 */

export const BIZ = {
  name: 'Electricidad Automotriz Del Valle',
  short: 'Del Valle',
  rubro: 'Electricidad automotriz',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  address: 'Pasaje Entre Lagos 770',
  phoneDisplay: '+56 9 8278 5720',
  whatsapp: '56982785720',
  rating: '4,9',
  ratingValue: 4.9,
  reviews: 29,
} as const

export const WA_LINK =
  'https://wa.me/56982785720?text=Hola%20Del%20Valle%2C%20mi%20veh%C3%ADculo%20es%3A%20%0AFalla%3A%20%0ADirecci%C3%B3n%3A%20%0ANombre%3A%20'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Electricidad Automotriz Del Valle, Pasaje Entre Lagos 770, Villarrica, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pasaje Entre Lagos 770, Villarrica',
)}&output=embed`

/** Opiniones textuales de su ficha de Google (4,9 · 29). */
export const REVIEWS = [
  {
    text: 'Nahuel, una persona honesta, profesional y muy humana. 100% recomendado. Nos recibió el auto en grúa de noche luego de que se nos averiara el alternador. Al otro día en la mañana ya lo tenía operativo. Muy rápido. Agradecido 100%.',
    author: 'Salvador L.',
  },
  {
    text: 'Excelente profesional, te explica detalladamente los problemas, súper transparente en su trabajo y confiable. Muy recomendado.',
    author: 'Jimena W.',
  },
  {
    text: 'Excelente profesional, solucionó el problema de mi camioneta JMC, serio, responsable, un 10/10. Feliz con su atención.',
    author: 'Karina M.',
  },
  {
    text: 'Lo que toda persona busca: alguien que sepa, cercano, confiable, precio justo, rapidez, eficiencia.',
    author: 'Marc F.',
  },
] as const

export const IMG = '/demos/electricidad-automotriz-del-valle'

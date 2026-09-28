/**
 * app/demos/veterinaria-vanessa-castillo/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre «Veterinaria Vanessa Castillo», dirección (Quechereguas 2002,
 *   Molina), teléfono/WhatsApp (+56 9 8219 3880), nota 4,0★ y 62 reseñas,
 *   horario (L–V 10:00–13:00 y 15:00–19:00, Sáb 10:00–14:00, Dom cerrado):
 *   ficha pública de Google Maps.
 * - Servicios: letrero de la fachada (Street View 2026: «Consulta ·
 *   Farmacia · Peluquería · Hotel Canino», Purina Pro Plan) y directorios:
 *   vacunación, desparasitación, cirugías, alimentos y accesorios.
 *   Atiende en Molina desde 2003 (guiadenegocios).
 * - Reseñas citadas: de su ficha de Google (Camila Arias, Carlos Araya,
 *   Luisa Ramírez), traducidas fielmente al español — Google las muestra
 *   en inglés.
 * - Fotos en /demos/veterinaria-vanessa-castillo: `fachada` y `esquina`
 *   son Street View real del local (Google, 2026). `consulta`, `farmacia`
 *   y `peluqueria` son ILUSTRACIONES generadas, marcadas en la página
 *   como «bosquejo» — la pyme casi no publica fotos.
 * Textos de sección son de muestra.
 */

export const BIZ = {
  name: 'Veterinaria Vanessa Castillo',
  short: 'Vet. Vanessa Castillo',
  rubro: 'Clínica veterinaria y pet shop',
  address: 'Quechereguas 2002',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8219 3880',
  phoneTel: '+56982193880',
  whatsapp: '56982193880',
  rating: '4,0',
  reviews: 62,
  since: '2003',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Veterinaria Vanessa Castillo y quiero consultar por una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Veterinaria Vanessa Castillo, Quechereguas 2002, Molina',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Veterinaria Vanessa Castillo, Quechereguas 2002, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/veterinaria-vanessa-castillo'

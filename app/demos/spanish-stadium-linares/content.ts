/**
 * app/demos/spanish-stadium-linares/content.ts
 *
 * Datos verificados (Google Maps + sitio oficial estadioespanolinares.cl +
 * Facebook público, sept-2026):
 * - Nombre: "Estadio Español de Linares" (ficha) / "Estadio Español Linares"
 *   (Facebook, ~8.462 seguidores).
 * - Dirección: Av. Aníbal León Bustos 01242, Linares, Maule (ficha);
 *   plus code 595H+67. El sitio lo describe como "a la entrada de Linares".
 * - Teléfono: (73) 222 9293 (ficha y sitio: "reservas y pedidos al 732229293").
 * - Rating 4,4 · 609 reseñas · más de 455 fotos.
 * - Historia (su propio sitio): Centro Español de Linares fundado el
 *   24-may-1953 en calle Independencia; campo deportivo desde 1988;
 *   Restaurante y Centro de Eventos actual inaugurado el 12-oct-2001.
 *   Institución social sin fines de lucro.
 * - Restaurante: cocina española y de mar (callos a la madrileña, caldillo
 *   de congrio, camarones, ceviche, paella en las fotos del sitio), abre
 *   12:30 (ficha). Precio por persona publicado: $10.000–$25.000.
 * - Centro de eventos: 3 salones + 2 salas, hasta 300 personas, +600 m².
 * - Deportes: fútbol adulto, escuela de fútbol, béisbol, tenis, danza
 *   española, voleibol femenino; reserva de canchas de pádel y tenis por
 *   app oficial (Android/iOS, según su sitio).
 * - No publican WhatsApp: contacto por teléfono y su sitio web.
 */

export const BIZ = {
  name: 'Estadio Español de Linares',
  short: 'Estadio Español',
  rubro: 'Club social y restaurante',
  address: 'Av. Aníbal León Bustos 01242, Linares',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '(73) 222 9293',
  phoneTel: '+56732229293',
  website: 'https://estadioespanolinares.cl',
  facebook: 'https://www.facebook.com/estadio.linares/',
  fbFollowers: '8,4 mil seguidores',
  rating: '4,4',
  reviews: '609',
  since: '1953',
  hours: 'Abre 12:30 hrs',
  priceRange: '$10.000 – $25.000 por persona',
  plusCode: '595H+67 Linares',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Estadio Español de Linares, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Estadio Español de Linares, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/spanish-stadium-linares'

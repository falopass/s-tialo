/**
 * app/demos/zamono/content.ts
 *
 * Datos REALES verificados el 2026-09-28:
 * - Ficha de Google Maps "Lubricentro Zamono Spa": nombre, dirección
 *   (Av. Luis Cruz Martínez 1441, ex Luna Llena), WhatsApp +56 9 9000 5166,
 *   rating 5.0 con ~42 opiniones, horario con colación, Instagram como web.
 * - Letrero del portón (foto real del negocio): lista de servicios,
 *   eslogan "¿No puedes traer tu auto? ¡Nosotros vamos por él!",
 *   handle @lubricentrozamonospa.
 * - Reseñas citadas: textos reales de la ficha (nombre + fecha).
 * Fotos: bajadas de la ficha de Maps (gps-cs/grass-cs) + Street View
 * mar-2026 de la fachada. Logo: recorte del óvalo del letrero real.
 * Precios: la pyme no publica tarifas — la carta queda "a cotizar".
 */

export const BIZ = {
  name: 'Lubricentro Zamono',
  legal: 'Lubricentro Zamono SpA',
  short: 'Zamono',
  rubro: 'Lubricentro, taller y lavado de autos',
  address: 'Av. Luis Cruz Martínez 1441',
  addressExtra: 'ex Luna Llena',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9000 5166',
  phoneTel: '+56990005166',
  whatsapp: '56990005166',
  instagram: 'lubricentrozamonospa',
  rating: '5.0',
  reviews: 42,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lubricentro Zamono y quiero agendar una hora',
)}`

export const WA_LINK_RETIRO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, no puedo llevar mi auto al taller — ¿me lo pueden ir a buscar?',
)}`

export const IG_LINK = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lubricentro Zamono Spa, Luis Cruz Martínez 1441, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Luis Cruz Martínez 1441, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/zamono'

/** Servicios tal como los anuncia el letrero del negocio. */
export const SERVICIOS = [
  'Cambio de aceite y filtros',
  'Frenos',
  'Venta de repuestos y neumáticos',
  'Lavado de vehículos y tapicería',
  'Grabado de patentes',
  'Pulido de focos',
  'Baterías',
  'Accesorios e insumos',
] as const

/** Horario real de la ficha (colación de 13:00 a 15:00). */
export const HORAS = [
  { days: 'Lunes a viernes', time: '9:00–13:00 · 15:00–19:00' },
  { days: 'Sábado', time: '9:00–14:00' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

/** Reseñas reales de la ficha de Google (nombre + antigüedad). */
export const RESENAS = [
  {
    texto:
      'Los chicos de ese lubricentro transforman un simple cambio de aceite en una experiencia inolvidable, nunca he disfrutado tanto de estar en un taller.',
    autor: 'J. Kadlec',
    detalle: 'Local Guide · hace 9 meses',
  },
  {
    texto:
      'Excelente servicio, atienden bien, son súper amables y confiables. Pudimos ver todo el trabajo que le hicieron al auto y nos explicaron con detalle, además nos dieron tips y consejos.',
    autor: 'eli castro',
    detalle: 'hace 3 meses',
  },
  {
    texto:
      'Excelente servicio: de las veces que he llevado mi auto, ya sea para mantención o algún detalle, puedo dejarlo con total confianza. Los chicos son honestos y cumplen con lo acordado.',
    autor: 'Cristina Martinez',
    detalle: 'Local Guide · hace 4 meses',
  },
  {
    texto:
      'Recomiendo totalmente Lubricentro Zamono. Me hicieron el lavado y la mantención del auto en el mismo lugar, de forma rápida y muy dedicada.',
    autor: 'Karina Vergara Fernandez',
    detalle: 'hace 10 meses',
  },
] as const

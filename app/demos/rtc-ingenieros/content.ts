/**
 * app/demos/rtc-ingenieros/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps (sept 2026): "Constructora Rtc Limitada",
 *   5 Norte 1125, Talca — sin teléfono ni fotos publicadas.
 * - Registro público (gob.cl / chilepymes): Rtc Ingenieros Ltda.,
 *   RUT 77.307.520-4, giro asesorías en ingeniería, 5 Norte 1125,
 *   Talca, teléfono +56 71 261 4570.
 * - Imágenes del proyecto: extraídas del estudio real de la empresa
 *   "Embalse de Regulación Interanual Huencuecho I" (junio 2012,
 *   contrato CIREN/InnovaChile CORFO N° 88/2011 para la Asociación
 *   Canal Maule Norte): portada del informe, mapa de ubicación
 *   Pelarco–Huencuecho, emplazamiento del embalse, planta general,
 *   calicatas de terreno e hidrograma.
 * - Fachada y calle de la oficina: Google Street View (5 Nte. 1125).
 * El detalle de servicios es de muestra: al publicar va la
 * oferta real de la empresa.
 */

export const BIZ = {
  name: 'RTC Ingenieros',
  short: 'RTC Ingenieros',
  rubro: 'Ingeniería y auditoría técnica',
  legalName: 'RTC Ingenieros Limitada',
  rut: '77.307.520-4',
  address: '5 Norte 1125',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 261 4570',
  phoneTel: '+56712614570',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rtc Ingenieros, 5 Norte 1125, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '5 Norte 1125, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/rtc-ingenieros'

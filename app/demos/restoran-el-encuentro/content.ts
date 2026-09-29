/**
 * app/demos/restoran-el-encuentro/content.ts
 *
 * Datos del mockup. REALES, de una sola fuente oficial:
 *  - Directorio turístico de la Municipalidad de San Clemente
 *    (sanclemente.cl/turismo/servicios/rest.html), línea 20:
 *    "Restoran El Encuentro" — sector Armerillo — teléfono 957189915.
 *
 * Contexto del sector verificado en Wikipedia (Armerillo) y prensa
 * local (El Maule Informa / Música y Noticias): caserío de unos 3 km a
 * lo largo de la ruta K-485, ribera norte del río Maule, ~40 km al
 * suroriente de la ciudad de San Clemente, en el camino internacional
 * al Paso Pehuenche; sede de la Fiesta Costumbrista del Chivo al Palo.
 *
 * OJO con el homónimo: existe un "Restaurant El Encuentro" en Pencahue
 * (comuna de Maule) que es OTRO negocio — este demo es el de Armerillo,
 * comuna de San Clemente, identificado por su teléfono.
 *
 * El negocio NO tiene ficha en Google Maps ni redes públicas localizadas
 * (verificado en Maps por nombre + coordenadas del sector): todas las
 * imágenes del demo son dibujos marcados visiblemente como bosquejo.
 */

export const BIZ = {
  name: 'Restoran El Encuentro',
  short: 'El Encuentro',
  rubro: 'Restorán',
  sector: 'Armerillo',
  comuna: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5718 9915',
  phoneTel: '+56957189915',
  whatsapp: '56957189915',
  ruta: 'Ruta 115 · camino internacional al Paso Pehuenche',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Vi la página del Restoran El Encuentro en Armerillo y quiero consultar.',
)}`

/** Flechas del poste: lugares y datos reales del sector (Wikipedia + municipalidad). */
export const FLECHAS = [
  {
    n: 'El río Maule',
    d: 'Armerillo se extiende por la ribera norte del Maule, entre el puente Pehuenche y la confluencia con el estero Tricahue y el río Claro.',
    dir: 'al lado del caserío',
  },
  {
    n: 'Campings y picnic',
    d: 'El plan clásico del verano: carpa y pozas junto al río, con el cordón montañoso que separa el sector de Vilches.',
    dir: 'todo el sector',
  },
  {
    n: 'Fiesta del Chivo al Palo',
    d: 'Cada temporada Armerillo celebra su fiesta costumbrista: gastronomía típica, música y tradición cordillerana junto a la ruta.',
    dir: 'en verano',
  },
  {
    n: 'Paso Pehuenche',
    d: 'La ruta 115 sigue cordillera arriba hasta el paso internacional a Argentina: el restorán queda en el camino.',
    dir: 'rumbo oriente',
  },
  {
    n: 'San Clemente',
    d: 'La comuna queda a unos 40 km bajando la misma ruta — el restorán es la parada antes (o después) de la ciudad.',
    dir: 'rumbo poniente',
  },
] as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Armerillo, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Armerillo, San Clemente, Maule, Chile',
)}&output=embed`

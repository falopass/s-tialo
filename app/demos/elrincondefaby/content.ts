/**
 * app/demos/elrincondefaby/content.ts
 *
 * Datos verificados de El Rincón de Faby (Empedrado):
 *
 * - Catálogo de Emprendedores de Empedrado, 2ª edición (Municipalidad de
 *   Empedrado, lámina Hospedaje): «El Rincón de Faby — Fabiola Gavilán,
 *   +569 9244 8365 — Cabañas, camping, almuerzos y tinajas».
 * - El emprendimiento no tiene ficha de Google Maps ni redes públicas
 *   encontrables: el único contacto verificado es el celular.
 * - Las dos escenas principales de la página son ILUSTRACIONES
 *   (archivos bosquejo-*.webp), marcadas visiblemente como bosquejo.
 * - Las fotos del entorno SÍ son reales y se tomaron de las fichas de
 *   Google Maps de la Reserva Nacional Los Ruiles y del Embalse de
 *   Empedrado — son del sector, no del predio.
 * - Atractivos de la comuna citados desde la página de turismo de la
 *   Municipalidad de Empedrado (empedrado.cl/turismo): Reserva Nacional
 *   Los Ruiles (bosque de ruil), Laguna Negra (Fundo El Quillay),
 *   Mirador Cerro de La Virgen, Mirador Las Antenas, Embalse de
 *   Empedrado, La Orilla.
 */

export const BIZ = {
  name: 'El Rincón de Faby',
  short: 'El Rincón de Faby',
  rubro: 'Cabañas · camping · almuerzos · tinajas',
  dueno: 'Fabiola Gavilán',
  city: 'Empedrado',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9244 8365',
  whatsapp: '56992448365',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Faby, vi su página y quiero consultar por cabañas o camping',
)}`

export const WA_LINK_ALMUERZO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Faby, quiero consultar por los almuerzos',
)}`

export const MAPS_QUERY = 'Empedrado, Región del Maule, Chile'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Empedrado, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/elrincondefaby'

/** Los 4 servicios confirmados por el catálogo municipal. */
export const SERVICIOS = [
  {
    nombre: 'Cabañas',
    icono: 'cabana',
    bajada: 'Para dormir bajo techo, con la calma del campo alrededor.',
  },
  {
    nombre: 'Camping',
    icono: 'carpa',
    bajada: 'Sitio para la carpa y la fogata, a pasos de la casa.',
  },
  {
    nombre: 'Almuerzos',
    icono: 'plato',
    bajada: 'Comida casera de campo, servida a la hora de almuerzo.',
  },
  {
    nombre: 'Tinajas',
    icono: 'tinaja',
    bajada: 'Agua caliente a leña para terminar el día remojado.',
  },
] as const

/** Atractivos reales de la comuna según la página de turismo municipal. */
export const ENTORNO = [
  'Reserva Nacional Los Ruiles — bosque de ruil nativo',
  'Laguna Negra — el espejo de agua del Fundo El Quillay',
  'Embalse de Empedrado — vista y naturaleza a 14 km',
  'Mirador Cerro de La Virgen — peregrinaje con vista',
  'Mirador Las Antenas — el valle y la cordillera',
  'La Orilla — el valle rural a 4 km del pueblo',
] as const

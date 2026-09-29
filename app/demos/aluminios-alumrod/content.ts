/**
 * app/demos/aluminios-alumrod/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Aluminios alumrod", categoría "Tienda de
 *   cristales", esquina Calle 6 Norte con Diez Ote 1712, 3480094 Talca.
 *   Rating 4,6. Teléfono 9 9537 4432. Cierra en la noche y abre 9:00.
 * - Rubro según registro publicado por el audiovisual que les produjo
 *   material (post en LinkedIn, 2026): "fabricación e instalación de
 *   ventanas de aluminio y PVC".
 * - Ojo: citiservi.cl lista una dirección antigua (Av. 9 Oriente 1877) y
 *   otro teléfono (992905797); la ficha vigente de Maps es la que se usa.
 * - Fotos: 1 imagen real de su ficha de Maps (interior de la tienda,
 *   sept 2026) + vistas de la esquina tomadas de Google Street View
 *   (panorama may 2026) — se citan como tales.
 * - No se encontraron textos de reseñas públicos; solo el rating 4,6.
 */

export const BIZ = {
  name: 'Aluminios Alumrod',
  rubro: 'Ventanas de aluminio y PVC · vidriería',
  address: 'Diez Ote 1712, esquina Calle 6 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9537 4432',
  whatsapp: '56995374432',
  rating: '4,6',
  reviews: 10,
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Aluminios+alumrod/@-35.4202478,-71.6506652,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c690c5d47993:0x681e31e4a4c8246!8m2!3d-35.4202478!4d-71.6506652!16s%2Fg%2F11dxf0t57f',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Aluminios Alumrod y quiero cotizar',
)}`

export const WA_LINK_MEDIDA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero cotizar ventanas con las medidas de mi proyecto',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Aluminios alumrod Diez Ote 1712 Talca Chile',
)}&output=embed`

export const IMG = '/demos/aluminios-alumrod'

export const SERVICIOS = [
  {
    t: 'Ventanas de aluminio',
    d: 'Fabricación a medida según las dimensiones del proyecto.',
    src: 'servicio verificado',
  },
  {
    t: 'Ventanas de PVC',
    d: 'Perfil PVC para mejor aislación, fabricadas e instaladas por ellos.',
    src: 'servicio verificado',
  },
  {
    t: 'Cristales y vidrios',
    d: 'Su ficha de Google los categoriza como tienda de cristales.',
    src: 'según su ficha',
  },
  {
    t: 'Instalación en terreno',
    d: 'No solo venden: fabrican e instalan las ventanas que hacen.',
    src: 'servicio verificado',
  },
] as const

export const PASOS = [
  { n: '1', t: 'Cotizas', d: 'Mandas las medidas por WhatsApp o pasas por la esquina con tu proyecto.' },
  { n: '2', t: 'Se fabrica', d: 'El perfil se corta y arma a medida en el taller.' },
  { n: '3', t: 'Se instala', d: 'Ellos mismos montan la ventana en la obra o en la casa.' },
] as const

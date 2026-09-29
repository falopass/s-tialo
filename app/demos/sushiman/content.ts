/**
 * app/demos/sushiman/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Sushiman", categoría Restaurante, Villa Esperanza,
 *   Av. Esperanza ST21, MZI, Dpto #7, 3390000 Sagrada Familia, Maule.
 *   Rating 4,5 en la ficha en vivo (restaurantess.cl registra 4,6/22 reseñas).
 *   Plus code XJX6+XX Sagrada Familia.
 * - Teléfono/WhatsApp +56 9 5701 8119 (Maps, restaurantess.cl y su propio
 *   letrero en la foto de la fachada).
 * - Redes oficiales, publicadas en su letrero real: Instagram @sushiman.sf
 *   (1.324 seguidores, 533 publicaciones) y Facebook "Sushiman | Sagrada
 *   Familia" (1.767 seguidores): "Elaboración y preparación de sushi y otros
 *   alimentos preparados para llevar" — formato para llevar / pedidos.
 * - Lema real del logo: "El sabor convertido en adicción".
 * - Fotos: fachada real de su ficha de Google Maps (letrero circular con el
 *   logo) y logo real de su página de Facebook. Los platos dibujados van
 *   marcados como bosquejo.
 * - Sin carta pública con precios: no se publican precios.
 */

export const BIZ = {
  name: 'Sushiman',
  rubro: 'Sushi para llevar',
  slogan: 'El sabor convertido en adicción',
  address: 'Villa Esperanza · Av. Esperanza ST21',
  city: 'Sagrada Familia',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5701 8119',
  whatsapp: '56957018119',
  rating: '4,5',
  reviews: '22',
  instagram: 'sushiman.sf',
  instagramUrl: 'https://www.instagram.com/sushiman.sf/',
  facebookUrl: 'https://www.facebook.com/SushiManSF',
  seguidoresIg: '1.324',
  publicacionesIg: '533',
  seguidoresFb: '1.767',
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Sushiman/@-35.0000061,-71.387546,17z/data=!3m1!4b1!4m6!3m5!1s0x966450211801aaab:0x96edb39e64cc4982!8m2!3d-35.0000061!4d-71.387546!16s%2Fg%2F11gblcbmd1',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Sushiman, quiero hacer un pedido para llevar',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sushiman Villa Esperanza Sagrada Familia Maule Chile',
)}&output=embed`

export const IMG = '/demos/sushiman'

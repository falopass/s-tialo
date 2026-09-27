/**
 * app/demos/patagonia-dulce-pasteleria/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, dirección
 * (Campanario 1502, San Clemente), WhatsApp e Instagram con 2.536
 * seguidores. La ficha de Google aún no acumula reseñas (0), así que
 * no se muestran. Todo lo demás — productos, precios, horarios —
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Patagonia dulce pastelería',
  short: 'Patagonia dulce',
  rubro: 'Pastelería',
  address: 'Campanario 1502',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7773 3911',
  phoneTel: '+56977733911',
  whatsapp: '56977733911',
  instagram: 'https://www.instagram.com/patagoniadulcepasteleria/',
  followers: '2.536',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Patagonia dulce y quiero hacer un pedido',
)}`

export const WA_LINK_TORTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Patagonia dulce y quiero encargar una torta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Patagonia dulce pastelería, Campanario 1502, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Campanario 1502, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/patagonia-dulce-pasteleria'

// Datos verificados: Google Maps "Artesanal y Gourmet Restaurante", K-145, Molina
// +56 9 8792 4494 · 4.7★ (149 opiniones) · Lu–Sá 12–17h, Dom cerrado · $5.000–10.000
export const BIZ = {
  name: 'Artesanal y Gourmet',
  short: 'Artesanal y Gourmet',
  rubro: 'Restaurante de comida casera',
  address: 'K-145',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8792 4494',
  phoneTel: '+56987924494',
  whatsapp: '56987924494',
  rating: '4.7',
  ratingCount: '149 opiniones',
  priceRange: '$5.000–10.000',
  hours: 'Lu–Sá · 12:00–17:00 · Dom cerrado',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=Hola%20${encodeURIComponent(BIZ.short)}%2C%20quisiera%20consultar%20por%20el%20men%C3%BA%20del%20d%C3%ADa`
export const WA_LINK_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=Hola%20${encodeURIComponent(BIZ.short)}%2C%20quisiera%20consultar%20por%20una%20celebraci%C3%B3n%20o%20evento`
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Artesanal+y+Gourmet+Restaurante+K-145+Molina'
export const MAPS_EMBED = 'https://www.google.com/maps?q=Artesanal%20y%20Gourmet%20Restaurante%2C%20K-145%2C%20Molina&output=embed'
export const IMG = '/demos/artesanal-y-gourmet'

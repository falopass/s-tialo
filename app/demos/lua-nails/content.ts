/**
 * app/demos/lua-nails/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, WhatsApp y las 43 reseñas. Todo lo demás (servicios,
 * precios, horarios, reseñas) es contenido de muestra para mostrar
 * cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Lua Nails Home',
  short: 'Lua Nails',
  rubro: 'Manicure y uñas',
  address: 'Treinta y Medio Ote. 1729',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8530 9351',
  phoneTel: '+56985309351',
  whatsapp: '56985309351',
  reviews: 43,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lua Nails Home y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lua Nails Home y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lua Nails Home, Treinta y Medio Ote. 1729, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lua Nails Home, Treinta y Medio Ote. 1729, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/lua-nails'

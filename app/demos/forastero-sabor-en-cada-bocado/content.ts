/**
 * app/demos/forastero-sabor-en-cada-bocado/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps y página de Facebook
 * Forastero Pencahue): nombre, dirección (Francisco de Villagra 704,
 * Pencahue), WhatsApp (9 4731 1047), 5,0 estrellas con 4 reseñas en
 * Google, 3,8 mil seguidores en Facebook y los platos que publican
 * (Salchi Forastera, Salchi Golosa, Salchi Glotona, pizzas, ass
 * forasteros, completos, empanadas, churrascos y delivery). Las promos
 * mostradas son las gráficas reales que el local publica en Facebook;
 * su vigencia se confirma por WhatsApp. Las reseñas citadas son las 4
 * reales de su ficha de Google Maps (todas de 5 estrellas, 29-09-2026).
 */

export const BIZ = {
  name: 'FORASTERO sabor en cada bocado',
  short: 'FORASTERO',
  rubro: 'Restaurante y delivery',
  tagline: 'sabor en cada bocado',
  address: 'Francisco de Villagra 704',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4731 1047',
  phoneTel: '+56947311047',
  whatsapp: '56947311047',
  rating: '5,0',
  reviews: 4,
  fbFollowers: '3,8 mil',
  facebook: 'https://www.facebook.com/share/1E1vQCNkSR/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de FORASTERO y quiero reservar una mesa',
)}`

export const WA_LINK_LLEVAR = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de FORASTERO y quiero pedir para llevar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'FORASTERO sabor en cada bocado, Francisco de Villagra 704, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'FORASTERO, Francisco de Villagra 704, Pencahue, Chile',
)}&output=embed`

export const IMG = '/demos/forastero-sabor-en-cada-bocado'

// Las 4 reseñas reales de la ficha de Google Maps del local (todas de 5 ★).
// La cuarta (Lilian Campos Romero) no tiene texto: se muestra solo la nota.
export const RESENAS = [
  {
    nombre: 'Eduardo Toledo',
    fecha: 'Hace 3 meses',
    texto:
      'Restaurante ubicado en la comuna de Pencahue, que cuenta con una variada carta, donde destacan sus pizzas artesanales de muy buena calidad y gran sabor. El local es bastante amplio y cómodo, y la atención es cordial y expedita…',
  },
  {
    nombre: 'Angélica Ibarra',
    fecha: 'Hace 2 meses',
    texto: 'Buena experiencia, el joven Manuel super amable, la comida super rica, local limpio.',
  },
  {
    nombre: 'Sunil Sanjay Butir Sumbul',
    fecha: 'Hace 4 meses',
    texto:
      'Soy de la India y fui por primera vez a este local y la atención que me dio el niño en caja es excelente. Las comidas son recomendadas y el niño es muy amable, cortés y caballero. ¡Muy buen servicio!',
  },
] as const

export const RESENA_SIN_TEXTO = {
  nombre: 'Lilian Campos Romero',
  fecha: 'Hace 5 meses',
} as const

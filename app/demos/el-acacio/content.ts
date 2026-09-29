/**
 * app/demos/el-acacio/content.ts
 *
 * Datos REALES verificados:
 * - Registro SERNATUR (Buscador de Servicios Turísticos, N° 32414):
 *   "El acacio", categoría RESTAURANTE, Av. Libertad N° 360,
 *   localidad Maule (pueblo), comuna de Maule, Región del Maule.
 *   Teléfono +56 9 9215 1424. Correo poncelorenaandre4@gmail.com.
 *   El registro figura "no vigente" — los datos se presentan como
 *   publicados por SERNATUR y el CTA invita a confirmar por WhatsApp.
 * - Sin ficha propia en Google Maps ni redes localizables: existen
 *   restaurantes homónimos "Los Acacios" en Villa Alegre, San Javier,
 *   Parral y El Parrón, pero son otros negocios (plural, otras
 *   direcciones) — no se usaron sus datos.
 * - Sin fotos ni reseñas públicas: todos los visuales son bosquejos
 *   marcados como tal.
 */

export const BIZ = {
  name: 'El Acacio',
  rubro: 'Restaurante',
  address: 'Av. Libertad 360',
  city: 'Maule',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9215 1424',
  whatsapp: '5692151424',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Acacio en Maule y quiero consultar si están atendiendo',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Libertad 360 Maule Región del Maule Chile',
)}&output=embed`

export const IMG = '/demos/el-acacio'

// Lo único verificado — se presenta tal cual, sin inventar carta ni horario.
export const FICHA = [
  { k: 'Qué es', v: 'Restaurante (registro SERNATUR)' },
  { k: 'Dirección', v: 'Av. Libertad 360, Maule' },
  { k: 'Localidad', v: 'Maule, capital comunal — valle del río Maule' },
  { k: 'Contacto', v: '+56 9 9215 1424' },
  { k: 'Fuente', v: 'Registro de Servicios Turísticos SERNATUR' },
] as const

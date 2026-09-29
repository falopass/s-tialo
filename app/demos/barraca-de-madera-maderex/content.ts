/**
 * app/demos/barraca-de-madera-maderex/content.ts
 *
 * Datos del demo. REALES (ficha pública de Google Maps, hl=es, sep 2026):
 * nombre "BARRACA DE MADERA MADEREX", categoría "tienda de herramientas",
 * dirección Bajo Perquín, Ruta 115 S/N, San Clemente (plus code CJMX+CW
 * Rota), teléfono +56 9 4147 1837 — el mismo que aparece en el pilón de
 * la entrada en las fotos de la ficha. Rating 4,9 en 58 reseñas
 * (57 de 5 estrellas, 1 de 1 estrella); los textos citados en la página
 * son reseñas literales de la ficha.
 *
 * La ficha no lista sitio web ni redes sociales y no se encontró perfil
 * propio de IG/FB (los "Maderex" que aparecen son empresas de Colombia):
 * la fuente confirmada es Google Maps.
 *
 * Productos tomados del letrero real pintado en el galpón y el letrero
 * del portón ("Tableros y revestimientos"): polines, pino bruto,
 * cepillado seco, vigas, pilares, molduras, tapacanes, forro cabaña,
 * tabla cielo, tinglado, OSB, terciado, volcanita y permanit; también
 * venden cemento (letrero Transex) y herramientas (giro de la ficha).
 *
 * Horario publicado: lu–mi 9–18, sá 9–16, do cerrado; los rangos de
 * jueves y viernes vienen inconsistentes en la ficha (p. ej.
 * "9 a.m.–12 a.m."), por eso la página invita a confirmarlos por
 * WhatsApp en vez de inventarlos.
 *
 * Fotos: fotos reales de la ficha (galpón, tableros, paquetes con marca
 * Maderex, polines, portón y pilón con el logo). Se descartaron dos
 * fotos subidas por usuarios que corresponden a otros negocios.
 * Logo: recorte del letrero real de la oficina (foto de la ficha).
 */

export const BIZ = {
  name: 'Barraca de Madera Maderex',
  short: 'Maderex',
  slogan: 'Madera de calidad al mejor precio',
  rubro: 'Barraca de madera · herramientas y materiales',
  address: 'Bajo Perquín, Ruta 115 S/N',
  sector: 'Sector Rota',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4147 1837',
  phoneTel: '+56941471837',
  whatsapp: '56941471837',
  rating: 4.9,
  reviewCount: 58,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Maderex, vi su página y quiero cotizar madera',
)}`

export const WA_LINK_LISTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Maderex, les mando mi lista de materiales para cotizar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Barraca de Madera Maderex, Bajo Perquín, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Barraca de Madera Maderex, Ruta 115, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/barraca-de-madera-maderex'

export const HORAS = [
  { d: 'Lunes a miércoles', h: '9:00 – 18:00' },
  { d: 'Jueves y viernes', h: 'Confirma por WhatsApp' },
  { d: 'Sábado', h: '9:00 – 16:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const RESENAS = [
  {
    nombre: 'Colomba Caro',
    cuando: 'Hace 8 meses',
    texto:
      'Excelente servicio y despachos muy eficientes. Compré madera con esta empresa y la experiencia fue impecable de principio a fin. La calidad de la madera es muy buena, bien seleccionada y en excelente estado.',
  },
  {
    nombre: 'Elizabeth Hernandez Roca',
    cuando: 'Hace 7 meses',
    texto:
      'Muy buen servicio, variedad en madera, 100% recomendable, muy amables en la atención y disposición para orientar en lo que es más recomendable comprar cuando uno tiene dudas.',
  },
  {
    nombre: 'Miguel Palavecinos',
    cuando: 'Hace 7 meses',
    texto:
      'El chico atiende muy bien es muy amable y tienen buenos precios lo que no tienen lo traen.',
  },
  {
    nombre: 'César Godoy',
    cuando: 'Hace 7 meses',
    texto: 'Excelentes productos, y muy buena la atención, rápida y eficiente.',
  },
]

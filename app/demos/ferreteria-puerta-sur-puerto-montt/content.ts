/**
 * app/demos/ferreteria-puerta-sur-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada el
 * 16-11-2026): nombre, dirección (Av. Capitán Ávalos 6208, Puerta Sur,
 * Puerto Montt) y horario (lunes a viernes 8:45 a 19:00, sábado 9:00 a
 * 18:00, domingo 10:00 a 14:00). De su propia publicación: la frase
 * "dispuestos a ayudarte en tus proyectos, con una asesoría de calidad y
 * disponible los 7 días de la semana" y "ven y cotiza en Ferretería
 * Puerta Sur". De su listado en Construex: "empresa dedicada a la venta
 * de materiales de construcción y artículos de ferretería en general".
 * WhatsApp y Facebook son los del negocio. Las 3 citas de opiniones son
 * textuales de Google, con el nombre tal cual aparece (en la de
 * Alejandra Muñoz se corrigió solo el typo "para a" a "para").
 * No hay lista de productos, marcas, precios ni despacho: no se
 * muestran. La nota de Google no se muestra por indicación del brief.
 */

export const BIZ = {
  name: 'Ferretería Puerta Sur',
  short: 'Puerta Sur',
  rubro: 'Ferretería',
  address: 'Av. Capitán Ávalos 6208, Puerta Sur',
  addressNum: '6208',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 7938 8935',
  whatsapp: '56979388935',
  facebook: 'https://www.facebook.com/people/Ferreteriapuertasur/100072340542074/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Ferretería Puerta Sur, quiero cotizar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería Puerta Sur, Capitán Ávalos 6208, Puerto Montt',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ferretería Puerta Sur, Capitán Ávalos 6208, Puerto Montt',
)}&output=embed`

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '8:45 a 19:00' },
  { dias: 'Sábado', horas: '9:00 a 18:00' },
  { dias: 'Domingo', horas: '10:00 a 14:00' },
] as const

// Citas textuales de Google Maps, con el nombre tal como aparece.
export const OPINIONES = [
  {
    texto:
      'Excelente atención y disposición para resolver consultas. Gran variedad de artículos y materiales.',
    autor: 'Alejandra Muñoz',
  },
  {
    texto: 'Buenos precios, variedad de productos y muy buena atención',
    autor: 'Alfredo Urrea',
  },
  {
    texto:
      'Buena ferretería y atención lo más genial es que tienen una segunda ferretería como a 6 cuadras y eso te simplifica la vida ya que si en una no hay un producto tienes otra opción',
    autor: 'Jonatan Naupayan',
  },
] as const

export const IMG = '/demos/ferreteria-puerta-sur-puerto-montt'

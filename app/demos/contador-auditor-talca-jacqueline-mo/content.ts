/**
 * Datos verificados en la ficha pública de Google Maps (28-09-2026):
 * "Contador Auditor Talca Jacqueline Moraga", contable en Calle 1 Sur
 * 865, Talca, teléfono 9 8486 9536, 5.0 estrellas con 9 reseñas y
 * WhatsApp como canal principal (su "sitio web" en la ficha es un
 * wa.me). Los servicios salen del letrero real de su oficina (foto de
 * la ficha): asesorías contables, tributarias y laborales,
 * organización empresarial y asesoría inmobiliaria. Las fotos del
 * demo (logo JMM, puerta, oficina y retrato) son de la misma ficha.
 * No publica precios; todo se consulta por WhatsApp.
 */
export const BIZ = {
  name: 'Jacqueline Moraga',
  brand: 'JMM · Contador Auditor',
  fullName: 'Contador Auditor Talca Jacqueline Moraga',
  category: 'Contable',
  city: 'Talca',
  address: 'Calle 1 Sur 865',
  phone: '56984869536',
  phoneDisplay: '+56 9 8486 9536',
  rating: '5.0',
  reviews: 9,
  horario: 'Lunes a viernes, horario de oficina',
  source: 'https://www.google.com/maps/search/?api=1&query=Contador+Auditor+Talca+Jacqueline+Moraga',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Jacqueline, vi su página y quisiera consultar por una asesoría contable.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.fullName}, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.fullName}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`

/** Servicios según el letrero real de la oficina (foto de la ficha de Maps). */
export const SERVICIOS = [
  {
    n: '01',
    t: 'Contabilidad al día',
    d: 'Llevar los libros y registros de tu pyme en regla, mes a mes, sin atrasos que después salgan caros.',
  },
  {
    n: '02',
    t: 'Asesoría tributaria',
    d: 'Declaraciones, rectificatorias y respuestas al SII con respaldo: que cada formulario tenga su sustento.',
  },
  {
    n: '03',
    t: 'Laboral y remuneraciones',
    d: 'Contratos, liquidaciones e imposiciones en orden, para que tu equipo y la ley queden tranquilos.',
  },
  {
    n: '04',
    t: 'Organización empresarial',
    d: 'Ordenar la casa por dentro: estructura, procesos y números claros para decidir con datos.',
  },
  {
    n: '05',
    t: 'Asesoría inmobiliaria',
    d: 'Respaldo contable y tributario en operaciones con propiedades.',
  },
] as const

/** Reseñas reales copiadas de la ficha de Google Maps (28-09-2026). */
export const RESENAS = [
  {
    nombre: 'Alejandra Moll',
    texto:
      'Hace más de 10 años que tengo contratado sus servicios como contadora: excelente profesional, confiable, responsable, amable, contesta toda consulta. Recomiendo sus servicios.',
  },
  {
    nombre: 'Margarita Mazo',
    texto:
      'Profesional de confianza, muy responsable, preparada, generosa y honrada. Siempre está dispuesta a orientarme y apoyarme con mi pyme. Me da seguridad saber que puedo contar con ella.',
  },
  {
    nombre: 'Ariel Alexis Yáñez',
    texto: 'Tremenda profesional, muy proactiva y simpática, la recomiendo 100%.',
  },
] as const

// Rúbrica fija de clasificación de prospectos. Función pura: sin red ni IO.
// Entrada (fila normalizada):
//   resenas:      número o string ("2.185" vale 2185); vacío o no numérico = no verificable
//   estado:       texto libre de la ficha ("cerrado", "permanently closed", ...)
//   web_propia:   'viva' | 'sin_web' | 'no_verificable'
//   ig_estado:    'activo' | 'inactivo' | 'no_verificable'
//   ig_ultimo_post: fecha ISO opcional, solo para el motivo
// Salida: { pago, prioridad, motivo }

export function numResenas(v) {
  if (v == null || String(v).trim() === '') return null
  const n = Number(String(v).replace(/[.,\s]/g, ''))
  return Number.isFinite(n) ? n : null
}

export function clasificar({ resenas, estado, web_propia, ig_estado, ig_ultimo_post }) {
  const n = numResenas(resenas)
  const pago = n == null ? 'no_verificable' : n >= 15 ? 'senal_resenas' : 'insuficiente'

  if (web_propia === 'viva') {
    return { pago, prioridad: 'descartar', motivo: 'web propia responde 2xx' }
  }
  if (/cerrad[oa]s?|closed/i.test(estado || '')) {
    return { pago, prioridad: 'descartar', motivo: 'la ficha indica negocio cerrado' }
  }

  const clientes = n != null && n >= 15
  const activo =
    ig_estado === 'activo' ||
    (ig_estado === 'no_verificable' && n != null && n >= 20)

  if (clientes && activo && pago === 'senal_resenas') {
    const webTxt = web_propia === 'sin_web' ? 'sin web propia' : 'web propia no verificable'
    const actTxt =
      ig_estado === 'activo'
        ? `Instagram activo (último post ${ig_ultimo_post || '<60 días'})`
        : `Instagram no verificable, ${n} reseñas cubren actividad (>=20)`
    return { pago, prioridad: 'alta', motivo: `${webTxt}; ${n} reseñas (>=15); ${actTxt}` }
  }

  const faltan = []
  if (!clientes) {
    faltan.push(n == null ? 'reseñas no verificables' : `solo ${n} reseñas (<15)`)
  }
  if (!activo) {
    faltan.push(
      ig_estado === 'inactivo'
        ? `Instagram inactivo (último post ${ig_ultimo_post || '>60 días'})`
        : 'actividad de Instagram no verificable'
    )
  }
  const webTxt = web_propia === 'sin_web' ? 'sin web propia' : 'web propia no verificable'
  return { pago, prioridad: 'revisar', motivo: `${webTxt}; ${faltan.join('; ')}` }
}

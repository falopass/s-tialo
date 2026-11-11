#!/usr/bin/env node
// Casos fijos de la rúbrica y los parsers, sin red.
//   node prospeccion/verificar/comprobar.mjs   -> sale 0 si todo pasa

import assert from 'node:assert/strict'
import { clasificar, numResenas } from './rubrica.mjs'
import { esHostPropio } from './web.mjs'
import {
  clasificarFecha,
  extraerUltimaFecha,
  normalizaUrlIg,
  pideLogin,
} from './instagram.mjs'

const HOY = Date.now()
const hace = (dias) => new Date(HOY - dias * 86_400_000).toISOString().slice(0, 10)

// --- rúbrica ---

// Web propia viva (2xx) -> descartar aunque el resto pinte bien
assert.equal(
  clasificar({ resenas: '40', estado: '', web_propia: 'viva', ig_estado: 'activo' }).prioridad,
  'descartar'
)

// 40 reseñas, sin web, IG sin fecha -> alta y pago=senal_resenas
{
  const r = clasificar({ resenas: '40', estado: '', web_propia: 'sin_web', ig_estado: 'no_verificable' })
  assert.equal(r.prioridad, 'alta')
  assert.equal(r.pago, 'senal_resenas')
}

// 3 reseñas -> nunca alta
assert.notEqual(
  clasificar({ resenas: '3', estado: '', web_propia: 'sin_web', ig_estado: 'activo' }).prioridad,
  'alta'
)

// Instagram bloqueado/no verificable nunca se etiqueta inactivo,
// y con <20 reseñas no alcanza el fallback de actividad
{
  const r = clasificar({ resenas: '18', estado: '', web_propia: 'sin_web', ig_estado: 'no_verificable' })
  assert.notEqual(r.prioridad, 'alta')
  assert.equal(r.pago, 'senal_resenas')
}

// IG inactivo confirmado (>60 días) no usa el fallback de reseñas
assert.equal(
  clasificar({ resenas: '40', estado: '', web_propia: 'sin_web', ig_estado: 'inactivo' }).prioridad,
  'revisar'
)

// Cerrado -> descartar (español e inglés)
assert.equal(
  clasificar({ resenas: '40', estado: 'Cerrado permanentemente', web_propia: 'sin_web', ig_estado: 'activo' }).prioridad,
  'descartar'
)
assert.equal(
  clasificar({ resenas: '40', estado: 'Permanently closed', web_propia: 'sin_web', ig_estado: 'activo' }).prioridad,
  'descartar'
)

// Reseñas ausentes o no numéricas -> pago no_verificable
assert.equal(clasificar({ resenas: '', estado: '', web_propia: 'sin_web', ig_estado: 'activo' }).pago, 'no_verificable')
assert.equal(numResenas('2.185'), 2185)
assert.equal(numResenas('abc'), null)

// --- web: hosts que no son web propia ---
assert.equal(esHostPropio('https://www.instagram.com/pyme'), false)
assert.equal(esHostPropio('https://facebook.com/pyme'), false)
assert.equal(esHostPropio('https://fb.me/pyme'), false)
assert.equal(esHostPropio('https://linktr.ee/pyme'), false)
assert.equal(esHostPropio('https://wa.me/56912345678'), false)
assert.equal(esHostPropio('https://maps.app.goo.gl/xyz'), false)
assert.equal(esHostPropio('https://www.google.com/maps/place/x'), false)
assert.equal(esHostPropio(''), false)
assert.equal(esHostPropio('https://lapyme.cl'), true)
assert.equal(esHostPropio('lapyme.cl'), true)

// --- instagram: fecha dentro/fuera de 60 días ---
assert.equal(clasificarFecha(hace(10), HOY), 'activo')
assert.equal(clasificarFecha(hace(120), HOY), 'inactivo')
assert.equal(clasificarFecha('no-es-fecha', HOY), 'no_verificable')
assert.equal(normalizaUrlIg('@lapyme'), 'https://www.instagram.com/lapyme/')

// HTML con fecha de publicación -> se extrae; muro de login -> null y pideLogin
const htmlConPost = `<html><script>{"taken_at_timestamp":${Math.floor(HOY / 1000)}}</script></html>`
assert.equal(extraerUltimaFecha(htmlConPost), hace(0))
assert.equal(extraerUltimaFecha('<html><body>Log in to Instagram</body></html>'), null)
assert.equal(pideLogin('<html><body>loginForm</body></html>'), true)
assert.equal(pideLogin('', 'https://www.instagram.com/accounts/login/'), true)

// inactivo confirmado no puede salir de un no_verificable:
// si no hay fecha, el estado es no_verificable (cubierto arriba con extraerUltimaFecha -> null)

console.log('ok - todas las comprobaciones pasaron')

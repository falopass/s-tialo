import { test } from 'node:test'
import assert from 'node:assert/strict'
import type { Respuestas } from './recomendar'

// Node (strip-types) exige la extensión .ts para importar y tsc no la permite sin
// allowImportingTsExtensions: el specifier ensanchado lo resuelve node y queda
// invisible para el chequeo de tipos. Los tipos llegan por `typeof import`.
const { recomendarPlan } = (await import('./recomendar.ts' as string)) as typeof import('./recomendar')

const plan = (r: Respuestas) => recomendarPlan(r)?.plan

test('sin responder qué mostrar no hay recomendación', () => {
  assert.equal(recomendarPlan({}), null)
  assert.equal(recomendarPlan({ google: true, pago: 'unico' }), null)
})

test('una página recomienda el plan Básico, mensual por defecto', () => {
  const r = recomendarPlan({ mostrar: 'pagina' })
  assert.equal(r?.plan, 'basico')
  assert.equal(r?.pago, 'mensual')
})

test('una página + aparecer en Google sube al Recomendado', () => {
  const r = recomendarPlan({ mostrar: 'pagina', google: true })
  assert.equal(r?.plan, 'recomendado')
  assert.ok(r?.razones.some((t) => t.includes('SEO local')))
})

test('productos con foto y precio recomienda el Catálogo', () => {
  assert.equal(plan({ mostrar: 'productos' }), 'catalogo')
})

test('secciones con compra única cae a anual, con nota', () => {
  const r = recomendarPlan({ mostrar: 'secciones', pago: 'unico' })
  assert.equal(r?.plan, 'recomendado')
  assert.equal(r?.pago, 'anual')
  assert.equal(r?.nota, 'La compra única es solo para el plan Básico; este plan lo puedes pagar al año: 12 meses por el precio de 10.')
})

test('una página con compra única sí queda en compra única', () => {
  const r = recomendarPlan({ mostrar: 'pagina', pago: 'unico' })
  assert.equal(r?.plan, 'basico')
  assert.equal(r?.pago, 'unico')
  assert.equal(r?.nota, undefined)
})

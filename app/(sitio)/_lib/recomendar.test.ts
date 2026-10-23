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

test('una página recomienda el plan Básico', () => {
  const r = recomendarPlan({ mostrar: 'pagina' })
  assert.equal(r?.plan, 'basico')
  assert.equal(r?.pago, 'unico')
})

test('una página + aparecer en Google sube al Recomendado', () => {
  const r = recomendarPlan({ mostrar: 'pagina', google: true })
  assert.equal(r?.plan, 'recomendado')
  assert.ok(r?.razones.some((t) => t.includes('SEO local')))
})

test('productos con foto y precio recomienda el Catálogo', () => {
  assert.equal(plan({ mostrar: 'productos' }), 'catalogo')
})

test('secciones con pago mensual cae a cuotas, con nota', () => {
  const r = recomendarPlan({ mostrar: 'secciones', pago: 'mensual' })
  assert.equal(r?.plan, 'recomendado')
  assert.equal(r?.pago, 'cuotas')
  assert.equal(r?.nota, 'El pago mensual es solo para el plan Básico; este plan lo puedes pagar en 3 cuotas sin interés.')
})

test('una página con pago mensual sí queda mensual', () => {
  const r = recomendarPlan({ mostrar: 'pagina', pago: 'mensual' })
  assert.equal(r?.plan, 'basico')
  assert.equal(r?.pago, 'mensual')
  assert.equal(r?.nota, undefined)
})

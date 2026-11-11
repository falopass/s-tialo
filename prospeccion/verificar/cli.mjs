#!/usr/bin/env node
// Clasifica prospectos de una ficha CSV. Solo lectura: no escribe a nadie.
//
//   node prospeccion/verificar/cli.mjs --ficha archivo.csv         sin red
//   node prospeccion/verificar/cli.mjs --ficha archivo.csv --red   con GET públicos
//
// Sin --red aplica la rúbrica a columnas ya presentes en el CSV
// (web_propia, ig_estado, ig_ultimo_post); lo no presente queda no_verificable.
// Con --red hace GET públicos a la web y al Instagram de cada ficha.
// --red lo corre Diego manualmente, nunca en corridas automatizadas.

import { readFileSync } from 'node:fs'
import { clasificar } from './rubrica.mjs'
import { esHostPropio, verificarWeb } from './web.mjs'
import { clasificarFecha, verificarInstagram } from './instagram.mjs'

const NUEVAS = ['web_propia', 'ig_estado', 'pago', 'prioridad', 'motivo']

const args = process.argv.slice(2)
const iFicha = args.indexOf('--ficha')
const ficha = iFicha >= 0 ? args[iFicha + 1] : null
const red = args.includes('--red')
if (!ficha) {
  console.error('uso: node prospeccion/verificar/cli.mjs --ficha archivo.csv [--red]')
  process.exit(1)
}

// CSV con comillas estándar ("" escapa comilla, comas y saltos dentro de comillas)
export function parseCsv(texto) {
  const filas = []
  let campo = ''
  let fila = []
  let enComillas = false
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i]
    if (enComillas) {
      if (c === '"') {
        if (texto[i + 1] === '"') {
          campo += '"'
          i++
        } else enComillas = false
      } else campo += c
    } else if (c === '"') {
      enComillas = true
    } else if (c === ',') {
      fila.push(campo)
      campo = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && texto[i + 1] === '\n') i++
      fila.push(campo)
      campo = ''
      if (fila.length > 1 || fila[0] !== '') filas.push(fila)
      fila = []
    } else campo += c
  }
  fila.push(campo)
  if (fila.length > 1 || fila[0] !== '') filas.push(fila)
  return filas
}

export function csvCampo(v) {
  const s = v == null ? '' : String(v)
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

const filas = parseCsv(readFileSync(ficha, 'utf8'))
if (!filas.length) {
  console.error('ficha vacía o sin cabecera')
  process.exit(1)
}
const cabecera = filas[0].map((h) => h.trim())
const idx = Object.fromEntries(cabecera.map((h, i) => [h, i]))
const salida = [...cabecera, ...NUEVAS.filter((c) => !(c in idx))]

// Sin red: usa columnas ya presentes; infiere sin_web solo cuando el host
// del campo web no es propio o está vacío (se puede saber sin conexión).
function senalesSinRed(fila) {
  const web_propia =
    fila.web_propia || (esHostPropio(fila.web || '') ? 'no_verificable' : 'sin_web')
  const ig_estado =
    fila.ig_estado ||
    (fila.ig_ultimo_post ? clasificarFecha(fila.ig_ultimo_post) : 'no_verificable')
  return { web_propia, ig_estado, ig_ultimo_post: fila.ig_ultimo_post || null }
}

async function senalesConRed(fila) {
  const web = await verificarWeb(fila.web || '')
  const ig = await verificarInstagram(fila.instagram || '')
  return { web_propia: web.estado, ig_estado: ig.estado, ig_ultimo_post: ig.ultimo_post || null }
}

const dormir = (ms) => new Promise((r) => setTimeout(r, ms))
const lineas = [salida.map(csvCampo).join(',')]
for (const cols of filas.slice(1)) {
  const fila = Object.fromEntries(cabecera.map((h, i) => [h, cols[i] ?? '']))
  const s = red ? await senalesConRed(fila) : senalesSinRed(fila)
  const { pago, prioridad, motivo } = clasificar({ ...fila, ...s })
  const extra = { web_propia: s.web_propia, ig_estado: s.ig_estado, pago, prioridad, motivo }
  lineas.push(salida.map((c) => csvCampo(c in extra ? extra[c] : fila[c])).join(','))
  if (red) await dormir(800)
}
process.stdout.write(lineas.join('\n') + '\n')

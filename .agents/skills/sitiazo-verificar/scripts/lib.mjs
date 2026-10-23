// Piezas comunes de los scripts de verificación. Se corren desde la raíz del repo (usan su playwright y sharp).
import { createRequire } from 'node:module'
import { join } from 'node:path'

const require = createRequire(join(process.cwd(), 'package.json'))

export const { chromium } = require('playwright')
export const sharp = require('sharp')

export const MOVIL = { viewport: { width: 360, height: 780 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
export const ESCRITORIO = { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 }

/** Viewport para un ancho: bajo 768 se emula celular táctil. */
export function dispositivo(ancho) {
  if (ancho < 768) return { ...MOVIL, viewport: { width: ancho, height: 780 } }
  return { viewport: { width: ancho, height: ancho >= 1280 ? 900 : 1024 }, deviceScaleFactor: 1 }
}

export function arg(nombre, porDefecto) {
  const i = process.argv.indexOf(nombre)
  return i > -1 ? process.argv[i + 1] : porDefecto
}

export const bandera = (nombre) => process.argv.includes(nombre)

/**
 * Contexto nuevo. Si la base es un preview protegido de Vercel y existe la variable BYPASS,
 * deja la cookie de bypass (el secreto nunca se escribe en archivos ni viaja a otros dominios).
 */
export async function contexto(browser, base, opciones = {}) {
  const ctx = await browser.newContext(opciones)
  if (process.env.BYPASS && base.includes('vercel.app')) {
    const page = await ctx.newPage()
    await page.goto(`${base}/?x-vercel-protection-bypass=${process.env.BYPASS}&x-vercel-set-bypass-cookie=true`, {
      waitUntil: 'domcontentloaded',
    })
    await page.close()
  }
  return ctx
}

export const sinBarra = (url) => url.replace(/\/$/, '')

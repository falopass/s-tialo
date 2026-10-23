'use client'

import { useEffect, useRef } from 'react'
import { scroll } from 'framer-motion'

/** color: versión chica (celular); colorGrande: para pantallas donde el escenario supera ~400 px reales. */
export type FotoEscenario = { id: string; color: string; colorGrande: string }

/**
 * La pieza central de la home: la captura real de un demo pasa de estructura (ASCII) a forma
 * (dither) a publicada (color) mientras el visitante baja por los tres pasos.
 *
 * Qué comunica cada movimiento:
 * - En el hero, los caracteres arman la web de un negocio y rotan entre rubros cada ~6 s:
 *   "te armamos tu web antes de que pagues".
 * - Bajo el cursor (o con un toque) el ASCII se dispersa: la web todavía es materia blanda.
 * - Con el scroll, una disolución Bayer lleva el ASCII a dither y el dither a color: el proceso real.
 *
 * Reglas de rendimiento: se carga diferido (next/dynamic desde EscenarioVivo), DPR máximo 2,
 * dibuja solo cuando algo cambia, se pausa fuera de pantalla y con la pestaña oculta, y nunca
 * toca estado de React. Con movimiento reducido no hay rotación, dispersión ni transiciones:
 * cada paso cambia de cuadro al instante. Ningún texto vive dentro del canvas.
 */

const RAMPA = ' .:-=+*#%@'
const BAYER8 = [
  0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54,
  22, 3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29,
  53, 21,
]
const TINTA = [14, 14, 12]
const CREMA = [242, 239, 230]
const FONDO = '#181815'
const TEXTO = '#f2efe6'
const ROTACION_MS = 6000
const ENSAMBLE_MS = 900
const RAFAGA_MS = 700

type Raster = {
  w: number
  h: number
  lum: Uint8ClampedArray
  /** RGBA del dither a la resolución del raster. */
  dither: Uint8ClampedArray
  /** Umbral Bayer por píxel (0 a 255), compartido por las dos disoluciones. */
  umbral: Uint8ClampedArray
  ditherCanvas: HTMLCanvasElement
  img: HTMLImageElement
}

/** Pseudoaleatorio estable por celda: decide el orden en que se arma el ASCII. */
function hash(c: number, r: number) {
  const s = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453
  return s - Math.floor(s)
}

export default function EscenarioCanvas({ fotos }: { fotos: FotoEscenario[] }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || fotos.length === 0) return

    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const proceso = canvas.closest<HTMLElement>('.s-proceso')
    const pasosEl = proceso?.querySelector<HTMLElement>('.s-proceso-pasos') ?? null
    const pasos = pasosEl ? (Array.from(pasosEl.children) as HTMLElement[]) : []
    const mono =
      getComputedStyle(canvas).getPropertyValue('--s-f-mono').trim() || 'ui-monospace, monospace'

    const imagenes = new Map<number, Promise<HTMLImageElement>>()
    const mascara = document.createElement('canvas')
    const temporal = document.createElement('canvas')
    let raster: Raster | null = null
    let actual = 0
    let cssW = 0
    let cssH = 0
    let dpr = 1
    let progreso = 0
    let ensamblado = reducir ? 1 : 0
    let inicioEnsamble = 0
    let fuerza = 0
    let dentro = false
    let px = 0
    let py = 0
    let rafaga: { x: number; y: number; t: number } | null = null
    let visible = true
    let primeraVez = true
    let raf = 0
    let timerRotar = 0
    let vivo = true

    function cargar(i: number) {
      let p = imagenes.get(i)
      if (!p) {
        p = new Promise<HTMLImageElement>((resolver, rechazar) => {
          const img = new Image()
          img.decoding = 'async'
          img.onload = () => resolver(img)
          img.onerror = rechazar
          // En el celular basta la versión chica: el escenario mide ~200 px de ancho a 2x.
          img.src = canvas!.clientWidth * Math.min(2, window.devicePixelRatio || 1) > 400 ? fotos[i].colorGrande : fotos[i].color
        })
        imagenes.set(i, p)
      }
      return p
    }

    function prepararRaster(img: HTMLImageElement): Raster | null {
      const w = Math.max(1, Math.round(cssW))
      const h = Math.max(1, Math.round(cssH))
      const off = document.createElement('canvas')
      off.width = w
      off.height = h
      const octx = off.getContext('2d', { willReadFrequently: true })
      if (!octx) return null
      octx.drawImage(img, 0, 0, w, h)
      const rgba = octx.getImageData(0, 0, w, h).data
      const lum = new Uint8ClampedArray(w * h)
      const umbral = new Uint8ClampedArray(w * h)
      const dither = new Uint8ClampedArray(w * h * 4)
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = y * w + x
          const l = 0.2126 * rgba[i * 4] + 0.7152 * rgba[i * 4 + 1] + 0.0722 * rgba[i * 4 + 2]
          const u = BAYER8[(y & 7) * 8 + (x & 7)] * 4 + 2
          lum[i] = l
          umbral[i] = u
          const c = l > u ? CREMA : TINTA
          dither[i * 4] = c[0]
          dither[i * 4 + 1] = c[1]
          dither[i * 4 + 2] = c[2]
          dither[i * 4 + 3] = 255
        }
      }
      const ditherCanvas = document.createElement('canvas')
      ditherCanvas.width = w
      ditherCanvas.height = h
      ditherCanvas.getContext('2d')?.putImageData(new ImageData(dither, w, h), 0, 0)
      mascara.width = w
      mascara.height = h
      return { w, h, lum, dither, umbral, ditherCanvas, img }
    }

    function dibujarAscii(r: Raster, a: number) {
      const colsFin = Math.min(46, Math.max(24, Math.round(cssW / 6.5)))
      const cols = Math.round(colsFin * (0.5 + 0.5 * a))
      const cw = cssW / cols
      const ch = cw / 0.6
      const filas = Math.ceil(cssH / ch)
      ctx!.font = `500 ${(ch * 0.92).toFixed(2)}px ${mono}`
      ctx!.textBaseline = 'top'
      ctx!.fillStyle = TEXTO
      const radio = Math.min(90, cssW * 0.3)
      for (let f = 0; f < filas; f++) {
        for (let c = 0; c < cols; c++) {
          const x0 = c * cw
          const y0 = f * ch
          const sx = Math.min(r.w - 1, Math.floor(x0 + cw / 2))
          const sy = Math.min(r.h - 1, Math.floor(y0 + ch / 2))
          const k = Math.min(9, Math.floor((r.lum[sy * r.w + sx] / 256) * 10))
          if (k === 0) continue
          if (ensamblado < 1 && hash(c, f) > ensamblado) continue
          let dx = 0
          let dy = 0
          if (fuerza > 0.01) {
            const ex = x0 + cw / 2 - px
            const ey = y0 + ch / 2 - py
            const d = Math.hypot(ex, ey)
            if (d < radio && d > 0.001) {
              const empuje = (1 - d / radio) ** 2 * 32 * fuerza
              dx = (ex / d) * empuje
              dy = (ey / d) * empuje
            }
          }
          ctx!.fillText(RAMPA[k], x0 + dx, y0 + dy)
        }
      }
    }

    /** Disolución ordenada: muestra el dither donde el umbral Bayer queda bajo el avance. */
    function dibujarDitherParcial(r: Raster, b: number) {
      const mctx = mascara.getContext('2d')
      if (!mctx) return
      const datos = mctx.createImageData(r.w, r.h)
      const limite = b * 256
      for (let i = 0; i < r.w * r.h; i++) {
        if (r.umbral[i] >= limite) continue
        datos.data[i * 4] = r.dither[i * 4]
        datos.data[i * 4 + 1] = r.dither[i * 4 + 1]
        datos.data[i * 4 + 2] = r.dither[i * 4 + 2]
        datos.data[i * 4 + 3] = 255
      }
      mctx.putImageData(datos, 0, 0)
      ctx!.imageSmoothingEnabled = false
      ctx!.drawImage(mascara, 0, 0, cssW, cssH)
    }

    /** Misma disolución, ahora del dither al color, con la foto a resolución completa. */
    function dibujarColorParcial(r: Raster, c: number) {
      if (c >= 0.999) {
        ctx!.imageSmoothingEnabled = true
        ctx!.drawImage(r.img, 0, 0, cssW, cssH)
        return
      }
      const mctx = mascara.getContext('2d')
      const tctx = temporal.getContext('2d')
      if (!mctx || !tctx) return
      const datos = mctx.createImageData(r.w, r.h)
      const limite = c * 256
      for (let i = 0; i < r.w * r.h; i++) {
        if (r.umbral[i] < limite) datos.data[i * 4 + 3] = 255
      }
      mctx.putImageData(datos, 0, 0)
      tctx.setTransform(1, 0, 0, 1, 0, 0)
      tctx.globalCompositeOperation = 'source-over'
      tctx.clearRect(0, 0, temporal.width, temporal.height)
      tctx.imageSmoothingEnabled = true
      tctx.drawImage(r.img, 0, 0, temporal.width, temporal.height)
      tctx.globalCompositeOperation = 'destination-in'
      tctx.imageSmoothingEnabled = false
      tctx.drawImage(mascara, 0, 0, temporal.width, temporal.height)
      tctx.globalCompositeOperation = 'source-over'
      ctx!.drawImage(temporal, 0, 0, cssW, cssH)
    }

    function dibujar() {
      const r = raster
      if (!r || !ctx) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = FONDO
      ctx.fillRect(0, 0, cssW, cssH)
      const p = progreso
      if (p <= 1 / 3) {
        dibujarAscii(r, p * 3)
      } else if (p <= 2 / 3) {
        dibujarAscii(r, 1)
        dibujarDitherParcial(r, (p - 1 / 3) * 3)
      } else {
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(r.ditherCanvas, 0, 0, cssW, cssH)
        dibujarColorParcial(r, (p - 2 / 3) * 3)
      }
    }

    function pedir() {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(tick)
    }

    function tick(t: number) {
      raf = 0
      let seguir = false
      if (ensamblado < 1) {
        ensamblado = Math.min(1, (t - inicioEnsamble) / ENSAMBLE_MS)
        seguir = true
      }
      if (rafaga) {
        const e = (t - rafaga.t) / RAFAGA_MS
        if (e >= 1) {
          rafaga = null
          fuerza = 0
        } else {
          px = rafaga.x
          py = rafaga.y
          fuerza = Math.sin(Math.PI * Math.min(1, e * 1.4)) * (1 - e)
          seguir = true
        }
      } else {
        const objetivo = dentro && progreso <= 1 / 3 ? 1 : 0
        fuerza += (objetivo - fuerza) * 0.16
        if (Math.abs(objetivo - fuerza) > 0.01) seguir = true
        else fuerza = objetivo
      }
      dibujar()
      if (seguir) pedir()
    }

    function programarRotacion() {
      window.clearTimeout(timerRotar)
      if (reducir || fotos.length < 2 || progreso > 0.01 || !visible || document.hidden) return
      timerRotar = window.setTimeout(async () => {
        const siguiente = (actual + 1) % fotos.length
        try {
          const img = await cargar(siguiente)
          if (!vivo || progreso > 0.01) return
          actual = siguiente
          raster = prepararRaster(img)
          ensamblado = 0
          inicioEnsamble = performance.now()
          pedir()
          cargar((siguiente + 1) % fotos.length)
        } catch {
          // Si una foto no carga, se queda la actual.
        }
        programarRotacion()
      }, ROTACION_MS)
    }

    function medir() {
      const r = canvas!.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      cssW = r.width
      cssH = r.height
      dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas!.width = Math.round(cssW * dpr)
      canvas!.height = Math.round(cssH * dpr)
      temporal.width = canvas!.width
      temporal.height = canvas!.height
      if (raster) raster = prepararRaster(raster.img)
      dibujar()
    }

    // Progreso de los tres pasos (scroll de framer-motion: batched, sin listener propio de scroll).
    const cancelarScroll = pasosEl
      ? scroll(
          (p: number) => {
            const idx = p <= 0 ? -1 : Math.min(2, Math.floor(p * 3))
            pasos.forEach((li, i) => {
              if (i === idx) li.dataset.activo = ''
              else delete li.dataset.activo
            })
            const nuevo = reducir ? [0, 0.2, 0.5, 1][idx + 1] : p
            if (nuevo === progreso) return
            progreso = nuevo
            if (progreso > 0.01) {
              window.clearTimeout(timerRotar)
              ensamblado = 1
            } else programarRotacion()
            pedir()
          },
          { target: pasosEl, offset: [[0, 0.85], [1, 0.6]] },
        )
      : () => {}

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting
      if (!visible) {
        window.clearTimeout(timerRotar)
        return
      }
      if (primeraVez && !reducir && !window.matchMedia('(hover: hover)').matches) {
        // En el celular no hay hover: la dispersión se dispara al entrar en pantalla.
        rafaga = { x: cssW / 2, y: cssH * 0.4, t: performance.now() + ENSAMBLE_MS }
      }
      primeraVez = false
      pedir()
      programarRotacion()
    })

    const ro = new ResizeObserver(medir)

    const alMover = (e: PointerEvent) => {
      if (reducir || e.pointerType !== 'mouse') return
      const r = canvas!.getBoundingClientRect()
      px = e.clientX - r.left
      py = e.clientY - r.top
      dentro = true
      pedir()
    }
    const alSalir = () => {
      dentro = false
      pedir()
    }
    const alTocar = (e: PointerEvent) => {
      if (reducir || e.pointerType === 'mouse' || progreso > 1 / 3) return
      const r = canvas!.getBoundingClientRect()
      rafaga = { x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() }
      pedir()
    }
    const alCambiarPestana = () => {
      if (document.hidden) window.clearTimeout(timerRotar)
      else {
        pedir()
        programarRotacion()
      }
    }

    ;(async () => {
      try {
        await document.fonts?.load(`16px ${mono}`)
      } catch {
        // Sin la fuente se usa la mono del sistema.
      }
      const img = await cargar(0)
      if (!vivo) return
      medir()
      raster = prepararRaster(img)
      inicioEnsamble = performance.now()
      proceso?.setAttribute('data-vivo', '')
      canvas.style.opacity = '1'
      dibujar()
      pedir()
      ro.observe(canvas)
      io.observe(canvas)
      canvas.addEventListener('pointermove', alMover)
      canvas.addEventListener('pointerleave', alSalir)
      canvas.addEventListener('pointerdown', alTocar)
      document.addEventListener('visibilitychange', alCambiarPestana)
      if (fotos.length > 1) cargar(1)
    })().catch(() => {
      // Si la foto no carga, queda el póster en dither.
    })

    return () => {
      vivo = false
      cancelAnimationFrame(raf)
      window.clearTimeout(timerRotar)
      cancelarScroll()
      io.disconnect()
      ro.disconnect()
      canvas.removeEventListener('pointermove', alMover)
      canvas.removeEventListener('pointerleave', alSalir)
      canvas.removeEventListener('pointerdown', alTocar)
      document.removeEventListener('visibilitychange', alCambiarPestana)
      proceso?.removeAttribute('data-vivo')
      pasos.forEach((li) => delete li.dataset.activo)
    }
  }, [fotos])

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 size-full opacity-0" />
}

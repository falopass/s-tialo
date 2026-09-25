'use client'

import { useState } from 'react'
import type { Demo } from './data'

/**
 * Cotizador de impresión del demo: arma el mensaje del pedido
 * (producto, cantidad, tamaño y detalle) y lo abre en WhatsApp
 * del negocio, como haría el sitio real. No guarda datos.
 */
export function DemoQuoter({
  demo,
  products,
  sizes,
}: {
  demo: Demo
  products: string[]
  sizes: string[]
}) {
  const t = demo.theme
  const [producto, setProducto] = useState(products[0] ?? '')
  const [cantidad, setCantidad] = useState('')
  const [tamano, setTamano] = useState(sizes[0] ?? '')
  const [detalle, setDetalle] = useState('')

  const mensaje = [
    `Hola ${demo.name}! Quiero cotizar una impresión:`,
    `- Producto: ${producto}`,
    cantidad.trim() ? `- Cantidad: ${cantidad.trim()}` : '',
    `- Tamaño: ${tamano}`,
    detalle.trim() ? `- Detalle: ${detalle.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    window.open(
      `https://wa.me/${demo.whatsapp}?text=${encodeURIComponent(mensaje)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const inputStyle = {
    backgroundColor: '#FFFFFF',
    borderColor: t.line,
    borderRadius: t.radius,
    color: t.ink,
  }
  const labelStyle = { color: t.muted }
  const labelClass =
    'block font-mono text-[11px] uppercase tracking-[0.12em] mb-1.5'
  const fieldClass = 'w-full border px-3.5 py-2.5 text-sm'

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
      <form
        onSubmit={handleSubmit}
        className="border p-5 md:p-6 space-y-4"
        style={{ borderColor: t.ink, borderRadius: t.radius }}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="quote-producto"
              className={labelClass}
              style={labelStyle}
            >
              Producto
            </label>
            <select
              id="quote-producto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              className={fieldClass}
              style={inputStyle}
            >
              {products.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="quote-cantidad"
              className={labelClass}
              style={labelStyle}
            >
              Cantidad
            </label>
            <input
              id="quote-cantidad"
              type="text"
              inputMode="numeric"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="ej: 500 unidades"
              className={fieldClass}
              style={inputStyle}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="quote-tamano"
            className={labelClass}
            style={labelStyle}
          >
            Tamaño
          </label>
          <select
            id="quote-tamano"
            value={tamano}
            onChange={(e) => setTamano(e.target.value)}
            className={fieldClass}
            style={inputStyle}
          >
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="quote-detalle"
            className={labelClass}
            style={labelStyle}
          >
            Detalle{' '}
            <span className="normal-case tracking-normal">(opcional)</span>
          </label>
          <textarea
            id="quote-detalle"
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
            rows={3}
            placeholder="Papel, caras, si tienes el arte listo, plazo…"
            className={`${fieldClass} resize-y`}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          className="w-full font-semibold text-sm px-6 py-3 transition-transform active:scale-[0.98]"
          style={{
            backgroundColor: t.accent,
            color: t.accentInk,
            borderRadius: t.radius,
          }}
        >
          Enviar cotización por WhatsApp
        </button>
        <p className="text-xs" style={{ color: t.muted }}>
          Se abre WhatsApp con el mensaje listo para enviar. No guardamos tus
          datos.
        </p>
      </form>

      <aside
        className="border p-5 md:p-6"
        style={{
          borderColor: t.line,
          backgroundColor: t.soft,
          borderRadius: t.radius,
        }}
      >
        <p
          className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3"
          style={{ color: t.muted }}
        >
          Tu mensaje
        </p>
        <p className="font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {mensaje}
        </p>
        <p
          className="mt-4 pt-4 border-t text-xs leading-relaxed"
          style={{ borderColor: t.line, color: t.muted }}
        >
          Lo recibe el taller y te responde con valor y plazo. Si tienes el
          arte, lo adjuntas en el mismo chat.
        </p>
      </aside>
    </div>
  )
}

/**
 * Cotizador por medidas del demo: producto, ancho × alto y tipo de
 * vidrio arman el mensaje que se abre en el WhatsApp del negocio,
 * como haría el sitio real. No guarda datos.
 */
export function DemoMeasure({
  demo,
  products,
  glasses,
}: {
  demo: Demo
  products: string[]
  glasses: string[]
}) {
  const t = demo.theme
  const [producto, setProducto] = useState(products[0] ?? '')
  const [ancho, setAncho] = useState('')
  const [alto, setAlto] = useState('')
  const [vidrio, setVidrio] = useState(glasses[0] ?? '')
  const [detalle, setDetalle] = useState('')

  const medidas =
    ancho.trim() || alto.trim()
      ? `${ancho.trim() || '?'} × ${alto.trim() || '?'} cm`
      : null

  const mensaje = [
    `Hola ${demo.name}! Quiero cotizar a medida:`,
    `- Producto: ${producto}`,
    medidas ? `- Medidas: ${medidas} (ancho × alto)` : '',
    `- Vidrio: ${vidrio}`,
    detalle.trim() ? `- Detalle: ${detalle.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    window.open(
      `https://wa.me/${demo.whatsapp}?text=${encodeURIComponent(mensaje)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const inputStyle = {
    backgroundColor: '#FFFFFF',
    borderColor: t.line,
    borderRadius: t.radius,
    color: t.ink,
  }
  const labelStyle = { color: t.muted }
  const labelClass =
    'block font-mono text-[11px] uppercase tracking-[0.12em] mb-1.5'
  const fieldClass = 'w-full border px-3.5 py-2.5 text-sm'

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
      <form
        onSubmit={handleSubmit}
        className="border p-5 md:p-6 space-y-4"
        style={{ borderColor: t.ink, borderRadius: t.radius }}
      >
        <div>
          <label
            htmlFor="measure-producto"
            className={labelClass}
            style={labelStyle}
          >
            Qué necesitas
          </label>
          <select
            id="measure-producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            className={fieldClass}
            style={inputStyle}
          >
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="measure-ancho"
              className={labelClass}
              style={labelStyle}
            >
              Ancho (cm)
            </label>
            <input
              id="measure-ancho"
              type="text"
              inputMode="decimal"
              value={ancho}
              onChange={(e) => setAncho(e.target.value)}
              placeholder="ej: 120"
              className={fieldClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label
              htmlFor="measure-alto"
              className={labelClass}
              style={labelStyle}
            >
              Alto (cm)
            </label>
            <input
              id="measure-alto"
              type="text"
              inputMode="decimal"
              value={alto}
              onChange={(e) => setAlto(e.target.value)}
              placeholder="ej: 150"
              className={fieldClass}
              style={inputStyle}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="measure-vidrio"
            className={labelClass}
            style={labelStyle}
          >
            Tipo de vidrio
          </label>
          <select
            id="measure-vidrio"
            value={vidrio}
            onChange={(e) => setVidrio(e.target.value)}
            className={fieldClass}
            style={inputStyle}
          >
            {glasses.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="measure-detalle"
            className={labelClass}
            style={labelStyle}
          >
            Detalle{' '}
            <span className="normal-case tracking-normal">(opcional)</span>
          </label>
          <textarea
            id="measure-detalle"
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
            rows={3}
            placeholder="Color del perfil, si es para baño o exterior, cantidad de piezas…"
            className={`${fieldClass} resize-y`}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          className="w-full font-semibold text-sm px-6 py-3 transition-transform active:scale-[0.98]"
          style={{
            backgroundColor: t.accent,
            color: t.accentInk,
            borderRadius: t.radius,
          }}
        >
          Enviar medidas por WhatsApp
        </button>
        <p className="text-xs" style={{ color: t.muted }}>
          Se abre WhatsApp con el mensaje listo para enviar. No guardamos tus
          datos.
        </p>
      </form>

      <aside
        className="border p-5 md:p-6"
        style={{
          borderColor: t.line,
          backgroundColor: t.soft,
          borderRadius: t.radius,
        }}
      >
        <p
          className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3"
          style={{ color: t.muted }}
        >
          Tu mensaje
        </p>
        <p className="font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {mensaje}
        </p>
        <p
          className="mt-4 pt-4 border-t text-xs leading-relaxed"
          style={{ borderColor: t.line, color: t.muted }}
        >
          Lo recibe el taller y te responde con valor y plazo. Si no tienes
          las medidas exactas, agenda una visita de medición.
        </p>
      </aside>
    </div>
  )
}

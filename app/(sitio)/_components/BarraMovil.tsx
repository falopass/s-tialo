'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { BotonDemo } from './BotonDemo'

const CLAVE_COOKIES = 'sitiazo_cookie_consent'
const EVENTO_COOKIES = 'sitiazo:cookies'

/**
 * Barra fija inferior con el CTA, solo en el celular. Qué comunica: pedir el demo
 * siempre está a un toque. Aparece cuando ya bajaste y ningún CTA principal está
 * en pantalla (no tapa el botón de la sección que estás leyendo), y nunca mientras
 * el aviso de cookies está abierto. Sin listeners de scroll: dos IntersectionObserver.
 */
export function BarraMovil() {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const [lejos, setLejos] = useState(false)
  const [ctaEnPantalla, setCtaEnPantalla] = useState(true)
  const [cookiesOk, setCookiesOk] = useState(true)

  // Un centinela invisible de 400 px al tope del sitio: mientras se vea, aún no bajas.
  useEffect(() => {
    const raiz = ref.current?.closest('[data-sitio]') ?? document.body
    const sentinela = document.createElement('div')
    sentinela.setAttribute('aria-hidden', 'true')
    Object.assign(sentinela.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '1px',
      height: '400px',
      pointerEvents: 'none',
    })
    raiz.appendChild(sentinela)
    const io = new IntersectionObserver(([e]) => setLejos(!e.isIntersecting))
    io.observe(sentinela)
    return () => {
      io.disconnect()
      sentinela.remove()
    }
  }, [pathname])

  // Los CTA principales de la página actual: la barra cede si alguno está a la vista.
  useEffect(() => {
    const marcas = [...document.querySelectorAll('[data-cta-principal]')]
    if (marcas.length === 0) {
      setCtaEnPantalla(false)
      return
    }
    const visibles = new Set<Element>()
    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) visibles.add(e.target)
        else visibles.delete(e.target)
      }
      setCtaEnPantalla(visibles.size > 0)
    })
    marcas.forEach((m) => io.observe(m))
    return () => io.disconnect()
  }, [pathname])

  // Mientras el aviso de cookies no se ha respondido, la barra no aparece.
  useEffect(() => {
    try {
      setCookiesOk(!!localStorage.getItem(CLAVE_COOKIES))
    } catch {
      setCookiesOk(true) // Sin localStorage tampoco hay aviso de cookies.
    }
    const aceptada = () => setCookiesOk(true)
    window.addEventListener(EVENTO_COOKIES, aceptada)
    return () => window.removeEventListener(EVENTO_COOKIES, aceptada)
  }, [])

  const visible = lejos && !ctaEnPantalla && cookiesOk

  return (
    <div
      ref={ref}
      inert={!visible}
      data-visible={visible ? '' : undefined}
      className="s-barra fixed inset-x-0 bottom-0 z-40 border-t border-(--s-linea) bg-(--s-tinta)/85 backdrop-blur-md lg:hidden"
    >
      <div className="s-wrap py-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]">
        <div className="[&>*]:w-full">
          <BotonDemo origen="barra-movil" className="w-full" />
        </div>
      </div>
    </div>
  )
}

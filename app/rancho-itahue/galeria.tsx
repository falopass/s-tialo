'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { Photo } from './content'

const PRIMERAS = 8

/**
 * Grilla de fotos con lightbox sobre <dialog> nativo: el backdrop, el foco
 * atrapado y el Escape vienen gratis del navegador. Al cerrar se devuelve el
 * foco a la miniatura que lo abrió.
 */
export function Galeria({ photos }: { photos: readonly Photo[] }) {
  const [showAll, setShowAll] = useState(false)
  const [current, setCurrent] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)

  const visibles = showAll ? photos : photos.slice(0, PRIMERAS)
  const n = photos.length

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    if (current !== null && !dlg.open) dlg.showModal()
  }, [current])

  const openAt = (i: number, el: HTMLButtonElement) => {
    openerRef.current = el
    setCurrent(i)
  }

  const prev = () => setCurrent((i) => (i === null ? null : (i - 1 + n) % n))
  const next = () => setCurrent((i) => (i === null ? null : (i + 1) % n))

  const btnNav =
    'w-11 h-11 flex items-center justify-center rounded-full text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {visibles.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`Ampliar foto: ${p.alt}`}
            onClick={(e) => openAt(i, e.currentTarget)}
            className="group relative aspect-square overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E20411]"
          >
            <Image
              src={p.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      {!showAll && n > PRIMERAS && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-bold transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E20411]"
            style={{ border: '1.5px solid #2C2C28', color: '#2C2C28' }}
          >
            Ver las {n} fotos
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="m-0 max-w-none max-h-none w-screen h-[100dvh] p-0 bg-black/90"
        onClose={() => {
          setCurrent(null)
          openerRef.current?.focus()
          openerRef.current = null
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close()
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prev()
          if (e.key === 'ArrowRight') next()
        }}
        aria-label="Foto ampliada"
      >
        {current !== null && (
          // El clic en el fondo oscuro (zona sin contenido) cierra: el target
          // es el propio contenedor, no un hijo.
          <div
            className="w-full h-full flex flex-col text-white"
            onClick={(e) => {
              if (e.target === e.currentTarget) dialogRef.current?.close()
            }}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <p className="text-sm text-white/85">
                {current + 1} / {n}
              </p>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => dialogRef.current?.close()}
                className={btnNav}
              >
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>
            </div>
            <div className="relative w-full h-[70svh] md:h-[80svh]">
              <Image
                src={photos[current].src}
                alt={photos[current].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <p className="text-sm text-white/85 leading-snug min-w-0">
                {photos[current].alt}
              </p>
              <div className="flex gap-2 shrink-0">
                <button type="button" aria-label="Foto anterior" onClick={prev} className={btnNav}>
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 4l-6 6 6 6" />
                  </svg>
                </button>
                <button type="button" aria-label="Foto siguiente" onClick={next} className={btnNav}>
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 4l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

'use client'

/**
 * ホテルのキーホルダー: リング、チェーン、セクション番号入りの菱形タグ。
 * ビューポートに入ったとき一度だけ小さく揺れる。
 * prefers-reduced-motion では最初から静止。
 */
import { useEffect, useRef, useState } from 'react'

export default function Llavero({
  num,
  fob = '#6E1E2B',
  ink = '#F4EDE3',
  ring = '#D98E3C',
  className = '',
}: {
  num: string
  fob?: string
  ink?: string
  ring?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [swing, setSwing] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSwing(true)
          io.disconnect()
        }
      },
      { threshold: 0.7 },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setSwing(true), 2400)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative w-[64px] h-[104px] shrink-0 select-none ${swing ? 'hmv-swing' : ''} ${className}`}
      style={{ transformOrigin: '50% 11px' }}
      aria-hidden="true"
    >
      {/* anilla */}
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full"
        style={{ border: `2.5px solid ${ring}` }}
      />
      {/* eslabón */}
      <span
        className="absolute top-[24px] left-1/2 -translate-x-1/2 w-[3px] h-[9px] rounded-full"
        style={{ backgroundColor: ring }}
      />
      {/* rombo del llavero */}
      <span
        className="absolute top-[32px] left-1/2 w-[52px] h-[52px] rounded-[9px]"
        style={{
          transform: 'translateX(-50%) rotate(45deg)',
          backgroundColor: fob,
          boxShadow: '0 8px 18px rgba(30,27,25,0.28), inset 0 0 0 1px rgba(244,237,227,0.28)',
        }}
      >
        <span
          className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full"
          style={{ backgroundColor: 'rgba(244,237,227,0.35)' }}
        />
        <span className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(-45deg)' }}>
          <span className="text-[19px] leading-none" style={{ color: ink }}>
            {num}
          </span>
        </span>
      </span>
    </div>
  )
}

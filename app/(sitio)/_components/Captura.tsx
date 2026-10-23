import { imagen } from '../_lib/imagenes'

/** Imagen real del manifiesto (captura o still-life), con ancho y alto explícitos para no generar CLS. */
export function Captura({
  id,
  className = '',
  eager = false,
}: {
  id: string
  className?: string
  eager?: boolean
}) {
  const i = imagen(id)
  return (
    <img
      src={`/${i.src.replace(/^public\//, '')}`}
      alt={i.alt}
      width={i.ancho}
      height={i.alto}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}

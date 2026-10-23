import { altoPara, anchoDither, anchosColor, imagen, rutaColor, rutaDither, srcsetColor } from '../_lib/imagenes'

type Props = {
  id: string
  className?: string
  eager?: boolean
  /** Ancho que ocupa la imagen en pantalla, para que el navegador elija del srcset. */
  sizes?: string
  /** Capa repetida de otra imagen: sin alt para no duplicar la descripción. */
  decorativa?: boolean
}

/**
 * Imagen real del manifiesto a color (la etapa "publicada"), con srcset generado en el build
 * por scripts/dither.mjs y ancho y alto explícitos para no generar CLS.
 */
export function Captura({
  id,
  className = '',
  eager = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  decorativa = false,
}: Props) {
  const i = imagen(id)
  const [chico] = anchosColor(i)
  return (
    <img
      src={rutaColor(i, chico)}
      srcSet={srcsetColor(i)}
      sizes={sizes}
      alt={decorativa ? '' : i.alt}
      aria-hidden={decorativa || undefined}
      width={chico}
      height={altoPara(i, chico)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}

/** La misma imagen en dither de dos tonos (la etapa "forma"). Píxeles nítidos, sin suavizado. */
export function CapturaDither({ id, className = '', eager = false }: Omit<Props, 'sizes' | 'decorativa'>) {
  const i = imagen(id)
  const w = anchoDither(i)
  return (
    <img
      src={rutaDither(i)}
      alt={i.alt}
      width={w}
      height={altoPara(i, w)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`s-pixelado ${className}`}
    />
  )
}

/**
 * Dither con la versión a color encima, oculta hasta que el visitante interactúa
 * (cursor en escritorio, entrada en pantalla en el celular). La lógica vive en RevelaColor.
 * Sin JavaScript se ve el dither, que es la presentación base.
 */
export function CapturaRevela({ id, className = '', imgClassName = '', sizes }: Props & { imgClassName?: string }) {
  return (
    <span className={`s-revela-color ${className}`}>
      <CapturaDither id={id} className={imgClassName} />
      <Captura id={id} sizes={sizes} decorativa className={`s-revela-capa ${imgClassName}`} />
    </span>
  )
}

import { imagen } from '../_lib/imagenes'
import { Captura } from './Captura'

/** Tarjeta de un demo real. Enlaza con <a> (carga completa) para que el demo cargue en un documento limpio. */
export function TarjetaDemo({ id, className = '' }: { id: string; className?: string }) {
  const i = imagen(id)
  return (
    <a href={`/demos/${i.demo}/`} className={`group block ${className}`}>
      <div className="s-tarjeta-marco relative aspect-[3/4] overflow-hidden rounded-[18px] border border-(--s-linea) bg-(--s-tinta-2)">
        <Captura id={id} className="absolute inset-0 size-full object-cover object-top" />
      </div>
      <h3 className="mt-3.5 font-semibold leading-snug text-(--s-crema) group-hover:underline group-hover:decoration-(--s-amarillo) group-hover:decoration-2 group-hover:underline-offset-4">
        {i.nombre}
      </h3>
      <p className="text-[15px] text-(--s-ceniza)">
        {i.rubro}, {i.ciudad}
      </p>
    </a>
  )
}

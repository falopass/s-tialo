import { imagen } from '../_lib/imagenes'
import { CapturaRevela } from './Captura'

/** Un demo publicado por rubro, distintos de los de la grilla "Uno como el tuyo" para mostrar amplitud y no repetir. */
const TIRA = ['nailsyus', 'san-clemente', 'infinity', 'mym', 'ius', 'vista-hermosa', 'prosaluddental', 'fabiana']

/**
 * Tira de demos de otros rubros en dither. Qué comunica: la amplitud de rubros, con demos reales
 * en vez de palabras. Con scroll-driven animations la tira se desliza en horizontal según el scroll
 * de la página (sin loop) y cada captura pasa a color al entrar o con el cursor. Sin soporte o con
 * movimiento reducido es una fila que se desliza con el dedo.
 * Enlaza con <a> (carga completa) para que el demo cargue en un documento limpio.
 */
export function TiraRubros() {
  return (
    <section className="s-tira border-y border-(--s-linea) py-10 md:py-14" aria-label="Demos de otros rubros">
      <ul className="s-tira-pista">
        {TIRA.map((id) => {
          const i = imagen(id)
          return (
            <li key={id} className="s-tira-item">
              <a href={`/demos/${i.demo}/`} className="group block">
                <span className="relative block aspect-[3/4] overflow-hidden rounded-[18px] border border-(--s-linea) bg-(--s-tinta-2)">
                  <CapturaRevela
                    id={id}
                    sizes="(min-width: 768px) 250px, 40vw"
                    className="absolute inset-0"
                    imgClassName="object-cover object-top"
                  />
                </span>
                <span className="s-mono mt-3.5 block text-(--s-crema)">{i.rubro}</span>
                <span className="mt-1 block text-[15px] text-(--s-ceniza) group-hover:text-(--s-crema-2)">
                  {i.nombre}, {i.ciudad}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

import { anchosColor, imagen, rutaColor } from '../_lib/imagenes'
import { CapturaDither } from './Captura'
import { EscenarioVivo } from './EscenarioVivo'

/**
 * El objeto que atraviesa la home: la captura real de un demo en formato celular.
 * En el servidor se pinta el póster en dither (nítido, liviano); encima se monta el canvas
 * que hace el recorrido ASCII, dither y color. Sin JavaScript queda el póster.
 */
export function Escenario({ ids }: { ids: string[] }) {
  const fotos = ids.map((id) => {
    const i = imagen(id)
    return { id, color: rutaColor(i, anchosColor(i)[1]) }
  })
  return (
    <div className="s-escenario">
      <CapturaDither id={ids[0]} eager className="absolute inset-0 size-full object-cover" />
      <EscenarioVivo fotos={fotos} />
    </div>
  )
}

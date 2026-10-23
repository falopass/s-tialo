import { CapturaDither } from './Captura'

/**
 * El objeto que atraviesa la home: la captura real de un demo en formato celular.
 * Versión estática (póster). La pieza animada (ASCII, dither, color) se monta encima en el cliente.
 */
export function Escenario({ id }: { id: string }) {
  return (
    <div className="s-escenario">
      <CapturaDither id={id} eager className="absolute inset-0 size-full object-cover" />
    </div>
  )
}

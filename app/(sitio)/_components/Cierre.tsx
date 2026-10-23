import { BotonDemo } from './BotonDemo'

/** Cierre de página: el punto amarillo de la marca y el único CTA, pedir el demo. */
export function Cierre({
  titulo = (
    <>
      Tu demo puede estar listo <em>pasado mañana.</em>
    </>
  ),
  bajada = 'Mándanos tu Instagram o tu ficha de Google. Verlo no cuesta nada.',
}: {
  titulo?: React.ReactNode
  bajada?: string
}) {
  return (
    <section className="border-t border-(--s-linea)">
      <div className="s-wrap s-revela flex flex-col items-center py-28 text-center md:py-40">
        <span aria-hidden="true" className="mb-9 size-[18px] rounded-full bg-(--s-amarillo)" />
        <h2 className="s-display mx-auto max-w-[15ch] text-[clamp(2.5rem,6vw,5.5rem)]">{titulo}</h2>
        <p className="s-lead mx-auto mt-6">{bajada}</p>
        <div className="mt-10">
          <BotonDemo />
        </div>
      </div>
    </section>
  )
}

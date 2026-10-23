'use client'

import { linkDemo } from '../_lib/contacto'
import { guardarNegocio, useNegocioCrudo } from '../_lib/negocio'

/**
 * "¿Cómo se llama tu negocio?" en el hero. Qué comunica: tu web empieza aquí. Mientras el
 * visitante escribe, el canvas arma ese nombre en ASCII sobre la captura, y todos los botones
 * de WhatsApp del sitio lo llevan en el mensaje. Es opcional: el CTA funciona sin él.
 * Enter abre WhatsApp con el mensaje listo.
 */
export function TuNegocio() {
  const texto = useNegocioCrudo()

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    window.open(linkDemo({ negocio: texto }), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={enviar} className="s-negocio" aria-label="Tu negocio">
      <label htmlFor="s-negocio" className="sr-only">
        ¿Cómo se llama tu negocio?
      </label>
      <input
        id="s-negocio"
        type="text"
        value={texto}
        onChange={(e) => guardarNegocio(e.target.value)}
        placeholder="¿Cómo se llama tu negocio?"
        maxLength={48}
        autoComplete="organization"
        enterKeyHint="send"
        spellCheck={false}
        className="s-campo"
      />
    </form>
  )
}

import { useSyncExternalStore } from 'react'
import { limpiarNegocio } from './contacto'

/**
 * El nombre del negocio que el visitante escribe en el hero. Lo leen los botones de WhatsApp
 * (para prellenar el mensaje) y el canvas del hero (para armar el nombre en ASCII), sin estado
 * de React compartido. Vive en sessionStorage: dura la visita y no sale del navegador.
 * Solo para componentes cliente.
 */
const CLAVE = 'sitiazo:negocio'
let valor: string | null = null
const oyentes = new Set<() => void>()

export function leerNegocio(): string {
  if (valor === null) {
    try {
      valor = sessionStorage.getItem(CLAVE) ?? ''
    } catch {
      valor = ''
    }
  }
  return valor
}

/** Guarda el texto tal cual se escribe (para el campo) y avisa a los suscriptores. */
export function guardarNegocio(texto: string) {
  valor = texto.slice(0, 64)
  try {
    if (limpiarNegocio(valor)) sessionStorage.setItem(CLAVE, valor)
    else sessionStorage.removeItem(CLAVE)
  } catch {
    // Sin almacenamiento, el nombre dura hasta recargar.
  }
  oyentes.forEach((f) => f())
}

export function suscribirNegocio(f: () => void) {
  oyentes.add(f)
  return () => {
    oyentes.delete(f)
  }
}

/** Texto tal cual lo escribió el visitante (para el campo del hero). En el servidor es ''. */
export function useNegocioCrudo(): string {
  return useSyncExternalStore(suscribirNegocio, leerNegocio, () => '')
}

/** Nombre del negocio ya limpio, para mensajes. */
export function useNegocio(): string {
  return limpiarNegocio(useNegocioCrudo())
}

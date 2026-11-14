/**
 * plantillas/contrato.ts
 *
 * El contrato entre la ficha del negocio y las plantillas de
 * plantillas/familias/. Una ficha se llena solo con datos reales
 * verificados del prospecto (Google Maps, Instagram, Facebook, la
 * conversación de WhatsApp). Nada se inventa.
 *
 * Regla de los huecos: lo que la ficha no trae queda como '' o [] y la
 * plantilla lo muestra como pendiente («Falta: horario»), nunca con un
 * horario, teléfono, dirección, precio o reseña inventados.
 */

/** Familia de esqueleto que mejor calza con el negocio. */
export type FamiliaPlantilla = 'servicio' | 'comida' | 'catalogo'

/**
 * Un servicio, plato o producto. `linea` es una descripción real de una
 * línea, tal como la contaría el negocio; no un slogan inventado.
 */
export interface ServicioFicha {
  nombre: string
  linea: string
  /**
   * Precio real tal como lo muestra el negocio: «$8.000», «$12.000 c/u».
   * Opcional: si no viene, la plantilla no muestra precio ni un «desde»
   * inventado.
   */
  precio?: string
}

/**
 * Foto real del negocio. `ruta` es la ruta local al archivo (relativa al
 * JSON de la ficha); `alt` describe lo que se ve en la foto.
 */
export interface FotoFicha {
  ruta: string
  alt: string
}

/**
 * La ficha de un prospecto que ya pidió su demo gratis.
 *
 * Campos mínimos: `nombre`, `rubro`, `ciudad`, `whatsapp`, al menos un
 * servicio y al menos una foto cuyo archivo exista. `direccion`,
 * `horario`, `reserva` y el `precio` de cada servicio son opcionales:
 * lo que no viene no se menciona.
 */
export interface FichaNegocio {
  /** Qué familia de esqueleto usar. */
  familia: FamiliaPlantilla
  /** Nombre comercial real, tal como aparece en la ficha de Google. */
  nombre: string
  /** Rubro real en una frase corta: «Peluquería», «Restobar», «Taller mecánico». */
  rubro: string
  /** Ciudad o comuna real. */
  ciudad: string
  /** WhatsApp del negocio, solo dígitos con código de país: «56912345678». */
  whatsapp: string
  /** Dirección real con calle y número. Opcional. */
  direccion?: string
  /** Horario real en una línea: «Lunes a viernes · 9:30 a 18:00». Opcional. */
  horario?: string
  /**
   * Solo familia 'comida': true si el negocio realmente toma reservas.
   * Opcional; sin este campo la página no promete reserva ni mesa.
   */
  reserva?: boolean
  /** Al menos uno. */
  servicios: ServicioFicha[]
  /** Al menos una, con el archivo existente en `ruta`. */
  fotos: FotoFicha[]
}

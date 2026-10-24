# REVIEW.md — s-tialo (Sitiazo)

Instrucciones para el revisor automático (Devin Review). Responde en español neutro chileno, sin voseo.

## Contexto
Sitio de Sitiazo: Next.js 16 + Turbopack, Tailwind v4, `output: 'export'` (estático, sin runtime
de servidor). Las demos de pymes viven en `app/demos/<slug>/` con reglas en `app/demos/GUIA-MOVIL.md`.

## Revisa con rigor
- Reglas móviles de demos: botones ≤52px, footer ≤340px, contraste ≥4.5:1, cero desbordes
  horizontales, `alt` en imágenes, nada invisible por animaciones de scroll.
- Datos de pymes: nombre, dirección, teléfono, horario y fotos deben ser verificados —
  flaguear cualquier dato que parezca inventado. Contacto solo por `wa.me`, nunca formularios.
- `output: 'export'`: flaguear uso de APIs de servidor (headers, cookies, route handlers con
  lógica de runtime) que rompen el export estático.
- Al agregar demos: verificar que corra `npm run fechas` y que el slug sea consistente.

## Ignora
- El bug intermitente de `next/font/google` con Turbopack (conocido, no es del código).
- Estilo visual fuera de las reglas móviles: la dirección de diseño no se revisa aquí.

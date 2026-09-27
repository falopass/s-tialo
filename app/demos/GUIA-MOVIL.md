# Guía móvil de los demos

Checklist para crear o revisar una demo de `/demos/`. Todo se mide a 390 × 844 (celular típico);
lo que se vea bien en ese ancho, se ve bien en el resto.

## Checklist antes de publicar una demo

- [ ] **Botones: ≤ 52px de alto en móvil.** Ningún `<a>` o `<button>` con texto supera 52px de alto a 390px de ancho.
  - Escala segura: `py-3` + `text-base`, `py-2.5` + `text-xl`, `py-2` + `text-lg`.
  - Cuidado con `border-2` (suma 4px) y con textos largos que envuelven a 2 líneas: baja a `text-sm leading-tight` o recorta el padding.
  - El CTA del hero puede ir a ancho completo, pero con alto ≤ 52px y sin ocupar más de ~30% de la altura visible.
  - Pares de botones: se apilan (`flex-col`) o comparten fila sin estirarse para igualar alturas.
- [ ] **Footer: ≤ ~340px de alto** (≈40% de un celular de 844px).
  - Padding vertical móvil `py-8` (no `py-12`); el cierre usa `pb-6` (el layout de `/demos/` ya deja 84px libres para la burbuja de WhatsApp, no hace falta `pb-20`).
  - Agrupa las columnas en 2 y deja el texto secundario en `text-xs`.
  - Si hay bloques repetidos (horario + dirección + redes + botones grandes), recórtalos a lo esencial.
- [ ] **Contraste: 4.5:1 en texto pequeño y 3:1 en títulos** contra su fondo real.
  - Texto sobre foto: siempre con degradado o velo oscuro detrás.
  - Para colores con transparencia usa `rgba(...)` en `style`, no `text-[#hex]/NN`: el script de medición no interpreta `color-mix()`/`lab()` y lo marca como falla.
- [ ] **Cero desborde horizontal a 390px**: `document.documentElement.scrollWidth <= 390`.
  - Tablas y listas largas: `overflow-x-auto` o apiladas; nada cortado ni fuera de pantalla.

## Cómo medir

```bash
CDP_PORT=9232 node C:/Users/lenov/AppData/Local/hermes/scripts/medir-movil.mjs cache/sitiazo/medicion-movil.json
```

Requiere un Chromium con CDP abierto y el viewport emulado a 390 × 844. Recorre todos los demos y
reporta botones > 56px, footer > 40% de la pantalla, textos con contraste bajo y desbordes.

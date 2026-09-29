# Assets de marca — Rancho Itahue

Composición por código con logos y fotografías reales del cliente. Sin generación de imágenes ni texto por IA.
Titular: «Centro multiespacio en Molina», verificado en `BRIEF-CLIENTE.md` y `OFERTA-REAL.md`.

## Entregables

- `public/demos/rancho-itahue/brand/apple-touch-icon.png` — 180×180; 25698 bytes; código.
- `public/demos/rancho-itahue/brand/favicon-32.png` — 32×32; 1818 bytes; código.
- `public/demos/rancho-itahue/brand/favicon-48.png` — 48×48; 3447 bytes; código.
- `public/demos/rancho-itahue/brand/favicon.ico` — 48×48 (fotogramas 16×16, 32×32, 48×48); 6153 bytes; código.
- `public/demos/rancho-itahue/brand/icon-192-maskable.png` — 192×192; 23205 bytes; código.
- `public/demos/rancho-itahue/brand/icon-192.png` — 192×192; 34443 bytes; código.
- `public/demos/rancho-itahue/brand/icon-512-maskable.png` — 512×512; 119550 bytes; código.
- `public/demos/rancho-itahue/brand/icon-512.png` — 512×512; 166203 bytes; código.
- `public/demos/rancho-itahue/brand/og-image.png` — 1200×630; 726569 bytes; código.
- `public/demos/rancho-itahue/brand/social-cuadrada.png` — 1080×1080; 1033282 bytes; código.
- `public/demos/rancho-itahue/brand/social-historia.png` — 1080×1920; 1030310 bytes; código.
- `app/demos/rancho-itahue/icon.png` — 512×512; 166203 bytes; código (copia).
- `app/demos/rancho-itahue/apple-icon.png` — 180×180; 25698 bytes; código (copia).
- `app/demos/rancho-itahue/opengraph-image.png` — 1200×630; 726569 bytes; código (copia).

## Procedencia y archivos tocados

- Originales copiados en `origenes/`: logo cuadrado, logo horizontal PNG y SVG, logo vertical PNG y las tres portadas usadas.
- `origenes/simbolo-recorte-del-logo.png`: recorte mecánico del logo cuadrado, sin redibujo.
- `origenes/PROMPTS.md`: no se usaron prompts de generación.
- Código: `tmp/assets-rancho-2026-09-29/generar.py`.
- App: `app/demos/rancho-itahue/icon.png`, `apple-icon.png`, `opengraph-image.png`.
- No se tocó `page.tsx` ni `content.ts`.

## Verificación y límites

- Dimensiones y bytes leídos de los archivos finales con Pillow; ICO verificado con tres fotogramas; transparencia de iconos normales y opacidad de Apple comprobadas.
- No se verificó el render de Next, redes sociales ni despliegue; no se levantó servidor de desarrollo.
- El push a `main` puede llevarse commits pendientes de la otra sesión; el historial remoto puede requerir integración si avanzó.

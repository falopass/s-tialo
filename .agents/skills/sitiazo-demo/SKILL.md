---
name: sitiazo-demo
description: Crear, rediseñar o corregir un demo de pyme en app/demos/<slug>/ de Sitiazo, desde los datos reales del negocio hasta tenerlo visible en el catálogo /demos/ y con su vista previa para WhatsApp. Úsala cuando Diego pida un demo nuevo, mejorar uno existente o arreglar cómo se ve en celular.
---

# Demos de pymes

Cada demo es una web de muestra para un negocio real, con sus datos, sus fotos y una identidad propia. Diego le manda el enlace al dueño por WhatsApp, que casi siempre lo abre en el celular. Hay unos 610 en `app/demos/`; el catálogo los lista en `/demos/`.

## Cómo está armado un demo

```
app/demos/<slug>/content.ts   datos del negocio: BIZ (nombre, rubro, comuna, dirección, teléfono, WhatsApp, redes),
                              enlaces (WA_LINK, MAPS_URL, MAPS_EMBED) e IMG = '/demos/<slug>'
app/demos/<slug>/page.tsx     la página: fuentes, paleta, metadata y secciones
public/demos/<slug>/          fotos en webp (hero.webp, ambiente.webp, detalle1.webp…)
```

Piezas compartidas (cambiarlas mueve todos los demos que las usan; ver "Si tocas algo compartido"):
- `blitz-kit.tsx`:
  - `Reveal`: entrada al hacer scroll, con `delay`.
  - `BlitzNav`: nav con tema propio; `over: 'dark'` cuando cae sobre una foto oscura.
  - `Stars`, `FaqList`, `CallFab` y `WaFab`.
- `meta.ts`: `demoMetadata({ slug, title, description, image })` arma el título y la vista previa de WhatsApp. `image` es una foto real del demo.
- `lazy-map.tsx`: el mapa de Google se carga recién al acercarse.
- `form.tsx` y `quote.tsx`: formularios y cotizador cuando el rubro los pide.
- `layout.tsx`: restaura la escala de espaciado estándar, deja 84 px libres abajo para la burbuja de WhatsApp y monta `AvisoMuestra`, la franja de "página de muestra".
- `kit.tsx` y `data.ts`: el formato antiguo de 15 demos generados desde datos con la ruta `[slug]`. Los demos nuevos van con carpeta propia.

Demos de referencia para estudiar, uno por rubro, están en la tabla de `AGENTS.md`. Por ejemplo: `restobar-los-leones`, `peluqueria-fran-wartemberg`, `hospital-clinico-veterinario-la-granja-linares`, `taller-mecanico-servimac` y `vivero-entre-raices`. Lo más rápido es copiar la estructura del más cercano y cambiarle la identidad.

## Receta: demo nuevo

1. **Datos del negocio.** Usa la skill `sitiazo-datos`: ficha de Maps (dirección, teléfono, horario, rating y reseñas), Instagram y Facebook.
   - En el comentario de cabecera de `content.ts` anota qué es REAL y qué es contenido de ejemplo, como en `restobar-los-leones/content.ts`.
   - Nombre, dirección, teléfono, horarios y redes salen de fuentes del propio negocio.
2. **Fotos.**
   - Bájalas y conviértelas con `node scripts/bajar2.mjs <slug> lista.txt`, donde cada línea es `url|nombre.webp`. Quedan en webp de 1200 px como máximo y 200 KB como máximo, en `public/demos/<slug>/`.
   - Para elegir, arma una hoja de contacto con `node scripts/contact-sheet.mjs <carpeta> hoja.jpg 4`.
   - El hero va con una foto real del negocio.
3. **Página.**
   - Copia `page.tsx` de la referencia del rubro.
   - Define las fuentes con `next/font/local` desde `app/fonts/<familia>/…woff2`; nunca uses `next/font/google`. Hay unas 50 familias disponibles en `app/fonts/`.
   - Define la paleta como constante `C` y un motivo gráfico propio del negocio. Varía los layouts entre secciones.
   - Pasa la metadata con `demoMetadata` y `image: '/demos/<slug>/hero.webp'`.
4. **Catálogo.**
   - Agrega la entrada `{ slug, name, rubro, city }` al array `BLITZ` de `app/demos/catalogo.ts`. Sin eso el demo no aparece en `/demos/`; el sitemap lo toma solo de la carpeta.
   - Comprueba con `node .agents/skills/sitiazo-demo/scripts/catalogo-check.mjs`.
   - La familia de rubro (Salud, Restaurantes, Belleza…) se deduce del texto de `rubro` (`FAMILIAS` en el mismo archivo). Si cae en "Otros", agrega la palabra clave a la familia que corresponda.
5. **Fecha.** Después del commit, `npm run fechas` actualiza `app/demos/creados.json` desde git. Esa fecha ordena "Más nuevos" en el catálogo. Es solo un script de node, no un build.
6. **Revisión en celular.** Usa la skill `sitiazo-verificar`: push, preview, y `revisar.mjs <preview> --rutas /demos/<slug>/ --anchos 390,1440 --completa`. Lo que mejor funciona en celular está en `app/demos/GUIA-MOVIL.md`:
   - botones de 52 px de alto como máximo;
   - footer de unos 340 px como máximo;
   - contraste de 4.5:1 en texto chico y velo detrás del texto sobre foto;
   - cero desborde a 390 px.

   Ya publicado, `node scripts/qa-movil-cloud.mjs --slugs <slug>` lo mide contra producción.
7. **Captura para WhatsApp.** `node scripts/capturar-demos.mjs <slug>` usa el navegador compartido por CDP y deja un JPG de 390×844 listo para enviar.

## Si tocas algo compartido

Cambiar `blitz-kit.tsx`, `kit.tsx`, `meta.ts`, `layout.tsx`, `lazy-map.tsx`, `lib/config.ts`, `lib/fonts.ts`, `app/globals.css` o `app/layout.tsx` afecta a muchos demos a la vez. Se puede hacer. Antes de mergear, compara contra producción con `demos-identicos.mjs <preview> --slugs <los que usan esa pieza>` (skill `sitiazo-verificar`). Para saber cuáles la usan: `grep -rl "from '../blitz-kit'" app/demos`.

## Trucos que ahorran tiempo

- `globals.css` redefine `--spacing-5…12`. Muchos demos restauran la escala en su `page.tsx` con la constante `SPACING`, y el layout de `/demos/` también la restaura.
- Para colores con transparencia, usa `rgba(...)` en `style`. Los medidores de contraste no leen `color-mix()` ni `text-[#hex]/NN`.
- En tarjetas clicables grandes (filtros, categorías), usa `role="button"` con `tabIndex` en vez de `<a>` o `<button>` gigante, porque el medidor de botones las cuenta como botón.
- `AvisoMuestra` aparece sola en cada demo, salvo en `/demos/` y en `/demos/rancho-itahue`. Rancho Itahue es la web final de un cliente: trátala como sitio publicado.
- Los demos se enlazan desde el sitio con `<a>` (carga completa), así que un demo nunca hereda estilos del sitio principal.

## Movimiento: impresionar en la primera visita (Diego, 4-11-2026)

- Cada demo nuevo lleva **al menos una animación propia y distinta** a la de los demás demos, y se nota en los primeros segundos sin hacer scroll.
- Vale todo lo que sume carácter: parallax suave en el hero, títulos que entran por líneas, contadores, marquesina de fotos, revelado escalonado, un divisor que se dibuja al bajar. La animación debe tener motivo (la luz, el arco, la mesa, la música), no ser adorno.
- Reglas técnicas: solo `transform` y `opacity`; nada que mueva layout. Respeta `prefers-reduced-motion`. En 390 px la animación no puede causar desborde ni tapar texto.
- No repetir la misma animación entre demos seguidos: si el anterior usó parallax, este usa otra cosa.
- Antes de publicar, mirar la página en el celular y confirmar que la animación se ve, no solo que existe en el código.

## El estándar de ahora: cada demo, un encargo propio (Diego, 4-11-2026)

- El piso es `tipico-de-la-claudia`. Si un demo nuevo no se siente a ese nivel, no está listo para enviarse.
- Cada demo nace de un brief escrito: datos reales verificados, fotos elegidas a mano, dirección de arte propia (paleta, tipografía, motivo) y una animación distintiva.
- Nada de plantilla: dos demos seguidos no pueden compartir layout ni animación. Si se parecen, se rehace uno.
- El brief se guarda junto al encargo, con la plantilla `brief-template.md`.
- Flujo: Devin `swe-2-max` para el demo estrella y `swe-2-high` para el resto, en `devin-vm`, PC2 (Windows) o el box `main` de Simular (las instabox ya no existen desde 2026-11-10). En PC2 Devin tiene bloqueado `sleep`: para esperar al servidor usa un script de espera. Todos los demos de un lote van juntos en un solo PR; el notebook revisa y envía.
- Antes de enviar: captura a 390 px, cero desborde, contraste, y mirarla como la vería el dueño del negocio.

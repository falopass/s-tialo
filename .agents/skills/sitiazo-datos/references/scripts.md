# Mapa de scripts/ (generado de las cabeceras, 2026-10-23)

Navegador: **CDP** = se conecta al navegador compartido (`CDP_PORT`, ver SKILL.md); **Playwright propio** = lanza y cierra su propio Chromium. "Sin git" = el archivo existe en la carpeta pero no está commiteado.

La descripción y el uso salen del comentario de cabecera de cada archivo. Si un script no tiene cabecera, ábrelo: suelen ser pruebas cortas de una sola pasada.

## Maps: búsqueda y ficha

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `buscar-maps-cdp.mjs` (sin git) | Lista resultados de una búsqueda de Maps en el navegador compartido (CDP). | `CDP_HOST=localhost CDP_PORT=29229 node scripts/buscar-maps-cdp.mjs "<query>" [lat] [lng] [zoom]` | CDP |
| `buscar-maps.mjs` | Lista resultados de una búsqueda de Maps en una zona (@lat,lng,zoom). | `node scripts/buscar-maps.mjs "<query>" <lat> <lng> <zoom>` | Playwright propio |
| `buscar-places.mjs` (sin git) | Lista resultados de búsqueda de Maps con su URL de place (cid). | `node scripts/buscar-places.mjs "<query>"` | CDP |
| `extraer-maps-cdp.mjs` | Extrae datos de ficha + URLs de fotos (lh*.googleusercontent.com) de Google Maps | `CDP_PORT=9223 node scripts/extraer-maps-cdp.mjs "<query de Maps>"` | CDP |
| `extraer-maps-url.mjs` (sin git) | Extrae datos de ficha + URLs de fotos navegando DIRECTO a una URL de Maps place. | `CDP_PORT=29229 node scripts/extraer-maps-url.mjs "<url completa de maps/place/...>"` | CDP |
| `ficha-click.mjs` | Ficha de Maps abriendo el primer resultado de la búsqueda. | `node scripts/ficha-click.mjs "<query>"` | Playwright propio |
| `ficha-completa-batch.mjs` | Volcado completo de una ficha de Maps: URL, rating, nº reseñas, enlaces | `node scripts/ficha-completa-batch.mjs "<query>"` | Playwright propio |
| `ficha-completa.mjs` | Ficha completa de Maps: nombre, rubro, dirección, teléfono, web, horario, | `node scripts/ficha-completa.mjs "<query>"` | Playwright propio |
| `ficha-dump.mjs` | Dump del panel principal de una ficha de Maps (texto visible completo). | `node scripts/ficha-dump.mjs "<place-url>" [scrollN]` | Playwright propio |
| `ficha-exacta.mjs` | Ficha de Maps: busca y hace click en el resultado cuyo nombre coincide. | `node scripts/ficha-exacta.mjs "<query>" "<nombre exacto>"` | Playwright propio |
| `ficha-final.mjs` | Ficha completa de una URL de place de Maps: rating, nº reseñas, textos de reseñas, | `node scripts/ficha-final.mjs "<place-url>"` | Playwright propio |
| `ficha-full-cdp.mjs` (sin git) | Ficha completa de Maps en el navegador compartido (CDP): | `CDP_HOST=localhost CDP_PORT=29229 node scripts/ficha-full-cdp.mjs "<query>" [salida-urls.txt]` | CDP |
| `ficha-full.mjs` | Ficha completa por place_id: panel, rating, reseñas, fotos. | `node scripts/ficha-full.mjs <place_id>` | Playwright propio |
| `ficha-maps-pw.mjs` | Lee horario completo + reseñas de una ficha de Maps via Playwright+CDP. | `node scripts/ficha-maps-pw.mjs "<url de Maps>"` | CDP |
| `ficha-probe.mjs` | Probe Google Maps place data + photo URLs for a query via CDP. | `node maps-probe.mjs "<query>"` | CDP |
| `ficha-standalone.mjs` (sin git) | Ficha de Maps sin CDP: datos del panel + URLs de fotos googleusercontent. | `node scripts/ficha-standalone.mjs "<query o url>" <out-urls.txt>` | Playwright propio |
| `ficha-streetview.mjs` | Screenshot Street View at given coords via CDP, hiding UI overlays. | `node streetview.mjs <lat> <lng> <heading> <outfile>` | CDP |
| `ficha-todo.mjs` | Ficha completa de Maps via CDP (Chrome con sesión): nombre, categoría, | `node scripts/ficha-todo.mjs "<url o query de Maps>"` | CDP |
| `ficha-url.mjs` | Ficha de Maps abriendo la URL completa de la ficha (con place_id hex en !1s). | `node scripts/ficha-url.mjs "<url de maps/place>"` | Playwright propio |
| `horas-cdp.mjs` | (sin descripción en la cabecera) |  | CDP |
| `horas2.mjs` | (sin descripción en la cabecera) |  | CDP |
| `links-ficha.mjs` | Dump outbound (non-google) links from a Maps ficha panel. | `node links-ficha.mjs "<place-url>"` | CDP |
| `mapcheck.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `pymerp.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `weblink.mjs` | (sin descripción en la cabecera) |  | Playwright propio |

## Maps: rating y reseñas

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `conteo-resenas.mjs` | Rating + n° reseñas de una ficha de Maps. | `node scripts/conteo-resenas.mjs "<query>"` | Playwright propio |
| `extraer-resenas-cdp.mjs` | Extrae horario + reseñas reales de una ficha de Maps por CDP. | `CDP_PORT=9223 node scripts/extraer-resenas-cdp.mjs "<query>"` | CDP |
| `extraer-resenas.mjs` | Extrae reseñas reales de una ficha de Maps: abre tab Reseñas y scrollea. | `node scripts/extraer-resenas.mjs "<query>"` | Playwright propio |
| `ficha-opiniones.mjs` | Abre el panel de opiniones de una ficha de Maps (clic en el botón de | `node scripts/ficha-opiniones.mjs "<query>"` | Playwright propio |
| `ficha-resenas-es.mjs` | Extrae reseñas en su idioma original (clic en "See original") + nº total. | `node scripts/ficha-resenas-es.mjs "<url ficha Maps>"` | CDP |
| `rating-cdp.mjs` | Rating + count + primeras reseñas de una ficha Maps via CDP. |  | CDP |
| `rating-ficha.mjs` | Rating + nº reseñas de una ficha de Maps, leyendo el panel completo. | `node scripts/rating-ficha.mjs "<place-url>"` | Playwright propio |
| `rating2.mjs` | (sin descripción en la cabecera) |  | CDP |
| `res-es.mjs` | click "Mostrar original" buttons |  | CDP |
| `resenas-cdp.mjs` (sin git) | Rating + conteo + textos de reseñas de una ficha de Maps (pestaña nueva CDP). | `CDP_PORT=29229 node scripts/resenas-cdp.mjs "<url completa maps/place>"` | CDP |
| `resenas-es.mjs` | (sin descripción en la cabecera) |  | CDP |
| `resenas-ficha.mjs` | Reseñas de una ficha de Maps: abre el tab Opiniones/Reseñas/Revisiones y extrae textos. | `node scripts/resenas-ficha.mjs "<place-url>"` | Playwright propio |
| `resenas-le.mjs` | Dump reseñas de una ficha Maps en español (hl=es), scrolleando el panel. |  | CDP |
| `resenas-probe.mjs` (sin git) | Dump de candidatos de reseñas de una ficha Maps. |  | CDP |

## Maps: fotos

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `bajar-fotos.mjs` | Baja candidatas de imagen (URLs fbcdn / googleusercontent) y las convierte | `node scripts/bajar-fotos.mjs <archivo.txt con urls> <outdir>` | — |
| `construex-fotos.mjs` | (sin descripción en la cabecera) |  | CDP |
| `extraer-fotos-maps.mjs` | Extrae URLs de fotos (lh*.googleusercontent.com) de una ficha de Google Maps. | `node scripts/extraer-fotos-maps.mjs "<query de Maps>" [--scroll N]` | Playwright propio |
| `extraer-fotos-maps2.mjs` | Extrae URLs de fotos de una ficha de Google Maps abriendo el visor de fotos. | `CDP_PORT=29229 node scripts/extraer-fotos-maps2.mjs "<query>"` | CDP |
| `extraer-lugar.mjs` | Extrae fotos de una ficha de Maps por URL completa de place. | `node /tmp/extraer-lugar.mjs "<place-url>" [--click "<texto>"]` | Playwright propio |
| `extraer2.mjs` | Extrae fotos de una ficha de Maps: abre "Ver fotos" y scrollea la grilla. | `node scripts/extraer2.mjs "<query>"` | Playwright propio |
| `ficha-fotos.mjs` | Collect all photo URLs from a Google Maps place page via CDP. | `node maps-photos.mjs "<place-url-or-search-query>"` | CDP |
| `fotos-ficha-cdp.mjs` (sin git) | Fotos de una ficha de Maps en el navegador compartido (CDP). | `CDP_HOST=localhost CDP_PORT=29229 node scripts/fotos-ficha-cdp.mjs "<query>" [salida.txt]` | CDP |
| `fotos-ficha.mjs` | Fotos de una ficha de Maps: abre la galeria (boton "N fotos" o la foto de | `node scripts/fotos-ficha.mjs "<query o url>" <out.txt> [max]` | CDP |
| `fotos-ficha2-cdp.mjs` (sin git) | Colecta URLs de fotos de una ficha de Maps (navegador compartido CDP). | `CDP_HOST=localhost CDP_PORT=29229 node scripts/fotos-ficha2-cdp.mjs "<query>" <salida.txt>` | CDP |
| `fotos-grid.mjs` | Abre la galeria completa de fotos de una ficha de Maps ("Ver fotos"/"See photos"), | `node scripts/fotos-grid.mjs "<url ficha>" <out.txt> [maxScrolls]` | CDP |
| `fotos-json.mjs` | Extrae IDs de fotos (AF1Qip*) del JSON embebido de la ficha de Maps y arma |  | CDP |
| `fotos-lightbox-cdp.mjs` (sin git) | Fotos grandes de una ficha de Maps abriendo el visor (lightbox) de la foto principal. | `CDP_HOST=localhost CDP_PORT=29229 node scripts/fotos-lightbox-cdp.mjs "<url-o-query>" <n> <salida.txt>` | CDP |
| `fotos-maps-pw.mjs` | Extrae URLs de fotos de una ficha de Google Maps via Playwright+CDP. | `node scripts/fotos-maps-pw.mjs "<url o query de Maps>" [out.txt]` | CDP |
| `fotos-panel-cdp.mjs` (sin git) | Recolecta URLs de fotos de una ficha de Maps abierta por URL directa (o query). | `CDP_HOST=localhost CDP_PORT=29229 node scripts/fotos-panel-cdp.mjs "<url-o-query>" <salida.txt>` | CDP |
| `owner-photos.mjs` | (sin descripción en la cabecera) |  | CDP |
| `probe-fotos.mjs` | Diagnóstico: abre ficha de Maps, lista candidatos clicables de fotos y guarda screenshot. |  | Playwright propio |
| `probe-imgs-cdp.mjs` (sin git) | Debug: vuelca img[src], srcset y background-image de la ficha abierta. | `CDP_HOST=localhost CDP_PORT=29229 node scripts/probe-imgs-cdp.mjs "<query>"` | CDP |

## Instagram

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `extraer-ig-fotos.mjs` | Recolecta fotos de un perfil público de Instagram por CDP: | `CDP_PORT=9223 node scripts/extraer-ig-fotos.mjs <handle> [maxPosts]` | CDP |
| `ig-bio.mjs` | Bio completa de un perfil IG + posts recientes (imágenes). | `node scripts/ig-bio.mjs handle` | Playwright propio |
| `ig-cdp.mjs` | (sin descripción en la cabecera) |  | CDP |
| `ig-fotos-full.mjs` (sin git) | Extrae foto de perfil + og:image de posts de un perfil público de IG (CDP). | `CDP_PORT=29229 node scripts/ig-fotos-full.mjs <handle> [maxPosts] [salida.json]` | CDP |
| `ig-fotos.mjs` | Fotos de un perfil público de IG: foto de perfil + og:image de los primeros N posts. | `node scripts/ig-fotos.mjs <handle> [maxPosts]` | Playwright propio |
| `ig-posts.mjs` | Posts recientes de un perfil IG: URLs de posts + imágenes CDN + captions (aria/alt). |  | Playwright propio |
| `ig-raw.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `probe-ig.mjs` | Prueba handles de Instagram/Facebook: reporta og:title, og:desc, og:image. | `node scripts/probe-ig.mjs handle1 handle2 ...` | Playwright propio |
| `probe-perfiles.mjs` | Prueba handles candidatos en IG/FB vía CDP y reporta título/og. | `CDP_PORT=9222 node scripts/probe-perfiles.mjs ig handle1 handle2 ...` | CDP |

## Facebook

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `extraer-fb-fotos.mjs` | Recorre una página pública de Facebook (feed + /photos) en el navegador CDP | `CDP_PORT=9223 node scripts/extraer-fb-fotos.mjs <url-pagina-fb>` | CDP |
| `fb-mbasic.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `fb-pages.mjs` | (sin descripción en la cabecera) |  | CDP |
| `probe-fb.mjs` | Prueba URLs de páginas FB candidatas y reporta og:title/og:description. | `node probe-fb.mjs handle1 handle2 ...` | CDP |

## Street View

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `streetview-shot.mjs` | Screenshot de Street View en una coordenada. | `node scripts/streetview-shot.mjs <lat> <lng> <out.png> [heading]` | CDP |
| `sv-fetch.mjs` | Baja el streetview grande de un panoid via fetch con credenciales del navegador. |  | CDP |

## Bajar, convertir y elegir fotos

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `_contact-sheet.mjs` | Temporal: arma hojas de contacto 4x3 (320px c/u) de una carpeta para revisar fotos. | `node scripts/_contact-sheet.mjs <dir> <out-prefix>` | — |
| `_img-pipeline.mjs` | Temporal: convierte las fotos bajadas a /tmp/raw/<slug>/ en webp <=1200px / <=200KB | `node scripts/_img-pipeline.mjs` | — |
| `bajar2.mjs` (sin git) | Baja "url|nombre.webp" (linea por linea) a public/demos/<slug>/ como webp <=1200px <=200KB. | `node scripts/bajar2.mjs <slug> <archivo.txt>` | — |
| `contact-sheet.mjs` (sin git) | Contact sheet numerado de una carpeta de webp/jpg. | `node scripts/contact-sheet.mjs <dir> <out.jpg> [cols]` | — |
| `convertir.mjs` | Convierte jpgs de ~/work/<carpeta> a webp <=1200px <=200KB en public/demos/<slug> | `node convertir.mjs <srcdir> <slug> "idx:nombre,idx:nombre,..."` | — |

## Búsqueda web y utilidades

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `ddg.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `ddg2.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `dump-cdp.mjs` (sin git) | Navega una URL en el navegador compartido (CDP) y vuelca texto visible. | `CDP_HOST=localhost CDP_PORT=29229 node scripts/dump-cdp.mjs "<url>" [extraWaitMs]` | CDP |
| `fetch-cdp.mjs` (sin git) | Vuelca título/texto/imágenes/links de una URL en una pestaña nueva del navegador CDP. | `CDP_PORT=29229 node scripts/fetch-cdp.mjs <url> [selectorScroll]` | CDP |
| `fetch-page.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `fetch-wait.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `gimg.mjs` | Google Images: vuelca URLs de imagenes grandes (encrypted-tbn y originales). |  | CDP |
| `gs2.mjs` | (sin descripción en la cabecera) |  | CDP |
| `gs3.mjs` | (sin descripción en la cabecera) |  | CDP |
| `gsearch.mjs` | Búsqueda Google simple; imprime títulos+urls. | `node scripts/gsearch.mjs "query"` | Playwright propio |
| `probe-maps.mjs` | Diagnóstico CDP: abre ficha de Maps, saca screenshot y lista botones de fotos. | `CDP_PORT=9223 node scripts/probe-maps.mjs "<query>"` | CDP |

## QA y capturas de demos

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `capturar-demos.mjs` (sin git) | capturar-demos.mjs — capturas 390x844 (vista movil) de las demos en produccion. |  | CDP |
| `peso-demos.mjs` | Peso de la carga inicial de los demos a 390×844. Solo mide, no arregla. | `node scripts/peso-demos.mjs [--base http://localhost:8811] [--slugs a,b] [--concurrency 6] [--out cache/peso-demos.json]` | Playwright propio |
| `qa-a11y.mjs` | Auditoria de accesibilidad de demos (390x844 por defecto). | `node scripts/qa-a11y.mjs --base http://localhost:4800 --slugs a,b [--width 1440] [--json]` | Playwright propio |
| `qa-contraste-real.mjs` | QA contraste real de los demos (390×844). Re-mide contraste y, para cada | `node scripts/qa-contraste-real.mjs [--base http://localhost:3210] [--slugs a,b] [--out cache/contraste-real.json]` | Playwright propio |
| `qa-demo.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `qa-desborde.mjs` | Mide desborde horizontal real (390×844) y lista los culpables raíz. | `node scripts/qa-desborde.mjs --base https://sitiazo.cl --slugs a,b [--width 1440]` | Playwright propio |
| `qa-el.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `qa-movil-cdp.mjs` | QA móvil de demos por CDP (Edge headless ya corriendo en 9223). | `node scripts/qa-movil-cdp.mjs slug1 slug2 ...` | CDP |
| `qa-movil-cloud.mjs` | QA móvil de los demos en vivo (390×844). Solo mide, no arregla. | `node scripts/qa-movil-cloud.mjs [--base https://sitiazo.cl] [--slugs a,b] [--concurrency 4]` | Playwright propio |
| `qa-movil-pw.mjs` | QA móvil de un demo con playwright: botones >52px, footer, contraste <4.5, |  | Playwright propio |
| `qa-overflow.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `qa-shots.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `sat-shot.mjs` | hide chrome UI |  | CDP |
| `shot-390.mjs` | full page screenshot |  | Playwright propio |
| `shot-demo.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `shot-movil.mjs` | Capturas de un demo: móvil 390x844 (full page) y desktop 1440 (hero). | `node scripts/shot-movil.mjs <slug> [base]` | Playwright propio |
| `shots.mjs` | (sin descripción en la cabecera) |  | CDP |

## Build y sitio principal

| Script | Qué hace | Uso | Navegador |
|---|---|---|---|
| `dither.mjs` | (sin descripción en la cabecera) |  | — |
| `fechas-demos.mjs` | (sin descripción en la cabecera) |  | — |
| `sitio-capturas.mjs` | (sin descripción en la cabecera) |  | Playwright propio |
| `sitio-og.mjs` | (sin descripción en la cabecera) |  | Playwright propio |

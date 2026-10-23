---
name: sitiazo-datos
description: Conseguir los datos reales de un negocio para Sitiazo (ficha de Google Maps, horario, rating y reseñas, fotos de Maps, Instagram y Facebook, Street View) con los scripts del repo y un solo navegador compartido por CDP. Úsala para buscar negocios por zona, armar el content.ts de un demo, bajar y convertir sus fotos o encontrar sus redes.
---

# Datos reales de un negocio

`scripts/` tiene unos 100 scripts nacidos de distintas pasadas, varios con dos o tres versiones para la misma tarea. Esta skill dice cuál usar primero. El detalle de todos, agrupados por tarea, está en `references/scripts.md`.

## Un solo navegador (CDP)

Los scripts `*-cdp.mjs` se conectan a un navegador que ya está abierto con depuración remota. No abren uno nuevo cada vez, así que gastan mucha menos RAM y aprovechan la sesión iniciada en Instagram y Facebook.

```bash
curl -s http://localhost:29229/json/version     # ¿hay navegador compartido?
```

Si no responde, abre uno que quede corriendo. Edge y Brave están instalados; Chrome no:

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --remote-debugging-port=29229 \
  --user-data-dir="$LOCALAPPDATA/sitiazo-cdp" --no-first-run about:blank &
```

- Con un perfil propio (`sitiazo-cdp`), la primera vez hay que iniciar sesión en Instagram y Facebook en esa ventana. Maps funciona sin sesión.
- Los scripts CDP leen `CDP_PORT` (por defecto 9223) y `CDP_HOST`. Exporta `CDP_PORT=29229` una vez por sesión.
- `ig-fotos-full.mjs` y `capturar-demos.mjs` ya apuntan a 29229.
- Los scripts sin `-cdp` lanzan su propio Chromium de Playwright. Sirven si no hay navegador compartido, pero cada uno abre y cierra uno.

## Qué usar para cada cosa

| Tarea | Primero | Alternativa |
|---|---|---|
| Buscar negocios de un rubro en una zona | `buscar-maps-cdp.mjs "<query>" [lat] [lng] [zoom]` | `buscar-maps.mjs "<query>" <lat> <lng> <zoom>` |
| Ficha completa (nombre, rubro, dirección, teléfono, web, horario, URLs de fotos) | `ficha-full-cdp.mjs "<query>" [urls.txt]` | Con URL de place: `extraer-maps-url.mjs "<url>"`. Sin CDP: `ficha-standalone.mjs "<query o url>" urls.txt` |
| Rating, número de reseñas y textos | `resenas-cdp.mjs "<url maps/place>"` | `ficha-completa-batch.mjs "<query>"` (incluye enlaces a IG, FB y web) |
| Fotos de la ficha de Maps | `fotos-ficha2-cdp.mjs "<query>" salida.txt` | Por URL: `fotos-panel-cdp.mjs "<url>" salida.txt`. Más grandes: `fotos-lightbox-cdp.mjs "<url>" <n> salida.txt` |
| Fotos de Instagram (perfil y posts, con caption) | `ig-fotos-full.mjs <handle> [max] [salida.json]` | `extraer-ig-fotos.mjs <handle> [max]` |
| Fotos de Facebook | `extraer-fb-fotos.mjs <url-página-fb>` | `fb-pages.mjs` |
| Encontrar el handle correcto de IG o FB | `probe-perfiles.mjs ig h1 h2…` y `probe-perfiles.mjs fb "<query>"` | `probe-ig.mjs h1 h2…` |
| Texto visible de cualquier página | `dump-cdp.mjs "<url>"` | `fetch-cdp.mjs <url>` (además, imágenes y links) |
| Fachada en Street View | `streetview-shot.mjs <lat> <lng> out.png [heading]` | `sv-fetch.mjs` |
| Bajar y convertir fotos elegidas al demo | `bajar2.mjs <slug> lista.txt`, con líneas `url\|nombre.webp`. Quedan en `public/demos/<slug>/`, en webp de 1200 px y 200 KB como máximo | `bajar-fotos.mjs urls.txt <dir>` (candidatas), `convertir.mjs` |
| Elegir entre muchas fotos | `contact-sheet.mjs <dir> hoja.jpg [cols]` (numerada) | `_contact-sheet.mjs <dir> <prefijo>` |

Todos se corren desde la raíz del repo: `node scripts/<script> …`.

## Flujo típico para un demo

1. Busca con `buscar-maps-cdp` y abre la ficha con `ficha-full-cdp`, guardando las URLs de fotos.
2. Saca las reseñas con `resenas-cdp`, sobre la URL de place que entrega la ficha.
3. Revisa redes: `probe-perfiles` para el handle, `ig-fotos-full` para las fotos y los captions, y `extraer-fb-fotos`.
4. Junta las URLs candidatas, arma una hoja de contacto y elige. Después `bajar2.mjs <slug> lista.txt`.
5. Escribe `content.ts` y marca en su comentario qué es REAL y de dónde salió. Sigue con la skill `sitiazo-demo`.

## Cuando un script deja de funcionar

Google Maps cambia sus selectores seguido. Si un script devuelve vacío:
- prueba la alternativa de la tabla;
- o usa los de diagnóstico (`probe-maps.mjs`, `probe-imgs-cdp.mjs`, `probe-fotos.mjs`), que listan botones e imágenes de la ficha abierta, y ajusta el selector en el script.

Si lo arreglas, deja una sola versión buena en vez de crear un `…3.mjs`.

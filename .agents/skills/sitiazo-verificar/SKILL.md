---
name: sitiazo-verificar
description: Verificar cambios de Sitiazo sin cargar el PC. El build de la rama en Workers Builds es el chequeo de compilación, y Playwright revisa contra el deploy (errores, desborde, capturas, LCP, demos idénticos a producción). Lo pesado va al VPS. Úsala cuando haya que confirmar que algo compila, se ve bien, no movió los demos o carga rápido, o cuando dudes en correr dev, build o typecheck en local.
---

# Verificar sin levantar nada pesado en el PC

En este repo no se corre `npm run dev`, `build`, `lint` ni `typecheck` en el PC de Diego: son 600 páginas y se come la RAM. Hay caminos más baratos para cada pregunta:

| Pregunta | Cómo se responde |
|---|---|
| ¿Compila? (tipos, prebuild, export) | Push de la rama y build en Workers Builds: `scripts/preview.mjs --esperar` |
| ¿Se ve bien, hay errores JS o desborde? | `scripts/revisar.mjs <url-del-preview> --rutas …` |
| ¿Moví algún demo? | `scripts/demos-identicos.mjs <url-del-preview>` |
| ¿Carga rápido en celular? | `scripts/lcp.mjs <url-del-preview> --rutas …` |
| ¿Necesito un build o un servidor completo? | En el VPS (abajo), no en el PC |

Los scripts están en `.agents/skills/sitiazo-verificar/scripts/` y se corren desde la raíz del repo, porque usan el `playwright` y el `sharp` del proyecto. Abren un solo Chromium headless y lo cierran al terminar.

## Flujo normal

1. Commit y push a una rama, nunca a `main`: cada push a `main` despliega a producción.
2. `node .agents/skills/sitiazo-verificar/scripts/preview.mjs --esperar`. Muestra el estado del build del commit y su URL (lee los deployments del commit en GitHub, que registra Workers Builds). Si falla, el enlace a los logs del build muestra el error de TypeScript o de build. También puedes ver el build en el dashboard de Cloudflare (Worker `sitiazo` → Workers Builds).
3. Con la URL del preview, revisa lo que corresponda. Workers Builds genera una URL por build; usa siempre la que entrega `preview.mjs`.

```bash
P=<url-del-preview>  # la que entrega preview.mjs
node .agents/skills/sitiazo-verificar/scripts/revisar.mjs $P --rutas /,/planes/,/demos/ --anchos 360,1440
node .agents/skills/sitiazo-verificar/scripts/revisar.mjs $P --rutas / --reduce          # movimiento reducido
node .agents/skills/sitiazo-verificar/scripts/demos-identicos.mjs $P                      # 5 demos, 360 y 1440
MSYS_NO_PATHCONV=1 node .agents/skills/sitiazo-verificar/scripts/lcp.mjs $P --rutas /,/demos/
```

Las capturas quedan en `tmp/` (ignorado por git). Revísalas con la herramienta de lectura de imágenes: una captura sí muestra la composición, pero no prueba el movimiento.

## Previews de Workers Builds

Los previews que genera Workers Builds para cada build de rama son públicos: no piden login ni token. La variable `BYPASS` y el manejo de la cookie en `scripts/lib.mjs` quedaron del hosting anterior y ya no se usan.
- Los scripts funcionan igual contra producción (`https://sitiazo.cl`).

## Cuándo comparar demos

`demos-identicos.mjs` captura producción y preview en la misma corrida y compara cada píxel. Córrelo cuando el cambio toca algo que los demos cargan:
- `app/layout.tsx`, `app/globals.css`, `lib/config.ts`, `lib/fonts.ts`;
- `app/demos/layout.tsx`, `kit.tsx`, `blitz-kit.tsx`, `meta.ts`, `lazy-map.tsx`;
- `next.config.ts`, `package.json`.

Si cambiaste un demo puntual, pásalo en `--slugs`. Un mapa embebido o una fecha pueden variar solos; si ves una diferencia chica, repite la corrida antes de concluir.

Para los demos también sirven los scripts de QA del repo, que revisan contra un deploy y no contra un servidor local:
- `node scripts/qa-movil-cloud.mjs --base https://sitiazo.cl --slugs a,b`: botones de más de 52 px, footer, contraste y desborde.
- `node scripts/qa-desborde.mjs --base https://sitiazo.cl --slugs a,b`: culpables del scroll horizontal.
- `node scripts/shot-movil.mjs <slug>`: captura móvil completa y la de escritorio.

Estos scripts no manejan el bypass, así que úsalos contra producción o adapta su `goto` con `contexto()` de `scripts/lib.mjs`.

## Build, typecheck o servidor completo: en el VPS

Cuando de verdad necesites `next build`, `tsc` o servir el export completo (por ejemplo, el QA de los 600 demos), hazlo en el VPS (`ssh vps`, 6 vCPU y 11 GB, con node 22). Allá se permite instalar y compilar:

```bash
tar czf - --exclude=node_modules --exclude=.next --exclude=out --exclude=.git --exclude=tmp . \
  | ssh vps 'mkdir -p ~/dev/sitiazo && tar xzf - -C ~/dev/sitiazo'
ssh vps 'cd ~/dev/sitiazo && npm ci && nice -n 10 npx tsc --noEmit && nice -n 10 npm run build'
ssh vps 'cd ~/dev/sitiazo && serve 8811 sitiazo -- python3 -m http.server 8811 --directory out'
curl -sS -o /dev/null -w '%{http_code}\n' https://sitiazo.51-79-71-83.sslip.io/
```

- El VPS comparte caja con la producción de QuizVerse: usa `nice -n 10` en los builds y no toques contenedores ajenos.
- Con la URL `sslip.io` sirven los mismos scripts (`revisar.mjs`, `qa-movil-cloud.mjs --base …`) sin bypass.
- Al terminar, `ssh vps serve stop sitiazo`.

## Si igual hay que mirar algo en local

- Para un componente aislado basta leer el código y el diff.
- Para una página, el preview de la rama cuesta menos RAM que `next dev`. Con un push, en unos minutos hay URL.
- Los scripts de datos que usan el navegador compartido por CDP (puerto 29229) no abren navegadores nuevos: reutiliza ese navegador en vez de lanzar otro (ver la skill `sitiazo-datos`).

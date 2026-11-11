# Verificar prospectos

Herramienta de solo lectura. Dada una ficha CSV de negocios, clasifica cada uno
según si tiene web propia viva, actividad reciente en Instagram y señales de
que puede pagar el plan. **No contacta a nadie**: sin WhatsApp, correo, DM ni
formularios. Solo lectura de páginas públicas.

## Uso

```bash
# Sin red: aplica la rúbrica a columnas ya presentes en el CSV
node prospeccion/verificar/cli.mjs --ficha archivo.csv

# Con red: GET públicos a la web y al Instagram de cada ficha
node prospeccion/verificar/cli.mjs --ficha archivo.csv --red

# Comprobaciones fijas, sin red
node prospeccion/verificar/comprobar.mjs
```

`--red` lo corre Diego manualmente; las corridas automatizadas no consultan
negocios reales.

## Entrada

CSV con cabecera. Columnas usadas:

```
nombre,ciudad,rubro,web,instagram,resenas,estado
```

- `resenas`: número de reseñas ("2.185" vale 2185).
- `estado`: texto libre; si contiene `cerrado`/`cerrada` o `closed` se descarta.
- Columnas de más se ignoran y pasan a la salida.
- Si el CSV ya trae `web_propia`, `ig_estado` o `ig_ultimo_post`, el modo sin
  red los usa; `ig_ultimo_post` manda sobre `ig_estado` (la fecha es la
  evidencia) salvo que la fecha no se pueda leer.
- El modo `--red` no consulta hosts internos (localhost, `.local`, IP privada)
  ni la URL inicial ni en Instagram; un redirect aún podría aterrizar dentro.

## Salida

CSV por stdout con las columnas de entrada más:

| columna | valores |
| --- | --- |
| `web_propia` | `viva` · `sin_web` · `no_verificable` |
| `ig_estado` | `activo` · `inactivo` · `no_verificable` |
| `ig_ultimo_post` | fecha `YYYY-MM-DD` del último post visto, si se pudo leer |
| `pago` | `senal_resenas` · `insuficiente` · `no_verificable` |
| `prioridad` | `alta` · `revisar` · `descartar` |
| `motivo` | frase que cita la señal usada |

## Rúbrica

`descartar` si la web propia responde 2xx, o si `estado` contiene
cerrado/cerrada/closed.

`alta` solo si se cumplen las cuatro:

- **sin web propia viva** (`sin_web` o `no_verificable`)
- **clientes**: `resenas >= 15`
- **activo**: último post de Instagram dentro de 60 días, o `resenas >= 20`
  cuando Instagram salió `no_verificable`
- **pago**: `resenas >= 15` se anota `senal_resenas` (es una señal, no un
  ingreso; no se estima facturación)

`revisar` en cualquier caso intermedio.

## Qué cuenta como web propia

HTTP 2xx en un dominio propio. No es web propia si el host es instagram,
facebook, fb, linktr.ee, wa.me, google, goo.gl, maps o whatsapp (incluye
redirecciones que aterricen ahí). Si el GET falla (timeout 10 s, DNS, conexión)
el resultado es `no_verificable`, no `sin_web`.

## Instagram

Un GET al HTML público del perfil. Si aparece una fecha de publicación se usa
como último post. Si Instagram pide login o bloquea, `ig_estado` queda
`no_verificable` — nunca `inactivo`. Sin URL de Instagram en la ficha también
es `no_verificable`.

## Archivos

- `cli.mjs` — parseo del CSV, orquesta y emite el CSV clasificado.
- `rubrica.mjs` — `clasificar()` pura.
- `web.mjs` — verificación de web propia.
- `instagram.mjs` — verificación de Instagram y fechas.
- `comprobar.mjs` — casos fijos sin red.

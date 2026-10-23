// Estado y URL del deploy de Vercel de un commit (por defecto HEAD). El build de Vercel es el chequeo
// de compilación del proyecto: lint de tipos, prebuild de dither y export estático.
// Uso: node .agents/skills/sitiazo-verificar/scripts/preview.mjs [--sha <sha>] [--esperar]
//   --esperar  consulta cada 20 s hasta que el deploy termine (máximo ~20 min).
// Sale con código 1 si el deploy falló.
import { execFileSync } from 'node:child_process'
import { arg, bandera } from './lib.mjs'

const sh = (cmd, args) => execFileSync(cmd, args, { encoding: 'utf8' }).trim()
const sha = arg('--sha') ?? sh('git', ['rev-parse', 'HEAD'])
const repo = sh('gh', ['repo', 'view', '--json', 'nameWithOwner', '-q', '.nameWithOwner'])
const api = (ruta) => JSON.parse(sh('gh', ['api', ruta]))
const FINALES = ['success', 'failure', 'error', 'inactive']

for (let intento = 0; ; intento++) {
  const deploys = api(`repos/${repo}/deployments?sha=${sha}`)
  const estado = deploys.length ? api(`repos/${repo}/deployments/${deploys[0].id}/statuses`)[0] : null
  const valor = estado?.state ?? (deploys.length ? 'pending' : 'sin deploy')
  if (!bandera('--esperar') || FINALES.includes(valor) || intento >= 60) {
    console.log(`commit ${sha.slice(0, 10)}: ${valor}`)
    if (estado?.environment_url) console.log(`url:  ${estado.environment_url}`)
    if (estado?.target_url) console.log(`logs: ${estado.target_url}`)
    if (deploys[0]?.environment) console.log(`entorno: ${deploys[0].environment}`)
    process.exit(valor === 'failure' || valor === 'error' ? 1 : 0)
  }
  await new Promise((r) => setTimeout(r, 20000))
}

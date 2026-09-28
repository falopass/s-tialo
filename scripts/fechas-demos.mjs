import { readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const demosDir = join(process.cwd(), 'app', 'demos')
const today = new Date().toISOString()
const created = {}

for (const entry of readdirSync(demosDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue

  const slug = entry.name
  const demoPath = `app/demos/${slug}/`
  const output = execFileSync(
    'git',
    ['log', '--diff-filter=A', '--reverse', '--format=%aI', '--', demoPath],
    { encoding: 'utf8' },
  ).trim()

  created[slug] = output.split('\n')[0] || today
}

const ordered = Object.fromEntries(
  Object.entries(created).sort(([a], [b]) => a.localeCompare(b)),
)

writeFileSync(
  join(demosDir, 'creados.json'),
  `${JSON.stringify(ordered, null, 2)}\n`,
)

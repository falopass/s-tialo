// Peso de la carga inicial de los demos a 390×844. Solo mide, no arregla.
// Uso: node scripts/peso-demos.mjs [--base http://localhost:8811] [--slugs a,b] [--concurrency 6] [--out cache/peso-demos.json]
import { chromium } from 'playwright';
import { readdirSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const BASE = arg('--base', 'http://localhost:8811').replace(/\/$/, '');
const CONCURRENCY = Number(arg('--concurrency', 6));
const SETTLE_MS = 4500; // cubre los timers de EagerImages (1500/3500) y preloads del hero
const OUT = arg('--out', join('cache', 'peso-demos.json'));
const UMBRAL_KB = 200;

// Slugs = carpetas con index.html en out/demos (incluye los generados por [slug]).
const outDir = join(process.cwd(), 'out', 'demos');
const slugs = arg('--slugs')?.split(',') ??
  readdirSync(outDir).filter((n) => {
    const p = join(outDir, n);
    return statSync(p).isDirectory() && statSync(join(p, 'index.html')).isFile();
  }).sort();

async function medir(browser, slug) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const recursos = [];
  page.on('response', (res) => {
    const req = res.request();
    recursos.push(res.body()
      .then((b) => ({ url: res.url(), bytes: b.length, tipo: req.resourceType() }))
      .catch(() => res.headers()['content-length']
        ? { url: res.url(), bytes: Number(res.headers()['content-length']), tipo: req.resourceType() }
        : null));
  });
  try {
    await page.goto(`${BASE}/demos/${slug}/`, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(SETTLE_MS);
  } catch (e) {
    await page.close();
    return { slug, error: String(e).slice(0, 160) };
  }
  const items = (await Promise.all(recursos)).filter(Boolean);
  await page.close();
  const total = items.reduce((a, r) => a + r.bytes, 0);
  const pesados = items.filter((r) => r.bytes > UMBRAL_KB * 1024)
    .map((r) => ({ archivo: r.url.split('/').pop(), kb: Math.round(r.bytes / 1024), tipo: r.tipo }));
  const porTipo = {};
  for (const r of items) porTipo[r.tipo] = (porTipo[r.tipo] || 0) + r.bytes;
  return { slug, kb: Math.round(total / 1024), recursos: items.length, pesados, porTipo };
}

const browser = await chromium.launch();
const resultados = [];
let i = 0;
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (i < slugs.length) {
    const slug = slugs[i++];
    const r = await medir(browser, slug);
    resultados.push(r);
    console.log(`${r.error ? 'ERR ' : ''}${slug}: ${r.kb ?? '-'} KB (${r.recursos ?? 0} recursos)`);
  }
}));
await browser.close();

resultados.sort((a, b) => (b.kb ?? 0) - (a.kb ?? 0));
mkdirSync(join(process.cwd(), 'cache'), { recursive: true });
writeFileSync(OUT, JSON.stringify(resultados, null, 2));

const totalKb = resultados.reduce((a, r) => a + (r.kb || 0), 0);
console.log(`\n${resultados.length} demos · total ${Math.round(totalKb / 102.4) / 10} MB · mediana ${resultados.map(r => r.kb || 0).sort((a, b) => a - b)[Math.floor(resultados.length / 2)]} KB`);
console.log(`Guardado en ${OUT}`);

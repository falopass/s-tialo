// QA móvil de demos por CDP (Edge headless ya corriendo en 9223).
// Réplica de qa-movil-cloud.mjs sin playwright: mismas métricas en
// 390x844 + alt de imágenes y presencia del mapa embebido.
// Uso: node scripts/qa-movil-cdp.mjs slug1 slug2 ...
const PORT = process.env.CDP_PORT || '9223'
const BASE = process.env.QA_BASE || 'http://127.0.0.1:8321'
const slugs = process.argv.slice(2)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const SETTLE_MS = 3500
const MAX_BUTTON_H = 52
const MAX_FOOTER_PCT = 40
const MIN_CONTRAST = 4.5

const MEASURE = `(() => {
  const MAX_BUTTON_H = ${MAX_BUTTON_H}, MIN_CONTRAST = ${MIN_CONTRAST};
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden';
  };
  const label = (el) => (el.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 60);
  const sel = (el) => {
    const id = el.id ? '#' + el.id : '';
    const cls = typeof el.className === 'string' ? el.className.split(/\\s+/).filter(Boolean).slice(0, 3).join('.') : '';
    return el.tagName.toLowerCase() + id + (cls ? '.' + cls : '');
  };
  const botones = [];
  for (const el of document.querySelectorAll('a,button,[role="button"]')) {
    if (!visible(el) || !label(el)) continue;
    const h = Math.round(el.getBoundingClientRect().height);
    if (h > MAX_BUTTON_H) botones.push({ alto: h, texto: label(el), sel: sel(el) });
  }
  const footer = document.querySelector('footer');
  const footerPx = footer ? Math.round(footer.getBoundingClientRect().height) : 0;
  const footerPct = Math.round((footerPx / vh) * 1000) / 10;
  const parse = (c) => {
    const m = c.match(/rgba?\\(([^)]+)\\)/);
    if (!m) return null;
    const p = m[1].split(/[\\s,\\/]+/).filter(Boolean).map(Number);
    if (p.length < 3 || p.some(Number.isNaN)) return null;
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const blend = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1,
  });
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return (l1 + 0.05) / (l2 + 0.05); };
  const background = (el) => {
    const layers = [];
    for (let n = el; n; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none') return null;
      const bg = parse(cs.backgroundColor);
      if (!bg) return null;
      if (bg.a > 0) layers.push(bg);
      if (bg.a >= 1) break;
    }
    let out = { r: 255, g: 255, b: 255, a: 1 };
    for (const l of layers.reverse()) out = blend(l, out);
    return out;
  };
  const contraste = [];
  const seen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    const txt = t.textContent.trim();
    if (txt.length < 2) continue;
    const el = t.parentElement;
    if (!el || seen.has(el) || !visible(el)) continue;
    if (/^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName)) continue;
    seen.add(el);
    const cs = getComputedStyle(el);
    if (Number(cs.opacity) === 0) continue;
    const fg = parse(cs.color);
    const bg = background(el);
    if (!fg || !bg) continue;
    const fgSolid = fg.a < 1 ? blend(fg, bg) : fg;
    const r = Math.round(ratio(fgSolid, bg) * 100) / 100;
    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = size >= 24 || (size >= 18.66 && bold);
    const min = large ? 3 : MIN_CONTRAST;
    if (r < min) contraste.push({ ratio: r, minimo: min, texto: txt.slice(0, 60), color: cs.color, sel: sel(el) });
  }
  const scrollWidth = document.documentElement.scrollWidth;
  const desborde = scrollWidth > vw;
  const culpables = [];
  if (desborde) {
    for (const el of document.body.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > vw + 1 || r.left < -1) && culpables.length < 10) culpables.push({ sel: sel(el), left: Math.round(r.left), right: Math.round(r.right) });
    }
  }
  const invisibles = [];
  for (const el of document.body.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    if (Number(cs.opacity) !== 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const texto = label(el);
    if (!texto && !el.querySelector('img,svg,video')) continue;
    invisibles.push({ sel: sel(el), texto: texto.slice(0, 40), top: Math.round(r.top + window.scrollY) });
    if (invisibles.length >= 25) break;
  }
  const sinAlt = [];
  for (const img of document.querySelectorAll('img')) {
    if (!visible(img)) continue;
    const alt = img.getAttribute('alt');
    if (alt === null) sinAlt.push({ sel: sel(img), src: (img.src || '').split('/').pop().slice(0, 40) });
  }
  const mapa = !!document.querySelector('iframe[src*="maps"], iframe[title*="apa" i], iframe');
  const imgsRotas = [...document.querySelectorAll('img')].filter(i => i.complete && i.naturalWidth === 0).map(i => (i.currentSrc || i.src || '').split('/').pop().slice(0, 50));
  return { botones, footerPx, footerPct, contraste, desborde, scrollWidth, clientWidth: vw, culpables, invisibles, sinAlt, mapa, imgsRotas, title: document.title };
})()`

const targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json()
const page = targets.find((t) => t.type === 'page')
const ws = new WebSocket(page.webSocketDebuggerUrl)
await new Promise((r) => (ws.onopen = r))
let id = 0
const waiters = new Map()
ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data) } catch { return } if (m.id && waiters.has(m.id)) { waiters.get(m.id)(m); waiters.delete(m.id) } }
const send = (method, params = {}) => new Promise((res, rej) => { const mid = ++id; ws.send(JSON.stringify({ id: mid, method, params })); waiters.set(mid, (m) => (m.error ? rej(new Error(m.error.message)) : res(m.result))) })
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true })).result?.value

await send('Page.enable')
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true })
await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' })

for (const slug of slugs) {
  const url = `${BASE}/demos/${slug}/`
  await send('Page.navigate', { url })
  await sleep(6500)
  const r = await ev(MEASURE)
  if (!r) { console.log(slug.padEnd(52), 'ERROR: sin resultado'); continue }
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 70, captureBeyondViewport: true, clip: { x: 0, y: 0, width: 390, height: Math.min(await ev('document.documentElement.scrollHeight'), 12000), scale: 0.5 } })
  const { writeFileSync } = await import('node:fs')
  writeFileSync(`/tmp/qa-${slug}.jpg`, Buffer.from(shot.data, 'base64'))
  console.log(
    `${slug.padEnd(52)} btn>52:${r.botones.length} footer:${r.footerPct}% contraste:${r.contraste.length} ` +
    `desborde:${r.desborde ? r.scrollWidth : 'no'} invis:${r.invisibles.length} sinAlt:${r.sinAlt.length} mapa:${r.mapa} rotas:${r.imgsRotas.length}`
  )
  for (const b of r.botones.slice(0, 6)) console.log(`   btn ${b.alto}px "${b.texto}" ${b.sel}`)
  for (const c of r.contraste.slice(0, 8)) console.log(`   contraste ${c.ratio}:1 "${c.texto}" ${c.sel}`)
  for (const v of r.invisibles.slice(0, 6)) console.log(`   invis top:${v.top} "${v.texto}" ${v.sel}`)
  for (const i of r.sinAlt.slice(0, 6)) console.log(`   sinAlt ${i.src} ${i.sel}`)
  for (const i of r.imgsRotas.slice(0, 6)) console.log(`   rota ${i}`)
  if (r.desborde) for (const c of r.culpables.slice(0, 6)) console.log(`   desborde ${c.sel} left:${c.left} right:${c.right}`)
}
ws.close()
process.exit(0)

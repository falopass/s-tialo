import { chromium } from 'playwright';
const shots = [
  ['piscinas-santa-adela-molina', 390], ['piscinas-santa-adela-molina', 1440],
  ['panaderia-la-moderna-talca', 390], ['panaderia-la-moderna-talca', 1440],
];
const b = await chromium.launch();
for (const [slug, w] of shots) {
  const p = await b.newPage({ viewport: { width: w, height: 844 } });
  await p.goto(`http://localhost:3010/demos/${slug}/`, { waitUntil: 'networkidle' });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const t = setInterval(() => { y += 700; scrollTo(0, y); if (y >= document.body.scrollHeight) { clearInterval(t); r(); } }, 60); }); });
  await p.waitForTimeout(2600);
  await p.screenshot({ path: `tmp/shot-${slug}-${w}.png`, fullPage: true });
  await p.close();
}
await b.close();

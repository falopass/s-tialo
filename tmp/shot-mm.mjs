import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, name] of [[390, 'mm-390'], [1440, 'mm-1440']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 844 }, deviceScaleFactor: w < 500 ? 2 : 1, isMobile: w < 500, hasTouch: w < 500 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4800/demos/marco-molina-repuestos/', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.querySelectorAll('iframe').forEach(f => f.remove()));
  await p.waitForTimeout(2500);
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const t = setInterval(() => { y += 700; scrollTo(0, y); if (y >= document.body.scrollHeight) { clearInterval(t); r(); } }, 120); }); });
  await p.waitForTimeout(1200);
  await p.evaluate(() => scrollTo(0, 0));
  await p.waitForTimeout(800);
  await p.screenshot({ path: `tmp/${name}-full.png`, fullPage: true });
  await ctx.close();
}
await b.close();
console.log('done');

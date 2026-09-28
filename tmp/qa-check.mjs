import { chromium } from 'playwright';
const slug = process.argv[2];
const base = process.argv[3] || 'http://localhost:4800';
const browser = await chromium.launch();
async function audit(w, tag) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 844 }, deviceScaleFactor: 2, isMobile: w < 500, hasTouch: w < 500 });
  const page = await ctx.newPage();
  await page.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 60000 });
  // scroll to bottom to trigger reveals, then back up
  await page.evaluate(async () => { await new Promise(r => { let y=0; const t=setInterval(()=>{ y+=600; scrollTo(0,y); if (y >= document.body.scrollHeight) { clearInterval(t); r(); } }, 60); }); });
  await page.waitForTimeout(800);
  const res = await page.evaluate(() => {
    const out = { buttons: [], invisible: [], noAlt: [], footerH: null, sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth };
    for (const a of document.querySelectorAll('a.tap-44, a[class*="tap"], .tap-44')) {
      const r = a.getBoundingClientRect();
      const cs = getComputedStyle(a);
      if (r.height > 52.5 && cs.position !== 'fixed') out.buttons.push({ t: (a.textContent||'').trim().slice(0,40), h: Math.round(r.height) });
    }
    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
      if (r.height > 10 && parseFloat(cs.opacity) === 0 && !el.closest('[data-allow-hidden]')) {
        out.invisible.push(el.tagName + '.' + String(el.className).split(' ')[0]);
      }
    }
    for (const img of document.querySelectorAll('img')) if (!img.hasAttribute('alt')) out.noAlt.push(img.src.split('/').pop());
    const f = document.querySelector('footer');
    if (f) out.footerH = Math.round(f.getBoundingClientRect().height);
    return out;
  });
  await page.evaluate(() => scrollTo(0,0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/qa/${slug}-${tag}-top.png` });
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight * 0.5));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `/tmp/qa/${slug}-${tag}-mid.png` });
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `/tmp/qa/${slug}-${tag}-end.png` });
  console.log(`--- ${slug} @${w}`);
  console.log('desborde:', res.sw > res.cw ? `SI (${res.sw}/${res.cw})` : 'no');
  console.log('botones>52px:', res.buttons.length ? res.buttons : 'ninguno');
  console.log('invisibles:', res.invisible.length ? res.invisible.slice(0,10) : 'ninguno');
  console.log('imgs sin alt:', res.noAlt.length ? res.noAlt : 'ninguna');
  console.log('footer:', res.footerH, 'px', res.footerH > 340 ? '(>340!)' : '');
  await ctx.close();
}
await audit(390, 'm');
await audit(1440, 'd');
await browser.close();

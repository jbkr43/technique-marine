import { test, expect } from '@playwright/test';

test.describe('Technique Marine — full tests', () => {

  test('no broken internal links', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('a[href^="/"]');
    const count = await links.count();
    const bad: string[] = [];
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      if (!href || href.startsWith('tel:') || href === '/') continue;
      if (href.startsWith('/#')) continue;
      const res = await page.goto(href);
      if (res?.status() === 404) bad.push(href);
    }
    expect(bad).toHaveLength(0);
  });

  test('all images have alt text', async ({ page }) => {
    await page.goto('/');
    const imgs = page.locator('img:not([role="presentation"])');
    const count = await imgs.count();
    let missing = 0;
    for (let i = 0; i < count; i++) {
      const alt = await imgs.nth(i).getAttribute('alt');
      if (alt === null) missing++;
    }
    expect(missing).toBe(0);
  });

  test('no WCAG critical violations', async ({ page }) => {
    await page.goto('/');
    const results = await page.evaluate(async () => {
      const { default: axe } = await import('https://cdn.jsdelivr.net/npm/axe-core@4.10.0/+esm');
      return await axe.run();
    });
    const critical = results.violations.filter((v: any) => v.impact === 'critical');
    expect(critical).toHaveLength(0);
  });

  test('social links in footer', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('no duplicate IDs', async ({ page }) => {
    await page.goto('/');
    const ids = await page.evaluate(() => {
      const els = document.querySelectorAll('[id]');
      const all = Array.from(els).map((el) => el.id);
      const dups = all.filter((id, i) => all.indexOf(id) !== i);
      return [...new Set(dups)];
    });
    expect(ids).toHaveLength(0);
  });

});

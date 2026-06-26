import { test, expect } from '@playwright/test';

test.describe('Technique Marine — smoke tests', () => {

  test('page loads without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await expect(page.locator('h2').first()).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('has correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Technique Marine/);
  });

  test('Call Now button links to tel:', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('.hero__call-btn');
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('href', 'tel:+19104651175');
  });

  test('hero sections are present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('#services')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#testimonials')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('services cards render', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.services__card');
    await expect(cards).toHaveCount(3);
  });

  test('testimonial cards render', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.testimonials__card');
    await expect(cards).not.toHaveCount(0);
  });

  test('contact form has all fields', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#boat')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('#submitBtn')).toBeVisible();
  });

  test('honeypot field is hidden', async ({ page }) => {
    await page.goto('/');
    const honeypot = page.locator('input[name="_gotcha"]');
    await expect(honeypot).toBeHidden();
  });

  test('form validation shows errors on empty submit', async ({ page }) => {
    await page.goto('/');
    await page.locator('#submitBtn').click();
    const errors = page.locator('.contact__error:not([hidden])');
    await expect(errors.first()).toBeVisible();
  });

  test('navbar has navigation links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.navbar__link[href="#services"]')).toBeVisible();
    await expect(page.locator('.navbar__link[href="#about"]')).toBeVisible();
    await expect(page.locator('.navbar__link[href="#testimonials"]')).toBeVisible();
  });

  test('map container exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#contactMap')).toBeVisible();
  });

  test('reveal elements exist in DOM', async ({ page }) => {
    await page.goto('/');
    const reveals = page.locator('.reveal');
    const count = await reveals.count();
    expect(count).toBeGreaterThan(5);
  });

  test('footer renders', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });

  test('favicon is linked', async ({ page }) => {
    await page.goto('/');
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute('href', '/favicon.png');
  });

  test('thank-you page loads', async ({ page }) => {
    await page.goto('/thank-you');
    await expect(page.locator('body')).toBeVisible();
  });

  test('404 page loads', async ({ page }) => {
    const response = await page.goto('/nonexistent-page');
    expect(response?.status()).toBe(404);
    await expect(page.locator('body')).toBeVisible();
  });

});

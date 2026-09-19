import { expect, test } from '@playwright/test';

test('privacy, terms, and contact exist in english and russian', async ({ page }) => {
  const enPrivacy = await page.goto('/en/privacy/');
  expect(enPrivacy?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /contact form/i })).toBeVisible();

  const ruTerms = await page.goto('/ru/terms/');
  expect(ruTerms?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1, name: /условия использования/i })).toBeVisible();

  const contact = await page.goto('/en/contact/');
  expect(contact?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1, name: /^contact$/i })).toBeVisible();
  await expect(page.getByLabel(/^email$/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /^send$/i })).toBeVisible();
  await expect(page.getByText(/marked as coming from BPM Tap/i)).toBeVisible();
});

test('pulse footer tags contact as pulse on bpm tap', async ({ page }) => {
  await page.goto('/en/pulse/');
  await page.getByRole('contentinfo').getByRole('link', { name: /^contact$/i }).click();
  await expect(page).toHaveURL(/\/en\/contact\/\?from=pulse/);
  await expect(page.getByText(/from Pulse on BPM Tap/i)).toBeVisible();
});

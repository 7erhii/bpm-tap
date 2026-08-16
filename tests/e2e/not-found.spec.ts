import { expect, test } from '@playwright/test';

test('unknown english url returns a 404 page', async ({ page }) => {
  const res = await page.goto('/en/this-page-does-not-exist/');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /open tap bpm/i })).toBeVisible();
});

test('unknown russian url localizes the 404 page', async ({ page }) => {
  const res = await page.goto('/ru/net-takoy-stranicy/');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: /страница не найдена/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /открыть tap bpm/i })).toHaveAttribute(
    'href',
    '/ru/',
  );
});

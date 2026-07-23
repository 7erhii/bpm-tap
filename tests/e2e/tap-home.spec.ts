import { expect, test } from '@playwright/test';

test('home tool is above the fold and measures BPM', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');

  const tap = page.getByRole('button', { name: /tap the beat/i });
  await expect(tap).toBeInViewport();

  for (let i = 0; i < 10; i += 1) {
    await tap.click();
    await page.waitForTimeout(500);
  }

  await expect(page.locator('.bpm-value')).not.toHaveText('—');
  await page.getByRole('button', { name: /^Copy$/i }).click();
  await expect(page.getByRole('button', { name: /Copied/i })).toBeVisible();
});

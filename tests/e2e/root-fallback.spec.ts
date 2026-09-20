import { expect, test } from '@playwright/test';

test.describe('bare origin fallback', () => {
  test.use({ javaScriptEnabled: false });

  test('https://bpm-tap.com/ without a locale still paints with /root.css', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await expect(page.locator('link[href="/root.css"]')).toHaveCount(1);
    await expect(page.getByRole('heading', { name: 'BPM Tap' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'English' })).toBeVisible();

    const background = await page.locator('body').evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(background).not.toBe('rgba(0, 0, 0, 0)');
    expect(background).not.toBe('rgb(255, 255, 255)');
  });
});

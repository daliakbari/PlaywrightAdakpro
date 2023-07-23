// @ts-check
const { test, expect } = require('@playwright/test');
import { ReportingApi } from '@reportportal/agent-js-playwright';
test('basic test', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

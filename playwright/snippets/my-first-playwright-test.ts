import { test, expect } from '@playwright/test';

test('my first test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  // not sure why the heading has a different text than the title
  const heading = await page.textContent('h1');
  expect(title).toBe('Example Domain');
  console.log('Heading:', heading);
});

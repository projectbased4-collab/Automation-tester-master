// Minimal API testing with Playwright: mock and intercept network requests
// Level: L2 — first-person scratch notes, still figuring things out

import { test, expect } from '@playwright/test';

test('mocks a GET endpoint and returns fake data', async ({ page }) => {
  // I'm intercepting requests to /api/todos and returning fake data instead
  // so I can test my UI without hitting the real backend.
  await page.route('**//api/todos/**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, title: 'mocked todo', completed: false },
      ]),
    });
  });

  await page.goto('https://demo.playwright.dev/todomvc/#/');
  // I expect the mocked todo to appear in the list since the real API is blocked
  const item = page.locator('.todo-list li', { hasText: 'mocked todo' });
  await expect(item).toBeVisible();
});

test('asserts on a network response body', async ({ page }) => {
  // Here I'm letting the request go through but reading the response
  // so I can verify the backend actually returned what I expect.
  const [response] = await Promise.all([
    page.waitForResponse('**//api/todos/**'),
    page.goto('https://demo.playwright.dev/todomvc/#/'),
  ]);

  expect(response.status()).toBe(200);
  const json = await response.json();
  // Just a weak sanity check — I'm not sure what the real payload looks like yet
  expect(Array.isArray(json)).toBe(true);
});

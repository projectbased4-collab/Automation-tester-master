# Playwright — quick primer

> First-day notes for someone who's never used Playwright. Personal voice, plain language.

## What is it?

Playwright is a browser automation tool from Microsoft. If you've used Selenium before, it's like that but newer — it runs tests in Chromium, Firefox, and WebKit with one API. I think of it as "Selenium but modern" because it handles a lot of the flaky stuff automatically. It came out in 2020, so it's young, but it's already really popular for end-to-end testing.

## What does it do?

It lets you launch real browsers from code — click buttons, fill forms, take screenshots, wait for network requests. You write a script in JavaScript/TypeScript, Python, C#, or Java, and Playwright drives the browser like a puppeteer (there's even a `page.evaluate()` to run JS in the page context).

## Why does it exist?

Browser automation has been around for a while — Selenium's been the standard since 2004 — but Selenium tests are slow and flaky. They break when a page loads a millisecond slower or a CSS class changes. Playwright was built to fix that: it auto-waits for elements, has a built-in test runner, and can intercept network requests. People use it day-to-day for end-to-end testing, web scraping, and screenshot comparisons. The makers of Playwright also made Puppeteer, but Playwright is the multi-browser version.

## Key terminology

- **Browser contexts** — Isolated browser sessions. Each context has its own cookies, localStorage, and history. Example: `const context = await browser.newContext();` — useful for testing multi-user scenarios.
- **Locators** — The main way to find elements on a page (instead of raw CSS selectors). Example: `page.getByText('Submit')` finds a button by its visible text. They're resilient to DOM changes.
- **Auto-waiting** — Playwright waits for elements to be actionable before clicking. I don't have to write `sleep()` calls anymore. This is the biggest quality-of-life improvement over Selenium.
- **Trace viewer** — A built-in tool that records everything that happened in a test — DOM snapshots, console logs, network requests. Example: `npx playwright show-trace trace.zip`.
- **Codegen** — A CLI mode that records my actions in the browser and generates the code for them. Example: `npx playwright codegen` opens a browser window and writes the test for me as I click around.
- **Assertions with retry** — Assertions that auto-retry until the condition is met. Example: `await expect(page).toHaveTitle(/Playwright/);` won't fail just because the page is still loading.

## A tiny example

```typescript
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://example.com');
console.log(await page.title());
await browser.close();
```

This launches a Chromium browser, opens a page, prints the title, and closes. It's the "hello world" of Playwright — 6 lines and you've already automated a browser.

## What I'll cover next

Now that I know what Playwright is and can open a browser, I want to install it properly and figure out how to write and run my first real test — something that navigates to a page, clicks a button, and checks that something changed.

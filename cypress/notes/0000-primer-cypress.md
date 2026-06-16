# Cypress — quick primer

> First-day notes for someone who's never used Cypress. Personal voice, plain language.

## What is it?

Cypress is a frontend testing tool — it runs tests inside a real browser, not in a headless simulator like JSDOM. If you've used Selenium or Playwright, it sits in the same category (end-to-end testing of web apps), but Cypress is different architecturally: it runs in the same event loop as the app under test. That means it can see and stub everything — network requests, timers, DOM mutations — without the "test waits 2 seconds for no reason" problem.

It came out in 2017 and got popular fast because the developer experience is polished. You get a dashboard that shows every command with before/after snapshots, plus a time-travel debugger that lets you hover over any step and see what the page looked like at that moment.

## What does it do?

It lets me write tests that visit pages, click buttons, type into forms, intercept network calls, and assert on what's visible — all with automatic waiting. No `sleep()` calls. The test runner opens a real browser window (or runs headless), executes the spec, and shows a video recording or screenshot on failure. It also has a built-in fixture system for test data and a command-line dashboard for CI runs.

## Why does it exist?

Before Cypress, end-to-end testing meant Selenium or PhantomJS. Selenium is powerful but slow and flaky — I'd spend more time debugging "element not found" races than writing tests. Cypress was built from scratch to fix that: it auto-waits for elements to exist, it runs in-browser so there's no WebDriver handoff latency, and it intercepts network requests at the browser level so I can stub API responses without a separate mock server.

Day to day it's used by frontend devs writing component and E2E tests, QA engineers setting up automated regression suites, and teams that want a visual test dashboard for CI.

## Key terminology

- **`cy`** — The global command object. Every Cypress command starts with `cy.` (e.g., `cy.visit('/')`, `cy.get('.button').click()`). It's like jQuery chaining but for test actions.
- **`describe` / `it`** — Mocha-style BDD test blocks. `describe('Login', () => { it('logs in', ...) })`. Cypress bundles Mocha and Chai under the hood.
- **Assertions** — Cypress uses Chai's `expect` and `assert`, plus built-in "should" chaining. Example: `cy.get('.message').should('contain', 'Success')`.
- **Automatic waiting** — The killer feature. `cy.get('.button')` doesn't just query once — it retries until the element exists or a timeout hits. No more `waitForElement` helpers.
- **Fixtures** — JSON or fixture files stored in `cypress/fixtures/` that I can load as test data. Example: `cy.fixture('user.json').as('user')`.
- **Intercept** — The network layer API. `cy.intercept('GET', '/api/users', { fixture: 'users.json' })` stubs a network call so tests don't hit a real server.
- **Cypress Studio** — A beta feature where I can record clicks in the browser and Cypress writes the corresponding test code. Haven't tried it yet.
- **`cypress.json`** — The config file. Sets base URL, viewport, timeouts, and which files to include.

## A tiny example

```javascript
describe('Home page', () => {
  it('loads successfully', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Welcome');
  });
});
```

This visits a URL, finds an `h1` element, and asserts it contains the text "Welcome" — all with automatic retrying.

## What I'll cover next

Now that I know what Cypress is, I want to install it, create a new project, and get the example spec passing. After that I'll try writing a more realistic test that navigates around and checks form inputs.

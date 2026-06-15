# Cypress — quick primer

> First-day notes for someone who's never used Cypress. Personal voice, plain language.

## What is it?

Cypress is a browser automation testing framework that runs inside the same execution loop as the application you're testing. Unlike Selenium, which talks to browsers through WebDriver from outside, Cypress actually lives inside the browser — it can see everything your app does in real time. If you've used Jest or Mocha for unit testing, Cypress feels familiar because it uses Mocha's test structure and has excellent debugging features built in.

## What does it do?

It lets me write end-to-end tests that interact with my web app just like a real user would — clicking buttons, filling forms, navigating pages. Because Cypress runs in the same run loop as the app, I can stub network requests, spy on function calls, and inspect the DOM at any point during the test. The test runner opens a visual interface where I can see each step happen, time-travel through commands, and debug failures without console.log everywhere.

## Why does it exist?

Before Cypress, end-to-end testing meant Selenium or older frameworks that were flaky and hard to debug. I'd spend hours figuring out why a test failed because the browser and test runner were separate processes. Cypress solves this by running in the same context, which makes tests more reliable and gives me direct access to the application state. It also bundles everything I need — assertions, mocking, stubbing, screenshots, videos — with zero setup.

## Key terminology

- **Test Runner** — the interactive GUI that opens when I run `cypress open`, shows my test list and runs them in real browsers. Example: I click a test file and watch it execute step by step.
- **Spec** — a test file containing one or more test cases, written like Mocha `describe()` and `it()` blocks. Example: `describe('Login', () => { it('works', () => { ... }) })`.
- **Command** — any Cypress function call like `cy.visit()` or `cy.click()`, queued up and executed in order. Example: `cy.get('button').click()` finds a button and clicks it.
- **Assertion** — built-in chai checks like `.should('contain', 'text')` that wait and retry until they pass. Example: `cy.get('h1').should('be.visible')` waits for the h1 to appear.
- **Fixture** — static test data files I can import to avoid hitting real APIs. Example: `cy.fixture('user.json')` loads a mock user object.
- **Plugin** — code in `plugins/index.js` that runs in Node, giving tests access to filesystem and network. Example: I can read CSV files or start a mock server.
- **Stub** — replacing a real function or network call with a fake one. Example: `cy.intercept('GET', '/api/users', { fixture: 'users' })` fakes the API response.
- **Selector** — the string I pass to `cy.get()` to find DOM elements. Example: `'#submit'`, `'[data-testid="login-btn"]'`, or `'form'`.

## A tiny example

Here's the smallest thing I can think of — visiting a page and checking the title:

```javascript
describe('My First Test', () => {
  it('visits the app and sees the title', () => {
    cy.visit('https://example.com')
    cy.get('h1').should('contain', 'Example')
  })
})
```

This opens example.com, grabs the h1 element, and asserts it contains "Example".

## What I'll cover next

Now that I understand what Cypress is, I want to install it locally and run my first test against a real app — probably something simple I can spin up with `npm init`. After that I'll explore the Cypress UI to make sure time-travel debugging works and try out the automatic waiting on elements.
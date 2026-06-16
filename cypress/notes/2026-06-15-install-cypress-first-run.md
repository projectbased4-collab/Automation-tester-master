# Cypress — install and run my first test

I installed Cypress today following the docs. Here's what worked and where I got stuck.

## Install

Used npm in my project:

```bash
npm install cypress --save-dev
```

That gave me a `cypress` folder with example tests and support files.

## Open the test runner

First run opened the GUI:

```bash
npx cypress open
```

It created `cypress.config.js` and asked me to pick a browser. I chose Chrome.

## First smoke test

Clicked on the pre-made `spec.cy.js` file. It ran and showed a passing test that visits `example.cypress.io`. The UI shows each step live.

## What I learned

Cypress runs in the same run loop as the app, so it sees everything happening. No explicit waits needed — it auto-waits for elements.

## What I still need

Want to try running headless with `cypress run` and see how to write my own tests.
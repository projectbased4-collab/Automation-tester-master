# Installing Playwright and running my first test

I followed the quickstart from the Playwright docs. Here's what worked.

## Installation

Ran `npm init playwright@latest` in a fresh directory. The CLI walked me through:
- Choose TypeScript or JavaScript (I picked TypeScript)
- Name of the test folder (default is `tests/`)
- Whether to add a GitHub Actions workflow (skipped for now)
- Whether to install browser binaries (yes)

Then `npx playwright install` downloaded Chromium, Firefox, and WebKit. Took about 2 minutes.

## Running the example test

The init created a `tests/` folder with an `example.spec.ts` file. I ran:

```
npx playwright test
```

It ran the example test in Chromium headlessly. Green checkmark. Felt good.

## Got stuck on

The first time I ran `npx playwright test`, it complained that browsers weren't installed. I'd skipped the `--with-deps` flag — needed to run `npx playwright install --with-deps` to get system dependencies on Linux.

## What I'd try next

Next I want to write my own test instead of just running the example. Something with `page.goto`, `page.click`, and an assertion.

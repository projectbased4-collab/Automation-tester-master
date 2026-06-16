# Postman — quick primer

> First-day notes for someone who's never used Postman. Personal voice, plain language.

## What is it?

Postman is an API client. If you've ever tested a web backend with curl or your browser's address bar, Postman is the grown-up version of that — it's a desktop (and web) app that sends HTTP requests and shows me the response. It's not a testing framework in the Selenium or Cypress sense; it's for working with APIs directly.

I've used curl a bit but it gets messy when I need headers, auth, cookies, or complex JSON bodies. Postman wraps all of that in a visual form where I fill in the URL, method, headers, and body, then hit Send. I can also save requests into collections, which is like organizing bookmarks for API calls.

## What does it do?

It lets me build and send any HTTP request (GET, POST, PUT, DELETE, etc.) through a GUI, inspect the response body and headers, and write little test scripts that run after each request. I can chain requests together so that one request grabs a token from the response and feeds it into the next one. It also has a mock server and monitor feature, but I haven't touched those yet.

## Why does it exist?

Before Postman, API testing meant either curl commands in terminal or writing throwaway scripts in a real programming language. Both work, but neither is as fast for exploration. Postman gives me a visual pane where I can tweak a header and resend in one click. It also means frontend devs, backend devs, and QA folks all speak the same tool — a shared collection is easier to hand off than a directory of scripts.

Day to day it's used by anyone who talks to APIs: backend devs testing endpoints, QA writing automated API test suites, and frontend devs mocking responses while the backend is still being built.

## Key terminology

- **Request** — one API call: a method plus URL plus optional headers and body. The atomic unit of work.
- **Collection** — a folder of saved requests. I can group requests that belong to the same feature or workflow.
- **Environment** — a set of variables (like `{{baseUrl}}` or `{{token}}`) that I can swap between dev, staging, and prod without changing the request itself.
- **Pre-request Script** — a tiny bit of JavaScript that runs *before* the request is sent. I use it to compute a value or set a header.
- **Tests Script** — JavaScript that runs *after* the response comes back. I write assertions here, like `pm.test("status is 200", () => pm.response.code === 200)`.
- **pm** object — the global object in test scripts. `pm.request`, `pm.response`, `pm.environment` give me access to the current request/response and environment data.
- **Workspace** — a shared space for a team or project. Collections live inside workspaces.

## A tiny example

Here's the smallest thing I plan to try — a GET request to a public test API with one test checking the status code. I'd set this up in the UI, but here's what the Tests tab would contain:

```javascript
pm.test("Status code is 200", () => {
  pm.response.code.to.equal(200);
});
```

Caption: a one-line Postman test that fails the request if the server doesn't return 200.

## What I'll cover next

Next I want to actually install Postman, fire up the app, and send my first real request. I'll write up what the UI looks like and any setup surprises. After that I'll try writing a test script and maybe chain a couple of calls together using environment variables.

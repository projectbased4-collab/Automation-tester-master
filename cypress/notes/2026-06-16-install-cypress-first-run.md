# Installing Cypress and running my first test

I followed the Cypress quickstart guide. Here's what happened.

## Installation

Ran `npm install cypress --save-dev` in an empty directory. That downloaded the npm package. Then I ran `npx cypress open` to launch the Cypress app for the first time — it downloaded the Cypress binary (took a couple minutes) and opened a GUI.

The GUI showed an "E2E Testing" option. I clicked it and it asked me to pick a browser — I chose Chrome. Cypress auto-generated a `cypress.config.js` file and a `cypress/` folder structure with `e2e/`, `fixtures/`, and `support/` directories.

## Running the example spec

Cypress ships with example specs. I clicked the "Scaffold example specs" button and got a `cypress/e2e/1-getting-started/todo.cy.js` file. Clicking it opened Chrome and ran the test — it visited a todo app page, added items, checked them off, and verified the list updated. All green.

## Got stuck on

The first time I ran `npx cypress open`, it opened a GUI but I didn't see my project's specs. I hadn't set the `e2e` config correctly. I realized I needed to run from the project root where `cypress.config.js` lives.

Also, the example spec uses `cy.origin()` for cross-origin tests — I got a warning about experimental features being enabled. Had to add `experimentalOriginDependencies: true` to the config.

## What I'd try next

Next I want to write my own spec from scratch — something simple that visits a page and checks the title. Then I'll try adding a network intercept to see how stubbing works.

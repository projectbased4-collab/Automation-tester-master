# Selenium — quick primer

> First-day notes for someone who's never used Selenium. Personal voice, plain language.

## What is it?

Selenium is a browser automation tool that's been around since 2004. If you've ever wanted to write code that opens a browser, clicks buttons, fills out forms, and scrapes data — Selenium is the OG for that. It's a suite of tools: WebDriver (the API that drives browsers), IDE (a Firefox/Chrome extension that records clicks), and Grid (running tests on remote machines). I think of it as the granddaddy of tools like Playwright and Cypress — it's older, a bit clunkier, but still the most widely supported.

## What does it do?

It lets you write scripts in Python, Java, C#, Ruby, JavaScript, and more that control real browsers (Chrome, Firefox, Safari, Edge). You can navigate to URLs, find elements by CSS or XPath, click things, type text, take screenshots, and check that the right stuff shows up. Basically anything you can do with a mouse and keyboard in a browser, Selenium can automate.

## Why does it exist?

Before Selenium, testing web apps meant doing it manually or writing brittle scripts that broke every time the UI changed. Selenium gave testers a standard API that works across browsers. Companies use it day-to-day for end-to-end testing, regression testing, and data scraping at scale. It's not the newest kid on the block (Playwright and Cypress are snappier), but Selenium has the biggest community and works with basically every browser and every CI system.

## Key terminology

- **WebDriver** — The core API that sends commands to a browser. Example: `webdriver.Chrome()` launches Chrome.
- **Element** — A thing on a web page (button, input, link). Example: `driver.find_element(By.ID, "submit")` finds a button.
- **Locator** — How you tell Selenium what element to interact with (by ID, class, XPath, CSS selector, etc.). Example: `By.XPATH("//button[text()='Login']")` finds a button by its visible text.
- **Implicit wait** — Tells the driver to wait a set time before throwing "element not found". Example: `driver.implicitly_wait(10)` waits up to 10 seconds.
- **Explicit wait** — Waits for a specific condition. Example: `WebDriverWait(driver, 10).until(EC.presence_of_element_located(...))`.
- **Selenium Grid** — A setup where tests run on multiple machines/browsers in parallel. Useful when you need to test across 50 browser/OS combos.

## A tiny example

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")
print(driver.title)
driver.quit()
```

This opens Chrome, goes to example.com, prints the page title, and closes the browser. Three lines to automate a browser.

## What I'll cover next

I want to actually install selenium and the ChromeDriver, then write a real test that navigates somewhere and checks the page content. The primer gave me the lay of the land — now I need to make it work on my machine.

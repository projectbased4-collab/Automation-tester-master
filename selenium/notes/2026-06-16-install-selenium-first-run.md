# Installing Selenium and opening my first browser

I followed the Selenium docs to get WebDriver working. Here's what happened.

## Installation

Ran `pip install selenium` — that was easy. But then I tried to run a script and got `WebDriverException: Message: 'chromedriver' executable needs to be in PATH`.

Turns out Selenium 4+ needs a driver binary. I downloaded ChromeDriver from the Chrome for Testing site and put it in `/usr/local/bin`. That worked.

## Opening a browser

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")
print(driver.title)
driver.quit()
```

This opened Chrome, loaded the page, printed "Example Domain", and closed the tab. Felt like magic.

## Got stuck on

The ChromeDriver version has to match my Chrome version exactly. At first I grabbed the wrong one and got a version mismatch error. Checked `chrome://settings/help` to find my version, then downloaded the matching driver.

## What I'd try next

Now I want to write something more useful — navigate to a page, find an element, and click it. Maybe log into something and check the result.

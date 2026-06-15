# Appium — quick primer

> First-day notes for someone who's never used Appium. Personal voice, plain language.

## What is it?

I just heard about Appium and looked into it. It's a mobile app testing tool that works for both iOS and Android from the same codebase. If you've ever used Selenium for web browser testing (I haven't yet but I know the idea), Appium uses the same approach — the WebDriver protocol. Basically my test script talks to an HTTP server, and that server relays commands to whichever phone or emulator I'm targeting.

From what I read, Appium is itself an HTTP server that sits in the middle. My test sends JSON commands like "tap this button" or "type into that field" and Appium translates those into the platform-native automation commands — XCUITest on iOS, UiAutomator2 on Android. That translation is the whole point: I don't write iOS-specific and Android-specific tests separately.

I haven't installed it yet but I wanted to understand what I'm getting into first.

## What does it do?

It lets me write one test script and run it on Android or iOS without changing the logic. I tell it what device to connect to using "capabilities" (basically a JSON config that says "this is an Android device at such-and-such address"). Then I send commands using the Appium client library (there are clients for Python, Java, JS, Ruby, etc.) and it handles the rest.

The core actions are things I'd expect: find an element on screen, tap it, type text, scroll, wait for things to appear. Pretty much what you'd do manually while testing an app.

## Why does it exist?

Before Appium, mobile testers had to pick a framework early and live with it. Android devs used Espresso or UI Automator. iOS devs used XCUITest. If you wanted to test both platforms, you wrote everything twice. That's expensive and the tests drift apart over time.

Appium abstracts both platforms behind the same WebDriver API. One test, two platforms. It also means teams that already know Selenium WebDriver don't have to learn a whole new paradigm for mobile — the driver commands (find element, click, send keys) are the same shape. That's why so many QA teams use it.

Day to day I think it's used by SDETs and automation engineers who write test suites that run in CI against emulators or real devices on cloud services like BrowserStack or Sauce Labs.

## Key terminology

- **WebDriver** — the standard protocol for browser automation (W3C spec). Appium extends it for mobile. So `driver.find_element(By.ID, "login")` looks familiar if you've done Selenium.
- **Desired Capabilities** — a JSON dictionary (Python dict, JS object) that configures the session. Stuff like `platformName`, `deviceName`, `app` (path to the app file). I'll need to get this right or nothing works.
- **Session** — a single connection from my test to the device. Starts when I call `webdriver.Remote()` and ends with `driver.quit()`. One session per test run, usually.
- **Appium Server** — the Node.js server that listens on port 4723 and translates commands. I start it from terminal with just `appium` once my first test tells the client code to connect on `http://localhost:4723/wd/hub`.
- **XCUITest** — Apple's framework for driving iOS apps. Appium delegates to this on iOS. I don't need to know XCUITest syntax, just that Appium handles the translation.
- **UiAutomator2** — Google's framework for driving Android apps. Same idea as XCUITest but for Android. Appium uses this by default on Android.
- **Element** — any UI widget: a button, text field, label, switch. I find elements by various strategies and then act on them.
- **Locator Strategy** — the method I use to identify an element. By ID, by XPath, by accessibility label, by class name, etc. `find_element(By.ID, "com.example:id/button")` uses the `id` strategy.
- **Accessibility ID** — my preferred locator approach for mobile. Reads `content-desc` on Android or `accessibilityIdentifier` on iOS. Cleaner than fragile XPath selectors.

I'm guessing I'll end up memorizing maybe 4 of these once I actually start.

## A tiny example

From what I gathered reading the Appium docs, here's the simplest thing I plan to try first — Python client opening Android Settings and tapping the Battery entry:

```python
from appium import webdriver

caps = {
    "platformName": "Android",
    "deviceName": "emulator-5554",
    "appPackage": "com.android.settings",
    "appActivity": ".Settings",
    "noReset": True
}
driver = webdriver.Remote("http://localhost:4723/wd/hub", caps)

battery = driver.find_element_by_accessibility_id("Battery")
battery.click()

driver.quit()
```

I think this starts a session on the emulator, opens Settings, taps Battery, then closes. Not sure if `noReset` is needed here but the docs example had it.

## What I'll cover next

Next I want to actually install Appium and the dependencies (Node.js, Java, Android SDK probably) and see if I can get this little Python example to work for real. I'm expecting setup to take longer than writing the test since I need an emulator running. After that I'll try automating a simple login flow in a real app.

# Appium — quick primer

> First-day notes for someone who's never used Appium. Personal voice, plain language.

## What is it?

Appium is a tool for automating mobile apps — both iOS and Android — from a single test script. If you've used Selenium for web browser automation, Appium feels familiar: same WebDriver protocol, same idea of finding elements and tapping or typing on them. The big difference is that instead of driving a browser, Appium drives a real (or simulated) phone.

I'd describe it as a thin HTTP server that sits between my test code and the phone. My test sends a JSON command over HTTP (like "find the button with id 'submit' and tap it"), and Appium translates that into whatever the platform needs — XCUITest commands for iOS, UiAutomator2 commands for Android.

## What does it do?

It lets me write tests against mobile apps using the same WebDriver API regardless of platform. I can start a session on an Android emulator, an iOS simulator, or a real device without changing my test logic — just by swapping a few capability flags. Appium handles the platform translation under the hood.

## Why does it exist?

Before Appium, mobile automation meant picking a platform-specific framework early. If I started with Espresso for Android, I'd have to rewrite everything from scratch if the team wanted iOS coverage later. Appium solves that by giving me one API for both platforms. It also lets teams reuse Selenium skills and tooling (like the WebDriver protocol, existing CI pipelines, and reporting tools) in the mobile space.

## Key terminology

- **WebDriver** — the W3C standard protocol for automating browsers; Appium extends it for mobile apps. Example: `driver.findElement(By.id("login"))` works the same on web and mobile.
- **Desired Capabilities** — a JSON dictionary that tells Appium what kind of session to start. Example: `{platformName: 'Android', deviceName: 'emulator-5554', app: '/path/to/app.apk'}`.
- **Session** — a single connection between my test script and the mobile device, created when Appium server responds to a "New Session" request. Example: I start one session per test or per device, and I `quit()` it when done.
- **Appium Server** — the Node.js HTTP server that listens on port 4723 and relays commands to the platform driver. Example: I run `appium` in the terminal, then point my test at `http://localhost:4723/wd/hub`.
- **XCUITest** — Apple's native UI testing framework that Appium uses under the hood to drive iOS apps. Example: Appium sends XCUITest commands to control Safari or a native iOS app.
- **UiAutomator2** — Google's UI testing framework that Appium uses under the hood to drive Android apps. Example: Appium translates a "tap" into an Android UiAutomator2 command.
- **Element** — a UI widget on the screen that my test can interact with. Example: a `Login` button, a `username` text field, a `Sign up` link.
- **Locator Strategy** — how I tell Appium which element I want. Example: `driver.findElement(By.id("com.example:id/btn_login"))` uses the `id` strategy.
- **Accessibility ID** — a locator strategy that reads the `content-desc` attribute on Android or `accessibilityIdentifier` on iOS. Example: `driver.findElement(By.accessibilityId("submitButton"))`.

## A tiny example

Here's the smallest example I can think of — using the Appium Python client to open the Android Settings app and tap the "Battery" entry:

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

This starts a session on emulator-5554, opens the Settings app, finds the Battery row by its accessibility ID, taps it, and closes the session.

## What I'll cover next

Now that I know what Appium is and have seen the basic shape of a test, I want to actually install it on my machine and get a real session running — probably on an Android emulator first since that's easier to set up. After that I'll write a slightly more useful test that does login or form-filling on a real app.

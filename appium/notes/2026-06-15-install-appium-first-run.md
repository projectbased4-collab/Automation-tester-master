# Appium — first install and run

I installed Appium today. Followed the docs at appium.io.

## Install

Used npm globally:

```bash
npm install -g appium
```

That gave me the `appium` CLI. Checked with `appium --version` — got 2.5.x.

Also needed the Appium Inspector (GUI) to see what's happening. Downloaded it from the releases page.

## Start the server

Just ran:

```bash
appium
```

It starts on `http://127.0.0.1:4723`. No flags needed for the basic case.

## First smoke test

Sent a GET to the status endpoint with curl:

```bash
curl http://127.0.0.1:4723/status
```

Got back JSON with `"ready": true`. The server is alive.

## What I still need

Next up: get a WebDriver session going with a real device or emulator. Need Android SDK or Xcode for that. Going to try with the Appium Inspector first to poke around.

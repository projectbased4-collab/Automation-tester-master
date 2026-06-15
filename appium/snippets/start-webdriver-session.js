const wd = require('wd');

const driver = wd.promiseChainRemote({
  host: '127.0.0.1',
  port: 4723,
});

const caps = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554',
  'appium:appPackage': 'com.android.calculator2',
  'appium:appActivity': '.Calculator',
};

driver
  .init(caps)
  .then(() => driver.title())
  .then((title) => console.log('Session started:', title))
  .then(() => driver.quit())
  .catch((err) => {
    console.error('Error:', err);
    return driver.quit();
  });

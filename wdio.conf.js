const { join } = require('path');

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "Pixel 2 API 28 2",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/teste.apk'),
        "appWaitActivity": 'com.wdiodemoapp.MainActivity'
    }],
}
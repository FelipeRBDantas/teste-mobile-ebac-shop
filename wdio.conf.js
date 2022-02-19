const { join } = require('path');
const allure = require('allure-commandline');
const video = require('wdio-video-reporter');

exports.config = {
    // hostname: 'localhost',
    // port: 4723,
    // path: '/wd/hub',
    user: 'feliperodriguesb_UQWaL7',
    key: 'MuuTyqjcBnpgnrxzXxDX',
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "project": "Meu projeto de teste em Device Farm",
        "build": "1",
        "name": "teste_form",
        "device": "Samsung Galaxy S8",
        "os_version": "7.0",
        "app": 'bs://5441662b6d13c495debc66425d0b900073e5ecab',
        // "platformVersion": "9.0",
        // "deviceName": "Pixel 2 API 28 2",
        // "automationName": "UiAutomator2",
        // "app": join(process.cwd(), './app/android/teste.apk'),
        // "appWaitActivity": 'com.wdiodemoapp.MainActivity'
    }],
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
            }
        ],
        [
            video,
            {
                saveAllVideos: true,
                videoSlowdownMultiplier: 50,
            }
        ],
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        driver.takeScreenshot();
    }
}
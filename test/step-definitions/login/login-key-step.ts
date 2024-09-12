import { Given, When, Then } from '@cucumber/cucumber';
import loginKeyPage from '../../page-objects/login/login-key-page'

const { FlutterDriver } = require('appium-flutter-driver');

const find = {
    driver: new FlutterDriver(),  // Create an instance of FlutterDriver
    locator: {
        // Define locators based on Flutter keys or accessibility IDs
        buttonLogin: 'loginButtonKey', // Example Flutter key for login button
        textFieldUsername: 'usernameFieldKey' // Example Flutter key for username field
    }
};


Given('I am on the onboarding page key', async () => {
})

When('I click masuk sekarang key', async () => {
    loginKeyPage.masukSekarang.isDisplayed()
    loginKeyPage.masukSekarang.click()
})

When('I input username {string} key', async (s: string) => {
    await driver.execute('flutter:clickElement', { key: loginKeyPage.username })
    await driver.execute('flutter:setTextEntryEmulation', { key: loginKeyPage.username, text: s })
})

When('I input password {string} key', async (s: string) => {
    await driver.execute('flutter:clickElement', { key:loginKeyPage.password})
    await driver.execute('flutter:setTextEntryEmulation', { key: loginKeyPage.password, text: s})
})

When('I click login key', async () => {
    loginKeyPage.login.click()
})

When('I input phone number {string} key', async (s: string) => {
    await loginKeyPage.phoneNumber.click()
    await loginKeyPage.phoneNumber.setValue(s)
})

When('I click lanjut key', async () => {
    loginKeyPage.lanjut.click()
})

Then('I am on the dashboard key', async() => {
    await browser.pause(5000)
})
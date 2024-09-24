import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../../pages/login/login-page';

Given('I am on the onboarding page', async () => {
})

When('I click homepage akun', async () => {
    loginPage.masukSekarang.isDisplayed()
    loginPage.masukSekarang.click()
})

When('I input phone number {string}', async (s: string) => {
    await loginPage.phoneNumber.click()
    await loginPage.phoneNumber.setValue(s)
})

When('I click masuk', async () => {
    loginPage.masuk.click()
})

When('I input kode pin {string}', async (s: string) => {
    await loginPage.kodePin.click()
    await loginPage.kodePin.setValue(s)
})

When('I click close banner 1', async () => {
    loginPage.banner1.click()
})

When('I click close banner 2', async () => {
    loginPage.banner2.click()
})

When('I click close banner alamat', async () => {
    loginPage.banner3.click()
})

Then('I am on the dashboard', async() => {
    await browser.pause(5000)
})

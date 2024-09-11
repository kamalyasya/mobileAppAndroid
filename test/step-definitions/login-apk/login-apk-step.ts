import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../../pageobjects/login-apk/login.page'; 

Given('I open the login app', async () => {
})

Given('Login page opened', async ()=> {
})

When('I click no account yet create one', async() => {
  await loginPage.notAccountYet.click()
})

When('I input name {string}', async (s: string) => {
  await loginPage.name.setValue(s)
})

When('I input email {string}', async (s: string) => {
  await loginPage.email.setValue(s)
})

When('I input password {string}', async (s: string) => {
  await loginPage.password.setValue(s)
})

When('I input confirm password {string}', async (s: string) => {
  await loginPage.confirmPassword.setValue(s)
})

When('I click register', async () => {
  await loginPage.register.click()
})

Then('Show alert registration successful', async () => {
  await loginPage.email.isDisplayed()
  await browser.pause(5000)
})

Then('Success to register', async () => {
})

When('I input email login {string}', async (s: string) => {
  await loginPage.emailLogin.setValue(s)
})

When('I input password login {string}', async (s: string) => {
  await loginPage.passwordLogin.setValue(s)
})

When('I click login', async () => {
  await loginPage.login.click()
})

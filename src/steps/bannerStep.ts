import { Given, When, Then } from '@cucumber/cucumber';
import bannerPage from '../pages/bannerPage';

Given('I am on the dashboard', async () => {
})

When('I click scroll banner homepage', async () => {
    bannerPage.scrollBanner.isDisplayed()
    bannerPage.scrollBanner.click()
})

When('I click main banner homepage', async () => {
    bannerPage.mainBanner.isDisplayed()
    bannerPage.mainBanner.click()
})

Then('I am on the banner homepage', async() => {
    await browser.pause(5000)
})
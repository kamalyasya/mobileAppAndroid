import { Before, After } from '@cucumber/cucumber';

Before(async function () {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/auth/login');
    await browser.maximizeWindow();
});

After(async function () {
    // await browser.closeWindow();
});
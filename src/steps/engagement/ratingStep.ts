import { When, Then } from '@cucumber/cucumber';
import ratingPage from '../../pages/engagement/ratingPage';


When('I click button flutter "penilaianSuperApp"', async () => {
    ratingPage.penilaianSuper.isDisplayed()
    ratingPage.penilaianSuper.click()
})

When('I click button flutter "Ya, tentu Saja"', async () => {
    ratingPage.btnYes.isDisplayed()
    ratingPage.btnYes.click()
})

When('I click button flutter "giveAssesment"', async () => {
    ratingPage.btnNilai.isDisplayed()
    ratingPage.btnNilai.click()
})

When('I click button flutter "giveAssesment"', async () => {
    ratingPage.btnGooglePlay.isDisplayed()
    ratingPage.btnGooglePlay.click()
})

When('I click button flutter "Tidak"', async () => {
    ratingPage.btnTidak.isDisplayed()
    ratingPage.btnTidak.click()
})

When('I click button text "Produk"', async () => {
    ratingPage.btnProduk.isDisplayed()
    ratingPage.btnProduk.click()
})

When('I click button flutter "btnKirim"', async () => {
    ratingPage.btnKirim.isDisplayed()
    ratingPage.btnKirim.click()
})

When('I click button Tutup', async () => {
    ratingPage.btnTutup.isDisplayed()
    ratingPage.btnTutup.click()
})

When('I click button flutter "Ingatkan Nanti"', async () => {
    ratingPage.btnReminder.isDisplayed()
    ratingPage.btnReminder.click()
})

Then('I check text this exist in field "Akun"', async() => {
    await browser.pause(3000)
})
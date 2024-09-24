import { Given, When, Then,} from '@cucumber/cucumber';
import m0AndM1Page from '../pages/m0AndM1Page';

Given('I am on the dashboard', async() => {
    await browser.pause(5000)
})

When('I click page Account', async () => {
    m0AndM1Page.Account.isDisplayed()
    m0AndM1Page.Account.click()
})

Then('I should verify statusPrioritas', async() => {
    await expect(m0AndM1Page.statusPrioritas).toBeExisting();  // Cek keberadaan elemen
    const title = await m0AndM1Page.statusPrioritas.getText();  // Ambil teks dari elemen
    await browser.pause(3000)
    console.log(title);
});

When('I click detailProgramJawara', async () => {
    m0AndM1Page.detailProgramJawara.isDisplayed()
    m0AndM1Page.detailProgramJawara.click()
})

Then('I should verify programJawara', async() => {
    await browser.pause(3000)
})

When('I click backProgramJawara', async () => {
    m0AndM1Page.backProgram.isDisplayed()
    m0AndM1Page.backProgram.click()
})

When('I click transaksiMenu', async () => {
    m0AndM1Page.transaksiMenu.isDisplayed()
    m0AndM1Page.transaksiMenu.click()
})

When('I click "Mulai Belanja" in "Transaksi"', async () => {
    m0AndM1Page.mulaiBelanja.isDisplayed()
    m0AndM1Page.mulaiBelanja.click()
})

When('I click "Section Sembako" in "Menu Sembako"', async () => {
    m0AndM1Page.sectionSembako.isDisplayed()
    m0AndM1Page.sectionSembako.click()
})

When('I click "Item Sembako01" in "List Produk Sembako"', async () => {
    m0AndM1Page.itemSembako01.isDisplayed()
    m0AndM1Page.itemSembako01.click()
})

When('I click +Keranjang button', async () => {
    m0AndM1Page.keranjang.isDisplayed()
    m0AndM1Page.keranjang.click()
})

When('I input jumlah item in keranjang {string}', async (s: string) => {
    await m0AndM1Page.jumlahItem.click()
    await m0AndM1Page.jumlahItem.setValue(s)
})

When('I click close choose item', async () => {
    m0AndM1Page.closeKeranjang.isDisplayed()
    m0AndM1Page.closeKeranjang.click()
})
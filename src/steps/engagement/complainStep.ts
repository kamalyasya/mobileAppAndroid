import { When, Then } from '@cucumber/cucumber';
import complainPage from '../../pages/engagement/complainPage';


When('I click button native "accountNav"', async () => {
    complainPage.accountNav.isDisplayed()
    complainPage.accountNav.click()
})

When('I click button flutter "FAQ dan Pusat Bantuan"', async () => {
    complainPage.faq.isDisplayed()
    complainPage.faq.click()
})

Then('I check text this exist in field "Pusat Bantuan"', async() => {
    await expect(complainPage.pusatBantuan).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.pusatBantuan.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I click button flutter "Pengaduan Konsumen"', async () => {
    complainPage.btnPengaduan.isDisplayed()
    complainPage.btnPengaduan.click()
})

Then('I check text this exist in field "Pengaduan Konsumen"', async() => {
    await expect(complainPage.pengaduanKonsumen).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.pengaduanKonsumen.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I click button flutter "copyPhoneComplain"', async () => {
    complainPage.copyPhoneComplain.isDisplayed()
    complainPage.copyPhoneComplain.click()
})

Then('I should verify "Berhasil disalin"', async() => {
    await expect(complainPage.copyNumber).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.copyNumber.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I click button flutter "iconWhatsappComplain"', async () => {
    complainPage.iconWhatsappComplain.isDisplayed()
    complainPage.iconWhatsappComplain.click()
})

Then('I should verify "Open Web View whatsapp"', async() => {
    await browser.pause(5000)
})

When('I click button flutter "Hubungi Kami"', async () => {
    complainPage.btnHubKami.isDisplayed()
    complainPage.btnHubKami.click()
})

Then('I check text this exist in field "Hubungi Kami"', async() => {
    await expect(complainPage.hubungiKami).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.hubungiKami.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I click button flutter "copyPhoneHubKami"', async () => {
    complainPage.copyPhoneHubKami.isDisplayed()
    complainPage.copyPhoneHubKami.click()
})

When('I click button flutter "iconWhatsappHubKami"', async () => {
    complainPage.iconWhatsappHubKami.isDisplayed()
    complainPage.iconWhatsappHubKami.click()
})

Then('I should verify "Open Web View whatsapp"', async() => {
    await browser.pause(5000)
})

When('I click button flutter "iconEmailHubKami"', async () => {
    complainPage.iconEmailHubKami.isDisplayed()
    complainPage.iconEmailHubKami.click()
})

Then('I should verify "Open Web View Email"', async() => {
    await browser.pause(5000)
})

When('I click close "Hubungi Kami"', async () => {
    complainPage.close.isDisplayed()
    complainPage.close.click()
})

When('I click button flutter "Pertanyaan Seputar Super"', async () => {
    complainPage.questions.isDisplayed()
    complainPage.questions.click()
})

Then('I check text this exist in field "Pertanyaan Seputar Super"', async() => {
    await expect(complainPage.titleQuestions).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.titleQuestions.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I input text produk {string} in search bar', async (s: string) => {
    await complainPage.searchQuestions.click()
    await complainPage.searchQuestions.setValue(s)
})

When('I click top questions', async () => {
    complainPage.topQuestions.isDisplayed()
    complainPage.topQuestions.click()
})

Then('I should verify answer', async() => {
    await expect(complainPage.answerQuestions01).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.answerQuestions01.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I click section menu bar "Cek selengkapnya informasi seputar Program Jawara"', async (s: string) => {
    await complainPage.infoProgJawara.click()
    await complainPage.infoProgJawara.setValue(s)
})

Then('I check text this exist in field "Hal yang sering Ditanyakan"', async() => {
    await expect(complainPage.titleQnAJawara).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.titleQnAJawara.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I input questions {string} in search bar', async (s: string) => {
    await complainPage.questionsJawara.click()
    await complainPage.questionsJawara.setValue(s)
})

When('I click top questions Jawara', async () => {
    complainPage.topQuestionsJawara.isDisplayed()
    complainPage.topQuestionsJawara.click()
})

Then('I should verify answer Jawara', async() => {
    await expect(complainPage.answerQuestions02).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.answerQuestions02.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});

When('I click "Hubungi CS Super jika kamu nmengalami kendala"', async () => {
    complainPage.hubCsSuper.isDisplayed()
    complainPage.hubCsSuper.click()
})


When('I click button flutter "Syarat Dan Ketentuan"', async () => {
    complainPage.btnTnC.isDisplayed()
    complainPage.btnTnC.click()
})

Then('I am on the Syarat Dan Ketentuan page', async() => {
    await expect(complainPage.pageTnC).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.pageTnC.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});


When('I click button flutter "Kebijakan Privasi"', async () => {
    complainPage.btnKebijakan.isDisplayed()
    complainPage.btnKebijakan.click()
})

Then('I am on the Kebijakan Privasi page', async() => {
    await expect(complainPage.pageKebijakanPrivasi).toBeExisting();  // Cek keberadaan elemen
    const title = await complainPage.pageKebijakanPrivasi.getText();  // Ambil teks dari elemen
    await browser.pause(3000);
    console.log(title);
});
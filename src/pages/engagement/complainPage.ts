import { $ } from '@wdio/globals'

export default new class complainPage {

    get accountNav() {
        return $('Akun\nTab 4 of 4')
    }

    get faq() {
        return $('FAQ dan Pusat Bantuan\nSemua Informasi tentang SuperApp.')
    }

    public get pusatBantuan() {
        return $('Pusat Bantuan');
    }

    get btnPengaduan() {
        return $('Pengaduan Konsumen\nLayanan pengaduan konsumen melalui Kemendag')
    }

    public get pengaduanKonsumen() {
        return $('Pengaduan Konsumen');
    }

    get copyPhoneComplain() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.ImageView[1]')
    }

    public get copyNumber() {
        return $('Berhasil disalin');
    }

    get iconWhatsappComplain() {
        return $('Chat Whatsapp')
    }

    get btnHubKami() {
        return $('Hubungi Kami\nInformasi dan kontak untuk menghubungi pelayanan pengguna SuperApp.')
    }

    public get hubungiKami() {
        return $('Hubungi Kami');
    }

    get copyPhoneHubKami() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.ImageView[2]')
    }

    get iconWhatsappHubKami() {
        return $('Chat Melalui Whatsapp')
    }

    get iconEmailHubKami() {
        return $('Hubungi via Email')
    }

    get close() {
        return $('Close')
    }

    get questions() {
        return $('Pertanyaan Seputar Super\nLihat semua pertanyaan yang sering diajukan')
    }

    public get titleQuestions() {
        return $('Pertanyaan Seputar Super');
    }

    get searchQuestions() {
        return $('//android.widget.ScrollView/android.widget.ImageView[2]')
    }

    get topQuestions() {
        return $('Berapa lama Super Poin & Super Koin akan diterima oleh user?')
    }

    public get answerQuestions01() {
        return $('2x24 jam setelah user mendapatkan pesanannya, untuk transaksi produk grosir.');
    }

    get infoProgJawara() {
        return $('Cek selengkapnya informasi seputar Program Jawara')
    }

    public get titleQnAJawara() {
        return $('Hal yang Sering Ditanyakan');
    }

    get questionsJawara() {
        return $('//android.widget.ScrollView/android.widget.ImageView[2]')
    }

    get topQuestionsJawara() {
        return $('Apa itu hayoo?')
    }

    public get answerQuestions02() {
        return $('Apa itu hayoo?\nSuperApp memudahkan untuk memenuhi kebutuhan sembako,kebutuhan pribadi, toko maupun pelanggan kamu cukup dari rumah. dengan harga yang ramah kantong dan bersaing. test');
    }

    get hubCsSuper() {
        return $('Hubungi CS Super jika kamu\nmengalami kendala')
    }


    get btnTnC() {
        return $('Syarat dan Ketentuan\nLihat syarat & ketentuan di SuperApp')
    }

    public get pageTnC() {
        return $('policy');
    }


    get btnKebijakan() {
        return $('Kebijakan Privasi\nLihat kebijakan privasi di SuperApp')
    }

    public get pageKebijakanPrivasi() {
        return $('//android.view.View[@resource-id="policy"]/android.widget.TextView[1]');
    }

}
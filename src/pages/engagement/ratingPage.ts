import { $ } from '@wdio/globals'

export default new class complainPage {

    get penilaianSuper() {
        return $('Penilaian SuperApp\nBerikan tanggapanmu tentang SuperApp.')
    }

    get btnYes() {
        return $('Ya, tentu Saja')
    }

    get btnNilai() {
        return $('Beri Penilaian')
    }

    get btnGooglePlay() {
        return $('(//android.widget.ImageView[@resource-id="oplus:id/resolver_item_icon"])[2]')
    }

    get btnTidak() {
        return $('Tidak')
    }

    get btnProduk() {
        return $('Produk')
    }

    get btnKirim() {
        return $('Kirim')
    }

    get btnTutup() {
        return $('Tutup')
    }

    get btnReminder() {
        return $('Ingatkan Nanti')
    }

}
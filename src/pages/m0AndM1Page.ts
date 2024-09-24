import { $ } from '@wdio/globals'

export default new class m0AndM1Page {

    get Account() {
        return $('Akun\nTab 4 of 4')
    }

   public get statusPrioritas() {
    return $('//android.view.View[@content-desc="Program Jawara Mulai belanja dan dapatkan cashback 0.5% setiap hari."]/android.widget.ImageView[2]');
    }

    get detailProgramJawara() {
        return $('Detail')
    }

    get backProgram() {
        return $('android.widget.Button')
    }

    get transaksiMenu() {
        return $('Transaksi\nTab 2 of 4')
    }

    get mulaiBelanja() {
        return $('Mulai Belanja')
    }

    get sectionSembako() {
        return $('Sembako')
    }

    get itemSembako01() {
        return $('44S Hijau Beras 5kg\nSak\nRp80.400 \n- Rp82.700')
    }

    get keranjang() {
        return $('+ Keranjang')
    }

    get jumlahItem() {
        return $('android.widget.EditText')
    }

    get closeKeranjang() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
    }

}
import { $ } from '@wdio/globals'

export default new class loginPage {

    get masukSekarang() {
         return $('Akun')
    }

    get phoneNumber() {
        return $('android.widget.EditText')
    }

    get masuk() {
        return $('//android.widget.Button[@content-desc="Masuk"]')
    }

    get kodePin() {
        return $('android.widget.EditText')
    }

    get banner1() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View')
    }

    get banner2() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View')
    }

    get banner3() {
        return $('Close')
    }

}

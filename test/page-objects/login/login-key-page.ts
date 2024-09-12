import { $ } from '@wdio/globals'
import { byValueKey } from 'appium-flutter-finder';

class loginKeyPage {

    get masukSekarang() {
         return $('~Masuk Sekarang')
    }

    get username() {
        return byValueKey('usernameTextfield')
    }

    get password() {
        return byValueKey('//android.widget.EditText[2]')
    }

    get login() {
        return $('~Login')
    }

    get phoneNumber() {
        return $('//android.widget.EditText')
    }

    get lanjut() {
        return $('~Lanjut')
    }

}

export default new loginKeyPage()

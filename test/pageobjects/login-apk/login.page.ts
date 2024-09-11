import { $ } from '@wdio/globals'

class loginPage {

    get notAccountYet() {
        return $('#textViewLinkRegister')
    }

    get name() {
        return $('#textInputEditTextName')
    }

    get email() {
        return $('#textInputEditTextEmail')
    }

    get password() {
        return $('#textInputEditTextPassword')
    }

    get confirmPassword() {
        return $('#textInputEditTextConfirmPassword')
    }

    get register() {
        return $('#appCompatButtonRegister')
    }

    get emailLogin() {
        return $('#textInputEditTextEmail')
    }

    get passwordLogin() {
        return $('#textInputEditTextPassword')
    }

    get login() {
        return $('#appCompatButtonLogin')
    }

}

export default new loginPage()
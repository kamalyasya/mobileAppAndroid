import { $ } from '@wdio/globals'

export default new class bannerPage {

    get scrollBanner() {
         return $('//android.widget.ScrollView/android.view.View[6]')  //android.widget.ScrollView/android.view.View[6]
    }

    get mainBanner() {
        return $('//android.widget.ScrollView/android.view.View[7]') //android.widget.ScrollView/android.view.View[7]/android.view.View
   }
}
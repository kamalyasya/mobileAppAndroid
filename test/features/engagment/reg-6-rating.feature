@engagement-rating
@regression-engagement
Feature: Engagement - Rating

        @A
        Scenario: Login Success
            Given I am on the onboarding page
             When I click homepage akun
              And I input phone number ""
              And I click masuk
              And I input kode pin ""
              And I click close banner 1
              And I click close banner 2
              And I click close banner 3
             Then I am on the dashboard
             
        Examples:
                  | a | b |
                  | a | b |

        @rating-01
        Scenario: Memastikan modal "Apakah kamu menyukai Aplikasi Super?" dengan klik button yes
              And I click button native "accountNav"
              And I click button flutter "penilaianSuperApp"
              And I click button flutter "Ya, tentu Saja"
              And I click button flutter "giveAssesment"
              And I click button googlePlayStore
              
        Examples:
                  | a | b |
                  | a | b |

        @rating-02
        Scenario: Memastikan modal "Apakah kamu menyukai Aplikasi Super?" dengan klik button no
              And I click button native "accountNav"
              And I click button flutter "penilaianSuperApp"
              And I click button flutter "Tidak"
              And I click button text "Produk"
              And I click button flutter "btnKirim"
              And I click button Tutup

        Examples:
                  | a | b |
                  | a | b |

        @rating-03
        Scenario: Memastikan button Ingatkan Saya Nanti pada modal "Terimakasih! saatnya beri penilaian di google play store"
              And I click button native "accountNav"
              And I click button flutter "penilaianSuperApp"
              And I click button flutter "Ya, tentu Saja"
              And I click button flutter "Ingatkan Nanti"
             Then I check text this exist in field "Akun"

        Examples:
                  | a | b |
                  | a | b |

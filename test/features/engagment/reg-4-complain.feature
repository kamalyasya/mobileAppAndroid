@engagmment-complain
@regression-engagement
Feature: Engagement - Complain

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

        @complain-01
        Scenario: Memastikan menu pengaduan konsumen
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Pengaduan Konsumen"
             Then I check text this exist in field "Pengaduan Konsumen"

        Examples:
                  | a | b |
                  | a | b |

        @complain-02
        Scenario: Memastikan bisa copy paste no telfon pada layanan pengaduan konsumen
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Pengaduan Konsumen"
              And I click button flutter "copyPhoneComplain"
             Then I should verify "Berhasil disalin"

        Examples:
                  | a | b |
                  | a | b |

        @complain-03
        Scenario: Memastikan button chat whatsapp direct ke whatsapp aplikasi super pada pengaduan konsumen
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Pengaduan Konsumen"
              And I click button flutter "iconWhatsappComplain"
             Then I should verify "Open Web View whatsapp"

        Examples:
                  | a | b |
                  | a | b |

        @hubungikami-01
        Scenario: Memastikan Menu Hubungi Kami
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Hubungi Kami"
             Then I check text this exist in field "Hubungi Kami"

        Examples:
                  | a | b |
                  | a | b |

        @hubungikami-02
        Scenario: Memastikan Menu Hubungi Kami
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Hubungi Kami"
             Then I check text this exist in field "Hubungi Kami"
              And I click button flutter "copyPhoneHubKami"
             Then I should verify "Berhasil disalin"

        Examples:
                  | a | b |
                  | a | b |

        @hubungikami-03
        Scenario: Memastikan Menu Hubungi Kami
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Hubungi Kami"
             Then I check text this exist in field "Hubungi Kami"
              And I click button flutter "iconWhatsappHubKami"
             Then I should verify "Open Web View whatsapp"

        Examples:
                  | a | b |
                  | a | b |

        @hubungikami-04
        Scenario: Memastikan Menu Hubungi Kami
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Hubungi Kami"
             Then I check text this exist in field "Hubungi Kami"
              And I click button flutter "iconEmailHubKami"
             Then I should verify "Open Web View Email"
             When I click close "Hubungi Kami"

        Examples:
                  | a | b |
                  | a | b |

        @frequentlyAskedQuestions-01
        Scenario:Memastikan Menu FAQ
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Pertanyaan Seputar Super"
             Then I check text this exist in field "Pertanyaan Seputar Super"
              And I input text produk "poin" in search bar
              And I click top questions
             Then I should verify answer

        Examples:
                  | a | b |
                  | a | b |

        @frequentlyAskedQuestions-02
        Scenario:Memastikan Menu FAQ
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Pertanyaan Seputar Super"
             Then I check text this exist in field "Pertanyaan Seputar Super"
              And I click section menu bar "Cek selengkapnya informasi seputar Program Jawara"
             Then I check text this exist in field "Hal yang sering Ditanyakan"
              And I input questions "apa itu" in search bar
              And I click top questions Jawara
             Then I should verify answer Jawara

        Examples:
                  | a | b |
                  | a | b |

        @frequentlyAskedQuestions-03
        Scenario:Memastikan Menu FAQ
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Pertanyaan Seputar Super"
             Then I check text this exist in field "Pertanyaan Seputar Super"
              And I click section menu bar "Cek selengkapnya informasi seputar Program Jawara"
             Then I check text this exist in field "Hal yang sering Ditanyakan"
              And I click "Hubungi CS Super jika kamu nmengalami kendala"
             When I click close "Hubungi Kami"

        Examples:
                  | a | b |
                  | a | b |

        @syaratDanKetentuan-01
        Scenario:Memastikan Menu Syarat Dan Ketentuan
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Syarat Dan Ketentuan"
             Then I am on the Syarat Dan Ketentuan page

        Examples:
                  | a | b |
                  | a | b |

        @kebijakanPrivasi-01
        Scenario:Memastikan Menu Syarat Dan Ketentuan
              And I click button native "accountNav"
            #   And I swipe up on page
              And I click button flutter "FAQ dan Pusat Bantuan"
             Then I check text this exist in field "Pusat Bantuan"
              And I click button flutter "Kebijakan Privasi"
             Then I am on the Kebijakan Privasi page

        Examples:
                  | a | b |
                  | a | b |
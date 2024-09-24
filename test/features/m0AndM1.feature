@Login
Feature: Login

        Scenario: Login
            Given I am on the onboarding page
             When I click homepage akun
            #   And I input username ""
            #   And I input password ""
            #   And I click login
              And I input phone number ""
              And I click masuk
              And I input kode pin ""
              And I click close banner 1
            #   And I click close banner 2
              And I click close banner alamat
             Then I am on the dashboard

            Given I am on the dashboard
             When I click page Account
             Then I should verify statusPrioritas
              And I click detailProgramJawara
             Then I should verify programJawara
              And I click backProgramJawara
              And I click transaksiMenu
              And I click "Mulai Belanja" in "Transaksi"
              And I click "Section Sembako" in "Menu Sembako"
              And I click "Item Sembako01" in "List Produk Sembako"
              And I click +Keranjang button
              And I input jumlah item in keranjang "4"
              And I click close choose item
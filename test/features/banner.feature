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
              And I click scroll banner homepage
              And I click main banner homepage
             Then I am on the banner homepage
@Login
Feature: Login

        Scenario: Login
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
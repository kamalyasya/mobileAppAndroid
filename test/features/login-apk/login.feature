Feature: Calculator

Scenario: Register
  Given I open the login app
  Given Login page opened
    When I click no account yet create one
    And I input name "Andi"
    And I input email "andi@fakemail.com"
    And I input password "password"
    And I input confirm password "password"
    And I click register
    Then Success to register
    Then Show alert registration successful


  # Scenario: Login
  # Given I open the login app
  # Given Login page opened
  #   When I input email login "Andi"
  #   And I input password login "andi@fakemail.com"
  #   And I click login
  #   Then Success to register
  #   Then Show alert registration successful
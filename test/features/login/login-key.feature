@LoginKey
Feature: Login Key

Scenario: Login Key
  Given I am on the onboarding page key
    When I click masuk sekarang key
    And I input username "sangardong12" key
    And I input password "123456" key
    And I click login key
    And I input phone number "081200000000" key
    And I click lanjut key
    Then I am on the dashboard key
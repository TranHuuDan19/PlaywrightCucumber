Feature: As a user I expect to be able to create contact

  @dev
  @smoke
  @regression
  Scenario: As a user I expect to be able to create a new contact
    Given I am on the "home" page
    And I click the "create" button
    Then I am directed to the "create contact" page
    And The "create contact header" should contain the text "Create Contact"
    And  I fill in the "name" input with "Tran Huu Dan"
    And I select the "Male" option form the "gender"
    And  I fill in the "phone" input with "11111111"
    And  I fill in the "street" input with "Le Loi"
    And  I fill in the "city" input with "Ho Chi Minh"
    And I click the "save" button

    And I am directed to the "home" page
    And  I fill in the "search" input with "Tran Huu Dan"
    And The "full name label" should contain the text "Name:"
    And The "name" should contain the text "Tran Huu Dan"
    And The "gender label" should contain the text "Gender:"
    And The "gender" should contain the text "Male"
    And The "address label" should contain the text "Address:"
    And The "address" should contain the text "Le Loi"
    And The "edit" should be displayed
    And The "delete" should be displayed





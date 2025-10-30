Feature: Login on sauce demo


    Scenario: Successfully Login
    Given the user open Sauce Demo
    When the user enters username "standard_user" and password "secret_sauce"
    And the users click the login button
    Then the user routing to product dashboard

    Scenario: Failed Login
    Given the user open Sauce Demo
    When the user enters username "standard_user" and password ""
    And the users click the login button
    Then the user gets an error message password is required

    Scenario: To Inventory No Credential
    Given the user open Sauce Demo
    When the user enters username "standard_user" and password "secret_sauce"
    And the users click the login button
    And the user click logout
    And the user to inventory screen
    Then the user gets an error message can access when you are logged in




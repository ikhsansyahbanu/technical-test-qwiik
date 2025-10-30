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
    Then the user gets an error message "Epic sadface: Password is required"

    Scenario: Locked User
    Given the user open Sauce Demo
    When the user enters username "locked_out_user" and password "secret_sauce"
    And the users click the login button
    Then the user gets an error message "Epic sadface: Sorry, this user has been locked out."
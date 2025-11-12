Feature: Shopping on Sauce Demo


    Scenario: Sort by Name (Z-A)
    Given the user open Sauce Demo
    When the user enters username "standard_user" and password "secret_sauce"
    And the users click the login button
    And the user click sort button
    And the user sort by "Name (Z-A)"
    Then product sort by "Name (Z-A)"

    Scenario: Sort by Price (low to high)
    Given the user open Sauce Demo
    When the user enters username "standard_user" and password "secret_sauce"
    And the users click the login button
    And the user click sort button
    And the user sort by "Price (low to high)"
    Then product sort by "Price (low to high)"

    Scenario: Checkout
    Given the user open Sauce Demo
    When the user enters username "standard_user" and password "secret_sauce"
    And the users click the login button
    And the user click product : "Sauce Labs Backpack"
    And the user click add to cart button
    And the user click cart
    And the user click checkout button
    And the user input order first name "Ikhsan", last name "Nur Syahbanu", postal code "10110"
    And the user click finish
    Then the user success checkout product
    And the user click logout




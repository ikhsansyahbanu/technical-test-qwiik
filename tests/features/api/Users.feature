Feature: Users on Gorest


    Scenario: Create User
    Given the user have a valid GoRest access token
    When the user create a new user. User input name : "My Names", gender : "Male", email:"test@test.com"
    Then the user should be created successfully

    Scenario: Get User
    Given the user have a valid GoRest access token
    When the user get the user details
    Then the user details should match the created user

    Scenario: Update User
    Given the user have a valid GoRest access token
    When the user update the user names : "Ikhsan"
    Then the user details should be updated successfully
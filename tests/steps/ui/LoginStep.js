const { Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');

Given('the user open Sauce Demo', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.open();
  });

When('the user enters username {string} and password {string}', async function (username, password) {
    await this.loginPage.fillUsername(username)
    await this.loginPage.fillPassword(password)
});

When('the users click the login button', async function () {
    await this.loginPage.clickLogin()
})

Then('the user gets an error message password is required', async function () {
    await this.loginPage.verifyErrorMessage('Epic sadface: Password is required')
})

Then('the user gets an error message can access when you are logged in', async function () {
    await this.loginPage.verifyErrorMessage("Epic sadface: You can only access '/inventory.html' when you are logged in.")
})
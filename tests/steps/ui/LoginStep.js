const { Given, When, Then} = require('@cucumber/cucumber');

Given('the user open Sauce Demo', async function () {
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

Then('the user gets an error message {string}', async function (message) {
    await this.loginPage.verifyErrorMessage(message)
})
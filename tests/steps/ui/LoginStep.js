const { Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');

Given('the user open Sauce Demo', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.open();
  });

When('the user enters username {string} and password {string}', async (username, password) => {
    await this.loginPage.fillUsername(username)
    await this.loginPage.fillPassword(password)
});

When('the users click the login button', async () => {
    await this.loginPage.clickLogin()
})

Then('the user gets an error message', async () => {
    await this.loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.')
})
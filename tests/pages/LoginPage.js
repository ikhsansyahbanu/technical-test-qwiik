const { assert } = require('chai');

class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameField = page.locator('//*[@id="user-name"]');
    this.passwordField = page.locator('//*[@id="password"]');
    this.loginButton = page.locator('//*[@id="login-button"]');
    this.errorMessage = page.locator('//*[@id="login_button_container"]/div/form/div[3]');
  }

  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username) {
    await this.usernameField.fill(username);
  }

  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async verifyErrorMessage(message) {
    const actualText = (await this.errorMessage.textContent()).trim();
    assert.equal(actualText, message, `Expected error to be "${message}", but got "${actualText}"`);
  }
}

module.exports = LoginPage;

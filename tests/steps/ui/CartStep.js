const { Given, When, Then} = require('@cucumber/cucumber');

When('the user click checkout button', async function () {
    await this.cartPage.clickCheckout()
  });

When('the user input order first name {string}, last name {string}, postal code {string}', async function (firstName,lastName,postalCode){
    await this.cartPage.inputOrder(firstName,lastName,postalCode)
    await this.cartPage.clickContinue()
})

When('the user click finish', async function () {
    await this.cartPage.clickFinish()
})

Then('the user success checkout product', async function(){
    await this.cartPage.verifySuccessOrder()
})
const { Given, When, Then } = require('@cucumber/cucumber');
const ProductPage = require('../../pages/ProductPage');

Then('the user routing to product dashboard', async function () {
    this.ProductPage = new ProductPage(this.page);
    await this.ProductPage.verifyHeader("Swag Labs")
 })

When('the user click logout', async function(){
    await this.ProductPage.clickBurgerMenu()
    await this.ProductPage.clickLogout()
})

When('the user to inventory screen', async function () {
    await this.ProductPage.openInventory()
})
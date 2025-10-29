const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const ProductPage = require('../../pages/ProductPage');
let productPage

Then('the user routing to product dashboard', async () => {
    productPage = new ProductPage(this.page)
    await this.ProductPage.verifyHeader("Swag Labs")
 })
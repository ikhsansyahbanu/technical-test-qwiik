const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const ProductPage = require('../pages/ProductPage');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage')

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.productPage = new ProductPage(this.page);
  this.cartPage = new CartPage(this.page)

});

After(async function () {
  await this.browser.close();
});

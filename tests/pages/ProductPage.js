const { assert } = require('chai');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.priceItems = page.locator('//div[@class="inventory_item_price"]');
    this.sortButton = page.locator('//*[@id="header_container"]/div[2]/div/span/select');
    this.cart = page.locator('//*[@id="shopping_cart_container"]/a');
    this.header = page.locator('//div[@class="app_logo" and text()="Swag Labs"]');
  }

  productByName(productName) {
    return this.page.locator(`//div[@class="inventory_item_name" and text()="${productName}"]`);
  }

  async clickProduct(productName) {
    const product = this.productByName(productName);
    await product.click();
  }

  async clickAddToCart(productName) {
    const addToCartButton = this.page.locator(
      `//div[@class="inventory_item_name" and text()="${productName}"]/ancestor::div[@class="inventory_item"]//button[contains(@id, "add-to-cart")]`
    );
    await addToCartButton.click();
  }

  async openCart() {
    await this.cart.click();
  }

  async sortBy(optionLabel) {
    await this.sortButton.selectOption({ label: optionLabel });
  }

  async verifyHeader(expectedText) {
    const actualText = (await this.header.textContent()).trim();
    assert.equal(actualText, expectedText, `Expected header to be "${expectedText}", but got "${actualText}"`);
  }
}

module.exports = ProductPage;

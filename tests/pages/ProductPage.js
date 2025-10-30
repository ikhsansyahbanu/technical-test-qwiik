const { assert } = require('chai');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.priceItems = page.locator('//div[@class="inventory_item_price"]');
    this.sortButton = page.locator('//select[@class="product_sort_container"]');
    this.cart = page.locator('//*[@id="shopping_cart_container"]/a');
    this.header = page.locator('//div[@class="app_logo" and text()="Swag Labs"]');
    this.burgerMenu = page.locator('//*[@id="react-burger-menu-btn"]')
    this.logoutButton = page.locator('//*[@id="logout_sidebar_link"]')
    this.addToCartButton = page.locator('//*[@id="add-to-cart"]')
  }

   productByName(productName) {
    return this.page.locator(`//*[@id="item_4_title_link" and contains(., "${productName}")]`);
  }

  async clickProduct(productName) {
    const product = this.productByName(productName);
    await product.click();
  }

  async clickAddToCart() {
    await this.addToCartButton.click()
  }

  async clickCart() {
    await this.cart.click();
  }

  async sortBy(optionLabel) {

    if (optionLabel == 'Name (A-Z)'){

      await this.sortButton.selectOption('az');

    } if (optionLabel == 'Name (Z-A)'){

      await this.sortButton.selectOption('za');

    }if (optionLabel == 'Price (low to high)'){

      await this.sortButton.selectOption('lohi');

    } else {

      await this.sortButton.selectOption('hilo');

    }

  }

  async verifyHeader(expectedText) {

    const actualText = (await this.header.textContent()).trim();
    assert.equal(actualText, expectedText, `Expected header to be "${expectedText}", but got "${actualText}"`);
  
  }

  async clickBurgerMenu(){

    await this.burgerMenu.click()

  }

  async clickLogout() {

    await this.logoutButton.waitFor({ state: 'visible', timeout: 5000 });

  }

  async openInventory() {

    await this.page.goto('https://www.saucedemo.com/inventory.html');

  }

  async clickSortBy() {

    await this.sortButton.click()

  }

  async verifyProductsSortedByName(value) {

  const productNames =  await this.page.$$eval('//div[@class="inventory_item_name"]', els =>
    els.map(el => el.textContent.trim()));

    const sorted = value == "Name (Z-A)" ? [...productNames].sort().reverse() : [...productNames].sort();

    assert.deepEqual(productNames, sorted, 'Products are sorted by ${value.toLowerCase()}');

}

  async verifyProductsSortedByPrice(value) {

  const priceTexts = await this.page.locator('//div[@class="inventory_item_price"]').allTextContents();
  const priceItems = priceTexts.map(p => parseFloat(p.replace('$', '')));

  const sorted =
    value === 'Price (high to low)'
      ? [...priceItems].sort((a, b) => b - a)
      : [...priceItems].sort((a, b) => a - b);

  assert.deepEqual( priceItems, sorted, 'Prices are not sorted by ${value.toLowerCase()}'
);
}

}

module.exports = ProductPage;

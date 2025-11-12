const { assert } = require('chai');

class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('//*[@id="checkout"]');
    this.firstNameField = page.locator('//*[@id="first-name"]')
    this.lastNameField = page.locator('//*[@id="last-name"]')
    this.postalcodeField = page.locator('//*[@id="postal-code"]')
    this.continueButton = page.locator('//*[@id="continue"]')
    this.finishButton = page.locator('//*[@id="finish"]')
    this.txtSuccess = page.locator('//*[@id="checkout_complete_container"]/h2')
    this.backHomeButton = page.locator('//*[@id="back-to-products"]')
  }
  
  productByName(productName) {
    return this.page.locator(`//*[@id="item_4_title_link" and contains(., "${productName}")]`);
  }

  async clickCheckout(){
    await this.checkoutButton.click()
  }

  async inputOrder(firstName, lastName, postalCode){
    await this.firstNameField.fill(firstName)
    await this.lastNameField.fill(lastName)
    await this.postalcodeField.fill(postalCode)
  }

  async clickContinue(){
    await this.continueButton.click()
  }

  async verifyProductNameOrder(productName){
    const actualText = (await this.productByName.textContext()).trim()
    assert.equal(actualText, productName, `Expected error to be "${productName}", but got "${actualText}"`);
  }
  
  async clickFinish(){
    await this.finishButton.click()
  }

  async verifySuccessOrder(){
    const visibleText = await this.txtSuccess.isVisible();
    assert.isTrue(visibleText,"Success Order")
  }


}

module.exports = CartPage;

const { Given, When, Then } = require('@cucumber/cucumber');

Then('the user routing to product dashboard', async function () {
    await this.productPage.verifyHeader("Swag Labs")
 })

When('the user click logout', async function () {
    await this.productPage.clickBurgerMenu()
    await this.productPage.clickLogout()
})

When('the user to inventory screen', async function () {
    await this.productPage.openInventory()
})

When('the user click sort button', async function () {
    await this.productPage.clickSortBy()
})

When('the user sort by {string}', async function(sortBy){
    await this.productPage.sortBy(sortBy)
})

Then('product sort by {string}', async function(sortBy){

    if(sortBy == 'Name (A-Z)' || sortBy == 'Name (Z-A)'){
        
        await this.productPage.verifyProductsSortedByName(sortBy)

    } else {
        
        await this.productPage.verifyProductsSortedByPrice(sortBy)
    }
})

When('the user click product : {string}', async function(productName) {
    await this.productPage.clickProduct(productName)
})

When('the user click add to cart button', async function() {
    await this.productPage.clickAddToCart()
})

When('the user click cart', async function(){
    await this.productPage.clickCart()
})
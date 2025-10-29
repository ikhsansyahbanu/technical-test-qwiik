const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async () => {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async () => {
  await this.browser.close();
});

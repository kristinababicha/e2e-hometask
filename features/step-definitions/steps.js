const { Given, When, Then } = require("@wdio/cucumber-framework");
homePage = "https://www.newegg.com/";
const timerForElementToAppear = 5000;

Given("User open the home page", async () => {
  await browser.url(homePage);
});

Given("User refresh the page if promo banner appears", async () => {
  try {
    const welcomeScreenTitle = "div[class='modal-content']";
    await $(welcomeScreenTitle).waitForDisplayed({ timerForElementToAppear });
    await browser.refresh();
  } catch {
    console.log("Banner is not displayed");
  }
});

When("User entry the word {word} in the search bar", async (string) => {
  const fieldForFearch = "input[type='search']";
  await $(fieldForFearch).setValue(`${string}`);
});

When("User clicks the search button", async () => {
  const searchButton = "button[class*='ico-search']";
  await $(searchButton).click();
});

Then("User checks that at least one item appears", async () => {
  const searchItems = "div > div[class='item-cell";
  await $(searchItems).waitForExist(timerForElementToAppear);
});

When('User open "Todays Best Deals" tab', async () => {
  const bestDealTab = "#trendingBanner_720202";
  await $(bestDealTab).click();
  await expect(browser).toHaveUrl(
    `${homePage}` +
      "todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals&icid=720202"
  );
});

Then("User clicks on the Internet shop logo", async () => {
  const homePageLogo = "div > a[class='header2021-logo-img']";
  await $(homePageLogo).click();
  await expect(browser).toHaveUrl(homePage);
});

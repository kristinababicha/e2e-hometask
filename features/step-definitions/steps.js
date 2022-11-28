const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("Open the home page", async () =>{
    await browser.url(`https://www.newegg.com`);
});

Given("Close the promo banner if it appears", async () => {
        try {
            const welcomeScreenTitle = $("div[class='modal-content']");
            await welcomeScreenTitle.waitForDisplayed({ timeout: 5000 });
            await browser.refresh();

            
          } catch(err) {
            console.log("Banner is not displayed");
          }
});

When('Entry the word {word} in the search bar', async (string) => {
await $("input[type='search']").setValue(`${string}`);
});

When('Click the search', async () => {
    const searchButton = await $("button[class*='ico-search']");
    await $(searchButton).click();
});
Then('Check that at least one item appears', async () => {
    const numberOfSearchItems = $("div > div[class='item-cell");
    expect.toBeExisting(numberOfSearchItems);
    
});

When('Open "Todays Best Deals" tab', async () => {
    const bestDealTab = await $('#trendingBanner_720202');
    await $(bestDealTab).click();
    await expect(browser).toHaveUrl('https://www.newegg.com/todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals&icid=720202');


});

Then('Click on the Internet shop logo', async () => {
    const homePageLogo = await $("div > a[class='header2021-logo-img']");
    await $(homePageLogo).click();
    await expect(browser).toHaveUrl('https://www.newegg.com/');

});










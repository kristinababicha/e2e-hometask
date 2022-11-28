Feature: Bootcamp E2E

Background: 
Given Open the home page
* Close the promo banner if it appears

Scenario: Search bar

When Entry the word Windows in the search bar
* Click the search
Then Check that at least one item appears


Scenario: Internet shop logo button

When Open "Todays Best Deals" tab
Then Click on the Internet shop logo
Feature: Bootcamp E2E

    Background:
        Given User open the home page
        * User refresh the page if promo banner appears

    Scenario: Search bar 
        When User entry the word Windows in the search bar
        * User clicks the search button
        Then User checks that at least one item appears


    Scenario: Internet shop logo button
        When User open "Todays Best Deals" tab
        Then User clicks on the Internet shop logo
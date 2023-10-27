Feature: Search for data

    As a guest or a valid user
    I want to use the Search feature

    Background:
        Given I am on the homepage

    Scenario: Search for available queries
        When I type "bank" on the Search bar
        And I click Enter on my keyboard
        Then I should see some available pages on the Search Results

    Scenario: Search for unavailable queries
        When I type "banks" on the Search bar
        And I click Enter on my keyboard
        Then I should not see any available page on the Search Results

Feature: Search for data

    As a guest or a valid user
    I want to use the Search feature

    Scenario: Search for available queries
        Given I am on the homepage
        When I type any available queries(e.g.: 'a', 'bank') on the Search bar
        And I click Enter on my keyboard
        Then I should see some available pages on the Search Results

    Scenario: Search for unavailable queries
        Given I am on the homepage
        When I type any unavailable queries(e.g.: 'x', 'banks') on the Search bar
        And I click Enter on my keyboard
        Then I should not see any available page on the Search Results

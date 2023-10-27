import SearchPage from './tugas.page';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the homepage', () => {
    SearchPage.visit()
    cy.url().should('include', 'index.html')
    cy.get('strong').should('contain.text', 'Home')
})

When('I type {string} on the Search bar', (query) => {
    SearchPage.fillSearchBar(query)
});

When('I click Enter on my keyboard', () => {
    SearchPage.fillSearchBar('{enter}')
    cy.url().should('include', 'search.html')
})

//Search for available queries
Then('I should see some available pages on the Search Results', () => {
    cy.get('h2').should('contain.text', 'Search Results')
    cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
})

//Search for unavailable queries
Then('I should not see any available page on the Search Results', () => {
    cy.get('h2').should('contain.text', 'Search Results')
    cy.get('div').should('contain.text', 'No results were found for the query: banks')
})
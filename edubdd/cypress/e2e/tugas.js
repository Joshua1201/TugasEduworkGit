const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
})

When('I type any available queries on the Search bar', () => {
    cy.get('#searchTerm').type('bank')
})

When('I click Enter on my keyboard', () => {
    cy.get('#searchTerm').type('{enter}')
    cy.url().should('include', 'search.html')
})

Then('I should see some available pages on the Search Results', () => {
    cy.get('h2').should('contain.text', 'Search Results')
    cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
})

When('I type any unavailable queries on the Search bar', () => {
    cy.get('#searchTerm').type('banks')
})

Then('I should not see any available page on the Search Results', () => {
    cy.get('h2').should('contain.text', 'Search Results')
    cy.contains('No results were found for the query: banks')
})
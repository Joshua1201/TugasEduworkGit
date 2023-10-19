/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicking "type" shows the right heading', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include', 'https://example.cypress.io/commands/actions')

        cy.get('.action-email').type('joshua20@gmail.com').should('have.value', 'joshua20@gmail.com')
    });
});
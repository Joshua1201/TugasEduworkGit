/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('strong').should('contain.text', 'Home')
        cy.get('strong').should('contain.text', 'Feedback')
        cy.get('a').should('contain.text', 'More Services')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('span').should('contain.text', 'Pay Bills')
        cy.get('span').should('contain.text', 'My Money Map')
        cy.get('span').should('contain.text', 'Online Statements')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('span').should('contain.text', 'Frequently Asked Questions')
        cy.get('input[id="name"]').should('be.visible')
        cy.get('input[value="Send Message"]').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('span[id="account_activity_link"]').should('contain.text', 'Checking Account Activity')
        cy.get('.carousel-control.custom.right').should('be.visible')
        cy.get('img[src="/resources/img/main_carousel_1.jpg"]').should('be.visible')
    });
})
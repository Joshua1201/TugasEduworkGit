/// <reference types="cypress" />

describe('Karir Features Testing', () => {
    before(() => {
        cy.visitHome()
        cy.accCookies()
        cy.klikKarir()
    });

    it('Akses Search Karir', () => {
        cy.searchKarir()
    });
    
    it('Akses Sort Karir', () => {
        cy.sortKarir()
    });
})
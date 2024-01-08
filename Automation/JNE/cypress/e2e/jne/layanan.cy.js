/// <reference types="cypress" />

describe('Layanan Features Testing', () => {
    beforeEach(() => {
        cy.visitHome()
        cy.accCookies()
        cy.klikLayanan()
    });

    it('Akses MyJNE', () => {
        cy.klikMyJNE()
    });

    it('Akses Pesona', () => {
        cy.klikPesona()
    });

    it('Akses JLC Loyalty Card', () => {
        cy.klikJLCCard()
    });
})
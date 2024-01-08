/// <reference types="cypress" />

describe('Solusi Bisnis Features Testing', () => {
    beforeEach(() => {
        cy.visitHome()
        cy.accCookies()
        cy.klikSolusiBisnis()
    });

    it('Akses Keagenan', () => {
        cy.klikKeagenan()
    });

    it('Akses Customer Corporate', () => {
        cy.klikCustomerCorporate()
    });
})
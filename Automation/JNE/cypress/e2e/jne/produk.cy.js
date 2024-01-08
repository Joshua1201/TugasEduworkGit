/// <reference types="cypress" />

describe('Produk Features Testing', () => {
    beforeEach(() => {
        cy.visitHome()
        cy.accCookies()
        cy.klikProduk()
    });

    it('Akses JNE Logistics', () => {
        cy.klikJNELogistics()
    });

    it('Akses JNE Express', () => {
        cy.klikJNEExpress()
    });

    it('Akses JNE Freight', () => {
        cy.klikJNEFreight()
    });

    it('Akses JNE International', () => {
        cy.klikJNEInternational()
    });

    it('Akses Roket Indonesia', () => {
        cy.klikRoketIndonesia()
    });
})
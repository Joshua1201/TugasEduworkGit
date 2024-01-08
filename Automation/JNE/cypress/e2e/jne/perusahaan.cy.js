/// <reference types="cypress" />

describe('Perusahaan Features Testing', () => {
    beforeEach(() => {
        cy.visitHome()
        cy.accCookies()
        cy.klikPerusahaan()
    });

    it('Akses Profil Perusahaan', () => {
        cy.klikProfilPerusahaan()
        cy.klikSejarah()
        cy.klikDirektur1()
        cy.klikDirektur2()
    });

    it('Akses Penghargaan', () => {
        cy.klikPenghargaan()
    });

    it('Akses CSR', () => {
        cy.klikContactUs()
    });
})
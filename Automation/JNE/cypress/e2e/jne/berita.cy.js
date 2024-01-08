/// <reference types="cypress" />

describe('Berita Features Testing', () => {
    before(() => {
        cy.visitHome()
        cy.accCookies()
        cy.klikBerita()
    });

    it('Akses Detail Berita', () => {
        cy.klikBeritaDetail()
    });

    it('Akses Berita Selengkapnya', () => {
        cy.klikBeritaAll()
    });
})
/// <reference types="cypress" />

describe('Hubungi Kami Features Testing', () => {
    before(() => {
        cy.visitHome()
        cy.accCookies()
        cy.klikHubKami()
    });

    it('Akses Kirim Pertanyaan', () => {
        cy.klikKirimPertanyaanDataKosong()
        cy.klikKirimPertanyaanDataDiisi()
    });

    it('Akses Cabang dan Lokasi', () => {
        cy.klikLokasi()
    });
})
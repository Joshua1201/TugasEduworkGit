/// <reference types="cypress" />

describe('Dashboard Features Testing', () => {
    before(() => {
        cy.visitHome()
        cy.accCookies()
    });

    it('Klik Jelajahi', () => {
        cy.klikJelajahi()
    });

    it('Cek Resi yang Tersedia', () => {
        cy.fixture("user").then(user => {
            const resi_exist_1 = user.resi_exist_1
            const resi_exist_2 = user.resi_exist_2
            cy.resiExist(resi_exist_1, resi_exist_2)
        })
        cy.url().should('include', 'tracking-package')
        cy.get('td').should('contain.text', 'PACIRAN,LAMONGAN')
        cy.get('td').should('contain.text', 'Nurkhoiri')
        cy.get('td').should('contain.text', 'TANJUNG PRIOK,JAKARTA UTARA')
        cy.get('td').should('contain.text', 'FENNY')
    });

    it('Cek Resi yang Tidak Tersedia', () => {
        cy.klikHome()
        cy.fixture("user").then(user => {
            const resi_not_exist_1 = user.resi_not_exist_1
            const resi_not_exist_2 = user.resi_not_exist_2
            cy.resiNotExist(resi_not_exist_1, resi_not_exist_2)
        })
        cy.url().should('include', 'tracking-package')
        cy.get('td').should('contain.text', 'asasa')
        cy.get('td').should('contain.text', '355003')
        cy.get('td').should('contain.text', 'Data tidak ditemukan')
    });

    it('Cek Tarif dengan Memasukkan Data-Data yang Salah', () => {
        cy.klikHome()
        cy.cekTarifFalse()
    });

    it('Cek Tarif dengan Memasukkan Data-Data yang Benar', () => {
        cy.klikHome()
        cy.cekTarifTrue()
    });
    
    it.skip('Chat dengan AI Bot', () => {
        cy.chatBot()
    });

    it('Lihat Penghargaan', () => {
        cy.klikHome()
        cy.cekPenghargaan()
    });

    it('Lihat Promo', () => {
        cy.klikHome()
        cy.cekPromo()
    });

    it('Gunakan Fitur Search', () => {
        cy.klikHome()
        cy.useUnavSearch()
        cy.useAvSearch()
    });

    it('Ganti Bahasa', () => {
        cy.klikHome()
        cy.changeLanguage()
    });
})
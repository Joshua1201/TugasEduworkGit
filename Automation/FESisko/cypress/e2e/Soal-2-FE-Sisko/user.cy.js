/// <reference types="cypress" />

describe('User Feature', () => {
    before(() => {
        cy.visitHomeSisko()
        cy.klikLoginPageSisko()
    });

    it('Login ke Aplikasi', () => {
        cy.fixture("user").then(user => {
            const email_user = user.email_user
            const password_user = user.password_user
            cy.loginSisko(email_user, password_user)
        })
    });

    it('Cek Menu Pembayaran', () => {
        cy.cekMenuPembayaran()
        cy.billingSisko()
    });

    it('Cek Dashboard', () => {
        cy.cekDashboard()
    });

    it('Profile Menu', () => {
        cy.profileSisko()
    });

    it('Billing Menu', () => {
        cy.billingSisko()
    });

    it('Komisi Menu', () => {
        cy.komisiSisko()
    });

    it('Tambah Toko Menu', () => {
        cy.tambahTokoSisko()
    });

    it('Logout', () => {
        cy.logoutSisko()
    });
})
/// <reference types="cypress" />

describe('Features Testing', () => {
    before(() => {
        cy.visitHome()
        cy.klikProducts()
    });

    it('Gunakan Fitur Search', () => {
        cy.useSearch()
    });

    it('Masukkan Item ke Cart', () => {
        cy.klikProducts()
        cy.addItemsToCart()
    });

    it('Masukkan Item ke Cart dari Detail Produk', () => {
        cy.klikProducts()
        cy.viewItem1()
        cy.addItemsFromDetails1()
        cy.klikProducts()
        cy.viewItem2()
        cy.addItemsFromDetails2()
    });

    it('Cek Cart', () => {
        cy.klikCart()
    });

    it('Hapus Item Pada Cart', () => {
        cy.removeItemFromCart()
    });

    it('Checkout Item Tanpa Login', () => {
        cy.klikCheckoutTanpaLogin()
    });

    it('Checkout Item Dengan Login', () => {
        cy.klikLoginPage()
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_benar = user.password_benar
            cy.login(email_benar, password_benar)
        })
        cy.get('a[href="/logout"]').should('be.visible')
        cy.get('a[href="/delete_account"]').should('be.visible')
        cy.klikCart()
        cy.klikCheckoutDenganLogin()
    });

    it('Lakukan Transaksi Hingga Berhasil', () => {
        cy.klikPayment()
        cy.confirmPayment()
        cy.klikConfirmOrder()
    });

    it('Hapus Akun', () => {
        cy.deleteAccount()
    });
})
/// <reference types="cypress" />

describe('Login Feature', () => {
    before(() => {
        cy.visitHome()
        cy.klikLoginPage()
    });

    it('Field Email dan Password Kosong', () => {
        cy.emailPassKosong()
    });

    it('Login dengan Email dan Password yang Tidak Terdaftar', () => {
        cy.fixture("user").then(user => {
            const username_salah = user.username_salah
            const password_salah = user.password_salah
            cy.login(username_salah, password_salah)
        })
        cy.get('h3').should('contain.text', 'Troubles entering the site?')
        cy.get('div').should('contain.text', 'Login and/or password are wrong.')
    });

    it('Login dengan Email dan Password yang Terdaftar', () => {
        cy.fixture("user").then(user => {
            const username_zerobank = user.username_zerobank
            const password_zerobank = user.password_zerobank
            cy.login(username_zerobank, password_zerobank)
        })
        cy.url().should('include', 'account-summary.html')
        cy.get('.icon-cog').should('be.visible')
        cy.get('.icon-user').should('be.visible')
    });
})
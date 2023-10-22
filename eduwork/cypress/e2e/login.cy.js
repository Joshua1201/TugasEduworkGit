/// <reference types="cypress" />

describe('Login/Logout Test', () => {
    before(() => {
        cy.visitHome()
    });

    it('Should try to login with invalid data', () => {
        cy.fixture("user").then(user => {
            const username_salah = user.username_salah
            const password_salah = user.password_salah

            cy.login(username_salah, password_salah)
        });
        cy.get('h3').should('contain.text', 'Troubles entering the site?')
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username_zerobank = user.username_zerobank
            const password_zerobank = user.password_zerobank

            cy.login(username_zerobank, password_zerobank)
        })
        cy.get('a').should('contain.text', 'Account Summary')
        cy.get('a').should('contain.text', 'Transfer Funds')
    });

    it('Should logout from the application', () => {
        cy.logout()
    });
})
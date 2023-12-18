/// <reference types="cypress" />

describe('Forgot Password Feature', () => {
    before(() => {
        cy.visitHomeSisko()
        cy.klikLoginPageSisko()
        cy.klikForgotPassSisko()
    });

    it.skip('Field Email Kosong', () => {
        cy.forgotPassSiskoKosong()
    });

    it('Field Email Diisi dengan Format yang Salah', () => {
        cy.fixture("user").then(user => {
            const email_salah_format = user.email_salah_format
            cy.forgotPassSisko(email_salah_format)
        })
        cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please include an '@' in the email address. 'josh' is missing an '@'.")
    });

    it('Field Email Diisi dengan Format yang Benar Tetapi User Tidak Ditemukan', () => {
        cy.fixture("user").then(user => {
            const email_not_exist = user.email_not_exist
            cy.forgotPassSisko(email_not_exist)
        })
        cy.get('strong').should('contain.text', "We can't find a user with that e-mail address. !")
    });

    it('Field Email Diisi dengan Format yang Benar dan User Ditemukan', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            cy.forgotPassSisko(email_benar)
        })
        cy.get('strong').should('contain.text', "Password reminder sent! !")
    });

    it('Go To Login Page', () => {
        cy.klikLoginSisko()
    });
})
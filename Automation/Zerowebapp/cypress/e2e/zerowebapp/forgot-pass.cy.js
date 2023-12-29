/// <reference types="cypress" />

describe('Forgot Password Feature', () => {
    beforeEach(() => {
        cy.visitHome()
        cy.klikLoginPage()
        cy.klikForgotPass()
    });

    it('Field Email Kosong', () => {
        cy.fieldEmailKosong()
    });

    it('Field Email Diisi', () => {
        cy.fieldEmailDiisi()
    });

})
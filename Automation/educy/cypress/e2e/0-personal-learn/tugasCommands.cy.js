/// <reference types="cypress" />

describe('Tugas Custom Commands', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    });

    it('Klik Sign in', () => {
        cy.get('#signin_button').click()
    });

    it('Isi data untuk login', () => {
        cy.fixture("user").then(user => {
            const username_zerobank = user.username_zerobank
            const password_zerobank = user.password_zerobank

            cy.login(username_zerobank, password_zerobank)
        })
    });


    it('Pay Bills', () => {
            cy.get('a').contains('Pay Bills').click()
            cy.pay_bill()
        });
    });
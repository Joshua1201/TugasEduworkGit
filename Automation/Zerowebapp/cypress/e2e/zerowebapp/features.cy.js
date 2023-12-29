/// <reference types="cypress" />

describe('Features/Menus Testing', () => {
    before(() => {
        cy.visitHome()
        cy.klikLoginPage()
        cy.fixture("user").then(user => {
            const username_zerobank = user.username_zerobank
            const password_zerobank = user.password_zerobank
            cy.login(username_zerobank, password_zerobank)
        })
        cy.url().should('include', 'account-summary.html')
        cy.get('.icon-cog').should('be.visible')
        cy.get('.icon-user').should('be.visible')
    });

    it('Search for Unavailable Query', () => {
        cy.unavSearch()
    });

    it('Search for Available Query', () => {
        cy.avSearch()
    });

    it('Account Summary Overview', () => {
        cy.klikHome()
        cy.klikCheckActivity()
        cy.accountSummary()
    });

    it('Account Activity Overview', () => {
        cy.accountActivityShowTrnsc()
        cy.accountActivityFindTrnscNoResult()
        cy.accountActivityFindTrnsc()
    });

    it('Transfer Funds Overview', () => {
        cy.payBills()
        cy.addNewPayee()
        cy.purchaseForeign()
    });

    it('My Money Map Overview', () => {
        cy.myMoneyMap()
    });

    it('Online Statements Overview', () => {
        cy.onlineStatements()
    });

    it('Logout', () => {
        cy.logout()
    });

    it('Help Overview', () => {
        cy.help()
    });
})
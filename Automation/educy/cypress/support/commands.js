// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username_zerobank, password_zerobank) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username_zerobank)

    cy.get('#user_password').clear()
    cy.get('#user_password').type(password_zerobank)

    cy.get('#user_remember_me').click()
    
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('pay_bill', () => {

    cy.get('#sp_payee').select('Bank of America').should('have.value', 'bofa')
    cy.get('#sp_account').select('Brokerage').should('have.value', '6')

    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type(1000)

    cy.get('#sp_date').click()
    cy.get('.ui-state-default').contains('6').click()

    cy.get('#sp_description').type('Bulan ini lunas')

    cy.get('#pay_saved_payees').click()
    cy.url().should('include', 'http://zero.webappsecurity.com/bank/pay-bills-saved-payee.html')
    cy.get('#alert_content').should('have.text', 'The payment was successfully submitted.')
})
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

Cypress.Commands.add('visitHome', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
    cy.get('strong').should('contain.text', 'Home')
    cy.get('strong').should('contain.text', 'Feedback')
    cy.get('#signin_button').click()
})

Cypress.Commands.add('login', (username_salah, password_salah) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type(username_salah)
    cy.get('#user_password').type(password_salah)
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('login', (username_zerobank, password_zerobank) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username_zerobank)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password_zerobank)
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.contains('username').click()
    cy.get('#logout_link').click()
    cy.get('strong').should('contain.text', 'Home')
    cy.get('#signin_button').should('contain.text', 'Signin')
})
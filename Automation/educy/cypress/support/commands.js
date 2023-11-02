// Cypress.Commands.add('login', (username_zerobank, password_zerobank) => {
//     cy.clearCookies()
//     cy.clearLocalStorage()
//     cy.get('#user_login').clear()
//     cy.get('#user_login').type(username_zerobank)

//     cy.get('#user_password').clear()
//     cy.get('#user_password').type(password_zerobank)

//     cy.get('#user_remember_me').click()

//     cy.get('input[name="submit"]').click()
// })

// Cypress.Commands.add('pay_bill', () => {

//     cy.get('#sp_payee').select('Bank of America').should('have.value', 'bofa')
//     cy.get('#sp_account').select('Brokerage').should('have.value', '6')

//     cy.get('#sp_amount').clear()
//     cy.get('#sp_amount').type(1000)

//     cy.get('#sp_date').click()
//     cy.get('.ui-state-default').contains('6').click()

//     cy.get('#sp_description').type('Bulan ini lunas')

//     cy.get('#pay_saved_payees').click()
//     cy.url().should('include', 'http://zero.webappsecurity.com/bank/pay-bills-saved-payee.html')
//     cy.get('#alert_content').should('have.text', 'The payment was successfully submitted.')
// })

Cypress.Commands.add('loginViaAPI', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/basic_auth`,
        headers: {
            authorization: 'Basic YWRtaW46YWRtaW4='
        }
    })
    cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.')
})
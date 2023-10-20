/// <reference types="cypress" />

describe('Working with tugas Fixtures', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com')
    });

    it('Login salah', () => {
        cy.fixture("user").then(user => {
            const username_salah = user.username_salah
            const password_salah = user.password_salah

            cy.get('#user-name.input_error.form_input').clear()
            cy.get('#user-name.input_error.form_input').type(username_salah)

            cy.get('#password.input_error.form_input').clear()
            cy.get('#password.input_error.form_input').type(password_salah)

            cy.get('.submit-button.btn_action').click()
            cy.get('h3').should('contains.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    });

    it('Login benar', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name.input_error.form_input').clear()
            cy.get('#user-name.input_error.form_input').type(username)

            cy.get('#password.input_error.form_input').clear()
            cy.get('#password.input_error.form_input').type(password)

            cy.get('.submit-button.btn_action').click()
        })
    });

    it('Transaksi berhasil', () => {
        cy.fixture("user").then(user => {
            const first_name = user.first_name
            const last_name = user.last_name
            const zip_code = user.zip_code

            cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click()

            cy.get('.shopping_cart_link').click()

            cy.get('button[name="checkout"]').click()

            cy.get('#first-name.input_error.form_input').clear()
            cy.get('#first-name.input_error.form_input').type(first_name)

            cy.get('#last-name.input_error.form_input').clear()
            cy.get('#last-name.input_error.form_input').type(last_name)

            cy.get('#postal-code.input_error.form_input').clear()
            cy.get('#postal-code.input_error.form_input').type(zip_code)

            cy.get('.submit-button.btn_action').click()
            cy.get('button[name="finish"]').click()
            cy.get('button[name="back-to-products"]').click()
        })
    });

    it('Logout', () => {
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get("a").contains('Reset App State').click()
        cy.get("a").contains('Logout').click()
    })
});
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

Cypress.Commands.add('visitHomeSauce', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.saucedemo.com')

    cy.url().should('include', 'saucedemo.com')
    cy.get('.login_logo').should('contain.text', 'Swag Labs')
    cy.get('#user-name').should('be.visible')
})

Cypress.Commands.add('loginSauce', (username_salah, password_salah) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_salah)

    cy.get('#password').clear()
    cy.get('#password').type(password_salah)

    cy.get('#login-button').click()

    cy.get('h3').should('contains.text', 'Epic sadface: Username and password do not match any user in this service')
})

Cypress.Commands.add('loginSauce', (username_sauce, password_sauce) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_sauce)

    cy.get('#password').clear()
    cy.get('#password').type(password_sauce)

    cy.get('#login-button').click()
})

Cypress.Commands.add('loginSauce', (username_locked, password_sauce) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_locked)

    cy.get('#password').clear()
    cy.get('#password').type(password_sauce)

    cy.get('#login-button').click()
    cy.get('h3').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
})

Cypress.Commands.add('loginSauce', (username_error, password_sauce) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_error)

    cy.get('#password').clear()
    cy.get('#password').type(password_sauce)

    cy.get('#login-button').click()
})

Cypress.Commands.add('loginSauce', (username_performance, password_sauce) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_performance)

    cy.get('#password').clear()
    cy.get('#password').type(password_sauce)

    cy.get('#login-button').click()
})

Cypress.Commands.add('loginSauce', (username_problem, password_sauce) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_problem)

    cy.get('#password').clear()
    cy.get('#password').type(password_sauce)

    cy.get('#login-button').click()
})

Cypress.Commands.add('userKosong', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#password').clear()

    cy.get('#password').type('joshua123')
    cy.get('#login-button').click()

    cy.get('h3').should('contains.text', 'Epic sadface: Username is required')
})

Cypress.Commands.add('passKosong', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#password').clear()

    cy.get('#user-name').type('joshua123')

    cy.get('#login-button').click()

    cy.get('h3').should('contains.text', 'Epic sadface: Password is required')
})

Cypress.Commands.add('logoutSauce', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('button[id="react-burger-menu-btn"]').click()
    cy.get('a').contains('Reset App State').click()
    cy.get('a').contains('Logout').click()

    cy.url().should('include', 'https://www.saucedemo.com/')
    cy.get('h4').should('contain.text', 'Accepted usernames are:')
})

Cypress.Commands.add('klikProduk', () => {
    cy.get('#item_4_title_link').click()
    cy.url().should('include', 'inventory-item.html?id=4')
})

Cypress.Commands.add('klikBackToProduk', () => {
    cy.get('#back-to-products').click()
    cy.url().should('include', 'inventory.html')
})

Cypress.Commands.add('addItemstoCart', () => {
    cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('button[name="remove-sauce-labs-backpack"]').should('be.visible')
    cy.get('button[name="remove-sauce-labs-bike-light"]').should('be.visible')
    cy.get('.shopping_cart_badge').should('contain.text', '2')
})

Cypress.Commands.add('removeProducts', () => {
    cy.get('button[name="remove-sauce-labs-backpack"]').click()
    cy.get('button[name="remove-sauce-labs-bike-light"]').click()

    cy.get('button[name="add-to-cart-sauce-labs-backpack"]').should('be.visible')
    cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').should('be.visible')
})

Cypress.Commands.add('klikIconCart', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', 'cart.html')
})

Cypress.Commands.add('removeCart', () => {
    cy.get('button[name="remove-sauce-labs-backpack"]').click()
    cy.get('button[name="remove-sauce-labs-bike-light"]').click()

    cy.get('.removed_cart_item').should('not.be.visible')
})

Cypress.Commands.add('klikContinueShopping', () => {
    cy.get('#continue-shopping').click()
    cy.url().should('include', 'inventory.html')
})

Cypress.Commands.add('klikCheckout', () => {
    cy.get('#checkout').click()
    cy.url().should('include', 'checkout-step-one.html')
    cy.get('span').should('contain.text', 'Checkout: Your Information')
})

Cypress.Commands.add('checkoutCancel', () => {
    cy.get('#cancel').click()
    cy.url().should('include', 'cart.html')
})

Cypress.Commands.add('firstNameKosong', (last_name, zip_code) => {
    cy.get('#first-name.input_error.form_input').clear()
    cy.get('#last-name.input_error.form_input').clear()
    cy.get('#last-name.input_error.form_input').type(last_name)

    cy.get('#postal-code.input_error.form_input').clear()
    cy.get('#postal-code.input_error.form_input').type(zip_code)

    cy.get('.submit-button.btn_action').click()
    cy.get('h3').should('contain.text', 'Error: First Name is required')
})

Cypress.Commands.add('lastNameKosong', (first_name, zip_code) => {
    cy.get('#last-name.input_error.form_input').clear()
    cy.get('#first-name.input_error.form_input').clear()
    cy.get('#first-name.input_error.form_input').type(first_name)

    cy.get('#postal-code.input_error.form_input').clear()
    cy.get('#postal-code.input_error.form_input').type(zip_code)

    cy.get('.submit-button.btn_action').click()
    cy.get('h3').should('contain.text', 'Error: Last Name is required')
})

Cypress.Commands.add('zipCodeKosong', (first_name, last_name) => {
    cy.get('#postal-code.input_error.form_input').clear()
    cy.get('#first-name.input_error.form_input').clear()
    cy.get('#first-name.input_error.form_input').type(first_name)

    cy.get('#last-name.input_error.form_input').clear()
    cy.get('#last-name.input_error.form_input').type(last_name)

    cy.get('.submit-button.btn_action').click()
    cy.get('h3').should('contain.text', 'Error: Postal Code is required')
})

Cypress.Commands.add('isiDataDiri', (first_name, last_name, zip_code) => {
    cy.get('#first-name.input_error.form_input').clear()
    cy.get('#first-name.input_error.form_input').type(first_name)

    cy.get('#last-name.input_error.form_input').clear()
    cy.get('#last-name.input_error.form_input').type(last_name)

    cy.get('#postal-code.input_error.form_input').clear()
    cy.get('#postal-code.input_error.form_input').type(zip_code)
})

Cypress.Commands.add('klikContinue', () => {
    cy.get('.submit-button.btn_action').click()
    cy.url().should('include', 'checkout-step-two.html')
    cy.get('.summary_info_label').should('contain.text', 'Price Total')
})

Cypress.Commands.add('klikCancel', () => {
    cy.get('#cancel').click()
    cy.url().should('include', 'inventory.html')
    cy.get('button[name="remove-sauce-labs-bike-light"]').should('be.visible')
})

Cypress.Commands.add('klikFinish', () => {
    cy.get('button[name="finish"]').click()
    cy.url().should('include', 'checkout-complete.html')
    cy.get('img[alt="Pony Express"]').should('be.visible')
})

Cypress.Commands.add('klikBack', () => {
    cy.get('button[name="back-to-products"]').click()
    cy.url().should('include', 'inventory.html')
    cy.get('.product_sort_container').should('be.visible')
})

Cypress.Commands.add('klikAllItems', () => {
    cy.get('button[id="react-burger-menu-btn"]').click()
    cy.get('#inventory_sidebar_link').click()
    cy.url().should('include', 'inventory.html')
    cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').should('be.visible')
})
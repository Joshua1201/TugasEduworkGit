Cypress.Commands.add('visitHome', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
})

Cypress.Commands.add('klikForgotPass', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('a[href="/forgot-password.html"]').click()
    cy.url().should('include', 'forgot-password.html')
    cy.get('h3').should('contain.text', 'Forgotten Password')
})

Cypress.Commands.add('klikLoginPage', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#signin_button').click()
    cy.url().should('include', 'login.html')
    cy.get('h3').should('contain.text', 'Log in to ZeroBank')
})

Cypress.Commands.add('fieldEmailKosong', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[value="Send Password"]').click()
    cy.url().should('include', 'forgotten-password-send.html')
    cy.get('div').should('contain.text', 'Your password will be sent to the following email:')
})

Cypress.Commands.add('fieldEmailDiisi', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_email').type('josh')
    cy.get('input[value="Send Password"]').click()
    cy.url().should('include', 'forgotten-password-send.html')
    cy.get('div').should('contain.text', 'Your password will be sent to the following email: josh')
})

Cypress.Commands.add('emailPassKosong', () => {
    cy.get('input[name="submit"]').click()
    cy.get('div').should('contain.text', 'Login and/or password are wrong.')
})

Cypress.Commands.add('login', (username_zerobank, password_zerobank) => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username_zerobank)

    cy.get('#user_password').clear()
    cy.get('#user_password').type(password_zerobank)

    cy.get('#user_remember_me').click()

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('login', (username_salah, password_salah) => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username_salah)

    cy.get('#user_password').clear()
    cy.get('#user_password').type(password_salah)

    cy.get('#user_remember_me').click()

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.icon-user').click()
    cy.get('#logout_link').click()
    cy.get('#signin_button').should('be.visible')
    cy.get('#searchTerm').should('be.visible')
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

Cypress.Commands.add('avSearch', () => {
    cy.get('#searchTerm').click()
    cy.get('#searchTerm').type('bank{enter}')
    cy.url().should('include', 'searchTerm=bank')
    cy.get('div').should('contain.text', 'The following pages were found for the query: bank')
})

Cypress.Commands.add('unavSearch', () => {
    cy.get('#searchTerm').click()
    cy.get('#searchTerm').type('banks{enter}')
    cy.url().should('include', 'searchTerm=banks')
    cy.get('div').should('contain.text', 'No results were found for the query: banks')
})

Cypress.Commands.add('klikHome', () => {
    cy.get('a[href="/index.html"]').eq(0).click()
    cy.url().should('include', 'index.html')
    cy.get('strong').should('contain.text', 'Home')
})

Cypress.Commands.add('klikCheckActivity', () => {
    cy.get('#account_activity_link').click()
    cy.url().should('include', 'account-activity.html')
    cy.get('a').should('contain.text', 'Account Summary')
})

Cypress.Commands.add('accountActivityShowTrnsc', () => {
    cy.get('#aa_accountId').select('Checking').should('have.value', '2')
    cy.get('td').should('contain.text', '186.7')

    cy.get('#aa_accountId').select(2).should('have.value', '3')
    cy.get('td').should('contain.text', '636.4')

    cy.get('#aa_accountId').select('6').should('have.value', '6')
    cy.get('div').should('contain.text', 'No results.')

    cy.get('#aa_accountId').select(0).should('have.value', '1')
    cy.get('td').should('contain.text', '984.3')
})

Cypress.Commands.add('accountActivityFindTrnsc', () => {
    cy.get('a[href="#ui-tabs-1"]').click()
    cy.get('a[href="#ui-tabs-2"]').click()
    cy.get('#aa_description').clear()
    cy.get('#aa_fromDate').type('2012-09-05')
    cy.get('.btn.btn-primary').click()
    cy.get('td').should('contain.text', 'OFFICE SUPPLY')
})

Cypress.Commands.add('accountActivityFindTrnscNoResult', () => {
    cy.get('a[href="#ui-tabs-2"]').click()
    cy.get('#aa_description').type('a')
    cy.get('.btn.btn-primary').click()
    cy.get('div').should('contain.text', 'No results.')
})

Cypress.Commands.add('accountSummary', () => {
    cy.get('a[href="/bank/redirect.html?url=account-summary.html"]').click()
    cy.get('a[href="/bank/account-activity.html?accountId=1"]').click()
    cy.get('td').should('contain.text', '984.3')
    cy.get('a[href="/bank/redirect.html?url=account-summary.html"]').click()
    
    cy.get('a[href="/bank/account-activity.html?accountId=3"]').click()
    cy.get('td').should('contain.text', '636.4')
    cy.get('a[href="/bank/redirect.html?url=account-summary.html"]').click()

    cy.get('a[href="/bank/account-activity.html?accountId=6"]').click()
    cy.get('div').should('contain.text', 'No results.')
    cy.get('a[href="/bank/redirect.html?url=account-summary.html"]').click()

    cy.get('a[href="/bank/account-activity.html?accountId=2"]').click()
    cy.get('td').should('contain.text', '186.7')
    cy.get('a[href="/bank/redirect.html?url=account-summary.html"]').click()

    cy.get('a[href="/bank/account-activity.html?accountId=5"]').click()
    cy.get('div').should('contain.text', 'No results.')
    cy.get('a[href="/bank/redirect.html?url=account-summary.html"]').click()

    cy.get('a[href="/bank/account-activity.html?accountId=4"]').click()
    cy.get('td').should('contain.text', '2000')
})

Cypress.Commands.add('transferFunds', () => {
    cy.get('a[href="/bank/redirect.html?url=transfer-funds.html"]').click()
    cy.url().should('include', 'transfer-funds.html')
    cy.get('h2').should('contain.text', 'Transfer Money & Make Payments')

    cy.get('#tf_fromAccountId').select(2).should('have.value', '3')
    cy.get('#tf_fromAccountId').select('5').should('have.value', '5')
    cy.get('#btn_submit').click()
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")

    cy.get('#tf_amount').type('1000')
    cy.get('#btn_submit').click()
    cy.url().should('include', 'transfer-funds-verify.html')

    cy.get('#btn_cancel').click()
    cy.url().should('include', 'transfer-funds.html')

    cy.get('#tf_fromAccountId').select(2).should('have.value', '3')
    cy.get('#tf_fromAccountId').select('5').should('have.value', '5')
    cy.get('#tf_amount').type('1000')
    cy.get('#tf_description').type('transfer')
    cy.get('#btn_submit').click()

    cy.get('#btn_submit').click()
    cy.url().should('include', 'transfer-funds-confirm.html')
    cy.get('div').should('contain.text', 'You successfully submitted your transaction.')
    
    cy.get('a[href="/bank/transfer-funds.html"]').click()
    cy.url().should('include', 'transfer-funds.html')
    cy.get('h2').should('contain.text', 'Transfer Money & Make Payments')
})

Cypress.Commands.add('payBills', () => {
    cy.get('a[href="/bank/redirect.html?url=pay-bills.html"]').click()
    cy.url().should('include', 'pay-bills.html')
    cy.get('h2').should('contain.text', 'Make payments to your saved payees')

    cy.get('#sp_payee').select('Bank of America').should('have.value', 'bofa')
    cy.get('#sp_account').select('Brokerage').should('have.value', '6')
    cy.get('#pay_saved_payees').click()
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")

    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type(1000)

    cy.get('#sp_date').click()
    cy.get('.ui-state-default').contains('6').click()

    cy.get('#sp_description').type('Bulan ini lunas')

    cy.get('#pay_saved_payees').click()
    cy.url().should('include', 'http://zero.webappsecurity.com/bank/pay-bills-saved-payee.html')
    cy.get('#alert_content').should('have.text', 'The payment was successfully submitted.')
    cy.get('.close').click()
})

Cypress.Commands.add('addNewPayee', () => {
    cy.get('a[href="#ui-tabs-2"]').click()
    cy.get('h2').should('contain.text', 'Who are you paying?')

    cy.get('#add_new_payee').click()
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")

    cy.get('#np_new_payee_name').type('joshua')
    cy.get('#np_new_payee_address').type('Jln. Sulfat')
    cy.get('#np_new_payee_account').type('8819911223')
    cy.get('#add_new_payee').click()
    cy.get('#alert_content').should('contain.text', 'The new payee joshua was successfully created.')
    cy.get('.close').click()
})

Cypress.Commands.add('purchaseForeign', () => {
    cy.get('a[href="#ui-tabs-3"]').click()
    cy.get('h2').should('contain.text', 'Purchase foreign currency cash')

    cy.get('#purchase_cash').click()
    cy.on('window:confirm', (text) => {
        expect(text).to.contains('Please, ensure that you have filled all the required fields with valid values.')
    })
    cy.get('#pc_currency').select('JPY').should('have.value', 'JPY')
    cy.get('#sp_sell_rate').should('contain.text', '1 yen (JPY) = 0.01244 U.S. dollar (USD)')
    cy.get('#pc_amount').type('5000')

    cy.get('#pc_inDollars_true').click()
    cy.get('#pc_calculate_costs').click()
    cy.get('#pc_conversion_amount').should('contain.text', '401929.26 yen (JPY) = 5000.00 U.S. dollar (USD)')

    cy.get('#pc_inDollars_false').click()
    cy.get('#pc_calculate_costs').click()
    cy.get('#pc_conversion_amount').should('contain.text', '5000.00 yen (JPY) = 62.20 U.S. dollar (USD)')

    cy.get('#purchase_cash').click()
    cy.get('#alert_content').should('contain.text', 'Foreign currency cash was successfully purchased.')
    cy.get('.close').click()
})

Cypress.Commands.add('myMoneyMap', () => {
    cy.get('a[href="/bank/redirect.html?url=money-map.html"]').click()
    cy.url().should('include', 'money-map.html')
    cy.get('#report-1010_header_hd-textEl').should('be.visible')

    cy.get('#tool-1032-toolEl').click()
    cy.get('#tool-1032-toolEl').click()

    cy.get('#tool-1033-toolEl').click()
    cy.get('#tool-1033-toolEl').click()

    cy.get('#tool-1034-toolEl').click()
    cy.get('#gridcolumn-1024-titleEl').should('be.visible')

    cy.get('#tool-1035-toolEl').click()
    cy.get('#tool-1035-toolEl').click()
})

Cypress.Commands.add('onlineStatements', () => {
    cy.get('a[href="/bank/redirect.html?url=online-statements.html"]').click()
    cy.url().should('include', 'online-statements.html')
    cy.get('h2').should('contain.text', 'Statements & Documents')

    cy.get('h2').should('contain.text', 'Account - Savings')
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-10-12.pdf"]').should('be.visible')
    cy.get('a[href="#os_2011"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-05-12-11.pdf"]').should('be.visible')
    cy.get('a[href="#os_2010"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-12-10.pdf"]').should('be.visible')
    cy.get('a[href="#os_2009"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-31-11-09.pdf"]').should('be.visible')

    cy.get('#os_accountId').select(1).should('have.value', '2')
    cy.get('h2').should('contain.text', 'Account - Checking')
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-10-12.pdf"]').should('be.visible')
    cy.get('a[href="#os_2011"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-05-12-11.pdf"]').should('be.visible')
    cy.get('a[href="#os_2010"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-12-10.pdf"]').should('be.visible')
    cy.get('a[href="#os_2009"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-31-11-09.pdf"]').should('be.visible')

    cy.get('#os_accountId').select(2).should('have.value', '3')
    cy.get('h2').should('contain.text', 'Account - Savings')
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-10-12.pdf"]').should('be.visible')
    cy.get('a[href="#os_2011"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-05-12-11.pdf"]').should('be.visible')
    cy.get('a[href="#os_2010"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-12-10.pdf"]').should('be.visible')
    cy.get('a[href="#os_2009"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-31-11-09.pdf"]').should('be.visible')

    cy.get('#os_accountId').select(3).should('have.value', '4')
    cy.get('h2').should('contain.text', 'Account - Loan')
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-10-12.pdf"]').should('be.visible')
    cy.get('a[href="#os_2011"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-05-12-11.pdf"]').should('be.visible')
    cy.get('a[href="#os_2010"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-12-10.pdf"]').should('be.visible')
    cy.get('a[href="#os_2009"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-31-11-09.pdf"]').should('be.visible')

    cy.get('#os_accountId').select(4).should('have.value', '5')
    cy.get('h2').should('contain.text', 'Account - Credit Card')
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-10-12.pdf"]').should('be.visible')
    cy.get('a[href="#os_2011"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-05-12-11.pdf"]').should('be.visible')
    cy.get('a[href="#os_2010"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-12-10.pdf"]').should('be.visible')
    cy.get('a[href="#os_2009"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-31-11-09.pdf"]').should('be.visible')

    cy.get('#os_accountId').select(5).should('have.value', '6')
    cy.get('h2').should('contain.text', 'Account - Brokerage')
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-10-12.pdf"]').should('be.visible')
    cy.get('a[href="#os_2011"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-05-12-11.pdf"]').should('be.visible')
    cy.get('a[href="#os_2010"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-01-12-10.pdf"]').should('be.visible')
    cy.get('a[href="#os_2009"]').click()
    cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-31-11-09.pdf"]').should('be.visible')
})

Cypress.Commands.add('help', () => {
    cy.get('#searchTerm').click()
    cy.get('#searchTerm').type('help{enter}')
    cy.url().should('include', 'searchTerm=help')
    cy.get('div').should('contain.text', 'The following pages were found for the query: help')
    
    cy.get('a[href="/help.html"]').click()
    cy.url().should('include', 'help.html')
    cy.get('h3').should('contain.text', 'Help Topics')

    cy.get('a[href="/help.html?topic=/help/topic2.html"]').click()
    cy.get('h3').should('contain.text', 'How do I transfer funds?')

    cy.get('a[href="/help.html?topic=/help/topic3.html"]').click()
    cy.get('h3').should('contain.text', 'How do I pay bills?')

    cy.get('a[href="/help.html?topic=/help/topic1.html"]').click()
    cy.get('h3').should('contain.text', 'How do I log into my account?')
})
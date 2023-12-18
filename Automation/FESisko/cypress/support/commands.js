// Commands Soal-1
Cypress.Commands.add('visitHome', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a').should('contain.text', 'Products')
    cy.get('a').should('contain.text', 'Cart')
})

Cypress.Commands.add('klikLoginPage', () => {
    cy.get('a[href="/login"]').eq(0).click()
    cy.get('h2').should('contain.text', 'Login to your account')
    cy.get('h2').should('contain.text', 'OR')
})

Cypress.Commands.add('emailKosong', () => {
    cy.get('input[data-qa="login-email"]').clear()
    cy.get('input[data-qa="login-password"]').clear()

    cy.get('button[data-qa="login-button"]').click()
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
})

Cypress.Commands.add('namaKosong', () => {
    cy.get('input[data-qa="signup-name"]').clear()
    cy.get('input[data-qa="signup-email"]').clear()

    cy.get('button[data-qa="signup-button"]').click()
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
})

Cypress.Commands.add('register', (name, email_kosong) => {
    cy.get('input[data-qa="signup-name"]').clear()
    cy.get('input[data-qa="signup-email"]').clear()

    cy.get('input[data-qa="signup-name"]').type(name)

    cy.get('button[data-qa="signup-button"]').click()
})

Cypress.Commands.add('register', (name, email_salah_format) => {
    cy.get('input[data-qa="signup-name"]').clear()
    cy.get('input[data-qa="signup-email"]').clear()

    cy.get('input[data-qa="signup-name"]').type(name)
    cy.get('input[data-qa="signup-email"]').type(email_salah_format)

    cy.get('button[data-qa="signup-button"]').click()
})

Cypress.Commands.add('login', (email_salah_format) => {
    cy.get('input[data-qa="login-email"]').clear()
    cy.get('input[data-qa="login-password"]').clear()

    cy.get('input[data-qa="login-email"]').type(email_salah_format)

    cy.get('button[data-qa="login-button"]').click()
})

Cypress.Commands.add('login', (email_benar) => {
    cy.get('input[data-qa="login-email"]').clear()
    cy.get('input[data-qa="login-password"]').clear()

    cy.get('input[data-qa="login-email"]').type(email_benar)

    cy.get('button[data-qa="login-button"]').click()
})

Cypress.Commands.add('register', (name, email_exist) => {
    cy.get('input[data-qa="signup-name"]').clear()
    cy.get('input[data-qa="signup-email"]').clear()

    cy.get('input[data-qa="signup-name"]').type(name)
    cy.get('input[data-qa="signup-email"]').type(email_exist)

    cy.get('button[data-qa="signup-button"]').click()
})

Cypress.Commands.add('register', (name, email_benar) => {
    cy.get('input[data-qa="signup-name"]').clear()
    cy.get('input[data-qa="signup-email"]').clear()

    cy.get('input[data-qa="signup-name"]').type(name)
    cy.get('input[data-qa="signup-email"]').type(email_benar)

    cy.get('button[data-qa="signup-button"]').click()
})

Cypress.Commands.add('registerFieldKosong', () => {
    cy.url().should('include', 'signup')
    cy.get('button[data-qa="create-account"]').click()
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
})

Cypress.Commands.add('registerForm', () => {
    cy.get('#id_gender1').click()
    cy.get('#id_gender2').click()
    cy.get('#id_gender1').click()
    cy.get('#password').type('abcd')
    cy.get('#months').select('March').should('have.value', '3')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#newsletter').click()

    cy.get('#first_name').type('joshua')
    cy.get('#last_name').type('oetomo')
    cy.get('#address1').type('jln sulfat')
    cy.get('#country').select('United States').should('have.value', 'United States')
    cy.get('#state').type('California')
    cy.get('#city').type('Los Angeles')
    cy.get('#zipcode').type('566112')
    cy.get('#mobile_number').type('08192341987')

    cy.get('button[data-qa="create-account"]').click()
})

Cypress.Commands.add('login', (email_benar, password_salah) => {
    cy.get('input[data-qa="login-email"]').clear()
    cy.get('input[data-qa="login-password"]').clear()

    cy.get('input[data-qa="login-email"]').type(email_benar)
    cy.get('input[data-qa="login-password"]').type(password_salah)

    cy.get('button[data-qa="login-button"]').click()
})

Cypress.Commands.add('login', (email_benar, password_benar) => {
    cy.get('input[data-qa="login-email"]').clear()
    cy.get('input[data-qa="login-password"]').clear()

    cy.get('input[data-qa="login-email"]').type(email_benar)
    cy.get('input[data-qa="login-password"]').type(password_benar)

    cy.get('button[data-qa="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('img[src="/static/images/home/logo.png"]').click()
    cy.get('a[href="/logout"]').click()
    cy.url().should('include', 'login')
    cy.get('button').should('contain.text', 'Login')
})

Cypress.Commands.add('deleteAccount', () => {
    cy.get('a[href="/delete_account"]').click()
    cy.get('h2').should('contain.text', 'Account Deleted!')
    cy.get('a').should('contain.text', 'Continue')
})

Cypress.Commands.add('klikProducts', () => {
    cy.get('a[href="/products"]').click()
    cy.url().should('include', 'products')
    cy.get('#search_product').should('be.visible')
})

Cypress.Commands.add('useSearch', () => {
    cy.get('#search_product').type('men')
    cy.get('#submit_search').click()
    cy.url().should('include', '?search=men')
    cy.get('p').should('contain.text', 'Men Tshirt')
})

Cypress.Commands.add('viewItem1', () => {
    cy.get('a[href="/product_details/2"]').click()
    cy.url().should('include', 'product_details/2')
    cy.get('p').should('contain.text', ' H&M')
    cy.get('#quantity').should('be.visible')
})

Cypress.Commands.add('viewItem2', () => {
    cy.get('a[href="/product_details/6"]').click()
    cy.url().should('include', 'product_details/6')
    cy.get('p').should('contain.text', 'Category: Women > Tops')
    cy.get('#quantity').should('be.visible')
})

Cypress.Commands.add('addItemsToCart', () => {
    cy.get('a[data-product-id="4"]').eq(0).click()
    cy.get('button[data-dismiss="modal"]').click()
    cy.get('a[data-product-id="11"]').eq(0).click()
    cy.get('button[data-dismiss="modal"]').click()
})

Cypress.Commands.add('addItemsFromDetails1', () => {
    cy.get('#quantity').type('{backspace}0')
    cy.get('.btn.btn-default.cart').click()
    cy.get('button[data-dismiss="modal"]').click()
})

Cypress.Commands.add('addItemsFromDetails2', () => {
    cy.get('#quantity').type('{backspace}2')
    cy.get('.btn.btn-default.cart').click()
    cy.get('button[data-dismiss="modal"]').click()
})

Cypress.Commands.add('klikCart', () => {
    cy.get('a[href="/view_cart"]').eq(0).click()
    cy.url().should('include', 'view_cart')
    cy.get('a').should('contain.text', 'Proceed To Checkout')
})

Cypress.Commands.add('klikCheckoutTanpaLogin', () => {
    cy.get('.btn.btn-default.check_out').click()
    cy.get('p').should('contain.text', 'Register / Login account to proceed on checkout.')
    cy.get('.btn.btn-success.close-checkout-modal.btn-block').eq(0).click()
})

Cypress.Commands.add('klikCheckoutDenganLogin', () => {
    cy.get('.btn.btn-default.check_out').click()
    cy.url().should('include', 'checkout')
    cy.get('li').should('contain.text', 'Checkout')
    cy.get('li').should('contain.text', 'jln sulfat')
})

Cypress.Commands.add('removeItemFromCart', () => {
    cy.url().should('include', 'view_cart')
    cy.get('.cart_quantity_delete').eq(0).click()
    cy.get('.cart_quantity_delete').eq(2).click()
})

Cypress.Commands.add('klikPayment', () => {
    cy.get('a[href="/payment"]').click()
    cy.url().should('include', 'payment')
    cy.get('li').should('contain.text', 'Payment')
})

Cypress.Commands.add('confirmPayment', () => {
    cy.get('input[data-qa="name-on-card"]').type('joshua')
    cy.get('input[data-qa="card-number"]').type('123123')
    cy.get('input[data-qa="cvc"]').type('122')
    cy.get('input[data-qa="expiry-month"]').type('08')
    cy.get('input[data-qa="expiry-year"]').type('2024')
})

Cypress.Commands.add('klikConfirmOrder', () => {
    cy.get('#submit').click()
    cy.url().should('include', 'payment_done')
    cy.get('h2').should('contain.text', 'Order Placed!')
})

// Commands Soal-2
Cypress.Commands.add('visitHomeSisko', () => {
    cy.visit('https://sistemtoko.com/')
    cy.get('a').should('contain.text', ' Daftar GRATIS Sekarang! ')
    cy.get('div').should('contain.text', 'Aplikasi untuk mengelola Performa Toko Online & Offline Anda dengan mudah, modern, dan terbaru')
})

Cypress.Commands.add('klikLoginPageSisko', () => {
    cy.contains('Login').click()
    cy.url().should('include', 'login')
    cy.get('h3').should('contain.text', 'Login')
})

Cypress.Commands.add('klikRegisterPageSisko', () => {
    cy.contains('register').click()
    cy.url().should('include', 'register')
    cy.get('h3').should('contain.text', 'Register')
})

Cypress.Commands.add('emailSiskoKosong', () => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
    cy.get('span').should('contain.text', "Please check for empty field or wrong format")
    cy.get('span').should('contain.text', "The email field is required.")
    cy.get('span').should('contain.text', "The password field is required.")
})

Cypress.Commands.add('loginSisko', (email_salah_format, field_kosong) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()

    cy.get('input[name="email"]').type(email_salah_format)
    cy.get('input[name="password"]').type(field_kosong)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('loginSisko', (email_benar, field_kosong) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="password"]').type(field_kosong)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('loginSisko', (email_benar, password_salah) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="password"]').type(password_salah)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('loginSisko', (email_benar, password_salah) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="password"]').type(password_salah)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('loginSisko', (email_benar, password_benar) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="password"]').type(password_benar)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('loginSisko', (email_user, password_user) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()

    cy.get('input[name="email"]').type(email_user)
    cy.get('input[name="password"]').type(password_user)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('fieldMandatoryRegKosong', () => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40.btn-success').click()

    cy.get('span').should('contain.text', "The user fullname field is required.")
    cy.get('span').should('contain.text', "The password field is required.")
    cy.get('span').should('contain.text', "The password confirmation field is required.")
    cy.get('span').should('contain.text', "The email field is required.")
})

Cypress.Commands.add('registerSisko0', (email_salah_format, field_kosong) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('input[name="email"]').type(email_salah_format)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('registerSisko1', (email_benar, password_salah) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="pswd"]').type(password_salah)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('registerSisko3', (email_benar, password_salah, confirm_pass_salah) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="pswd"]').type(password_salah)
    cy.get('input[name="password"]').type(confirm_pass_salah)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('registerSisko2', (email_benar, password_salah) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="pswd"]').type(password_salah)
    cy.get('input[name="password"]').type(password_salah)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('registerSisko', (email_benar, password_sisko_benar, name) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="pswd"]').type(password_sisko_benar)
    cy.get('input[name="password"]').type(password_sisko_benar)
    cy.get('input[name="name"]').type(name)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('registerSisko', (email_benar, password_sisko_benar, name_salah) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('input[name="email"]').type(email_benar)
    cy.get('input[name="pswd"]').type(password_sisko_benar)
    cy.get('input[name="password"]').type(password_sisko_benar)
    cy.get('input[name="name"]').type(name_salah)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('registerSisko', (email_sisko, password_sisko_benar, name) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="pswd"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="name"]').clear()

    cy.get('input[name="email"]').type(email_sisko)
    cy.get('input[name="pswd"]').type(password_sisko_benar)
    cy.get('input[name="password"]').type(password_sisko_benar)
    cy.get('input[name="name"]').type(name)

    cy.get('.btn.btn-primary.btn-block.btn-lg.margin-top-40').click()
})

Cypress.Commands.add('klikLoginSisko', () => {
    cy.get('a[href="https://sistemtoko.com/login"]').click()
    cy.url().should('include', 'login')
    cy.get('h3').should('contain.text', 'Login')
})

Cypress.Commands.add('klikForgotPassSisko', () => {
    cy.get('a[href="https://sistemtoko.com/forgot"]').click()
    cy.url().should('include', 'forgot')
    cy.get('h3').should('contain.text', 'Password Reminder')
})

Cypress.Commands.add('forgotPassSiskoKosong', () => {
    cy.get('.btn.btn-pin').click()
    cy.get('pre').should('contain.text', '{"code":500,"message":"Address in mailbox given [] does not comply with RFC 2822, 3.6.2."}')
})

Cypress.Commands.add('forgotPassSisko', (email_salah_format) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="email"]').type(email_salah_format)
    cy.get('.btn.btn-pin').click()
})

Cypress.Commands.add('forgotPassSisko', (email_not_exist) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="email"]').type(email_not_exist)
    cy.get('.btn.btn-pin').click()
})

Cypress.Commands.add('forgotPassSisko', (email_benar) => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="email"]').type(email_benar)
    cy.get('.btn.btn-pin').click()
})

Cypress.Commands.add('cekMenuPembayaran', () => {
    cy.url().should('include', '?p=john')
    cy.get('.btn.btn-danger.navbar-btn.waves-effect.waves-light').click()
})

Cypress.Commands.add('cekDashboard', () => {
    cy.get('.close').eq(0).click()
    cy.get('.progress.progress-xs.table-content').click()
    cy.contains('Notif').click()
    cy.get('.avatar.avatar-online').click()
    cy.get('a[href="/member/account"]').should('be.visible')
})

Cypress.Commands.add('logoutSisko', () => {
    cy.get('.avatar.avatar-online').click()
    cy.get('a[ng-click="logout()"]').click()
    cy.url().should('include', 'login')
    cy.get('h3').should('contain.text', 'Login')
})

Cypress.Commands.add('billingSisko', () => {
    cy.get('.avatar.avatar-online').click()
    cy.get('a[href="/member/upgrade"]').click()
    cy.url().should('include', 'member/upgrade')
    cy.get('.avatar.avatar-online').click()
    cy.get('li').should('contain.text', 'Profile Billing')
    
    cy.get('.btn.btn-info.waves-effect.waves-light.pull-left').click()
    cy.url().should('include', 'member')
})

Cypress.Commands.add('profileSisko', () => {
    cy.get('a[href="/member/account"]').click()
    cy.url().should('include', 'account')
    cy.get('.avatar.avatar-online').click()
    cy.get('h2').should('contain.text', 'Profile Setting')

    cy.get('input[type="file"]').selectFile('C:/Users/joshu/upload-image-cypress2.png')
    cy.get('.btn.btn-success.btn-xs').click()
    cy.get('span').should('contain.text', 'Picture Uploaded Successfuly')
    cy.get('button[ng-show="closeable"]').click()

    cy.get('.btn.btn-default.waves-effect.waves-light.pull-left').click()
    cy.url().should('include', 'member')
})

Cypress.Commands.add('komisiSisko', () => {
    cy.get('.avatar.avatar-online').click()
    cy.get('.btn.btn-info.waves-effect.waves-light.btn-sm').click()

    cy.get('.btn.btn-xs.btn-warning').click()
    cy.url().should('include', 'komisi')
    cy.get('.avatar.avatar-online').click()

    cy.get('span').should('contain.text', 'ada pertanyaan atau mau ambil Komisi ? click')

    cy.get('.btn.btn-default.waves-effect.waves-light.pull-left').click()
    cy.url().should('include', 'member')
})

Cypress.Commands.add('tambahTokoSisko', () => {
    cy.get('.btn.btn-info.waves-effect.waves-light').eq(1).click()
    cy.url().should('include', 'create')
    cy.get('h2').should('contain.text', 'Buat Toko baru')
    
    cy.get('input[ng-required="true"]').eq(0).type('Toko Sumber Abadi 2')
    cy.get('div[style="width:30px;height:30px;border-radius: 15px;background:#f39c12;"]').click()
    cy.get('div[style="width:30px;height:30px;border-radius: 15px;background:#9b59b6;"]').click()
    cy.get('div[style="width:30px;height:30px;border-radius: 15px;background:#f1c40f;"]').click()
    cy.get('div[style="width:30px;height:30px;border-radius: 15px;background:#2ecc71;"').click()

    cy.get('select[ng-required="true"]').select('Indonesia Rupiah(IDR)').should('have.value', 'number:1')
    cy.get('textarea[placeholder="Deskripsi toko"]').type('toko cat')
    cy.get('textarea[placeholder="Alamat lengkap toko"]').type('jln. bandung no 12, kota malang')
    cy.get('input[type="checkbox"]').eq(0).click()
    cy.get('input[type="checkbox"]').eq(0).click()
    cy.get('input[type="checkbox"]').eq(1).click()

    cy.get('#province').select('Jawa Timur').should('have.value', '11')
    cy.get('#city').select('Lumajang').should('have.value', 'string:243')
    cy.get('#jne').click()
    cy.get('#tiki').click()
    cy.get('#sicepat').click()

    cy.wait(2000)
    cy.get('.btn.btn-success.waves-effect.waves-light.pull-right').click()
    cy.url().should('include', 'pengaturan')
    cy.get('div').should('contain.text', 'Pengaturan Umum')

    cy.contains('pegawai').click()
    cy.contains('Group').click()
    cy.contains('Toko & Pengiriman').click()
    cy.contains('Website').click()
    cy.contains('List Rekening').click()
    cy.contains('Point').click()
    cy.contains('Aplikasi Kasir').click()
    cy.contains('Aplikasi Android').click()
})
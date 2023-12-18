/// <reference types="cypress" />

describe('Login Feature', () => {
    before(() => {
        cy.visitHomeSisko()
        cy.klikLoginPageSisko()
    });

    it('Field Email dan Password Kosong', () => {
        cy.emailSiskoKosong()
    });

    it('Field Email Diisi dengan Format yang Salah dan Field Password Kosong', () => {
        cy.fixture("user").then(user => {
            const email_salah_format = user.email_salah_format
            const field_kosong = user.field_kosong
            cy.loginSisko(email_salah_format, field_kosong)
        })
        cy.get('span').should('contain.text', "Please check for empty field or wrong format")
        cy.get('span').should('contain.text', "The email must be a valid email address.")
        cy.get('span').should('contain.text', "The password field is required.")
    });

    it('Field Email Diisi dengan Format yang Benar dan Field Password Kosong', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const field_kosong = user.field_kosong
            cy.loginSisko(email_benar, field_kosong)
        })
        cy.get('span').should('contain.text', "Please check for empty field or wrong format")
        cy.get('span').should('contain.text', "The password field is required.")
    });

    it('Login dengan Email dan Password yang Tidak Terdaftar', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_salah = user.password_salah
            cy.loginSisko(email_benar, password_salah)
        })
        cy.get('span').should('contain.text', "Operation Failed")
        cy.get('span').should('contain.text', "Username/Password did not match")
    });

    it('Login dengan Email dan Password yang Terdaftar Tetapi Belum Diaktivasi', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_sisko_benar = user.password_sisko_benar
            cy.loginSisko(email_benar, password_sisko_benar)
        })
        cy.get('span').should('contain.text', "Your account is not activated yet. Check your email for confirmation code or resend if necessary")
    });

    it('Login dengan Email dan Password yang Terdaftar dan Sudah Diaktivasi', () => {
        cy.fixture("user").then(user => {
            const email_user = user.email_user
            const password_user = user.password_user
            cy.loginSisko(email_user, password_user)
        })
        cy.url().should('include', '?p=john')
        cy.get('h2').should('contain.text', 'Daftar Toko')
    });

    it('Logout', () => {
        cy.logoutSisko()
    });
})
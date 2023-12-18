/// <reference types="cypress" />

describe('Sign in Feature', () => {
    before(() => {
        cy.visitHome()
        cy.klikLoginPage()
    });

    it('Field Email dan Password Kosong', () => {
        cy.emailKosong()
    });

    it('Field Email Diisi dengan Format yang Salah', () => {
        cy.fixture("user").then(user => {
            const email_salah_format = user.email_salah_format
            const field_kosong = user.field_kosong
            cy.login(email_salah_format, field_kosong)
        })
        cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please include an '@' in the email address. 'josh' is missing an '@'.")
    });

    it('Field Email Diisi dengan Format yang Benar dan Field Password Kosong', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const field_kosong = user.field_kosong
            cy.login(email_benar, field_kosong)
        })
        cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
    });

    it('Login dengan Email dan Password yang Tidak Terdaftar', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_salah = user.password_salah
            cy.login(email_benar, password_salah)
        })
        cy.get('p').should('contain.text', 'Your email or password is incorrect!')
    });

    it('Login dengan Email dan Password yang Terdaftar', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_benar = user.password_benar
            cy.login(email_benar, password_benar)
        })
        cy.get('a[href="/logout"]').should('be.visible')
        cy.get('a[href="/delete_account"]').should('be.visible')
    });

    it('Logout', () => {
        cy.logout()
      });
})
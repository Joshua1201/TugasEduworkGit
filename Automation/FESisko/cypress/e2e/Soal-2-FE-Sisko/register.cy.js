/// <reference types="cypress" />

describe('Register Feature', () => {
    before(() => {
        cy.visitHomeSisko()
        cy.klikRegisterPageSisko()
    });

    it('Mengosongi Semua Mandatory Field', () => {
        cy.fieldMandatoryRegKosong()
    });

    it('Field Email Diisi dengan Format yang Salah', () => {
        cy.fixture("user").then(user => {
            const email_salah_format = user.email_salah_format
            const field_kosong = user.field_kosong
            cy.registerSisko0(email_salah_format, field_kosong)
        })
        cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please include an '@' in the email address. 'josh' is missing an '@'.")
    });

    it('Field Email Diisi dengan Format yang Benar dan Field Password Diisi dengan 4 Karakter', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_salah = user.password_salah
            cy.registerSisko1(email_benar, password_salah)
        })
        cy.get('span').should('contain.text', "The user fullname field is required.")
        cy.get('span').should('contain.text', "The password confirmation does not match.")
        cy.get('span').should('contain.text', "The password confirmation field is required.")
    });

    it('Field Email Benar, Field Password Diisi dengan 4 Karakter, Field Confirm Password Salah', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_salah = user.password_salah
            const confirm_pass_salah = user.confirm_pass_salah
            cy.registerSisko3(email_benar, password_salah, confirm_pass_salah)
        })
        cy.get('span').should('contain.text', "The user fullname field is required.")
        cy.get('span').should('contain.text', "The password confirmation does not match.")
        cy.get('span').should('contain.text', "The password confirmation must be at least 6 characters.")
    });

    it('Field Email Benar, Field Password Diisi dengan 4 Karakter, Field Confirm Password Sesuai dengan Field Password', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_salah = user.password_salah
            cy.registerSisko2(email_benar, password_salah)
        })
        cy.get('span').should('contain.text', "The user fullname field is required.")
        cy.get('span').should('contain.text', "The password must be at least 6 characters.")
        cy.get('span').should('contain.text', "The password confirmation must be at least 6 characters.")
    });

    it('Field Email Benar, Field Password dan Confirm Password Benar, Field Full Name Diisi dengan 1 Karakter', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_sisko_benar = user.password_sisko_benar
            const name = user.name
            cy.registerSisko(email_benar, password_sisko_benar, name)
        })
        cy.get('span').should('contain.text', "The email has already been taken.")
    });

    it('Semua Field Mandatory Diisi Dengan Benar dan Email Sudah Diambil/Terdaftar', () => {
        cy.fixture("user").then(user => {
            const email_benar = user.email_benar
            const password_sisko_benar = user.password_sisko_benar
            const name_salah = user.name_salah
            cy.registerSisko(email_benar, password_sisko_benar, name_salah)
        })
        cy.get('span').should('contain.text', "The email has already been taken.")
    });

    it('Semua Field Mandatory Diisi Dengan Benar dan Email Belum Diambil/Terdaftar', () => {
        cy.fixture("user").then(user => {
            const email_sisko = user.email_sisko
            const password_sisko_benar = user.password_sisko_benar
            const name = user.name
            cy.registerSisko(email_sisko, password_sisko_benar, name)
        })
        cy.get('span').should('contain.text', "Check Your E-mail")
        cy.get('p').should('contain.text', "Have account already? Please go to ")
    });

    it('Go To Login Page', () => {
        cy.klikLoginSisko()
    });
})
/// <reference types="cypress" />

describe('Sign up Feature', () => {
  before(() => {
    cy.visitHome()
    cy.klikLoginPage()
  });

  it('Field Nama dan Email Kosong', () => {
    cy.namaKosong()
  });

  it('Field Nama Diisi dan Email Kosong', () => {
    cy.fixture("user").then(user => {
      const name = user.name
      const field_kosong = user.field_kosong
      cy.register(name, field_kosong)
    })
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
  });

  it('Field Nama Diisi dan Field Email Diisi dengan Format yang Salah', () => {
    cy.fixture("user").then(user => {
      const name = user.name
      const email_salah_format = user.email_salah_format
      cy.register(name, email_salah_format)
    })
    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
  });

  it('Register dengan Email yang Sudah Terdaftar', () => {
    cy.fixture("user").then(user => {
      const name = user.name
      const email_exist = user.email_exist
      cy.register(name, email_exist)
    })
    cy.get('p').should('contain.text', 'Email Address already exist!')
  });

  it('Register dengan Email yang Belum Terdaftar', () => {
    cy.fixture("user").then(user => {
      const name = user.name
      const email_benar = user.email_benar
      cy.register(name, email_benar)
    })
    cy.url().should('include', 'signup')
    cy.get('h2').should('contain.text', 'Enter Account Information')
  });

  it('Mengosongi Mandatory Field', () => {
    cy.registerFieldKosong()
  });

  it('Register Berhasil dan Akun Telah Dibuat', () => {
    cy.url().should('include', 'signup')

    cy.registerForm()

    cy.url().should('include', 'account_created')
    cy.get('h2').should('contain.text', 'Account Created!')
    cy.get('a').should('contain.text', 'Continue')
  });

  it('Logout', () => {
    cy.logout()
  });
})
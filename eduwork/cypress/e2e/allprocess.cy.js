/// <reference types="cypress" />

describe('Tugas All Process in Web', () => {
    before(() => {
        cy.visitHomeSauce()
    });

    it('Field Username Kosong', () => {
        cy.userKosong()
    });

    it('Field Password Kosong', () => {
        cy.passKosong()
    });

    it('Field Username atau Password Terisi dengan Salah', () => {
        cy.fixture("user").then(user => {
            const username_salah = user.username_salah
            const password_salah = user.password_salah

            cy.loginSauce(username_salah, password_salah)
        })
    });

    it('Login sebagai locked_out_user', () => {
        cy.fixture("user").then(user => {
            const username_locked = user.username_locked
            const password_sauce = user.password_sauce

            cy.loginSauce(username_locked, password_sauce)
        })
    });

    it('Login sebagai standard_user', () => {
        cy.fixture("user").then(user => {
            const username_sauce = user.username_sauce
            const password_sauce = user.password_sauce

            cy.loginSauce(username_sauce, password_sauce)
        })
        cy.url().should('include', 'inventory.html')
        cy.get('.shopping_cart_link').should('be.visible')
    });

    it('Gunakan Fitur Sort', () => {
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('.product_sort_container').should('have.value', 'za')
    });

    it('Klik Produk', () => {
        cy.klikProduk()
    });

    it('Klik "Back to Products', () => {
        cy.klikBackToProduk()
    });

    it('Gunakan Fitur Remove pada Page "Products"', () => {
        cy.addItemstoCart()
        cy.removeProducts()
    });

    it('Gunakan Fitur Remove pada Page "Cart"', () => {
        cy.addItemstoCart()
        cy.klikIconCart()
        cy.removeCart()
    });

    it('Klik "Continue Shopping"', () => {
        cy.klikContinueShopping()
    });

    it('Klik Icon "Cart" Lalu Klik "Continue Shopping"', () => {
        cy.addItemstoCart()
        cy.klikIconCart()
        cy.klikContinueShopping()
    });

    it('Klik "Checkout"', () => {
        cy.klikIconCart()
        cy.klikCheckout()
    });

    it('Klik Icon "Checkout" Lalu Klik "Cancel"', () => {
        cy.checkoutCancel()
    });

    it('Field First Name Kosong', () => {
        cy.fixture("user").then(user => {
            const last_name = user.last_name
            const zip_code = user.zip_code

            cy.klikCheckout()
            cy.firstNameKosong(last_name, zip_code)
        })
    });

    it('Field Last Name Kosong', () => {
        cy.fixture("user").then(user => {
            const first_name = user.first_name
            const zip_code = user.zip_code

            cy.lastNameKosong(first_name, zip_code)
        })
    });

    it('Field Postal Code Kosong', () => {
        cy.fixture("user").then(user => {
            const first_name = user.first_name
            const last_name = user.last_name

            cy.zipCodeKosong(first_name, last_name)
        })
    });

    it('Mengisi Data Diri', () => {
        cy.fixture("user").then(user => {
            const first_name = user.first_name
            const last_name = user.last_name
            const zip_code = user.zip_code

            cy.isiDataDiri(first_name, last_name, zip_code)
        })
    });

    it('Klik "Continue"', () => {
        cy.klikContinue()
    })

    it('Klik "Continue" Lalu "Cancel"', () => {
        cy.klikCancel()
    })

    it('Lakukan Transaksi Berhasil', () => {
        cy.fixture("user").then(user => {
            const first_name = user.first_name
            const last_name = user.last_name
            const zip_code = user.zip_code

            cy.klikIconCart()
            cy.klikCheckout()
            cy.isiDataDiri(first_name, last_name, zip_code)
            cy.klikContinue()
            cy.klikFinish()
            cy.klikBack()
        })
    });

    it('Klik "All Items"', () => {
        cy.klikIconCart()
        cy.klikAllItems()
    })

    it('Logout', () => {
        cy.logoutSauce()
    })

    it('Login sebagai error_user', () => {
        cy.fixture("user").then(user => {
            const username_error = user.username_error
            const password_sauce = user.password_sauce

            cy.loginSauce(username_error, password_sauce)
        })
        cy.url().should('include', 'inventory.html')
        cy.logoutSauce()
    });

    it('Login sebagai problem_user', () => {
        cy.fixture("user").then(user => {
            const username_problem = user.username_problem
            const password_sauce = user.password_sauce

            cy.loginSauce(username_problem, password_sauce)
        })
        cy.url().should('include', 'inventory.html')
        cy.logoutSauce()
    });

    it('Login sebagai performance_glitch_user', () => {
        cy.fixture("user").then(user => {
            const username_performance = user.username_performance
            const password_sauce = user.password_sauce

            cy.loginSauce(username_performance, password_sauce)
        })
        cy.url().should('include', 'inventory.html')
        cy.logoutSauce()
    });
});
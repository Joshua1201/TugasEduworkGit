/// <reference types="cypress" />

describe('Tugas Validate Content', () => {

    it('Successfully validate a content in array', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body.abilities[0].ability.name).to.eq('limber')
        })
    })
})
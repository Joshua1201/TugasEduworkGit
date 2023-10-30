/// <reference types="cypress" />

describe('Create new user', () => {

    it('Successfully created a new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        };
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.body).to.have.property('name', 'Eduwork')
            expect(response.body).to.have.property('job', 'Education')
        })
    });
});
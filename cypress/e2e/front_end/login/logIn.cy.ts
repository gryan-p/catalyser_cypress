/// <reference types="cypress" />

describe('1.01 Verify user with valid email address and password can log in successfully', () => {

    beforeEach("Load fixture", function () {
        cy.fixture("user").then((data)=>{
            this.data=data;
        })
        cy.visit('/sign-in')
    })

    it('Verify when email is blank', function() {
        cy.get('button[type="submit"]').click()
        cy.get('#email-helper-text').should('have.text', 'Email is a required field')
    })

    it('Verify when password is blank', function() {
        cy.get('#email').type(this.data.email)
        cy.get('button[type="submit"]').click()
        cy.get('label').contains('Password').should('exist')
        cy.get('button[type="submit"]').click()
        cy.get('#password-helper-text').should('have.text', 'Password is a required field')
    })

    it('Verify when email and password is valid', function() {
        cy.get('#email').type(this.data.email)
        cy.get('button[type="submit"]').click()
        cy.get('#password').type(this.data.password)
        cy.get('button[type="submit"]').click()
        // cy.get('a[href="/portal"]').should('exist').click()
        cy.url().should('eq', 'https://uat.v2.catalyser.com/portal/feed')
    })
})
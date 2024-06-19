/// <reference types="cypress" />

describe("1.02- Sign in with Google",
    function () {
    it('Verify user can sign in via Google SSO with valid google email address and password', () => {

      cy.fixture("user").then((data)=>{
        logIntoGoogle(data.email, data.password)
      })
        
        });
    });


function logIntoGoogle(username: string, password: string) {

    Cypress.on(
        'uncaught:exception',
        (err) =>
          !err.message.includes('ResizeObserver loop') &&
          !err.message.includes('Error in protected function')
      )

    cy.visit('/sign-in')
    cy.get('a[href="https://api-uat.v2.catalyser.com/v2/auth/sso/google"]').click()

    cy.origin(
      'https://accounts.google.com',
      {
        args: {
          username,
          password,
        },
      },
      ({ username, password }) => {
        Cypress.on(
          'uncaught:exception',
          (err) =>
            !err.message.includes('ResizeObserver loop') &&
            !err.message.includes('Error in protected function')
        )

        cy.get('input[type="email"]').type(username, {
          log: false,
        })
      cy.contains('Next').click().wait(4000)
      cy.get('[type="password"]').type(password, {
          log: false,
        })
      cy.contains('Next').click().wait(4000)
      cy.contains('Continue').click().wait(4000)
      }
    )
    
    cy.url().should('include', '/portal')
}
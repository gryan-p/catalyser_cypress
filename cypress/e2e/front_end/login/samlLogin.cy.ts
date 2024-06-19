/// <reference types="cypress" />

describe("Verify user can log in via SAML",
    function () {
    it('Verify user can sign in via SAML', () => {

      cy.fixture("user").then((data)=>{
        logviaSAML(data.samlEmail,data.samlPassword)
      })
      
      cy.url().should('include', '/portal')
        
        });
    });


function logviaSAML(username: string, password: string) {

  cy.visit('/sign-in').wait(1000)
  cy.visit('https://api-uat.v2.catalyser.com/v2/auth/saml/companydemo')

  cy.origin(
    'login.microsoftonline.com',
    {
      args: {
        username,
        password,
      },
    },
    ({ username, password }) => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

      cy.get('input[type="email"]').type(username, {
          log: false,
        })
      cy.get('input[type="submit"]').click()
      cy.get('input[type="password"]').type(password, {
        log: false,
      })
      cy.get('input[type="submit"]').click()
      cy.get('input#idBtn_Back[type="button"]').click()
      cy.wait(5000)
    }
  )
}
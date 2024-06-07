Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('/sign-in')
        
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('button[type="submit"]').click()
       
        cy.get('a[href="/portal"]').should('exist').click()
        cy.url().should('eq', 'https://uat.v2.catalyser.com/portal')
    },{
        cacheAcrossSpecs: true
    })
    
})


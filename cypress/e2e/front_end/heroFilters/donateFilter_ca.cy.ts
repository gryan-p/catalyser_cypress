/// <reference types="cypress" />

describe('Verify that user can search by Cause Area', () => {

    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        cy.visit('/portal')

        /* Check landing page */ 
        cy.get('span').contains('Let’s make a').should('exist')
        cy.get('span').contains('difference').should('exist')
        cy.get('button#hero-filter-donate-tab').contains('Donate').should('exist')
        cy.get('button#hero-filter-volunteer-tab').contains('Volunteer').should('exist')
        cy.get('button#hero-filter-donate-tab').click()
    })

    let countOfElements = 0;

    it('Check filter contents', function() {
        cy.log('=====Check Cause Area filter=====')
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Cause that matters').should('exist')
        cy.get('ul > li > div >span').contains('Advocacy').should('exist')
        cy.get('ul > li > div >span').contains('Animals').should('exist')
        cy.get('ul > li > div >span').contains('Children').should('exist')
        cy.get('ul > li > div >span').contains('Disabilities').should('exist')
        cy.get('ul > li > div >span').contains('Homelessness').should('exist')
        cy.get('ul > li > div >span').contains('Disaster Recovery').should('exist')
        cy.get('ul > li > div >span').contains('LGBTQ').should('exist').click()

        cy.get('button').contains('Search').should('exist')
    })

    it('Filter Advocacy', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Advocacy').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        cy.get('a > span.mui-11oee64').then((list) => { 
            countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            for (let i = 0; i < countOfElements; i++) {
                cy.get('a > span.mui-11oee64').eq(i)
                .parent()
                .parent()
                .within(() => {
                    cy.get('div > div > ul li > a').contains('Advocacy').should('exist')
                })
            }
        })
        
    })

    it('Filter Animals', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Animals').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        cy.get('a > span.mui-11oee64').then((list) => { 
            countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            for (let i = 0; i < countOfElements; i++) {
                cy.get('a > span.mui-11oee64').eq(i)
                .parent()
                .parent()
                .within(() => {
                    cy.get('div > div > ul li > a').contains('Animals').should('exist')
                })
            }
        })
    })
   
    it('Filter Children', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Children').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        cy.get('a > span.mui-11oee64').then((list) => { 
            countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            for (let i = 0; i < countOfElements; i++) {
                cy.get('a > span.mui-11oee64').eq(i)
                .parent()
                .parent()
                .within(() => {
                    cy.get('div > div > ul li > a').contains('Children').should('exist')
                })
            }
        })
    })

    it('Filter Disabilities', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Disabilities').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        cy.get('a > span.mui-11oee64').then((list) => { 
            countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            for (let i = 0; i < countOfElements; i++) {
                cy.get('a > span.mui-11oee64').eq(i)
                .parent()
                .parent()
                .within(() => {
                    cy.get('div > div > ul li > a').contains('Disabilities').should('exist')
                })
            }
        })
    })

    it('Filter Homelessness', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Homelessness').click()
        cy.get('button').contains('Search').click()
        cy.wait(5000)
       
        cy.get('a > span.mui-11oee64').then((list) => { 
            countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            for (let i = 0; i < countOfElements; i++) {
                cy.get('a > span.mui-11oee64').eq(i)
                .parent()
                .parent()
                .within(() => {
                    cy.get('div > div > ul li > a').contains('Homelessness').should('exist')
                })
            }
        })
    })

    it('Filter Disaster Recovery', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Disaster Recovery').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)

        cy.get('a > span.mui-11oee64').then((list) => { 
            countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            for (let i = 0; i < countOfElements; i++) {
                cy.get('a > span.mui-11oee64').eq(i)
                .parent()
                .parent()
                .within(() => {
                    cy.get('div > div > ul li > a').contains('Disaster Recovery').should('exist')
                })
            }
        })
    })

    it('Filter LGBTQ', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('LGBTQ').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        cy.get('a > span.mui-11oee64').then((list) => { 
            countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            for (let i = 0; i < countOfElements; i++) {
                cy.get('a > span.mui-11oee64').eq(i)
                .parent()
                .parent()
                .within(() => {
                    cy.get('div > div > ul li > a').contains('LGBTQ').should('exist')
                })
            }
        })
    })

})
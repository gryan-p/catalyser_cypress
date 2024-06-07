/// <reference types="cypress" />

describe('Verify that user can search by date', () => {

    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        cy.visit('/portal')
        cy.viewport(1536, 960)

        /* Check landing page */ 
        cy.get('span').contains('Let’s make a').should('exist')
        cy.get('span').contains('difference').should('exist')
        cy.get('button#hero-filter-donate-tab').contains('Donate').should('exist')
        cy.get('button#hero-filter-volunteer-tab').contains('Volunteer').should('exist')
        cy.get('button#hero-filter-volunteer-tab').click()
        cy.get('input[placeholder="From Date | To Date"]').should('exist')
    })

    let countOfElements = 0;

    it('Filter test 1 - May 2024', function() {
        cy.get('input[placeholder="From Date | To Date"]').click()
        cy.get('.w-full >div >div > div > button').eq(0).click()
        cy.get('button').contains('May').click().wait(2000)

        cy.get('button[data-test="current"]').contains('1').click()
        cy.get('button[data-test="current"]').contains('30').click().click()
        cy.get('button').contains('Search').click()
        
        /***************Verification****************/
        cy.url().should('include', 'eventType=volunteering')
        cy.url().should('include', 'startDate=2024-05-01')
        cy.url().should('include', 'endDate=2024-05-30')

        /* Temporary Verification - need to change once we will be able to add events*/
        cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea PH - PH Jan 22 V3').should('exist')
        cy.get('a > span.mui-11oee64').contains('Volunteering AU 1').should('exist')
        cy.get('a > span.mui-11oee64').contains('Caring for the Community - CA').should('exist')
    })

    it('Filter test 2 - June-July 2023', function() {
        cy.get('input[placeholder="From Date | To Date"]').click()

        cy.get('.w-full >div >div > div > button').eq(0).click()
        cy.get('button').contains('June').click().wait(2000)
        cy.get('.w-full >div >div > div > button').eq(1).click()
        cy.get('path[stroke-linecap="round"]').eq(1).click()
        cy.get('button').contains('2023').click().wait(2000)

        cy.get('.w-full >div >div > div > button').eq(2).click()
        cy.get('button').contains('Jul').click().wait(2000)
        cy.get('.w-full >div >div > div > button').eq(3).click()
        cy.get('path[stroke-linecap="round"]').eq(3).click().wait(5000)
        cy.get('div.mt-2 >button').contains('2023').click().wait(2000)

        cy.get('button[data-test="current"]').contains('1').click()
        cy.get('div.my-1 > button[data-test="current"]').contains('31').click().click()
        cy.get('button').contains('Search').click()
        
        /***************Verification****************/
        cy.url().should('include', 'eventType=volunteering')
        cy.url().should('include', 'startDate=2023-06-01')
        cy.url().should('include', 'endDate=2023-07-31')

        /* Temporary Verification - need to change once we will be able to add events*/
        cy.get('a > span.mui-11oee64').contains('Community Day Food Bank').should('exist')
        cy.get('a > span.mui-11oee64').contains('Bring a smile to a sick child').should('exist')
    })

})
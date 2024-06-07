/// <reference types="cypress" />

describe('VVerify that user can filter events with different combination', () => {

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
    })

    it('Filter Advocacy, Date, Australia', function() {

        /***** Input Cause Area *****/
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Advocacy').click()

        /***** Input Date *****/
        cy.get('input[placeholder="From Date | To Date"]').click()
        cy.get('.w-full >div >div > div > button').eq(0).click()
        cy.get('button').contains('Oct').click().wait(2000)
        cy.get('button[data-test="current"]').contains('1').click()
        cy.get('button[data-test="current"]').contains('31').click().click()

        /***** Input Location *****/
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Australia').click({force: true})

        cy.get('button').contains('Search').click()

        /***************Verification****************/
        cy.url().should('include', 'eventType=volunteering')
        cy.url().should('include', 'cause=advocacy')
        cy.url().should('include', 'country=AU')
        cy.url().should('include', 'startDate=2024-10-01')
        cy.url().should('include', 'endDate=2024-10-31')
        cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
        cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
        cy.get('li.splide__slide > div > span').contains('Children').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
        cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
        cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

        /* Temporary Verification - need to change once we will be able to add events*/
        cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea PH - Jan 22 V5').should('exist')
    })


    /* Will add more Test when data is available */

})
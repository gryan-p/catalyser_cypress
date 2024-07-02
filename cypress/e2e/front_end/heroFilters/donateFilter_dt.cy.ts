/// <reference types="cypress" />

describe('Verify that user can search by Donation Type', () => {

    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        cy.visit('/portal/feed')

        /* Check landing page */ 
        cy.get('span').contains('Let’s make a').should('exist')
        cy.get('span').contains('difference').should('exist')
        cy.get('button#hero-filter-donate-tab').contains('Donate').should('exist')
        cy.get('button#hero-filter-volunteer-tab').contains('Volunteer').should('exist')
        cy.get('button#hero-filter-donate-tab').click()
    })

    // let countOfElements = 0;

    it('Check filter contents', function() {
        cy.log('=====Check Donation Type filter=====')
        cy.get('input#donation-type-button').click()
        cy.get('ul > li').contains('All donations types').should('exist')
        cy.get('ul > li').contains('Donation').should('exist')
        cy.get('ul > li').contains('Support a colleague').should('exist')
        cy.get('button').contains('Search').should('exist')

    })

    it('Filter Donation', function() {
        cy.get('input#donation-type-button').click()
        cy.get('ul > li').contains('Donation').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        /***************Verification****************/
        cy.url().should('include', 'eventType=donation')
        cy.url().should('include', 'donation=1')
        cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
        cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
        cy.get('li.splide__slide > div > span').contains('Children').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
        cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
        cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

       /* Temporary Verification - need to change once we will be able to add events*/
       cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea V3').should('exist')
       cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea (China 2)').should('exist')
       cy.get('a > span.mui-11oee64').contains('Granuloma of left lacrimal passage').should('exist')
       cy.get('a > span.mui-11oee64').contains('Unsp soft tissue disorder related to use/pressure of ank/ft').should('exist')
        
    })

    it('Filter Support a colleague', function() {
        cy.get('input#donation-type-button').click()
        cy.get('ul > li').contains('Support a colleague').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        /***************Verification****************/
        cy.url().should('include', 'eventType=donation')
        cy.url().should('include', 'donation=3')
        cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
        cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
        cy.get('li.splide__slide > div > span').contains('Children').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
        cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
        cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')
        
        /* Temporary Verification - need to change once we will be able to add events*/
        cy.get('a > span.mui-11oee64').contains('Test - PH Jan 22').should('exist')
        cy.get('a > span.mui-11oee64').contains('Jo-Anne Fundraiser Test June 24').should('exist')

        
    })
})
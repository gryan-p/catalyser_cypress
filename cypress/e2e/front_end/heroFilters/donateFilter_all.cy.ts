/// <reference types="cypress" />

describe('Verify that user can filter events with different combination', () => {

    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        // cy.visit('/')

        /* Check landing page */ 
        cy.get('span').contains('Let’s make a').should('exist')
        cy.get('span').contains('difference').should('exist')
        cy.get('button#hero-filter-donate-tab').contains('Donate').should('exist')
        cy.get('button#hero-filter-volunteer-tab').contains('Volunteer').should('exist')
        cy.get('button#hero-filter-donate-tab').click()
    })

    // let countOfElements = 0;

    it('Filter Cause Area = Advocacy, Donation Type = Donation, Location = Australia', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Advocacy').click()
        cy.get('input#donation-type-button').click()
        cy.get('ul > li').contains('Donation').click()
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Australia').click({force: true})
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        /***************Verification****************/
        cy.url().should('include', 'eventType=donation')
        cy.url().should('include', 'cause=advocacy')
        cy.url().should('include', 'donation=1')
        cy.url().should('include', 'country=AU')
        cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
        cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
        cy.get('li.splide__slide > div > span').contains('Children').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
        cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
        cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

       /* Temporary Verification - need to change once we will be able to add events*/
       cy.get('a > span.mui-11oee64').contains('Plant Trees - Australia - March 5 - Advocacy').should('exist')
       cy.get('a > span.mui-11oee64').contains('Abnormal immunolog findings in specimens from resp org/thrx').should('exist')
       cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v1').should('exist')
        
    })

    it('Filter Cause Area = Advocacy, Donation Type = Donation, Location = China', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Advocacy').click()
        cy.get('input#donation-type-button').click()
        cy.get('ul > li').contains('Donation').click()
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('China').click({force: true})
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        /***************Verification****************/
        cy.url().should('include', 'eventType=donation')
        cy.url().should('include', 'cause=advocacy')
        cy.url().should('include', 'donation=1')
        cy.url().should('include', 'country=CN')
        cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
        cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
        cy.get('li.splide__slide > div > span').contains('Children').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
        cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
        cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

       /* Temporary Verification - need to change once we will be able to add events*/
       cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea (China)').should('exist')
       cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea (China 2)').should('exist')
        
    })

    it('Filter Cause Area = Children, Donation Type = Donation, Location = Canada', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Children').click()
        cy.get('input#donation-type-button').click()
        cy.get('ul > li').contains('Donation').click()
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Canada').click({force: true})
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        /***************Verification****************/
        cy.url().should('include', 'eventType=donation')
        cy.url().should('include', 'cause=children')
        cy.url().should('include', 'donation=1')
        cy.url().should('include', 'country=CA')
        cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
        cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
        cy.get('li.splide__slide > div > span').contains('Children').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
        cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
        cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

       /* Temporary Verification - need to change once we will be able to add events*/
       cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 15').should('exist')
       cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea CA').should('exist')
       cy.get('a > span.mui-11oee64').contains('Plant Trees - Feb 22').should('exist')
        
    })

    it('Filter Cause Area = Disaster Recovery, Donation Type = Support a colleague, Location = Philippines', function() {
        cy.get('input#cause-area-button').click()
        cy.get('ul > li > div >span').contains('Disaster Recovery').click()
        cy.get('input#donation-type-button').click()
        cy.get('ul > li').contains('Support a colleague').click()
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Philippines').click({force: true})
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
        /***************Verification****************/
        cy.url().should('include', 'eventType=donation')
        cy.url().should('include', 'cause=disasterRecovery')
        cy.url().should('include', 'donation=3')
        cy.url().should('include', 'country=PH')
        cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
        cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
        cy.get('li.splide__slide > div > span').contains('Children').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
        cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
        cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
        cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

       /* Temporary Verification - need to change once we will be able to add events*/
       cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea PH - PH Jan 22').should('exist')
        
    })
    
})
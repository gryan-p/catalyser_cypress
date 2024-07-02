/// <reference types="cypress" />

describe('Verify that user can search by Location', () => {

    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        cy.visit('/portal/feed')
        cy.viewport(1536, 960)

        /* Check landing page */ 
        cy.get('span').contains('Let’s make a').should('exist')
        cy.get('span').contains('difference').should('exist')
        cy.get('button#hero-filter-donate-tab').contains('Donate').should('exist')
        cy.get('button#hero-filter-volunteer-tab').contains('Volunteer').should('exist')
        cy.get('button#hero-filter-donate-tab').click()
    })

    // let countOfElements = 0;

    it('Check filter contents', function() {
        cy.log('=====Nonprofit Location filter=====')
        cy.get('input#location-button').click({force: true})
        cy.get('ul > li').contains('All Location').should('exist')
        cy.get('ul > li').contains('Australia').should('exist')
        cy.get('ul > li').contains('Canada').should('exist')
        cy.get('ul > li').contains('China').should('exist')
        cy.get('ul > li').contains('Germany').should('exist')
        cy.get('ul > li').contains('United Kingdom').should('exist')
        cy.get('ul > li').contains('Hong Kong SAR China').should('exist')
        cy.get('ul > li').contains('New Zealand').should('exist')
        cy.get('ul > li').contains('Philippines').should('exist')
        cy.get('ul > li').contains('Singapore').should('exist')
        cy.get('ul > li').contains('United States').should('exist')

        cy.get('button').contains('Search').should('exist')
    })

    it('Filter Australia', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Australia').click({force: true})
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')
 
        /* Temporary Verification - need to change once we will be able to add events*/
        cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea V3').should('exist')
        cy.get('a > span.mui-11oee64').contains('Granuloma of left lacrimal passage').should('exist')
    })

    it('Filter Canada', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Canada').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

         /* Temporary Verification - need to change once we will be able to add events*/
        cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 20 v1').should('exist')
        cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v2').should('exist')
    })

    it('Filter China', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('China').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
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

    it('Filter Germany', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Germany').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

         /* Temporary Verification - need to change once we will be able to add events*/
        // cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 20 v1').should('exist')
        // cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v2').should('exist')
        cy.get('span').contains('Not found any events').should('exist')
    })

    it('Filter United Kingdom', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('United Kingdom').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

        /* Temporary Verification - need to change once we will be able to add events*/
        // cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 20 v1').should('exist')
        // cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v2').should('exist')
        cy.get('span').contains('Not found any events').should('exist')
    })

    it('Filter Hong Kong SAR China', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Hong Kong SAR China').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

         /* Temporary Verification - need to change once we will be able to add events*/
        // cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 20 v1').should('exist')
        // cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v2').should('exist')
        cy.get('span').contains('Not found any events').should('exist')
    })

    it('Filter New Zealand', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('New Zealand').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

          /* Temporary Verification - need to change once we will be able to add events*/
        // cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 20 v1').should('exist')
        // cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v2').should('exist')
        cy.get('span').contains('Not found any events').should('exist')
    })

    it('Filter Philippines', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Philippines').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

         /* Temporary Verification - need to change once we will be able to add events*/
        cy.get('a > span.mui-11oee64').contains('Biggest Morning Tea PH').should('exist')
    })

    it('Filter Singapore', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('Singapore').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

         /* Temporary Verification - need to change once we will be able to add events*/
        // cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 20 v1').should('exist')
        // cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v2').should('exist')
        cy.get('span').contains('Not found any events').should('exist')
    })

    it('Filter United States', function() {
        cy.get('input#location-button').click()
        cy.get('ul[aria-labelledby="location-button"] > li').contains('United States').click()
        cy.get('button').contains('Search').click()
        cy.wait(3000)
       
         /***************Verification****************/
         cy.get('li.splide__slide > div > span').contains('Advocacy').should('exist')
         cy.get('li.splide__slide > div > span').contains('Animals').should('exist')
         cy.get('li.splide__slide > div > span').contains('Children').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disabilities').should('exist')
         cy.get('li.splide__slide > div > span').contains('Homelessness').should('exist')
         cy.get('li.splide__slide > div > span').contains('Disaster Recovery').should('exist')
         cy.get('li.splide__slide > div > span').contains('LGBTQ').should('exist')

         /* Temporary Verification - need to change once we will be able to add events*/
        // cy.get('a > span.mui-11oee64').contains('Caring for the Community - Feb 20 v1').should('exist')
        // cy.get('a > span.mui-11oee64').contains('Donate to grow native forests and climate hope - April 22 v2').should('exist')
        cy.get('span').contains('Not found any events').should('exist')
    })
})
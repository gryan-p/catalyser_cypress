/// <reference types="cypress" />

describe('Test Automation Script for Global Search', () => {

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
    })
/**************************************************************************************/
    it('1. Verify result when clicking the search box', () => {
        cy.get('div.MuiDialog-container.MuiDialog-scrollPaper.mui-ekeie0').should('not.exist')  //check if the search slider is not yet displayed
        cy.get('#global-search').click()
        cy.get('div.MuiDialog-container.MuiDialog-scrollPaper.mui-ekeie0').should('exist')  //check if the search slider displayed

        cy.get('input#global-search.MuiInputBase-inputAdornedEnd').should('exist')
        cy.get('button').contains('Cancel').should('exist')
        cy.get('span').contains('Recent Searches').should('exist')
        cy.get('span').contains('Trending Searches').should('exist')
        cy.get('span').contains('Browse by Causes').should('exist')
    })

/**************************************************************************************/
    it('2. Verify that user can close the slider by clicking cancel and user is taken on the current page', () => {

        cy.get('#global-search').click()
        cy.get('div.MuiDialog-container.MuiDialog-scrollPaper.mui-ekeie0').should('exist')  //check if the search slider displayed
        cy.get('button').contains('Cancel').should('exist')
        cy.get('span').contains('Recent Searches').should('exist')
        cy.get('span').contains('Trending Searches').should('exist')
        cy.get('span').contains('Browse by Causes').should('exist')

        cy.get('button').contains('Cancel').click()
        cy.wait(2000)
        cy.get('div.MuiDialog-container.MuiDialog-scrollPaper.mui-ekeie0').should('not.exist')  //check if the search slider displayed


    })

/**************************************************************************************/
    it('3. Verify result when searching keyword - multiple result', () => {
        cy.get('span').contains('Donation Opportunities').should('not.exist')
        cy.get('span').contains(/^Volunteering Opportunities$/).should('not.exist')

        cy.get('#global-search').click()
        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type('morning tea')

        cy.get('span.mui-seinil')
            .contains('Donation Campaigns')
            .parent()
            .within(() => {
                cy.get('div > a').contains('Biggest Morning Tea V3').should('exist')
                cy.get('div > a').contains('Biggest Morning Tea (China 2)').should('exist')
                cy.get('div > a').contains('Biggest Morning Tea PH - PH Jan 22 V2').should('exist')
            })

        cy.get('span.mui-seinil')
            .contains('Volunteering Opportunities')
            .parent()
            .within(() => {
                cy.get('div > a').contains('Biggest Morning Tea PH - Jan 22 V6').should('exist')
                cy.get('div > a').contains('Biggest Morning Tea PH - PH Jan 22 V3').should('exist')
                cy.get('div > a').contains('Biggest Morning Tea PH - PH Jan 22 V4').should('exist')
            })

        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type('{enter}')

        cy.wait(3000)
        cy.get('span').contains('Donation Opportunities').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').contains('Biggest Morning Tea V3').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').contains('Biggest Morning Tea (China 2)').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').contains('Biggest Morning Tea PH - PH Jan 22 V2').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').contains('Biggest Morning Tea (China)').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').contains('Biggest Morning Tea').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').contains('Biggest Morning Tea PH - PH Jan 22').should('exist')
    
        cy.get('span').contains('Volunteering Opportunities').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').contains('Biggest Morning Tea PH - Jan 22 V6').should('exist')
        cy.get('.splide__slide  > a > div > div.MuiStack-root.mui-kxm401 > a > span').contains('Biggest Morning Tea PH - PH Jan 22 V3').should('exist')
        cy.get('.splide__slide  > a > div > div.MuiStack-root.mui-kxm401 > a > span').contains('Biggest Morning Tea PH - PH Jan 22 V4').should('exist')
        cy.get('.splide__slide  > a > div > div.MuiStack-root.mui-kxm401 > a > span').contains('Biggest Morning Tea PH - Jan 22 V7').should('exist')
        cy.get('.splide__slide  > a > div > div.MuiStack-root.mui-kxm401 > a > span').contains('Biggest Morning Tea PH - Jan 22 V5').should('exist')
        
    })

/**************************************************************************************/
    it('4. Verify result when searching keyword - single result', () => {
        cy.get('span').contains('Donation Opportunities').should('not.exist')
        cy.get('span').contains(/^Volunteering Opportunities$/).should('not.exist')

        cy.get('#global-search').click()
        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type('learning for life program')
            
        cy.get('span.mui-seinil')
            .contains('Donation Campaigns')
            .parent()
            .within(() => {
                cy.get('div > a').contains('Learning for Life program').should('exist')
            })

        cy.get('span.mui-seinil')
            .contains('Volunteering Opportunities')
            .parent()
            .within(() => {
                cy.get('div > a').contains('Appeal to educate and empower Aussie kids').should('exist')
            })

        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type('{enter}')

        cy.wait(3000)
        cy.get('span').contains('Donation Opportunities').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').contains('Learning for Life program').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(2).should('not.exist')
    
        cy.get('span').contains('Volunteering Opportunities').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').contains('Appeal to educate and empower Aussie kids').should('exist')
        cy.get('.splide__slide  > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(2).should('not.exist')
    })
    
/**************************************************************************************/
    it('5. Search based on recent search', () => {
        cy.get('span').contains('Donation Opportunities').should('not.exist')
        cy.get('span').contains(/^Volunteering Opportunities$/).should('not.exist')

        cy.get('#global-search').click()
        cy.get('span').contains('Recent Searches')
            .parent()
            .within(() => {
                cy.wait(3000)
                // cy.get('div > div').eq(0).click()
                cy.get('div > div').contains('morning tea').click()
            })

        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .invoke('val')
            .then((myValue:any) => {
                cy.log(myValue)
                cy.get('span.mui-seinil')
                    .contains('Donation Campaigns')
                    .parent()
                    .within(() => {
                        cy.get('div > a').contains(myValue, { matchCase: false }).should('exist')
                        /* depending on the search there are cases that the search result does 
                           not contain the exact keyword match that will result to an error
                        */
                    })

                cy.get('span.mui-seinil')
                    .contains('Volunteering Opportunities')
                    .parent()
                    .within(() => {
                        cy.get('div > a').contains(myValue, { matchCase: false }).should('exist')
                        /* depending on the search there are cases that the search result does 
                           not contain the exact keyword match that will result to an error
                        */
                    })
                
                cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
                    .type('{enter}')
        
                cy.wait(3000)
                cy.get('span').contains('Donation Opportunities').should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(1).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(2).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(3).contains(myValue, { matchCase: false }).should('exist')
            
                cy.get('span').contains('Volunteering Opportunities').should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(1).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(2).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(3).contains(myValue, { matchCase: false }).should('exist')
         
        })

    })

/**************************************************************************************/
    it('6. Search based on trending search', () => {
        cy.get('span').contains('Donation Opportunities').should('not.exist')
        cy.get('span').contains(/^Volunteering Opportunities$/).should('not.exist')

        cy.get('#global-search').click()
        cy.get('span').contains('Trending Searches')
            .parent()
            .within(() => {
                cy.wait(3000)
                cy.get('div > div').eq(0).click()
                // cy.get('div > div').contains('morning tea').click()
            })

        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .invoke('val')
            .then((myValue:any) => {
                cy.log(myValue)
                cy.get('span.mui-seinil')
                    .contains('Donation Campaigns')
                    .parent()
                    .within(() => {
                        cy.get('div > a').contains(myValue, { matchCase: false }).should('exist')
                        /* depending on the search there are cases that the search result does 
                           not contain the exact keyword match that will result to an error
                        */
                    })

                cy.get('span.mui-seinil')
                    .contains('Volunteering Opportunities')
                    .parent()
                    .within(() => {
                        cy.get('div > a').contains(myValue, { matchCase: false }).should('exist')
                        /* depending on the search there are cases that the search result does 
                           not contain the exact keyword match that will result to an error
                        */
                    })
                
                cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
                    .type('{enter}')
        
                cy.wait(3000)
                cy.get('span').contains('Donation Opportunities').should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(1).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(2).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(3).contains(myValue, { matchCase: false }).should('exist')
            
                cy.get('span').contains('Volunteering Opportunities').should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(1).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(2).contains(myValue, { matchCase: false }).should('exist')
                cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(3).contains(myValue, { matchCase: false }).should('exist')
         
        })

    })

/**************************************************************************************/
    it('7. Verify result when searching keyword - with 0 result', () => {
        cy.get('span').contains('Donation Opportunities').should('not.exist')
        cy.get('span').contains(/^Volunteering Opportunities$/).should('not.exist')

        cy.get('#global-search').click()
        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type('random word')
            
        cy.get('span.mui-seinil')
            .contains('Donation Campaigns')
            .should('not.exist')

        cy.get('span.mui-seinil')
            .contains('Volunteering Opportunities')
            .should('not.exist')

        cy.get('a')
            .contains('See all results for “random word”')
            .should('exist')

        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type('{enter}')

        cy.get('span')
            .contains('0 unique data for ')
            .should('exist')

        cy.get('span')
            .contains('“random word”')
            .should('exist')
    })

/**************************************************************************************/
    it('8. Categories and events that match the recent search should be displayed in the slider', () => {   //CAT2-425, CAT2-433
        cy.get('span').contains('Donation Opportunities').should('not.exist')
        cy.get('span').contains(/^Volunteering Opportunities$/).should('not.exist')

        cy.get('#global-search').click()

        const srchVal = 'home'

        cy.get('span').contains('Causes').should('not.exist')
        cy.get('span').contains('Donation Opportunities').should('not.exist')
        cy.get('span').contains(/^Volunteering Opportunities$/).should('not.exist')
        cy.get('span').contains('Non Profit').should('not.exist')

        /***************Search using a keyword and check the result*********************/
        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type(srchVal) /* search keyword should have all exisiting result for Cause, 
                            Donation Opportunities, Volunteering Opportunities 
                            and Non Profit*/

        cy.get('span')
            .contains('Causes')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })

        cy.get('span')
            .contains('Donation Campaigns')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })

        cy.get('span.mui-seinil')
            .contains('Volunteering Opportunities')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })

        cy.get('span.mui-seinil')
            .contains('Non Profits')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })

        cy.get('div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input')
            .type('{enter}')

        cy.wait(3000)
        cy.get('span').contains('Causes').should('exist')
        cy.get('span.mui-1i895fp').eq(0).should('exist')

        cy.get('span').contains('Donation Opportunities').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-z8khg1 > a > span').eq(0).should('exist')
       
        cy.get('span').contains('Volunteering Opportunities').should('exist')
        cy.get('.splide__slide > a > div > div.MuiStack-root.mui-kxm401 > a > span').eq(0).should('exist')
        
        cy.get('span').contains('Non Profit').should('exist')
        cy.get('div.MuiStack-root.mui-1ylu0bo > a > span').eq(0).should('exist')

        /***************Click the search box again and check if the keyword is retained and the result is the same*********************/
        cy.get('#global-search')
            .click()
        
        cy.get("div.mui-126xj0f > div.mui-ekeie0 > div > div > div.mui-1athhl1 > label > div.mui-1srhvr8 > input").should('have.value', srchVal)

        cy.wait(3000)
        cy.get('div[role="dialog"] > div > div.mui-14rxy9c > div > div:nth-child(1) >span')
            .contains('Causes')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })

        cy.get('div[role="dialog"] > div > div.mui-14rxy9c > div > div:nth-child(2) >span')
            .contains('Donation Campaigns')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })

        cy.get('div[role="dialog"] > div > div.mui-14rxy9c > div > div:nth-child(3) >span')
            .contains('Volunteering Opportunities')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })

        cy.get('div[role="dialog"] > div > div.mui-14rxy9c > div > div:nth-child(4) >span')
            .contains('Non Profits')
            .parent()
            .within(() => {
                cy.get('div > a').eq(0).should('exist')
            })
    })
})

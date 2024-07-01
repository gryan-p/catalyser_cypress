// <reference types="cypress" />

describe('Add a New Featured Collection under the Homepage', () => {
    /**
     * 1.01 Verify that admin can access + Add New Featured Collection button in the Featured Collection dashboard page
     * 1.02 Verify that Create a New Featured Collection form is showing all fields correctly and match the design requirements
     * 1.25 Verify that confirmation message stating that collection is successfully saved is displayed after entering all valid inputs and clicking save 
     * 1.26 Verify there are no errors on page after saving a new featured collection
     * 1.27 Verify that collection is successfully saved in the featured collection page after all valid inputs
     * 1.28 Verify that collection is displayed under respective visibillity tab after saving
     * 1.29 Verify that all details in the configuration page match the selection made when collection was added
     */
    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        cy.visit('/employer/featured-collection')
        cy.viewport(1536, 1500)
    })

    const title = 'span.MuiTypography-title4'
    const add_button = 'button.mui-uzln5v'
    const active_button = '#active'

    const a = Math.floor(Math.random() * (1000-1) + 1);
    const feature_collection_name = 'Auto test - Featured Collection ' + a.toString();

    it('Add New Feature Collection', function() {
        cy.log('Click "Add New Featured Collection" button')
        cy.get(add_button).click()

        // Overivew
        cy.log('Enter Collection name')
        cy.get('#name').type(feature_collection_name)  //Enter Collection name

        //Visibility
        cy.log('Select Homepage')
        cy.get('input#Homepage')
            .parent()
            .within(() => {
                cy.log('Verify that visibility option is Home page checked by default')
                cy.get('svg > path[fill-rule="evenodd"]').should('exist')  // check if Homepage is clicked
            })

        //Click Search Office Location
        cy.log('Click Search Office Location')
        cy.get(title)
            .contains('Display')
            .parent()
            .within(() => {
                cy.get('input[placeholder="Search…"]').click()  
                cy.log('Select the first office')
                cy.get('input#user-checkbox-1').click()  
            })

        //Select Location
        cy.log('Select Location - first check box')
        cy.get(title)
            .contains('Display')
            .parent()
            .within(() => {
                cy.get('input[placeholder="Search…"]').click()  
                cy.get('input#user-checkbox-1').click().click()
                cy.get('button').contains('Apply').click()  
            })

        //Select Team
        cy.log('Select Team - "For Automation Test"')
        cy.get(title)
            .contains('Team')
            .parent()
            .within(() => {
                cy.get('input[placeholder="Search…"]').click()  
                cy.get('label > span').contains('For Automation Test').click()  
            })

        
        const d = new Date();
        let day = d.getDay();
        
        if(day != 1){
            //Select start date
            cy.log('Select visibility start date')
            cy.get('label')
            .contains('Visibility start date')
            .parent()
            .within(() => {
                cy.get('button.mui-fe5dlg > svg').click()
            })
            cy.get('button[name="day"]').contains(/^1$/).click()

        }
        cy.get('input#basic-button').eq(0).invoke('attr', 'value').as('startdate') // get the set date that will be used later

        if(day != 28){
            //Select end date
            cy.log('Select visibility end date')
            cy.get('label')
                .contains('Visibility end date')
                .parent()
                .within(() => {
                    cy.get('button.mui-fe5dlg > svg').click()
                })
            cy.get('button[name="day"]').contains(/^28$/).click()
        }

        cy.get('input#basic-button').eq(1).invoke('attr', 'value').as('enddate') // get the set date that will be used later

        //Select start time
        cy.log('Select visibility start time')
        cy.get('label')
            .contains('Visibility start time')
            .parent()
            .within(() => {
                cy.get('svg').click()
            })
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').eq(0).contains(/^00$/).click()
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').eq(1).contains(/^00$/).click()

        //Select end time
        cy.log('Select visibility end time')
        cy.get('label')
            .contains('Visibility end time')
            .parent()
            .within(() => {
                cy.get('svg').click()
            })
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').eq(0).contains(/^23$/).click()
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').eq(1).contains(/^59$/).click()

        /* Click Save button */
        cy.log('Click Save button')
        cy.get('button[type="submit"]').click()

        cy.log('Verify that confirmation message stating that collection is successfully saved is displayed after entering all valid inputs and clicking save')
        cy.get('div.Toastify__toast-body > div').contains('Featured collection successfully created.').should('exist')

        /* Check if returned to Feature Collectins page */
        cy.log('Verify there are no errors on page after saving a new featured collection')
        cy.get(add_button).should('exist')
        cy.get(active_button).should('exist')
        // cy.scrollTo(0, 500)
        cy.get('tbody p.mui-1ddigjq').contains(feature_collection_name, { timeout: 5000 }).should('exist')

        cy.log('Verify that collection is displayed under respective visibillity tab after saving')
        cy.log('Verify that collection is successfully saved in the featured collection page after all valid inputs')
        cy.get('button[aria-selected="true"]').contains('Homepage').should('exist')  // check if the Homepage is active
        cy.get('tbody p.mui-1ddigjq')
            .contains(feature_collection_name)
            .parent()
            .parent()
            .parent()
            .within(() => {
                cy.get('p.mui-12icwl0').contains('Team: For Automation Test').should('exist')
                cy.get('p.mui-12icwl0').contains('Office: Sydney').should('exist')
            })

    })

    it('Verify configuration page', function() {

        cy.log('Verify that all details in the configuration page match the selection made when collection was added')

        cy.get('p').contains(feature_collection_name)
            .parent()
            .parent()
            .parent()
            .within(() => {
                cy.get('td a').contains('Configure').click()
            })
        
        cy.log('Check Feature collection name')
        cy.get('h4').contains(feature_collection_name).should('exist')
        cy.get('span').contains('Visibility Time').should('exist')

        cy.log('Check start date')
        cy.get('label').contains('Visibility start date')
            .parent()
            .within(() => {
                cy.get('input#basic-button')
                .invoke('attr', 'value')
                .should('eq', this.startdate)  
            })

        cy.log('Check end date')
        cy.get('label').contains('Visibility end date')
            .parent()
            .within(() => {
                cy.get('input#basic-button')
                .invoke('attr', 'value')
                .should('eq', this.enddate)  
            })

        cy.log('Check start time')
        cy.get('label').contains('Visibility start time')
            .parent()
            .within(() => {
                cy.get('input#time-picker-input')
                .invoke('attr', 'value')
                .should('eq', '00:00')  
            })

        cy.log('Check end time')
        cy.get('label').contains('Visibility end time')
            .parent()
            .within(() => {
                cy.get('input#time-picker-input')
                .invoke('attr', 'value')
                .should('eq', '23:59')  
            })

        cy.log('Check if Home page is checked')
        cy.get('span').contains('Visible On')
            .should('exist')
            .parent()
            .within(() => {
                cy.get('span').contains('Homepage').should('exist')
                    .parent()
                    .within(() => {
                        cy.get('span.Mui-checked').should('exist')
                    })
            })

        cy.log('Check if there is 1 office location')
        cy.get('span').contains('Office Locations')
            .should('exist')
            .parent()
            .within(() => {
                cy.get('div').contains('1').should('exist')
            })

        cy.log('Check if there the office location is Sydney')
        cy.get('table[aria-label="Active Teams"] ')
            .should('exist')
            .within(() => {
                cy.get('p').contains('Sydney').should('exist')
            })
    })

})

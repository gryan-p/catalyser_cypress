// <reference types="cypress" />

describe('Other Verifications for feature collection', () => {
    /**
         * Verify that the elements are displayed in the Feature Collection page
         * 1.04 Verify that required fields are shown in red borders and display error messages when they are left blank
         * 1.05 Verify that validation error(s) are removed once the required field(s) is/are filled out
         * 1.06 Verify that visibility option is Home page checked by default
         * 1.07 Verify that Office Locations dropdown is showing all offices available
         * 1.08 Verify that admin can search and type in an office location and dropdown will show locations that match the search criteria
         * 1.09 When search term does not match any office location, then verify that no search results found is displayed
         * 1.10 Verify that admin can add multiple office locations
         * 1.11 Verify that office can be removed from the list box
         * 1.13 Verify that archived teams are not showing in the Teams dropdown
         * 1.14 Verify that admin can search and type in an active team and dropdown will show teams that match the search criteria
         * 1.15 When search term does not match any active teams, then verify that no search results found is displayed
         * 1.16 Verify that admin can add multiple teams
         * 1.17 Verify that teams can be removed from the list box
         * 1.22 Verify that user is not able to select a Visibility start date that is greater than the Visibility end date
         * 1.23 Verify that selecting from the date picker automatically dismisses the picker to provide a  user-friendly experience  
         * 1.24 Verify that selecting from the time picker automatically dismisses the picker to provide a  user-friendly experience  
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
    const archive_button = '#archivective'
    const all_offices_dropdown = '#all-offices'
    const all_teams_dropdown = '#all-teams'
    const date_input = '#basic-button'
    const search_box = 'input[placeholder="Search for a Featured Collection…"]'
    const homepage_button ='homepage'
    const microsite_button ='microsite'
    const table ='table.mui-1g2p88f'

    it('Check Featured Collections page existing elements', function() {
        expect(title).to.exist
        expect(add_button).to.exist
        expect(active_button).to.exist
        expect(archive_button).to.exist
        expect(all_offices_dropdown).to.exist
        expect(all_teams_dropdown).to.exist
        expect(date_input).to.exist
        expect(search_box).to.exist
        expect(homepage_button).to.exist
        expect(microsite_button).to.exist
        expect(table).to.exist

        cy.get(add_button).click()
        cy.get(title).contains('Create a New Featured Collection').should('exist')
        cy.get(title).contains('Overview').should('exist')
        cy.get(title).contains('Visibility').should('exist')
        cy.get(title).contains('Display').should('exist')
        cy.get(title).contains('Team').should('exist')
        cy.get(title).contains('Timeline').should('exist')
    })

    it('Verification of Required Fields', function() {
        cy.log('Click "Add New Featured Collection" button')
        cy.get(add_button).click()

        cy.log('******************************************')
        cy.log('Verify that required fields are shown in red borders and display error messages when they are left blank - Collection Name')
        cy.get('button[type="submit"]').click().wait(1000) /* Click Save button */
        cy.get('p#name-helper-text').contains('Collection Name is a required field').should('exist')
        cy.get('div.Mui-error').should('exist')
        
        cy.log('******************************************')
        cy.log('Verify that validation error(s) are removed once the required field(s) is/are filled out')
        cy.get('#name').type("test_name")
        cy.get('p#name-helper-text').should('not.exist')
        cy.get('div.Mui-error').should('not.exist')
    })

    it('Verification of Visibility default', function() {
        cy.log('Click "Add New Featured Collection" button')
        cy.get(add_button).click()

        //Verify visibility default
        cy.log('******************************************')
        cy.log('Verify that visibility option is Home page checked by default')
        cy.get('input#Homepage')
            .parent()
            .within(() => {
                cy.get('svg > path[fill-rule="evenodd"]').should('exist')  // check if Homepage is clicked
            })
        
        cy.log('******************************************')
        cy.log('Verify that visibility Microsite is not checked by default')
        cy.get('input#Microsite')
            .parent()
            .within(() => {
                cy.get('svg > path[fill-rule="evenodd"]').should('not.exist')  // check if Microsite is not clicked
            })
    })

    it('Verification of Search Office Location', function() {
        cy.log('******************************************')
        cy.log('Click "Add New Featured Collection" button')
        cy.get(add_button).click()

         //Click Search Office Location
        cy.log('******************************************')
         cy.log('Verify that Office Locations dropdown result and search')
         cy.get(title)
             .contains('Display')
             .parent()
             .within(() => {
                cy.get('input[placeholder="Search…"]').click()  
                 
                cy.log('******************************************')
                cy.log('Verify that Office Locations dropdown is showing all offices available')
                cy.get('span').contains('Sydney').should('exist')  
                cy.get('span').contains('Brisbane').should('exist')  
                cy.get('span').contains('Melbourne').should('exist')  
 
                cy.log('******************************************')
                cy.log('Verify that admin can search and type in an office location and dropdown will show locations that match the search criteria')
                // Search Sydney
                cy.get('input[placeholder="Search…"]').clear().type('Sydney')  
                cy.get('span').contains('Sydney').should('exist')  
                cy.get('span').contains('Brisbane').should('not.exist')  
                cy.get('span').contains('Melbourne').should('not.exist')  

                // Search Brisbane
                cy.get('input[placeholder="Search…"]').clear().type('Brisbane')  
                cy.get('span').contains('Sydney').should('not.exist')  
                cy.get('span').contains('Brisbane').should('exist')  
                cy.get('span').contains('Melbourne').should('not.exist')  

                // Search Melbourne
                cy.get('input[placeholder="Search…"]').clear().type('Melbourne')  
                cy.get('span').contains('Sydney').should('not.exist')  
                cy.get('span').contains('Brisbane').should('not.exist')  
                cy.get('span').contains('Melbourne').should('exist')  

                // Search Not existing Location
                cy.log('******************************************')
                cy.log('Verify when search term does not match any office location, then verify that no search results found is displayed')
                cy.get('input[placeholder="Search…"]').clear().type('California')  
                cy.get('span').contains('Sydney').should('not.exist')  
                cy.get('span').contains('Brisbane').should('not.exist')  
                cy.get('span').contains('Melbourne').should('not.exist')  
                cy.get('ul > div').contains('Not found any items').should('exist')  

                cy.log('******************************************')
                cy.log('Verify that admin can add multiple office locations')
                cy.get('input[placeholder="Search…"]').clear()
                cy.get('span').contains('Sydney').click()  
                cy.get('span').contains('Brisbane').click()  
                cy.get('span').contains('Melbourne').click() 
                cy.get('button').contains('Apply').click()  
                cy.get('div.InputTag-tag').contains('Sydney').should('exist')
                cy.get('div.InputTag-tag').contains('Brisbane').should('exist')
                cy.get('div.InputTag-tag').contains('Melbourne').should('exist')
                
                cy.log('******************************************')
                cy.log('Verify that office can be removed from the list box')
                cy.get('div.InputTag-tag')
                    .contains('Sydney')
                    .parent()
                    .within(() => {
                        cy.get('button > svg').click()
                    })
                cy.get('div.InputTag-tag')
                    .contains('Brisbane')
                    .parent()
                    .within(() => {
                        cy.get('button > svg').click()
                    }) 
                cy.get('div.InputTag-tag')
                    .contains('Melbourne')
                    .parent()
                    .within(() => {
                        cy.get('button > svg').click()
                    })
                cy.get('div.InputTag-tag').should('not.exist')

                
             })
 
    })

    it('Verification of Teams Dropdown', function() {
        cy.log('******************************************')
        cy.log('Click "Add New Featured Collection" button')
        cy.get(add_button).click()

        //Check Teams search dropdown
        cy.get(title)
            .contains('Team')
            .parent()
            .within(() => {
                cy.log('******************************************')
                cy.log('Verify that archived teams are not showing in the Teams dropdown')
                cy.get('input[placeholder="Search…"]').type('Archived Team for Automation')  
                cy.get('label > span').contains('Archived Team for Automation').should('not.exist')

                cy.log('******************************************')
                cy.log('Verify that admin can search and type in an active team and dropdown will show teams that match the search criteria')
                cy.get('input[placeholder="Search…"]').clear().type('For Automation Test')  
                cy.get('label > span').contains('For Automation Test').should('exist')
  
                cy.log('******************************************')
                cy.log('When search term does not match any active teams, then verify that no search results found is displayed')
                cy.get('input[placeholder="Search…"]').clear().type('not existing team name')  
                cy.get('label > span').contains('not existing team name').should('not.exist')
                cy.get('ul > div').contains('Not found any teams').should('exist')

                cy.log('******************************************')
                cy.log('Verify that admin can add multiple teams')
                cy.get('input[placeholder="Search…"]').clear().click()
                cy.get('ul > li >label').eq(1).click()
                cy.get('input[placeholder="Search…"]').click()
                cy.get('ul > li >label').eq(3).click()
                cy.get('input[placeholder="Search…"]').clear().type('For Automation Test')
                cy.get('label > span').contains('For Automation Test').click()
                cy.get('span.InputTag-tagLabel').eq(0).should('exist')
                cy.get('span.InputTag-tagLabel').eq(1).should('exist')
                cy.get('span.InputTag-tagLabel').eq(2).should('exist')
                cy.get('span.InputTag-tagLabel').eq(2).contains('For Automation Test').should('exist')

                cy.log('******************************************')
                cy.log('Verify that teams can be removed from the list box')
                cy.get('span.InputTag-tagLabel').eq(2).contains('For Automation Test')
                    .parent()
                    .within(() => {
                        cy.get('button > svg').click()
                    })
            })
    })

    it('Verification of Timeline', function() {
        cy.log('******************************************')
        cy.log('Click "Add New Featured Collection" button')
        cy.get(add_button).click()

        cy.log('******************************************')
        cy.log('Verify that user is not able to select a Visibility start date that is greater than the Visibility end date')
        cy.log('Verify that selecting from the date picker automatically dismisses the picker to provide a  user-friendly experience  ')
        cy.get('label')
            .contains('Visibility start date')
            .parent()
            .within(() => {
                cy.get('button.mui-fe5dlg > svg').click()
            })
        cy.get('button[name="day"]').contains(/^8$/).click()  //Select Start date to the 8th of the month
        cy.get('rdp-months').should('not.exist')  //date picker automatically dismisses when date is selected

        cy.get('label')
            .contains('Visibility end date')
            .parent()
            .within(() => {
                cy.get('button.mui-fe5dlg > svg').click()
            })
        cy.log('7th day of te month should be disabled')
        cy.get('button[name="day"]').contains(/^7$/).should('be.disabled')  //the end date 7th of the month souldbe disabled
        cy.get('.rdp-months').should('exist')
        cy.get('button[name="day"]').contains(/^9$/).click()  //Select end date to the 8th of the month
        cy.get('rdp-months').should('not.exist')  //date picker automatically dismisses when date is selected

        cy.log('******************************************')
        cy.log('Verify that selecting from the time picker automatically dismisses the picker to provide a  user-friendly experience')
        cy.get('label')
            .contains('Visibility start time')
            .parent()
            .within(() => {
                cy.get('svg').click()
            })
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').eq(0).contains(/^00$/).click() //Select start time hour
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').eq(1).contains(/^00$/).click() //Select start time minute
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').should('not.exist')

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
        cy.get('ul[aria-labelledby="time-picker-input"] > div > ul').should('not.exist')

    })
})
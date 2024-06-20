/// <reference types="cypress" />

describe('Verify Active Teams page - Public', () => {

    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        cy.visit('/employer/teams')
        cy.viewport(1536, 1500)
    })

    const a = Math.floor(Math.random() * (1000-1) + 1);
    const public_team = 'Auto test - Public Team ' + a.toString();

    it('Get Team Members', function() {
        /**This only gets the curren team members that will be used in other test */
        cy.get('button').contains('Create new team').click()
        cy.get('input[placeholder="Search Colleagues by Name, Email, Department, Office... "]').click()
        cy.get('span.mui-1k322s8').eq(0).invoke('text').as('TeamMember1')
        cy.get('span.mui-1k322s8').eq(1).invoke('text').as('TeamMember2')
        cy.get('span.mui-1k322s8').eq(2).invoke('text').as('TeamMember3')
        cy.get('span.mui-1k322s8').eq(3).invoke('text').as('TeamMember4')
        cy.get('span.mui-1k322s8').eq(4).invoke('text').as('TeamMember5')
        cy.get('span.mui-1k322s8').eq(5).invoke('text').as('TeamMember6')
    })

    it('Create team - Public', function() {
        cy.get('button').contains('Create new team').click()
        
        /* Team Information */
        cy.log('Verify that user can search and select a team emoji')
        cy.get('div#emoji').click()
        cy.get('button[data-full-name="grinning,grinning face"] img.epr-emoji-img').click()
        cy.log('Verify that user can input team name and description')
        cy.get('input#name').type(public_team)
        cy.get('textarea#description').type("This is a description")
        
        /* Visibility */
        cy.log('Verify that user can select Public option')
        cy.get('span').contains('Public').click()
        
        /* Team Members */
        cy.log('Verify that user can add multiple team members')
        cy.get('input[placeholder="Search Colleagues by Name, Email, Department, Office... "]').click()
        cy.get('li.mui-miw5m3').eq(0).click()   //first name in the selection
        cy.get('li.mui-miw5m3').eq(1).click()   //second name in the selection
        cy.get('li.mui-miw5m3').eq(2).click()   //third name in the selection
        cy.get('li.mui-miw5m3').eq(4).click()   //fifth name in the selection
        cy.get('li.mui-miw5m3').eq(5).click()   //sixth name in the selection
        cy.get('button').contains('Apply').click()

        cy.get('button').contains('Save').click()  // Save - create team

        /* Active Teams Dashboard */
        cy.log('Verify that number of members added in the team is correctly displayed in Active teams page')
        cy.get('p').contains(public_team).should('exist')  //Check Team name in the dashboard
        cy.get('p')
            .contains(public_team)
            .parent()
            .within(() => {
                cy.get('div > img').should('exist')  //Check Emoji in the dashboard
            })

        cy.log('Verify that number of members added in the team is correctly displayed in Manage teams page')
        cy.get('p')
            .contains(public_team).should('exist')
            .parent()
            .parent()
            .parent()
            .within(() => {
                cy.get('td').contains('5').should('exist')  //Check number of members in the dashboard
            })
    })

    it('Manage Team', function() {
        /* Manage Team */
        cy.get('p')
            .contains(public_team).should('exist')
            .parent()
            .parent()
            .parent()
            .within(() => {
                cy.get('td > a').click()  //Click Manage button
            })

        cy.get('span.MuiTypography-title4').contains(public_team).should('exist')
        cy.get('button').contains("Make Private").should('exist')
        cy.get('button').contains("Active").should('exist')
        cy.get('span')
            .contains('Members').should('exist')
            .parent()
            .within(() => {
                cy.get('div').contains('5').should('exist')  //Check number of members in the manage page
            })

        cy.log('Verify that member names are showing correctly in the Manage teams page')
        cy.get('tbody > tr > th > div > p').contains(this.TeamMember1).should('exist')
        cy.get('tbody > tr > th > div > p').contains(this.TeamMember2).should('exist')
        cy.get('tbody > tr > th > div > p').contains(this.TeamMember3).should('exist')
        cy.get('tbody > tr > th > div > p').contains(this.TeamMember5).should('exist')
        cy.get('tbody > tr > th > div > p').contains(this.TeamMember6).should('exist')

        cy.log('Verify that when Make Private is clicked, then team visiblity is switched to Private [0]')
        cy.get('button').contains("Make Private").should('exist')
        cy.get('button').contains("Make Private").click()

        cy.log('Verify that when Make Private is clicked, then team visiblity is switched to Public [1]')
        cy.get('button').contains("Make Public").should('exist')
        cy.get('button').contains("Make Public").click()

    })

    it('Archiving and Activating Public Team', function() {
        /* Manage Team */
        cy.get('p')
            .contains(public_team).should('exist')
            .parent()
            .parent()
            .parent()
            .within(() => {
                cy.get('td > a').click()  //Click Manage button
            })

        cy.get('span.MuiTypography-title4').contains(public_team).should('exist')
        
        /************Change to Archive ************/
        cy.log('Verify that team is moved to Archived when Active button is clicked')
        cy.get('button').contains("Active").should('exist')
        cy.get('button').contains("Active").click()
        cy.get('#change-status-team-dialog-title')
            .should('exist')
            .parent()
            .within(() => {
                cy.get('div > button').contains('Archive').click()  // click Archive in the dialog box
            })
        cy.get('button').contains("Archive").should('exist')

        cy.get('button.mui-jngcs1').eq(0).click()
        cy.get('span').contains('Community').click()
        cy.get('span').contains('Active Teams').click()
        cy.get('input[placeholder="Search for a Team…"').type(public_team)
        cy.get('p').contains(public_team).should('not.exist');

        cy.wait(3000)
        cy.get('input[placeholder="Search for a Team…"').clear()
        cy.wait(3000)

        cy.get('button').contains('Archived').click()
        cy.wait(3000)
        cy.get('input[placeholder="Search for a Team…"]').type(public_team)
        cy.get('p').contains(public_team).should('exist');
    
        /************Change to Active ************/
        cy.log('Verify that team is moved to Active when Archive button is clicked')
        cy.get('p')
            .contains(public_team).should('exist')
            .parent()
            .parent()
            .parent()
            .within(() => {
                cy.get('td > a').click()  //Click Manage button
            })
        cy.get('button').contains("Archive").click()
        cy.get('#change-status-team-dialog-title')
            .should('exist')
            .parent()
            .within(() => {
                cy.get('div > button').contains('Active').click()  // click Active in the dialog box  
            })
        cy.get('button').contains("Active").should('exist')

        cy.get('button.mui-jngcs1').eq(0).click()
        cy.get('span').contains('Community').click()
        cy.get('span').contains('Active Teams').click()
        cy.get('input[placeholder="Search for a Team…"]').type(public_team)
        cy.get('p').contains(public_team).should('exist');
        cy.wait(1000)
    })

    it('Search Teams', function() {
        /* Search exact team in active */
        cy.log('Verify that admin can search teams using exact team name')
        cy.get('input[placeholder="Search for a Team…"').type(public_team)
        cy.wait(3000)
        cy.get('p')
            .contains(public_team).should('exist')
        
        cy.get('tr.mui-1y0yt76').then((list) => { 
            const countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            if(countOfElements != 1){
                throw new Error("test fails here")
            }
        })

        cy.wait(3000)
        cy.get('input[placeholder="Search for a Team…"').clear()

        /* Search partial team in active */
        cy.log('Verify that admin can search teams using partial team name')
        var lastFive = public_team.slice(-3); // get the last 3 characters of the team name
        cy.get('input[placeholder="Search for a Team…"').type(lastFive)
        cy.wait(3000)
        cy.get('p')
            .contains(public_team).should('exist')
        
        cy.get('tr.mui-1y0yt76').then((list) => { 
            const countOfElements =list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            if(countOfElements != 1){
                throw new Error("test fails here")
            }
        })

        
    })
    
})
// <reference types="cypress" />

describe('Teams dropdown is showing all active teams available', () => {
    /**
         * 1.12 Verify that Teams dropdown is showing all active teams available
         *  
    */

    beforeEach("Log in", function () {
        cy.fixture("user").then((data)=>{
            cy.login(data.email, data.password); 
        })
        cy.viewport(1536, 1500)
    })

    let countOfElements = 0;

    it('Get Active Teams from Active teams page', function() {

        cy.visit('/employer/teams')
        cy.log('Get the teams from Active Teams page')
        cy.get('tbody tr').then((list) => { 
            countOfElements = list.length 
            cy.log('No. of Elements: ' + countOfElements) //prints no. of element

            cy.log('Get team names- 100 only for now')
            for (let i = 0; i < countOfElements && i <= 100 ; i++) {   // only get the first 101th teams
                switch(i) {
                    case 0: cy.get('tbody tr th div p').eq(i).invoke('text').as('team1'); break;
                    case 1: cy.get('tbody tr th div p').eq(i).invoke('text').as('team2'); break;
                    case 2: cy.get('tbody tr th div p').eq(i).invoke('text').as('team3'); break;
                    case 3: cy.get('tbody tr th div p').eq(i).invoke('text').as('team4'); break;
                    case 4: cy.get('tbody tr th div p').eq(i).invoke('text').as('team5'); break;
                    case 5: cy.get('tbody tr th div p').eq(i).invoke('text').as('team6'); break;
                    case 6: cy.get('tbody tr th div p').eq(i).invoke('text').as('team7'); break;
                    case 7: cy.get('tbody tr th div p').eq(i).invoke('text').as('team8'); break;
                    case 8: cy.get('tbody tr th div p').eq(i).invoke('text').as('team9'); break;
                    case 9: cy.get('tbody tr th div p').eq(i).invoke('text').as('team10'); break;
                    case 10: cy.get('tbody tr th div p').eq(i).invoke('text').as('team11'); break;
                    case 11: cy.get('tbody tr th div p').eq(i).invoke('text').as('team12'); break;
                    case 12: cy.get('tbody tr th div p').eq(i).invoke('text').as('team13'); break;
                    case 13: cy.get('tbody tr th div p').eq(i).invoke('text').as('team14'); break;
                    case 14: cy.get('tbody tr th div p').eq(i).invoke('text').as('team15'); break;
                    case 15: cy.get('tbody tr th div p').eq(i).invoke('text').as('team16'); break;
                    case 16: cy.get('tbody tr th div p').eq(i).invoke('text').as('team17'); break;
                    case 17: cy.get('tbody tr th div p').eq(i).invoke('text').as('team18'); break;
                    case 18: cy.get('tbody tr th div p').eq(i).invoke('text').as('team19'); break;
                    case 19: cy.get('tbody tr th div p').eq(i).invoke('text').as('team20'); break;
                    case 20: cy.get('tbody tr th div p').eq(i).invoke('text').as('team21'); break;
                    case 21: cy.get('tbody tr th div p').eq(i).invoke('text').as('team22'); break;
                    case 22: cy.get('tbody tr th div p').eq(i).invoke('text').as('team23'); break;
                    case 23: cy.get('tbody tr th div p').eq(i).invoke('text').as('team24'); break;
                    case 24: cy.get('tbody tr th div p').eq(i).invoke('text').as('team25'); break;
                    case 25: cy.get('tbody tr th div p').eq(i).invoke('text').as('team26'); break;
                    case 26: cy.get('tbody tr th div p').eq(i).invoke('text').as('team27'); break;
                    case 27: cy.get('tbody tr th div p').eq(i).invoke('text').as('team28'); break;
                    case 28: cy.get('tbody tr th div p').eq(i).invoke('text').as('team29'); break;
                    case 29: cy.get('tbody tr th div p').eq(i).invoke('text').as('team30'); break;
                    case 30: cy.get('tbody tr th div p').eq(i).invoke('text').as('team31'); break;
                    case 31: cy.get('tbody tr th div p').eq(i).invoke('text').as('team32'); break;
                    case 32: cy.get('tbody tr th div p').eq(i).invoke('text').as('team33'); break;
                    case 33: cy.get('tbody tr th div p').eq(i).invoke('text').as('team34'); break;
                    case 34: cy.get('tbody tr th div p').eq(i).invoke('text').as('team35'); break;
                    case 35: cy.get('tbody tr th div p').eq(i).invoke('text').as('team36'); break;
                    case 36: cy.get('tbody tr th div p').eq(i).invoke('text').as('team37'); break;
                    case 37: cy.get('tbody tr th div p').eq(i).invoke('text').as('team38'); break;
                    case 38: cy.get('tbody tr th div p').eq(i).invoke('text').as('team39'); break;
                    case 39: cy.get('tbody tr th div p').eq(i).invoke('text').as('team40'); break;
                    case 40: cy.get('tbody tr th div p').eq(i).invoke('text').as('team41'); break;
                    case 41: cy.get('tbody tr th div p').eq(i).invoke('text').as('team42'); break;
                    case 42: cy.get('tbody tr th div p').eq(i).invoke('text').as('team43'); break;
                    case 43: cy.get('tbody tr th div p').eq(i).invoke('text').as('team44'); break;
                    case 44: cy.get('tbody tr th div p').eq(i).invoke('text').as('team45'); break;
                    case 45: cy.get('tbody tr th div p').eq(i).invoke('text').as('team46'); break;
                    case 46: cy.get('tbody tr th div p').eq(i).invoke('text').as('team47'); break;
                    case 47: cy.get('tbody tr th div p').eq(i).invoke('text').as('team48'); break;
                    case 48: cy.get('tbody tr th div p').eq(i).invoke('text').as('team49'); break;
                    case 49: cy.get('tbody tr th div p').eq(i).invoke('text').as('team50'); break;
                    case 50: cy.get('tbody tr th div p').eq(i).invoke('text').as('team51'); break;
                    case 51: cy.get('tbody tr th div p').eq(i).invoke('text').as('team52'); break;
                    case 52: cy.get('tbody tr th div p').eq(i).invoke('text').as('team53'); break;
                    case 53: cy.get('tbody tr th div p').eq(i).invoke('text').as('team54'); break;
                    case 54: cy.get('tbody tr th div p').eq(i).invoke('text').as('team55'); break;
                    case 55: cy.get('tbody tr th div p').eq(i).invoke('text').as('team56'); break;
                    case 56: cy.get('tbody tr th div p').eq(i).invoke('text').as('team57'); break;
                    case 57: cy.get('tbody tr th div p').eq(i).invoke('text').as('team58'); break;
                    case 58: cy.get('tbody tr th div p').eq(i).invoke('text').as('team59'); break;
                    case 59: cy.get('tbody tr th div p').eq(i).invoke('text').as('team60'); break;
                    case 60: cy.get('tbody tr th div p').eq(i).invoke('text').as('team61'); break;
                    case 61: cy.get('tbody tr th div p').eq(i).invoke('text').as('team62'); break;
                    case 62: cy.get('tbody tr th div p').eq(i).invoke('text').as('team63'); break;
                    case 63: cy.get('tbody tr th div p').eq(i).invoke('text').as('team64'); break;
                    case 64: cy.get('tbody tr th div p').eq(i).invoke('text').as('team65'); break;
                    case 65: cy.get('tbody tr th div p').eq(i).invoke('text').as('team66'); break;
                    case 66: cy.get('tbody tr th div p').eq(i).invoke('text').as('team67'); break;
                    case 67: cy.get('tbody tr th div p').eq(i).invoke('text').as('team68'); break;
                    case 68: cy.get('tbody tr th div p').eq(i).invoke('text').as('team69'); break;
                    case 69: cy.get('tbody tr th div p').eq(i).invoke('text').as('team70'); break;
                    case 70: cy.get('tbody tr th div p').eq(i).invoke('text').as('team71'); break;
                    case 71: cy.get('tbody tr th div p').eq(i).invoke('text').as('team72'); break;
                    case 72: cy.get('tbody tr th div p').eq(i).invoke('text').as('team73'); break;
                    case 73: cy.get('tbody tr th div p').eq(i).invoke('text').as('team74'); break;
                    case 74: cy.get('tbody tr th div p').eq(i).invoke('text').as('team75'); break;
                    case 75: cy.get('tbody tr th div p').eq(i).invoke('text').as('team76'); break;
                    case 76: cy.get('tbody tr th div p').eq(i).invoke('text').as('team77'); break;
                    case 77: cy.get('tbody tr th div p').eq(i).invoke('text').as('team78'); break;
                    case 78: cy.get('tbody tr th div p').eq(i).invoke('text').as('team79'); break;
                    case 79: cy.get('tbody tr th div p').eq(i).invoke('text').as('team80'); break;
                    case 80: cy.get('tbody tr th div p').eq(i).invoke('text').as('team81'); break;
                    case 81: cy.get('tbody tr th div p').eq(i).invoke('text').as('team82'); break;
                    case 82: cy.get('tbody tr th div p').eq(i).invoke('text').as('team83'); break;
                    case 83: cy.get('tbody tr th div p').eq(i).invoke('text').as('team84'); break;
                    case 84: cy.get('tbody tr th div p').eq(i).invoke('text').as('team85'); break;
                    case 85: cy.get('tbody tr th div p').eq(i).invoke('text').as('team86'); break;
                    case 86: cy.get('tbody tr th div p').eq(i).invoke('text').as('team87'); break;
                    case 87: cy.get('tbody tr th div p').eq(i).invoke('text').as('team88'); break;
                    case 88: cy.get('tbody tr th div p').eq(i).invoke('text').as('team89'); break;
                    case 89: cy.get('tbody tr th div p').eq(i).invoke('text').as('team90'); break;
                    case 80: cy.get('tbody tr th div p').eq(i).invoke('text').as('team91'); break;
                    case 91: cy.get('tbody tr th div p').eq(i).invoke('text').as('team92'); break;
                    case 92: cy.get('tbody tr th div p').eq(i).invoke('text').as('team93'); break;
                    case 93: cy.get('tbody tr th div p').eq(i).invoke('text').as('team94'); break;
                    case 94: cy.get('tbody tr th div p').eq(i).invoke('text').as('team95'); break;
                    case 95: cy.get('tbody tr th div p').eq(i).invoke('text').as('team96'); break;
                    case 96: cy.get('tbody tr th div p').eq(i).invoke('text').as('team97'); break;
                    case 97: cy.get('tbody tr th div p').eq(i).invoke('text').as('team98'); break;
                    case 98: cy.get('tbody tr th div p').eq(i).invoke('text').as('team99'); break;
                    case 99: cy.get('tbody tr th div p').eq(i).invoke('text').as('team100'); break;
                    case 100: cy.get('tbody tr th div p').eq(i).invoke('text').as('team101'); break;
                }

                cy.log('Get name successfull')

            }
        })


    })

    const title = 'span.MuiTypography-title4'
    const add_button = 'button.mui-uzln5v'

    it('Verify if active teams are visible in the dropdown', function() {
        cy.visit('/employer/featured-collection')
        cy.get(add_button).click()
        cy.get(title)
            .contains('Team')
            .parent()
            .within(() => {
                cy.get('input[placeholder="Search…"]').click()  
                cy.log('******************************************')
                cy.log('Verify if the number of active teams are the same in the dropdown')
                cy.get('ul li').then((list) => { 
                    expect(list.length).to.equal(countOfElements)
                })

                cy.log('Verify the dropdown selection if it contains all the teams')
                for (let i = 0; i < countOfElements && i <= 100 ; i++) {
                    cy.log('Verify if the ' + i + 'th team exist')
                    switch(i) {
                        case 0: cy.get('span').contains(this.team1).should('exist'); break;
                        case 1: cy.get('span').contains(this.team2).should('exist'); break;
                        case 2: cy.get('span').contains(this.team3).should('exist'); break;
                        case 3: cy.get('span').contains(this.team4).should('exist'); break;
                        case 4: cy.get('span').contains(this.team5).should('exist'); break;
                        case 5: cy.get('span').contains(this.team6).should('exist'); break;
                        case 6: cy.get('span').contains(this.team7).should('exist'); break;
                        case 7: cy.get('span').contains(this.team8).should('exist'); break;
                        case 8: cy.get('span').contains(this.team9).should('exist'); break;
                        case 9: cy.get('span').contains(this.team10).should('exist'); break;
                        case 10: cy.get('span').contains(this.team11).should('exist'); break;
                        case 11: cy.get('span').contains(this.team12).should('exist'); break;
                        case 12: cy.get('span').contains(this.team13).should('exist'); break;
                        case 13: cy.get('span').contains(this.team14).should('exist'); break;
                        case 14: cy.get('span').contains(this.team15).should('exist'); break;
                        case 15: cy.get('span').contains(this.team16).should('exist'); break;
                        case 16: cy.get('span').contains(this.team17).should('exist'); break;
                        case 17: cy.get('span').contains(this.team18).should('exist'); break;
                        case 18: cy.get('span').contains(this.team19).should('exist'); break;
                        case 19: cy.get('span').contains(this.team20).should('exist'); break;
                        case 20: cy.get('span').contains(this.team21).should('exist'); break;
                        case 21: cy.get('span').contains(this.team22).should('exist'); break;
                        case 22: cy.get('span').contains(this.team23).should('exist'); break;
                        case 23: cy.get('span').contains(this.team24).should('exist'); break;
                        case 24: cy.get('span').contains(this.team25).should('exist'); break;
                        case 25: cy.get('span').contains(this.team26).should('exist'); break;
                        case 26: cy.get('span').contains(this.team27).should('exist'); break;
                        case 27: cy.get('span').contains(this.team28).should('exist'); break;
                        case 28: cy.get('span').contains(this.team29).should('exist'); break;
                        case 29: cy.get('span').contains(this.team30).should('exist'); break;
                        case 30: cy.get('span').contains(this.team31).should('exist'); break;
                        case 31: cy.get('span').contains(this.team32).should('exist'); break;
                        case 32: cy.get('span').contains(this.team33).should('exist'); break;
                        case 33: cy.get('span').contains(this.team34).should('exist'); break;
                        case 34: cy.get('span').contains(this.team35).should('exist'); break;
                        case 35: cy.get('span').contains(this.team36).should('exist'); break;
                        case 36: cy.get('span').contains(this.team37).should('exist'); break;
                        case 37: cy.get('span').contains(this.team38).should('exist'); break;
                        case 38: cy.get('span').contains(this.team39).should('exist'); break;
                        case 39: cy.get('span').contains(this.team40).should('exist'); break;
                        case 40: cy.get('span').contains(this.team41).should('exist'); break;
                        case 41: cy.get('span').contains(this.team42).should('exist'); break;
                        case 42: cy.get('span').contains(this.team43).should('exist'); break;
                        case 43: cy.get('span').contains(this.team44).should('exist'); break;
                        case 44: cy.get('span').contains(this.team45).should('exist'); break;
                        case 45: cy.get('span').contains(this.team46).should('exist'); break;
                        case 46: cy.get('span').contains(this.team47).should('exist'); break;
                        case 47: cy.get('span').contains(this.team48).should('exist'); break;
                        case 48: cy.get('span').contains(this.team49).should('exist'); break;
                        case 49: cy.get('span').contains(this.team50).should('exist'); break;
                        case 50: cy.get('span').contains(this.team51).should('exist'); break;
                        case 51: cy.get('span').contains(this.team52).should('exist'); break;
                        case 52: cy.get('span').contains(this.team53).should('exist'); break;
                        case 53: cy.get('span').contains(this.team54).should('exist'); break;
                        case 54: cy.get('span').contains(this.team55).should('exist'); break;
                        case 55: cy.get('span').contains(this.team56).should('exist'); break;
                        case 56: cy.get('span').contains(this.team57).should('exist'); break;
                        case 57: cy.get('span').contains(this.team58).should('exist'); break;
                        case 58: cy.get('span').contains(this.team59).should('exist'); break;
                        case 59: cy.get('span').contains(this.team60).should('exist'); break;
                        case 60: cy.get('span').contains(this.team61).should('exist'); break;
                        case 61: cy.get('span').contains(this.team62).should('exist'); break;
                        case 62: cy.get('span').contains(this.team63).should('exist'); break;
                        case 63: cy.get('span').contains(this.team64).should('exist'); break;
                        case 64: cy.get('span').contains(this.team65).should('exist'); break;
                        case 65: cy.get('span').contains(this.team66).should('exist'); break;
                        case 66: cy.get('span').contains(this.team67).should('exist'); break;
                        case 67: cy.get('span').contains(this.team68).should('exist'); break;
                        case 68: cy.get('span').contains(this.team69).should('exist'); break;
                        case 69: cy.get('span').contains(this.team70).should('exist'); break;
                        case 70: cy.get('span').contains(this.team71).should('exist'); break;
                        case 71: cy.get('span').contains(this.team72).should('exist'); break;
                        case 72: cy.get('span').contains(this.team73).should('exist'); break;
                        case 73: cy.get('span').contains(this.team74).should('exist'); break;
                        case 74: cy.get('span').contains(this.team75).should('exist'); break;
                        case 75: cy.get('span').contains(this.team76).should('exist'); break;
                        case 76: cy.get('span').contains(this.team77).should('exist'); break;
                        case 77: cy.get('span').contains(this.team78).should('exist'); break;
                        case 78: cy.get('span').contains(this.team79).should('exist'); break;
                        case 79: cy.get('span').contains(this.team80).should('exist'); break;
                        case 80: cy.get('span').contains(this.team81).should('exist'); break;
                        case 81: cy.get('span').contains(this.team82).should('exist'); break;
                        case 82: cy.get('span').contains(this.team83).should('exist'); break;
                        case 83: cy.get('span').contains(this.team84).should('exist'); break;
                        case 84: cy.get('span').contains(this.team85).should('exist'); break;
                        case 85: cy.get('span').contains(this.team86).should('exist'); break;
                        case 86: cy.get('span').contains(this.team87).should('exist'); break;
                        case 87: cy.get('span').contains(this.team88).should('exist'); break;
                        case 88: cy.get('span').contains(this.team89).should('exist'); break;
                        case 89: cy.get('span').contains(this.team90).should('exist'); break;
                        case 90: cy.get('span').contains(this.team91).should('exist'); break;
                        case 91: cy.get('span').contains(this.team92).should('exist'); break;
                        case 92: cy.get('span').contains(this.team93).should('exist'); break;
                        case 93: cy.get('span').contains(this.team94).should('exist'); break;
                        case 94: cy.get('span').contains(this.team95).should('exist'); break;
                        case 95: cy.get('span').contains(this.team96).should('exist'); break;
                        case 96: cy.get('span').contains(this.team97).should('exist'); break;
                        case 97: cy.get('span').contains(this.team98).should('exist'); break;
                        case 98: cy.get('span').contains(this.team99).should('exist'); break;
                        case 99: cy.get('span').contains(this.team100).should('exist'); break;
                        case 100: cy.get('span').contains(this.team101).should('exist'); break;
                    }
                }

                cy.log('Verification successfull')

            })
    })
})
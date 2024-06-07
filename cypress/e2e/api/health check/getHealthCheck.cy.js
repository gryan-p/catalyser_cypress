describe('Root', () => {
    it('Get Redis Test', () => {
        cy.request({ 
            method: 'GET',
            url: Cypress.env('url_api') + `/v2/healthcheck`
        })
        .then((response) => {
            cy.log("Status code validation").then(() => {
                expect(response.status).to.eq(200)
            })

            cy.log("Response body").then(() => {
                expect(response.body).to.eq('ok!')
            })

            cy.log("Response header").then(() => {
                expect(response.headers.expires).to.eq('0')
                expect(response.headers.etag).to.eq('W/"3-P3q3l+VPjs3s5YH7XyvNlYLBceo"')
                expect(response.headers.pragma).to.eq('no-cache')
            })
        })
    })
})
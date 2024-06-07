describe('Root', () => {
    it('Get Redis Test', () => {
        cy.request({ 
            method: 'GET',
            url: Cypress.env('url_api') + `/v2/redisTest`
        })
        .then((response) => {
            cy.log("Status code validation").then(() => {
                expect(response.status).to.eq(200)
            })

            cy.log("Response body").then(() => {
                expect(response.body).to.eq('1717117928194')
            })
        })
    })
})
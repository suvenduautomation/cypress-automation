/// <reference types="Cypress" />

describe('Sample Test for Convincely', () => {

    it('Verify that Convincely javascript is loaded successfully', () => {
        cy.intercept('https://staging.cvly.app/funnel/integration/core.js').as('convincelyjavascript') 
        cy.visit('https://wwwstg.aia.com.au/en/individual/health-insurance.html')
    cy.wait('@convincelyjavascript').then((interception) => { 
    cy.log(interception.request.headers['host'])
    cy.expect(interception.request.headers['host']).to.deep.equal( 'staging.cvly.app')
    })
    })
    it('Verify that Convincely widget is loaded successfully', () => {
        cy.intercept('https://staging.cvly.app/funnel/integration/chunks/Widget.js').as('convincelyjavascript') 
        cy.visit('https://wwwstg.aia.com.au/en/individual/health-insurance.html')
    cy.wait('@convincelyjavascript').then((interception) => { 
    cy.log(interception)
    cy.expect(interception.request.headers['host']).to.deep.equal( 'staging.cvly.app')
    })
    })
    it('Verify phone number in convincely page is correct', () => {
        cy.visit('https://wwwstg.aia.com.au/en/individual/health-insurance.html')
        cy.get("#input-lifeStage")
        .click()
        cy.get(".conv-header-phone").click()
        cy.get(".conv-button-label").then(($phonenumber) => {         
            const PhNbr = $phonenumber.text();
            cy.log(PhNbr);
            cy.expect(PhNbr).to.include("1800 333 004")
        })

    })
    })
    
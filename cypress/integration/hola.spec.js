// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

function colaButton() {
    return         cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function totalText() {
    return         cy.get(':nth-child(4) > .ng-binding')
}

describe('Hello Cypress', () => {
    it('Says hello', () => {
        expect(true).to.equal(true)     // TEST que SEMPRE dona CERT
        //expect(true).to.equal(false)     // TEST que SEMPRE dona FALS
    })
    it('Order one COLA in RoboBar', () => {
        //cy.visit('https://www.google.com/')
        // Per a poder fer aquesta part necesitem ENGEGAR el RoboBar desde YARN
        // AVANS era => npm start ++++++  i ara sera => yarn start +++++++
        cy.visit('http://localhost:3000/')
        colaButton()    // => cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
            .click()
        totalText()     // => cy.get(':nth-child(4) > .ng-binding')
            .should("contains.text", "€1.25")
    })
    it('Order two COLA in RoboBar', () => {
        //cy.visit('https://www.google.com/')
        // Per a poder fer aquesta part necesitem ENGEGAR el RoboBar desde YARN
        // AVANS era => npm start ++++++  i ara sera => yarn start +++++++
        cy.visit('http://localhost:3000/')
        colaButton()    // => cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
            .click()
            .click()
        totalText()     // => cy.get(':nth-child(4) > .ng-binding')
            .should("contains.text", "€2.50")
    })
})
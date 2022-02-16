// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function beerButton() {
    return  cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function wineButton() {
    return  cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function colaButtonNum(numClicks) {
    for(var x=0; x<numClicks; x++) {
        cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function totalText() {
    return         cy.get(':nth-child(4) > .ng-binding')
}

describe('Hello Cypress', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    /*    it('Says hello', () => {
            expect(true).to.equal(true)     // TEST que SEMPRE dona CERT
            //expect(true).to.equal(false)     // TEST que SEMPRE dona FALS
        })
        it('Order one COLA in RoboBar', () => {
            //cy.visit('https://www.google.com/')
            // Per a poder fer aquesta part necesitem ENGEGAR el RoboBar desde YARN
            // AVANS era => npm start ++++++  i ara sera => yarn start +++++++
            //cy.visit('http://localhost:3000/')
            colaButton()    // => cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
                .click()
            totalText()     // => cy.get(':nth-child(4) > .ng-binding')
                .should("contains.text", "€1.25")
        })
    it('Order two COLA in RoboBar', () => {
        //cy.visit('http://localhost:3000/')
        colaButton()            .click()            .click()
        totalText()            .should("contains.text", "€2.50")
        cy.get('.col-12 > .btn').click()
        cy.get('.btn-success').should("contains.text", "Order")
        cy.get('.btn-success').click()
        cy.get('p').should("contains.text", "Coming right up! ~bzzzt~")
    })*/
    it('Order two BEER in RoboBar', () => {
        //cy.visit('http://localhost:3000/')
        beerButton()    .click()    .click()
        totalText()     .should("contains.text", "€4.00")
        cy.get('.col-12 > .btn').click()
        cy.get('.btn-success').should("contains.text", "Order")
        cy.get('.col-2').should("contains.text", "Age")
        cy.get('.btn-success').should("be.disabled")
        cy.get('#ageInput').type("17")
        cy.get('.btn-success').click()
        cy.get('.alert > .ng-binding').should("contains.text", "Only adults can buy alcohol!")
        cy.get('#ageInput').clear()
        cy.get('#ageInput').type("18.1{enter}")         //cy.get('.btn-success').click()
        // ERROR =>> cy.get(':nth-child(2) > :nth-child(1) > .alert').should("be.disabled")
        cy.get('p').should("contains.text", "Coming right up! ~bzzzt~")
    })
    /*    it('Order two WINE in RoboBar', () => {
            //cy.visit('http://localhost:3000/')
            wineButton()            .click()            .click()
            totalText()            .should("contains.text", "€6.00")
        })*/
})
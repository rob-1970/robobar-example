import {Given} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";

// =====================================================================================================================================================
// UTILITZAR de MOSTRA el fitxer <RobobarStepDefinitions.java> de hello-selinide-gft/src/test/java/com/sinensia/helloselenide/cucumber/
// =====================================================================================================================================================

// ESQUEMA de funcionament:
// COMANDA sense ALCOHOL => Cola => Submit order => Order => OK
// COMANDA amb ALCOHOL => Beer => Submit order => AGE (18.1) => Order => OK
// COMANDA amb ALCOHOL => Beer => Submit order => AGE (17.9) => Order => Missatge MAJOR i bucle

function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
} // RETORNA l'objecte BOTO per AFEGIR UNA COLA amb click
function addColas(n) {
    let btn = colaButton()
    for(let x=0; x<n; x++) {
        btn.click()
    }
}  // FA CLICK n vegades al BOTO AFEGIR COLA per AFEGIR n coles
function beerButton() {
    return  cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function addBeers(n) {
    let bnt = beerButton()
    for(let x=0; x<n; x++) {
        bnt.click()
    }
}
function wineButton() {
    return  cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function addWines(n) {
    let bnt = wineButton()
    for(let x=0; x<n; x++) {
        bnt.click()
    }
}

function totalText() {
    return         cy.get(':nth-child(4) > .ng-binding')
} // RETORNA l'objecte on hi ha la SUMA de la COMANDA per comprobar el TOTAL

function submitOrder() {
    return cy.get('.col-12 > .btn')
} // RETORNA l'objecte BOTO per REALITZAR la COMANDA amb click, en la pantalla SUMA #1

function ageCondition(){
    return cy.get('.col-2')
}

function ageInput(){
    return cy.get('#ageInput')
}

function ageOrder() {
    return cy.get('.btn-success')
} // RETORNA l'objecte BOTO per a ACCEPTAR comanda amb ALCOHOL

Given ('user opens robobar website', ()=>{
    cy.visit('http://localhost:3000/')
})

When ('user adds a cola', ()=>{
    colaButton()            .click()
})

When("user adds {int} cola", addColas)
When("user adds {int} beer", addBeers)
When("user adds {int} wine", addWines)

When("user adds {int} cola {int} beer {int} wine", (cola,beer,wine)=>{
    addColas(cola)
    addBeers(beer)
    addWines(wine)
})

Then ('total should be €1.25', ()=>{
    totalText()            .should("contains.text", "€1.25")
})
Then ('total should be €{float}', (total)=>{
    totalText()            .should("contains.text", "€"+total)
})

Then ("user checks out", ()=>{
    submitOrder().click()
})

Then ("user is {int} years old", (age)=>{

    //ageInput().type("19")
})

Then ("checkout result is {string}", (expected)=>{

})

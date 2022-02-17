import {Given} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";

function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function addColas(n) {
    let btn = colaButton()
    for(let x=0; x<n; x++) {
        btn.click()
    }
}
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
}

Given ('user opens robobar website', ()=>{
    cy.visit('http://localhost:3000/')
})

When ('user adds a cola', ()=>{
    colaButton()            .click()
})

Then ('total should be €1.25', ()=>{
    totalText()            .should("contains.text", "€1.25")
})

Then ('total should be €{float}', (total)=>{
    totalText()            .should("contains.text", "€"+total)
})

When("user adds {int} cola", addColas)

When("user adds {int} beer", addBeers)

When("user adds {int} wine", addWines)

When("user adds {int} cola {int} beer {int} wine", (cola,beer,wine)=>{
    addColas(cola)
    addBeers(beer)
    addWines(wine)
})

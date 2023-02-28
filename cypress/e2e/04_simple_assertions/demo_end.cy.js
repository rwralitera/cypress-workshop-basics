/// <reference types="cypress" />

it('user can dismiss the welcome page', () => {
  cy.visit('/')
  cy.get('#mat-dialog-0').should('be.visible')
  cy.get('.close-dialog').click()
  cy.get('#mat-dialog-0').should('not.exist')

})

it('user should be able to search an article', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.contains('search').click()
  cy.get('#mat-input-0').type('Apple{enter}')
  cy.get('.item-name').should('have.length',2)
  cy.get('.item-name').should ('contain', 'Apple')
  cy.contains('Apple Pomace').should ('have.class', 'item-name')

})
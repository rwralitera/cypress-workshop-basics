/// <reference types="cypress" />

it('user can dismiss the welcome page', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
})

it('user should be able to search an article', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.contains('search').click()
  cy.get('#mat-input-0').type('Banana Juice{enter}')
})
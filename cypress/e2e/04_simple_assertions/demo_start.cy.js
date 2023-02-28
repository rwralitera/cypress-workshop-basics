/// <reference types="cypress" />

it('user can dismiss the welcome page', () => {
  cy.visit('/')
  // vérifier que la fenetre de welcome est visible
  cy.get('.close-dialog').click()
  // vérifier qu'on n'a plus la fenetre de welcome après

})

it('user should be able to search an article', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.contains('search').click()
  cy.get('#mat-input-0').type('Apple{enter}')
  // vérifier qu'on a bien 2 produits filtré dans la liste
  // vérifier qu'on a des classes "item-name" dans les selecteurs des produits listés

})
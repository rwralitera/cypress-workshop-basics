/// <reference types="cypress" />

it('user should be able to navigate to the contact us page', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('[aria-label="Open Sidenav"]').click()
  // Challenge #1: naviger vers la page de contact en clickant sur le lien de contact
})

it('user should be able to try to login', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('#navbarAccount').click()
  cy.get('#navbarLoginButton').click() 
  // Challenge #2:
  // remplissez les champs email et mot de passe
  // Cochez la case "remember me"
  // click sur le bouton "Log in"
})
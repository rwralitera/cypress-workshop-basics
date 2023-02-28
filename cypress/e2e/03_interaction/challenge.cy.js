/// <reference types="cypress" />

it('user should be able to navigate to the contact us page', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('[aria-label="Open Sidenav"]').click()
  // navigate to the contact page
})

it('user should be able to try to login', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('#navbarAccount').click()
  cy.get('#navbarLoginButton').click() 
  // remplissez les champs email et mot de passe
  // Cochez la case "remember me"
  // click sur le bouton "Log in"
})
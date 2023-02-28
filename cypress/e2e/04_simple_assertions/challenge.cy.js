/// <reference types="cypress" />

it('user should be able to try to login', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('#navbarAccount').click()
  cy.get('#navbarLoginButton').click()
  cy.get('#email').type('test@gmail.com')
  // vérifier qu'on la bonne value de l'email dans le champ
  cy.get('#password').type('test')
  cy.get('[aria-label="Button to display the password"]').click()
  // vérifier qu'on la bonne value du password dans le champ
  cy.get('#rememberMe-input').check({force: true})
  // vérifier que le checkbox est bien checké
  cy.get('#loginButton').click()
  // Vérifier que le panier apparait dans la barre de menu
})
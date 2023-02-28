/// <reference types="cypress" />

it('user should be able to try to login', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('#navbarAccount').click()
  cy.get('#navbarLoginButton').click()
  cy.get('#email').type('test@test.fr')
  cy.get('#email').should('have.value','test@test.fr') // vérifier que l'email qu'on a tapé est bien la même chose que ce qu'on a dans le champs
  cy.get('#password').type('Azerty1@')
  cy.get('[aria-label="Button to display the password"]').click()
  cy.get('#password').should('have.value','Azerty1@') // vérifier que le mot de passe qu'on a tapé est bien la même chose que ce qu'on a dans le champs
  cy.get('#rememberMe-input').check({force: true})
  cy.get('#rememberMe-input').should('be.checked')// vérifier que le checkbox est bien checké
  cy.get('#loginButton').click()
  cy.contains(' Your Basket').should('be.visible')
})
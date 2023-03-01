/// <reference types="cypress" />

it('user should be able to navigate to the contact us page', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('[aria-label="Open Sidenav"]').click()
  cy.get('[aria-label="Go to contact us page"]').click() // Challenge #1: naviger vers la page de contact en clickant sur le lien de contact
})

it('user should be able to try to login', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('#navbarAccount').click()
  cy.get('#navbarLoginButton').click()
  // Challenge #2:
  cy.get('#email').type('test@gmail.com')  // remplissez les champs email
  cy.get('#password').type('test')  // remplissez les champs mot de passe
  cy.get('#rememberMe-input').check({force: true}) // Cochez la case "remember me", on rajoute l'option {force: true} dans le check car le selecteur est embarqué dans un element parent 
  cy.get('#loginButton').click() // click sur le bouton "Log in"
})
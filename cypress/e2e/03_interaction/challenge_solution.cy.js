/// <reference types="cypress" />

it('user should be able to navigate to the contact us page', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('[aria-label="Open Sidenav"]').click()
  cy.get('[aria-label="Go to contact us page"]').click()
})

it('user should be able to try to login', () => {
  cy.visit('/')
  cy.get('.close-dialog').click()
  cy.get('#navbarAccount').click()
  cy.get('#navbarLoginButton').click() 
  cy.get('#email').click()
  cy.get('#email').type('test@gmail.com')
  cy.get('#password').type('test')
  cy.get('#rememberMe-input').check({force: true})
  cy.get('#loginButton').click()
})
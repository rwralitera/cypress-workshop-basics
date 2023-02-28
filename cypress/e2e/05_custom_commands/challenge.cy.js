/// <reference types="cypress" />
const openURL = () => {
  cy.visit('/')
  cy.get('#mat-dialog-0').should('be.visible')
  cy.get('.close-dialog').click()
}

describe('Login and Navigation', () => {
  beforeEach(() => {
    openURL()
    cy.login('test@test.fr', 'Azerty1@') // Transformez en custom command, le test vu dans le fichier 04_simple_assertions/challenge_solution.cy.js
  });

  it('user should be able to navigate to the contact us page', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to contact us page"]').click()
    cy.url().should('contain', 'contact')
  })

  it('user should be able to navigate to the about us page', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to about us page"]').click()
    cy.url().should('contain', 'about')
  })

  it('user should be able to navigate to the photo wall', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to photo wall"]').click()
    cy.url().should('contain', 'photo')
  })

  it('user should be able to navigate to the score', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Open score-board"]').click()
    cy.url().should('contain', 'board')
  })

  it('user should be able to search an article', () => {
    cy.contains('search').click()
    cy.get('#mat-input-0').type('Banana Juice{enter}')
    cy.get('.mat-grid-list').should('have.length',1)
    cy.get('.item-name').should ('contain', 'Banana Juice')
  })
})
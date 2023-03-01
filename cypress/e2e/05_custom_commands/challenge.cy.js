/// <reference types="cypress" />

const openURL = () => {
  cy.visit('/')
  cy.get('#mat-dialog-0').should('be.visible')
  cy.get('.close-dialog').click()
}

describe('Login and Navigation', () => {
  beforeEach(() => {
    openURL()
    // Challende #1:
    // le fichier 04_simple_assertions/challenge_solution.cy.js contient un test de login
    // Il faut le factoriser et le convertir en custom command dans le fichier support/commands.js
    // Il faut déclarer la nouvelle commande dans le fichier index.d.ts
    cy.login('test@test.fr', 'Azerty1@')
  });

  it('user should be able to navigate to the contact us page', () => {
    // openURL()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to contact us page"]').click()
    cy.url().should('contain', 'contact')
  })

  it('user should be able to navigate to the about us page', () => {
    // openURL()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to about us page"]').click()
    cy.url().should('contain', 'about')
  })

  it('user should be able to navigate to the photo wall', () => {
    // openURL()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to photo wall"]').click()
    cy.url().should('contain', 'photo')
  })

  it('user should be able to navigate to the score', () => {
    // openURL()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Open score-board"]').click()
    cy.url().should('contain', 'board')
  })

  it('user should be able to search an article', () => {
    // openURL()
    cy.contains('search').click()
    cy.get('#mat-input-0').type('Banana Juice{enter}')
    cy.get('.mat-grid-list').should('have.length',1)
    cy.get('.item-name').should ('contain', 'Banana Juice')
  })
})
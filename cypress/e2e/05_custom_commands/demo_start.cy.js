/// <reference types="cypress" />

// Créez une fonction qui permet de naviguer sur la page principale 
// et de fermer la fenêtre de bienvenue qui revient tout le temps

describe('Navigation', () => {
  it('Welcome page should appears on the main pages', () => {
    cy.visit('/')
    cy.get('#mat-dialog-0').should('be.visible')
  })

  it('user should be able to navigate to the contact us page', () => {
    cy.visit('/')
    cy.get('#mat-dialog-0').should('be.visible')
    cy.get('.close-dialog').click()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to contact us page"]').click()
    cy.url().should('contain', 'contact')
  })

  it('user should be able to navigate to the about us page', () => {
    cy.visit('/')
    cy.get('#mat-dialog-0').should('be.visible')
    cy.get('.close-dialog').click()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to about us page"]').click()
    cy.url().should('contain', 'about')
  })

  it('user should be able to navigate to the photo wall', () => {
    cy.visit('/')
    cy.get('#mat-dialog-0').should('be.visible')
    cy.get('.close-dialog').click()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to photo wall"]').click()
    cy.url().should('contain', 'photo')
  })

  it('user should be able to navigate to the score', () => {
    cy.visit('/')
    cy.get('#mat-dialog-0').should('be.visible')
    cy.get('.close-dialog').click()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Open score-board"]').click()
    cy.url().should('contain', 'board')
  })

  it('user should be able to search an article', () => {
    cy.visit('/')
    cy.get('#mat-dialog-0').should('be.visible')
    cy.get('.close-dialog').click()
    cy.contains('search').click()
    cy.get('#mat-input-0').type('Banana Juice{enter}')
    cy.get('.mat-grid-list').should('have.length',1)
    cy.get('.item-name').should ('contain', 'Banana Juice')
  })
})

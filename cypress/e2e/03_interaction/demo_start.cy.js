/// <reference types="cypress" />

it('user can dismiss the welcome page', () => {
  cy.visit('/')
  // férmer la fenêtre de bienvenue en cliquant sur le bouton dismiss
})

it('user should be able to search an article', () => {
  cy.visit('/')
  // Rechercher "Banana Juice" en utilisant .type() dans la barre de recherche
})
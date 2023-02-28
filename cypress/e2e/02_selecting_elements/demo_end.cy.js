/// <reference types="cypress" />

it('class, id, attr, text', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

  cy.contains('Shapes') // sélectionnez en utilisant un text
    .get('h1') // sélectionnez en utilisant un tag
    .get('.square') // sélectionnez en utilisant une class
    .get('#circle') // sélectionnez en utilisant un id
    .get('[data-cy="triangle"]'); // sélectionnez en utilisant un attribut

})

it('cypress commands', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  cy.get('li')
    .first()

  cy.get('li')
    .eq(2)

  cy.get('.list')
    .find('.green')

  cy.contains('violet')
    .prev()

});
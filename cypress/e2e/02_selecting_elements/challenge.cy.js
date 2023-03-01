/// <reference types="cypress" />

// ⚠️ vous pouvez changer "it" en "it.only" pour exécuter un seul test
it('class, id, attr, text', { baseUrl: null }, () => {
  cy.visit('./mini-apps/shapes.html');
  // challenge #1: sélectionnez le carré à l'aide de la classe,
  // le cercle à l'aide de l'id, 
  // le triangle à l'aide de l'attribut 
  // et l'intitulé à l'aide du texte.

})

// challenge #2: dans cet exemple, essayez de sélectionner un élément spécifique en enchaînant les commandes .get() pré-écrites.
it('cypress commands for traversing and filtering elements', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // selectionnez red en utilisant .first()
  cy.get('li')

  // selectionnez violet en utilisant .last()
  cy.get('li')

  // selectionnez yellow en utilisant .eq()
  cy.get('li')

  // selectionnez blue en utilisant .next()
  cy.get('.green')

  // selectionnez yellow en utilisant .prev()
  cy.get('.green')

  // filtre les couleurs "primary" à l'aide de la commande .filter(). Toutes ces couleurs ont la classe "primary"
  cy.get('li')

  // filtre les couleurs secondaires à l'aide de la commande .not(). Toutes ces couleurs n'ont pas la classe "primary".
  cy.get('li')

  // selectionnez green en utilisant .find()
  cy.get('.list')

  // sélectionnez la liste entière (avec la classe "list") en utilisant la commande .parent()
  cy.get('.violet')

});
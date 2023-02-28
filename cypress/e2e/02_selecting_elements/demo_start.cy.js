it('class, id, attr, text', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');
  // selection de differents elements avec un id, une classe, un attribut et un texte

})

it('cypress commands', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // sélection du premier élément
  cy.get('li')

  // sélection d'un élément à l'aide d'un index
  cy.get('li')

  // recherche d'un élément enfant
  cy.get('.list')

  // recherche de l'élément précédent
  cy.contains('violet')

});
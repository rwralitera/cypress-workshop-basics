it('opening the application', () => {

  // EXPLICATION DE LA SOLUTION: challenge #1

  // cela fonctionne une fois que vous avez défini "baseUrl". 
  // dans votre fichier cypress.config.js :
  //
  /// module.exports = defineConfig({
  ///   e2e: {
  ///     baseUrl: 'https://demo.owasp-juice.shop/#', <<< comme ceci
  ///   },
  /// })
  cy.visit('/')

  // EXPLICATION DE LA SOLUTION: challenge #2
  // parce que nous avons défini notre baseUrl dans le fichier cypress.config.js,
  // nous pouvons simplement définir le chemin dans notre commande .visit().
  // L'URL complète sera résolue en "https://demo.owasp-juice.shop/#/contact".
  cy.visit('/contact')

});
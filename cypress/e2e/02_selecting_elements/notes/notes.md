# Sélectionner des éléments
`cy.contains()` pour sélectionner un élément par le texte
`cy.get()` pour sélectionner un élément par un sélecteur de requête

## Aide-mémoire
```js
cy.get('a')
cy.get('.class')
cy.get('#id')
cy.get('[attribute]')
cy.get('[attribute=value]')
```

## Bonnes pratiques
Essayez absolument d'utiliser des attributs de test personnalisés. Les classes sont les plus susceptibles d'être modifiées dans les applications Web, les sélecteurs absolus sont instables et les ID doivent avoir des noms uniques, ce qui les rend difficiles à maintenir.


## Autocomplete dans VS Code
Rajouter cette ligne en haut de votre fichier de test:
```
/// <reference types="cypress" />
```

## Navigation dans le DOM
Il existe plusieurs commandes qui vous permettent de parcourir ou de filtrer les éléments d'une page pour vous aider à atteindre celui dont vous avez besoin d'une manière lisible. Vous n'avez pas besoin de xpath, c'est vraiment difficile à lire.


## Lecture utile
* [Meilleures pratiques sur les sélecteurs recommandées par Cypress](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)
* [documentation sur .get()](https://docs.cypress.io/api/commands/get.html#Usage)
* [documentation sur .contains()](https://docs.cypress.io/api/commands/contains.html#Usage)
* [Documentation des écoles W3 sur les sélecteurs](https://www.w3schools.com/cssref/css_selectors.asp)
* [Très beau diagramme pour expliquer les différentes relations entre les éléments](https://frontend30.com/css-selectors-cheatsheet/)

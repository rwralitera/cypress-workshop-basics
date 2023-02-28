
# Visiter l'URL d'une application

## Cypress command

Voici à quoi ressemble un test Cypress:
```js
it('nom du test', () => {
  // vos commandes seront ici
})
```

La structure de base d'une commande est la suivante :
```js
cy.visit('https://demo.owasp-juice.shop/#')
```
`cy` - est un objet global de Cypress, contient toutes les commandes

`.visit()` - est une commande (ou une fonction JS) pour ouvrir une page dans Cypress

`'https://demo.owasp-juice.shop/#'` - est un paramètre de notre fonction `.visit()`. indique à la fonction l'endroit que nous voulons visiter

## configuration Cypress 
Au lieu d'écrire une URL complète, nous pouvons définir un fichier de type `baseUrl` dans le fichier `cypress.config.js`:
```js
{
  e2e: {
    baseUrl: "https://demo.owasp-juice.shop/#"
  }
}
```
Cela signifie que nous pouvons ouvrir notre page d'accueil comme ceci :
```js
cy.visit('/')
```
ou de visiter la page à propos comme celui-ci :
```js
cy.visit('/about')
```

## Useful reading
* [documentation for .visit() command](https://docs.cypress.io/api/commands/visit.html#Syntax)
* [Best practices for using baseUrl](https://docs.cypress.io/guides/references/best-practices.html#Setting-a-global-baseUrl)
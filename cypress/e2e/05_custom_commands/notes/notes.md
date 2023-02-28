# Creation d'un custom commands
Les Custom commands sont très utiles si nous voulons étendre notre bibliothèque de commandes ou faire abstraction de certaines parties de notre code dans son propre bloc.

## Comment faire
```js
Cypress.Commands.add('myCommand', () => {

  // votre commande ici

})
```

## Devons-nous le faire ?
Eh bien, pas vraiment. Nous pouvons juste utiliser une simple fonction JavaScript :
```js
const myCommand = () => {
  // votre commande ici
}

it('test', () => {

  myCommand() // fonctionne aussi bien

})
```

## Autocomplétion et JSDoc
Pour aller jusqu'au bout de notre custom Commands, nous pouvons créer un fichier `index.d.ts` dans notre dossier `cypress/support/`
```ts
declare namespace Cypress {
  interface Chainable {
    myCommand(): Chainable<any>
  }
}
```
Cela ajoutera notre commande à l'espace de noms Cypress, ainsi la prochaine fois que vous taperez `cy.` votre commande apparaîtra dans votre éditeur comme une suggestion d'autocomplétion.

Si vous voulez ajouter une mini-documentation pour votre commande, vous pouvez utiliser JSDoc. Il s'agit d'un type spécial de commentaire qui apparaîtra au survol dans votre éditeur. Le fichier final `index.d.ts` ressemblera à ceci:

```ts
declare namespace Cypress {
  interface Chainable {
    /**
     * description de la fonction
     */
    myCommand(): Chainable<any>
  }
}
```

# Lecture utile
* [docs de creation de custom commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax)
* [documentation sur la création de fonctions de complétion automatique pour les customs commands](https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands)
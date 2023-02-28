# Interagir avec l'application

## Commandes de base:
[`.click()`](https://docs.cypress.io/api/commands/click.html#Syntax) - clique sur un élément du DOM

[`.type()`](https://docs.cypress.io/api/commands/type.html#Syntax) - tape dans la saisie de texte ou dans la zone de texte

[`.check()`](https://docs.cypress.io/api/commands/check.html#Syntax) - cocher une case à cocher. Par rapport à `.click()` il conserve l'état de la case à cocher si elle est déjà cochée.

## Taper des caractères spéciaux
Généralement enveloppé dans `{}`. Tous peuvent être [found in the documentation](https://docs.cypress.io/api/commands/type.html#Arguments).

## Cliquer sur les éléments
Cypress ne cliquera que sur un seul élément qui est visible, activé, non couvert par d'autres éléments, etc. La liste de toutes les vérifications peut être trouvée [in Cypress docs](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability). 

## Lecture utile
* [docs sur .type()](https://docs.cypress.io/api/commands/type.html)
* [les caractères spéciaux sur .type()](https://docs.cypress.io/api/commands/type.html#Arguments)
* [docs sur .click()](https://docs.cypress.io/api/commands/click.html#Syntax)
* [explication des contrôles d'actionnabilité de Cypress](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability)
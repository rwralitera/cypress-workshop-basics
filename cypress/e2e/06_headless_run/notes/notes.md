# Headless (run) mode
Le mode Headless nous permet d'exécuter nos tests via un terminal.

Par défaut, Cypress exécutera tous les fichiers du dossier `cypress/e2e`. Ceci peut être configuré dans `cypress.config.js` avec des options :
```json
  "specPattern": "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  "ignoreSpecPattern": "**/*.md"
```

Ou peut être défini comme un drapeau dans le terminal :
```
npx cypress run --spec cypress/e2e/fileName.cy.js
```

Il y a beaucoup d'autres options que l'on peut trouver dans les [docs](https://docs.cypress.io/guides/guides/command-line#cypress-run)


## Lecture utile
* [docs sur headless mode](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)
* [configuration du filtrage à l'aide de cypress.config.js](https://docs.cypress.io/guides/references/configuration.html#Folders-Files)
* [tests multi-navigateurs à Cypress](https://docs.cypress.io/guides/guides/cross-browser-testing.html#Periodic-Basis)
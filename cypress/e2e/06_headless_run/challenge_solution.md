1. exécuter cypress en mode headless
```
npx cypress run
```

2. définissez cypress pour qu'il n'exécute le fichier `test_pass.js` que dans ce dossier
```
npx cypress run --spec cypress/e2e/06_headless_run/test_pass.cy.js
```

3. Exécutez le test sans vidéo

```
npx cypress run --spec cypress/e2e/06_headless_run/test_pass.cy.js --config video=false
```
4. exécutez le test dans le navigateur firefox

```
npx cypress run --spec cypress/e2e/06_headless_run/test_pass.cy.js --browser firefox
```


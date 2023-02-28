# cypress workshop

> Tests e2e pour le workshop [Cypress.io](https://assurancequalite.talentlms.com/catalog/info/id:138)

## Introduction

Les sites Web qui ne fonctionnent pas sont mauvais. Des tests automatisés complets de bout en bout sont le meilleur moyen d'obtenir la certitude que l'ensemble du système fonctionnera lorsque l'utilisateur réel visitera le site. Cet atelier vous présente les bases de Cypress.io et vous apprend à écrire des tests réalistes, lisibles, fiables et rapides.


### Programme

Ce Workshop couvre les sujets pertinents pour les débutants de Cypress. Au cours de ce Workshop, nous aborderons les sujets suivants par le biais d'exercices pratiques :

- Introduction sur le Framework de test Cypress.io
- Démarrer un nouveau projet d'automatisation
- Installation et configuration de Cypress
- Sélection des éléments du DOM et interaction avec la page
- Optimisation et factorisation de code

### Public cible

Ce Workshop sera très utile pour tout testeur/QA cherchant à automatiser les tests d'applications web.

## Prérequis

- Ordinateur: Mac, Windows, Linux
- [Node 14+ (LTS)](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [git](https://git-scm.com)

Vérifiez la version de Node sur votre terminal:

```
$ node -v
# ex: v14.17.1
$ npm -v
# ex: 6.14.13
```

Afin d'obtenir ce repos et d'installer les dépendances NPM:

```bash
git clone git@github.com/rworganization/workshop-basics.git
cd workshop-basics
npm install
```

### Check rapide ✅

Depuis la fenêtre du terminal, vous devriez pouvoir ouvrir Cypress à la racine du projet avec :

```bash
$ npm run cypress open
```

Vous devriez voir la fenêtre Cypress Desktop apparaître et afficher la liste des fichiers de test (specs).

## Author

William RALITERA
declare namespace Cypress {
    interface Chainable {
      /**
       * C'est la super custom command pour se loguer
       */
      login(email, password): Chainable<any>
    }
  }
/// <reference types="cypress" />
// import { login_ui } from '.commands/login_ui';

// Cypress.Commands.add('login_ui', login_ui);

declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(email, password): Chainable<any>;
    }
  }
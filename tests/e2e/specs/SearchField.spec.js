// https://docs.cypress.io/api/introduction/api.html

describe('SearchField', () => {
  it('Should select a user/organization and navigate properly', () => {
    const vuejs = '/users/yyx990803';

    cy.visit('/');
    cy.get('#search-field').type('vuejs');
    cy.get('.search-field__results .list__item:first').click()
    cy.url().should('contain', vuejs);
  });
});

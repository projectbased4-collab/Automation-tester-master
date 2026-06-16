describe('my first cypress test', () => {
  it('visits a page and checks the title', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('have.text', 'Example Domain');
  });
});

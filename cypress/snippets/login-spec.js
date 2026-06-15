describe('Login page', () => {
  it('shows error for invalid credentials', () => {
    cy.visit('/login')
    cy.get('#username').type('wrong')
    cy.get('#password').type('wrong')
    cy.get('form').submit()
    cy.get('.error').should('contain', 'Invalid')
  })
})
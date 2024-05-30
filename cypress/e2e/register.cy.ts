describe('register page', () => {
  it('should show validation errors when leaving all fields blank', () => {
    cy.visit('http://localhost:3000/account/register')
    cy.get('[data-cy="submit-register"]').click();
    cy.get('[data-cy="error-last-name"]').should('exist');
  })
})
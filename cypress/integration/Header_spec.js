describe('Header', () => {
  it('should show the header at all paths', () => {
    cy.visit('http://localhost:3000/')
      .get('.cy-heading').should('have.text', 'You Name It!');
    cy.visit('http://localhost:3000/results')
      .get('.cy-heading').should('have.text', 'You Name It!');
  });
});

describe('KeyWordSplitter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should show the form with keyword input', () => {
    cy.get('.cy-input').should('be.visible');
  });

  it('should show the submit button only when the input has a value', () => {
    cy.get('.cy-input').type('testing')
      .get('.cy-button').should('be.visible');
  })
});

describe('KeyWordSplitter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should show the header when at the base url', () => {
    cy.get('.cy-heading').should('have.text', 'You Name It!');
  });

  it('should show the form with keyword input and submit button', () => {
    cy.get('.cy-input').should('be.visible');
    cy.get('.cy-button').should('be.visible');
  });
});

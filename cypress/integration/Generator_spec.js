describe('Generator', () => {
  before(() => {
    cy.intercept('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=eea1834b-5c27-4dff-8bdf-54448122d3cc', {fixture: 'thesaurus.json'})
      .visit('http://localhost:3000/')
      .get('.cy-input').type('umpire')
      .get('.cy-button').click()
  })

  it('should show the generated name', () => {
    cy.get('.cy-generated-name').should('have.text', 'umpire');
  });

  it('should display a list of synonyms', () => {
    cy.get('.cy-synonym-radio-btn').should('be.visible')
  })
});

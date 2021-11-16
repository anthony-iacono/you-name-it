describe('Favorites', () => {
  beforeEach(() => {
    cy.intercept('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=eea1834b-5c27-4dff-8bdf-54448122d3cc', {fixture: 'thesaurus.json'})
      .visit('http://localhost:3000/')
      .get('.cy-input').type('umpire')
      .get('.cy-button').click()
  })

  it('should add a favorite', () => {
    cy.get('.cy-favorite-btn').click()
      .get('.cy-view-favorites-btn').click()
      .get('.cy-favorite-text').should('have.text', 'umpire')
  })

  it('should remove a favorite', () => {
    cy.get('.cy-favorite-btn').click()
      .get('.cy-view-favorites-btn').click()
      .get('.cy-remove-favorite-btn').click()
      .get('.cy-no-favorites-message').should('be.visible')
  })
})

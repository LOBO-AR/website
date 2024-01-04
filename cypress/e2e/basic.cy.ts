describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows home page', () => {
    cy.get('h4')
    .contains('The pack is getting ready...');
  })
  it('renders the image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})

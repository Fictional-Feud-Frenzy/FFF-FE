const { VariablesInAllowedPositionRule } = require("graphql")

describe('Fictional Feud Frenzy', () => {
  beforeEach('',()=>{
    cy.visit('http://localhost:3000/')
  })
  it('should have an image and view characters button on the home page', () => {
    cy.get("img[alt=fff-logo]").should('be.visible')
    .get("h1").contains(".characters-button", "View Characters").should('be.visible')
  })
  it('should be able to click on the view characters button and view characters screen', () => {
    cy.get("h1").contains(".characters-button", "View Characters").click()
  })
})
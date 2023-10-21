const { VariablesInAllowedPositionRule } = require("graphql")

describe('Fictional Feud Frenzy', () => {
  beforeEach('',()=>{
    cy.visit('http://localhost:3000/')
    .intercept('POST','https://fff-be-2e7913919a6b.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'characters'
    }).as('characters')
    .intercept('POST','http://127.0.0.1:6969/graphql', {
      statusCode: 201,
      fixture: 'characters'
    }).as('characters')
  })
  it('should have an image and view characters button on the home page', () => {
    cy.get("img[alt=fff-logo]").should('be.visible')
    .get("intro-container").contains(`.intro','Join us in the ultimate battleground, where a roster of over 500 comic book legends collide in epic showdowns!
    Our AI technology generates captivating comic book short stories for each battle, ensuring a unique experience every time. Will it be an epic showdown, a cunning strategy, or an unexpected twist that decides the victor? Find out in every pulse-pounding tale!
    Stay tuned for upcoming features, like the highly-anticipated Battle Royale mode and user profiles to save your favorite fights and stories. “Fictional Feud Frenzy” will also offer kid-friendly tales or intense dark battle stories that are bound to satisfy every fan.
    Step into the arena, settle debates, explore your favorite characters, and embrace the excitement of battles where the only limit is your imagination. “Fictional Feud Frenzy” - the ultimate test of superhuman powers awaits!
    “Unleash Your Imagination in 'Fictional Feud Frenzy' - Where Legends Clash, and Heroes Rise!”`).should('be.visible')
    .get("h1").contains(".characters-button", "View Characters").should('be.visible')
  })
  it('should be able to click on the view characters button and view characters screen', () => {
    cy.get("h1").contains(".characters-button", "View Characters").click()
  })
})
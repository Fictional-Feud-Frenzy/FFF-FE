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
    .get(".intro-container").contains('.intro',`Join us in the ultimate battleground, where a roster of over 500 comic book legends collide in epic showdowns!`).should('be.visible')
    .get("h1").contains(".characters-button", "View Characters").should('be.visible')
  })
  it('should be able to click on the view characters button and view 567 characters, can also click on characters to add them to the top of the characters screen', () => {
    cy.get("h1").contains(".characters-button", "View Characters").click().wait('@characters')
    .url().should('contain','/characters')
    .get(".characters-header").first().contains('h2','Please Select').should('be.visible')
    .get(".characters-header").first().contains('h2','Player #1').should('be.visible')
    .get(".title-search").contains('h3','Search By Name:').should('be.visible')
    .get(".input[id=search-input]").should('be.visible')
    .get(".title-search").contains('h3','Choose Publisher:').should('be.visible')
    .get(".input[id=Publisher]").should('be.visible')
    .get(".title-search").contains('h3','Hero or Villian?').should('be.visible')
    .get(".input[id=Alignment]").should('be.visible')
    .get(".title-search").contains('h3','Sort By Attribute:').should('be.visible')
    .get(".input[id=Attribute]").should('be.visible')
    .get(".characters-header").last().contains('h2','Please Select').should('be.visible')
    .get(".characters-header").last().contains('h2','Player #1').should('be.visible')
    .get('.characters-list').children().should('have.length', 567)
    .get('.character-card').first().contains('h3','A-Bomb').should('be.visible')
    .get('.character-images[alt=A-Bomb]').should('be.visible')
    .get('.character-card').last().contains('h3','Ironman').should('be.hidden')
    .get('.character-images[alt=Ironman]').should('be.hidden')
    .intercept('POST','https://fff-be-2e7913919a6b.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'character1'
    }).as('character1')
    .intercept('POST','http://127.0.0.1:6969/graphql', {
      statusCode: 201,
      fixture: 'character1'
    }).as('character1')
    .get('.character-card').first().contains('h3','A-Bomb').click().wait('@character1')
    .get('button').contains('.select-character-button', "select p1").click()
    .intercept('POST','https://fff-be-2e7913919a6b.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'character2'
    }).as('character2')
    .intercept('POST','http://127.0.0.1:6969/graphql', {
      statusCode: 201,
      fixture: 'character2'
    }).as('character2')
    .get('.character-card').contains('h3','Abe Sapien').click().wait('@character2')
    .get('button').contains('.select-character-button', "select p2").click()
    .get(".characters-header").first().contains('p','Player 1:').should('be.visible')
    .get(".characters-header").first().contains('p','A-Bomb').should('be.visible')
    .get(".characters-header").last().contains('p','Player 2').should('be.visible')
    .get(".characters-header").last().contains('p','Abe Sapien').should('be.visible')
    .get(".character-image-header").should('have.length', 2)
    .get("button").contains(".fight-button","FIGHT!!!").should("be.visible")
  })
  it('should be able to navigate to the fight button then have the battle page appear at first with a fighting animation page and then with a winner and a description of the fight', () => {
    cy.get("h1").contains(".characters-button", "View Characters").click().wait('@characters')
    .intercept('POST','https://fff-be-2e7913919a6b.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'character1'
    }).as('character1')
    .intercept('POST','http://127.0.0.1:6969/graphql', {
      statusCode: 201,
      fixture: 'character1'
    }).as('character1')
    .get('.character-card').first().contains('h3','A-Bomb').click().wait('@character1')
    .get('button').contains('.select-character-button', "select p1").click()
    .intercept('POST','https://fff-be-2e7913919a6b.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'character2'
    }).as('character2')
    .intercept('POST','http://127.0.0.1:6969/graphql', {
      statusCode: 201,
      fixture: 'character2'
    }).as('character2')
    .get('.character-card').contains('h3','Abe Sapien').click().wait('@character2')
    .get('button').contains('.select-character-button', "select p2").click()
    .get(".characters-header").first().contains('p','Player 1:').should('be.visible')
    .get(".characters-header").first().contains('p','A-Bomb').should('be.visible')
    .get(".characters-header").last().contains('p','Player 2').should('be.visible')
    .get(".characters-header").last().contains('p','Abe Sapien').should('be.visible')
    .get(".character-image-header").should('have.length', 2)
    .get("button").contains(".fight-button","FIGHT!!!")
  })
})
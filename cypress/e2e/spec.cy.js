const { VariablesInAllowedPositionRule } = require("graphql")

describe('Fictional Feud Frenzy', () => {
  beforeEach('',()=>{
    // cy.visit('http://localhost:3000/')
    cy.visit('http://fff-fe.vercel.app/')
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
    .get(".characters-header").children().first().contains('h2','Please Select').should('be.visible')
    .get(".characters-header").children().first().contains('h2','Player #1').should('be.visible')
    .get(".title-search").contains('h3','Search By Name:').should('be.visible')
    .get(".input[id=search-input]").should('be.visible')
    .get(".title-search").contains('h3','Choose Publisher:').should('be.visible')
    .get(".input[id=Publisher]").should('be.visible')
    .get(".title-search").contains('h3','Hero or Villian?').should('be.visible')
    .get(".input[id=Alignment]").should('be.visible')
    .get(".title-search").contains('h3','Sort By Attribute:').should('be.visible')
    .get(".input[id=Attribute]").should('be.visible')
    .get(".characters-header").children().last().contains('h2','Please Select').should('be.visible')
    .get(".characters-header").children().last().contains('h2','Player #2').should('be.visible')
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
    .get(".characters-header").children().first().contains('p','Player 1:').should('be.visible')
    .get(".characters-header").children().first().contains('p','A-Bomb').should('be.visible')
    .get(".characters-header").children().last().contains('p','Player 2').should('be.visible')
    .get(".characters-header").children().last().contains('p','Abe Sapien').should('be.visible')
    .get(".character-image-header").should('have.length', 2)
    .get("button").contains(".fight-button","FIGHT!!!").should("be.visible")
  })
  it('should be able to navigate to the character info page and view all stats, the image, and then press the back button ', () => {
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
    .url().should('contain','/1')
    .get('button').contains('.select-character-button',"select p1").should("be.visible")
    .get('h1').contains('.character-name',"A-Bomb").should("be.visible")
    .get('button').contains('.select-character-button',"select p2").should("be.visible")
    .get('.character-image[alt=A-Bomb]').should("be.visible")
    .get('p').contains('.white-text',"Published by: ").should("be.visible")
    .get('p').contains('.white-text',"Marvel Comics").should("be.visible")
    .get('.character-stats').contains('p',"Name: A-Bomb (Richard Milhouse Jones)").should("be.visible")
    .get('.character-stats').contains('p',"Good or Bad: good").should("be.visible")
    .get('.character-stats').contains('p',"intelligence: 38").should("be.visible")
    .get('.character-stats').contains('p',"Strength: 100").should("be.visible")
    .get('.character-stats').contains('p',"Speed: 17").should("be.visible")
    .get('.character-stats').contains('p',"Durability: 80").should("be.visible")
    .get('.character-stats').contains('p',"Power: 24").should("be.visible")
    .get('.character-stats').contains('p',"Combat: 64").should("be.visible")
    .get('.character-stats').contains('p',"Eye Color: Yellow").should("be.visible")
    .get('.character-stats').contains('p',"Gender: Male").should("be.visible")
    .get('.character-stats').contains('p',"Team: Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom").should("be.visible")
    .get('.character-stats').contains('p',"Hair Color: No Hair").should("be.visible")
    .get('.character-stats').contains('p',"Height: 6'8").should("be.visible")
    .get('.character-stats').contains('p',"Weight: 980 lb").should("be.visible")
    .get('.character-stats').contains('p',"Place Of Birth: Scarsdale, Arizona").should("be.visible")
    .get('.character-stats').contains('p',"Race: Human").should("be.visible")
    .get('.character-stats').contains('p',"⬅️").should("be.visible").click()
    .url().should('contain','/characters')
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
    .intercept('POST','https://fff-be-2e7913919a6b.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'battle'
    }).as('battle')
    .intercept('POST','http://127.0.0.1:6969/graphql', {
      statusCode: 201,
      fixture: 'battle'
    }).as('battle')
    .get("button").contains(".fight-button","FIGHT!!!").click().wait('@battle')
    .url().should('contain','/battle-mode')
    .get(".battle-image").should("have.length", 2)
    .get("h1").contains('.fighter1-name',"A-Bomb").should('be.visible')
    .get("h1").contains('.fighter2-name',"Abe Sapien").should('be.visible')
    .get("h2").contains(".declared-winner","Abe Sapien").should('be.visible')
    .get(".declared-winner").contains("p","In a deserted part of the city, Abe Sapien and A-Bomb found themselves facing each other. The air crackled with tension").should('be.visible')
    .get("button").contains(".return-button","Return To All Characters").should('be.visible').click()
    .url().should('contain','/characters')
    .get("img[alt=fff-logo]").click()
    .url().should('contain','/')
    .get('.characters-button-link').contains('h1','View Characters')
  })
  it('should be able to filter by name, publisher, and alignment and sort by attribute through 567 characters', () => {
    cy.get("h1").contains(".characters-button", "View Characters").click().wait('@characters')
    .url().should('contain','/characters')
    .get(".input[id=search-input]").type("Flash").should('have.value','Flash')
    .get('.characters-list').children().should('have.length', 6)
    .get('.character-card').first().contains('h3','Black Flash').should('be.visible')
    .get('.character-card').last().contains('h3','Kid Flash').should('be.visible')
    .get(".input[id=Publisher]").select("DC Comics").should('have.value','DC Comics')
    .get('.characters-list').children().should('have.length', 3)
    .get('.character-card').first().contains('h3','Black Flash').should('be.visible')
    .get('.character-card').last().contains('h3','Kid Flash').should('be.visible')
    .get(".input[id=Alignment]").select("Villian").should('have.value','bad')
    .get('.characters-list').contains('p','No characters found, please try a different search.').should('be.visible')
    .get(".input[id=Alignment]").select("Hero").should('have.value','good')
    .get('.characters-list').children().should('have.length', 2)
    .get('.character-card').first().contains('h3','Flash').should('be.visible')
    .get('.character-card').last().contains('h3','Kid Flash').should('be.visible')
    .reload()
    .get(".input[id=Attribute]").select("Intelligence").should('have.value','intelligence')
    .get('.character-card').first().contains('h3','Ant-Man').should('be.visible')
    .get(".input[id=Attribute]").select("Speed").should('have.value','speed')
    .get('.character-card').first().contains('h3','Air-Walker').should('be.visible')
    .get(".input[id=Attribute]").select("Combat").should('have.value','combat')
    .get('.character-card').first().contains('h3','Ares').should('be.visible')
    // .get(".title-search").contains('h3','Choose Publisher:').should('be.visible')
    // .get(".input[id=Publisher]").should('be.visible')
    // .get(".title-search").contains('h3','Hero or Villian?').should('be.visible')
    // .get(".input[id=Alignment]").should('be.visible')
    // .get(".title-search").contains('h3','Sort By Attribute:').should('be.visible')
    // .get(".input[id=Attribute]").should('be.visible')
  })
})
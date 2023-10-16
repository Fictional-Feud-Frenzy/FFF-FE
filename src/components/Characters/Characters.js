import CharacterCard from "../CharacterCard/CharacterCard"
import "./Characters.css"

export default function Characters({characters, selectCharacter, player1, player2, displayFight}){
  let displayedCharacters = characters.map(character=>{
    character.key = character.id
  return (
    <CharacterCard 
      name={character.name}
      image={character.image}
      id={character.id}
      key={character.id}
      character={character}
      selectCharacter={selectCharacter}
    />
  )
  })
  console.log(player1.image)
return(
  <div className="characters">
    <div className="characters-header">
      {player1.image !== undefined?
      <div>
        <p>Player 1:</p>
        <img src={player1.image} alt={player1.name} /> 
        <p>{player1.name}</p>
      </div>:<p>Please Choose Player 1!!!</p>}
      <div className="title-search">
        {player1.image&&player2.image?<button className="fight-button" onClick={()=>{displayFight()}}>Fight!!!</button>
        :<h1>Choose Your Characters!</h1>} 
        <input type="text" placeholder="Search Characters"/>
        <button>Search</button>
      </div>
      {player2.image !== undefined?
      <div>
        <p>Player 2:</p>
        <img src={player2.image} alt={player2.name} /> 
        <p>{player2.name}</p>
      </div>:<p>Please Choose Player 2!!!</p>}
    </div>
    <div className="characters-list">
      {displayedCharacters}
    </div>
  </div>
)
}
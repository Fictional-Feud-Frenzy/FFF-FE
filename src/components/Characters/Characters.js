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
return(
  <div className="characters">
    <div className="characters-header">
      {player1?<img src={player1.image} alt={player1.name} />:<p>Please Choose Player 1</p>}
      <div className="title-search">
        {player1&&player2?<button onClick={()=>{displayFight()}}>Fight!!!</button>:<h1>Choose Your Characters</h1>} 
        <input type="text" placeholder="Search Characters"/>
        <button>Search</button>
      </div>
      {player2?<img src={player2.image} alt={player2.name} />:<p>Please Choose Player 2</p>}
    </div>
    <div className="characters-list">
      {displayedCharacters}
    </div>
  </div>
)
}
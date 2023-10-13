import CharacterCard from "../CharacterCard/CharacterCard"
import "./Characters.css"

export default function Characters({characters, selectCharacter}){
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
   {displayedCharacters}
  </div>
)
}
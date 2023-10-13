import "./Characters.css"

export default function Characters({characters, selectCharacter}){
  let displayedCharacters = characters.map(character=>{
    character.key = character.id
  return (
    <div className="character-card" onClick={()=>selectCharacter(character)} key={character.id}>
    <img src={character.image} alt={character.name} />
    <h3 className="name">{character.name}</h3>
    </div>
  )
  })
return(
  <div className="characters">
   {displayedCharacters}
  </div>
)
}
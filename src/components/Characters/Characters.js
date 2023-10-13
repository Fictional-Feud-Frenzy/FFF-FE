import "./Characters.css"

export default function Characters({characters}){
  let displayedCharacters = characters.map(character=>{
  return (
    <div className="character-card" >
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
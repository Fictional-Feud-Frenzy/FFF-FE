import './CharacterInfo.css'

export default function CharacterInfo({character, selectPlayer1, selectPlayer2}){
return (
  <div className="character-info">
    <div className="character-header">
      <button>Back</button>
      <h1>{character.name}</h1>
      <div className="select-btns">
        <button onClick={()=>selectPlayer1(character)}>select p1</button>
        <button onClick={()=>selectPlayer2(character)}>select p2</button>
      </div>
    </div>
    <div className="description-container">
      <div className="character-picpub" >
        <img src={character.image} className="character-img" alt={character.name}/>
        <p>Published by: {character.publisher}</p>
      </div>
      <div className="character-stats">
        <p>intelligence: {character.intelligence}</p>
        <p>Strength: {character.strength}</p>
        <p>Speed: {character.speed}</p>
        <p>Durability: {character.durability}</p>
        <p>Power: {character.power}</p>
        <p>Combat: {character.combat}</p>
      </div>
    </div>
  </div>
)
}
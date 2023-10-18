import './CharacterInfo.css'

// const GET_CHARACTER = gql'
//   query Character($id: Integer!) {
//     character (byId: $id) {
//       id
//       name
//       intelligence
//       strength
//       speed
//       durability
//       power
//       combat
//       full_name
//       place_of_birth
//       publisher
//       alignment
//       gender
//       race
//       height
//       weight
//       eye_color
//       hair_color
//       group_affiliation
//       image
//     }
//   }
// ';

export default function CharacterInfo({character, selectPlayer1, selectPlayer2}){
return (
  <div className="character-info">
    <div className="character-header">
        <button onClick={()=>selectPlayer1(character)}>select p1</button>
      <h1>{character.name}</h1>
        <button onClick={()=>selectPlayer2(character)}>select p2</button>
    </div>
    <div className="description-container">
      <div className="character-picpub" >
        <img src={character.image} className="character-image" alt={character.name}/>
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
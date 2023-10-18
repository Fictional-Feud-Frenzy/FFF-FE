import './CharacterInfo.css'
import { Link } from 'react-router-dom'

export default function CharacterInfo({character, selectPlayer1, selectPlayer2}){
return (
  <div className="character-info">
    <div className="character-header">
      <Link to="/characters">
        <button onClick={()=>selectPlayer1(character)}>select p1</button>
      </Link>
      <h1>{character.name}</h1>
      <Link to="/characters">
        <button onClick={()=>selectPlayer2(character)}>select p2</button>
      </Link>
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
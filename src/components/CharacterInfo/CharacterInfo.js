import './CharacterInfo.css';
import { Link } from 'react-router-dom';
import { useQuery, gql } from "@apollo/client"
import {useParams} from 'react-router-dom'

const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character (id: $id) {
      id
      name
      intelligence
      strength
      speed
      durability
      power
      combat
      fullName
      placeOfBirth
      publisher
      alignment
      gender
      race
      height
      weight
      eyeColor
      hairColor
      groupAffiliation
      image
      powerStatsWeightedAverage
    }
  }
`;

export default function CharacterInfo({setCharacter, character, selectPlayer1, selectPlayer2}){
  let id = useParams().id
  // console.log(useParams().id)
  const {data, loading, error} = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data.character)
  setCharacter(data.character)
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
        <p>Name: {character.name} ({character.fullName})</p>
        <p>Good or Bad: {character.alignment}</p>
        <p>intelligence: {character.intelligence}</p>
        <p>Strength: {character.strength}</p>
        <p>Speed: {character.speed}</p>
        <p>Durability: {character.durability}</p>
        <p>Power: {character.power}</p>
        <p>Combat: {character.combat}</p>
        <p>Eye Color: {character.eyeColor}</p>
        <p>Gender: {character.gender}</p>
        <p>Team: {character.groupAffiliation}</p>
        <p>Hair Color: {character.hairColor}</p>
        <p>Height: {character.height}</p>
        <p>Weight: {character.weight}</p>
        <p>Place Of Birth: {character.placeOfBirth}</p>
        <p>Race: {character.race}</p>
      </div>
    </div>
  </div>
)
}
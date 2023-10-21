import './CharacterInfo.css';
import { Link } from 'react-router-dom';
import { useQuery, gql } from "@apollo/client"
import {useParams} from 'react-router-dom'
import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { sampleCharacter } from './sampleCharacter';

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
  const {data, loading, error} = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  useEffect(()=>{
    setCharacter(data?data.character:character)
  },[data, character, setCharacter])
  if (loading) return null;
  if (error) return `Error! ${error}`;

return (
  <div className="character-info">
    <img className="bg-img bg-img-info" src="https://get.wallhere.com/photo/night-Batman-cave-midnight-comic-art-Bat-Cave-stage-theatre-darkness-screenshot-nightclub-music-venue-scenographer-195499.jpg" alt="batcave background"></img>
    <div className="content-container">

    <div className="character-header">
      <Link to="/characters">
        <button className="select-character-button" onClick={()=>selectPlayer1(character)}>select p1</button>
      </Link>
      <h1 className="white-text character-name">{character.name}</h1>
      <Link to="/characters">
        <button className="select-character-button" onClick={()=>selectPlayer2(character)}>select p2</button>
      </Link>
    </div>
    <div className="description-container">
      <div className="character-picpub" >
        <img src={character.image} className="character-image" alt={character.name}/>
        <p className="white-text">Published by: {character.publisher}</p>
      </div>
      <div className="character-stats">
        <p><strong>Name:</strong> {character.name} {character.fullName && `(${character.fullName})`}</p>
        <p><strong>Good or Bad:</strong> {character.alignment}</p>
        <p><strong>intelligence:</strong> {character.intelligence}</p>
        <p><strong>Strength:</strong> {character.strength}</p>
        <p><strong>Speed:</strong> {character.speed}</p>
        <p><strong>Durability:</strong> {character.durability}</p>
        <p><strong>Power:</strong> {character.power}</p>
        <p><strong>Combat:</strong> {character.combat}</p>
        <p><strong>Team:</strong> {character.groupAffiliation}</p>
        <p><strong>Eye Color:</strong> {character.eyeColor}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Hair Color:</strong> {character.hairColor}</p>
        <p><strong>Height:</strong> {character.height}</p>
        <p><strong>Weight:</strong> {character.weight}</p>
        <p><strong>Place Of Birth:</strong> {character.placeOfBirth}</p>
        <p><strong>Race:</strong> {character.race}</p>
        <Link to="/characters" className="back-button">
          <p> ⬅️ </p>
        </Link>
      </div>
    </div>
    </div>
  </div>
)
}

CharacterInfo.propTypes = {
  setCharacter: PropTypes.func.isRequired, 
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    intelligence: PropTypes.number,
    strength: PropTypes.number,
    speed: PropTypes.number,
    durability: PropTypes.number,
    power: PropTypes.number,
    combat: PropTypes.number,
    fullName: PropTypes.string,
    publisher: PropTypes.string,
    alignment: PropTypes.string,
    image: PropTypes.string,
    placeOfBirth: PropTypes.string,
    powerStatsWeightedAverage: PropTypes.number,
  }).isRequired, 
  selectPlayer1: PropTypes.func.isRequired, 
  selectPlayer2: PropTypes.func.isRequired
}
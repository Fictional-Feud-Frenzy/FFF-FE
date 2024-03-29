import CharacterCard from "../CharacterCard/CharacterCard"
import "./Characters.css"
import { NavLink, Link } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { testCharacters } from './testData'

const GET_CHARACTERS = gql`
query characters {
  characters {
      id
      name
      intelligence
      strength
      speed
      durability
      power
      combat
      fullName
      publisher
      alignment
      image
  }
}
`;

export default function Characters({userInput, setUserInput, setPublisher, publisher, setAlignment, alignment, attribute, setAttribute,
   filterCharactersByNamePublisherAlignment, characters, setCharacters, selectCharacter, player1, player2, clear}){
     const {data, loading, error} = useQuery(GET_CHARACTERS);
   useEffect(()=>{
    setCharacters(data?data.characters:testCharacters)
   },[data, setCharacters])
    let displayedCharacters = characters.map(({
      id,
      name,
      intelligence,
      strength,
      speed,
      durability,
      power,
      combat,
      fullName,
      publisher,
      alignment,
      image}) => {
    return (
      <CharacterCard id={id} name={name} image={image} key={id} intelligence={intelligence} strength={strength} speed={speed}
       durability={durability} power={power} combat={combat} fullName={fullName} publisher={publisher} alignment={alignment}
      character={{ id, name, intelligence, strength, speed, durability, power, combat, fullName, publisher, alignment, image}}
      selectCharacter={selectCharacter} clear={clear}
    />
    )
})
  if (loading) return 'Loading...';
  if (error) return 'Error';
return(
  <div className="characters">
    <img className="bg-img" src="https://www.therange.co.uk/media/3/2/1655910356_7164.jpg" alt="comic panel background"></img>
    <div className="characters-header content-container">
      {player1.image !== undefined?
      <NavLink to={player1.id}>
      <div className="player-header">
        <p>Player 1:</p>
        <img className="character-image-header" src={player1.image} alt={player1.name} />
        <p>{player1.name}</p>
      </div>
      </NavLink>
      :<h2 className="unknown-selection" >Please Select<br/>Player #1</h2>}
      <div className="title-search">
        {player1.image&&player2.image?
        <Link to="/battle-mode">
          <button className="fight-button">FIGHT!!!</button>
        </Link>
        :<h2 className="input-text">Choose Your Characters!</h2>} 
        <h3 className="input-text">Search By Name:</h3>
        <input className="input search-input" type="text" id="search-input" placeholder="Search Names" name="searchCharacters" onChange={event =>{
          filterCharactersByNamePublisherAlignment(data, event.target.value, publisher, alignment, attribute)
          setUserInput(event.target.value)
          }}/>
        <h3 className="input-text">Choose Publisher:</h3>
        <select className="input" name="publisher-dropdown" id="Publisher" label="choose" onChange={event =>{
          filterCharactersByNamePublisherAlignment(data, userInput, event.target.value, alignment, attribute)
          setPublisher(event.target.value)
        }}>
          <option value="all">ALL Publishers</option>
          <option value="DC Comics">DC Comics</option>
          <option value="Marvel Comics">Marvel</option>
          <option value="Dark Horse Comics">Dark Horse Comics</option>
          <option value="George Lucas">George Lucas</option>
          <option value="Star Trek">Star Trek</option>
          <option value="SyFy">SyFy</option>
          <option value="NBC - Heroes">NBC - Heroes</option>
          <option value="other">Other</option>
        </select>
        <h3 className="input-text">Hero or Villian?</h3>
        <select className="input" name="alignment-dropdown" id="Alignment" label="choose" onChange={event =>{
          filterCharactersByNamePublisherAlignment(data, userInput, publisher, event.target.value, attribute)
          setAlignment(event.target.value)
        }}>
          <option value="all">ALL Characters</option>
          <option value="good">Hero</option>
          <option value="bad">Villian</option>
          <option value="other">Neutral</option>
        </select>
        <h3 className="input-text">Sort By Attribute:</h3>
        <select className="input" name="attribute-dropdown" id="Attribute" label="choose" onChange={event =>{
          filterCharactersByNamePublisherAlignment(data, userInput, publisher, alignment, event.target.value)
          setAttribute(event.target.value)
        }}>
          <option value="any">Any Attribute</option>
          <option value="intelligence">Intelligence</option>
          <option value="strength">Strength</option>
          <option value="speed">Speed</option>
          <option value="durability">Durability</option>
          <option value="power">Power</option>
          <option value="combat">Combat</option>
        </select>
      </div>
      {player2.image !== undefined?
      <NavLink to={player2.id}>
      <div className="player-header">
        <p>Player 2:</p>
        <img className="character-image-header" src={player2.image} alt={player2.name} />
        <p>{player2.name}</p>
      </div>
      </NavLink>
      :<h2 className="unknown-selection" >Please Select<br/>Player #2</h2>}
    </div>
    <div className="characters-list content-container">
      {displayedCharacters.length?displayedCharacters:<p className="white" >No characters found, please try a different search.</p>}
    </div>
  </div>
);
}

Characters.propTypes = {
  userInput: PropTypes.string.isRequired,
  setUserInput: PropTypes.func.isRequired, 
  setPublisher: PropTypes.func.isRequired, 
  publisher: PropTypes.string.isRequired, 
  setAlignment: PropTypes.func.isRequired, 
  alignment: PropTypes.string.isRequired, 
  attribute: PropTypes.string.isRequired, 
  setAttribute: PropTypes.func.isRequired,
  filterCharactersByNamePublisherAlignment: PropTypes.func.isRequired, 
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      intelligence: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      durability: PropTypes.number.isRequired,
      power: PropTypes.number.isRequired,
      combat: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      alignment: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired, 
  setCharacters: PropTypes.func.isRequired, 
  selectCharacter: PropTypes.func.isRequired, 
  player1: PropTypes.PropTypes.shape({
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
  }).isRequired, 
  player2: PropTypes.PropTypes.shape({
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
  }).isRequired, 
  clear: PropTypes.func.isRequired
}
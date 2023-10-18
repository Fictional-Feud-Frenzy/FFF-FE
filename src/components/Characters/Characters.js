import { useState } from "react"
import CharacterCard from "../CharacterCard/CharacterCard"
import "./Characters.css"
import { Link } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"

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

export default function Characters({setDropDownInput, dropDownInput, filterCharactersByName, sortCharactersByPublisher, characters, setCharacters, selectCharacter, player1, player2, displayFight}){
  const [userInput, setUserInput] = useState('')
    const {data, loading, error} = useQuery(GET_CHARACTERS);
    if(!userInput && dropDownInput==='all'){setCharacters(data ? data.characters : characters)}
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
      selectCharacter={selectCharacter}
    />
    )
})

console.log(displayedCharacters.length)
  if (loading) return 'Loading...';
  if (error) return 'Error';
return(
  <div className="characters">
    <div className="characters-header">
      {player1.image !== undefined?
      <div>
        <p>Player 1:</p>
        <img className="character-image-header" src={player1.image} alt={player1.name} />
        <p>{player1.name}</p>
      </div>:<p>Please Select Player #1!!!</p>}
      <div className="title-search">
        {player1.image&&player2.image?
        <Link to="/battle-mode">
          <button className="fight-button" onClick={()=>{displayFight()}}>Fight!!!</button>
        </Link>
        :<h2>Choose Your Characters!</h2>} 
        <h3>Choose Publisher:</h3>
        <select name="publisher-dropdown" id="Select" label="choose" onChange={event =>{
          sortCharactersByPublisher(data, event.target.value)
          setDropDownInput(event.target.value)
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
        <h3>Search By Name:</h3>
        <input type="text" placeholder="Search Names" name="searchCharacters" onChange={event =>{
          filterCharactersByName(data, event.target.value)
          setUserInput(event.target.value)
          }}/>
      </div>
      {player2.image !== undefined?
      <div>
        <p>Player 2:</p>
        <img className="character-image-header" src={player2.image} alt={player2.name} />
        <p>{player2.name}</p>
      </div>:<p>Please Select Player #2!!!</p>}
    </div>
    <div className="characters-list">
      {displayedCharacters.length?displayedCharacters:<p>No characters found, please try a different search.</p>}
    </div>
  </div>
);
}
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

export default function Characters({userInput, setUserInput, setPublisher, publisher, setAlignment, alignment,
   filterCharactersByNamePublisherAlignment, characters, setCharacters, selectCharacter, player1, player2, displayFight, clear}){
     const {data, loading, error} = useQuery(GET_CHARACTERS);
    if(!userInput && publisher==='all' && alignment==='all'){setCharacters(data ? data.characters : characters)}
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
      <div className="player-header">
        <p>Player 1:</p>
        <img className="character-image-header" src={player1.image} alt={player1.name} />
        <p>{player1.name}</p>
      </div>:<h2 className="unknown-selection" >Please Select<br/>Player #1</h2>}
      <div className="title-search">
        {player1.image&&player2.image?
        <Link to="/battle-mode">
          <button className="fight-button" onClick={()=>{displayFight()}}>FIGHT!!!</button>
        </Link>
        :<h2>Choose Your Characters!</h2>} 
        <h3>Choose Publisher:</h3>
        <select className="input" name="publisher-dropdown" id="Publisher" label="choose" onChange={event =>{
          filterCharactersByNamePublisherAlignment(data, userInput, event.target.value, alignment)
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
        <h3>Hero or Villian?</h3>
        <select className="input" name="alignment-dropdown" id="Alignment" label="choose" onChange={event =>{
          filterCharactersByNamePublisherAlignment(data, userInput, publisher, event.target.value)
          setAlignment(event.target.value)
        }}>
          <option value="all">ALL Characters</option>
          <option value="good">Hero</option>
          <option value="bad">Villian</option>
          <option value="other">Neutral</option>
        </select>
        <h3>Search By Name:</h3>
        <input className="input search-input" type="text" placeholder="Search Names" name="searchCharacters" onChange={event =>{
          filterCharactersByNamePublisherAlignment(data, event.target.value, publisher, alignment)
          setUserInput(event.target.value)
          }}/>
      </div>
      {player2.image !== undefined?
      <div className="player-header">
        <p>Player 2:</p>
        <img className="character-image-header" src={player2.image} alt={player2.name} />
        <p>{player2.name}</p>
      </div>:<h2 className="unknown-selection" >Please Select<br/>Player #2</h2>}
    </div>
    <div className="characters-list content-container">
      {displayedCharacters.length?displayedCharacters:<p>No characters found, please try a different search.</p>}
    </div>
  </div>
);
}
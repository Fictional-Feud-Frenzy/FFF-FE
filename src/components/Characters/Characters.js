import { useState } from "react"
import CharacterCard from "../CharacterCard/CharacterCard"
import "./Characters.css"
import { Link } from "react-router-dom"

export default function Characters({setDropDownInput, dropDownInput, filterCharacters, characters, selectCharacter, player1, player2, displayFight, getCharacters}){
  const [userInput, setUserInput] = useState('')
  let displayedCharacters = characters.map(character=>{
    character.key = character.id
    if(dropDownInput === 'other' && character.publisher !== 'marvel' && character.publisher !== 'DC Comics'){
    return (
      <CharacterCard 
        name={character.name}
        image={character.image}
        id={character.id}
        key={character.id}
        character={character}
        selectCharacter={selectCharacter}
      />
    )} 
  if(character.publisher===dropDownInput){
    return (
      <CharacterCard 
        name={character.name}
        image={character.image}
        id={character.id}
        key={character.id}
        character={character}
        selectCharacter={selectCharacter}
      /> 
    )} 
  if (dropDownInput === 'all') {
  return (
    <CharacterCard 
      name={character.name}
      image={character.image}
      id={character.id}
      key={character.id}
      character={character}
      selectCharacter={selectCharacter}
    />
  )}
  return true
})
  

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
        setDropDownInput(event.target.value)}}>
          <option value="all">ALL Publishers</option>
          <option value="DC Comics">DC Comics</option>
          <option value="marvel">Marvel</option>
          <option value="other">Other</option>
        </select>
        <h3>Search By Name:</h3>
        <input type="text" placeholder="Search Names" name="searchCharacters" onChange={event =>{ 
        getCharacters()
        setUserInput(event.target.value)}}/>
        <button onClick={()=>filterCharacters(userInput)}>Search</button>
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
)
}
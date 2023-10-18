
import './App.css';
import { useState } from 'react';
import Characters from "../Characters/Characters"
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import BattleScreen from '../BattleScreen/BattleScreen';
import client from "../../ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import { testCharacters } from "./testData";

function App() {
  const [characters, setCharacters] = useState(testCharacters);
  const [character, setCharacter] = useState({})
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [winner, setWinner] = useState("")
  const [dropDownInput, setDropDownInput] = useState("all")

  function selectCharacter(newCharacter){
    setCharacter(newCharacter)
  }

  function selectPlayer1(input){
    setCharacter({})
    setPlayer1(input)
    // getCharacters()
  }
  
  function selectPlayer2(input){
    setCharacter({})
    setPlayer2(input)
    // getCharacters()
  }

  function displayWinner(){
    if(player1.strength > player2.strength){
      setWinner(`${player1.name} wins!`)
    }else if(player1.strength < player2.strength){
      setWinner(`${player2.name} wins!`)
    }else{
      setWinner("It's a tie!")
    }
  }

  function filterCharacters(userInput){
    let filteredCharacters = characters.filter(character=> {
      return character.name.toLowerCase().includes(userInput.toLowerCase())
    } )
    if(!filteredCharacters.length){filteredCharacters = characters.filter(character=> {
      return character.full_name.toLowerCase().includes(userInput.toLowerCase())
    } )}
    setCharacters(filteredCharacters)
  }

  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <div className="Header">
          <h1>Fictional Feud Frenzy</h1>
        </div>
        <button className="characters-button">View Characters</button>
        {!character.name?<Characters dropDownInput={dropDownInput} setDropDownInput={setDropDownInput}
          filterCharacters={filterCharacters} characters={characters} setCharacters={setCharacters}
          selectCharacter={selectCharacter} player1={player1} player2={player2} displayFight={displayWinner}>
        </Characters>:
        <CharacterInfo character={character} selectPlayer1={selectPlayer1} selectPlayer2={selectPlayer2}/>}
        <BattleScreen player1={player1} player2={player2} winner={winner}></BattleScreen>
      </div>
    </ApolloProvider>
  );
}

export default App;

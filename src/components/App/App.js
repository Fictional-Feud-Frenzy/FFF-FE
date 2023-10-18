
import './App.css';
import { useState } from 'react';
import Characters from "../Characters/Characters"
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import BattleScreen from '../BattleScreen/BattleScreen';
import LandingPage from '../LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { testCharacters } from './testData'

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
    <div className="App">
      <div className="Header">
        <h1>Fictional Feud Frenzy</h1>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters dropDownInput={dropDownInput} setDropDownInput={setDropDownInput}
          filterCharacters={filterCharacters} characters={characters}
          selectCharacter={selectCharacter} player1={player1} player2={player2} displayFight={displayWinner} />} />
        <Route path="/:id" element={<CharacterInfo character={character} selectPlayer1={selectPlayer1} selectPlayer2={selectPlayer2}/>} />
        <Route path="/battle-mode" element={<BattleScreen player1={player1} player2={player2} winner={winner} />} />
      </Routes>
    </div>
  );
}

export default App;

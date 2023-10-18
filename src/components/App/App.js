
import './App.css';
import { useState } from 'react';
import Characters from "../Characters/Characters"
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import BattleScreen from '../BattleScreen/BattleScreen';
import LandingPage from '../LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { testCharacters } from './testData'
import { ApolloProvider } from '@apollo/client'
import client from "../../ApolloClient/client";

function App() {
  const [characters, setCharacters] = useState(testCharacters);
  const [character, setCharacter] = useState({})
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [winner, setWinner] = useState("")
  const [publisher, setPublisher] = useState("all")
  const [alignment, setAlignment] = useState("all")
  const [userInput, setUserInput] = useState('')

  function selectCharacter(newCharacter){
    setCharacter(newCharacter)
  }

  function selectPlayer1(input){
    setCharacter({})
    setPlayer1(input)
  }
  
  function selectPlayer2(input){
    setCharacter({})
    setPlayer2(input)
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
  
  function filterCharactersByNamePublisherAlignment(data, userInput, publisher, alignment){
    let filteredCharacters = data.characters.filter(character=> {

      if(publisher==='all' && alignment==='all' && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher==='all' && alignment==='all' && character.fullName.toLowerCase().includes(userInput.toLowerCase())
      ) {return character }

      if(
        publisher === character.publisher && alignment==='all' && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher === character.publisher && alignment==='all' && character.fullName.toLowerCase().includes(userInput.toLowerCase())
       || publisher === 'all' && alignment===character.alignment && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher === 'all' && alignment===character.alignment && character.fullName.toLowerCase().includes(userInput.toLowerCase())
       || publisher === character.publisher && alignment===character.alignment && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher === character.publisher && alignment===character.alignment && character.fullName.toLowerCase().includes(userInput.toLowerCase())
      ){ return character }

      if(
       publisher === 'other' && alignment===character.alignment && character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes'
       && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher === 'other' && alignment===character.alignment && character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes' && 
       character.fullName.toLowerCase().includes(userInput.toLowerCase())
       || publisher === character.publisher && alignment==='other' && character.alignment !=='good' && character.alignment !=='bad'&& character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes'
       && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher === character.publisher && alignment==='other' && character.alignment !=='good' && character.alignment !=='bad'&& character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes' && 
       character.fullName.toLowerCase().includes(userInput.toLowerCase())
       ||
       publisher === 'other' && alignment==='all' && character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes'
       && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher === 'other' && alignment==='all' && character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes' && 
       character.fullName.toLowerCase().includes(userInput.toLowerCase())
       || publisher === 'all' && alignment==='other' && character.alignment !=='good' && character.alignment !=='bad'&& character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes'
       && character.name.toLowerCase().includes(userInput.toLowerCase())
       || publisher === 'all' && alignment==='other' && character.alignment !=='good' && character.alignment !=='bad'&& character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
       && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
       && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes' && 
       character.fullName.toLowerCase().includes(userInput.toLowerCase())
      ){ return character }
    } )
    setCharacters(filteredCharacters)
  }

  
  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <div className="Header">
          <h1>Fictional Feud Frenzy</h1>
        </div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters publisher={publisher} setPublisher={setPublisher} alignment={alignment}
          setAlignment={setAlignment} filterCharactersByNamePublisherAlignment={filterCharactersByNamePublisherAlignment}
          characters={characters} userInput={userInput} setUserInput={setUserInput}
          selectCharacter={selectCharacter} player1={player1} player2={player2} displayFight={displayWinner} setCharacters={setCharacters} />} />
        <Route path="/:id" element={<CharacterInfo character={character} selectPlayer1={selectPlayer1} selectPlayer2={selectPlayer2}/>} />
        <Route path="/battle-mode" element={<BattleScreen player1={player1} player2={player2} winner={winner} />} />
      </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;

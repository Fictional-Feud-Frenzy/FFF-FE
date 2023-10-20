
import './App.css';
import { useState } from 'react';
import Characters from "../Characters/Characters"
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import BattleScreen from '../BattleScreen/BattleScreen';
import LandingPage from '../LandingPage/LandingPage';
import { Routes, Route, Link } from 'react-router-dom';
import { testCharacters } from './testData'
import { ApolloProvider } from '@apollo/client'
import client from "../../ApolloClient/client";
import ffflogo from "../../assets/ffflogo.png";

function App() {
  const [characters, setCharacters] = useState(testCharacters);
  const [character, setCharacter] = useState({})
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [winner, setWinner] = useState("")
  const [publisher, setPublisher] = useState("all")
  const [alignment, setAlignment] = useState("all")
  const [userInput, setUserInput] = useState('')

  function clear(){
    setPublisher("all")
    setAlignment("all")
    setUserInput("")
  }

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
    setWinner("");
    setTimeout(() =>{
      if(player1.powerStatsWeightedAverage > player2.powerStatsWeightedAverage){
        setWinner(`${player1.name} wins!`)
      }else if(player1.powerStatsWeightedAverage < player2.powerStatsWeightedAverage){
        setWinner(`${player2.name} wins!`)
      }else{
        setWinner("It's a tie!")
      }
    return
  }, 3000)
  }

  function filterCharactersByNamePublisherAlignment(data, userInput, publisher, alignment){
    let filteredCharacters = data.characters

    function sortCharactersByPublisher(filteredCharacters){
      return filteredCharacters.filter(character=>{
        if(publisher === 'all') { return character }
        if(publisher===character.publisher){ return character }
        if (publisher === 'other' && character.publisher !== 'Marvel Comics' && character.publisher !== 'DC Comics'
        && character.publisher !== 'Dark Horse Comics' && character.publisher !== 'George Lucas'
           && character.publisher !== 'Star Trek' && character.publisher !== 'SyFy' && character.publisher !== 'NBC - Heroes')
           { return character}
        return false
      })
    }
    filteredCharacters = sortCharactersByPublisher(filteredCharacters)

    function sortCharactersByAlignment(filteredCharacters){
      return filteredCharacters.filter(character=>{
        if(alignment === 'all') { return character }
        if(alignment===character.alignment){ return character }
        if (alignment === 'other' && character.alignment !== 'good' && character.alignment !== 'bad')
           { return character}
        return false
      })
    }
    filteredCharacters = sortCharactersByAlignment(filteredCharacters)

    function sortCharactersByName(filteredCharacters){
      return filteredCharacters.filter(character=>
        character.name.toLowerCase().includes(userInput.toLowerCase()) 
        || character.fullName.toLowerCase().includes(userInput.toLowerCase())
      )
    }
    filteredCharacters = sortCharactersByName(filteredCharacters)
    
      setCharacters(filteredCharacters)
    }
    
    return (
      <ApolloProvider client = {client}>
      <div className="App">
        <div className="Header">
          <Link to="/">
            <img className="logo" src={ffflogo} alt="fff-logo"/>
          </Link>
        </div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters publisher={publisher} setPublisher={setPublisher} alignment={alignment}
          setAlignment={setAlignment} filterCharactersByNamePublisherAlignment={filterCharactersByNamePublisherAlignment}
          characters={characters} userInput={userInput} setUserInput={setUserInput} clear={clear}
          selectCharacter={selectCharacter} player1={player1} player2={player2} displayFight={displayWinner} setCharacters={setCharacters} />} />
        <Route path="/:id" element={<CharacterInfo setCharacter={setCharacter} character={character} selectPlayer1={selectPlayer1} selectPlayer2={selectPlayer2}/>} />
        <Route path="/battle-mode" element={<BattleScreen player1={player1} player2={player2} winner={winner} />} />
      </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;

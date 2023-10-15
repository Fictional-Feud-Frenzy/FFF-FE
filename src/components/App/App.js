
import './App.css';
import { useState } from 'react';
import Characters from "../Characters/Characters"
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import BattleScreen from '../BattleScreen/BattleScreen';
import client from "../../ApolloClient/client";
import { ApolloProvider } from '@apollo/client';

function App() {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState({})
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [winner, setWinner] = useState("")

  function selectCharacter(newCharacter){
    setCharacter(newCharacter)
  }

  function selectPlayer1(input){
    setPlayer1(input)
  }

  function selectPlayer2(input){
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

  // function displayFight(){
  //   setWinner(setTimeout(function(){ displayWinner() }, 5000));
  //   displayWinner()
  // }

  function getCharacters(){
      setCharacters([
        {id:1, name:'batman', intelligence: 100, strength: 26, speed: 27, durability: 50, power: 47, combat: 100, publisher: "DC Comics", image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:2, name:'batman2', intelligence: 99, strength: 25, speed: 26, durability: 49, power: 46, combat: 99, image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:3, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:4, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:5, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:6, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:7, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:8, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:9, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:10, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:11, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:12, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:13, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:14, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:15, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:16, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:17, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
    ])
  }

  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <div className="Header">
          <h1>Fictional Feud Frenzy</h1>
        </div>
        <button className="characters-button" onClick={()=>{getCharacters()}}>View Characters</button>
        <Characters characters={characters} selectCharacter={selectCharacter} player1={player1} player2={player2} displayFight={displayWinner}></Characters>
        <CharacterInfo character={character} selectPlayer1={selectPlayer1} selectPlayer2={selectPlayer2}/>
        <BattleScreen player1={player1} player2={player2} winner={winner}></BattleScreen>
      </div>
    </ApolloProvider>
  );
}

export default App;

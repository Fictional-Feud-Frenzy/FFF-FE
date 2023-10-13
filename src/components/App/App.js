
import './App.css';
import { useState } from 'react';
import Characters from "../Characters/Characters"

function App() {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState({})
  
  function selectCharacter(newCharacter){
    setCharacter(newCharacter)
  }
  console.log(character)

  function getCharacters(){
      setCharacters([
        {id:1 ,name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
        {id:2, name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },
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
    <div className="App">
      <div className="Header">
        <h1>Fictional Feud Frenzy</h1>
      </div>
      <button className="characters-button" onClick={()=>{getCharacters()}}>View Characters</button>
      <Characters characters={characters} selectCharacter={selectCharacter}></Characters>
    </div>
  );
}

export default App;

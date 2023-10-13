
import './App.css';
import { useState } from 'react';
import Characters from "../Characters/Characters"

function App() {
  const [characters, setCharacters] = useState([{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },])
  
  function getCharacters(){
    setCharacters([{name:'batman', image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?resize=1024%2C683&ssl=1" },])
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Fictional Feud Frenzy</h1>
      </div>
      <button className="characters-button">View Characters</button>
      <Characters characters={characters}></Characters>
    </div>
  );
}

export default App;

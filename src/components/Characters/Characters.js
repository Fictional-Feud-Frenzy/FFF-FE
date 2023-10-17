import CharacterCard from "../CharacterCard/CharacterCard"
import "./Characters.css"
import { useQuery, gql } from '@apollo/client';

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

export default function Characters({ selectCharacter, player1, player2, displayFight}){
  const {data, loading, error} = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  let displayedCharacters = data.characters.map(({id,
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
    image}) =>{
  return (
    <CharacterCard 
      id={id}
      name={name}
      image={image}
      key={id}
      intelligence={intelligence}
      strength={strength}
      speed={speed}
      durability={durability}
      power={power}
      combat={combat}
      full_name={fullName}
      publisher={publisher}
      alignment={alignment}
      character={{ id, name, intelligence, strength, speed, durability,
      power, combat, fullName, publisher, alignment, image}}
      selectCharacter={selectCharacter}
    />
  )
  })

return (
  <div className="characters">
    <div className="characters-header">
      {player1?<img src={player1.image} alt={player1.name} />:<p>Please Choose Player 1</p>}
      <div className="title-search">
        {player1&&player2?<button onClick={()=>{displayFight()}}>Fight!!!</button>:<h1>Choose Your Characters</h1>} 
        <input type="text" placeholder="Search Characters"/>
        <button>Search</button>
      </div>
      {player2?<img src={player2.image} alt={player2.name} />:<p>Please Choose Player 2</p>}
    </div>
    <div className="characters-list">
      {displayedCharacters}
    </div>
  </div>
);
}
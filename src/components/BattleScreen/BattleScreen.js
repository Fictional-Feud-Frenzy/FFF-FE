import { Link } from 'react-router-dom';
import './BattleScreen.css';
import { useMutation, gql } from '@apollo/client';
import { useEffect, useState} from 'react';


const GET_BATTLE = gql`
mutation ($character1: Int!, $character2: Int!){
  createBattle(character1: $character1, character2: $character2) {
    id
    character1 {
      id
    }
    character2 {
      id
    }
    winner { 
      id
      name
    }
    description
  }
}
`;


function BattleScreen({player1, player2}){

  const [winner, setWinner] = useState("")
  let [description, setDescription] = useState('')
  let playerID1 = parseInt(player1.id)
  let playerID2 = parseInt(player2.id)
  
  const [createBattle, {data, loading, error}] = useMutation(GET_BATTLE, {
    variables: {
      character1: playerID1,
      character2: playerID2,
    },
  }); 
  useEffect(() => {
    setWinner('')
    if(data){ 
      setWinner(data.createBattle.winner.name)
      setDescription(data.createBattle.description)
    }
  }, [data]);
  
  useEffect(() => {
      createBattle();
    },[createBattle]);

    if (error) return `Error! ${error}`;

  return(
    <div className="battle-screen">
      <img className="bg-vid battle-bg-image" src="https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="arena"></img>
      <div className="battle-images content-container"> 
        <div className="selected-fighter1">
          {loading?
          <img className="battle-image shake" src={player1.image} alt={player1.name} /> :
          <img className="battle-image" src={player1.image} alt={player1.name} /> 
          }
          <h1 className="fighter1-name">{player1.name}</h1>
        </div>
        <div className="fight-results">
          {loading?
          <div >
            <p className="bang">💥</p>
            <p className="fighting">{player1.name} and {player2.name} are Fighting...</p>
          </div>
            :
          <div className="declared-winner">
            <h2 className="declared-winner" >{winner} wins!</h2>
            <p className="description">{description}</p>
          </div>
          }
        </div>
        <div className="selected-fighter2">
        {loading?
          <img className="battle-image shake" src={player2.image} alt={player2.name} /> :
          <img className="battle-image" src={player2.image} alt={player2.name} /> 
          }
          <h1 className="fighter2-name">{player2.name}</h1>
        </div>
      </div>
      <Link to="/characters" className="content-container">
        <button className="return-button" >Return To All Characters</button>
      </Link>
    </div>
  )
}

export default BattleScreen
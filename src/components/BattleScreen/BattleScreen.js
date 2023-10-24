import { Link, useNavigate, useParams } from 'react-router-dom';
import './BattleScreen.css';
import { useMutation, gql } from '@apollo/client';
import { useEffect, useState} from 'react';
import PropTypes from 'prop-types';


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
  let i = 0
  let reload = false
  let navigate = useNavigate()
  
  const [createBattle, {data, loading, error}] = useMutation(GET_BATTLE, {
    variables: {
      character1: playerID1,
      character2: playerID2,
    },
  }); 
  
  if(player1.id===undefined){
    reload = true
  }
  
  useEffect(()=>{
    if(player1.id===undefined){
    navigate('/characters')
    }
  },[reload])

  useEffect(() => {
    setWinner('')
    if(data){ 
      setWinner(data.createBattle.winner.name)
      setDescription(data.createBattle.description)
    }
  }, [data]);
  
  useEffect(() => {
      i++
      if(i%2 === 1 && player1.id && player2.id){
        createBattle()
      };
    },[createBattle,i]);

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
          <div className="fight-animation">
            <p className="fighting">{player1.name} and {player2.name} are Fighting!</p>
            <img className="gif shake" src="https://media.tenor.com/usAe9cUw1q0AAAAC/bam-pow.gif"></img>
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

BattleScreen.propTypes = {
  player1: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    intelligence: PropTypes.number,
    strength: PropTypes.number,
    speed: PropTypes.number,
    durability: PropTypes.number,
    power: PropTypes.number,
    combat: PropTypes.number,
    fullName: PropTypes.string,
    publisher: PropTypes.string,
    alignment: PropTypes.string,
    image: PropTypes.string,
    placeOfBirth: PropTypes.string,
    powerStatsWeightedAverage: PropTypes.number,
  }).isRequired,
  player2: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    intelligence: PropTypes.number,
    strength: PropTypes.number,
    speed: PropTypes.number,
    durability: PropTypes.number,
    power: PropTypes.number,
    combat: PropTypes.number,
    fullName: PropTypes.string,
    publisher: PropTypes.string,
    alignment: PropTypes.string,
    image: PropTypes.string,
    placeOfBirth: PropTypes.string,
    powerStatsWeightedAverage: PropTypes.number,
  }).isRequired
}

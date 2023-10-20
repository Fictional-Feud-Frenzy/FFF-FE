import { Link } from 'react-router-dom';
import './BattleScreen.css';

function BattleScreen({player1, player2, winner}){
  return(
    <div className="battle-screen">
      <img className="bg-vid battle-bg-image" src="https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="arena"></img>
      <div className="battle-images content-container"> 
        <div className="selected-fighter1">
          <img className="battle-image" src={player1.image} alt={player1.name} />
          <h1 className="fighter1-name">{player1.name}</h1>
        </div>
        <div className="fight-results">
          {winner?<h2 className="declared-winner" >{winner}</h2>:<p className="bang">💥</p>}
        </div>
        <div className="selected-fighter2">
          <img className="battle-image" src={player2.image} alt={player2.name} />
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
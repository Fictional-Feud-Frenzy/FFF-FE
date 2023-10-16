import './BattleScreen.css'

function BattleScreen({player1, player2, winner}){
  return(
    <div className="battle-screen">
      <div className="battle-images"> 
        <div className="selected-fighter1">
          <img className="battle-image" src={player1.image} alt={player1.name} />
          <p className="fighter1-name">{player1.name}</p>
        </div>
        {winner?<p>{winner}</p>:<p className="bang">💥</p>}
        <div className="selected-fighter2">
          <img className="battle-image" src={player2.image} alt={player2.name} />
          <p className="fighter2-name">{player2.name}</p>
        </div>
      </div>
      <button>Return To All Characters</button>
    </div>
  )
}

export default BattleScreen
import './BattleScreen.css'

function BattleScreen({player1, player2, winner}){
  return(
    <div className="battle-screen">
      <div className="battle-images"> 
        <img src={player1.image} alt={player1.name} />
        {winner?<p>{winner}</p>:<p className="bang">💥</p>}
        <img src={player2.image} alt={player2.name} />
      </div>
      <button>Select New Characters</button>
    </div>
  )
}

export default BattleScreen
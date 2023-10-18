import { Link } from "react-router-dom"

function LandingPage({characters, getCharacters}) {
  return(
    <Link to="/characters">
      <button className="characters-button" onClick={()=>{getCharacters()}}>View Characters</button>
    </Link>
  )
}

export default LandingPage
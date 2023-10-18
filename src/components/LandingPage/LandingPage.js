import { Link } from "react-router-dom";

function LandingPage() {
  return(
    <Link to="/characters">
      <button className="characters-button" >View Characters</button>
    </Link>
  )
}

export default LandingPage;
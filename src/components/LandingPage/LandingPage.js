import { Link } from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
  return(
    <Link to="/characters" className="characters-button-link">
      <div className="button-container">
        <h1 className="characters-button" >View Characters</h1>
      </div>
    </Link>
  )
}

export default LandingPage;
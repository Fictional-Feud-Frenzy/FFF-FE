import { Link } from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
  return(
    <div className="button-container">
      <Link to="/characters" className="characters-button-link">
        <h1 className="characters-button" >View Characters</h1>
      </Link>
    </div>
  )
}

export default LandingPage;
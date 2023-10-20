import { Link } from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="fullscreen-bg">
      <img className="bg-vid" src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg" alt="skyscrapers"></img>
      <div className="content-container">
        <div className="button-container">
          <Link to="/characters" className="characters-button-link">
            <h1 className="characters-button" >View Characters</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
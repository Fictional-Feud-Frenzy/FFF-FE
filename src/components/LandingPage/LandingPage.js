import { Link } from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="fullscreen-bg">
      <img className="bg-vid" src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg" alt="skyscrapers"></img>
      <div className="landing-container content-container">
        <div className="intro-container">
          <p className="intro">Join us in the ultimate battleground, where a roster of over 500 comic book legends collide in epic showdowns!
          <br/><br/>Our AI technology generates captivating comic book short stories for each battle, ensuring a unique experience every time. Will it be an epic showdown, a cunning strategy, or an unexpected twist that decides the victor? Find out in every pulse-pounding tale!
          <br/><br/>Stay tuned for upcoming features, like the highly-anticipated Battle Royale mode and user profiles to save your favorite fights and stories. “Fictional Feud Frenzy” will also offer kid-friendly tales or intense dark battle stories that are bound to satisfy every fan.
          <br/><br/>Step into the arena, settle debates, explore your favorite characters, and embrace the excitement of battles where the only limit is your imagination. “Fictional Feud Frenzy” - the ultimate test of superhuman powers awaits!
          <br/><br/>“Unleash Your Imagination in 'Fictional Feud Frenzy' - Where Legends Clash, and Heroes Rise!”</p>
        </div>
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
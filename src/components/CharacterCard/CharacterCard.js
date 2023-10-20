import { Link } from "react-router-dom";
import './CharacterCard.css';

function CharacterCard({ name, image, id, character, selectCharacter, clear}) {
  return (
    <Link to={`/${id}`} className="character-card-link" onClick={()=>clear()}>
      <div id={id} className="character-card" onClick={() => selectCharacter(character)} key={character.id}>
        <img className="character-images" src={image} alt={name} />
        <h3 className="name">{name}</h3>
      </div>
    </Link>
  )
}

export default CharacterCard;
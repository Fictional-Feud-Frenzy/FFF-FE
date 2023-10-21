import { Link } from "react-router-dom";
import './CharacterCard.css';
import PropTypes from 'prop-types';

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

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired, 
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    intelligence: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    durability: PropTypes.number.isRequired,
    power: PropTypes.number.isRequired,
    combat: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alignment: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired, 
  selectCharacter: PropTypes.func.isRequired, 
  clear: PropTypes.func.isRequired
}
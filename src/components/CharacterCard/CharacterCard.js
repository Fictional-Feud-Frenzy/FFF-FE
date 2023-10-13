function CharacterCard({ name, image, id, character, selectCharacter }) {
 return (
  <div id={id} className="character-card" onClick={()=>selectCharacter(character)} key={character.id}>
    <img src={image} alt={name} />
    <h3 className="name">{name}</h3>
    </div>
 ) 
}

export default CharacterCard;
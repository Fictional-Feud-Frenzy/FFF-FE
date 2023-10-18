function LandingPage({characters, getCharacters}) {
  return(
    !characters.length && <button className="characters-button" onClick={()=>{getCharacters()}}>View Characters</button>
  )
}

export default LandingPage
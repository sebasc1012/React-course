import { useEffect, useState } from "react";
import "./Rick.css"


export function Rick (){

  const[characters , setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState (1)

  const getCharacters = async () => {
    const response = await fetch (`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    const data = await response.json()
    console.log(data)
    setCharacters(data.results)
  }

  useEffect (()=>{
    getCharacters()
  },[currentPage]);

  const handleNext = ()=>{
    setCurrentPage((next) => next + 1)
  }
const handelBefore = () => {
  setCurrentPage ((bef) => bef - 1)
}
return(
  <article className="rm-contain-principal">
    <div className="rm-contenedor-titulos">
      <h1 className="rm-title-principal">Rick y morty Personajes </h1>
      <h2 className="rm-subtitle-secundario">Pagina actual {currentPage}</h2>
    </div>
     
     <div className="rm-contenedor-botones">
     <button className="rm-button firts" onClick={handelBefore}>Antes</button>
      <button className="rm-button second" onClick={handleNext}>Siguiente</button>
      
     </div>

     <div className="rm-informarion-characters">
        {characters.map((character) => {
        return <h4 key={character.id}>{character.name}</h4>}
        )
        }
     
     </div>
    
  </article>
 
)

}
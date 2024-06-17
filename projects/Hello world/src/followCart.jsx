import { useState } from "react";


export function FollowCart ({children, usuario, initialFollowing}) {

  const [isFollowing,setIsFollowing] = useState(initialFollowing) // si le colocamos un parametro como inicializacion en App la inicializamos como true or false lo que quiere decir es que dependiendo del estado de inicializacion cuando se renderice la pagina aparecera en este caso seguir o dejar de seguir 

  const textButton = isFollowing 
  ? 'siguiendo' 
  : 'seguir'
  const classButton = isFollowing 
  ? 'sb-botton-follow is-followin' 
  : 'sb-botton-follow'

  const handleClick = () => {
    setIsFollowing (!isFollowing)
  }
  
 

  return(
    <article className='sb-principal-article'>
    <header className='sb-principal-header'>
        <img 
        className='sb-imagen-avatar'
        alt="avatar" 
        src={`https://unavatar.io/${usuario}`}></img>
        <div className='sb-contenerdor-persona'>
          <strong className='sb-nombre-persona'>{children}</strong>
          <span className='sb-usuario-persona'>@{usuario}</span>
        </div>
        <button className = {classButton} onClick={handleClick}>{textButton}</button>
    </header>
  </article>
  )

}

// dentro de los parametros encontramos :
/* FormarUser = ese es el encargado de anezar el @ al nombre de usuario dentro de App.JSX Encontramos una funcion que nos dice que const Fromat = (usuario) => `@${usuario} en este punto agrega el @

el children se encarga de que por medio de este se pueda anexar texto desde App.jsx por ejemplo en nombre de las personas */
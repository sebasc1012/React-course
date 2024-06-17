
import './App.css'
import { FollowCart } from './followCart.jsx'

 export function App () {
  
  return(
   <div className='App'>
      <FollowCart  usuario = 'mariajose'>
        Sebastian castano
      </FollowCart>

      <FollowCart    usuario = 'sebastian'>
        carlos romero
      </FollowCart>

      <FollowCart initialFollowing={true}  userName= 'sebastian Romero' usuario = 'camilo'>
        Daniel romero
      </FollowCart>
   </div>
  )
}
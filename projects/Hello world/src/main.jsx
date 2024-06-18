import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { Rick } from './Rick.jsx'



const root = ReactDOM.createRoot(document.getElementById('root')) // en el "root" es donde vamos a renderizar nuestra aplicacion//
root.render(
  <div>
    <App/>
    <Rick/>
  </div>

)

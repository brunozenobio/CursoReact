import React from 'react'
import ReactDOM from 'react-dom/client'
import {App } from "./App";
import  './index.css'
import { TwitterFollowCard } from "./TwitterFollowCard";
const root = ReactDOM.createRoot(document.getElementById('root'))
//NO PUEDO RENDERIZAR MAS DE UN ELEMENTO; TENGO QUE USAR EL REACT FRAGMENT


//SI QUIERO REPLICAR EL BOTON PERO CON POR EJEMPLO
//DISTINTO CONTENIDO DEVERIA CREAR UN COMPOMENTE PARA REUTILIZAR
//COMPONENTE:FUNCION QUE DEVUELVE UN ELEMENTO
// KIS COMPONENTES SON PASCAL CASE
//PascalCase


root.render(
  <App />
)

//http://localhost:5173/
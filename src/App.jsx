// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokeHeader from './header'
import PokeFooter from './header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PokeHeader titulo={"Pokedex"} />
      <PokeFooter sitio={"Hola"} autor={"Isaac"}/>
    </>
  )
}

export default App

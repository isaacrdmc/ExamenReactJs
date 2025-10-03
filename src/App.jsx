import './App.css'
import PokeHeader from './header'
import PokeFooter from './header'

function App() {

  const creador = "Isaac Ramírez"
  const sitioWeb = ""
  const titulo = "Pokedex con PokeAPI"

  return (
    <>
      <PokeHeader titulo={titulo} />
      <h1></h1>
      <PokeFooter sitio={sitioWeb} autor={creador}/>
    </>
  )
}

export default App

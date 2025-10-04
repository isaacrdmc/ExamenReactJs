
import { useState } from "react";
import { Card, Container, Form, Button, Spinner } from "react-bootstrap";


// Componente para el buscador y la card:
export default function PokeBody() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");

//   ? Creamos una constante para realizar la peticion:
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!res.ok) throw new Error("No encontrado");
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
        console.log(err);
      setPokemon(null);
      alert("Pokémon no encontrado");
    } 
  };


//   ? Retornamos la tarjeta:
  return (
    <Container className="mt-4 text-center">
      <h1>Ingresa el pokmeon a buscar</h1>

      <Form className="d-flex justify-content-center mt-3" onSubmit={handleSearch}>
        
        
        <Form
          type="text"
          placeholder="Ingresa un número del pokemon para buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "250px" }}
        />
        <Button type="submit" className="ms-2">Buscar</Button>
      </Form>


    {/* // ^Sección de la card: */}
      {pokemon && (

        <Card className="mt-4 mx-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pokemon.sprites.front_default} />
        
          <Card>
            
            <Card>{pokemon.name}</Card>
            <Card>
              <b>Altura de tú pokemon:</b> {pokemon.height} <br />
              <b>Gordura del poke:</b> {pokemon.weight}
            </Card>
          </Card>

        </Card>
      )}
    </Container>
  );
}

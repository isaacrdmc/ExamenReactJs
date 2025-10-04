
import { useState } from "react";
import { Card, Container, Form, Button, Spinner } from "react-bootstrap";


// Componente para el buscador y la card:
export default function PokeBody() {
    const [pokemon, setPokemon] = useState(null);
    const [pokemonBuscar, setPokemonBuscar] = useState("");

    //   ? Creamos una constante para realizar la peticion:
    const buscarPokemon = async () => {
        if (!pokemonBuscar) return;

        try {

            // Realizamso la peticion:
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscar}`);

            // Analizamos la respuesta por si no es correcta:
            if (!res.ok) throw new Error("No encontrado");

            // Guardamos la respuesta:
            const data = await res.json();

            // Enviamos la respuesta al estado?
            setPokemon(data);
        } catch (err) {

            console.log(err);

            setPokemon(null);
            alert("Pokémon no encontrado");
        }
    };






    //   ? Retornamos la tarjeta:
    return (
        <div className="container mt-5 text-center">
            <h3 className="fw-bold mb-4">Hzte con todos!</h3>


            {/* // * Creamso un formualrio para buscar el pokmeon */}
            <form
                className="d-flex justify-content-center align-items-center gap-2"
                onSubmit={buscarPokemon}
            >


                {/* Ingresamos el pokemon */}
                <input
                    type="text"
                    placeholder="Ingresa número del Pokémon a bsucar"
                    value={pokemonBuscar}
                    onChange={(e) => setPokemonBuscar(e.target.value)}
                    className="form-control w-25"
                />
                <button type="submit" className="btn btn-primary">
                    Buscar
                </button>
            </form>


            {/* // Mostramos los datos */}
            {pokemon && (
                <div className="card mt-4 mx-auto shadow-sm border-0">
                    
                    {/* // ^ Imagen */}
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="card-img-top bg-light p-3 rounded-top"
                    />


                    <div className="card-body">
                    
                        {/* // * Nombre del pokemon */}
                        <h5 className="card-title text-capitalize fw-semibold">
                            {pokemon.name}
                        </h5>


                        {/* // * Agregamos los demas datos del pokemon */}
                        <p className="card-text mb-0">
                            <b>Altura:</b> {pokemon.height}
                            <br />
                            <b>Peso:</b> {pokemon.weight}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
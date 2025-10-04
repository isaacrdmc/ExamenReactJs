

import { Card, Image } from 'react-bootstrap';


export default function PokeCard(pokemon) {
    return (
        <div className="card mi-card m-2">
            {/* Seccion de la imágen: */}
            <Image
                src={pokemon.sprites?.front_default}
                className="card-img-top"
                alt={pokemon.name}
            />


            {/* Sección del contenido: */}
            <div className="card-Body">
                <h4 className="card-title">{pokemon.nombre}</h4>
                <br />
                <h4 className="card-title">{pokemon.descript}</h4>
            </div>
        </div>
    );
}






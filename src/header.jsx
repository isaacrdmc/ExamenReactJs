



// ^ Vamos a crear componente para el Headder:
export default function PokeHeader(titulo) {
    return (
        <h1>
            <a className="navbar-brand" href="#">
                {titulo.titulo}
            </a>
        </h1>
    )
}

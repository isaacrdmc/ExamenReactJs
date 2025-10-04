



// ^ Vamos a crear componente para el Headder:
export default function PokeHeader(titulo) {
    return (
        <h1>
            <a className="navbar-brand">
                {titulo.titulo}
            </a>
        </h1>
    )
}

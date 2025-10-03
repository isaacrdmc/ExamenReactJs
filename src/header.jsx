



// ^ Vamos a crear componente para el Headder:
export default function PokeHeader(titulo) {
    return (

        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {titulo.titulo}
                </a>
            </div>
        </nav>
    )
}

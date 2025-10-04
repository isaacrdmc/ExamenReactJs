


// ^ AHora vamos a crear un footer para la web:
export default function PokeFooter({sitio, autor}) {
    return (
        <>
        <h1>Footer</h1>
        <footer>
            <ul>El sitio fue creado por {autor}</ul>
            <ul>El recurso oficl para el elavorar el sitio web es de {sitio}</ul>
            
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
        </footer>
        </>
    );
}
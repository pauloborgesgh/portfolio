import { Link } from 'react-router-dom'
import  './header.css'

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <span>Projeto TJ</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Lista">Lista</Link>
                <Link to="/fazerdenuncia">Fazer Denuncia</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/informacao">Informações</Link>
            </nav>
        </header>
    )    
}

export default Header
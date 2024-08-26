import reactLogo from '../../assets/react.svg'
import CartWidget from '../CartWidget'
import './NavBar.css'

function NavBar() {
    return (
        <header>
            <nav>
                
                <ul>
                    <li><div>{reactLogo}</div></li>
                    <li><a href="#">Camisetas</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Conjuntos</a></li>
                    {CartWidget}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
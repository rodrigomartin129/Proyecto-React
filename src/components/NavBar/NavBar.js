import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav> 
            <h2>Vivero Green Life</h2>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/tienda">Productos</a>
                </li>
                <li>
                    <a href="/contacto">Contactanos</a>
                </li>
            </ul>
            <div id="CartWidget">
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar
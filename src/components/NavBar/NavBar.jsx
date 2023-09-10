import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h2>Vivero Green Life</h2>
            </Link>
            
            <nav> 
                <ul>
                    <li>
                        <NavLink to="/categoria/1"> Suculentas </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/2"> Aromáticas </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/3"> Bulbosas </NavLink>
                    </li>
                </ul>
                <div id="CartWidget">
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}
export default NavBar
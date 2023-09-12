import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1>Vivero Green Life</h1>
            </Link>
            
            <nav> 
                <ul>
                    <li>
                        <NavLink to="/categoria/Suculentas"> Suculentas </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/Aromáticas"> Aromáticas </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/Bulbosas"> Bulbosas </NavLink>
                    </li>
                </ul>
            </nav>
                
            <CartWidget />
                
        </header>
    )
}
export default NavBar
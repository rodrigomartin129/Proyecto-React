import carro from './assets/Carro_compras.svg'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {articulosTotales} = useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
                <img className='imgCarro' src={ carro } alt="carro de compras" />   
                {
                    articulosTotales > 0 && <strong> {articulosTotales} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget
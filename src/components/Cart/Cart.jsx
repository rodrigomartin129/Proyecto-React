import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {cart, clear, total , articulosTotales} = useContext(CartContext);

    if(articulosTotales === 0) {
        return (
            <>
                <h2> El carrito se encuentra vacío </h2>
                <Link to="/"> Ver Artículos </Link>
            </>
        )
    }

    return (
        <div>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h3> Monto Total: ${total} </h3>
            <h3> Artículos Totales: {articulosTotales} </h3>
            <button onClick={() => clear()}> Vaciar el carrito </button>
            <Link to="/checkout"> Finalizar la Compra </Link>
        </div>
    )
}

export default Cart
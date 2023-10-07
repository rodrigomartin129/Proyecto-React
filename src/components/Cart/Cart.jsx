import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {cart, clear, total , articulosTotales} = useContext(CartContext);

    if(articulosTotales === 0) {
        return (
            <div className="resumen">
                <h2> El carrito se encuentra vacío </h2>
                <Link to="/"> Ver Artículos </Link>
            </div>
        )
    }

    return (
        <div>
            <div className="tablaCart">
                <h2>Planta</h2>
                <h2>Cantidad</h2>
                <h2>Precio</h2>
                <button onClick={() => clear()}> Vaciar el carrito </button>
            </div>
            <hr />
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <hr />
            <div className="resumen">
                <h2> Monto Total: ${total} </h2>
                <h2> Artículos Totales: {articulosTotales} </h2>
                <Link to="/checkout"> Finalizar la Compra </Link>
                <Link to="/"> Ver Artículos </Link>
            </div>
        </div>
    )
}

export default Cart
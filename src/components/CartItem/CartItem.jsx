import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({item, cantidad}) => {
    const {removeItem} = useContext(CartContext);
    
    return (
        <div className="tablaCart">
            <h4> {item.articulo} </h4>
            <h4> {cantidad} unid.</h4>
            <h4> ${item.precio} </h4>
            <button onClick={() => removeItem(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem
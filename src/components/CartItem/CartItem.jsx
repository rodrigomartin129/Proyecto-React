import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({item, cantidad}) => {
    const {removeItem} = useContext(CartContext);
    
  return (
    <div>
        <h4> {item.articulo} </h4>
        <h4> Cantidad: {cantidad} </h4>
        <h4> Precio: {item.precio} </h4>
        <button onClick={() => removeItem(item.id)}> Eliminar </button>
        <hr />
        
    </div>
  )
}

export default CartItem
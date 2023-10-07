import { useState, createContext } from "react"; 

export const CartContext = createContext({
    cart: [],
    total: 0,
    itemsTotales: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    const [total, setTotal] = useState (0);
    const [articulosTotales, setArticulosTotales] = useState (0);

    const addItem = (item, cantidad) => {
        const itemExistente = cart.find(prod => prod.item.id === item.id);

        if(!itemExistente) {
            setCart( previo => [...previo, {item, cantidad}]);
            setArticulosTotales(previo => previo + cantidad);
            setTotal(previo => previo + item.precio * cantidad);
        } else {
            const cartNow = cart.map(prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod;
                }
            });
            setCart(cartNow);
            setArticulosTotales(previo => previo + cantidad);
            setTotal(previo => previo + item.precio * cantidad);
        }
    }

    const removeItem = (id) => {
        const itemRemoved = cart.find(prod => prod.item.id === id);
        const cartNow = cart.filter(prod => prod.item.id !== id);

        setCart(cartNow);
        setArticulosTotales(previo => previo - itemRemoved.cantidad);
        setTotal(previo => previo - itemRemoved.item.precio * itemRemoved.cantidad);
    }

    const clear = () => {
        setCart([]);
        setArticulosTotales(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{cart, articulosTotales, total, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}


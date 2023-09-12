import React, { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({ inicio, stock }) => {
    const [cantidad, setCantidad] = useState (inicio)

    const incrementar = () => {
        if(cantidad < stock) {
        setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if(cantidad > inicio) {
        setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            <button className="btnContador" onClick={decrementar}> - </button>
            <h4> {cantidad} </h4>
            <button className="btnContador" onClick={incrementar}> + </button>
        </div>
    )
}

export default ItemCount
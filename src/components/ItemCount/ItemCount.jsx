import React, { useState } from 'react'

const ItemCount = ({ inicio, stock}) => {
    const [cantidad, setCantidad] = useState (inicio)

    const incrementar = () => {
        if(cantidad<stock) {
        setCantidad(cantidad+1)
        }
    }

    const decrementar = () => {
        if(cantidad>inicio) {
        setCantidad(cantidad-1)
        }
    }

    return (
    <div>
        <button onClick={decrementar}> - </button>
        <h4> {cantidad} </h4>
        <button onClick={incrementar}> + </button>
    </div>
    )
}

export default ItemCount
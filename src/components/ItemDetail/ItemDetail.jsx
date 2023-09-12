import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({ id, articulo, precio, img, stock, detalle }) => {
  return (
    <div className="contenedorItemDetail">
      <h2>Planta: {articulo} </h2>
      <p className="detalle">{detalle}</p>
      <h5>ID: {id} </h5>
      <img className="imgItemDetail" src={`../../img/${img}`} alt={articulo} />
      <h3 className="precio" >Precio: {precio} </h3>
      <ItemCount inicio={1} stock= {stock} />
    </div>
  )
}

export default ItemDetail

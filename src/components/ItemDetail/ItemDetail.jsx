import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const ItemDetail = ({ id, articulo, precio, img, stock, detalle }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {addItem} = useContext(CartContext);


  const handleCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, articulo, precio};
    addItem(item, cantidad);

  }
  return (
    <div className="contenedorItemDetail">
      <h2>Planta: {articulo} </h2>
      <p className="detalle">{detalle}</p>
      <h4>ID: {id} </h4>
      <img className="imgItemDetail" src={`../../img/${img}`} alt={articulo} />
      <h3 className="precio" >Precio: ${precio} </h3>
      <ItemCount inicio={1} stock= {stock} agregarAlCarrito={handleCantidad}/>
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : ""
      }
      <Link to="/"> Ver Artículos </Link>
    </div>
  )
}

export default ItemDetail

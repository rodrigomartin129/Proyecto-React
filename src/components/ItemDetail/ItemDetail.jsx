import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, articulo, precio, img, stock, detalle }) => {
  return (
    <div>
      <h2>Planta: {articulo} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>{detalle}</p>
      <img src={img} alt={articulo} />
      <ItemCount inicio={1} stock= {stock} />
    </div>
  );
};

export default ItemDetail;

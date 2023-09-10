import React from "react";

const ItemDetail = ({ id, articulo, precio, img, detalle }) => {
  return (
    <div>
      <h2>Planta: {articulo} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>{detalle}</p>
      <img src={img} alt={articulo} />
    </div>
  );
};

export default ItemDetail;

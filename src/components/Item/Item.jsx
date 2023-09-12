import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, articulo, precio, img}) => {
  return (
    <div className='cardItem'>
        <img className='imgItem' src={`../../img/${img}`} alt={articulo} />
        <h3>Planta: {articulo}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`}> Detalles </Link>
    </div>
  )
}

export default Item
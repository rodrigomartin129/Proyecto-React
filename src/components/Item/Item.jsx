import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, articulo, precio, img, stock}) => {
    return (
		<div className='cardItem'>
			<img className='imgItem' src={`../../img/${img}`} alt={articulo} />
			<h3>Planta: {articulo}</h3>
			<p>Precio: {precio}</p>
			<p>Stock: {stock}</p>
			<h5>ID: {id}</h5>
			<Link to={`/item/${id}`} className='detalles'> Detalles </Link>
		</div>
  	)
}

export default Item
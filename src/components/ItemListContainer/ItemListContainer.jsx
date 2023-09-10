import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams ();

    useEffect(() => {

        const funcion = idCategoria ? getProductosPorCategoria : getProductos;
        
        funcion(idCategoria)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    }, [idCategoria])

    // useEffect( () => {
    //     getProductos()
    //         .then(respuesta => setProductos(respuesta))
    //         .catch(error => console.log(error))
    // }, [])

    return (
        <div>
            
            <h2>{ greeting }</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
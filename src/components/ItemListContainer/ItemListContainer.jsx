import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../../services/config";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategoria} = useParams();

    useEffect( ()=> {
        setLoading(true)
        const misArticulos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misArticulos)
            .then(respuesta => {
                const nuevosArticulos = respuesta.docs.map( doc => { 
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProductos(nuevosArticulos);
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            
            <h2>{ greeting }</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
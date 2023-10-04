import { useState, useEffect} from "react"
// import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";



const ItemDetailContainer = () => {
        const [producto, setProducto] = useState([]);

        const { idItem } = useParams();

        useEffect( () => {
            const nuevoDoc = doc(db, "productos", idItem);

            getDoc(nuevoDoc)
                .then(respuesta => {
                    const data = respuesta.data();
                    const nuevoProducto = {id: respuesta.id, ...data}
                    setProducto(nuevoProducto)
                })
                .catch(error => console.log(error))
        }, [idItem])

        // useEffect( () => {
        //     getUnProducto(idItem)
        //         .then(respuesta => setProducto(respuesta))
        // }, [idItem])
        
    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
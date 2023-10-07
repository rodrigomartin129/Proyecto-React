import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';      
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const {cart, articulosTotales, total, clear} = useContext(CartContext);

    const handleForm = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Complete todos los campos por favor");
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden, por favor vuelva a completarlos");
            return;
        }

        const orden = {
            items: cart.map(prod => ({
                id: prod.item.id,
                articulo: prod.item.articulo,
                cantidad: prod.cantidad,
                precio: prod.item.precio 
            })),
            total: total,
            fecha: new Date(),
            estado: "generada",
            cliente: {
                nombre,
                apellido,
                telefono,
                email
            }            
        };

        Promise.all(
            orden.items.map(async (itemOrden) => {
                const itemReferencia = doc(db, "productos", itemOrden.id);
                const itemDoc =await getDoc(itemReferencia);
                const stockActual = itemDoc.data().stock;
                await updateDoc(itemReferencia, {
                    stock: stockActual - itemOrden.cantidad,
                })
            })
        )
            .then (()=> {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        clear();
                    })
                    .catch(error => {
                        console.log("Error cuando se crea la orden", error);
                        setError("Error cuando se crea la orden")
                    })
            })
            .catch(error => {
                console.log("No se puede actualizar el stock", error);
                setError("No se puede actualizar el stock, intente comprar nuevamente más tarde")
            })
    }
    
    return (
        <div className='checkout'>
            <h1>Presupuesto Final</h1>
            <hr />
            <form onSubmit={handleForm}>
                <div className='itemCheckout'>
                    <h2>Cantidad</h2>
                    <h2>Planta</h2>
                    <h2>Precio Unitario</h2>
                </div>
                {
                    cart.map( prod => (
                        <div className='itemCheckout' key={prod.item.id}>
                            <h3>  x {prod.cantidad} </h3>
                            <h3> {prod.item.articulo} </h3>
                            <h3> ${prod.item.precio} </h3>
                        </div>
                    ))                                        
                }
                <hr />
                <h2> Total a pagar: ${total}</h2>
                <h2> Estás por comprar {articulosTotales} articulos </h2>
                <hr />

                <div className='inputsFormulario'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                </div>

                <div className='inputsFormulario'>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
                </div>

                <div className='inputsFormulario'>
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>
                </div>

                <div className='inputsFormulario'>
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className='inputsFormulario'>
                    <label htmlFor="">Email Confirmación</label>
                    <input type="text" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
                </div>

                {
                    error && <p style={{fontWeight: 800, fontStyle:"italic", color:"red"}}> {error} </p> 
                }
                
                <button type='submit'> Confirmar Compra </button>

            </form>
            {
                ordenId && ( <strong className='confirmaOrden'>Gracias por tu compra. Tu número de orden es {ordenId} </strong> )
            }
        </div>
    )
}

export default Checkout

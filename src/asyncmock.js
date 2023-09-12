const listaProductos = [
    {id:"1", articulo: "Gladiolo", precio: 400, img: "gladiolo.jpg", idCat: "Suculentas", stock: 10, detalle: "El Gladiolo es un bulbo perenne de la familia Iridaceae. Su origen se encuentra en las zonas cálidas del sur de África y Europa, así como de Oriente Próximo. Hay numerosas especies nativas y tiene la capacidad de crecer de forma espontánea en la propia naturaleza."}, 
    {id:"2", articulo: "Clivia", precio: 500, img: "clivia.jpg", idCat: "Bulbosas", stock: 3, detalle: "Una bonita planta con flores anaranjadas que despiertan el entusiasmo del jardín y hacen que el entorno se llene de calidez y felicidad. Requiere un cuidado especial, mucha agua y prestarle cierta atención periódica para que no se seque, pero resiste muy bien el sol."}, 
    {id:"3", articulo: "Clavelina", precio: 300, img: "clavelina.jpg", idCat: "Aromáticas", stock: 12, detalle: "Esta planta es capaz de crecer en zonas frías si está protegida aunque prefiere los climas más cálidos. Su lugar, una buena ubicación luminosa y soleada. Sus maravillosas flores rojizas alegrarán tu jardín en verano. Riega con moderación y abona cada 15 días para aportarle los nutrientes que necesita. Para evitar plagas, quita las flores marchitas que atraen a los insectos."}, 
    {id:"4", articulo: "Dalia", precio: 600, img: "dalia.jpg", idCat: "Suculentas", stock: 8, detalle: "Esta curiosa especie tiene más de dos mil variedades en función de la flor. Así pues, tienes múltiples opciones para llenar tu terraza o jardín con ellas, siempre y cuando reciban una buena cantidad de luz. Se reproduce a través de bulbos y la mejor época para cultivarla es la primavera (cuando ya apenas hay heladas, tan dañinas para esta flor). Conviene ubicarla en un lugar soleado pero sin recibirlo de forma directa, fuera de corrientes de aire y necesita mantener siempre el suelo húmedo para un crecimiento óptimo. Para que la planta crezca con mayor vigor, retira las hojas secas siempre que salgan."}, 
    {id:"5", articulo: "Margarita blanca", precio: 200, img: "margarita blanca.jpg", idCat: "Aromáticas", stock: 5, detalle: "Esta maravillosa especie aporta mucha alegría en cualquier lugar. Es muy resistente y necesita pocos cuidados. Al principio de su plantación requerirá de un riego más abundante; por eso, las macetas con autorriego pueden ser una buena opción. Después y durante el verano, de dos a tres veces a la semana y una vez cada 15 días en invierno. Adoran el sol y para que crezca sin problemas tiene que tener un buen drenaje en la maceta, pues esta planta se ahoga con el estancamiento del agua. De todas formas, es importante que conozcas los cuidados de las margaritas para tenerlas siempre bonitas."},
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout( () => {
            resolve(listaProductos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = listaProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
} 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => { 
        setTimeout( () => {
            const productosCategoria = listaProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 2000)
    })
}
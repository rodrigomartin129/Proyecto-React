import carro from './assets/Carro_compras.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className='imgCarro' src={ carro } alt="carro de compras" />
            <strong> 0 </strong>
        </div>
    )
}

export default CartWidget
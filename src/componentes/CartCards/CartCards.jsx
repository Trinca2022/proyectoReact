import { useCartContext } from '../../context/CartContext'
import './CartCard.css';

export const CartCards = () => {
    const { cartList, removeProduct, totalPrice } = useCartContext()

    return (
        <>
            {(cartList.length <= 0) ? <h1>Tu carrito está vacío</h1>
                :
                cartList.map(product => (
                    <div className="cardCart" key={product.id}>
                        <img src={product.photo} className="imgCardCart" />
                        <div className='textCardCart'>Producto: {product.name} - Cantidad: {product.quantity} - Precio total por unidades de {product.name}: ${product.price * product.quantity}
                            <button className="btn btn-danger buttonCardCart" onClick={() => removeProduct(product.id)}>x</button></div>

                    </div>
                ))
            }

            <h3>{totalPrice() !== 0 && `Precio total a pagar: $${totalPrice()}`}</h3>
        </>
    )
}



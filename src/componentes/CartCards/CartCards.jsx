import React from 'react'
import { useCartContext } from '../../context/CartContext'




export const CartCards = () => {
    const { cartList, removeCart, removeProduct, totalPrice } = useCartContext()

    return (
        <>

            {(cartList.length <= 0) ? <h1>Tu carrito está vacío</h1>
                :
                cartList.map(product => (
                    <div key={product.id}>
                        <img src={product.photo} className="w-25" />
                        Producto: {product.name} - Cantidad: {product.quantity} - Precio total por unidades de {product.name}: ${product.price * product.quantity}
                        <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>x</button>
                    </div>
                ))


            }

            <h3>{totalPrice() !== 0 && `Precio total a pagar: $${totalPrice()}`}</h3>



        </>
    )
}



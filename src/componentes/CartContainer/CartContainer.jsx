
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { cartList, removeCart, removeProduct, totalPrice } = useCartContext()
    //console.log(cartList)



    return (
        <>

            {(cartList.length <= 0) ? <h1>Tu carrito está vacío</h1>
                :
                cartList.map(product => (
                    <div key={product.id}>
                        <img src={product.photo} className="w-25" />
                        Nombre: {product.name} - Cantidad: {product.quantity} - Precio total por unidades: ${product.price * product.quantity}
                        <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>x</button>
                    </div>
                ))
            }
            <p>{totalPrice() !== 0 && `El precio total es: ${totalPrice()}`}</p>
            <div>{cartList.length >= 1 &&
                <button className="btn btn-primary" onClick={removeCart}>Vaciar carrito</button>
            }
            </div>





        </>
    )
}


export default CartContainer

//<p>{cartList.length >= 1 && totalPrice() !== 0 && `El precio Total es: ${importeCompra}`}</p>
/**/
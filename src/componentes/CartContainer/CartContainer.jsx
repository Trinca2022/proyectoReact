import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { cartList, removeCart } = useCartContext()
    console.log(cartList)

    const cardCart = () => {

    }

    return (
        <div>
            {cartList.map(product => (
                <div key={product.id}>
                    <img src={product.photo} className="w-25" />
                    Nombre: {product.name} - Cantidad: {product.quantity} - Precio: {product.price}
                </div>
            ))}
            < button className="btn btn-primary" onClick={removeCart}>Vaciar carrito</button>


        </div >
    )
}


export default CartContainer
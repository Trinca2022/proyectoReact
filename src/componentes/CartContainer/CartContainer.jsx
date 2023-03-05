import { useCartContext } from "../../context/CartContext"
import { CartCards } from "../CartCards/CartCards"
import { CartForm } from "../CartForm/CartForm"

const CartContainer = () => {
    const { cartList } = useCartContext()

    return (
        <>

            {(cartList.length <= 0) ? <h1>Tu carrito está vacío</h1>
                :
                <div><CartCards />
                    <CartForm /></div>

            }
        </>
    )
}

export default CartContainer


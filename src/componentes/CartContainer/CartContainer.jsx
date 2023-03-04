
import { useCartContext } from "../../context/CartContext"
import { CartCards } from "../Cart/Cart"


const CartContainer = () => {
    const { cartList } = useCartContext()


    return (
        <>

            {(cartList.length <= 0) ? <h1>Tu carrito está vacío</h1>
                :
                <CartCards />}
        </>
    )
}


export default CartContainer


import { useCartContext } from "../../context/CartContext"



const CartWidget = () => {
    const { totalQuantity } = useCartContext()

    return (
        <>
            <div>🛒{totalQuantity}</div>


        </>
    )

}
export default CartWidget

//{totalQuantity !== 0 && totalQuantity}
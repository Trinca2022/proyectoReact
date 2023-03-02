import { useEffect, useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'

const CartContainer = () => {
    const { cartList, removeProducts, removeCart } = useCartContext()
    console.log(cartList)
    const [products, setProducts] = useState([])


    useEffect(() => {
        const db = getFirestore()
        const queryCollections = collection(db, 'products')
        getDocs(queryCollections)
            .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        console.log("productos:")
        products.map((p) => console.log(p))
    }, [products])

    return (
        (Object.entries(cartList).filter(([id, q]) => q > 0).length <= 0) ? <h1>Carrito vacío</h1> :
            <div>
                {Object.entries(cartList).filter(([id, q]) => q > 0).map(([id, q]) =>
                    <div key={id} >
                        <img src={products.find(e => e.id === id)?.photo} className="w-25" />
                        Nombre: {products.find(e => e.id === id)?.name} - Cantidad: {q} - Precio: {products.find(e => e.id === id)?.price}
                        <button className="btn btn-danger" onClick={() => removeProducts(id)}> X </button>
                    </div>

                )}
                <button className="btn btn-primary" onClick={removeCart}>Vaciar carrito</button>
            </div >

    )
}


export default CartContainer
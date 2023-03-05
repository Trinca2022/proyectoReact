import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

export const CartForm = () => {

    const [idOrder, setIdOrder] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repetirEmail: ''
    })

    const { cartList, removeCart, totalPrice } = useCartContext()



    const addOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.isActive = true
        order.items = cartList.map(({ id, name, quantity }) => ({ id, name, quantity }))
        order.total = totalPrice()


        //Traigo Firestore
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')

        //QUIERO CAPTAR EL ID DE LA ORDEN CUANDO SE EJECUTA
        useEffect(() => {
            const query = doc(db, 'orders', idOrder)
            getDoc(query)
                .then(resp => setIdOrder({ id: resp.id }))
                .catch(error => setIdOrder(error))
                .finally(() => setIdOrder(false))
            console.log(idOrder)
        }, [formData])


        addDoc(ordersCollection, order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() => {
                removeCart()
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    repetirEmail: ''
                })
            })


    }

    const handleOnChange = (evt) => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (

        <div>


            <form onSubmit={addOrder} >
                <input
                    type="text"
                    name="name"
                    placeholder="Ingrese el nombre"
                    onChange={handleOnChange}
                    value={formData.name}

                /><br />
                <input
                    type="text"
                    name="phone"
                    placeholder="Ingrese el teléfono"
                    onChange={handleOnChange}
                    value={formData.phone}

                /><br />
                <input
                    type="mail"
                    name="email"
                    placeholder="Ingrese el email"
                    onChange={handleOnChange}
                    value={formData.email}

                /><br />
                <input
                    type="mail"
                    name="repetirEmail"
                    placeholder="Repetir el email"
                    onChange={handleOnChange}
                    value={formData.repetirEmail}

                /><br />

                <Link to={`/Purchase/${idOrder}`}> <button onClick={removeCart} className="btn btn-outline-success" type="submit">Confirmar compra</button></Link>
            </form>

            <button className="btn btn-outline-danger" onClick={removeCart}>Vaciar Carrito</button>
        </div>
    )
}



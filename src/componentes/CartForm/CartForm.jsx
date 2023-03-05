import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom";

export const CartForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repetirEmail: ''
    })

    const [error, setError] = useState()

    const { cartList, removeCart, totalPrice } = useCartContext()

    //Función que crea la orden de compra y maneja los condicionales para errores en el formulario
    const handleConfirm = (event) => {
        event.preventDefault()
        const nameIsValid = formData.name.length > 0
        const phoneIsValid = formData.phone.length > 0
        const emailIsValid = formData.email.length > 0
        const repetirEmailIsValid = formData.repetirEmail === formData.email

        if (!nameIsValid) {
            alert('El nombre no puede estar vacío')
            return false
        }
        if (!phoneIsValid) {
            alert('El teléfono no puede estar vacío')
            return false
        }
        if (!emailIsValid) {
            alert('El email no puede estar vacío')
            return false
        }
        if (!repetirEmailIsValid) {
            alert('El email no coincide')
            return false
        }
        const order = {}
        order.buyer = formData
        order.isActive = true
        order.items = cartList.map(({ id, name, quantity }) => ({ id, name, quantity }))
        order.total = totalPrice()

        //Traigo Firestore
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')

        //Envía la orden con los datos completos a firebase
        addDoc(ordersCollection, order)
            .then(resp => {
                removeCart()
                navigate(`/Purchase/${resp.id}`)
            })
            .catch(err => setError(err.toString()))
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleConfirm} >
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
                <button className="btn btn-outline-success" type="submit">Confirmar compra</button>

                <button className="btn btn-outline-danger" onClick={removeCart}>Vaciar Carrito</button>
            </form>
            {error ? <p>{error}</p>
                : null}
        </div>
    )
}


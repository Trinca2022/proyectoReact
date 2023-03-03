import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    /*useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cartList])*/

    //Agregar al carrito
    const cartAdd = (newProduct) => {
        const prodInCart = cartList.find(product => product.id === newProduct.id)
        if (prodInCart) {
            prodInCart.quantity += newProduct.quantity
            prodInCart.price += newProduct.price * newProduct.quantity
        }
        else {
            setCartList([...cartList, newProduct])
        }
    }

    //Eliminar todo el carrito
    const removeCart = () => {
        setCartList([])
    }

    //Eliminar por idProducto: genera nuevo array y setea el estado con ese array
    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))


    //Importe total
    const totalPrice = () => cartList.reduce((count, product) => count += (product.price), 0)

    //const totalQuantity = () => cartList.reduce((count, product) => count += (product.quantity), 0)

    //Cantidad total de ítems en carrito (objetos) de mi array
    //const totalQty = getQuantity()
    const getQuantity = () => {
        let totalQuantity = 0;
        cartList.forEach(product => {
            totalQuantity += product.quantity
        })
        return totalQuantity
    }

    return (
        <CartContext.Provider value={{
            cartList,
            cartAdd,
            removeCart,
            removeProduct,
            totalPrice,
            totalQuantity,
            getQuantity
        }}>
            {children}

        </CartContext.Provider >

    )
}
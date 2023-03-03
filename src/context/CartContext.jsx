import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

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

    //Eliminar por idProducto
    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))


    //Importe total
    const totalPrice = () => cartList.reduce((count, product) => count += (product.price), 0)

    const totalQuantity = () => cartList.reduce((count, product) => count += (product.quantity), 0)





    return (
        <CartContext.Provider value={{
            cartList,
            cartAdd,
            removeCart,
            removeProduct,
            totalPrice,
            totalQuantity
        }}>
            {children}

        </CartContext.Provider >

    )
}
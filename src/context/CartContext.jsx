import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const cartAdd = (newProduct) => {
        setCartList([...cartList, newProduct])
    }




    return (
        <CartContext.Provider value={{
            cartList,
            cartAdd


        }}>
            {children}

        </CartContext.Provider >

    )
}
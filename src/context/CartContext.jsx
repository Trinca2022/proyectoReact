import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState({})
    //const [selectProducts, setSelectProducts] = useState([])

    const cartAdd = (id, q) => {
        const nq = (id in cartList) ? cartList[id] + q : q
        setCartList({ ...cartList, [id]: nq })
    }

    const removeCart = () => {
        setCartList({})
    }

    //acá generar una función para eliminar producto por !==ID
    const removeProducts = (id) => {
        //const {[id], ...cartList } = newCart
        setCartList({ ...cartList, [id]: 0 })
    }

    //acá generar una función para unificar productos según su ID

    //Generar que nro de ícono carrito vaya cambiando según count y context


    return (
        <CartContext.Provider value={{
            cartList,
            cartAdd,
            removeProducts,
            removeCart,

        }}>
            {children}

        </CartContext.Provider >

    )
}
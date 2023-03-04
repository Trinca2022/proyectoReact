import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    //Agregar al carrito
    const cartAdd = (newProduct) => {
        setCartList((prevCartList) => {
            const prodInCart = prevCartList.find(
                (product) => product.id === newProduct.id
            );
            if (prodInCart) {
                prodInCart.quantity += newProduct.quantity;
                return [...prevCartList];
            } else {
                return [...prevCartList, newProduct];
            }
        });
    };

    //Eliminar todo el carrito
    const removeCart = () => {
        setCartList([]);
    };

    //Eliminar por idProducto: genera nuevo array y setea el estado con ese array
    const removeProduct = (id) =>
        setCartList(cartList.filter((prod) => prod.id !== id));

    //Importe total
    const totalPrice = () =>
        cartList.reduce((count, product) => (count += product.price * product.quantity), 0);

    //Cantidad total de ítems en carrito (objetos) de mi array
    const getQuantity = () => {
        let totalQuantity = 0;
        cartList.forEach((product) => {
            totalQuantity += product.quantity;
        });
        return totalQuantity;
    };

    useEffect(() => {
        const totalQty = getQuantity();
        setTotalQuantity(totalQty);
    }, [cartList]);

    return (
        <CartContext.Provider
            value={{
                cartList,
                cartAdd,
                removeCart,
                removeProduct,
                totalPrice,
                totalQuantity,
            }}>
            {children}
        </CartContext.Provider>
    );
};


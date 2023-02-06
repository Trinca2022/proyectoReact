import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    const { idProducto } = useParams()

    console.log(idProducto)
    useEffect(() => {
        gFetch()
            .then(res => {
                setProductos(res.filter(producto => producto.id === idProducto))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, [])

    return (
        <>

            <div>
                {productos.map(producto => <div key={producto.id}>{producto.nombre}</div>)}
            </div>
        </>
    )
}

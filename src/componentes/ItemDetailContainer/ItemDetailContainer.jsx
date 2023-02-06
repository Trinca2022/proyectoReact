import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

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
                {loading ? <h2 className=''>Cargando...</h2>
                    :

                    productos.map(producto =>
                        <div key={producto.id} className='card w-25 mt-2'>
                            <div className='card-header'>
                                Nombre: {producto.nombre}
                            </div>
                            <div className='card-body'>
                                <img src={producto.foto} alt='foto' className="w-100" />
                            </div>
                            <div className='card-footer'>
                                Precio: {producto.precio}
                            </div>
                            <button className="btn btn-outline-primary w-100">Añadir al carrito</button>



                        </div>)}


            </div>
        </>
    )
}

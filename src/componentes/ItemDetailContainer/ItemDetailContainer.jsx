import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemDetail from '../ItemDetail/Itemdetail'


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { idProducto } = useParams()
    // console.log(idProducto)

    useEffect(() => {
        gFetch(idProducto)
            .then(res => setProducto(res))
            .catch(error => setProducto(error))
    }, [])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

/*export default ItemDetailContainer*/

/*{loading ? <h2 className=''>Cargando...</h2>
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



                        </div>*/
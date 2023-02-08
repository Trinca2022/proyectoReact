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

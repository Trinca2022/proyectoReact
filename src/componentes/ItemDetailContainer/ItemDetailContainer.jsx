import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemDetail from '../ItemDetail/Itemdetail'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()

    useEffect(() => {
        gFetch(idProduct)
            .then(res => setProduct(res))
            .catch(error => setProduct(error))
    }, [])

    return (
        <div className='w-100'>
            <ItemDetail product={product} />
        </div>
    )
}

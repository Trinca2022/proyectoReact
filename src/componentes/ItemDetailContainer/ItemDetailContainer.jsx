import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemDetail from '../ItemDetail/Itemdetail'
import Loading from '../Loading/Loading'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    useEffect(() => {
        gFetch(idProduct)
            .then(res => setProduct(res))
            .catch(error => setProduct(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='w-100'>
            {loading ? <Loading /> :



                <ItemDetail product={product} />
            }
        </div>
    )
}

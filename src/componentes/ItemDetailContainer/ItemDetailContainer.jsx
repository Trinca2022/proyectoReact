import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import { gFetch } from '../../utils/gFetch'
import ItemDetail from '../ItemDetail/Itemdetail'
import Loading from '../Loading/Loading'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const query = doc(db, 'products', idProduct)
        getDoc(query)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
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


/*gfetch DETALLE
useEffect(() => {
    gFetch(idProduct)
        .then(res => setProduct(res))
        .catch(error => setProduct(error))
        .finally(() => setLoading(false))
}, [])*/
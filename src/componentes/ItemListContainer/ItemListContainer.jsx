import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    //Traigo productos de base de datos - simplifico código
    useEffect(() => {
        const db = getFirestore()
        const queryCollections = collection(db, 'products')
        const queryFilter = idCategory ? query(queryCollections, where('category', '==', idCategory)) : queryCollections

        getDocs(queryFilter)
            .then(resp => { setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))) })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [idCategory])

    return (
        <div className="divContainerList">
            {loading ? <Loading />
                :
                <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer


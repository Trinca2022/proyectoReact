import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import { gFetch } from "../../utils/gFetch"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollections = collection(db, 'products')
        if (idCategory) {
            const queryFilter = query(
                queryCollections,
                where('category', '==', 'idCategory'))
            getDocs(queryFilter)
                .then(resp => { setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))) })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        }
        else {
            getDocs(queryCollections)
                .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        }
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

//TRAE UNO SOLO --> ESTO VA EN DETAIL acá usar idProduct !!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*useEffect(() => {
    const db = getFirestore()
    const query = doc(db, 'products', 'N7P73PbzX0kAGUSpovRR')
    getDoc(query)
        .then(resp => setProduct({ id: resp.id, ...resp.data() }))
}, [])*/

    //TRAE UNA COLECCIÓN
/*useEffect(() => {
    const db = getFirestore()
    const queryCollections = collection(db, 'products')
    getDocs(queryCollections)
        .then(resp => console.log(resp))

}, [])*/

/*//TRAE FILTRADO POR IDCATEGORY
const queryFilter = query(
    queryCollections,
    where('category', '==', 'idCategory'))
getDocs(queryFilter)
    .then(resp => { setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))) })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    
    gfetch FILTRADO
     /*gFetch()
            .then(res => {
                setProducts(res.filter(product => product.category === idCategory))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
            
    gfetch TODO
                /*gFetch()
            .then(res => {
                setProducts(res)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))*/


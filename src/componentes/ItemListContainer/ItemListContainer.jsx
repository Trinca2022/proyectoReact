import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    // Use effect sirve para ejecutar algo si y solo si, cambia alguna de las variables en el segundo parametro
    // Si el segundo parametro es un array vacio, se ejecuta una sola vez
    useEffect(() => {
        if (idCategory) {
            gFetch()
                .then(res => {
                    setProducts(res.filter(product => product.category === idCategory))
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))

        }

        else {
            gFetch()
                .then(res => {
                    setProducts(res)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [idCategory])

    console.log(products)
    console.log(idCategory)

    return (
        <div className="divContainerList">
            {loading ? <h2>Cargando...</h2>
                :
                <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer


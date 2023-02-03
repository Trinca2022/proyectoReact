
import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory) {
            gFetch()
                .then(res => {
                    setProductos(res.filter(producto => producto.categoria === idCategory))
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))

        }

        else {
            gFetch()
                .then(res => {
                    setProductos(res)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [idCategory])

    console.log(productos)
    console.log(idCategory)

    return (
        <>

            <div className="divContainerList" id="lista">
                {loading ? <h2>Cargando...</h2>
                    :

                    productos.map(({ id, nombre, foto, precio }) => <div key={id} className='card'>
                        <div className='card-header'>
                            Nombre: {nombre}
                        </div>
                        <div className='card-body'>
                            <img src={foto} alt='foto' className="w-100"></img>
                        </div>
                        <div className='card-footer'>
                            Precio: {precio}<br />
                            <Link to={`/ItemDetail/${id}`}>
                                <button className="btn btn-outline-primary w-100">Ver producto</button>
                            </Link>
                        </div>
                    </div>
                    )}
            </div>
        </>
    )
}

export default ItemListContainer

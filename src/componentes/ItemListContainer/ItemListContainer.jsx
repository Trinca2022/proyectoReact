
import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gFetch()
            .then(res => {
                setProductos(res)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    console.log(productos)

    return (
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
                        <button className="btn btn-outline-primary w-100">Ver producto</button>
                    </div>
                </div>
                )}
        </div>)
}

export default ItemListContainer

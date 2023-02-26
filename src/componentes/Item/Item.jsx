import { Link } from 'react-router-dom'
import React from 'react'

const Item = ({ producto }) => {
    return (

        <div className='card w-40 mt-2' >
            <div className='card-header'>
                {producto.nombre}
            </div>
            <div className='card-body'>
                <img src={producto.foto} alt='foto' className="w-100"></img>
            </div>
            <div className='card-footer'>
                Precio: ${producto.precio}<br />
                <Link to={`/ItemDetail/${producto.id}`}>
                    <button className="btn btn-outline-primary w-100">Ver producto</button>
                </Link>
            </div>
        </div>

    )
}

export default Item
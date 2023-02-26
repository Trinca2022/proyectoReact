import { Link } from 'react-router-dom'
import React from 'react'

const Item = ({ product }) => {
    return (

        <div className='card w-40 mt-2' >
            <div className='card-header'>
                {product.name}
            </div>
            <div className='card-body'>
                <img src={product.photo} alt='foto' className="w-100"></img>
            </div>
            <div className='card-footer'>
                Precio: ${product.price}<br />
                <Link to={`/ItemDetail/${product.id}`}>
                    <button className="btn btn-outline-primary w-100">Ver product</button>
                </Link>
            </div>
        </div>

    )
}

export default Item
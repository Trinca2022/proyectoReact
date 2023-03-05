import { Link } from 'react-router-dom'
import React, { memo } from 'react'
import './Item.css'

const Item = memo(({ product }) => {
    return (

        <div className='card' >
            <div className='card-header'>
                {product.name}
            </div>
            <div className='card-body'>
                <img src={product.photo} alt='foto' className="w-100"></img>
            </div>
            <div className='card-footer'>
                Precio: ${product.price}<br />
                <Link to={`/ItemDetail/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Ver producto</button>
                </Link>
            </div>
        </div>

    )
}
)
export default Item
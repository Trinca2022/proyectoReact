import React from 'react'

const ItemDetail = ({ producto }) => {
    return (
        <div>
            <div className='card-header'>
                Nombre: {producto.nombre}
            </div>
            <div className='card-body'>
                <img src={producto.foto} alt='foto' className="w-100" />
            </div>
            <div className='card-footer'>
                Precio: {producto.precio}
            </div>
            <button className="btn btn-outline-primary w-100">Añadir al carrito</button>
        </div>
    )
}

export default ItemDetail
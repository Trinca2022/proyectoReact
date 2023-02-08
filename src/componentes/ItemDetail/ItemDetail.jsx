import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto }) => {

    const onAdd = (cant) => {
        console.log(cant)
    }

    return (

        <div className='card w-40 mt-2' >
            <div className='card-header'>
                {producto.nombre}
            </div>
            <div className='card-body'>
                <img src={producto.foto} alt='foto' className="w-100" /><br />
                {producto.descripcion}
            </div>
            <div className='card-footer'>
                Precio: ${producto.precio}
            </div>
            <button className="btn btn-outline-primary w-100">Añadir al carrito</button>
            <ItemCount onAdd={onAdd} />
        </div>

    )
}

export default ItemDetail
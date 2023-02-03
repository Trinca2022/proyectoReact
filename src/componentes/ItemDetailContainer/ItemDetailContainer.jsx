import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const { idProducto } = useParams()
    console.log(idProducto)

    return (
        <div>ItemDetailContainer</div>
    )
}
